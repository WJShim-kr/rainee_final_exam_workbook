window.WORKBOOK_DATA = {
  groups: {
    textbook: {label:"교과서 3·4·5과"},
    suneung: {label:"수특 1~7"},
    mock: {label:"2026년 6월 학평"}
  },
  lessons: [
    {
      id:"tb3", group:"textbook", order:1, nav:"교과서 3과", title:"There’s More than One Way to Vote",
      source:"교과서 3과 p.67~73, Focus on Language p.76~77", type:"본문 이해 · 어법 · 서술형",
      flow:["집단 의사결정 문제","FPTP · AV · Condorcet 비교","완벽한 방식 없음 → 장단점 비교"],
      oneLine:"투표 방식이 달라지면 승자와 장단점도 달라지므로, 의사결정 방식 자체를 이해해야 한다.",
      keyExpr:"different voting systems → different results → weigh pros and cons",
      quotes:[
        {src:"p.68", en:"The entire council was curious to find out if the different methods would yield different results.", ko:"학생회 전체는 서로 다른 방식이 서로 다른 결과를 낼지 궁금해했다.", why:"세 투표 방식을 비교하는 본문 전체의 출발점."},
        {src:"p.70", en:"It is possible to win a vote without the support of the majority.", ko:"과반수의 지지 없이도 투표에서 이기는 것이 가능하다.", why:"FPTP의 핵심 약점."},
        {src:"p.73", en:"Whichever we choose will have pros and cons.", ko:"어느 것을 선택하든 장단점이 있다.", why:"본문 결론과 복합관계대명사 어법이 동시에 걸리는 문장."}
      ],
      grammar:{title:"not A but B + whichever", body:"not A but B는 같은 문법 형태를 병렬로 맞춘다. whoever/whatever/whichever는 ‘누구든/무엇이든/어느 것이든’ 의미로 절 안에서 성분 역할을 한다.", cue:"p.77에서 not A but B의 병렬과 whichever의 절 내 역할을 짚어줘."},
      inputs:[
        {id:"tb3-i1", prompt:"The method is simple, but it is possible to win without the support of the ______.", answer:"majority", hint:"FPTP의 핵심 약점"},
        {id:"tb3-i2", prompt:"Different voting methods may ______ different results.", answer:"yield", hint:"p.68 핵심 동사"},
        {id:"tb3-i3", prompt:"Whichever we ______ will have pros and cons.", answer:"choose", hint:"p.73 원문"}
      ],
      dissect:{sentence:"Voters are given several options, and whichever gets the most first-preference votes wins.", fields:[
        {label:"복합관계대명사", answer:"whichever"},{label:"관계절 동사", answer:"gets"},{label:"전체 절의 동사", answer:"wins"},{label:"whichever의 의미", answer:"어느 것이든"}
      ]},
      rebuild:{ko:"어느 것을 선택하든 장단점이 있을 것이다.", bank:["Whichever we choose","will have","pros and cons."], answer:"Whichever we choose will have pros and cons."},
      transform:{badge:"워크북 변형", question:"다음 중 본문의 핵심 논리와 가장 일치하는 것은?", options:[
        "가장 단순한 투표 방식이 항상 가장 공정한 결과를 낸다.",
        "서로 다른 투표 방식은 같은 선호 자료에서도 다른 결과를 낼 수 있다.",
        "과반수 지지를 얻지 못한 선택지는 어떤 방식에서도 승리할 수 없다.",
        "복잡한 투표 방식은 약점이 없으므로 단순한 방식보다 우수하다."
      ], answer:1, explain:"본문은 FPTP, AV, Condorcet가 서로 다른 결과를 낼 수 있고 각 방식마다 장단점이 있음을 보여준다."},
      original:{label:"교과서 본문 확인", question:"AV 방식에서 1차 투표에 이기려면 무엇이 필요한가?", answer:"More than 50% of the first-preference votes.", explain:"p.71 Q7과 본문에서 1차 승리 조건을 50% 초과의 1순위 표로 제시한다."}
    },
    {
      id:"tb4", group:"textbook", order:2, nav:"교과서 4과", title:"Breaking the Cycle: Solutions to E-waste",
      source:"교과서 4과 p.93~99, Focus on Language p.102~103", type:"문제-해결 구조 · 어법 · 서술형",
      flow:["e-waste 증가와 위험","수리권 · 수리가능성 지수 · Repair Café","수리 확대 → 폐기 감소 → 지속가능성"],
      oneLine:"전자폐기물을 줄이려면 버리기보다 ‘수리하기 쉬운 환경’을 제도·정보·공동체 차원에서 만들어야 한다.",
      keyExpr:"repair access → easier repair → less e-waste",
      quotes:[
        {src:"p.94", en:"Experts predict that by 2030, the amount of e-waste generated annually will have doubled in just 16 years.", ko:"전문가들은 2030년까지 연간 전자폐기물 발생량이 불과 16년 만에 두 배가 될 것으로 예측한다.", why:"문제의 규모와 미래완료가 함께 드러난다."},
        {src:"p.95", en:"Finally, it demands that manufacturers design devices in a way that makes repairs as easy as possible.", ko:"마지막으로 수리권 운동은 제조업체가 수리를 가능한 한 쉽게 할 수 있도록 기기를 설계할 것을 요구한다.", why:"요구 동사 + that절 동사원형의 핵심 문장."},
        {src:"p.98", en:"By providing spaces where people can learn, Repair Cafés enable individuals to maintain their devices and extend their life spans.", ko:"Repair Café는 사람들이 배울 수 있는 공간을 제공함으로써 개인이 기기를 유지하고 수명을 연장하도록 한다.", why:"by V-ing, 관계부사 where, enable A to V가 함께 나온다."}
      ],
      grammar:{title:"요구·제안 동사 + that S (should) V / enable A to V", body:"demand, require, recommend 같은 요구·제안 동사 뒤 that절에서는 동사원형이 쓰인다. enable A to V는 ‘A가 V하도록 가능하게 하다’.", cue:"p.103 문법 페이지와 p.95·96 본문을 연결해서 반복시키기."},
      inputs:[
        {id:"tb4-i1", prompt:"Experts predict that the amount of e-waste will have ______ by 2030.", answer:"doubled", hint:"미래완료 핵심"},
        {id:"tb4-i2", prompt:"The movement demands that manufacturers ______ devices to make repairs easier.", answer:"design", hint:"demand that S + 동사원형"},
        {id:"tb4-i3", prompt:"Repair Cafés ______ individuals to maintain their devices.", answer:"enable", hint:"A to V 구조"}
      ],
      dissect:{sentence:"Finally, it demands that manufacturers design devices in a way that makes repairs as easy as possible.", fields:[
        {label:"요구 동사", answer:"demands"},{label:"that절 주어", answer:"manufacturers"},{label:"that절 동사", answer:"design"},{label:"관계절 동사", answer:"makes"}
      ]},
      rebuild:{ko:"Repair Café는 개인이 기기를 유지하고 수명을 연장할 수 있게 한다.", bank:["Repair Cafés","enable individuals","to maintain their devices","and extend their life spans."], answer:"Repair Cafés enable individuals to maintain their devices and extend their life spans."},
      transform:{badge:"워크북 변형", question:"다음 중 세 해결책의 역할을 가장 정확히 구분한 것은?", options:[
        "Right-to-Repair는 점수를 표시하고, Repairability Index는 기술자를 연결한다.",
        "Repairability Index는 구매 전 수리 난이도를 알리고, Repair Café는 수리 기술과 조언을 공유한다.",
        "Repair Café는 제조사의 설계 의무를 법으로 정하고, Right-to-Repair는 점수를 표시한다.",
        "세 해결책은 모두 폐기물 재활용률만 높이는 데 초점을 둔다."
      ], answer:1, explain:"본문에서 지수는 구매 전 수리 가능성을 알려주고, Repair Café는 도구·전문가 조언·기술 공유를 제공한다."},
      original:{label:"교과서 본문 확인", question:"Repairability Index는 소비자에게 무엇을 알려 주는가?", answer:"How easily the product can be repaired.", explain:"p.96 Q6의 직접 확인 문항."}
    },
    {
      id:"tb5", group:"textbook", order:3, nav:"교과서 5과", title:"The Colorful Truth About Ancient Sculptures",
      source:"교과서 5과 p.119~125, Focus on Language p.128~129", type:"시간·인과 구조 · 편견 · 어법",
      flow:["고대 조각의 색채 흔적 발견","르네상스 이후 ‘흰 대리석=이상적 아름다움’ 편견","과학적 분석 → polychromy 재평가"],
      oneLine:"오랫동안 당연시된 ‘고대 조각은 흰색’이라는 믿음은 과학적 증거로 수정되었다.",
      keyExpr:"polychromy → Renaissance bias → scientific evidence → changed perception",
      quotes:[
        {src:"p.119", en:"There were clear signs of polychromy: the use of various colors in the decoration of statues or works of architecture.", ko:"조각상이나 건축물 장식에 여러 색을 사용한 다색채색의 명백한 흔적이 있었다.", why:"본문 핵심 개념 polychromy의 정의."},
        {src:"p.121", en:"Over a period of more than 1,000 years, much of the paint with which these sculptures were originally decorated wore off.", ko:"1,000년이 넘는 동안 이 조각들을 원래 장식했던 페인트의 상당 부분이 닳아 없어졌다.", why:"전치사+관계대명사와 편견 형성의 원인이 함께 나온다."},
        {src:"p.124", en:"The fact that Greek and Roman artists normally decorated their sculptures with vivid colors is now widely acknowledged.", ko:"그리스·로마 예술가들이 조각을 선명한 색으로 장식했다는 사실은 이제 널리 인정된다.", why:"동격 that과 현재의 인식 변화를 보여준다."}
      ],
      grammar:{title:"전치사 + 관계대명사 / 동격 that", body:"with which에서 which는 앞의 paint와 연결되어 ‘그 페인트로’라는 뜻을 만든다. the fact that ~의 that절은 fact의 내용을 설명한다.", cue:"관계대명사와 동격 that을 ‘앞 명사를 꾸미는가 / 내용을 설명하는가’로 구분."},
      inputs:[
        {id:"tb5-i1", prompt:"Brinkmann found clear signs of ______ on ancient sculptures.", answer:"polychromy", hint:"다색채색"},
        {id:"tb5-i2", prompt:"Much of the paint ______ off over more than 1,000 years.", answer:"wore", hint:"wear off"},
        {id:"tb5-i3", prompt:"The colorful past of ancient sculptures is now widely ______.", answer:"acknowledged", hint:"p.124 핵심 표현"}
      ],
      dissect:{sentence:"Over a period of more than 1,000 years, much of the paint with which these sculptures were originally decorated wore off.", fields:[
        {label:"선행사", answer:"paint"},{label:"전치사", answer:"with"},{label:"관계대명사", answer:"which"},{label:"주절 동사", answer:"wore off"}
      ]},
      rebuild:{ko:"그리스와 로마 예술가들이 조각을 선명한 색으로 장식했다는 사실은 이제 널리 인정된다.", bank:["The fact that","Greek and Roman artists","normally decorated their sculptures with vivid colors","is now widely acknowledged."], answer:"The fact that Greek and Roman artists normally decorated their sculptures with vivid colors is now widely acknowledged."},
      transform:{badge:"워크북 변형", question:"다음 중 ‘흰 대리석=이상적 아름다움’이라는 편견이 오래 지속된 이유로 가장 적절한 것은?", options:[
        "고대 예술가들이 색 사용을 법으로 금지했기 때문이다.",
        "발굴 당시 색이 많이 사라진 흰 표면이 미적 기준으로 받아들여졌고 이후 색의 증거가 무시되었기 때문이다.",
        "Brinkmann이 색채 흔적을 발견했지만 이를 공개하지 않았기 때문이다.",
        "르네상스 예술가들이 고대 조각의 원래 색을 그대로 복원했기 때문이다."
      ], answer:1, explain:"본문은 색이 닳아 흰 조각이 발굴된 뒤 흰 대리석 미학이 강화되고, 이후 색의 증거가 오랫동안 무시되었다고 설명한다."},
      original:{label:"교과서 본문 확인", question:"1980년대 이후 사람들의 polychromy 인식 변화에 기여한 것은?", answer:"The development of new methods of scientific analysis and the work of scholars.", explain:"p.124 Q9의 직접 확인 내용."}
    },

    {
      id:"st1", group:"suneung", order:1, nav:"수특 1", title:"배경지식과 독해",
      source:"수특 프린트 1번", type:"빈칸 추론",
      flow:["강한 독자 vs 야구 지식 있는 약한 독자","야구 지식 있는 집단이 더 높은 점수","독해력만큼 prior knowledge가 중요"],
      oneLine:"읽기 능력만으로는 충분하지 않고, 독자가 가져오는 배경지식이 이해를 크게 좌우한다.",
      keyExpr:"prior knowledge → better comprehension",
      quotes:[
        {src:"수특 1", en:"Having strong reading skills was not enough for the students who came to the page with a knowledge deficit about the topic.", ko:"주제에 대한 지식이 부족한 학생에게는 뛰어난 읽기 능력만으로 충분하지 않았다.", why:"실험 결과의 핵심 해석."},
        {src:"수특 1", en:"Their prior knowledge enabled them to outscore readers with far better abilities.", ko:"그들의 배경지식은 훨씬 뛰어난 읽기 능력을 가진 학생보다 더 높은 점수를 받게 했다.", why:"배경지식의 효과를 직접 보여준다."}
      ],
      grammar:{title:"enable A to V / who 관계절", body:"enable A to V는 ‘A가 V할 수 있게 하다’. students who came...에서 who는 students를 꾸미며 관계절의 주어이다.", cue:"독해 내용과 함께 enable 구조를 짧게 회수."},
      inputs:[
        {id:"st1-i1", prompt:"Their prior knowledge ______ them to outscore stronger readers.", answer:"enabled", hint:"enable A to V"},
        {id:"st1-i2", prompt:"The successful group had more ______ knowledge about baseball.", answer:"prior", hint:"배경지식"}
      ],
      dissect:{sentence:"Their prior knowledge enabled them to outscore readers with far better abilities.", fields:[
        {label:"주어", answer:"Their prior knowledge"},{label:"동사", answer:"enabled"},{label:"목적어", answer:"them"},{label:"to부정사 동사", answer:"outscore"}
      ]},
      rebuild:{ko:"그들의 배경지식은 그들이 더 뛰어난 능력의 독자들보다 높은 점수를 받게 했다.", bank:["Their prior knowledge","enabled them","to outscore readers","with far better abilities."], answer:"Their prior knowledge enabled them to outscore readers with far better abilities."},
      transform:{badge:"워크북 변형", question:"이 연구 결과로 가장 적절하게 추론할 수 있는 것은?", options:[
        "배경지식은 독해력이 낮을 때만 필요하다.",
        "읽기 능력이 뛰어나면 주제 지식은 거의 영향을 주지 않는다.",
        "관련 배경지식은 독해력의 차이를 어느 정도 상쇄할 수 있다.",
        "야구 지식은 모든 종류의 독해 능력을 향상시킨다."
      ], answer:2, explain:"약한 독자라도 야구 지식이 있어 강한 독자보다 높은 점수를 받았으므로, 관련 배경지식의 보완 효과를 추론할 수 있다."},
      original:{label:"원래 문제: 빈칸", question:"빈칸의 핵심은 무엇인가?", answer:"what a reader brings to the page", explain:"‘독자가 페이지에 가져오는 것’은 곧 배경지식을 가리킨다."}
    },
    {
      id:"st2", group:"suneung", order:2, nav:"수특 2", title:"뇌의 대리 기능",
      source:"수특 프린트 2번", type:"글의 순서",
      flow:["지각 체계는 여러 경로 사용","한 경로가 막히면 다른 단서 사용","사례: 철새·얼굴 인식"],
      oneLine:"뇌는 이용 가능한 단서가 바뀌어도 다른 경로를 활용해 인식을 유지한다.",
      keyExpr:"multiple routes → changing cues → vicarious functioning",
      quotes:[
        {src:"수특 2", en:"If one is blocked, it takes another route.", ko:"한 경로가 막히면 다른 경로를 사용한다.", why:"대리 기능의 핵심 원리."},
        {src:"수특 2", en:"This immense flexibility of the brain to rely on changing cues, according to whatever is available, is known as vicarious functioning.", ko:"이용 가능한 것에 따라 바뀌는 단서에 의존하는 뇌의 엄청난 유연성을 대리 기능이라 한다.", why:"핵심 개념의 정의."}
      ],
      grammar:{title:"whatever + 절 / be known as", body:"whatever is available은 ‘이용 가능한 것은 무엇이든’. be known as는 ‘~로 알려져 있다’.", cue:"whatever가 명사절 안에서 주어 역할을 한다는 정도만."},
      inputs:[
        {id:"st2-i1", prompt:"If one route is blocked, the brain takes ______ route.", answer:"another", hint:"대체 경로"},
        {id:"st2-i2", prompt:"This flexibility is known as vicarious ______.", answer:"functioning", hint:"핵심 개념"}
      ],
      dissect:{sentence:"If one is blocked, it takes another route.", fields:[
        {label:"조건절 접속사", answer:"If"},{label:"조건절 주어", answer:"one"},{label:"조건절 동사", answer:"is blocked"},{label:"주절 목적어", answer:"another route"}
      ]},
      rebuild:{ko:"한 경로가 막히면 그것은 다른 경로를 택한다.", bank:["If one is blocked,","it takes","another route."], answer:"If one is blocked, it takes another route."},
      transform:{badge:"워크북 변형", question:"다음 사례 중 지문의 vicarious functioning과 가장 가까운 것은?", options:[
        "하나의 단서만 반복해서 사용한다.",
        "별을 볼 수 없을 때 지형지물이나 자성 감각으로 방향을 찾는다.",
        "얼굴 전체가 보일 때만 사람을 알아본다.",
        "환경이 바뀌면 인식을 중단한다."
      ], answer:1, explain:"본문의 철새 예시는 별이 보이지 않을 때 다른 단서를 사용하는 대체 경로의 사례다."},
      original:{label:"원래 문제: 순서", question:"올바른 순서는?", answer:"(C) → (A) → (B)", explain:"C에서 대리 기능을 정의하고, A와 B에서 각각 철새와 얼굴 인식 사례를 확장한다."}
    },
    {
      id:"st3", group:"suneung", order:3, nav:"수특 3", title:"준거 집단의 효과",
      source:"수특 프린트 3번", type:"글의 순서",
      flow:["준거 집단이 자기평가 기준 제공","규범 효과 + 비교 효과","연합 효과로 자부심"],
      oneLine:"준거 집단은 모방·비교·연합을 통해 자기평가와 자존감에 서로 다른 영향을 준다.",
      keyExpr:"normative → comparison → associative effects",
      quotes:[
        {src:"수특 3", en:"The normative effect basically involves imitating the reference group.", ko:"규범 효과는 기본적으로 준거 집단을 모방하는 것을 포함한다.", why:"세 효과 중 첫 번째를 정의한다."},
        {src:"수특 3", en:"Being associated with the brilliant group, though, makes you feel proud of yourself, “basking in reflected glory.”", ko:"하지만 뛰어난 집단과 연합되어 있다는 점은 ‘반사된 영광’을 누리며 자신을 자랑스럽게 느끼게 한다.", why:"연합 효과의 결과."}
      ],
      grammar:{title:"make O + 형용사 / be associated with", body:"make you feel proud에서 make는 목적어 뒤에 동사원형 feel을 둔다. be associated with는 ‘~와 연관되다’.", cue:"비교 효과와 연합 효과의 방향이 반대일 수 있음을 내용으로 확인."},
      inputs:[
        {id:"st3-i1", prompt:"The normative effect involves ______ the reference group.", answer:"imitating", hint:"동명사"},
        {id:"st3-i2", prompt:"A group used to evaluate one’s own behavior is a ______ group.", answer:"reference", hint:"핵심 용어"}
      ],
      dissect:{sentence:"The normative effect basically involves imitating the reference group.", fields:[
        {label:"주어 핵심명사", answer:"effect"},{label:"동사", answer:"involves"},{label:"목적어 형태", answer:"imitating"},{label:"목적어의 대상", answer:"the reference group"}
      ]},
      rebuild:{ko:"규범 효과는 기본적으로 준거 집단을 모방하는 것을 포함한다.", bank:["The normative effect","basically involves","imitating","the reference group."], answer:"The normative effect basically involves imitating the reference group."},
      transform:{badge:"워크북 변형", question:"학업 성취가 뛰어난 반 친구들과 자신을 비교해 자존감이 낮아지는 것은 어떤 효과에 가장 가깝나?", options:["규범 효과","비교 효과","연합 효과","무관 효과"], answer:1, explain:"본문에서 classmates와 자신을 비교해 부정적 자기평가를 하는 것이 comparison effect다."},
      original:{label:"원래 문제: 순서", question:"올바른 순서는?", answer:"(B) → (A) → (C)", explain:"B가 앞 문장의 positive self-evaluation을 받아 규범 효과를 설명하고, A가 비교/연합 효과를 소개한 뒤 C가 그 결과를 제시한다."}
    },
    {
      id:"st4", group:"suneung", order:4, nav:"수특 4", title:"과정과 결과로서의 회복",
      source:"수특 프린트 4번", type:"문장 삽입",
      flow:["회복 결과: 생리·심리 상태","회복 과정: 상태 변화를 만드는 활동","과정이 결과에 선행"],
      oneLine:"회복은 결과 상태이기도 하고 그 상태 변화를 만들어내는 과정이기도 하다.",
      keyExpr:"recovery outcome ↔ recovery process",
      quotes:[
        {src:"수특 4", en:"Recovery can be considered a process as well as an outcome.", ko:"회복은 결과뿐 아니라 과정으로도 볼 수 있다.", why:"글 전체의 이중 구분."},
        {src:"수특 4", en:"Accordingly, recovery processes precede recovery outcomes and, consequently, determine whether adequate recovery is obtained.", ko:"따라서 회복 과정은 회복 결과에 선행하며 적절한 회복이 이루어지는지를 결정한다.", why:"두 개념의 관계를 결론짓는다."}
      ],
      grammar:{title:"as well as / whether 절", body:"A as well as B는 ‘B뿐 아니라 A도’. determine whether ~는 ‘~인지 여부를 결정하다’.", cue:"process와 outcome을 섞지 않도록 표로 구분."},
      inputs:[
        {id:"st4-i1", prompt:"Recovery can be considered a process as well as an ______.", answer:"outcome", hint:"결과"},
        {id:"st4-i2", prompt:"Recovery processes ______ recovery outcomes.", answer:"precede", hint:"~에 선행하다"}
      ],
      dissect:{sentence:"Recovery can be considered a process as well as an outcome.", fields:[
        {label:"주어", answer:"Recovery"},{label:"조동사", answer:"can"},{label:"수동태 핵심", answer:"be considered"},{label:"병렬 연결", answer:"as well as"}
      ]},
      rebuild:{ko:"회복은 과정뿐만 아니라 결과로도 여겨질 수 있다.", bank:["Recovery","can be considered","a process","as well as an outcome."], answer:"Recovery can be considered a process as well as an outcome."},
      transform:{badge:"워크북 변형", question:"다음 중 recovery process의 예로 가장 적절한 것은?", options:[
        "회복 후의 심박수 상태",
        "회복 후의 기분 상태",
        "신체적 자원을 회복하기 위한 비활동",
        "회복 후 근육통이 없는 상태"
      ], answer:2, explain:"본문은 physical inactivity를 physiological resources를 회복하는 과정으로 제시한다."},
      original:{label:"원래 문제: 문장 삽입", question:"‘Recovery as a process...’ 문장은 어디에 들어가는가?", answer:"④ 뒤", explain:"앞에서 outcome의 생리·심리 상태를 모두 설명한 뒤 process를 새로 정의하고, 다음 문장의 Accordingly가 두 개념 관계를 이어간다."}
    },
    {
      id:"st5", group:"suneung", order:5, nav:"수특 5", title:"고통과 삶의 의미",
      source:"수특 프린트 5번", type:"문장 삽입",
      flow:["고통 경험이 의미감 형성","의미 있는 삶과 고통 경험의 연관","행복은 낮아질 수 있으나 의미감은 높아짐"],
      oneLine:"고통은 행복을 낮출 수 있지만, 역설적으로 삶의 의미감은 높일 수 있다.",
      keyExpr:"more suffering → more meaning / lower happiness",
      quotes:[
        {src:"수특 5", en:"The difficult times that we endure play a key role in helping us to lead more meaningful lives.", ko:"우리가 견디는 어려운 시기는 더 의미 있는 삶을 살도록 돕는 데 핵심 역할을 한다.", why:"글의 핵심 주장."},
        {src:"수특 5", en:"Our sufferings, then, seem to help to provide people with the sense that their lives are more meaningful, even if these events are associated with lower feelings of happiness.", ko:"따라서 고통은 행복감이 낮아지는 것과 관련되어 있더라도 삶이 더 의미 있다는 느낌을 주는 듯하다.", why:"의미와 행복의 대비를 결론짓는다."}
      ],
      grammar:{title:"play a key role in V-ing / even if", body:"play a key role in V-ing는 ‘~하는 데 핵심 역할을 하다’. even if는 ‘비록 ~일지라도’.", cue:"meaningfulness와 happiness를 같은 축으로 보지 않게 하기."},
      inputs:[
        {id:"st5-i1", prompt:"Difficult times play a key ______ in meaningful lives.", answer:"role", hint:"핵심 역할"},
        {id:"st5-i2", prompt:"Meaningful life can be distinct ______ happiness.", answer:"from", hint:"distinct from"}
      ],
      dissect:{sentence:"The difficult times that we endure play a key role in helping us to lead more meaningful lives.", fields:[
        {label:"선행사", answer:"times"},{label:"관계대명사", answer:"that"},{label:"관계절 동사", answer:"endure"},{label:"주절 동사", answer:"play"}
      ]},
      rebuild:{ko:"우리가 견디는 어려운 시기는 더 의미 있는 삶을 살도록 돕는 데 핵심 역할을 한다.", bank:["The difficult times that we endure","play a key role","in helping us","to lead more meaningful lives."], answer:"The difficult times that we endure play a key role in helping us to lead more meaningful lives."},
      transform:{badge:"워크북 변형", question:"본문의 연구 결과를 가장 정확히 요약한 것은?", options:[
        "행복과 의미는 항상 동시에 증가한다.",
        "고통 경험이 많을수록 행복과 의미가 모두 낮아진다.",
        "고통은 행복감을 낮출 수 있지만 의미 있는 삶의 감각과 연결될 수 있다.",
        "의미 있는 삶은 과거의 부정적 경험과 무관하다."
      ], answer:2, explain:"본문은 suffering이 lower happiness와 연결되면서도 greater meaningfulness와 관련될 수 있다고 한다."},
      original:{label:"원래 문제: 문장 삽입", question:"‘On the other hand, these past experiences...’는 어디에 들어가는가?", answer:"⑤", explain:"바로 앞의 suffering·stress 경험과 대조하여 happiness 감소를 말한 뒤 마지막 결론으로 이어진다."}
    },
    {
      id:"st6", group:"suneung", order:6, nav:"수특 6", title:"위기와 미디어 선택",
      source:"수특 프린트 6번", type:"요약문 완성",
      flow:["즉각 위험 → 전통매체","복잡·주관 위기 → 소셜미디어","세대에 따라 선호도 달라짐"],
      oneLine:"위기 유형과 세대 특성이 어떤 매체를 선택하는지 함께 좌우한다.",
      keyExpr:"urgent crisis → traditional / complex crisis → social / generation matters",
      quotes:[
        {src:"수특 6", en:"During crises that present immediate danger, people seek trusted and verified sources to ease their immediate concerns.", ko:"즉각적 위험이 있는 위기에서는 사람들이 불안을 줄이기 위해 신뢰할 수 있고 검증된 정보원을 찾는다.", why:"전통매체 선택의 이유."},
        {src:"수특 6", en:"Thus, both traditional and social media play a prominent role in delivering important scientific information to the public during crises.", ko:"따라서 전통매체와 소셜미디어 모두 위기 때 중요한 과학 정보를 전달하는 데 큰 역할을 한다.", why:"양쪽 매체를 종합한 결론."}
      ],
      grammar:{title:"although / be likely to", body:"although는 양보 ‘비록 ~이지만’. be likely to V는 ‘~할 가능성이 높다’.", cue:"media를 좋고 나쁨으로 나누는 글이 아니라 조건에 따라 선택이 달라진다는 점."},
      inputs:[
        {id:"st6-i1", prompt:"People seek trusted and ______ sources during immediate danger.", answer:"verified", hint:"검증된"},
        {id:"st6-i2", prompt:"Older audiences indicate a ______ for traditional media.", answer:"preference", hint:"선호"}
      ],
      dissect:{sentence:"For other crisis types, people are more likely to turn to social media.", fields:[
        {label:"주어", answer:"people"},{label:"가능성 표현", answer:"are more likely to"},{label:"동사", answer:"turn"},{label:"전치사 목적어", answer:"social media"}
      ]},
      rebuild:{ko:"전통 매체와 소셜 미디어 모두 위기 상황에서 중요한 역할을 한다.", bank:["Both traditional and social media","play a prominent role","during crises."], answer:"Both traditional and social media play a prominent role during crises."},
      transform:{badge:"워크북 변형", question:"정치적·공중보건 위기에서 소셜미디어가 더 사용될 수 있는 이유는?", options:[
        "정보가 단순하고 한 가지 정답만 있기 때문이다.",
        "다양한 목소리와 전문가 의견, 보충 정보가 필요할 수 있기 때문이다.",
        "전통매체가 과학 정보를 전달하지 않기 때문이다.",
        "젊은 세대만 위기를 경험하기 때문이다."
      ], answer:1, explain:"본문은 subjective하고 less straightforward한 위기에서 multiple voices와 supplementary information을 찾는다고 설명한다."},
      original:{label:"원래 문제: 요약", question:"요약문의 (A), (B)는?", answer:"urgent / generational", explain:"즉각 위험=urgent, 연령대에 따른 선택 차이=generational factors."}
    },
    {
      id:"st7", group:"suneung", order:7, nav:"수특 7", title:"영화와 ‘지나간 현재’",
      source:"수특 프린트 7번", type:"요약문 완성",
      flow:["현재의 규범은 당사자에게 보이지 않음","오래된 영화에서 과거의 ‘현재’가 드러남","과거-현재 대비로 현재 인식이 가시화"],
      oneLine:"시대가 지난 영화는 그 시대에 당연했던 규범을 드러내 현재의 관점까지 되돌아보게 한다.",
      keyExpr:"dated film → bygone present → present becomes visible",
      quotes:[
        {src:"수특 7", en:"As the set of cultural norms and categories taken for granted at any particular time, the present is normally more or less invisible to those who participate in it.", ko:"어느 시대에 당연시되는 문화 규범의 집합으로서 현재는 그 시대 사람들에게 대체로 보이지 않는다.", why:"글의 출발 논리."},
        {src:"수특 7", en:"The present is also visible in contemporary historical dramas that ‘read the past in terms of the present’.", ko:"현재는 ‘현재의 관점으로 과거를 읽는’ 현대 역사 드라마에서도 드러난다.", why:"현재가 영화 속에서 드러나는 두 번째 방식."}
      ],
      grammar:{title:"taken for granted / that 관계절", body:"taken for granted는 과거분사구로 cultural norms and categories를 꾸민다. dramas that read...에서 that은 dramas를 꾸미는 관계대명사.", cue:"present가 ‘지금’이면서 동시에 각 시대의 ‘현재’라는 점을 설명."},
      inputs:[
        {id:"st7-i1", prompt:"Cultural norms may be taken for ______.", answer:"granted", hint:"당연시되다"},
        {id:"st7-i2", prompt:"A culturally dated film can show a ______ present.", answer:"bygone", hint:"지나간 현재"}
      ],
      dissect:{sentence:"The present is also visible in contemporary historical dramas that ‘read the past in terms of the present’.", fields:[
        {label:"선행사", answer:"dramas"},{label:"관계대명사", answer:"that"},{label:"관계절 동사", answer:"read"},{label:"핵심 전치사구", answer:"in terms of the present"}
      ]},
      rebuild:{ko:"현재는 현재의 관점에서 과거를 해석하는 현대 역사 드라마에서도 드러난다.", bank:["The present is also visible","in contemporary historical dramas","that read the past","in terms of the present."], answer:"The present is also visible in contemporary historical dramas that read the past in terms of the present."},
      transform:{badge:"워크북 변형", question:"‘bygone present’가 가장 잘 드러나는 경우는?", options:[
        "시대와 무관한 추상영화",
        "오늘날의 규범만 의도적으로 설명하는 다큐멘터리",
        "과거에는 자연스러웠지만 지금은 낯설게 보이는 태도를 당연하게 담은 오래된 영화",
        "미래 사회만을 상상한 영화"
      ], answer:2, explain:"본문은 시대가 지난 영화 속에서 당시 당연했던 태도가 오늘날 낯설게 보일 때 그 시대의 ‘현재’가 가시화된다고 한다."},
      original:{label:"원래 문제: 요약", question:"요약문의 (A), (B)는?", answer:"period-specific / visualized", explain:"시대 고유의 태도를 보여주고, 과거와 현재의 차이를 통해 현재에 대한 인식이 가시화된다."}
    },

    {
      id:"m29", group:"mock", order:1, nav:"학평 29", title:"자동화된 행동과 문명",
      source:"2026년 6월 고2 학평 29번", type:"어법",
      flow:["문명은 생각 없이 수행 가능한 행동 확대","할인쿠폰 사례: 자동 반응","시간 절약보다 brain strain 절감"],
      oneLine:"우리는 할인 자체뿐 아니라 생각해야 하는 부담까지 줄여주는 자동화된 선택을 기대한다.",
      keyExpr:"automatic assumption → double duty → reduce brain strain",
      quotes:[
        {src:"29번", en:"Mailed-out coupons that — because of a printing error — offered no savings to recipients produced just as much customer response as did error-free coupons that offered substantial savings.", ko:"인쇄 오류로 절약 혜택이 없는 쿠폰도 실제 할인 쿠폰만큼 고객 반응을 만들어 냈다.", why:"사람이 쿠폰을 기계적으로 처리한다는 실험 근거."},
        {src:"29번", en:"Not only do we expect them to save us money, we also expect them to save us the time and mental energy required to think about how to do it.", ko:"우리는 돈뿐 아니라 어떻게 해야 할지 생각하는 시간과 정신 에너지까지 아껴 주기를 기대한다.", why:"도치와 글의 핵심 결론."}
      ],
      grammar:{title:"Not only 도치 / 관계절", body:"Not only가 문두에 오면 조동사 do가 주어 앞에 온다. coupons that offered...의 that은 coupons를 꾸미는 주격 관계대명사.", cue:"원문 어법 오류는 producing이 아니라 produced여야 한다는 점까지 연결."},
      inputs:[
        {id:"m29-i1", prompt:"Mailed-out coupons ______ just as much customer response.", answer:"produced", hint:"주절의 과거동사"},
        {id:"m29-i2", prompt:"Not only ______ we expect them to save us money...", answer:"do", hint:"문두 도치"}
      ],
      dissect:{sentence:"Not only do we expect them to save us money, we also expect them to save us the time and mental energy.", fields:[
        {label:"도치 조동사", answer:"do"},{label:"주어", answer:"we"},{label:"첫 동사", answer:"expect"},{label:"상관 표현", answer:"not only"}
      ]},
      rebuild:{ko:"우리는 그것들이 돈을 아껴주기만 기대하는 것이 아니다.", bank:["Not only","do we expect them","to save us money"], answer:"Not only do we expect them to save us money"},
      transform:{badge:"워크북 변형", question:"쿠폰 사례가 보여주는 핵심은?", options:[
        "소비자는 할인율을 항상 정확히 계산한다.",
        "할인쿠폰은 금전적 절약보다 품질 신호 역할만 한다.",
        "사람들은 쿠폰을 보면 실제 혜택을 매번 검토하지 않고 자동적으로 반응할 수 있다.",
        "오류 쿠폰은 정상 쿠폰보다 훨씬 적은 반응을 얻는다."
      ], answer:2, explain:"혜택이 없는 오류 쿠폰도 정상 쿠폰과 비슷한 반응을 얻었다는 점이 자동화된 가정을 보여준다."},
      original:{label:"원래 문제: 어법", question:"어법상 틀린 것은?", answer:"② producing → produced", explain:"주어 Mailed-out coupons의 본동사가 필요하므로 과거동사 produced가 와야 한다."}
    },
    {
      id:"m30", group:"mock", order:2, nav:"학평 30", title:"혁신 제품의 가격탄력성",
      source:"2026년 6월 고2 학평 30번", type:"문맥 어휘",
      flow:["혁신 제품: 대체재 적음 → 가격탄력성 낮음","초기 구매자는 성능에 더 민감","높은 가격이 품질 신호로 인식"],
      oneLine:"혁신 제품 초기 시장에서는 소비자가 가격보다 성능·희소성에 반응해 높은 가격도 수용할 수 있다.",
      keyExpr:"few substitutes → low elasticity → price as quality signal",
      quotes:[
        {src:"30번", en:"Usually, innovative high-tech products have low price elasticity.", ko:"보통 혁신적 첨단 제품은 가격탄력성이 낮다.", why:"글 전체의 출발 주장."},
        {src:"30번", en:"Furthermore, the high price of these products is often perceived as a sign of quality and reinforces a customer’s confidence in the company.", ko:"더 나아가 높은 가격은 품질의 신호로 인식되어 회사에 대한 고객의 신뢰를 강화한다.", why:"높은 가격이 수요를 반드시 낮추지 않는 이유."}
      ],
      grammar:{title:"be perceived as / 비교 표현", body:"be perceived as는 ‘~로 인식되다’. more sensitive to A than B는 ‘B보다 A에 더 민감하다’. 문맥상 이 지문에서는 초기 구매자가 price보다 performance에 더 민감해야 한다.", cue:"30번은 문법보다 문맥상 단어 방향을 판단하는 문제."},
      inputs:[
        {id:"m30-i1", prompt:"Innovative high-tech products have low price ______.", answer:"elasticity", hint:"가격탄력성"},
        {id:"m30-i2", prompt:"A high price can be perceived as a sign of ______.", answer:"quality", hint:"품질 신호"}
      ],
      dissect:{sentence:"The high price of these products is often perceived as a sign of quality.", fields:[
        {label:"주어 핵심", answer:"price"},{label:"수동태", answer:"is perceived"},{label:"전치사", answer:"as"},{label:"보어 핵심명사", answer:"sign"}
      ]},
      rebuild:{ko:"이 제품들의 높은 가격은 종종 품질의 신호로 인식된다.", bank:["The high price of these products","is often perceived","as a sign of quality."], answer:"The high price of these products is often perceived as a sign of quality."},
      transform:{badge:"워크북 변형", question:"초기 혁신 제품 시장에서 가격을 크게 낮추지 않는 이유로 가장 적절한 것은?", options:[
        "구매자들이 가격 변화에 매우 민감해서",
        "대체재가 많아 경쟁이 심해서",
        "구매자들이 성능·혁신성을 중시하고 높은 가격 자체를 품질 신호로 볼 수 있어서",
        "제품의 성능이 모두 동일해서"
      ], answer:2, explain:"본문은 대체재가 적고 초기 구매자가 성능에 관심이 크며 높은 가격을 품질 신호로 본다고 설명한다."},
      original:{label:"원래 문제: 문맥 어휘", question:"문맥상 적절하지 않은 것은?", answer:"③ more → less", explain:"초기 구매자는 price보다 additional performance에 더 민감하므로 ‘more sensitive to price’는 방향이 반대다."}
    },
    {
      id:"m31", group:"mock", order:3, nav:"학평 31", title:"도시 공간의 future-proof 성격",
      source:"2026년 6월 고2 학평 31번", type:"빈칸 추론",
      flow:["오래된 광장·상점도 계속 사용","용도는 시대에 따라 변화","도시는 용도 변화를 수용해서 지속"],
      oneLine:"좋은 도시 공간은 특정 기능에 고정되지 않고 시대에 맞춰 용도를 바꿀 수 있어 오래 살아남는다.",
      keyExpr:"future-proof = evolving uses",
      quotes:[
        {src:"31번", en:"The same physical store that once sold buggy whips and typewriters might now repair damaged phones and sell bubble tea.", ko:"예전에 마차 채찍과 타자기를 팔던 같은 가게가 지금은 휴대폰을 수리하고 버블티를 팔 수도 있다.", why:"용도의 변화가 핵심이라는 구체 예시."},
        {src:"31번", en:"The great advantage of a city architecture is its ability to support change in uses.", ko:"도시 건축의 큰 장점은 용도의 변화를 수용하는 능력이다.", why:"빈칸의 핵심을 직접 설명."}
      ],
      grammar:{title:"that 관계절 / ability to V", body:"store that once sold...의 that은 store를 꾸민다. ability to support는 ‘수용할 능력’.", cue:"future-proof를 기술적으로 ‘새 건물’이 아니라 ‘용도 변화 수용’으로 잡게 하기."},
      inputs:[
        {id:"m31-i1", prompt:"The city street is described as ______-proof.", answer:"future", hint:"future-proof"},
        {id:"m31-i2", prompt:"Its great advantage is the ability to support change in ______.", answer:"uses", hint:"용도"}
      ],
      dissect:{sentence:"The great advantage of a city architecture is its ability to support change in uses.", fields:[
        {label:"주어 핵심명사", answer:"advantage"},{label:"동사", answer:"is"},{label:"보어 핵심명사", answer:"ability"},{label:"to부정사 동사", answer:"support"}
      ]},
      rebuild:{ko:"도시 건축의 큰 장점은 용도 변화를 수용하는 능력이다.", bank:["The great advantage","of a city architecture","is its ability","to support change in uses."], answer:"The great advantage of a city architecture is its ability to support change in uses."},
      transform:{badge:"워크북 변형", question:"지문에서 ‘future-proof’의 의미로 가장 가까운 것은?", options:[
        "미래 기술만 사용하는 것",
        "기능을 한 가지로 제한하는 것",
        "시간이 지나도 변화하는 용도를 수용할 수 있는 것",
        "온라인 쇼핑을 없애는 것"
      ], answer:2, explain:"도시의 같은 공간이 시대에 따라 다른 기능을 수행하는 예시가 반복된다."},
      original:{label:"원래 문제: 빈칸", question:"빈칸 정답은?", answer:"evolving uses", explain:"같은 물리적 공간이 시대에 따라 서로 다른 용도를 받아들이는 것이 핵심이다."}
    },
    {
      id:"m32", group:"mock", order:4, nav:"학평 32", title:"식물의 접촉 반응",
      source:"2026년 6월 고2 학평 32번", type:"빈칸 추론",
      flow:["접촉이 유전자·호르몬 반응 촉발","식물이 에너지 우선순위 재조정","반복 접촉 → 위쪽 성장 감소"],
      oneLine:"식물은 접촉을 단순 자극으로 넘기지 않고 방어·적응을 위해 성장 에너지를 재배치한다.",
      keyExpr:"touch → genetic response → inhibit growth",
      quotes:[
        {src:"32번", en:"Within thirty minutes of being touched, 10 percent of the plant’s genome was altered.", ko:"접촉 후 30분 안에 식물 게놈의 10%가 변화했다.", why:"접촉의 영향이 매우 크다는 근거."},
        {src:"32번", en:"Touched multiple times, arabidopsis cut its upward growth rate by as much as 30 percent.", ko:"여러 번 접촉된 애기장대는 위쪽 성장률을 최대 30%까지 줄였다.", why:"빈칸의 ‘성장 억제’를 직접 뒷받침."}
      ],
      grammar:{title:"분사구문 Touched / by as much as", body:"Touched multiple times는 ‘여러 번 접촉되었을 때’라는 수동 분사구문. by as much as 30 percent는 변화량 ‘최대 30%만큼’.", cue:"빈칸은 증가가 아니라 억제 방향임을 수치로 확인."},
      inputs:[
        {id:"m32-i1", prompt:"Repeated touch can ______ plant growth.", answer:"inhibit", hint:"억제하다"},
        {id:"m32-i2", prompt:"The upward growth rate was cut by as much as ______ percent.", answer:"30", hint:"수치"}
      ],
      dissect:{sentence:"Touched multiple times, arabidopsis cut its upward growth rate by as much as 30 percent.", fields:[
        {label:"분사", answer:"Touched"},{label:"주절 주어", answer:"arabidopsis"},{label:"주절 동사", answer:"cut"},{label:"변화량", answer:"30 percent"}
      ]},
      rebuild:{ko:"여러 번 접촉된 애기장대는 위쪽 성장률을 최대 30%까지 줄였다.", bank:["Touched multiple times,","arabidopsis cut","its upward growth rate","by as much as 30 percent."], answer:"Touched multiple times, arabidopsis cut its upward growth rate by as much as 30 percent."},
      transform:{badge:"워크북 변형", question:"접촉 후 식물에서 일어난 변화의 방향은?", options:[
        "성장에 더 많은 에너지를 집중했다.",
        "접촉을 무시하고 유전자 발현을 유지했다.",
        "교란에 대응하도록 우선순위를 바꾸고 위쪽 성장을 줄였다.",
        "번식률만 높이고 성장률은 그대로 유지했다."
      ], answer:2, explain:"본문은 disturbance 대응을 위해 에너지를 성장에서 다른 곳으로 reroute하고 성장률을 낮춘다고 설명한다."},
      original:{label:"원래 문제: 빈칸", question:"빈칸 정답은?", answer:"inhibit their growth", explain:"반복 접촉 후 upward growth rate가 최대 30% 감소한 것이 직접 근거다."}
    },
    {
      id:"m35", group:"mock", order:5, nav:"학평 35", title:"예술 작품과 맥락",
      source:"2026년 6월 고2 학평 35번", type:"무관한 문장",
      flow:["예술 이해는 시각만의 과정 아님","제작 시기·문화·창작자 등 맥락 수집","맥락으로 의미·상징 해석"],
      oneLine:"예술 작품을 이해하려면 작품 자체뿐 아니라 역사·사회·문화적 맥락을 함께 읽어야 한다.",
      keyExpr:"contextual information → interpretation",
      quotes:[
        {src:"35번", en:"Any information we can gather helps us understand the work’s context.", ko:"우리가 모을 수 있는 모든 정보는 작품의 맥락을 이해하는 데 도움이 된다.", why:"맥락 수집의 역할."},
        {src:"35번", en:"Using all the contextual information we have gathered, we interpret the work of art’s content to discover what it means or symbolizes.", ko:"수집한 모든 맥락 정보를 이용해 작품 내용을 해석하고 의미나 상징을 파악한다.", why:"글의 결론."}
      ],
      grammar:{title:"using 분사구문 / what 명사절", body:"Using...은 주어 we가 맥락 정보를 ‘사용하면서’ 해석한다는 분사구문. what it means는 discover의 목적어 역할을 하는 명사절.", cue:"③만 ‘맥락 영향 없이 보자’고 말해 흐름과 반대."},
      inputs:[
        {id:"m35-i1", prompt:"Contextual information helps us ______ a work of art.", answer:"interpret", hint:"해석하다"},
        {id:"m35-i2", prompt:"We discover what a work means or ______.", answer:"symbolizes", hint:"상징하다"}
      ],
      dissect:{sentence:"Using all the contextual information we have gathered, we interpret the work of art’s content.", fields:[
        {label:"분사", answer:"Using"},{label:"주절 주어", answer:"we"},{label:"주절 동사", answer:"interpret"},{label:"목적어 핵심", answer:"content"}
      ]},
      rebuild:{ko:"수집한 모든 맥락 정보를 이용하여 우리는 예술 작품의 내용을 해석한다.", bank:["Using all the contextual information","we have gathered,","we interpret","the work of art’s content."], answer:"Using all the contextual information we have gathered, we interpret the work of art’s content."},
      transform:{badge:"워크북 변형", question:"다음 중 글의 주장과 가장 일치하는 것은?", options:[
        "작품은 오직 눈에 보이는 요소만으로 해석해야 한다.",
        "작품의 역사적·사회적 맥락은 해석을 방해하므로 배제해야 한다.",
        "작품에 대한 다양한 맥락 정보가 의미 해석에 도움을 준다.",
        "작가의 시대나 문화는 작품의 의미와 무관하다."
      ], answer:2, explain:"글 전체가 contextual information을 통해 작품 의미를 해석하는 과정을 설명한다."},
      original:{label:"원래 문제: 무관문", question:"전체 흐름과 관계없는 문장은?", answer:"③", explain:"③은 맥락의 영향을 받지 말아야 한다고 말해, 맥락 정보를 활용해야 한다는 글 전체 흐름과 반대다."}
    },
    {
      id:"m36", group:"mock", order:6, nav:"학평 36", title:"초기 인류의 여유와 번영",
      source:"2026년 6월 고2 학평 36번", type:"글의 순서",
      flow:["대부분 동물·초기 조상: 생존에 에너지 소모","지능과 사냥 기술 발달","먹잇감 풍부한 시기 → 번영과 여유"],
      oneLine:"초기 인류는 사냥 효율과 지능이 발달하면서 생존에만 쓰던 시간에서 벗어나 여유를 얻기 시작했다.",
      keyExpr:"survival pressure → efficient hunting → prosperity",
      quotes:[
        {src:"36번", en:"The constant search for food would have put heavy demands upon them.", ko:"끊임없는 먹이 탐색은 그들에게 큰 부담을 주었을 것이다.", why:"초기 조상의 출발 상태."},
        {src:"36번", en:"They used brain not brawn to kill their prey.", ko:"그들은 먹잇감을 잡는 데 힘이 아니라 두뇌를 사용했다.", why:"상황 변화를 만드는 핵심."}
      ],
      grammar:{title:"would have p.p. / not A but B 변형", body:"would have put은 과거 상황에 대한 추정. brain not brawn은 ‘힘이 아니라 두뇌’라는 대비.", cue:"순서 문제는 대명사 they와 But as...의 전환을 연결."},
      inputs:[
        {id:"m36-i1", prompt:"They used brain not ______ to kill their prey.", answer:"brawn", hint:"근력"},
        {id:"m36-i2", prompt:"The search for food would have ______ heavy demands upon them.", answer:"put", hint:"would have + p.p."}
      ],
      dissect:{sentence:"The constant search for food would have put heavy demands upon them.", fields:[
        {label:"주어 핵심", answer:"search"},{label:"조동사 묶음", answer:"would have"},{label:"과거분사", answer:"put"},{label:"전치사 목적어", answer:"them"}
      ]},
      rebuild:{ko:"끊임없는 먹이 탐색은 그들에게 큰 부담을 주었을 것이다.", bank:["The constant search for food","would have put","heavy demands","upon them."], answer:"The constant search for food would have put heavy demands upon them."},
      transform:{badge:"워크북 변형", question:"글의 변화 과정으로 가장 적절한 것은?", options:[
        "농경 → 지능 감소 → 사냥 포기",
        "생존 부담 → 효율적 사냥과 지능 발달 → 일부 시기 여유와 풍요",
        "놀이 증가 → 먹잇감 감소 → 이주",
        "포식자 증가 → 수면 증가 → 번영"
      ], answer:1, explain:"B가 생존 부담, A가 사냥 효율·지능 발달, C가 풍요와 여유로 이어진다."},
      original:{label:"원래 문제: 순서", question:"올바른 순서는?", answer:"(B) → (A) → (C)", explain:"B가 앞의 동물 생존 논리를 초기 조상으로 연결하고, A의 But as...가 변화, C가 그 결과인 번영을 보여준다."}
    },
    {
      id:"m38", group:"mock", order:7, nav:"학평 38", title:"폭력 게임과 둔감화",
      source:"2026년 6월 고2 학평 38번", type:"문장 삽입",
      flow:["폭력 목격의 정상 반응: 부정감정·각성","반복 노출 → desensitization","감정 반응 감소 → 공감 감소"],
      oneLine:"반복적인 폭력 노출은 정상적인 정서 반응을 무디게 하고, 그 결과 공감 능력까지 낮출 수 있다.",
      keyExpr:"repeated exposure → desensitization → reduced empathy",
      quotes:[
        {src:"38번", en:"With repeated exposure to violent events, this normal reaction might become blunted, a phenomenon known as desensitization.", ko:"폭력 사건에 반복적으로 노출되면 정상 반응이 무뎌질 수 있는데, 이를 둔감화라고 한다.", why:"핵심 개념 정의."},
        {src:"38번", en:"A significant body of work shows an association between extensive violent video gaming and reduced empathy in people.", ko:"많은 연구는 광범위한 폭력 게임과 사람들의 공감 감소 사이의 연관성을 보여준다.", why:"결과에 대한 연구 근거."}
      ],
      grammar:{title:"known as / leading to", body:"a phenomenon known as...에서 known은 phenomenon을 뒤에서 꾸민다. leading to...는 앞 상황의 결과를 덧붙이는 분사구문.", cue:"삽입문장의 ‘The next step’이 직전 desensitization 다음 단계라는 연결 표지."},
      inputs:[
        {id:"m38-i1", prompt:"Repeated exposure may cause ______, a blunted response to violence.", answer:"desensitization", hint:"둔감화"},
        {id:"m38-i2", prompt:"Diminished emotional responses can lead to reduced ______.", answer:"empathy", hint:"공감"}
      ],
      dissect:{sentence:"With repeated exposure to violent events, this normal reaction might become blunted.", fields:[
        {label:"전치사", answer:"With"},{label:"주어", answer:"this normal reaction"},{label:"조동사", answer:"might"},{label:"보어", answer:"blunted"}
      ]},
      rebuild:{ko:"반복적으로 폭력 사건에 노출되면 이 정상 반응은 무뎌질 수 있다.", bank:["With repeated exposure","to violent events,","this normal reaction","might become blunted."], answer:"With repeated exposure to violent events, this normal reaction might become blunted."},
      transform:{badge:"워크북 변형", question:"삽입문의 ‘The next step in this problematic process’가 가리키는 흐름은?", options:[
        "폭력 게임 연구 → 게임 판매 증가",
        "정상적 부정 반응 → 반복 노출에 의한 둔감화 → 감정 반응 감소와 공감 저하",
        "공감 증가 → 폭력 반응 증가",
        "생리적 각성 → 게임 중단 → 공감 회복"
      ], answer:1, explain:"삽입문은 desensitization 다음 단계로 diminished emotional responses와 reduced empathy를 연결한다."},
      original:{label:"원래 문제: 문장 삽입", question:"주어진 문장이 들어갈 위치는?", answer:"⑤", explain:"④ 뒤에서 desensitization을 정의한 다음 ‘The next step’이 자연스럽게 이어지고, 마지막 연구 결과가 reduced empathy를 뒷받침한다."}
    }
  ],
  comprehensive:[
    {id:"c1",group:"textbook",kind:"mc",prompt:"교과서 3과: FPTP의 약점으로 가장 적절한 것은?",options:["항상 2차 개표가 필요하다.","과반수 지지 없이도 승리할 수 있다.","후순위 표만 반영한다.","승자를 결정할 수 없다."],answer:1,explain:"본문 p.70에서 majority의 지지 없이 이길 수 있다고 명시한다."},
    {id:"c2",group:"textbook",kind:"input",prompt:"교과서 4과: demand that manufacturers ______ devices",answer:"design"},
    {id:"c3",group:"textbook",kind:"input",prompt:"교과서 5과 핵심 개념: ancient sculptures의 다색채색 = ______",answer:"polychromy"},
    {id:"c4",group:"suneung",kind:"mc",prompt:"수특 1의 핵심 주장은?",options:["읽기 속도가 모든 이해를 결정한다.","배경지식이 이해에 큰 영향을 준다.","야구 지식이 모든 과목 성적을 높인다.","약한 독자는 강한 독자를 이길 수 없다."],answer:1,explain:"야구 배경지식을 가진 약한 독자가 더 높은 점수를 받았다."},
    {id:"c5",group:"suneung",kind:"input",prompt:"수특 2: 뇌가 이용 가능한 단서를 바꿔 쓰는 유연성은 vicarious ______.",answer:"functioning"},
    {id:"c6",group:"suneung",kind:"mc",prompt:"수특 6: 즉각적 위험이 있는 위기에서 주로 찾는 것은?",options:["검증된 전통 정보원","오직 개인 블로그","오직 학술 논문","광고성 콘텐츠"],answer:0,explain:"immediate danger에서는 trusted and verified sources, TV/radio 같은 traditional sources를 찾는다."},
    {id:"c7",group:"mock",kind:"input",prompt:"학평 32: 반복 접촉은 식물의 성장을 ______할 수 있다. (영어)",answer:"inhibit"},
    {id:"c8",group:"mock",kind:"mc",prompt:"학평 38의 핵심 과정은?",options:["노출 → 둔감화 → 공감 감소","노출 → 공감 증가 → 각성 감소","게임 → 성장 억제 → 회복","맥락 → 해석 → 상징"],answer:0,explain:"repeated exposure가 desensitization을 거쳐 reduced empathy로 이어진다."}
  ]
};