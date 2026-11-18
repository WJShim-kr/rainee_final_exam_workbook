(() => {
  "use strict";

  const DATA = window.WORKBOOK_DATA;
  if (!DATA || !Array.isArray(DATA.lessons)) {
    document.body.innerHTML = '<p style="padding:20px">워크북 데이터를 불러오지 못했습니다.</p>';
    return;
  }

  const STORAGE_KEY = "rainee_final_exam_workbook_v1";
  let store = loadStore();
  let currentGroup = "textbook";
  let currentLessonId = firstLessonId(currentGroup);

  const lessonList = document.querySelector("#lessonList");
  const lessonRoot = document.querySelector("#lessonRoot");
  const toast = document.querySelector("#toast");
  const groupButtons = [...document.querySelectorAll(".group-btn")];

  function loadStore() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{"lessons":{},"check":{}}');
    } catch {
      return {lessons:{},check:{}};
    }
  }

  function saveStore() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  }

  function lessonState(id) {
    if (!store.lessons[id]) store.lessons[id] = {};
    return store.lessons[id];
  }

  function firstLessonId(group) {
    const found = DATA.lessons.filter(x => x.group === group).sort((a,b)=>a.order-b.order)[0];
    return found ? found.id : null;
  }

  function normalize(value) {
    return String(value ?? "")
      .normalize("NFKC")
      .replace(/[’‘]/g, "'")
      .toLowerCase()
      .replace(/[.,!?;:"“”()\[\]{}]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function isCorrect(value, answer) {
    return normalize(value) === normalize(answer);
  }

  function esc(value) {
    return String(value ?? "")
      .replace(/&/g,"&amp;")
      .replace(/</g,"&lt;")
      .replace(/>/g,"&gt;")
      .replace(/"/g,"&quot;")
      .replace(/'/g,"&#039;");
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(showToast.t);
    showToast.t = setTimeout(()=>toast.classList.remove("show"), 1500);
  }

  function progressInfo(lesson) {
    const s = lessonState(lesson.id);
    if (lesson.template === "unitCheck") {
      const ids = (lesson.checkItems || []).map(q => "unit:"+q.id);
      const done = ids.filter(k => s[k]?.done).length;
      return {done,total:ids.length,pct:ids.length ? Math.round(done/ids.length*100) : 0};
    }
    const ids = [
      ...(lesson.inputs || []).map(q => "input:"+q.id),
      ...((lesson.dissect && lesson.dissect.fields) || []).map((_,i) => "dissect:"+i),
      "rebuild",
      "transform",
      "original"
    ];
    const done = ids.filter(k => s[k]?.done).length;
    return {done,total:ids.length,pct:ids.length ? Math.round(done/ids.length*100) : 0};
  }

  function renderLessonList() {
    if (currentGroup === "check") {
      lessonList.innerHTML = '<div class="empty">종합 체크 모드</div>';
      return;
    }
    const lessons = DATA.lessons.filter(x=>x.group===currentGroup).sort((a,b)=>a.order-b.order);
    let lastSection = null;
    lessonList.innerHTML = lessons.map(l => {
      const p = progressInfo(l);
      const section = l.section || "";
      const heading = section && section !== lastSection
        ? '<div class="lesson-section">'+esc(section)+'</div>'
        : '';
      lastSection = section || lastSection;
      return heading + '<button class="lesson-btn '+(l.id===currentLessonId?'active':'')+'" data-lesson="'+esc(l.id)+'">'+
        esc(l.nav)+'<span class="mini">'+esc(l.density||"")+(l.density?' · ':'')+p.done+' / '+p.total+' · '+p.pct+'%</span></button>';
    }).join("");
    document.querySelectorAll(".lesson-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        currentLessonId = btn.dataset.lesson;
        renderLessonList();
        renderCurrent();
        window.scrollTo({top:0,behavior:"smooth"});
      });
    });
  }

  function setGroup(group) {
    currentGroup = group;
    groupButtons.forEach(b=>b.classList.toggle("active", b.dataset.group===group));
    if (group !== "check") currentLessonId = firstLessonId(group);
    renderLessonList();
    renderCurrent();
  }

  groupButtons.forEach(btn => {
    btn.addEventListener("click", () => setGroup(btn.dataset.group));
  });

  document.querySelector("#resetAll").addEventListener("click", () => {
    if (!confirm("모든 강의 답안·진행률·종합 체크 기록을 초기화할까요?")) return;
    store = {lessons:{},check:{}};
    saveStore();
    renderLessonList();
    renderCurrent();
    showToast("전체 기록을 초기화했습니다.");
  });

  function renderCurrent() {
    if (currentGroup === "check") {
      renderComprehensive();
      return;
    }
    const lesson = DATA.lessons.find(x=>x.id===currentLessonId);
    if (!lesson) {
      lessonRoot.innerHTML = '<div class="empty">선택된 지문이 없습니다.</div>';
      return;
    }
    if (lesson.template === "unitCheck") {
      renderUnitCheck(lesson);
      return;
    }
    const p = progressInfo(lesson);
    lessonRoot.innerHTML = lessonTemplate(lesson,p);
    bindLesson(lesson);
  }

  function stageHead(n,title) {
    return '<div class="stage-title"><span class="stage-num">'+n+'</span><h3>'+title+'</h3></div>';
  }

  function lessonTemplate(l,p) {
    const s = lessonState(l.id);
    const stageLinks = [
      ["flow","내용 흐름"],["quotes","핵심 문장"],["grammar","어법"],["inputs","직접 입력"],
      ["dissect","문장 해부"],["rebuild","재조립"],["transform","변형"],["original","원래 유형"]
    ];
    return `
      <section class="lesson-head">
        <div class="head-row">
          <div>
            <div class="kicker">
              <span class="pill">${esc(l.nav)}</span>
              <span class="pill source">${esc(l.source)}</span>
              <span class="pill source">${esc(l.type)}</span>
            </div>
            <h2>${esc(l.title)}</h2>
            <div class="meta">원문 전체는 교재/프린트에서 읽고, 이 페이지에서는 핵심 구조와 적용만 연습합니다.</div>
          </div>
          <div class="progress-box">
            <div class="progress-label"><span>진행률</span><b id="progressText">${p.done} / ${p.total} · ${p.pct}%</b></div>
            <div class="progress-track"><div id="progressFill" class="progress-fill" style="width:${p.pct}%"></div></div>
          </div>
        </div>
        <div class="stage-jump">${stageLinks.map(x=>'<a href="#'+x[0]+'">'+x[1]+'</a>').join("")}</div>
      </section>

      <section id="flow" class="stage">
        ${stageHead(1,"내용 흐름")}
        <div class="flow">${l.flow.map(x=>'<div class="flow-step">'+esc(x)+'</div>').join("")}</div>
        <div class="one-line"><b>수업 한 줄</b><br>${esc(l.oneLine)}<br><code>${esc(l.keyExpr)}</code></div>
      </section>

      <section id="quotes" class="stage">
        ${stageHead(2,"핵심 문장")}
        ${l.quotes.map(q=>`
          <div class="quote-card">
            <div class="source-tag">실제 원문 발췌 · ${esc(q.src)}</div>
            <div class="quote-en">${esc(q.en)}</div>
            <div class="quote-ko">${esc(q.ko)}</div>
            <div class="why"><b>시험 가치:</b> ${esc(q.why)}</div>
          </div>`).join("")}
      </section>

      <section id="grammar" class="stage">
        ${stageHead(3,"오늘의 어법 미니레슨")}
        <div class="lesson-box"><b>${esc(l.grammar.title)}</b><div style="margin-top:6px">${esc(l.grammar.body)}</div></div>
        <div class="teacher-cue"><b>수업 포인트</b> · ${esc(l.grammar.cue)}</div>
      </section>

      <section id="inputs" class="stage">
        ${stageHead(4,"직접 입력 문제")}
        ${l.inputs.map(q=>inputCard(l,q,s)).join("")}
      </section>

      <section id="dissect" class="stage">
        ${stageHead(5,"문장 해부")}
        <div class="quote-card">
          <div class="source-tag">분석 문장 · 실제 원문</div>
          <div class="quote-en">${esc(l.dissect.sentence)}</div>
        </div>
        <div class="dissect-grid">
          ${l.dissect.fields.map((f,i)=>dissectField(l,f,i,s)).join("")}
        </div>
        <button id="gradeDissect" class="primary-btn" type="button" style="margin-top:10px">문장 해부 전체 채점</button>
      </section>

      <section id="rebuild" class="stage">
        ${stageHead(6,"서술형 재조립")}
        <div class="qtitle">우리말: ${esc(l.rebuild.ko)}</div>
        <div class="bank">${l.rebuild.bank.map(x=>'<span class="chunk">'+esc(x)+'</span>').join("")}</div>
        ${rebuildCard(l,s)}
      </section>

      <section id="transform" class="stage">
        ${stageHead(7,"실전 변형문제")}
        <span class="generated">${esc(l.transform.badge)}</span>
        <div class="qtitle">${esc(l.transform.question)}</div>
        <div class="options" id="transformOptions">
          ${l.transform.options.map((o,i)=>transformOption(l,o,i,s)).join("")}
        </div>
        <div id="transformExplain" class="explain ${s.transform?.done?'show':''}">
          <b>정답 ${l.transform.answer+1}번.</b> ${esc(l.transform.explain)}
        </div>
      </section>

      <section id="original" class="stage">
        ${stageHead(8,"원래 문제 유형 확인")}
        <span class="original">${esc(l.original.label)}</span>
        <div class="qtitle">${esc(l.original.question)}</div>
        <button id="showOriginal" class="primary-btn" type="button">${s.original?.done?'정답·논리 다시 보기':'정답·논리 보기'}</button>
        <div id="originalExplain" class="explain ${s.original?.done?'show':''}">
          <b>정답:</b> ${esc(l.original.answer)}<br>${esc(l.original.explain)}
        </div>
      </section>
    `;
  }

  function inputCard(l,q,s) {
    const saved = s["input:"+q.id] || {};
    return `<div class="qcard">
      <div class="qtitle">${esc(q.prompt)}</div>
      <div class="qhint">힌트 · ${esc(q.hint)}</div>
      <div class="input-row">
        <input class="answer-input lesson-input" data-key="input:${esc(q.id)}" value="${esc(saved.value||"")}" autocomplete="off">
        <button class="check-btn input-check" type="button" data-key="input:${esc(q.id)}" data-answer="${esc(q.answer)}">정답 확인</button>
      </div>
      <div class="feedback ${saved.done?'show '+(saved.correct?'good':'bad'):''}" data-feedback="input:${esc(q.id)}">
        ${saved.done ? (saved.correct?'정답입니다.':'다시 확인. 정답: '+esc(q.answer)) : ''}
      </div>
    </div>`;
  }

  function dissectField(l,f,i,s) {
    const key="dissect:"+i, saved=s[key]||{};
    return `<div class="field">
      <label>${esc(f.label)}</label>
      <input class="answer-input dissect-input" data-key="${key}" data-answer="${esc(f.answer)}" value="${esc(saved.value||"")}" autocomplete="off">
      <div class="feedback ${saved.done?'show '+(saved.correct?'good':'bad'):''}" data-feedback="${key}">
        ${saved.done ? (saved.correct?'정답':'정답: '+esc(f.answer)) : ''}
      </div>
    </div>`;
  }

  function rebuildCard(l,s) {
    const saved=s.rebuild||{};
    return `<div class="qcard">
      <div class="input-row">
        <input class="answer-input" id="rebuildInput" value="${esc(saved.value||"")}" autocomplete="off" placeholder="완전한 영어 문장으로 입력">
        <button class="check-btn" id="checkRebuild" type="button">정답 확인</button>
      </div>
      <div id="rebuildFeedback" class="feedback ${saved.done?'show '+(saved.correct?'good':'bad'):''}">
        ${saved.done ? (saved.correct?'정답입니다.':'다시 확인. 정답: '+esc(l.rebuild.answer)) : ''}
      </div>
    </div>`;
  }

  function transformOption(l,o,i,s) {
    const done=!!s.transform?.done, selected=s.transform?.selected;
    let cls="option";
    if(done && i===l.transform.answer) cls+=" correct";
    else if(done && i===selected && selected!==l.transform.answer) cls+=" wrong";
    return '<button class="'+cls+'" type="button" data-option="'+i+'" '+(done?'disabled':'')+'>'+(i+1)+'. '+esc(o)+'</button>';
  }

  function bindLesson(l) {
    const s=lessonState(l.id);

    document.querySelectorAll(".lesson-input").forEach(input => {
      input.addEventListener("input", () => {
        const key=input.dataset.key;
        s[key] = {...(s[key]||{}), value:input.value};
        saveStore();
      });
    });

    document.querySelectorAll(".input-check").forEach(btn => {
      btn.addEventListener("click", () => {
        const key=btn.dataset.key;
        const input=document.querySelector('.lesson-input[data-key="'+CSS.escape(key)+'"]');
        const correct=isCorrect(input.value,btn.dataset.answer);
        s[key]={value:input.value,correct,done:true};
        saveStore();
        const fb=document.querySelector('[data-feedback="'+CSS.escape(key)+'"]');
        fb.className="feedback show "+(correct?"good":"bad");
        fb.textContent=correct?"정답입니다.":"다시 확인. 정답: "+btn.dataset.answer;
        updateProgress(l);
      });
    });

    document.querySelectorAll(".dissect-input").forEach(input => {
      input.addEventListener("input", () => {
        const key=input.dataset.key;
        s[key] = {...(s[key]||{}), value:input.value};
        saveStore();
      });
    });

    document.querySelector("#gradeDissect").addEventListener("click", () => {
      document.querySelectorAll(".dissect-input").forEach(input => {
        const key=input.dataset.key, answer=input.dataset.answer;
        const correct=isCorrect(input.value,answer);
        s[key]={value:input.value,correct,done:true};
        const fb=document.querySelector('[data-feedback="'+CSS.escape(key)+'"]');
        fb.className="feedback show "+(correct?"good":"bad");
        fb.textContent=correct?"정답":"정답: "+answer;
      });
      saveStore();
      updateProgress(l);
    });

    const rebuildInput=document.querySelector("#rebuildInput");
    rebuildInput.addEventListener("input",()=>{
      s.rebuild={...(s.rebuild||{}),value:rebuildInput.value};
      saveStore();
    });
    document.querySelector("#checkRebuild").addEventListener("click",()=>{
      const correct=isCorrect(rebuildInput.value,l.rebuild.answer);
      s.rebuild={value:rebuildInput.value,correct,done:true};
      saveStore();
      const fb=document.querySelector("#rebuildFeedback");
      fb.className="feedback show "+(correct?"good":"bad");
      fb.textContent=correct?"정답입니다.":"다시 확인. 정답: "+l.rebuild.answer;
      updateProgress(l);
    });

    document.querySelectorAll("#transformOptions .option").forEach(btn=>{
      btn.addEventListener("click",()=>{
        if(s.transform?.done) return;
        const selected=Number(btn.dataset.option);
        s.transform={selected,correct:selected===l.transform.answer,done:true};
        saveStore();
        document.querySelectorAll("#transformOptions .option").forEach((b,i)=>{
          b.disabled=true;
          if(i===l.transform.answer) b.classList.add("correct");
          else if(i===selected) b.classList.add("wrong");
        });
        document.querySelector("#transformExplain").classList.add("show");
        updateProgress(l);
      });
    });

    document.querySelector("#showOriginal").addEventListener("click",()=>{
      s.original={done:true};
      saveStore();
      document.querySelector("#originalExplain").classList.add("show");
      updateProgress(l);
    });
  }

  function updateProgress(l) {
    const p=progressInfo(l);
    const t=document.querySelector("#progressText");
    const f=document.querySelector("#progressFill");
    if(t) t.textContent=p.done+" / "+p.total+" · "+p.pct+"%";
    if(f) f.style.width=p.pct+"%";
    renderLessonList();
  }

  function unitCheckScore(lesson) {
    const s = lessonState(lesson.id);
    let done=0, correct=0;
    (lesson.checkItems || []).forEach(q => {
      const state=s["unit:"+q.id];
      if(state?.done){done++; if(state.correct) correct++;}
    });
    return {done,correct,total:(lesson.checkItems||[]).length};
  }

  function renderUnitCheck(lesson) {
    const p=progressInfo(lesson);
    const sc=unitCheckScore(lesson);
    lessonRoot.innerHTML=`
      <section class="lesson-head">
        <div class="head-row">
          <div>
            <div class="kicker">
              <span class="pill">${esc(lesson.nav)}</span>
              <span class="pill source">${esc(lesson.source)}</span>
              <span class="pill source">${esc(lesson.type)}</span>
            </div>
            <h2>${esc(lesson.title)}</h2>
            <div class="meta">3과 페이지별 학습을 섞어서 다시 확인합니다.</div>
          </div>
          <div class="progress-box">
            <div class="progress-label"><span>진행률</span><b id="progressText">${p.done} / ${p.total} · ${p.pct}%</b></div>
            <div class="progress-track"><div id="progressFill" class="progress-fill" style="width:${p.pct}%"></div></div>
          </div>
        </div>
      </section>
      <section class="score-card">
        <div class="kicker"><span class="pill">3과 누적 복습</span></div>
        <div class="score-big" id="unitScore">${sc.correct} / ${sc.total}${sc.done<sc.total?' ('+sc.done+' / '+sc.total+' 진행 중)':''}</div>
        <div class="meta">어휘 · 어법 · 내용 · 구조를 섞었습니다. 각 문제는 답하는 즉시 저장됩니다.</div>
      </section>
      <div class="check-wrap">
        ${(lesson.checkItems||[]).map(q=>unitCheckCard(lesson,q)).join("")}
      </div>
    `;
    bindUnitCheck(lesson);
  }

  function unitCheckCard(lesson,q) {
    const s=lessonState(lesson.id);
    const state=s["unit:"+q.id]||{};
    if(q.kind==="input"){
      return `<section class="stage">
        <div class="qtitle">${esc(q.prompt)}</div>
        <div class="input-row">
          <input class="answer-input unit-input" data-id="${esc(q.id)}" value="${esc(state.value||"")}" autocomplete="off">
          <button class="check-btn unit-input-btn" type="button" data-id="${esc(q.id)}" data-answer="${esc(q.answer)}">확인</button>
        </div>
        <div class="feedback ${state.done?'show '+(state.correct?'good':'bad'):''}" data-unit-feedback="${esc(q.id)}">
          ${state.done?(state.correct?'정답입니다.':'정답: '+esc(q.answer)):''}
        </div>
      </section>`;
    }
    return `<section class="stage">
      <div class="qtitle">${esc(q.prompt)}</div>
      <div class="options">
        ${q.options.map((o,i)=>{
          let cls="option";
          if(state.done&&i===q.answer) cls+=" correct";
          else if(state.done&&i===state.selected&&state.selected!==q.answer) cls+=" wrong";
          return '<button class="'+cls+' unit-option" type="button" data-id="'+esc(q.id)+'" data-index="'+i+'" '+(state.done?'disabled':'')+'>'+(i+1)+'. '+esc(o)+'</button>';
        }).join("")}
      </div>
      <div class="explain ${state.done?'show':''}" data-unit-explain="${esc(q.id)}">${esc(q.explain||"")}</div>
    </section>`;
  }

  function bindUnitCheck(lesson) {
    const s=lessonState(lesson.id);
    document.querySelectorAll(".unit-input").forEach(input=>{
      input.addEventListener("input",()=>{
        const key="unit:"+input.dataset.id;
        s[key]={...(s[key]||{}),value:input.value};
        saveStore();
      });
    });
    document.querySelectorAll(".unit-input-btn").forEach(btn=>{
      btn.addEventListener("click",()=>{
        const id=btn.dataset.id;
        const input=document.querySelector('.unit-input[data-id="'+CSS.escape(id)+'"]');
        const correct=isCorrect(input.value,btn.dataset.answer);
        s["unit:"+id]={value:input.value,correct,done:true};
        saveStore();
        const fb=document.querySelector('[data-unit-feedback="'+CSS.escape(id)+'"]');
        fb.className="feedback show "+(correct?"good":"bad");
        fb.textContent=correct?"정답입니다.":"정답: "+btn.dataset.answer;
        updateUnitCheckScore(lesson);
      });
    });
    document.querySelectorAll(".unit-option").forEach(btn=>{
      btn.addEventListener("click",()=>{
        const q=lesson.checkItems.find(x=>x.id===btn.dataset.id);
        const key="unit:"+q.id;
        if(s[key]?.done) return;
        const selected=Number(btn.dataset.index);
        s[key]={selected,correct:selected===q.answer,done:true};
        saveStore();
        document.querySelectorAll('.unit-option[data-id="'+CSS.escape(q.id)+'"]').forEach((b,i)=>{
          b.disabled=true;
          if(i===q.answer)b.classList.add("correct");
          else if(i===selected)b.classList.add("wrong");
        });
        document.querySelector('[data-unit-explain="'+CSS.escape(q.id)+'"]').classList.add("show");
        updateUnitCheckScore(lesson);
      });
    });
  }

  function updateUnitCheckScore(lesson) {
    const sc=unitCheckScore(lesson);
    const p=progressInfo(lesson);
    const score=document.querySelector("#unitScore");
    const textEl=document.querySelector("#progressText");
    const fill=document.querySelector("#progressFill");
    if(score) score.textContent=sc.correct+" / "+sc.total+(sc.done<sc.total?" ("+sc.done+" / "+sc.total+" 진행 중)":"");
    if(textEl) textEl.textContent=p.done+" / "+p.total+" · "+p.pct+"%";
    if(fill) fill.style.width=p.pct+"%";
    renderLessonList();
  }

  function checkState(id) {
    if(!store.check[id]) store.check[id]={};
    return store.check[id];
  }

  function comprehensiveScore(items) {
    let done=0,correct=0;
    items.forEach(q=>{
      const s=checkState(q.id);
      if(s.done){done++; if(s.correct)correct++;}
    });
    return {done,correct,total:items.length};
  }

  function renderComprehensive(filter="all") {
    const all=DATA.comprehensive;
    const items=filter==="all"?all:all.filter(x=>x.group===filter);
    const sc=comprehensiveScore(all);
    lessonRoot.innerHTML=`
      <section class="score-card">
        <div class="kicker"><span class="pill">종합 체크</span><span class="pill source">교과서 · 수특 · 6월 학평 혼합</span></div>
        <h2 style="margin:0 0 8px">시험범위 종합 체크</h2>
        <div class="score-big" id="checkScore">${sc.correct} / ${sc.total}${sc.done<sc.total?' ('+sc.done+' / '+sc.total+' 진행 중)':''}</div>
        <div class="check-filter">
          <button class="filter-btn ${filter==='all'?'active':''}" data-filter="all">전체</button>
          <button class="filter-btn ${filter==='textbook'?'active':''}" data-filter="textbook">교과서</button>
          <button class="filter-btn ${filter==='suneung'?'active':''}" data-filter="suneung">수특</button>
          <button class="filter-btn ${filter==='mock'?'active':''}" data-filter="mock">6월 학평</button>
        </div>
      </section>
      <div class="check-wrap">
        ${items.map(q=>checkCard(q)).join("")}
      </div>
    `;
    document.querySelectorAll(".filter-btn").forEach(b=>b.addEventListener("click",()=>renderComprehensive(b.dataset.filter)));
    bindComprehensive(items);
  }

  function checkCard(q) {
    const s=checkState(q.id);
    if(q.kind==="input"){
      return `<section class="stage">
        <div class="qtitle">${esc(q.prompt)}</div>
        <div class="input-row">
          <input class="answer-input check-input" data-id="${q.id}" value="${esc(s.value||"")}" autocomplete="off">
          <button class="check-btn check-input-btn" data-id="${q.id}" data-answer="${esc(q.answer)}">확인</button>
        </div>
        <div class="feedback ${s.done?'show '+(s.correct?'good':'bad'):''}" data-check-feedback="${q.id}">
          ${s.done?(s.correct?'정답입니다.':'정답: '+esc(q.answer)):''}
        </div>
      </section>`;
    }
    return `<section class="stage">
      <div class="qtitle">${esc(q.prompt)}</div>
      <div class="options">
        ${q.options.map((o,i)=>{
          let cls="option";
          if(s.done&&i===q.answer) cls+=" correct";
          else if(s.done&&i===s.selected&&s.selected!==q.answer) cls+=" wrong";
          return '<button class="'+cls+' check-option" data-id="'+q.id+'" data-index="'+i+'" '+(s.done?'disabled':'')+'>'+(i+1)+'. '+esc(o)+'</button>';
        }).join("")}
      </div>
      <div class="explain ${s.done?'show':''}" data-check-explain="${q.id}">${esc(q.explain||"")}</div>
    </section>`;
  }

  function bindComprehensive(items) {
    document.querySelectorAll(".check-input").forEach(input=>{
      input.addEventListener("input",()=>{
        const s=checkState(input.dataset.id);
        s.value=input.value;
        saveStore();
      });
    });
    document.querySelectorAll(".check-input-btn").forEach(btn=>{
      btn.addEventListener("click",()=>{
        const id=btn.dataset.id;
        const input=document.querySelector('.check-input[data-id="'+CSS.escape(id)+'"]');
        const correct=isCorrect(input.value,btn.dataset.answer);
        store.check[id]={value:input.value,correct,done:true};
        saveStore();
        const fb=document.querySelector('[data-check-feedback="'+CSS.escape(id)+'"]');
        fb.className="feedback show "+(correct?"good":"bad");
        fb.textContent=correct?"정답입니다.":"정답: "+btn.dataset.answer;
        refreshCheckScore();
      });
    });
    document.querySelectorAll(".check-option").forEach(btn=>{
      btn.addEventListener("click",()=>{
        const q=DATA.comprehensive.find(x=>x.id===btn.dataset.id);
        const selected=Number(btn.dataset.index);
        store.check[q.id]={selected,correct:selected===q.answer,done:true};
        saveStore();
        document.querySelectorAll('.check-option[data-id="'+CSS.escape(q.id)+'"]').forEach((b,i)=>{
          b.disabled=true;
          if(i===q.answer)b.classList.add("correct");
          else if(i===selected)b.classList.add("wrong");
        });
        document.querySelector('[data-check-explain="'+CSS.escape(q.id)+'"]').classList.add("show");
        refreshCheckScore();
      });
    });
  }

  function refreshCheckScore() {
    const sc=comprehensiveScore(DATA.comprehensive);
    const el=document.querySelector("#checkScore");
    if(el) el.textContent=sc.correct+" / "+sc.total+(sc.done<sc.total?" ("+sc.done+" / "+sc.total+" 진행 중)":"");
  }

  renderLessonList();
  renderCurrent();
})();