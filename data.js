window.WORKBOOK_DATA = {
  "groups": {
    "textbook": {
      "label": "교과서 3·4·5과"
    },
    "suneung": {
      "label": "수특 1~7"
    },
    "mock": {
      "label": "2026년 6월 학평"
    }
  },
  "lessons": [
    {
      "id": "tb3map",
      "group": "textbook",
      "order": 1,
      "section": "3과 전체",
      "nav": "3과 전체맵",
      "density": "전체 구조",
      "title": "Lesson 3 · There’s More than One Way to Vote",
      "source": "교과서 3과 p.67~73",
      "type": "전체 논리 · 비교 구조",
      "flow": [
        "집단 의사결정에는 서로 다른 의견이 존재",
        "같은 선호표를 FPTP · AV · Condorcet로 계산",
        "방식마다 승자·약점이 달라 장단점 비교가 필요"
      ],
      "oneLine": "3과는 ‘어떤 투표법이 최고인가’를 고르는 글이 아니라, 방식에 따라 결과가 달라지므로 의사결정 과정을 이해해야 한다는 글이다.",
      "keyExpr": "different methods → different winners → weigh pros and cons",
      "quotes": [
        {
          "src": "p.68",
          "en": "The entire council was curious to find out if the different methods would yield different results.",
          "ko": "학생회 전체는 서로 다른 방식이 서로 다른 결과를 낼지 궁금해했다.",
          "why": "세 방식 비교의 출발점."
        },
        {
          "src": "p.73",
          "en": "No voting system is flawless or clearly superior to another.",
          "ko": "어떤 투표 제도도 완벽하지 않으며 다른 제도보다 명백히 우월하지도 않다.",
          "why": "한 과 전체의 결론."
        }
      ],
      "grammar": {
        "title": "비교·대조 신호 잡기",
        "body": "본문은 방법을 하나씩 소개한 뒤 winner와 weakness를 비교한다. therefore, as a result, however, unfortunately, ultimately 같은 신호어를 따라가면 구조가 보인다.",
        "cue": "학생에게 세 방식의 ‘승자 / 장점 / 약점’을 먼저 표로 말하게 한 뒤 세부 페이지로 들어가면 좋아."
      },
      "inputs": [
        {
          "id": "tb3map-i1",
          "prompt": "FPTP에서 승자는 option ______였다.",
          "answer": "C",
          "hint": "charity concert"
        },
        {
          "id": "tb3map-i2",
          "prompt": "AV에서 승자는 option ______였다.",
          "answer": "B",
          "hint": "bake sale"
        },
        {
          "id": "tb3map-i3",
          "prompt": "Condorcet에서 승자는 option ______였다.",
          "answer": "A",
          "hint": "art show"
        }
      ],
      "dissect": {
        "sentence": "No voting system is flawless or clearly superior to another.",
        "fields": [
          {
            "label": "주어 핵심",
            "answer": "system"
          },
          {
            "label": "동사",
            "answer": "is"
          },
          {
            "label": "첫 보어",
            "answer": "flawless"
          },
          {
            "label": "비교 표현",
            "answer": "superior to"
          }
        ]
      },
      "rebuild": {
        "ko": "어떤 투표 제도도 완벽하지 않으며 다른 제도보다 명백히 우월하지도 않다.",
        "bank": [
          "or clearly superior",
          "No voting system",
          "to another.",
          "is flawless"
        ],
        "answer": "No voting system is flawless or clearly superior to another."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "3과 전체 논리를 가장 정확히 요약한 것은?",
        "options": [
          "복잡한 투표 방식일수록 항상 더 공정하다.",
          "같은 선호 자료라도 투표 방식에 따라 승자가 달라질 수 있으며 각 방식에는 장단점이 있다.",
          "과반수 지지를 얻는 방식만 민주적이다.",
          "학생회는 결국 가장 단순한 FPTP를 선택했다."
        ],
        "answer": 1,
        "explain": "본문의 핵심은 세 방식이 서로 다른 승자를 만들고, 어느 방식도 완벽하지 않다는 점이다."
      },
      "original": {
        "label": "3과 전체 확인",
        "question": "학생회가 최종적으로 선택한 방식은?",
        "answer": "The Condorcet method.",
        "explain": "p.73에서 학생들은 각 선택지를 직접 비교하는 아이디어가 마음에 들어 Condorcet 방식을 선택한다."
      }
    },
    {
      "id": "tb3p67",
      "group": "textbook",
      "order": 2,
      "section": "3과 본문",
      "nav": "p.67 도입",
      "density": "본문 고밀도",
      "title": "p.67 · Why Group Decisions Need Voting",
      "source": "교과서 3과 p.67",
      "type": "도입 · 주제 설정",
      "flow": [
        "개인 선택은 혼자 결정",
        "집단 결정은 다양한 목소리·의견 포함",
        "투표가 더 공정하고 효율적인 결정을 돕는다"
      ],
      "oneLine": "개인 선택보다 집단 의사결정이 복잡하기 때문에, 다양한 투표 방식이 필요하다.",
      "keyExpr": "group decision-making → differing opinions → voting methods",
      "quotes": [
        {
          "src": "p.67",
          "en": "Group decision-making is not as simple as our personal choices, as it involves numerous voices with differing opinions.",
          "ko": "집단 의사결정은 서로 다른 의견을 가진 많은 목소리를 포함하므로 개인적 선택만큼 단순하지 않다.",
          "why": "집단 의사결정이 복잡한 이유를 직접 설명한다."
        },
        {
          "src": "p.67",
          "en": "Voting is often used to make group decisions fairer and more efficient, and various voting methods have been developed over time.",
          "ko": "투표는 집단 결정을 더 공정하고 효율적으로 만들기 위해 자주 사용되며, 다양한 투표 방식이 발전해 왔다.",
          "why": "이 글이 투표 방식으로 넘어가는 연결 문장."
        }
      ],
      "grammar": {
        "title": "not as A as B / make O + 형용사",
        "body": "not as simple as는 ‘~만큼 단순하지 않은’. make group decisions fairer and more efficient에서 make + 목적어 + 형용사는 ‘목적어를 ~하게 만들다’.",
        "cue": "simple ↔ complex, fair ↔ fairer를 같이 묶어 확인."
      },
      "inputs": [
        {
          "id": "tb3p67-i1",
          "prompt": "Group decision-making involves numerous voices with differing ______.",
          "answer": "opinions",
          "hint": "서로 다른 의견"
        },
        {
          "id": "tb3p67-i2",
          "prompt": "Voting can make group decisions fairer and more ______.",
          "answer": "efficient",
          "hint": "효율적인"
        }
      ],
      "dissect": {
        "sentence": "Voting is often used to make group decisions fairer and more efficient.",
        "fields": [
          {
            "label": "주어",
            "answer": "Voting"
          },
          {
            "label": "수동태",
            "answer": "is used"
          },
          {
            "label": "목적격보어 1",
            "answer": "fairer"
          },
          {
            "label": "목적격보어 2",
            "answer": "more efficient"
          }
        ]
      },
      "rebuild": {
        "ko": "투표는 집단 결정을 더 공정하고 효율적으로 만들기 위해 자주 사용된다.",
        "bank": [
          "to make group decisions",
          "Voting",
          "fairer and more efficient.",
          "is often used"
        ],
        "answer": "Voting is often used to make group decisions fairer and more efficient."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "p.67의 역할로 가장 적절한 것은?",
        "options": [
          "세 투표 방식의 계산법을 자세히 설명한다.",
          "집단 의사결정이 복잡한 이유를 제시하고 투표 방식 소개로 연결한다.",
          "Condorcet 방식의 약점을 비판한다.",
          "학생회의 최종 결정을 제시한다."
        ],
        "answer": 1,
        "explain": "도입부는 개인 선택과 집단 결정을 대비한 뒤, 투표가 필요한 이유를 제시한다."
      },
      "original": {
        "label": "교과서 Q1",
        "question": "Why is group decision-making more complex than personal choices?",
        "answer": "Because it involves numerous voices with differing opinions.",
        "explain": "p.67 본문 3번째 문장이 직접 근거다."
      }
    },
    {
      "id": "tb3p68",
      "group": "textbook",
      "order": 3,
      "section": "3과 본문",
      "nav": "p.68 상황",
      "density": "본문 고밀도",
      "title": "p.68 · The Student Council’s Problem",
      "source": "교과서 3과 p.68",
      "type": "상황 설정 · 세 방식 소개",
      "flow": [
        "모금 방법 3개를 두고 의견 충돌",
        "Ms. Akers가 익숙한 방식 대신 다른 방식 제안",
        "FPTP · AV · Condorcet 세 방식 실험"
      ],
      "oneLine": "학생회는 같은 선택지를 세 투표 방식으로 계산해 결과가 달라지는지 확인하려 한다.",
      "keyExpr": "conflicting opinions → try three systems → different results?",
      "quotes": [
        {
          "src": "p.68",
          "en": "When they asked for advice from Ms. Akers, the council’s advisor, she encouraged them not to use the familiar voting method, but to try something different instead.",
          "ko": "학생회가 고문인 Ms. Akers에게 조언을 구하자, 그녀는 익숙한 투표 방식을 쓰지 말고 다른 것을 시도해 보라고 권했다.",
          "why": "p.77 not A but B의 본문 출처."
        },
        {
          "src": "p.68",
          "en": "The entire council was curious to find out if the different methods would yield different results.",
          "ko": "학생회 전체는 서로 다른 방식이 서로 다른 결과를 낼지 궁금해했다.",
          "why": "세 방식 비교 실험의 핵심 질문."
        }
      ],
      "grammar": {
        "title": "encourage O not to V, but to V / 간접의문문 if",
        "body": "encourage them not to use ..., but to try ...는 to부정사를 병렬로 맞춘다. find out if S V는 ‘~인지 알아보다’.",
        "cue": "not to use ↔ but to try의 형태를 반드시 나란히 표시."
      },
      "inputs": [
        {
          "id": "tb3p68-i1",
          "prompt": "There were ______ opinions about the three options.",
          "answer": "conflicting",
          "hint": "서로 충돌하는"
        },
        {
          "id": "tb3p68-i2",
          "prompt": "The council wanted to find out if the methods would ______ different results.",
          "answer": "yield",
          "hint": "결과를 내다"
        },
        {
          "id": "tb3p68-i3",
          "prompt": "Ms. Akers encouraged them not to use the familiar method, but to ______ something different.",
          "answer": "try",
          "hint": "병렬"
        }
      ],
      "dissect": {
        "sentence": "The entire council was curious to find out if the different methods would yield different results.",
        "fields": [
          {
            "label": "주어",
            "answer": "The entire council"
          },
          {
            "label": "형용사",
            "answer": "curious"
          },
          {
            "label": "간접의문문 접속사",
            "answer": "if"
          },
          {
            "label": "간접의문문 동사",
            "answer": "would yield"
          }
        ]
      },
      "rebuild": {
        "ko": "학생회 전체는 서로 다른 방식이 서로 다른 결과를 낼지 알아보고 싶어 했다.",
        "bank": [
          "to find out if",
          "The entire council",
          "the different methods would yield different results.",
          "was curious"
        ],
        "answer": "The entire council was curious to find out if the different methods would yield different results."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "Ms. Akers의 제안이 글에서 하는 역할은?",
        "options": [
          "선택지를 하나로 줄인다.",
          "학생회가 세 가지 투표 방식을 비교하게 되는 계기를 만든다.",
          "charity concert를 미리 승자로 정한다.",
          "투표 대신 토론만 하게 한다."
        ],
        "answer": 1,
        "explain": "그녀의 제안 뒤 학생회가 조사하여 세 다른 voting systems를 시험하기로 한다."
      },
      "original": {
        "label": "교과서 Q3",
        "question": "학생회가 시도하기로 한 세 방식은?",
        "answer": "The first-past-the-post (FPTP) method, the alternative vote (AV) method, and the Condorcet method.",
        "explain": "p.68 중간에 세 방식이 직접 열거된다."
      }
    },
    {
      "id": "tb3p69",
      "group": "textbook",
      "order": 4,
      "section": "3과 본문",
      "nav": "p.69 투표표",
      "density": "본문 고밀도",
      "title": "p.69 · How the Preference Ballot Works",
      "source": "교과서 3과 p.69",
      "type": "자료 읽기 · 선호순위",
      "flow": [
        "A=art show, B=bake sale, C=charity concert",
        "20명이 1·2·3순위를 적음",
        "예: CBA = charity concert → bake sale → art show"
      ],
      "oneLine": "p.69는 세 방식 모두가 공유하는 ‘같은 선호표’를 먼저 세팅하는 페이지다.",
      "keyExpr": "order of preference → voting slips → same data",
      "quotes": [
        {
          "src": "p.69",
          "en": "Each of the 20 council members was given a voting slip and instructed to write down the options in order of preference.",
          "ko": "20명의 학생회 구성원 각각은 투표용지를 받아 선택지를 선호 순서대로 적으라는 지시를 받았다.",
          "why": "세 방식 계산의 공통 데이터 형성."
        },
        {
          "src": "p.69",
          "en": "For example, if the charity concert was their first choice, followed by the bake sale and the art show, they would write CBA.",
          "ko": "예를 들어 자선 콘서트가 1순위이고 빵 판매, 미술 전시 순이라면 CBA라고 적는다.",
          "why": "표 읽는 법을 명확히 보여준다."
        }
      ],
      "grammar": {
        "title": "be given / be instructed to V / followed by",
        "body": "was given, was instructed는 수동태. followed by는 ‘~가 뒤따르는’ 뜻의 과거분사 표현이다.",
        "cue": "BAC, CBA 같은 문자열을 실제 선호 순서로 말하게 시켜봐."
      },
      "inputs": [
        {
          "id": "tb3p69-i1",
          "prompt": "The options were written in order of ______.",
          "answer": "preference",
          "hint": "선호"
        },
        {
          "id": "tb3p69-i2",
          "prompt": "A person who prefers B, then A, then C would write ______.",
          "answer": "BAC",
          "hint": "B → A → C"
        },
        {
          "id": "tb3p69-i3",
          "prompt": "After every member had voted, the voting slips were ______.",
          "answer": "counted",
          "hint": "수동태"
        }
      ],
      "dissect": {
        "sentence": "Each of the 20 council members was given a voting slip and instructed to write down the options in order of preference.",
        "fields": [
          {
            "label": "주어 핵심",
            "answer": "Each"
          },
          {
            "label": "첫 수동태",
            "answer": "was given"
          },
          {
            "label": "둘째 수동태",
            "answer": "instructed"
          },
          {
            "label": "to부정사 동사",
            "answer": "write down"
          }
        ]
      },
      "rebuild": {
        "ko": "각 학생회 구성원은 투표용지를 받고 선택지를 선호 순서대로 적으라는 지시를 받았다.",
        "bank": [
          "and instructed",
          "Each of the 20 council members",
          "to write down the options in order of preference.",
          "was given a voting slip"
        ],
        "answer": "Each of the 20 council members was given a voting slip and instructed to write down the options in order of preference."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "p.69의 표가 이후 세 방식 비교에서 중요한 이유는?",
        "options": [
          "각 방식이 서로 다른 사람에게 투표를 받기 때문이다.",
          "같은 선호 데이터를 서로 다른 규칙으로 계산할 수 있게 해 주기 때문이다.",
          "과반수 득표자만 표에 기록되기 때문이다.",
          "2·3순위는 처음부터 제외되기 때문이다."
        ],
        "answer": 1,
        "explain": "같은 20명의 preference data를 세 방식이 서로 다르게 처리하기 때문에 결과를 비교할 수 있다."
      },
      "original": {
        "label": "교과서 Q4",
        "question": "bake sale → art show → charity concert 순으로 선호한다면?",
        "answer": "BAC",
        "explain": "B가 1순위, A가 2순위, C가 3순위이므로 BAC."
      }
    },
    {
      "id": "tb3p70",
      "group": "textbook",
      "order": 5,
      "section": "3과 본문",
      "nav": "p.70 FPTP",
      "density": "본문 고밀도",
      "title": "p.70 · The First-Past-The-Post Method",
      "source": "교과서 3과 p.70",
      "type": "방법 · 결과 · 약점",
      "flow": [
        "1순위 표만 계산",
        "C가 8표로 승리",
        "8/20=40% → 과반수 없이도 승리 가능"
      ],
      "oneLine": "FPTP는 가장 단순하지만, ‘가장 많은 1순위 표’와 ‘과반수 지지’가 같지는 않다는 약점이 있다.",
      "keyExpr": "most first-preference votes ≠ majority support",
      "quotes": [
        {
          "src": "p.70",
          "en": "Voters are given several options, and whichever gets the most first-preference votes wins.",
          "ko": "유권자에게 여러 선택지가 주어지고, 가장 많은 1순위 표를 얻는 것이 승리한다.",
          "why": "FPTP 규칙과 p.77 whichever의 본문 출처."
        },
        {
          "src": "p.70",
          "en": "Neither the second nor third preference matters at all, so they are ignored.",
          "ko": "2순위도 3순위도 전혀 중요하지 않아서 무시된다.",
          "why": "FPTP가 사용하는 정보의 범위를 명확히 한다."
        },
        {
          "src": "p.70",
          "en": "It is possible to win a vote without the support of the majority.",
          "ko": "과반수의 지지 없이도 투표에서 승리하는 것이 가능하다.",
          "why": "FPTP의 핵심 약점."
        }
      ],
      "grammar": {
        "title": "whichever / neither A nor B / which 계속적 용법",
        "body": "whichever gets...는 ‘어느 것이든 가장 많이 얻는 것’. neither A nor B는 A도 B도 아닌. which equaled 40%에서 which는 앞의 8 out of 20이라는 내용을 이어 설명한다.",
        "cue": "8표가 ‘최다’이지만 40%라 ‘과반’은 아니라는 숫자 논리를 꼭 말하게 해."
      },
      "inputs": [
        {
          "id": "tb3p70-i1",
          "prompt": "FPTP counts only the ______-preference votes.",
          "answer": "first",
          "hint": "1순위"
        },
        {
          "id": "tb3p70-i2",
          "prompt": "Option C received ______ first-preference votes.",
          "answer": "8",
          "hint": "20명 중"
        },
        {
          "id": "tb3p70-i3",
          "prompt": "8 out of 20 equals ______%.",
          "answer": "40",
          "hint": "과반수 아님"
        }
      ],
      "dissect": {
        "sentence": "Voters are given several options, and whichever gets the most first-preference votes wins.",
        "fields": [
          {
            "label": "복합관계대명사",
            "answer": "whichever"
          },
          {
            "label": "whichever절 동사",
            "answer": "gets"
          },
          {
            "label": "whichever절 목적어",
            "answer": "the most first-preference votes"
          },
          {
            "label": "전체 명사절의 동사",
            "answer": "wins"
          }
        ]
      },
      "rebuild": {
        "ko": "가장 많은 1순위 표를 얻는 선택지가 승리한다.",
        "bank": [
          "first-preference votes",
          "Whichever",
          "wins.",
          "gets the most"
        ],
        "answer": "Whichever gets the most first-preference votes wins."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "FPTP 결과에서 charity concert가 승리했지만 약점이 드러난 이유는?",
        "options": [
          "2차 개표를 해야 했기 때문에",
          "가장 많은 1순위 표는 얻었지만 전체의 40%에 불과했기 때문에",
          "A와 B의 합계가 같았기 때문에",
          "2순위 표가 더 큰 영향을 미쳤기 때문에"
        ],
        "answer": 1,
        "explain": "C는 8표로 최다였지만 20명 중 40%여서 majority의 지지를 받지 못했다."
      },
      "original": {
        "label": "교과서 Q5·Q6",
        "question": "FPTP 방식의 핵심 약점은?",
        "answer": "It is possible to win a vote without the support of the majority.",
        "explain": "교과서 Q5는 ‘majority가 선택했다’가 F, Q6는 바로 이 약점을 요약한다."
      }
    },
    {
      "id": "tb3p71",
      "group": "textbook",
      "order": 6,
      "section": "3과 본문",
      "nav": "p.71 AV",
      "density": "본문 고밀도",
      "title": "p.71 · The Alternative Vote Method",
      "source": "교과서 3과 p.71",
      "type": "재분배 · 원인결과 · 약점",
      "flow": [
        "1차 승리 조건: 50% 초과",
        "최저 A 제거 → A 표의 2순위 재분배",
        "B=11, C=9 → B 승리 / 2순위 영향이 커질 수 있음"
      ],
      "oneLine": "AV는 과반 승자를 만들지만, 탈락표의 2순위가 결과에 큰 영향을 줄 수 있다.",
      "keyExpr": "eliminate → redistribute → second preferences matter",
      "quotes": [
        {
          "src": "p.71",
          "en": "For an option to win in the first round, it needs to get more than 50% of the first-preference votes.",
          "ko": "선택지가 1차 개표에서 승리하려면 1순위 표의 50%를 초과해 얻어야 한다.",
          "why": "AV의 1차 승리 조건."
        },
        {
          "src": "p.71",
          "en": "Therefore, option A was eliminated, and the 5 council members’ votes were redistributed based on their second preferences.",
          "ko": "따라서 A가 탈락했고, 그 5명의 표는 2순위 선호에 따라 재분배되었다.",
          "why": "AV 계산의 핵심 동작."
        },
        {
          "src": "p.71",
          "en": "It sometimes allows second-preference votes to have a greater influence than first-preference votes.",
          "ko": "AV는 때때로 2순위 표가 1순위 표보다 더 큰 영향을 미치게 한다.",
          "why": "AV의 핵심 약점."
        }
      ],
      "grammar": {
        "title": "for O to V / with O V-ing / be redistributed",
        "body": "For an option to win...에서 for an option은 to부정사의 의미상 주어. with only 5 council members voting...은 with + O + V-ing. were redistributed는 수동태.",
        "cue": "A의 5표가 ABC 4표→B, ACB 1표→C로 이동하는 것을 직접 표에 표시."
      },
      "inputs": [
        {
          "id": "tb3p71-i1",
          "prompt": "To win in the first round, an option needs more than ______%.",
          "answer": "50",
          "hint": "과반"
        },
        {
          "id": "tb3p71-i2",
          "prompt": "Option A was ______ because it had the fewest first-preference votes.",
          "answer": "eliminated",
          "hint": "제거되다"
        },
        {
          "id": "tb3p71-i3",
          "prompt": "The votes were ______ based on second preferences.",
          "answer": "redistributed",
          "hint": "재분배"
        }
      ],
      "dissect": {
        "sentence": "Therefore, option A was eliminated, and the 5 council members’ votes were redistributed based on their second preferences.",
        "fields": [
          {
            "label": "첫 수동태",
            "answer": "was eliminated"
          },
          {
            "label": "둘째 수동태",
            "answer": "were redistributed"
          },
          {
            "label": "기준 표현",
            "answer": "based on"
          },
          {
            "label": "기준",
            "answer": "their second preferences"
          }
        ]
      },
      "rebuild": {
        "ko": "A는 탈락했고, 5명의 표는 2순위 선호에 따라 재분배되었다.",
        "bank": [
          "were redistributed",
          "Option A was eliminated,",
          "based on their second preferences.",
          "and the 5 council members’ votes"
        ],
        "answer": "Option A was eliminated, and the 5 council members’ votes were redistributed based on their second preferences."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "A의 표가 재분배된 뒤 B가 11표가 된 직접적인 이유는?",
        "options": [
          "A의 5표가 전부 B로 이동했기 때문이다.",
          "A를 1순위로 둔 표 중 4표의 2순위가 B였기 때문이다.",
          "C의 표가 B로 재분배되었기 때문이다.",
          "B가 처음부터 과반수를 얻었기 때문이다."
        ],
        "answer": 1,
        "explain": "ABC 4표는 A 탈락 후 B로, ACB 1표는 C로 이동한다."
      },
      "original": {
        "label": "교과서 Q7",
        "question": "AV에서 1차 개표에 승리하려면?",
        "answer": "It needs to get more than 50% of the first-preference votes.",
        "explain": "p.71 본문과 Q7이 같은 내용을 직접 묻는다."
      }
    },
    {
      "id": "tb3p72",
      "group": "textbook",
      "order": 7,
      "section": "3과 본문",
      "nav": "p.72 Condorcet",
      "density": "본문 고밀도",
      "title": "p.72 · The Condorcet Method",
      "source": "교과서 3과 p.72",
      "type": "쌍대 비교 · 승자 · 약점",
      "flow": [
        "가능한 선택지를 두 개씩 직접 비교",
        "A가 B와 C 모두에게 11:9로 우세",
        "A 승리 / 선택지 많으면 승자 없을 수도"
      ],
      "oneLine": "Condorcet는 각 선택지를 1:1로 비교해 모두에게 우세한 선택지를 찾지만, 항상 그런 승자가 존재하는 것은 아니다.",
      "keyExpr": "pairwise comparison → preferred to both → possible no clear winner",
      "quotes": [
        {
          "src": "p.72",
          "en": "This method involves comparing the voters’ preferences between each possible pair of options.",
          "ko": "이 방식은 가능한 선택지의 각 쌍 사이에서 유권자들의 선호를 비교하는 것을 포함한다.",
          "why": "Condorcet의 정의."
        },
        {
          "src": "p.72",
          "en": "As option A, the art show, was preferred to both of the other options, it would be considered the winner.",
          "ko": "A인 미술 전시가 다른 두 선택지 모두보다 선호되었으므로 승자로 간주된다.",
          "why": "Condorcet 승자 판정."
        },
        {
          "src": "p.72",
          "en": "It is possible that no option will be clearly preferred over the others.",
          "ko": "어떤 선택지도 다른 선택지보다 명확히 선호되지 않을 가능성이 있다.",
          "why": "Condorcet의 약점."
        }
      ],
      "grammar": {
        "title": "involve V-ing / prefer A to B / It is possible that",
        "body": "involve 뒤에는 V-ing. prefer A to B는 B보다 A를 선호하다. It is possible that S V는 ‘~할 가능성이 있다’.",
        "cue": "A:B, B:C, A:C 세 쌍을 표에서 직접 손가락으로 짚어 계산."
      },
      "inputs": [
        {
          "id": "tb3p72-i1",
          "prompt": "The Condorcet method involves ______ the voters’ preferences.",
          "answer": "comparing",
          "hint": "involve + V-ing"
        },
        {
          "id": "tb3p72-i2",
          "prompt": "Option A was preferred ______ both of the other options.",
          "answer": "to",
          "hint": "prefer A to B"
        },
        {
          "id": "tb3p72-i3",
          "prompt": "The winner was option ______.",
          "answer": "A",
          "hint": "art show"
        }
      ],
      "dissect": {
        "sentence": "As option A, the art show, was preferred to both of the other options, it would be considered the winner.",
        "fields": [
          {
            "label": "이유 접속사",
            "answer": "As"
          },
          {
            "label": "수동태 1",
            "answer": "was preferred"
          },
          {
            "label": "비교 전치사",
            "answer": "to"
          },
          {
            "label": "수동태 2",
            "answer": "would be considered"
          }
        ]
      },
      "rebuild": {
        "ko": "A는 다른 두 선택지 모두보다 선호되었기 때문에 승자로 간주될 것이다.",
        "bank": [
          "both of the other options,",
          "As option A",
          "it would be considered the winner.",
          "was preferred to"
        ],
        "answer": "As option A was preferred to both of the other options, it would be considered the winner."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "Condorcet 방식이 FPTP와 가장 크게 다른 점은?",
        "options": [
          "오직 1순위 표의 개수만 본다.",
          "최저 득표자를 제거한 뒤 2순위를 재분배한다.",
          "선택지를 두 개씩 직접 비교해 상대적 선호를 본다.",
          "항상 과반수 득표자가 승리한다."
        ],
        "answer": 2,
        "explain": "Condorcet의 핵심은 each possible pair를 직접 비교하는 pairwise comparison이다."
      },
      "original": {
        "label": "교과서 Q8",
        "question": "Condorcet 방식의 약점은?",
        "answer": "It is complex and sometimes fails to select a winner.",
        "explain": "p.72 아래 Q8의 교과서 요약 답."
      }
    },
    {
      "id": "tb3p73",
      "group": "textbook",
      "order": 8,
      "section": "3과 본문",
      "nav": "p.73 결론",
      "density": "본문 고밀도",
      "title": "p.73 · No Perfect Voting Method",
      "source": "교과서 3과 p.73",
      "type": "결론 · 대조 · 핵심 주장",
      "flow": [
        "세 방식이 서로 다른 승자 산출",
        "학생회는 Condorcet 선택",
        "완벽한 방식 없음 → 장단점 이해가 더 나은 의사결정으로 연결"
      ],
      "oneLine": "중요한 건 ‘완벽한 투표법 찾기’가 아니라 각 방식의 장단점을 이해해 더 나은 의사결정을 하는 것이다.",
      "keyExpr": "no flawless method → weigh pros and cons → better decisions",
      "quotes": [
        {
          "src": "p.73",
          "en": "Whichever we choose will have pros and cons.",
          "ko": "어느 것을 선택하든 장단점이 있을 것이다.",
          "why": "p.77 whichever의 본문 출처이자 결론 핵심."
        },
        {
          "src": "p.73",
          "en": "All of these efforts are designed not to make decision-making difficult and inefficient, but to help us make better decisions as a society.",
          "ko": "이 모든 노력은 의사결정을 어렵고 비효율적으로 만들려는 것이 아니라 사회로서 더 나은 결정을 하도록 돕기 위한 것이다.",
          "why": "not A but B와 글의 목적을 동시에 보여준다."
        },
        {
          "src": "p.73",
          "en": "When we understand decision-making better, we are more likely to become better decision-makers ourselves.",
          "ko": "의사결정을 더 잘 이해할수록 우리 자신도 더 나은 의사결정자가 될 가능성이 높다.",
          "why": "마지막 결론."
        }
      ],
      "grammar": {
        "title": "whichever / not A but B / be likely to",
        "body": "Whichever we choose는 ‘어느 것을 선택하든’. not to make A, but to help B는 병렬. be likely to V는 ‘~할 가능성이 있다’.",
        "cue": "p.77 Focus on Language와 바로 연결해서 같은 문장을 다시 보게 하면 반복 효과가 큼."
      },
      "inputs": [
        {
          "id": "tb3p73-i1",
          "prompt": "Whichever we choose will have pros and ______.",
          "answer": "cons",
          "hint": "장단점"
        },
        {
          "id": "tb3p73-i2",
          "prompt": "No voting system is ______.",
          "answer": "flawless",
          "hint": "완벽한"
        },
        {
          "id": "tb3p73-i3",
          "prompt": "Understanding voting methods helps us become better decision-______.",
          "answer": "makers",
          "hint": "decision-makers"
        }
      ],
      "dissect": {
        "sentence": "All of these efforts are designed not to make decision-making difficult and inefficient, but to help us make better decisions as a society.",
        "fields": [
          {
            "label": "not 뒤 to부정사 동사",
            "answer": "make"
          },
          {
            "label": "but 뒤 to부정사 동사",
            "answer": "help"
          },
          {
            "label": "help 목적어",
            "answer": "us"
          },
          {
            "label": "make 목적격보어",
            "answer": "difficult and inefficient"
          }
        ]
      },
      "rebuild": {
        "ko": "이 노력은 의사결정을 어렵게 만들기 위해서가 아니라 더 나은 결정을 하도록 돕기 위해 설계되었다.",
        "bank": [
          "but to help us",
          "All of these efforts are designed",
          "make better decisions as a society.",
          "not to make decision-making difficult and inefficient,"
        ],
        "answer": "All of these efforts are designed not to make decision-making difficult and inefficient, but to help us make better decisions as a society."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "p.73에서 저자가 궁극적으로 강조하는 것은?",
        "options": [
          "Condorcet가 모든 상황에서 가장 우수하다.",
          "투표 방식은 단순할수록 무조건 좋다.",
          "다양한 방식의 장단점을 이해하는 것이 의사결정 과정 이해에 도움이 된다.",
          "새로운 투표 방식 개발은 의사결정을 더 어렵게 만들 뿐이다."
        ],
        "answer": 2,
        "explain": "마지막 부분은 possible voting methods와 pros and cons를 이해하는 것이 decision-making 이해로 이어진다고 말한다."
      },
      "original": {
        "label": "본문 결론 확인",
        "question": "학생회가 Condorcet를 선택한 이유는?",
        "answer": "They liked the idea of directly comparing each option with the others.",
        "explain": "p.73 첫 문단에 직접 제시된다."
      }
    },
    {
      "id": "tb3p76",
      "group": "textbook",
      "order": 9,
      "section": "3과 언어",
      "nav": "p.76 어휘",
      "density": "보조 경량형",
      "title": "p.76 · Word & Collocation Building",
      "source": "교과서 3과 p.76 Focus on Language",
      "type": "파생어 · 연어",
      "flow": [
        "-ness로 형용사→명사",
        "-(i)al로 명사→형용사",
        "make / raise 연어 묶기"
      ],
      "oneLine": "단어 뜻만 외우지 말고 ‘형태 변화 + 함께 쓰는 동사’를 세트로 익힌다.",
      "keyExpr": "effective → effectiveness / finance → financial / raise awareness",
      "quotes": [
        {
          "src": "p.76",
          "en": "The improved health of the patients proved the effectiveness of the new treatment.",
          "ko": "환자들의 건강 개선은 새 치료법의 효과를 입증했다.",
          "why": "effective → effectiveness 변형 확인."
        },
        {
          "src": "p.76",
          "en": "The campaign was organized to raise awareness of the hazards of climate change.",
          "ko": "그 캠페인은 기후 변화의 위험에 대한 인식을 높이기 위해 조직되었다.",
          "why": "raise awareness 연어."
        }
      ],
      "grammar": {
        "title": "품사 변형과 연어",
        "body": "weak→weakness, effective→effectiveness / finance→financial. make a choice·progress·statement, raise money·awareness·questions처럼 함께 쓰는 조합을 통째로 기억한다.",
        "cue": "학생이 암기는 잘하니 ‘단어 하나’보다 파생어/연어를 빠르게 왕복시키면 좋아."
      },
      "inputs": [
        {
          "id": "tb3p76-i1",
          "prompt": "effective → ______",
          "answer": "effectiveness",
          "hint": "명사"
        },
        {
          "id": "tb3p76-i2",
          "prompt": "finance → ______",
          "answer": "financial",
          "hint": "형용사"
        },
        {
          "id": "tb3p76-i3",
          "prompt": "raise ______ = 인식을 높이다",
          "answer": "awareness",
          "hint": "연어"
        }
      ],
      "dissect": {
        "sentence": "The improved health of the patients proved the effectiveness of the new treatment.",
        "fields": [
          {
            "label": "주어 핵심",
            "answer": "health"
          },
          {
            "label": "동사",
            "answer": "proved"
          },
          {
            "label": "목적어 핵심",
            "answer": "effectiveness"
          },
          {
            "label": "effectiveness의 품사",
            "answer": "명사"
          }
        ]
      },
      "rebuild": {
        "ko": "그 캠페인은 기후 변화의 위험에 대한 인식을 높이기 위해 조직되었다.",
        "bank": [
          "of the hazards",
          "The campaign was organized",
          "of climate change.",
          "to raise awareness"
        ],
        "answer": "The campaign was organized to raise awareness of the hazards of climate change."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "다음 연어 연결이 틀린 것은?",
        "options": [
          "make a choice",
          "make progress",
          "raise awareness",
          "raise a statement"
        ],
        "answer": 3,
        "explain": "p.76에서는 make a statement, raise awareness로 제시된다."
      },
      "original": {
        "label": "Focus on Language 확인",
        "question": "‘새 치료법의 효과’를 나타내는 명사는?",
        "answer": "effectiveness",
        "explain": "effective + -ness → effectiveness."
      }
    },
    {
      "id": "tb3p77",
      "group": "textbook",
      "order": 10,
      "section": "3과 언어",
      "nav": "p.77 어법",
      "density": "보조 경량형",
      "title": "p.77 · Parallelism & Whoever / Whatever / Whichever",
      "source": "교과서 3과 p.77 Focus on Language",
      "type": "병렬 · 복합관계사",
      "flow": [
        "not A but B에서 형태 병렬",
        "whoever / whatever / whichever가 절을 이끔",
        "본문 p.68·70·73 문장으로 재확인"
      ],
      "oneLine": "p.77의 두 포인트는 본문에 실제로 나온 문장을 다시 문법화한 페이지다.",
      "keyExpr": "not to A, but to B / whoever · whatever · whichever",
      "quotes": [
        {
          "src": "p.77 / p.68",
          "en": "She encouraged them not to use the familiar voting method, but to try something different instead.",
          "ko": "그녀는 익숙한 투표 방식을 쓰지 말고 다른 것을 시도하라고 권했다.",
          "why": "not A but B 병렬의 본문 예."
        },
        {
          "src": "p.77 / p.70",
          "en": "Voters are given several options, and whichever gets the most first-preference votes wins.",
          "ko": "여러 선택지 중 가장 많은 1순위 표를 얻는 것이 이긴다.",
          "why": "whichever가 명사절을 이루는 본문 예."
        }
      ],
      "grammar": {
        "title": "병렬 + 복합관계대명사",
        "body": "not to use ↔ but to try처럼 문법 형태를 맞춘다. whoever=누구든, whatever=무엇이든, whichever=어느 것이든이며 각 절 안에서 주어나 목적어 역할을 한다.",
        "cue": "연습문제를 새로 길게 풀기보다 본문 p.68·70·73 세 문장을 왕복시키기."
      },
      "inputs": [
        {
          "id": "tb3p77-i1",
          "prompt": "not to use ..., but to ______ ...",
          "answer": "try",
          "hint": "병렬"
        },
        {
          "id": "tb3p77-i2",
          "prompt": "This app will translate ______ you type into a different language.",
          "answer": "whatever",
          "hint": "p.77 Practice"
        },
        {
          "id": "tb3p77-i3",
          "prompt": "______ we choose will have pros and cons.",
          "answer": "Whichever",
          "hint": "p.73"
        }
      ],
      "dissect": {
        "sentence": "Whichever we choose will have pros and cons.",
        "fields": [
          {
            "label": "복합관계대명사",
            "answer": "Whichever"
          },
          {
            "label": "관계절 주어",
            "answer": "we"
          },
          {
            "label": "관계절 동사",
            "answer": "choose"
          },
          {
            "label": "전체 절의 동사",
            "answer": "will have"
          }
        ]
      },
      "rebuild": {
        "ko": "어느 것을 선택하든 장단점이 있을 것이다.",
        "bank": [
          "will have",
          "Whichever",
          "pros and cons.",
          "we choose"
        ],
        "answer": "Whichever we choose will have pros and cons."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "병렬이 올바른 문장은?",
        "options": [
          "She encouraged them not to use the method, but trying something different.",
          "She encouraged them not using the method, but to try something different.",
          "She encouraged them not to use the method, but to try something different.",
          "She encouraged them not use the method, but tried something different."
        ],
        "answer": 2,
        "explain": "not to use와 but to try가 같은 to부정사 형태로 병렬을 이룬다."
      },
      "original": {
        "label": "Focus on Language 확인",
        "question": "Anyone who wants to cut down on sugar → ______ wants to cut down on sugar",
        "answer": "Whoever",
        "explain": "p.77 Practice에서 Anyone who ~를 Whoever ~로 바꾼다."
      }
    },
    {
      "id": "tb3p7879",
      "group": "textbook",
      "order": 11,
      "section": "3과 활동",
      "nav": "p.78~79 View",
      "density": "보조 경량형",
      "title": "p.78~79 · When Past Choices Haunt You",
      "source": "교과서 3과 p.78~79 View & Learn",
      "type": "sunk cost · 사례 적용",
      "flow": [
        "Concorde는 비용·연료·수익성 문제",
        "이미 투자한 돈 때문에 실패 인정 주저",
        "회수 불가능한 sunk cost는 미래 결정에 영향 주면 안 됨"
      ],
      "oneLine": "이미 써서 되돌릴 수 없는 비용 때문에 나쁜 선택을 계속하는 것이 sunk cost fallacy다.",
      "keyExpr": "past investment → reluctance to stop → sunk cost fallacy",
      "quotes": [
        {
          "src": "p.78",
          "en": "The governments and airline companies funding it were reluctant to admit that it was a failure.",
          "ko": "정부와 항공사들은 그것이 실패였음을 인정하기를 꺼렸다.",
          "why": "매몰비용 오류가 지속되는 심리."
        },
        {
          "src": "p.78",
          "en": "However, sunk costs are costs that you’ll never get back, regardless of what decisions you make in the future.",
          "ko": "하지만 매몰비용은 미래에 어떤 결정을 하든 결코 되돌려 받을 수 없는 비용이다.",
          "why": "sunk cost의 정의."
        },
        {
          "src": "p.78",
          "en": "Don’t let sunk costs affect your decisions.",
          "ko": "매몰비용이 당신의 결정에 영향을 미치게 두지 마라.",
          "why": "핵심 교훈."
        }
      ],
      "grammar": {
        "title": "be reluctant to V / regardless of",
        "body": "be reluctant to V는 ‘V하기를 꺼리다’. regardless of는 ‘~와 상관없이’.",
        "cue": "학생에게 ‘이미 쓴 돈’과 ‘앞으로의 최선 선택’을 분리해서 설명."
      },
      "inputs": [
        {
          "id": "tb3p7879-i1",
          "prompt": "Sunk costs are costs that you’ll never get ______.",
          "answer": "back",
          "hint": "회수 불가능"
        },
        {
          "id": "tb3p7879-i2",
          "prompt": "The companies were ______ to admit that the Concorde was a failure.",
          "answer": "reluctant",
          "hint": "꺼리는"
        }
      ],
      "dissect": {
        "sentence": "The governments and airline companies funding it were reluctant to admit that it was a failure.",
        "fields": [
          {
            "label": "주어 핵심",
            "answer": "governments and airline companies"
          },
          {
            "label": "분사 후치수식",
            "answer": "funding it"
          },
          {
            "label": "형용사",
            "answer": "reluctant"
          },
          {
            "label": "to부정사 동사",
            "answer": "admit"
          }
        ]
      },
      "rebuild": {
        "ko": "매몰비용이 당신의 결정에 영향을 미치게 두지 마라.",
        "bank": [
          "affect",
          "Don’t let",
          "your decisions.",
          "sunk costs"
        ],
        "answer": "Don’t let sunk costs affect your decisions."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "다음 중 sunk cost fallacy의 사례는?",
        "options": [
          "거의 사용하지 않는 구독 서비스를 취소하고 수수료를 낸다.",
          "이미 돈을 냈다는 이유로 재미없는 영화를 끝까지 본다.",
          "새 선택 전에 장단점을 비교한다.",
          "회수할 수 없는 비용을 미래 판단에서 제외한다."
        ],
        "answer": 1,
        "explain": "p.78~79의 핵심은 이미 지출한 비용을 아깝게 여겨 좋지 않은 선택을 계속하는 것이다."
      },
      "original": {
        "label": "p.79 While You View",
        "question": "sunk cost fallacy가 아닌 사례는?",
        "answer": "paying a cancellation fee for a rarely used subscription service",
        "explain": "손실을 감수하고 비효율적인 선택을 중단하는 행동이므로 매몰비용 오류가 아니다."
      }
    },
    {
      "id": "tb3p8081",
      "group": "textbook",
      "order": 12,
      "section": "3과 활동",
      "nav": "p.80~81 Write",
      "density": "보조 경량형",
      "title": "p.80~81 · Weighing Your Options",
      "source": "교과서 3과 p.80~81 Write & Share",
      "type": "비교 단락 · 연결어",
      "flow": [
        "선택 상황 제시",
        "Option 1·2의 장점/단점 비교",
        "Ultimately로 개인 선호에 따른 결론"
      ],
      "oneLine": "비교 단락은 두 선택지의 장단점을 대칭적으로 배치하고 마지막에 판단 기준을 정리한다.",
      "keyExpr": "Option 1 pros/cons ↔ Option 2 pros/cons → conclusion",
      "quotes": [
        {
          "src": "p.80",
          "en": "However, experiencing the authentic culture of the local area can be challenging when staying there.",
          "ko": "그러나 그곳에 머무를 때 현지의 진정한 문화를 경험하는 것은 어려울 수 있다.",
          "why": "선택지 1의 단점을 전환하는 However."
        },
        {
          "src": "p.80",
          "en": "On the other hand, camping sites offer a peaceful environment with impressive landscapes and opportunities for activities like hiking or boating.",
          "ko": "반면 캠핑장은 인상적인 풍경과 하이킹·보트 같은 활동 기회가 있는 평화로운 환경을 제공한다.",
          "why": "선택지 2로 전환하는 비교 표현."
        },
        {
          "src": "p.81",
          "en": "Ultimately, since each option has such different pros and cons, the choice between riding your bike to school or taking public transportation depends on your individual preferences.",
          "ko": "궁극적으로 각 선택지에 서로 다른 장단점이 있으므로 선택은 개인의 선호에 달려 있다.",
          "why": "비교 단락의 결론 구조."
        }
      ],
      "grammar": {
        "title": "However / On the other hand / since",
        "body": "However는 앞 내용과 반전, On the other hand는 다른 선택지로 전환, since는 이유를 제시한다. 비교 단락의 구조 표지로 외우면 된다.",
        "cue": "학생에게 연결어만 보고 지금 ‘장점/단점/다른 선택지/결론’ 중 어디인지 맞히게 해."
      },
      "inputs": [
        {
          "id": "tb3p8081-i1",
          "prompt": "선택지 2로 전환하는 표현: On the other ______",
          "answer": "hand",
          "hint": "반면"
        },
        {
          "id": "tb3p8081-i2",
          "prompt": "The choice depends on your individual ______.",
          "answer": "preferences",
          "hint": "개인적 선호"
        }
      ],
      "dissect": {
        "sentence": "Ultimately, since each option has such different pros and cons, the choice between riding your bike to school or taking public transportation depends on your individual preferences.",
        "fields": [
          {
            "label": "이유 접속사",
            "answer": "since"
          },
          {
            "label": "주절 주어 핵심",
            "answer": "choice"
          },
          {
            "label": "주절 동사",
            "answer": "depends"
          },
          {
            "label": "전치사",
            "answer": "on"
          }
        ]
      },
      "rebuild": {
        "ko": "궁극적으로 선택은 개인의 선호에 달려 있다.",
        "bank": [
          "depends on",
          "Ultimately,",
          "your individual preferences.",
          "the choice"
        ],
        "answer": "Ultimately, the choice depends on your individual preferences."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "비교 단락의 가장 자연스러운 배열은?",
        "options": [
          "결론 → 선택지2 단점 → 도입 → 선택지1 장점",
          "도입 → 선택지1 장단점 → 선택지2 장단점 → 결론",
          "선택지2 장점 → 결론 → 선택지1 단점 → 도입",
          "도입 → 결론 → 장단점 생략"
        ],
        "answer": 1,
        "explain": "p.80 Sample Analysis가 Introduction → A/B/C/D → Conclusion 구조를 명시한다."
      },
      "original": {
        "label": "Write & Share 확인",
        "question": "장단점을 비교한 뒤 결론을 시작하는 대표 표현은?",
        "answer": "Ultimately",
        "explain": "p.80~81 샘플 단락에서 최종 판단으로 넘어갈 때 사용된다."
      }
    },
    {
      "id": "tb3p82",
      "group": "textbook",
      "order": 13,
      "section": "3과 활동",
      "nav": "p.82 Wrap Up",
      "density": "보조 경량형",
      "title": "p.82 · The Paradox of Choice",
      "source": "교과서 3과 p.82 Wrap Up",
      "type": "선택 과부하 · 내용 확인",
      "flow": [
        "선택지가 너무 많으면 처음엔 매력적",
        "모두 비교해야 해 결정이 어려워짐",
        "원하는 기준을 먼저 정하고 선택지를 줄이면 도움"
      ],
      "oneLine": "선택지가 많다고 항상 결정이 쉬워지는 것은 아니며, 오히려 선택 과부하가 판단을 어렵게 할 수 있다.",
      "keyExpr": "too many options → harder decision → narrow the choices",
      "quotes": [
        {
          "src": "p.82",
          "en": "Having too many choices actually makes it harder to make a decision.",
          "ko": "선택지가 너무 많으면 실제로 결정을 내리기가 더 어려워진다.",
          "why": "paradox of choice의 정의."
        },
        {
          "src": "p.82",
          "en": "Plus, whichever we choose may leave us unsatisfied because we have missed out on so many other options.",
          "ko": "게다가 어느 것을 선택하든 다른 많은 선택지를 놓쳤기 때문에 만족하지 못할 수 있다.",
          "why": "whichever 반복 + 선택 과부하의 결과."
        }
      ],
      "grammar": {
        "title": "동명사 주어 / make it + 형용사 + to V / whichever",
        "body": "Having too many choices가 문장의 주어. makes it harder to make...는 가목적어 it 구조. whichever는 p.77과 다시 연결된다.",
        "cue": "3과 본문에서 배운 whichever가 Wrap Up에 다시 등장한다는 점을 반복 포인트로 잡아."
      },
      "inputs": [
        {
          "id": "tb3p82-i1",
          "prompt": "Having too many choices makes it ______ to make a decision.",
          "answer": "harder",
          "hint": "더 어렵게"
        },
        {
          "id": "tb3p82-i2",
          "prompt": "This problem is called the paradox of ______.",
          "answer": "choice",
          "hint": "선택의 역설"
        }
      ],
      "dissect": {
        "sentence": "Having too many choices actually makes it harder to make a decision.",
        "fields": [
          {
            "label": "주어",
            "answer": "Having too many choices"
          },
          {
            "label": "동사",
            "answer": "makes"
          },
          {
            "label": "가목적어",
            "answer": "it"
          },
          {
            "label": "목적격보어",
            "answer": "harder"
          }
        ]
      },
      "rebuild": {
        "ko": "선택지가 너무 많으면 실제로 결정을 내리기가 더 어려워진다.",
        "bank": [
          "harder",
          "Having too many choices",
          "to make a decision.",
          "actually makes it"
        ],
        "answer": "Having too many choices actually makes it harder to make a decision."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "paradox of choice를 줄이는 방법으로 p.82의 방향과 가장 가까운 것은?",
        "options": [
          "가능한 선택지를 더 많이 모은다.",
          "먼저 자신이 정말 원하는 것을 정하고 선택지를 일부 제거한다.",
          "모든 선택지를 끝까지 같은 비중으로 비교한다.",
          "결정을 최대한 미룬다."
        ],
        "answer": 1,
        "explain": "p.82 sample tip은 먼저 원하는 것을 생각하고, 모든 선택지를 살핀 뒤 일부를 제거해 빠른 결론에 도달하라고 한다."
      },
      "original": {
        "label": "p.82 Read and Search",
        "question": "글에서 말하는 paradox of choice는?",
        "answer": "It is harder to make a choice when we have a large number of options to choose from.",
        "explain": "교과서 정답 b의 내용."
      }
    },
    {
      "id": "tb3check",
      "group": "textbook",
      "order": 14,
      "section": "3과 복습",
      "nav": "3과 종합체크",
      "density": "누적 복습",
      "title": "3과 종합 체크",
      "source": "교과서 3과 p.67~82 중 위 페이지별 학습 범위",
      "type": "누적 · 혼합 문제",
      "template": "unitCheck",
      "checkItems": [
        {
          "id": "tb3c1",
          "kind": "input",
          "prompt": "p.68 · different methods would ______ different results",
          "answer": "yield"
        },
        {
          "id": "tb3c2",
          "kind": "input",
          "prompt": "p.69 · options in order of ______",
          "answer": "preference"
        },
        {
          "id": "tb3c3",
          "kind": "mc",
          "prompt": "p.70 · FPTP의 약점은?",
          "options": [
            "2차 개표가 필수다.",
            "과반수 지지 없이도 이길 수 있다.",
            "2순위 표가 가장 중요하다.",
            "승자를 정할 수 없다."
          ],
          "answer": 1,
          "explain": "C는 최다 8표였지만 전체의 40%뿐이었다."
        },
        {
          "id": "tb3c4",
          "kind": "input",
          "prompt": "p.71 · eliminated votes were ______ based on second preferences",
          "answer": "redistributed"
        },
        {
          "id": "tb3c5",
          "kind": "mc",
          "prompt": "p.72 · Condorcet의 핵심 계산 방식은?",
          "options": [
            "1순위만 합산",
            "최저 득표자 제거",
            "선택지를 두 개씩 직접 비교",
            "무작위 추첨"
          ],
          "answer": 2,
          "explain": "each possible pair of options를 비교한다."
        },
        {
          "id": "tb3c6",
          "kind": "input",
          "prompt": "p.73 · ______ we choose will have pros and cons.",
          "answer": "Whichever"
        },
        {
          "id": "tb3c7",
          "kind": "input",
          "prompt": "p.76 · effective → ______",
          "answer": "effectiveness"
        },
        {
          "id": "tb3c8",
          "kind": "input",
          "prompt": "p.77 · This app will translate ______ you type.",
          "answer": "whatever"
        },
        {
          "id": "tb3c9",
          "kind": "mc",
          "prompt": "p.78~79 · sunk cost fallacy의 핵심은?",
          "options": [
            "이미 지출한 비용을 무시하고 새 판단을 한다.",
            "이미 투자한 비용 때문에 좋지 않은 선택을 계속한다.",
            "미래 비용을 미리 줄인다.",
            "손실을 피하기 위해 즉시 중단한다."
          ],
          "answer": 1,
          "explain": "회수할 수 없는 과거 비용 때문에 현재 결정을 왜곡하는 오류다."
        },
        {
          "id": "tb3c10",
          "kind": "mc",
          "prompt": "p.80~81 · 비교 단락의 기본 구조는?",
          "options": [
            "결론부터 제시",
            "Option 1 장단점 → Option 2 장단점 → 결론",
            "선택지 하나만 설명",
            "장점만 비교"
          ],
          "answer": 1,
          "explain": "Sample Analysis가 두 선택지의 장단점을 순서대로 비교한다."
        },
        {
          "id": "tb3c11",
          "kind": "input",
          "prompt": "p.82 · the paradox of ______",
          "answer": "choice"
        },
        {
          "id": "tb3c12",
          "kind": "mc",
          "prompt": "3과 전체 결론으로 가장 적절한 것은?",
          "options": [
            "가장 복잡한 투표법이 가장 정확하다.",
            "모든 방식에는 장단점이 있으므로 의사결정 과정을 이해하는 것이 중요하다.",
            "FPTP가 가장 이상적이다.",
            "선택지는 많을수록 무조건 좋다."
          ],
          "answer": 1,
          "explain": "p.73 결론과 p.82 선택의 역설까지 모두 ‘선택 과정 이해’로 연결된다."
        }
      ]
    },
    {
      "id": "st1",
      "group": "suneung",
      "order": 1,
      "nav": "수특 1",
      "title": "배경지식과 독해",
      "source": "수특 프린트 1번",
      "type": "빈칸 추론",
      "flow": [
        "강한 독자 vs 야구 지식 있는 약한 독자",
        "야구 지식 있는 집단이 더 높은 점수",
        "독해력만큼 prior knowledge가 중요"
      ],
      "oneLine": "읽기 능력만으로는 충분하지 않고, 독자가 가져오는 배경지식이 이해를 크게 좌우한다.",
      "keyExpr": "prior knowledge → better comprehension",
      "quotes": [
        {
          "src": "수특 1",
          "en": "Having strong reading skills was not enough for the students who came to the page with a knowledge deficit about the topic.",
          "ko": "주제에 대한 지식이 부족한 학생에게는 뛰어난 읽기 능력만으로 충분하지 않았다.",
          "why": "실험 결과의 핵심 해석."
        },
        {
          "src": "수특 1",
          "en": "Their prior knowledge enabled them to outscore readers with far better abilities.",
          "ko": "그들의 배경지식은 훨씬 뛰어난 읽기 능력을 가진 학생보다 더 높은 점수를 받게 했다.",
          "why": "배경지식의 효과를 직접 보여준다."
        }
      ],
      "grammar": {
        "title": "enable A to V / who 관계절",
        "body": "enable A to V는 ‘A가 V할 수 있게 하다’. students who came...에서 who는 students를 꾸미며 관계절의 주어이다.",
        "cue": "독해 내용과 함께 enable 구조를 짧게 회수."
      },
      "inputs": [
        {
          "id": "st1-i1",
          "prompt": "Their prior knowledge ______ them to outscore stronger readers.",
          "answer": "enabled",
          "hint": "enable A to V"
        },
        {
          "id": "st1-i2",
          "prompt": "The successful group had more ______ knowledge about baseball.",
          "answer": "prior",
          "hint": "배경지식"
        }
      ],
      "dissect": {
        "sentence": "Their prior knowledge enabled them to outscore readers with far better abilities.",
        "fields": [
          {
            "label": "주어",
            "answer": "Their prior knowledge"
          },
          {
            "label": "동사",
            "answer": "enabled"
          },
          {
            "label": "목적어",
            "answer": "them"
          },
          {
            "label": "to부정사 동사",
            "answer": "outscore"
          }
        ]
      },
      "rebuild": {
        "ko": "그들의 배경지식은 그들이 더 뛰어난 능력의 독자들보다 높은 점수를 받게 했다.",
        "bank": [
          "Their prior knowledge",
          "enabled them",
          "to outscore readers",
          "with far better abilities."
        ],
        "answer": "Their prior knowledge enabled them to outscore readers with far better abilities."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "이 연구 결과로 가장 적절하게 추론할 수 있는 것은?",
        "options": [
          "배경지식은 독해력이 낮을 때만 필요하다.",
          "읽기 능력이 뛰어나면 주제 지식은 거의 영향을 주지 않는다.",
          "관련 배경지식은 독해력의 차이를 어느 정도 상쇄할 수 있다.",
          "야구 지식은 모든 종류의 독해 능력을 향상시킨다."
        ],
        "answer": 2,
        "explain": "약한 독자라도 야구 지식이 있어 강한 독자보다 높은 점수를 받았으므로, 관련 배경지식의 보완 효과를 추론할 수 있다."
      },
      "original": {
        "label": "원래 문제: 빈칸",
        "question": "빈칸의 핵심은 무엇인가?",
        "answer": "what a reader brings to the page",
        "explain": "‘독자가 페이지에 가져오는 것’은 곧 배경지식을 가리킨다."
      }
    },
    {
      "id": "st2",
      "group": "suneung",
      "order": 2,
      "nav": "수특 2",
      "title": "뇌의 대리 기능",
      "source": "수특 프린트 2번",
      "type": "글의 순서",
      "flow": [
        "지각 체계는 여러 경로 사용",
        "한 경로가 막히면 다른 단서 사용",
        "사례: 철새·얼굴 인식"
      ],
      "oneLine": "뇌는 이용 가능한 단서가 바뀌어도 다른 경로를 활용해 인식을 유지한다.",
      "keyExpr": "multiple routes → changing cues → vicarious functioning",
      "quotes": [
        {
          "src": "수특 2",
          "en": "If one is blocked, it takes another route.",
          "ko": "한 경로가 막히면 다른 경로를 사용한다.",
          "why": "대리 기능의 핵심 원리."
        },
        {
          "src": "수특 2",
          "en": "This immense flexibility of the brain to rely on changing cues, according to whatever is available, is known as vicarious functioning.",
          "ko": "이용 가능한 것에 따라 바뀌는 단서에 의존하는 뇌의 엄청난 유연성을 대리 기능이라 한다.",
          "why": "핵심 개념의 정의."
        }
      ],
      "grammar": {
        "title": "whatever + 절 / be known as",
        "body": "whatever is available은 ‘이용 가능한 것은 무엇이든’. be known as는 ‘~로 알려져 있다’.",
        "cue": "whatever가 명사절 안에서 주어 역할을 한다는 정도만."
      },
      "inputs": [
        {
          "id": "st2-i1",
          "prompt": "If one route is blocked, the brain takes ______ route.",
          "answer": "another",
          "hint": "대체 경로"
        },
        {
          "id": "st2-i2",
          "prompt": "This flexibility is known as vicarious ______.",
          "answer": "functioning",
          "hint": "핵심 개념"
        }
      ],
      "dissect": {
        "sentence": "If one is blocked, it takes another route.",
        "fields": [
          {
            "label": "조건절 접속사",
            "answer": "If"
          },
          {
            "label": "조건절 주어",
            "answer": "one"
          },
          {
            "label": "조건절 동사",
            "answer": "is blocked"
          },
          {
            "label": "주절 목적어",
            "answer": "another route"
          }
        ]
      },
      "rebuild": {
        "ko": "한 경로가 막히면 그것은 다른 경로를 택한다.",
        "bank": [
          "If one is blocked,",
          "it takes",
          "another route."
        ],
        "answer": "If one is blocked, it takes another route."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "다음 사례 중 지문의 vicarious functioning과 가장 가까운 것은?",
        "options": [
          "하나의 단서만 반복해서 사용한다.",
          "별을 볼 수 없을 때 지형지물이나 자성 감각으로 방향을 찾는다.",
          "얼굴 전체가 보일 때만 사람을 알아본다.",
          "환경이 바뀌면 인식을 중단한다."
        ],
        "answer": 1,
        "explain": "본문의 철새 예시는 별이 보이지 않을 때 다른 단서를 사용하는 대체 경로의 사례다."
      },
      "original": {
        "label": "원래 문제: 순서",
        "question": "올바른 순서는?",
        "answer": "(C) → (A) → (B)",
        "explain": "C에서 대리 기능을 정의하고, A와 B에서 각각 철새와 얼굴 인식 사례를 확장한다."
      }
    },
    {
      "id": "st3",
      "group": "suneung",
      "order": 3,
      "nav": "수특 3",
      "title": "준거 집단의 효과",
      "source": "수특 프린트 3번",
      "type": "글의 순서",
      "flow": [
        "준거 집단이 자기평가 기준 제공",
        "규범 효과 + 비교 효과",
        "연합 효과로 자부심"
      ],
      "oneLine": "준거 집단은 모방·비교·연합을 통해 자기평가와 자존감에 서로 다른 영향을 준다.",
      "keyExpr": "normative → comparison → associative effects",
      "quotes": [
        {
          "src": "수특 3",
          "en": "The normative effect basically involves imitating the reference group.",
          "ko": "규범 효과는 기본적으로 준거 집단을 모방하는 것을 포함한다.",
          "why": "세 효과 중 첫 번째를 정의한다."
        },
        {
          "src": "수특 3",
          "en": "Being associated with the brilliant group, though, makes you feel proud of yourself, “basking in reflected glory.”",
          "ko": "하지만 뛰어난 집단과 연합되어 있다는 점은 ‘반사된 영광’을 누리며 자신을 자랑스럽게 느끼게 한다.",
          "why": "연합 효과의 결과."
        }
      ],
      "grammar": {
        "title": "make O + 형용사 / be associated with",
        "body": "make you feel proud에서 make는 목적어 뒤에 동사원형 feel을 둔다. be associated with는 ‘~와 연관되다’.",
        "cue": "비교 효과와 연합 효과의 방향이 반대일 수 있음을 내용으로 확인."
      },
      "inputs": [
        {
          "id": "st3-i1",
          "prompt": "The normative effect involves ______ the reference group.",
          "answer": "imitating",
          "hint": "동명사"
        },
        {
          "id": "st3-i2",
          "prompt": "A group used to evaluate one’s own behavior is a ______ group.",
          "answer": "reference",
          "hint": "핵심 용어"
        }
      ],
      "dissect": {
        "sentence": "The normative effect basically involves imitating the reference group.",
        "fields": [
          {
            "label": "주어 핵심명사",
            "answer": "effect"
          },
          {
            "label": "동사",
            "answer": "involves"
          },
          {
            "label": "목적어 형태",
            "answer": "imitating"
          },
          {
            "label": "목적어의 대상",
            "answer": "the reference group"
          }
        ]
      },
      "rebuild": {
        "ko": "규범 효과는 기본적으로 준거 집단을 모방하는 것을 포함한다.",
        "bank": [
          "The normative effect",
          "basically involves",
          "imitating",
          "the reference group."
        ],
        "answer": "The normative effect basically involves imitating the reference group."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "학업 성취가 뛰어난 반 친구들과 자신을 비교해 자존감이 낮아지는 것은 어떤 효과에 가장 가깝나?",
        "options": [
          "규범 효과",
          "비교 효과",
          "연합 효과",
          "무관 효과"
        ],
        "answer": 1,
        "explain": "본문에서 classmates와 자신을 비교해 부정적 자기평가를 하는 것이 comparison effect다."
      },
      "original": {
        "label": "원래 문제: 순서",
        "question": "올바른 순서는?",
        "answer": "(B) → (A) → (C)",
        "explain": "B가 앞 문장의 positive self-evaluation을 받아 규범 효과를 설명하고, A가 비교/연합 효과를 소개한 뒤 C가 그 결과를 제시한다."
      }
    },
    {
      "id": "st4",
      "group": "suneung",
      "order": 4,
      "nav": "수특 4",
      "title": "과정과 결과로서의 회복",
      "source": "수특 프린트 4번",
      "type": "문장 삽입",
      "flow": [
        "회복 결과: 생리·심리 상태",
        "회복 과정: 상태 변화를 만드는 활동",
        "과정이 결과에 선행"
      ],
      "oneLine": "회복은 결과 상태이기도 하고 그 상태 변화를 만들어내는 과정이기도 하다.",
      "keyExpr": "recovery outcome ↔ recovery process",
      "quotes": [
        {
          "src": "수특 4",
          "en": "Recovery can be considered a process as well as an outcome.",
          "ko": "회복은 결과뿐 아니라 과정으로도 볼 수 있다.",
          "why": "글 전체의 이중 구분."
        },
        {
          "src": "수특 4",
          "en": "Accordingly, recovery processes precede recovery outcomes and, consequently, determine whether adequate recovery is obtained.",
          "ko": "따라서 회복 과정은 회복 결과에 선행하며 적절한 회복이 이루어지는지를 결정한다.",
          "why": "두 개념의 관계를 결론짓는다."
        }
      ],
      "grammar": {
        "title": "as well as / whether 절",
        "body": "A as well as B는 ‘B뿐 아니라 A도’. determine whether ~는 ‘~인지 여부를 결정하다’.",
        "cue": "process와 outcome을 섞지 않도록 표로 구분."
      },
      "inputs": [
        {
          "id": "st4-i1",
          "prompt": "Recovery can be considered a process as well as an ______.",
          "answer": "outcome",
          "hint": "결과"
        },
        {
          "id": "st4-i2",
          "prompt": "Recovery processes ______ recovery outcomes.",
          "answer": "precede",
          "hint": "~에 선행하다"
        }
      ],
      "dissect": {
        "sentence": "Recovery can be considered a process as well as an outcome.",
        "fields": [
          {
            "label": "주어",
            "answer": "Recovery"
          },
          {
            "label": "조동사",
            "answer": "can"
          },
          {
            "label": "수동태 핵심",
            "answer": "be considered"
          },
          {
            "label": "병렬 연결",
            "answer": "as well as"
          }
        ]
      },
      "rebuild": {
        "ko": "회복은 과정뿐만 아니라 결과로도 여겨질 수 있다.",
        "bank": [
          "Recovery",
          "can be considered",
          "a process",
          "as well as an outcome."
        ],
        "answer": "Recovery can be considered a process as well as an outcome."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "다음 중 recovery process의 예로 가장 적절한 것은?",
        "options": [
          "회복 후의 심박수 상태",
          "회복 후의 기분 상태",
          "신체적 자원을 회복하기 위한 비활동",
          "회복 후 근육통이 없는 상태"
        ],
        "answer": 2,
        "explain": "본문은 physical inactivity를 physiological resources를 회복하는 과정으로 제시한다."
      },
      "original": {
        "label": "원래 문제: 문장 삽입",
        "question": "‘Recovery as a process...’ 문장은 어디에 들어가는가?",
        "answer": "④ 뒤",
        "explain": "앞에서 outcome의 생리·심리 상태를 모두 설명한 뒤 process를 새로 정의하고, 다음 문장의 Accordingly가 두 개념 관계를 이어간다."
      }
    },
    {
      "id": "st5",
      "group": "suneung",
      "order": 5,
      "nav": "수특 5",
      "title": "고통과 삶의 의미",
      "source": "수특 프린트 5번",
      "type": "문장 삽입",
      "flow": [
        "고통 경험이 의미감 형성",
        "의미 있는 삶과 고통 경험의 연관",
        "행복은 낮아질 수 있으나 의미감은 높아짐"
      ],
      "oneLine": "고통은 행복을 낮출 수 있지만, 역설적으로 삶의 의미감은 높일 수 있다.",
      "keyExpr": "more suffering → more meaning / lower happiness",
      "quotes": [
        {
          "src": "수특 5",
          "en": "The difficult times that we endure play a key role in helping us to lead more meaningful lives.",
          "ko": "우리가 견디는 어려운 시기는 더 의미 있는 삶을 살도록 돕는 데 핵심 역할을 한다.",
          "why": "글의 핵심 주장."
        },
        {
          "src": "수특 5",
          "en": "Our sufferings, then, seem to help to provide people with the sense that their lives are more meaningful, even if these events are associated with lower feelings of happiness.",
          "ko": "따라서 고통은 행복감이 낮아지는 것과 관련되어 있더라도 삶이 더 의미 있다는 느낌을 주는 듯하다.",
          "why": "의미와 행복의 대비를 결론짓는다."
        }
      ],
      "grammar": {
        "title": "play a key role in V-ing / even if",
        "body": "play a key role in V-ing는 ‘~하는 데 핵심 역할을 하다’. even if는 ‘비록 ~일지라도’.",
        "cue": "meaningfulness와 happiness를 같은 축으로 보지 않게 하기."
      },
      "inputs": [
        {
          "id": "st5-i1",
          "prompt": "Difficult times play a key ______ in meaningful lives.",
          "answer": "role",
          "hint": "핵심 역할"
        },
        {
          "id": "st5-i2",
          "prompt": "Meaningful life can be distinct ______ happiness.",
          "answer": "from",
          "hint": "distinct from"
        }
      ],
      "dissect": {
        "sentence": "The difficult times that we endure play a key role in helping us to lead more meaningful lives.",
        "fields": [
          {
            "label": "선행사",
            "answer": "times"
          },
          {
            "label": "관계대명사",
            "answer": "that"
          },
          {
            "label": "관계절 동사",
            "answer": "endure"
          },
          {
            "label": "주절 동사",
            "answer": "play"
          }
        ]
      },
      "rebuild": {
        "ko": "우리가 견디는 어려운 시기는 더 의미 있는 삶을 살도록 돕는 데 핵심 역할을 한다.",
        "bank": [
          "The difficult times that we endure",
          "play a key role",
          "in helping us",
          "to lead more meaningful lives."
        ],
        "answer": "The difficult times that we endure play a key role in helping us to lead more meaningful lives."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "본문의 연구 결과를 가장 정확히 요약한 것은?",
        "options": [
          "행복과 의미는 항상 동시에 증가한다.",
          "고통 경험이 많을수록 행복과 의미가 모두 낮아진다.",
          "고통은 행복감을 낮출 수 있지만 의미 있는 삶의 감각과 연결될 수 있다.",
          "의미 있는 삶은 과거의 부정적 경험과 무관하다."
        ],
        "answer": 2,
        "explain": "본문은 suffering이 lower happiness와 연결되면서도 greater meaningfulness와 관련될 수 있다고 한다."
      },
      "original": {
        "label": "원래 문제: 문장 삽입",
        "question": "‘On the other hand, these past experiences...’는 어디에 들어가는가?",
        "answer": "⑤",
        "explain": "바로 앞의 suffering·stress 경험과 대조하여 happiness 감소를 말한 뒤 마지막 결론으로 이어진다."
      }
    },
    {
      "id": "st6",
      "group": "suneung",
      "order": 6,
      "nav": "수특 6",
      "title": "위기와 미디어 선택",
      "source": "수특 프린트 6번",
      "type": "요약문 완성",
      "flow": [
        "즉각 위험 → 전통매체",
        "복잡·주관 위기 → 소셜미디어",
        "세대에 따라 선호도 달라짐"
      ],
      "oneLine": "위기 유형과 세대 특성이 어떤 매체를 선택하는지 함께 좌우한다.",
      "keyExpr": "urgent crisis → traditional / complex crisis → social / generation matters",
      "quotes": [
        {
          "src": "수특 6",
          "en": "During crises that present immediate danger, people seek trusted and verified sources to ease their immediate concerns.",
          "ko": "즉각적 위험이 있는 위기에서는 사람들이 불안을 줄이기 위해 신뢰할 수 있고 검증된 정보원을 찾는다.",
          "why": "전통매체 선택의 이유."
        },
        {
          "src": "수특 6",
          "en": "Thus, both traditional and social media play a prominent role in delivering important scientific information to the public during crises.",
          "ko": "따라서 전통매체와 소셜미디어 모두 위기 때 중요한 과학 정보를 전달하는 데 큰 역할을 한다.",
          "why": "양쪽 매체를 종합한 결론."
        }
      ],
      "grammar": {
        "title": "although / be likely to",
        "body": "although는 양보 ‘비록 ~이지만’. be likely to V는 ‘~할 가능성이 높다’.",
        "cue": "media를 좋고 나쁨으로 나누는 글이 아니라 조건에 따라 선택이 달라진다는 점."
      },
      "inputs": [
        {
          "id": "st6-i1",
          "prompt": "People seek trusted and ______ sources during immediate danger.",
          "answer": "verified",
          "hint": "검증된"
        },
        {
          "id": "st6-i2",
          "prompt": "Older audiences indicate a ______ for traditional media.",
          "answer": "preference",
          "hint": "선호"
        }
      ],
      "dissect": {
        "sentence": "For other crisis types, people are more likely to turn to social media.",
        "fields": [
          {
            "label": "주어",
            "answer": "people"
          },
          {
            "label": "가능성 표현",
            "answer": "are more likely to"
          },
          {
            "label": "동사",
            "answer": "turn"
          },
          {
            "label": "전치사 목적어",
            "answer": "social media"
          }
        ]
      },
      "rebuild": {
        "ko": "전통 매체와 소셜 미디어 모두 위기 상황에서 중요한 역할을 한다.",
        "bank": [
          "Both traditional and social media",
          "play a prominent role",
          "during crises."
        ],
        "answer": "Both traditional and social media play a prominent role during crises."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "정치적·공중보건 위기에서 소셜미디어가 더 사용될 수 있는 이유는?",
        "options": [
          "정보가 단순하고 한 가지 정답만 있기 때문이다.",
          "다양한 목소리와 전문가 의견, 보충 정보가 필요할 수 있기 때문이다.",
          "전통매체가 과학 정보를 전달하지 않기 때문이다.",
          "젊은 세대만 위기를 경험하기 때문이다."
        ],
        "answer": 1,
        "explain": "본문은 subjective하고 less straightforward한 위기에서 multiple voices와 supplementary information을 찾는다고 설명한다."
      },
      "original": {
        "label": "원래 문제: 요약",
        "question": "요약문의 (A), (B)는?",
        "answer": "urgent / generational",
        "explain": "즉각 위험=urgent, 연령대에 따른 선택 차이=generational factors."
      }
    },
    {
      "id": "st7",
      "group": "suneung",
      "order": 7,
      "nav": "수특 7",
      "title": "영화와 ‘지나간 현재’",
      "source": "수특 프린트 7번",
      "type": "요약문 완성",
      "flow": [
        "현재의 규범은 당사자에게 보이지 않음",
        "오래된 영화에서 과거의 ‘현재’가 드러남",
        "과거-현재 대비로 현재 인식이 가시화"
      ],
      "oneLine": "시대가 지난 영화는 그 시대에 당연했던 규범을 드러내 현재의 관점까지 되돌아보게 한다.",
      "keyExpr": "dated film → bygone present → present becomes visible",
      "quotes": [
        {
          "src": "수특 7",
          "en": "As the set of cultural norms and categories taken for granted at any particular time, the present is normally more or less invisible to those who participate in it.",
          "ko": "어느 시대에 당연시되는 문화 규범의 집합으로서 현재는 그 시대 사람들에게 대체로 보이지 않는다.",
          "why": "글의 출발 논리."
        },
        {
          "src": "수특 7",
          "en": "The present is also visible in contemporary historical dramas that ‘read the past in terms of the present’.",
          "ko": "현재는 ‘현재의 관점으로 과거를 읽는’ 현대 역사 드라마에서도 드러난다.",
          "why": "현재가 영화 속에서 드러나는 두 번째 방식."
        }
      ],
      "grammar": {
        "title": "taken for granted / that 관계절",
        "body": "taken for granted는 과거분사구로 cultural norms and categories를 꾸민다. dramas that read...에서 that은 dramas를 꾸미는 관계대명사.",
        "cue": "present가 ‘지금’이면서 동시에 각 시대의 ‘현재’라는 점을 설명."
      },
      "inputs": [
        {
          "id": "st7-i1",
          "prompt": "Cultural norms may be taken for ______.",
          "answer": "granted",
          "hint": "당연시되다"
        },
        {
          "id": "st7-i2",
          "prompt": "A culturally dated film can show a ______ present.",
          "answer": "bygone",
          "hint": "지나간 현재"
        }
      ],
      "dissect": {
        "sentence": "The present is also visible in contemporary historical dramas that ‘read the past in terms of the present’.",
        "fields": [
          {
            "label": "선행사",
            "answer": "dramas"
          },
          {
            "label": "관계대명사",
            "answer": "that"
          },
          {
            "label": "관계절 동사",
            "answer": "read"
          },
          {
            "label": "핵심 전치사구",
            "answer": "in terms of the present"
          }
        ]
      },
      "rebuild": {
        "ko": "현재는 현재의 관점에서 과거를 해석하는 현대 역사 드라마에서도 드러난다.",
        "bank": [
          "The present is also visible",
          "in contemporary historical dramas",
          "that read the past",
          "in terms of the present."
        ],
        "answer": "The present is also visible in contemporary historical dramas that read the past in terms of the present."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "‘bygone present’가 가장 잘 드러나는 경우는?",
        "options": [
          "시대와 무관한 추상영화",
          "오늘날의 규범만 의도적으로 설명하는 다큐멘터리",
          "과거에는 자연스러웠지만 지금은 낯설게 보이는 태도를 당연하게 담은 오래된 영화",
          "미래 사회만을 상상한 영화"
        ],
        "answer": 2,
        "explain": "본문은 시대가 지난 영화 속에서 당시 당연했던 태도가 오늘날 낯설게 보일 때 그 시대의 ‘현재’가 가시화된다고 한다."
      },
      "original": {
        "label": "원래 문제: 요약",
        "question": "요약문의 (A), (B)는?",
        "answer": "period-specific / visualized",
        "explain": "시대 고유의 태도를 보여주고, 과거와 현재의 차이를 통해 현재에 대한 인식이 가시화된다."
      }
    },
    {
      "id": "m29",
      "group": "mock",
      "order": 1,
      "nav": "학평 29",
      "title": "자동화된 행동과 문명",
      "source": "2026년 6월 고2 학평 29번",
      "type": "어법",
      "flow": [
        "문명은 생각 없이 수행 가능한 행동 확대",
        "할인쿠폰 사례: 자동 반응",
        "시간 절약보다 brain strain 절감"
      ],
      "oneLine": "우리는 할인 자체뿐 아니라 생각해야 하는 부담까지 줄여주는 자동화된 선택을 기대한다.",
      "keyExpr": "automatic assumption → double duty → reduce brain strain",
      "quotes": [
        {
          "src": "29번",
          "en": "Mailed-out coupons that — because of a printing error — offered no savings to recipients produced just as much customer response as did error-free coupons that offered substantial savings.",
          "ko": "인쇄 오류로 절약 혜택이 없는 쿠폰도 실제 할인 쿠폰만큼 고객 반응을 만들어 냈다.",
          "why": "사람이 쿠폰을 기계적으로 처리한다는 실험 근거."
        },
        {
          "src": "29번",
          "en": "Not only do we expect them to save us money, we also expect them to save us the time and mental energy required to think about how to do it.",
          "ko": "우리는 돈뿐 아니라 어떻게 해야 할지 생각하는 시간과 정신 에너지까지 아껴 주기를 기대한다.",
          "why": "도치와 글의 핵심 결론."
        }
      ],
      "grammar": {
        "title": "Not only 도치 / 관계절",
        "body": "Not only가 문두에 오면 조동사 do가 주어 앞에 온다. coupons that offered...의 that은 coupons를 꾸미는 주격 관계대명사.",
        "cue": "원문 어법 오류는 producing이 아니라 produced여야 한다는 점까지 연결."
      },
      "inputs": [
        {
          "id": "m29-i1",
          "prompt": "Mailed-out coupons ______ just as much customer response.",
          "answer": "produced",
          "hint": "주절의 과거동사"
        },
        {
          "id": "m29-i2",
          "prompt": "Not only ______ we expect them to save us money...",
          "answer": "do",
          "hint": "문두 도치"
        }
      ],
      "dissect": {
        "sentence": "Not only do we expect them to save us money, we also expect them to save us the time and mental energy.",
        "fields": [
          {
            "label": "도치 조동사",
            "answer": "do"
          },
          {
            "label": "주어",
            "answer": "we"
          },
          {
            "label": "첫 동사",
            "answer": "expect"
          },
          {
            "label": "상관 표현",
            "answer": "not only"
          }
        ]
      },
      "rebuild": {
        "ko": "우리는 그것들이 돈을 아껴주기만 기대하는 것이 아니다.",
        "bank": [
          "Not only",
          "do we expect them",
          "to save us money"
        ],
        "answer": "Not only do we expect them to save us money"
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "쿠폰 사례가 보여주는 핵심은?",
        "options": [
          "소비자는 할인율을 항상 정확히 계산한다.",
          "할인쿠폰은 금전적 절약보다 품질 신호 역할만 한다.",
          "사람들은 쿠폰을 보면 실제 혜택을 매번 검토하지 않고 자동적으로 반응할 수 있다.",
          "오류 쿠폰은 정상 쿠폰보다 훨씬 적은 반응을 얻는다."
        ],
        "answer": 2,
        "explain": "혜택이 없는 오류 쿠폰도 정상 쿠폰과 비슷한 반응을 얻었다는 점이 자동화된 가정을 보여준다."
      },
      "original": {
        "label": "원래 문제: 어법",
        "question": "어법상 틀린 것은?",
        "answer": "② producing → produced",
        "explain": "주어 Mailed-out coupons의 본동사가 필요하므로 과거동사 produced가 와야 한다."
      }
    },
    {
      "id": "m30",
      "group": "mock",
      "order": 2,
      "nav": "학평 30",
      "title": "혁신 제품의 가격탄력성",
      "source": "2026년 6월 고2 학평 30번",
      "type": "문맥 어휘",
      "flow": [
        "혁신 제품: 대체재 적음 → 가격탄력성 낮음",
        "초기 구매자는 성능에 더 민감",
        "높은 가격이 품질 신호로 인식"
      ],
      "oneLine": "혁신 제품 초기 시장에서는 소비자가 가격보다 성능·희소성에 반응해 높은 가격도 수용할 수 있다.",
      "keyExpr": "few substitutes → low elasticity → price as quality signal",
      "quotes": [
        {
          "src": "30번",
          "en": "Usually, innovative high-tech products have low price elasticity.",
          "ko": "보통 혁신적 첨단 제품은 가격탄력성이 낮다.",
          "why": "글 전체의 출발 주장."
        },
        {
          "src": "30번",
          "en": "Furthermore, the high price of these products is often perceived as a sign of quality and reinforces a customer’s confidence in the company.",
          "ko": "더 나아가 높은 가격은 품질의 신호로 인식되어 회사에 대한 고객의 신뢰를 강화한다.",
          "why": "높은 가격이 수요를 반드시 낮추지 않는 이유."
        }
      ],
      "grammar": {
        "title": "be perceived as / 비교 표현",
        "body": "be perceived as는 ‘~로 인식되다’. more sensitive to A than B는 ‘B보다 A에 더 민감하다’. 문맥상 이 지문에서는 초기 구매자가 price보다 performance에 더 민감해야 한다.",
        "cue": "30번은 문법보다 문맥상 단어 방향을 판단하는 문제."
      },
      "inputs": [
        {
          "id": "m30-i1",
          "prompt": "Innovative high-tech products have low price ______.",
          "answer": "elasticity",
          "hint": "가격탄력성"
        },
        {
          "id": "m30-i2",
          "prompt": "A high price can be perceived as a sign of ______.",
          "answer": "quality",
          "hint": "품질 신호"
        }
      ],
      "dissect": {
        "sentence": "The high price of these products is often perceived as a sign of quality.",
        "fields": [
          {
            "label": "주어 핵심",
            "answer": "price"
          },
          {
            "label": "수동태",
            "answer": "is perceived"
          },
          {
            "label": "전치사",
            "answer": "as"
          },
          {
            "label": "보어 핵심명사",
            "answer": "sign"
          }
        ]
      },
      "rebuild": {
        "ko": "이 제품들의 높은 가격은 종종 품질의 신호로 인식된다.",
        "bank": [
          "The high price of these products",
          "is often perceived",
          "as a sign of quality."
        ],
        "answer": "The high price of these products is often perceived as a sign of quality."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "초기 혁신 제품 시장에서 가격을 크게 낮추지 않는 이유로 가장 적절한 것은?",
        "options": [
          "구매자들이 가격 변화에 매우 민감해서",
          "대체재가 많아 경쟁이 심해서",
          "구매자들이 성능·혁신성을 중시하고 높은 가격 자체를 품질 신호로 볼 수 있어서",
          "제품의 성능이 모두 동일해서"
        ],
        "answer": 2,
        "explain": "본문은 대체재가 적고 초기 구매자가 성능에 관심이 크며 높은 가격을 품질 신호로 본다고 설명한다."
      },
      "original": {
        "label": "원래 문제: 문맥 어휘",
        "question": "문맥상 적절하지 않은 것은?",
        "answer": "③ more → less",
        "explain": "초기 구매자는 price보다 additional performance에 더 민감하므로 ‘more sensitive to price’는 방향이 반대다."
      }
    },
    {
      "id": "m31",
      "group": "mock",
      "order": 3,
      "nav": "학평 31",
      "title": "도시 공간의 future-proof 성격",
      "source": "2026년 6월 고2 학평 31번",
      "type": "빈칸 추론",
      "flow": [
        "오래된 광장·상점도 계속 사용",
        "용도는 시대에 따라 변화",
        "도시는 용도 변화를 수용해서 지속"
      ],
      "oneLine": "좋은 도시 공간은 특정 기능에 고정되지 않고 시대에 맞춰 용도를 바꿀 수 있어 오래 살아남는다.",
      "keyExpr": "future-proof = evolving uses",
      "quotes": [
        {
          "src": "31번",
          "en": "The same physical store that once sold buggy whips and typewriters might now repair damaged phones and sell bubble tea.",
          "ko": "예전에 마차 채찍과 타자기를 팔던 같은 가게가 지금은 휴대폰을 수리하고 버블티를 팔 수도 있다.",
          "why": "용도의 변화가 핵심이라는 구체 예시."
        },
        {
          "src": "31번",
          "en": "The great advantage of a city architecture is its ability to support change in uses.",
          "ko": "도시 건축의 큰 장점은 용도의 변화를 수용하는 능력이다.",
          "why": "빈칸의 핵심을 직접 설명."
        }
      ],
      "grammar": {
        "title": "that 관계절 / ability to V",
        "body": "store that once sold...의 that은 store를 꾸민다. ability to support는 ‘수용할 능력’.",
        "cue": "future-proof를 기술적으로 ‘새 건물’이 아니라 ‘용도 변화 수용’으로 잡게 하기."
      },
      "inputs": [
        {
          "id": "m31-i1",
          "prompt": "The city street is described as ______-proof.",
          "answer": "future",
          "hint": "future-proof"
        },
        {
          "id": "m31-i2",
          "prompt": "Its great advantage is the ability to support change in ______.",
          "answer": "uses",
          "hint": "용도"
        }
      ],
      "dissect": {
        "sentence": "The great advantage of a city architecture is its ability to support change in uses.",
        "fields": [
          {
            "label": "주어 핵심명사",
            "answer": "advantage"
          },
          {
            "label": "동사",
            "answer": "is"
          },
          {
            "label": "보어 핵심명사",
            "answer": "ability"
          },
          {
            "label": "to부정사 동사",
            "answer": "support"
          }
        ]
      },
      "rebuild": {
        "ko": "도시 건축의 큰 장점은 용도 변화를 수용하는 능력이다.",
        "bank": [
          "The great advantage",
          "of a city architecture",
          "is its ability",
          "to support change in uses."
        ],
        "answer": "The great advantage of a city architecture is its ability to support change in uses."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "지문에서 ‘future-proof’의 의미로 가장 가까운 것은?",
        "options": [
          "미래 기술만 사용하는 것",
          "기능을 한 가지로 제한하는 것",
          "시간이 지나도 변화하는 용도를 수용할 수 있는 것",
          "온라인 쇼핑을 없애는 것"
        ],
        "answer": 2,
        "explain": "도시의 같은 공간이 시대에 따라 다른 기능을 수행하는 예시가 반복된다."
      },
      "original": {
        "label": "원래 문제: 빈칸",
        "question": "빈칸 정답은?",
        "answer": "evolving uses",
        "explain": "같은 물리적 공간이 시대에 따라 서로 다른 용도를 받아들이는 것이 핵심이다."
      }
    },
    {
      "id": "m32",
      "group": "mock",
      "order": 4,
      "nav": "학평 32",
      "title": "식물의 접촉 반응",
      "source": "2026년 6월 고2 학평 32번",
      "type": "빈칸 추론",
      "flow": [
        "접촉이 유전자·호르몬 반응 촉발",
        "식물이 에너지 우선순위 재조정",
        "반복 접촉 → 위쪽 성장 감소"
      ],
      "oneLine": "식물은 접촉을 단순 자극으로 넘기지 않고 방어·적응을 위해 성장 에너지를 재배치한다.",
      "keyExpr": "touch → genetic response → inhibit growth",
      "quotes": [
        {
          "src": "32번",
          "en": "Within thirty minutes of being touched, 10 percent of the plant’s genome was altered.",
          "ko": "접촉 후 30분 안에 식물 게놈의 10%가 변화했다.",
          "why": "접촉의 영향이 매우 크다는 근거."
        },
        {
          "src": "32번",
          "en": "Touched multiple times, arabidopsis cut its upward growth rate by as much as 30 percent.",
          "ko": "여러 번 접촉된 애기장대는 위쪽 성장률을 최대 30%까지 줄였다.",
          "why": "빈칸의 ‘성장 억제’를 직접 뒷받침."
        }
      ],
      "grammar": {
        "title": "분사구문 Touched / by as much as",
        "body": "Touched multiple times는 ‘여러 번 접촉되었을 때’라는 수동 분사구문. by as much as 30 percent는 변화량 ‘최대 30%만큼’.",
        "cue": "빈칸은 증가가 아니라 억제 방향임을 수치로 확인."
      },
      "inputs": [
        {
          "id": "m32-i1",
          "prompt": "Repeated touch can ______ plant growth.",
          "answer": "inhibit",
          "hint": "억제하다"
        },
        {
          "id": "m32-i2",
          "prompt": "The upward growth rate was cut by as much as ______ percent.",
          "answer": "30",
          "hint": "수치"
        }
      ],
      "dissect": {
        "sentence": "Touched multiple times, arabidopsis cut its upward growth rate by as much as 30 percent.",
        "fields": [
          {
            "label": "분사",
            "answer": "Touched"
          },
          {
            "label": "주절 주어",
            "answer": "arabidopsis"
          },
          {
            "label": "주절 동사",
            "answer": "cut"
          },
          {
            "label": "변화량",
            "answer": "30 percent"
          }
        ]
      },
      "rebuild": {
        "ko": "여러 번 접촉된 애기장대는 위쪽 성장률을 최대 30%까지 줄였다.",
        "bank": [
          "Touched multiple times,",
          "arabidopsis cut",
          "its upward growth rate",
          "by as much as 30 percent."
        ],
        "answer": "Touched multiple times, arabidopsis cut its upward growth rate by as much as 30 percent."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "접촉 후 식물에서 일어난 변화의 방향은?",
        "options": [
          "성장에 더 많은 에너지를 집중했다.",
          "접촉을 무시하고 유전자 발현을 유지했다.",
          "교란에 대응하도록 우선순위를 바꾸고 위쪽 성장을 줄였다.",
          "번식률만 높이고 성장률은 그대로 유지했다."
        ],
        "answer": 2,
        "explain": "본문은 disturbance 대응을 위해 에너지를 성장에서 다른 곳으로 reroute하고 성장률을 낮춘다고 설명한다."
      },
      "original": {
        "label": "원래 문제: 빈칸",
        "question": "빈칸 정답은?",
        "answer": "inhibit their growth",
        "explain": "반복 접촉 후 upward growth rate가 최대 30% 감소한 것이 직접 근거다."
      }
    },
    {
      "id": "m35",
      "group": "mock",
      "order": 5,
      "nav": "학평 35",
      "title": "예술 작품과 맥락",
      "source": "2026년 6월 고2 학평 35번",
      "type": "무관한 문장",
      "flow": [
        "예술 이해는 시각만의 과정 아님",
        "제작 시기·문화·창작자 등 맥락 수집",
        "맥락으로 의미·상징 해석"
      ],
      "oneLine": "예술 작품을 이해하려면 작품 자체뿐 아니라 역사·사회·문화적 맥락을 함께 읽어야 한다.",
      "keyExpr": "contextual information → interpretation",
      "quotes": [
        {
          "src": "35번",
          "en": "Any information we can gather helps us understand the work’s context.",
          "ko": "우리가 모을 수 있는 모든 정보는 작품의 맥락을 이해하는 데 도움이 된다.",
          "why": "맥락 수집의 역할."
        },
        {
          "src": "35번",
          "en": "Using all the contextual information we have gathered, we interpret the work of art’s content to discover what it means or symbolizes.",
          "ko": "수집한 모든 맥락 정보를 이용해 작품 내용을 해석하고 의미나 상징을 파악한다.",
          "why": "글의 결론."
        }
      ],
      "grammar": {
        "title": "using 분사구문 / what 명사절",
        "body": "Using...은 주어 we가 맥락 정보를 ‘사용하면서’ 해석한다는 분사구문. what it means는 discover의 목적어 역할을 하는 명사절.",
        "cue": "③만 ‘맥락 영향 없이 보자’고 말해 흐름과 반대."
      },
      "inputs": [
        {
          "id": "m35-i1",
          "prompt": "Contextual information helps us ______ a work of art.",
          "answer": "interpret",
          "hint": "해석하다"
        },
        {
          "id": "m35-i2",
          "prompt": "We discover what a work means or ______.",
          "answer": "symbolizes",
          "hint": "상징하다"
        }
      ],
      "dissect": {
        "sentence": "Using all the contextual information we have gathered, we interpret the work of art’s content.",
        "fields": [
          {
            "label": "분사",
            "answer": "Using"
          },
          {
            "label": "주절 주어",
            "answer": "we"
          },
          {
            "label": "주절 동사",
            "answer": "interpret"
          },
          {
            "label": "목적어 핵심",
            "answer": "content"
          }
        ]
      },
      "rebuild": {
        "ko": "수집한 모든 맥락 정보를 이용하여 우리는 예술 작품의 내용을 해석한다.",
        "bank": [
          "Using all the contextual information",
          "we have gathered,",
          "we interpret",
          "the work of art’s content."
        ],
        "answer": "Using all the contextual information we have gathered, we interpret the work of art’s content."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "다음 중 글의 주장과 가장 일치하는 것은?",
        "options": [
          "작품은 오직 눈에 보이는 요소만으로 해석해야 한다.",
          "작품의 역사적·사회적 맥락은 해석을 방해하므로 배제해야 한다.",
          "작품에 대한 다양한 맥락 정보가 의미 해석에 도움을 준다.",
          "작가의 시대나 문화는 작품의 의미와 무관하다."
        ],
        "answer": 2,
        "explain": "글 전체가 contextual information을 통해 작품 의미를 해석하는 과정을 설명한다."
      },
      "original": {
        "label": "원래 문제: 무관문",
        "question": "전체 흐름과 관계없는 문장은?",
        "answer": "③",
        "explain": "③은 맥락의 영향을 받지 말아야 한다고 말해, 맥락 정보를 활용해야 한다는 글 전체 흐름과 반대다."
      }
    },
    {
      "id": "m36",
      "group": "mock",
      "order": 6,
      "nav": "학평 36",
      "title": "초기 인류의 여유와 번영",
      "source": "2026년 6월 고2 학평 36번",
      "type": "글의 순서",
      "flow": [
        "대부분 동물·초기 조상: 생존에 에너지 소모",
        "지능과 사냥 기술 발달",
        "먹잇감 풍부한 시기 → 번영과 여유"
      ],
      "oneLine": "초기 인류는 사냥 효율과 지능이 발달하면서 생존에만 쓰던 시간에서 벗어나 여유를 얻기 시작했다.",
      "keyExpr": "survival pressure → efficient hunting → prosperity",
      "quotes": [
        {
          "src": "36번",
          "en": "The constant search for food would have put heavy demands upon them.",
          "ko": "끊임없는 먹이 탐색은 그들에게 큰 부담을 주었을 것이다.",
          "why": "초기 조상의 출발 상태."
        },
        {
          "src": "36번",
          "en": "They used brain not brawn to kill their prey.",
          "ko": "그들은 먹잇감을 잡는 데 힘이 아니라 두뇌를 사용했다.",
          "why": "상황 변화를 만드는 핵심."
        }
      ],
      "grammar": {
        "title": "would have p.p. / not A but B 변형",
        "body": "would have put은 과거 상황에 대한 추정. brain not brawn은 ‘힘이 아니라 두뇌’라는 대비.",
        "cue": "순서 문제는 대명사 they와 But as...의 전환을 연결."
      },
      "inputs": [
        {
          "id": "m36-i1",
          "prompt": "They used brain not ______ to kill their prey.",
          "answer": "brawn",
          "hint": "근력"
        },
        {
          "id": "m36-i2",
          "prompt": "The search for food would have ______ heavy demands upon them.",
          "answer": "put",
          "hint": "would have + p.p."
        }
      ],
      "dissect": {
        "sentence": "The constant search for food would have put heavy demands upon them.",
        "fields": [
          {
            "label": "주어 핵심",
            "answer": "search"
          },
          {
            "label": "조동사 묶음",
            "answer": "would have"
          },
          {
            "label": "과거분사",
            "answer": "put"
          },
          {
            "label": "전치사 목적어",
            "answer": "them"
          }
        ]
      },
      "rebuild": {
        "ko": "끊임없는 먹이 탐색은 그들에게 큰 부담을 주었을 것이다.",
        "bank": [
          "The constant search for food",
          "would have put",
          "heavy demands",
          "upon them."
        ],
        "answer": "The constant search for food would have put heavy demands upon them."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "글의 변화 과정으로 가장 적절한 것은?",
        "options": [
          "농경 → 지능 감소 → 사냥 포기",
          "생존 부담 → 효율적 사냥과 지능 발달 → 일부 시기 여유와 풍요",
          "놀이 증가 → 먹잇감 감소 → 이주",
          "포식자 증가 → 수면 증가 → 번영"
        ],
        "answer": 1,
        "explain": "B가 생존 부담, A가 사냥 효율·지능 발달, C가 풍요와 여유로 이어진다."
      },
      "original": {
        "label": "원래 문제: 순서",
        "question": "올바른 순서는?",
        "answer": "(B) → (A) → (C)",
        "explain": "B가 앞의 동물 생존 논리를 초기 조상으로 연결하고, A의 But as...가 변화, C가 그 결과인 번영을 보여준다."
      }
    },
    {
      "id": "m38",
      "group": "mock",
      "order": 7,
      "nav": "학평 38",
      "title": "폭력 게임과 둔감화",
      "source": "2026년 6월 고2 학평 38번",
      "type": "문장 삽입",
      "flow": [
        "폭력 목격의 정상 반응: 부정감정·각성",
        "반복 노출 → desensitization",
        "감정 반응 감소 → 공감 감소"
      ],
      "oneLine": "반복적인 폭력 노출은 정상적인 정서 반응을 무디게 하고, 그 결과 공감 능력까지 낮출 수 있다.",
      "keyExpr": "repeated exposure → desensitization → reduced empathy",
      "quotes": [
        {
          "src": "38번",
          "en": "With repeated exposure to violent events, this normal reaction might become blunted, a phenomenon known as desensitization.",
          "ko": "폭력 사건에 반복적으로 노출되면 정상 반응이 무뎌질 수 있는데, 이를 둔감화라고 한다.",
          "why": "핵심 개념 정의."
        },
        {
          "src": "38번",
          "en": "A significant body of work shows an association between extensive violent video gaming and reduced empathy in people.",
          "ko": "많은 연구는 광범위한 폭력 게임과 사람들의 공감 감소 사이의 연관성을 보여준다.",
          "why": "결과에 대한 연구 근거."
        }
      ],
      "grammar": {
        "title": "known as / leading to",
        "body": "a phenomenon known as...에서 known은 phenomenon을 뒤에서 꾸민다. leading to...는 앞 상황의 결과를 덧붙이는 분사구문.",
        "cue": "삽입문장의 ‘The next step’이 직전 desensitization 다음 단계라는 연결 표지."
      },
      "inputs": [
        {
          "id": "m38-i1",
          "prompt": "Repeated exposure may cause ______, a blunted response to violence.",
          "answer": "desensitization",
          "hint": "둔감화"
        },
        {
          "id": "m38-i2",
          "prompt": "Diminished emotional responses can lead to reduced ______.",
          "answer": "empathy",
          "hint": "공감"
        }
      ],
      "dissect": {
        "sentence": "With repeated exposure to violent events, this normal reaction might become blunted.",
        "fields": [
          {
            "label": "전치사",
            "answer": "With"
          },
          {
            "label": "주어",
            "answer": "this normal reaction"
          },
          {
            "label": "조동사",
            "answer": "might"
          },
          {
            "label": "보어",
            "answer": "blunted"
          }
        ]
      },
      "rebuild": {
        "ko": "반복적으로 폭력 사건에 노출되면 이 정상 반응은 무뎌질 수 있다.",
        "bank": [
          "With repeated exposure",
          "to violent events,",
          "this normal reaction",
          "might become blunted."
        ],
        "answer": "With repeated exposure to violent events, this normal reaction might become blunted."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "삽입문의 ‘The next step in this problematic process’가 가리키는 흐름은?",
        "options": [
          "폭력 게임 연구 → 게임 판매 증가",
          "정상적 부정 반응 → 반복 노출에 의한 둔감화 → 감정 반응 감소와 공감 저하",
          "공감 증가 → 폭력 반응 증가",
          "생리적 각성 → 게임 중단 → 공감 회복"
        ],
        "answer": 1,
        "explain": "삽입문은 desensitization 다음 단계로 diminished emotional responses와 reduced empathy를 연결한다."
      },
      "original": {
        "label": "원래 문제: 문장 삽입",
        "question": "주어진 문장이 들어갈 위치는?",
        "answer": "⑤",
        "explain": "④ 뒤에서 desensitization을 정의한 다음 ‘The next step’이 자연스럽게 이어지고, 마지막 연구 결과가 reduced empathy를 뒷받침한다."
      }
    },
    {
      "id": "tb4map",
      "group": "textbook",
      "order": 20,
      "section": "4과 전체",
      "nav": "4과 전체맵",
      "density": "전체 구조",
      "title": "Lesson 4 · Breaking the Cycle: Solutions to E-waste",
      "source": "교과서 4과 p.92~108",
      "type": "전체 논리 · 문제-해결",
      "flow": [
        "전자폐기물 증가·유해성",
        "수리권 · 수리가능성 지수 · Repair Café",
        "수리 확대·현명한 소비 → 더 적은 e-waste"
      ],
      "oneLine": "4과는 전자폐기물을 단순히 재활용하는 글이 아니라, ‘버리기 전에 수리할 수 있는 환경’을 만드는 여러 해결책을 비교하는 글이다.",
      "keyExpr": "e-waste problem → make repair easier → sustainable future",
      "quotes": [
        {
          "src": "p.94",
          "en": "Experts predict that by 2030, the amount of e-waste generated annually will have doubled in just 16 years.",
          "ko": "전문가들은 2030년까지 연간 전자폐기물 발생량이 불과 16년 만에 두 배가 될 것으로 예측한다.",
          "why": "문제의 심각성을 보여 주는 핵심 수치."
        },
        {
          "src": "p.99",
          "en": "Even more importantly, it is a future in which people will generate far less e-waste, making our planet a cleaner, healthier place for everyone.",
          "ko": "더 중요하게는 사람들이 훨씬 적은 전자폐기물을 만들어 지구를 모두에게 더 깨끗하고 건강한 곳으로 만드는 미래다.",
          "why": "세 해결책이 지향하는 최종 목표."
        }
      ],
      "grammar": {
        "title": "문제-해결 글의 반복 구조",
        "body": "본문은 problem을 제시한 뒤 각 해결책이 ‘repair를 쉽게 만드는 방식’을 설명한다. p.95의 demand that S V, p.98의 enable A to V, p.99의 가정법을 연결해서 보면 좋다.",
        "cue": "학생에게 세 해결책의 ‘누가 / 무엇을 / 어떻게 바꾸는지’를 구분해 말하게 해."
      },
      "inputs": [
        {
          "id": "tb4map-i1",
          "prompt": "법과 소비자 권리를 강조하는 해결책: Right-to-______ movement",
          "answer": "Repair",
          "hint": "p.95"
        },
        {
          "id": "tb4map-i2",
          "prompt": "구매 전에 수리 난이도를 보여 주는 제도: repairability ______",
          "answer": "index",
          "hint": "p.96"
        },
        {
          "id": "tb4map-i3",
          "prompt": "전문가와 시민이 함께 고치는 장소: Repair ______",
          "answer": "Cafés",
          "hint": "p.98"
        }
      ],
      "dissect": {
        "sentence": "Efforts are being made to address this problem, most of which are focused on making products easier to repair.",
        "fields": [
          {
            "label": "수동 진행형",
            "answer": "are being made"
          },
          {
            "label": "관계 표현",
            "answer": "most of which"
          },
          {
            "label": "전치사 뒤 동명사",
            "answer": "making"
          },
          {
            "label": "목적격보어",
            "answer": "easier"
          }
        ]
      },
      "rebuild": {
        "ko": "이 문제를 해결하기 위한 노력 대부분은 제품을 더 쉽게 수리할 수 있게 만드는 데 초점을 둔다.",
        "bank": [
          "on making products easier to repair.",
          "Efforts are being made",
          "most of which are focused",
          "to address this problem,"
        ],
        "answer": "Efforts are being made to address this problem, most of which are focused on making products easier to repair."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "4과의 세 해결책이 공통적으로 지향하는 것은?",
        "options": [
          "전자제품의 사용 기간을 의도적으로 줄이는 것",
          "소비자가 수리보다 새 제품 구매를 선택하게 하는 것",
          "제품 수리를 더 가능하고 쉬운 선택으로 만들어 폐기를 줄이는 것",
          "전자폐기물의 해외 운송을 확대하는 것"
        ],
        "answer": 2,
        "explain": "Right-to-Repair, Repairability Index, Repair Cafés 모두 수리 접근성·정보·기술을 높여 폐기를 줄이는 방향이다."
      },
      "original": {
        "label": "4과 전체 확인",
        "question": "본문이 소개하는 세 가지 핵심 해결책은?",
        "answer": "The right-to-repair movement, the repairability index, and Repair Cafés.",
        "explain": "p.95~98에서 차례로 제시된다."
      }
    },
    {
      "id": "tb4p92",
      "group": "textbook",
      "order": 21,
      "section": "4과 준비",
      "nav": "p.92 Before",
      "density": "보조 경량형",
      "title": "p.92 · Facts & Vocabulary About E-waste",
      "source": "교과서 4과 p.92",
      "type": "배경지식 · 어휘",
      "flow": [
        "2019 e-waste 규모 제시",
        "정책 보유 국가는 약 40%",
        "hazard · discard · generate · sustainable · appliance"
      ],
      "oneLine": "본문에 들어가기 전, e-waste가 ‘크고 빠르게 늘어나는 환경 문제’라는 배경과 핵심 어휘를 잡는다.",
      "keyExpr": "hazard / discard / generate / sustainable / appliance",
      "quotes": [
        {
          "src": "p.92",
          "en": "If you lined up all the e-waste produced in 2019, it would stretch for 125 kilometers.",
          "ko": "2019년에 발생한 전자폐기물을 모두 줄 세우면 125km에 이를 것이다.",
          "why": "e-waste 규모를 직관적으로 보여 준다."
        },
        {
          "src": "p.92",
          "en": "Policies to deal with e-waste are imposed only in roughly 40% of the world’s countries.",
          "ko": "전자폐기물 대응 정책은 세계 국가의 약 40%에서만 시행된다.",
          "why": "문제 대응의 부족함을 보여 준다."
        }
      ],
      "grammar": {
        "title": "If + 과거, would V",
        "body": "If you lined up ..., it would stretch ...는 현실을 가정해 규모를 보여 주는 구조다.",
        "cue": "수치 자체보다 350 ships / 125 km / roughly 40% 세 이미지를 기억하게 해."
      },
      "inputs": [
        {
          "id": "tb4p92-i1",
          "prompt": "Throwing batteries in the trash is a fire ______.",
          "answer": "hazard",
          "hint": "위험"
        },
        {
          "id": "tb4p92-i2",
          "prompt": "We need to ______ renewable energy.",
          "answer": "generate",
          "hint": "생산하다"
        },
        {
          "id": "tb4p92-i3",
          "prompt": "an energy-efficient home ______",
          "answer": "appliance",
          "hint": "가전제품"
        }
      ],
      "dissect": {
        "sentence": "If you lined up all the e-waste produced in 2019, it would stretch for 125 kilometers.",
        "fields": [
          {
            "label": "조건절 동사",
            "answer": "lined up"
          },
          {
            "label": "수식받는 명사",
            "answer": "e-waste"
          },
          {
            "label": "과거분사",
            "answer": "produced"
          },
          {
            "label": "주절 조동사",
            "answer": "would"
          }
        ]
      },
      "rebuild": {
        "ko": "2019년에 생산된 전자폐기물을 모두 줄 세우면 125km에 이를 것이다.",
        "bank": [
          "it would stretch",
          "If you lined up",
          "for 125 kilometers.",
          "all the e-waste produced in 2019,"
        ],
        "answer": "If you lined up all the e-waste produced in 2019, it would stretch for 125 kilometers."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "p.92의 배경 정보가 본문에 주는 효과는?",
        "options": [
          "e-waste의 경제적 가치를 강조한다.",
          "문제의 규모와 정책 대응 부족을 미리 보여 준다.",
          "수리법의 기술적 원리를 설명한다.",
          "재활용률이 이미 충분함을 보여 준다."
        ],
        "answer": 1,
        "explain": "350 ships, 125 km, 40% 정책 수치가 문제의 규모와 대응 부족을 제시한다."
      },
      "original": {
        "label": "Before You Read 확인",
        "question": "p.92 Vocabulary Preview에서 ‘버리다, 폐기하다’는?",
        "answer": "discard",
        "explain": "hazard, discard, generate, sustainable, contribute, appliance가 제시된다."
      }
    },
    {
      "id": "tb4p93",
      "group": "textbook",
      "order": 22,
      "section": "4과 본문",
      "nav": "p.93 Liz",
      "density": "본문 고밀도",
      "title": "p.93 · Liz’s Broken Laptop",
      "source": "교과서 4과 p.93",
      "type": "문제 상황 · 도입",
      "flow": [
        "Liz가 노트북을 떨어뜨려 손상",
        "수리는 비싸고 오래 걸려 새 제품 구매 고민",
        "버리면 e-waste 문제에 기여"
      ],
      "oneLine": "개인의 ‘수리할까, 버릴까’ 선택을 e-waste라는 사회적 문제로 연결한다.",
      "keyExpr": "damaged laptop → repair hesitation → e-waste",
      "quotes": [
        {
          "src": "p.93",
          "en": "On her way to a study group meeting, Liz accidentally dropped her laptop on the street, seriously damaging it.",
          "ko": "스터디 모임에 가던 중 Liz는 실수로 노트북을 길에 떨어뜨려 심하게 손상시켰다.",
          "why": "도입 사건 + 분사구문."
        },
        {
          "src": "p.93",
          "en": "She can have it repaired, but she is hesitating to do so.",
          "ko": "그녀는 그것을 수리하게 할 수 있지만 그렇게 하기를 망설이고 있다.",
          "why": "have O p.p.와 핵심 갈등."
        },
        {
          "src": "p.93",
          "en": "If Liz throws her laptop in the trash, she will be contributing to a serious problem: e-waste.",
          "ko": "Liz가 노트북을 쓰레기통에 버리면 심각한 문제인 전자폐기물에 기여하게 된다.",
          "why": "개인의 선택과 주제를 연결."
        }
      ],
      "grammar": {
        "title": "have O p.p. / 분사구문",
        "body": "have it repaired는 ‘그것을 수리 맡기다’. seriously damaging it은 앞 사건의 결과를 덧붙이는 분사구문이다.",
        "cue": "‘새로 사는 게 합리적으로 보임 → 실제로는 최선 아닐 수 있음’의 반전을 잡아."
      },
      "inputs": [
        {
          "id": "tb4p93-i1",
          "prompt": "She can have it ______.",
          "answer": "repaired",
          "hint": "have + O + p.p."
        },
        {
          "id": "tb4p93-i2",
          "prompt": "She is ______ to do so.",
          "answer": "hesitating",
          "hint": "망설이다"
        },
        {
          "id": "tb4p93-i3",
          "prompt": "If she throws it away, she will contribute to ______.",
          "answer": "e-waste",
          "hint": "주제"
        }
      ],
      "dissect": {
        "sentence": "On her way to a study group meeting, Liz accidentally dropped her laptop on the street, seriously damaging it.",
        "fields": [
          {
            "label": "주어",
            "answer": "Liz"
          },
          {
            "label": "동사",
            "answer": "dropped"
          },
          {
            "label": "목적어",
            "answer": "her laptop"
          },
          {
            "label": "분사구문",
            "answer": "seriously damaging it"
          }
        ]
      },
      "rebuild": {
        "ko": "Liz는 실수로 노트북을 길에 떨어뜨려 심하게 손상시켰다.",
        "bank": [
          "seriously damaging it.",
          "Liz accidentally dropped",
          "On her way to a study group meeting,",
          "her laptop on the street,"
        ],
        "answer": "On her way to a study group meeting, Liz accidentally dropped her laptop on the street, seriously damaging it."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "p.93에서 새 노트북 구매가 ‘더 합리적으로 보일’ 수 있는 이유로 언급되지 않은 것은?",
        "options": [
          "수리비가 비쌀 수 있다.",
          "수리가 오래 걸린다.",
          "노트북이 약 5년 되었다.",
          "수리 부품이 법적으로 금지되어 있다."
        ],
        "answer": 3,
        "explain": "법적 부품 금지는 p.93에 없다. 비용·시간·연식이 구매 고민의 이유다."
      },
      "original": {
        "label": "도입 확인",
        "question": "Liz가 노트북을 그냥 버릴 경우 어떤 문제에 기여하게 되는가?",
        "answer": "e-waste",
        "explain": "p.93 마지막 문장이 직접 연결한다."
      }
    },
    {
      "id": "tb4p94",
      "group": "textbook",
      "order": 23,
      "section": "4과 본문",
      "nav": "p.94 문제",
      "density": "본문 고밀도",
      "title": "p.94 · What Exactly Is E-waste?",
      "source": "교과서 4과 p.94",
      "type": "정의 · 통계 · 문제 제기",
      "flow": [
        "e-waste 정의와 독성 위험",
        "2021년 57.4 million metric tons · 2014 대비 37% 증가",
        "2030년 16년 만에 두 배 예측 → 수리 쉽게 만들기"
      ],
      "oneLine": "e-waste는 유해하고 빠르게 증가하므로, 해결의 핵심은 제품을 더 쉽게 수리할 수 있게 만드는 것이다.",
      "keyExpr": "discarded devices → toxic hazard → rapidly increasing → easier to repair",
      "quotes": [
        {
          "src": "p.94",
          "en": "The term refers to discarded electronic devices and electrical appliances.",
          "ko": "이 용어는 버려진 전자기기와 전기 가전제품을 가리킨다.",
          "why": "e-waste의 직접 정의."
        },
        {
          "src": "p.94",
          "en": "Experts predict that by 2030, the amount of e-waste generated annually will have doubled in just 16 years.",
          "ko": "전문가들은 2030년까지 연간 전자폐기물 발생량이 불과 16년 만에 두 배가 될 것으로 예측한다.",
          "why": "미래 문제 규모 + 미래완료."
        },
        {
          "src": "p.94",
          "en": "For this reason, efforts are being made to address this problem, most of which are focused on making products easier to repair.",
          "ko": "이 때문에 문제를 해결하려는 노력이 이루어지고 있으며, 그 대부분은 제품을 더 쉽게 수리하도록 만드는 데 초점을 둔다.",
          "why": "해결책 세 가지로 넘어가는 핵심 연결."
        }
      ],
      "grammar": {
        "title": "과거분사 수식 / 미래완료 / most of which",
        "body": "discarded devices, materials contained, e-waste produced/generated처럼 과거분사가 명사를 꾸민다. will have doubled는 미래 특정 시점까지 완료. most of which는 앞의 efforts를 이어 설명한다.",
        "cue": "57.4 million / 37% / doubled 세 수치를 ‘현재 규모-증가-미래’로 연결."
      },
      "inputs": [
        {
          "id": "tb4p94-i1",
          "prompt": "e-waste refers to ______ electronic devices.",
          "answer": "discarded",
          "hint": "버려진"
        },
        {
          "id": "tb4p94-i2",
          "prompt": "By 2030, the amount will have ______.",
          "answer": "doubled",
          "hint": "두 배가 되다"
        },
        {
          "id": "tb4p94-i3",
          "prompt": "Most efforts focus on making products easier to ______.",
          "answer": "repair",
          "hint": "수리"
        }
      ],
      "dissect": {
        "sentence": "Experts predict that by 2030, the amount of e-waste generated annually will have doubled in just 16 years.",
        "fields": [
          {
            "label": "주절 동사",
            "answer": "predict"
          },
          {
            "label": "수식하는 과거분사",
            "answer": "generated"
          },
          {
            "label": "미래완료",
            "answer": "will have doubled"
          },
          {
            "label": "주어 핵심",
            "answer": "amount"
          }
        ]
      },
      "rebuild": {
        "ko": "전문가들은 2030년까지 연간 전자폐기물 발생량이 16년 만에 두 배가 될 것으로 예측한다.",
        "bank": [
          "will have doubled",
          "Experts predict that by 2030,",
          "in just 16 years.",
          "the amount of e-waste generated annually"
        ],
        "answer": "Experts predict that by 2030, the amount of e-waste generated annually will have doubled in just 16 years."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "p.94의 마지막 문장이 이후 본문을 예고하는 방식은?",
        "options": [
          "재활용 공장 건설만을 해결책으로 제시한다.",
          "수리를 더 쉽게 만드는 실제 접근법들을 소개하겠다고 연결한다.",
          "e-waste 통계를 반박한다.",
          "새 제품 생산을 늘려야 한다고 결론낸다."
        ],
        "answer": 1,
        "explain": "most efforts가 making products easier to repair에 focused라고 한 뒤 practical approaches를 소개한다."
      },
      "original": {
        "label": "p.94 Q2",
        "question": "e-waste를 구성하는 제품은 어떤 상태인가?",
        "answer": "discarded",
        "explain": "요약문에서 discarded electronic and electrical products로 확인한다."
      }
    },
    {
      "id": "tb4p95",
      "group": "textbook",
      "order": 24,
      "section": "4과 본문",
      "nav": "p.95 수리권",
      "density": "본문 고밀도",
      "title": "p.95 · Right-to-Repair Movement",
      "source": "교과서 4과 p.95",
      "type": "해결책 1 · 권리와 법",
      "flow": [
        "기기 수리가 어렵고 제조사 제약 존재",
        "소유자는 직접 또는 원하는 기술자에게 수리할 권리",
        "정보·부품·소프트웨어·수리 쉬운 설계를 요구"
      ],
      "oneLine": "수리권 운동은 소비자가 ‘어디서, 어떻게 수리할지’ 선택할 수 있도록 법과 제조사의 책임을 바꾸려 한다.",
      "keyExpr": "right to repair → access to information/parts/software → easier repair",
      "quotes": [
        {
          "src": "p.95",
          "en": "If you own a product, you have the right to fix it yourself or bring it to a technician of your choice.",
          "ko": "제품을 소유했다면 직접 고치거나 원하는 기술자에게 가져갈 권리가 있다.",
          "why": "수리권의 핵심 원칙."
        },
        {
          "src": "p.95",
          "en": "Third, the practice of preventing consumers from installing custom software on their own devices should be prohibited by law.",
          "ko": "셋째, 소비자가 자신의 기기에 맞춤형 소프트웨어를 설치하지 못하게 하는 관행은 법으로 금지되어야 한다.",
          "why": "prevent A from V-ing + 수동태."
        },
        {
          "src": "p.95",
          "en": "Finally, it demands that manufacturers design devices in a way that makes repairs as easy as possible.",
          "ko": "마지막으로 제조업체가 수리를 가능한 한 쉽게 만드는 방식으로 기기를 설계할 것을 요구한다.",
          "why": "p.103 핵심 어법의 본문 예."
        }
      ],
      "grammar": {
        "title": "demand that S V / prevent A from V-ing",
        "body": "demand that manufacturers design에서 design은 동사원형. prevent consumers from installing은 ‘소비자가 설치하지 못하게 하다’.",
        "cue": "네 가지 요구를 ‘정보 / 부품·도구 / 소프트웨어 / 설계’로 말하게 하면 기억이 잘 남아."
      },
      "inputs": [
        {
          "id": "tb4p95-i1",
          "prompt": "Consumers have the right to bring a product to a ______ of their choice.",
          "answer": "technician",
          "hint": "수리 기술자"
        },
        {
          "id": "tb4p95-i2",
          "prompt": "prevent consumers ______ installing custom software",
          "answer": "from",
          "hint": "prevent A from V-ing"
        },
        {
          "id": "tb4p95-i3",
          "prompt": "It demands that manufacturers ______ devices.",
          "answer": "design",
          "hint": "동사원형"
        }
      ],
      "dissect": {
        "sentence": "Finally, it demands that manufacturers design devices in a way that makes repairs as easy as possible.",
        "fields": [
          {
            "label": "요구 동사",
            "answer": "demands"
          },
          {
            "label": "that절 주어",
            "answer": "manufacturers"
          },
          {
            "label": "that절 동사",
            "answer": "design"
          },
          {
            "label": "관계절 동사",
            "answer": "makes"
          }
        ]
      },
      "rebuild": {
        "ko": "수리권 운동은 제조업체가 수리를 가능한 한 쉽게 만드는 방식으로 기기를 설계할 것을 요구한다.",
        "bank": [
          "design devices in a way",
          "Finally, it demands",
          "that makes repairs as easy as possible.",
          "that manufacturers"
        ],
        "answer": "Finally, it demands that manufacturers design devices in a way that makes repairs as easy as possible."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "다음 중 p.95의 수리권 운동 요구와 일치하지 않는 것은?",
        "options": [
          "제품 정보 공개",
          "제3자가 부품과 도구를 구할 수 있게 함",
          "소비자의 맞춤형 소프트웨어 설치를 막음",
          "기기를 가능한 한 수리하기 쉽게 설계"
        ],
        "answer": 2,
        "explain": "소비자의 설치를 ‘막는 관행’을 법으로 금지해야 한다고 한다."
      },
      "original": {
        "label": "p.95 Q4",
        "question": "수리권 법안의 핵심은 무엇인가?",
        "answer": "If you own a product, you have the right to fix it yourself or bring it to a technician of your choice.",
        "explain": "p.95 Q4의 교과서 답이 본문 문장을 그대로 요약한다."
      }
    },
    {
      "id": "tb4p96",
      "group": "textbook",
      "order": 25,
      "section": "4과 본문",
      "nav": "p.96 지수",
      "density": "본문 고밀도",
      "title": "p.96 · Repairability Index",
      "source": "교과서 4과 p.96",
      "type": "해결책 2 · 제도 구조",
      "flow": [
        "프랑스 2021년 5개 제품군에 지수 의무화",
        "0~10점 + 색상으로 구매 전 수리 용이성 제시",
        "정보·분해 난이도·부품 가격 등을 반영"
      ],
      "oneLine": "수리가능성 지수는 소비자가 구매 전에 ‘이 제품이 얼마나 쉽게 수리되는지’를 숫자와 색으로 알게 한다.",
      "keyExpr": "0–10 + color code → repair information before purchase",
      "quotes": [
        {
          "src": "p.96",
          "en": "In January 2021, the French government passed a bill that requires that every manufacturer include a “repairability index” on five categories of electronic devices and electrical appliances.",
          "ko": "2021년 1월 프랑스 정부는 모든 제조사가 다섯 범주의 전자기기·가전에 수리가능성 지수를 표시하도록 요구하는 법안을 통과시켰다.",
          "why": "제도의 도입과 require that S V."
        },
        {
          "src": "p.96",
          "en": "Using a score ranging from 0 to 10, as well as a color-coded system, the index lets consumers see how easily the product can be repaired before they purchase it.",
          "ko": "0~10점과 색상 체계를 사용해 소비자는 구매 전 제품이 얼마나 쉽게 수리되는지 알 수 있다.",
          "why": "지수의 기능."
        },
        {
          "src": "p.96",
          "en": "A low number on a bright red label means that repairing the product will be difficult, whereas a high number on a green label indicates that the product is easy to repair.",
          "ko": "빨간 라벨의 낮은 숫자는 수리가 어렵다는 뜻이고, 초록 라벨의 높은 숫자는 수리가 쉽다는 뜻이다.",
          "why": "색상·점수 해석."
        }
      ],
      "grammar": {
        "title": "require that S V / let O V / whereas",
        "body": "requires that every manufacturer include에서 include는 원형. lets consumers see에서 let + O + 동사원형. whereas는 두 대상을 대조한다.",
        "cue": "red-low-difficult / green-high-easy를 세트로 암기."
      },
      "inputs": [
        {
          "id": "tb4p96-i1",
          "prompt": "The score ranges from 0 to ______.",
          "answer": "10",
          "hint": "지수 범위"
        },
        {
          "id": "tb4p96-i2",
          "prompt": "The index lets consumers ______ how easily a product can be repaired.",
          "answer": "see",
          "hint": "let O V"
        },
        {
          "id": "tb4p96-i3",
          "prompt": "A high number on a ______ label means easier repair.",
          "answer": "green",
          "hint": "색상"
        }
      ],
      "dissect": {
        "sentence": "The index lets consumers see how easily the product can be repaired before they purchase it.",
        "fields": [
          {
            "label": "사역동사",
            "answer": "lets"
          },
          {
            "label": "목적어",
            "answer": "consumers"
          },
          {
            "label": "목적격보어 동사",
            "answer": "see"
          },
          {
            "label": "간접의문문 핵심",
            "answer": "how easily"
          }
        ]
      },
      "rebuild": {
        "ko": "이 지수는 소비자가 구매 전에 제품이 얼마나 쉽게 수리되는지 알게 한다.",
        "bank": [
          "before they purchase it.",
          "The index lets consumers",
          "how easily the product can be repaired",
          "see"
        ],
        "answer": "The index lets consumers see how easily the product can be repaired before they purchase it."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "다음 중 repairability index의 평가 요소로 p.96에 언급되지 않은 것은?",
        "options": [
          "수리 정보의 이용 가능성",
          "분해의 용이성",
          "예비 부품의 가격",
          "제품의 광고비"
        ],
        "answer": 3,
        "explain": "repair information, ease of disassembly, price of spare parts가 제시된다."
      },
      "original": {
        "label": "p.96 Q6",
        "question": "수리가능성 지수는 소비자에게 무엇을 알려 주는가?",
        "answer": "It tells consumers how easily the product can be repaired.",
        "explain": "교과서 Q6의 직접 답."
      }
    },
    {
      "id": "tb4p97",
      "group": "textbook",
      "order": 26,
      "section": "4과 본문",
      "nav": "p.97 효과",
      "density": "본문 고밀도",
      "title": "p.97 · Why the Index Matters",
      "source": "교과서 4과 p.97",
      "type": "효과 · 확산",
      "flow": [
        "소비자가 informed decision 가능",
        "제조사가 수리 쉬운 제품 만들도록 자극",
        "프랑스 밖으로 제도 확산 가능"
      ],
      "oneLine": "지수는 소비자의 구매 선택과 제조사의 설계 행동을 동시에 바꾸고, 국제적으로 확산될 수 있다.",
      "keyExpr": "informed consumers + encouraged manufacturers → sustainable transition",
      "quotes": [
        {
          "src": "p.97",
          "en": "First, it allows consumers to make informed decisions when purchasing new devices and appliances.",
          "ko": "첫째, 새 기기와 가전을 살 때 소비자가 정보에 근거한 결정을 내리게 한다.",
          "why": "효과 1."
        },
        {
          "src": "p.97",
          "en": "Secondly, it encourages manufacturers to make their products easier to repair.",
          "ko": "둘째, 제조업체가 제품을 더 쉽게 수리할 수 있게 만들도록 장려한다.",
          "why": "효과 2."
        },
        {
          "src": "p.97",
          "en": "If the index is successful, we can anticipate seeing more countries around the world following France’s innovative lead.",
          "ko": "지수가 성공한다면 더 많은 나라가 프랑스의 혁신적 선례를 따를 것으로 예상할 수 있다.",
          "why": "국제 확산 전망."
        }
      ],
      "grammar": {
        "title": "allow/encourage O to V / anticipate V-ing",
        "body": "allows consumers to make, encourages manufacturers to make. anticipate는 여기서 seeing을 목적어로 취한다.",
        "cue": "효과를 ‘소비자 변화 / 제조사 변화 / 국가 확산’ 세 층으로 나눠."
      },
      "inputs": [
        {
          "id": "tb4p97-i1",
          "prompt": "make ______ decisions",
          "answer": "informed",
          "hint": "정보에 근거한"
        },
        {
          "id": "tb4p97-i2",
          "prompt": "It ______ manufacturers to make products easier to repair.",
          "answer": "encourages",
          "hint": "장려한다"
        },
        {
          "id": "tb4p97-i3",
          "prompt": "We can anticipate ______ more countries follow France.",
          "answer": "seeing",
          "hint": "anticipate + V-ing"
        }
      ],
      "dissect": {
        "sentence": "It encourages manufacturers to make their products easier to repair.",
        "fields": [
          {
            "label": "동사",
            "answer": "encourages"
          },
          {
            "label": "목적어",
            "answer": "manufacturers"
          },
          {
            "label": "to부정사 동사",
            "answer": "make"
          },
          {
            "label": "목적격보어",
            "answer": "easier"
          }
        ]
      },
      "rebuild": {
        "ko": "이 지수는 제조업체가 제품을 더 쉽게 수리할 수 있게 만들도록 장려한다.",
        "bank": [
          "their products",
          "It encourages manufacturers",
          "easier to repair.",
          "to make"
        ],
        "answer": "It encourages manufacturers to make their products easier to repair."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "p.97에서 지수가 지속가능성에 기여하는 직접 경로로 가장 적절한 것은?",
        "options": [
          "수리하기 어려운 제품 증가 → 매립 증가",
          "소비자 정보 향상·제조사 개선 → 매립되는 제품 감소",
          "제품 가격 상승 → 소비 감소만 유도",
          "프랑스 시장 폐쇄 → 수입 감소"
        ],
        "answer": 1,
        "explain": "소비자 결정과 제조사 설계를 개선해 landfill로 가는 전자제품을 줄이는 논리다."
      },
      "original": {
        "label": "p.97 Q7",
        "question": "repairability index가 e-waste 문제 해결에 어떻게 도움을 주는가?",
        "answer": "It helps consumers make informed decisions and encourages manufacturers to make products easier to repair.",
        "explain": "p.97 Q7 답의 핵심 두 효과."
      }
    },
    {
      "id": "tb4p98",
      "group": "textbook",
      "order": 27,
      "section": "4과 본문",
      "nav": "p.98 Repair Café",
      "density": "본문 고밀도",
      "title": "p.98 · Repair Cafés: It Takes a Community",
      "source": "교과서 4과 p.98",
      "type": "해결책 3 · 공동체",
      "flow": [
        "도구·재료·조언이 있으면 소비자 스스로 수리 가능",
        "무료 공간 + 자원봉사 전문가",
        "수리 기술 공유·기기 수명 연장·지속가능한 관점"
      ],
      "oneLine": "Repair Café는 ‘수리할 권리’나 ‘정보 표시’를 넘어 사람들이 실제로 배우고 함께 고치게 한다.",
      "keyExpr": "tools + volunteer advice + shared skills → longer device life",
      "quotes": [
        {
          "src": "p.98",
          "en": "They are free meeting places where people can gather together and fix their broken devices.",
          "ko": "그곳은 사람들이 모여 고장 난 기기를 고칠 수 있는 무료 모임 장소다.",
          "why": "Repair Café 정의."
        },
        {
          "src": "p.98",
          "en": "They continue to grow in popularity, with more and more people signing up to volunteer.",
          "ko": "점점 더 많은 사람들이 자원봉사에 참여하며 인기가 계속 높아지고 있다.",
          "why": "with + O + V-ing."
        },
        {
          "src": "p.98",
          "en": "By providing spaces where people can learn, Repair Cafés enable individuals to maintain their devices and extend their life spans.",
          "ko": "사람들이 배울 공간을 제공함으로써 개인이 기기를 관리하고 수명을 늘릴 수 있게 한다.",
          "why": "by V-ing + enable A to V."
        }
      ],
      "grammar": {
        "title": "where 관계부사 / with O V-ing / enable A to V",
        "body": "places where people can gather, with more people signing up, enable individuals to maintain...를 묶어서 본다.",
        "cue": "Repair Café의 효과를 ‘고침 / 배움 / 공유 / 수명 연장’으로 반복."
      },
      "inputs": [
        {
          "id": "tb4p98-i1",
          "prompt": "The cafés are staffed by ______ experts.",
          "answer": "volunteer",
          "hint": "자원봉사"
        },
        {
          "id": "tb4p98-i2",
          "prompt": "with more and more people ______ up to volunteer",
          "answer": "signing",
          "hint": "with + O + V-ing"
        },
        {
          "id": "tb4p98-i3",
          "prompt": "Repair Cafés ______ individuals to maintain their devices.",
          "answer": "enable",
          "hint": "enable A to V"
        }
      ],
      "dissect": {
        "sentence": "By providing spaces where people can learn, Repair Cafés enable individuals to maintain their devices and extend their life spans.",
        "fields": [
          {
            "label": "전치사 뒤 동명사",
            "answer": "providing"
          },
          {
            "label": "관계부사",
            "answer": "where"
          },
          {
            "label": "주절 동사",
            "answer": "enable"
          },
          {
            "label": "목적어",
            "answer": "individuals"
          }
        ]
      },
      "rebuild": {
        "ko": "Repair Café는 사람들이 배울 공간을 제공함으로써 개인이 기기를 관리하고 수명을 늘릴 수 있게 한다.",
        "bank": [
          "to maintain their devices and extend their life spans.",
          "By providing spaces where people can learn,",
          "individuals",
          "Repair Cafés enable"
        ],
        "answer": "By providing spaces where people can learn, Repair Cafés enable individuals to maintain their devices and extend their life spans."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "Repair Café가 다른 두 해결책과 구별되는 특징은?",
        "options": [
          "법으로 제조사를 규제한다.",
          "구매 전 수리 점수를 표시한다.",
          "사람들이 직접 모여 전문가 조언을 받고 수리 기술을 공유한다.",
          "새 제품 구입을 보조한다."
        ],
        "answer": 2,
        "explain": "무료 meeting place, volunteer experts, skill sharing이 핵심이다."
      },
      "original": {
        "label": "p.98 Q8",
        "question": "Repair Cafés에서 사람들은 무엇을 할 수 있는가?",
        "answer": "They can fix their broken devices and get advice from volunteer experts.",
        "explain": "p.98 Q8의 빈칸 답 fix/repair, volunteer."
      }
    },
    {
      "id": "tb4p99",
      "group": "textbook",
      "order": 28,
      "section": "4과 본문",
      "nav": "p.99 결론",
      "density": "본문 고밀도",
      "title": "p.99 · A Repairable Future",
      "source": "교과서 4과 p.99",
      "type": "가정 · 결론",
      "flow": [
        "Liz의 상황을 ‘수리가 일상인 세계’로 다시 상상",
        "부품 주문·Repair Café·높은 지수 제품 선택 가능",
        "함께 노력하면 e-waste가 훨씬 적은 미래 가능"
      ],
      "oneLine": "앞의 세 해결책이 실현되면 Liz 같은 개인의 선택지가 넓어지고 e-waste 자체가 줄어든다.",
      "keyExpr": "repair-friendly world → more options → far less e-waste",
      "quotes": [
        {
          "src": "p.99",
          "en": "If that were the case, her options wouldn’t be limited to paying for expensive repairs or throwing away her laptop and buying a new one.",
          "ko": "그렇다면 그녀의 선택지는 비싼 수리비를 내거나 버리고 새로 사는 것에만 제한되지 않을 것이다.",
          "why": "가정법 과거 + 해결책의 의미."
        },
        {
          "src": "p.99",
          "en": "Repairing it probably wouldn’t be very hard, as she likely would have purchased a laptop with a high repairability score.",
          "ko": "아마 높은 수리가능성 점수의 노트북을 샀을 것이므로 수리가 그리 어렵지 않을 것이다.",
          "why": "지수의 효과를 Liz 사례에 적용."
        },
        {
          "src": "p.99",
          "en": "In fact, this sustainable world is a future we can all enjoy if we work toward it together.",
          "ko": "사실 이 지속가능한 세계는 우리가 함께 노력한다면 모두 누릴 수 있는 미래다.",
          "why": "본문 전체 결론."
        }
      ],
      "grammar": {
        "title": "가정법 과거 / 관계부사 where·in which",
        "body": "If that were the case, ... wouldn’t be ...는 현재 사실과 다른 가정. a world where..., a future in which...는 장소·상황을 관계절로 꾸민다.",
        "cue": "p.93의 ‘버리거나 새로 사기’ 양자택일이 p.99에서 어떻게 넓어졌는지 비교."
      },
      "inputs": [
        {
          "id": "tb4p99-i1",
          "prompt": "If that ______ the case, her options wouldn’t be limited.",
          "answer": "were",
          "hint": "가정법"
        },
        {
          "id": "tb4p99-i2",
          "prompt": "a world ______ repairing damaged devices was part of everyday life",
          "answer": "where",
          "hint": "관계부사"
        },
        {
          "id": "tb4p99-i3",
          "prompt": "people will generate far ______ e-waste",
          "answer": "less",
          "hint": "훨씬 적은"
        }
      ],
      "dissect": {
        "sentence": "If that were the case, her options wouldn’t be limited to paying for expensive repairs or throwing away her laptop and buying a new one.",
        "fields": [
          {
            "label": "가정법 동사",
            "answer": "were"
          },
          {
            "label": "주절 조동사",
            "answer": "wouldn’t"
          },
          {
            "label": "be limited to 뒤 형태",
            "answer": "paying"
          },
          {
            "label": "병렬 동명사",
            "answer": "throwing away"
          }
        ]
      },
      "rebuild": {
        "ko": "그렇다면 그녀의 선택지는 비싼 수리비를 내거나 노트북을 버리고 새것을 사는 데만 제한되지 않을 것이다.",
        "bank": [
          "her options wouldn’t be limited",
          "If that were the case,",
          "or throwing away her laptop and buying a new one.",
          "to paying for expensive repairs"
        ],
        "answer": "If that were the case, her options wouldn’t be limited to paying for expensive repairs or throwing away her laptop and buying a new one."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "p.99가 p.93의 Liz 사례를 다시 사용하는 이유는?",
        "options": [
          "노트북 고장 원인을 새로 설명하려고",
          "앞서 소개한 해결책들이 개인의 실제 선택을 어떻게 바꿀 수 있는지 보여 주려고",
          "Repair Café가 실패했음을 보이려고",
          "새 제품 구매가 항상 최선임을 강조하려고"
        ],
        "answer": 1,
        "explain": "p.93의 제한된 선택을 p.99에서 repair-friendly world의 다양한 선택지로 바꿔 보여 준다."
      },
      "original": {
        "label": "Big Question 연결",
        "question": "지속적으로 e-waste를 줄이려는 노력이 중요한 이유는?",
        "answer": "Because it can lead to a future with far less e-waste and a cleaner, healthier planet.",
        "explain": "p.99 마지막 두 문장이 핵심 근거다."
      }
    },
    {
      "id": "tb4p100",
      "group": "textbook",
      "order": 29,
      "section": "4과 복습",
      "nav": "p.100 After",
      "density": "보조 경량형",
      "title": "p.100 · Main Text Summary",
      "source": "교과서 4과 p.100 After You Read",
      "type": "요약 · 세 해결책 구분",
      "flow": [
        "e-waste = discarded devices",
        "Right-to-Repair = technician/manufacturers",
        "Index = repaired/colors · Repair Café = advice/sharing"
      ],
      "oneLine": "p.100은 세 해결책의 기능을 한눈에 다시 구분하는 페이지다.",
      "keyExpr": "right-to-repair / repairability index / Repair Cafés",
      "quotes": [
        {
          "src": "p.100",
          "en": "It refers to discarded electronic devices and electrical appliances.",
          "ko": "전자폐기물은 버려진 전자기기와 전기 가전을 의미한다.",
          "why": "핵심 정의 복습."
        }
      ],
      "grammar": {
        "title": "요약어로 구분하기",
        "body": "technician·manufacturers는 Right-to-Repair, repaired·colors는 Index, advice·sharing은 Repair Cafés에 연결한다.",
        "cue": "단어만 보고 어느 해결책인지 즉답 훈련."
      },
      "inputs": [
        {
          "id": "tb4p100-i1",
          "prompt": "Right-to-Repair: technician / ______",
          "answer": "manufacturers",
          "hint": "제조업체"
        },
        {
          "id": "tb4p100-i2",
          "prompt": "Repairability Index: repaired / ______",
          "answer": "colors",
          "hint": "색"
        },
        {
          "id": "tb4p100-i3",
          "prompt": "Repair Cafés: advice / ______",
          "answer": "sharing",
          "hint": "공유"
        }
      ],
      "dissect": {
        "sentence": "It refers to discarded electronic devices and electrical appliances.",
        "fields": [
          {
            "label": "주어",
            "answer": "It"
          },
          {
            "label": "동사",
            "answer": "refers"
          },
          {
            "label": "전치사",
            "answer": "to"
          },
          {
            "label": "과거분사 수식",
            "answer": "discarded"
          }
        ]
      },
      "rebuild": {
        "ko": "전자폐기물은 버려진 전자기기와 전기 가전을 가리킨다.",
        "bank": [
          "electronic devices and electrical appliances.",
          "It refers",
          "discarded",
          "to"
        ],
        "answer": "It refers to discarded electronic devices and electrical appliances."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "다음 연결 중 맞는 것은?",
        "options": [
          "Repair Cafés — color-coded score",
          "Repairability Index — volunteer experts",
          "Right-to-Repair — technician of your choice",
          "Repair Cafés — legislation"
        ],
        "answer": 2,
        "explain": "technician of your choice는 수리권 운동의 핵심 원칙."
      },
      "original": {
        "label": "p.100 Check Out the Details",
        "question": "‘수리권 운동은 소비자의 custom software 설치를 불법으로 해야 한다고 주장한다’는 T/F?",
        "answer": "F",
        "explain": "반대로 그런 설치를 막는 관행이 법으로 금지되어야 한다고 한다."
      }
    },
    {
      "id": "tb4p101",
      "group": "textbook",
      "order": 30,
      "section": "4과 복습",
      "nav": "p.101 Extension",
      "density": "보조 경량형",
      "title": "p.101 · Extending the E-waste Solutions",
      "source": "교과서 4과 p.101 Extension",
      "type": "적용 · 추가 해결책",
      "flow": [
        "세 해결책 중 효과적인 것 평가",
        "E-waste microfactories",
        "복원 전자제품 판매·manufacturer take-back 등 확장"
      ],
      "oneLine": "본문의 해결 원리를 다른 방식에도 적용해 ‘수명 연장·자원 회수·재사용’이라는 공통점을 찾는다.",
      "keyExpr": "repair / restore / reuse / recover resources",
      "quotes": [
        {
          "src": "p.101",
          "en": "This will reduce e-waste by enabling people to fix their broken devices more cheaply and easily.",
          "ko": "이는 사람들이 고장 난 기기를 더 싸고 쉽게 고칠 수 있게 해 전자폐기물을 줄일 것이다.",
          "why": "enable A to V + by V-ing."
        },
        {
          "src": "p.101",
          "en": "It extends the life span of devices that would otherwise end up in landfills and conserves resources.",
          "ko": "그렇지 않으면 매립될 기기의 수명을 연장하고 자원을 보존한다.",
          "why": "복원 제품의 장점."
        }
      ],
      "grammar": {
        "title": "by V-ing / enable A to V / otherwise",
        "body": "reduce e-waste by enabling..., enable people to fix..., devices that would otherwise end up... 구조를 짧게 확인한다.",
        "cue": "새 해결책도 결국 ‘폐기 전에 가치 회복’인지 물어봐."
      },
      "inputs": [
        {
          "id": "tb4p101-i1",
          "prompt": "reduce e-waste by ______ people to fix devices",
          "answer": "enabling",
          "hint": "by + V-ing"
        },
        {
          "id": "tb4p101-i2",
          "prompt": "It extends the life ______ of devices.",
          "answer": "span",
          "hint": "수명"
        }
      ],
      "dissect": {
        "sentence": "This will reduce e-waste by enabling people to fix their broken devices more cheaply and easily.",
        "fields": [
          {
            "label": "전치사",
            "answer": "by"
          },
          {
            "label": "동명사",
            "answer": "enabling"
          },
          {
            "label": "enable의 목적어",
            "answer": "people"
          },
          {
            "label": "to부정사 동사",
            "answer": "fix"
          }
        ]
      },
      "rebuild": {
        "ko": "이는 사람들이 고장 난 기기를 더 싸고 쉽게 고치게 해 전자폐기물을 줄일 것이다.",
        "bank": [
          "people to fix their broken devices",
          "This will reduce e-waste",
          "more cheaply and easily.",
          "by enabling"
        ],
        "answer": "This will reduce e-waste by enabling people to fix their broken devices more cheaply and easily."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "p.101의 추가 해결책들이 본문 세 해결책과 공유하는 원리는?",
        "options": [
          "제품을 더 빨리 폐기한다.",
          "기기의 가치나 수명을 회복해 폐기를 줄인다.",
          "새 제품만 사용하게 한다.",
          "수리 정보 공개를 금지한다."
        ],
        "answer": 1,
        "explain": "microfactories, restored devices, take-back 모두 자원 회수·수명 연장·재사용으로 e-waste를 줄인다."
      },
      "original": {
        "label": "Extension 확인",
        "question": "Website for Restored Electronic Devices의 장점 하나는?",
        "answer": "It extends the life span of devices.",
        "explain": "p.101 sample의 benefits에 직접 제시된다."
      }
    },
    {
      "id": "tb4p102",
      "group": "textbook",
      "order": 31,
      "section": "4과 언어",
      "nav": "p.102 어휘",
      "density": "보조 경량형",
      "title": "p.102 · Word & Collocation Building",
      "source": "교과서 4과 p.102 Focus on Language",
      "type": "접사 · 연어",
      "flow": [
        "en-: encourage/entitle/enforce/endanger",
        "-ive: innovative/reflective/supportive/cooperative",
        "address / promote 연어"
      ],
      "oneLine": "품사와 접사를 외우는 동시에 address the problem, promote legislation 같은 시험형 연어를 묶는다.",
      "keyExpr": "enforce / supportive / address the need / promote legislation",
      "quotes": [
        {
          "src": "p.102",
          "en": "A group of activists is working to promote legislation that regulates air pollution.",
          "ko": "활동가 집단은 대기 오염을 규제하는 법안을 촉진하기 위해 일하고 있다.",
          "why": "promote legislation 연어."
        },
        {
          "src": "p.102",
          "en": "Regular exercise and a balanced diet can promote health and overall well-being.",
          "ko": "규칙적 운동과 균형 잡힌 식사는 건강과 전반적 웰빙을 증진할 수 있다.",
          "why": "promote + health."
        }
      ],
      "grammar": {
        "title": "접사 en- / -ive와 연어",
        "body": "en-는 명사·형용사를 동사로 만드는 경우가 있고, -ive는 성질을 나타내는 형용사를 만든다. address와 promote는 뒤에 오는 명사를 세트로 기억.",
        "cue": "innovate→innovative / support→supportive도 같이 왕복."
      },
      "inputs": [
        {
          "id": "tb4p102-i1",
          "prompt": "support → ______",
          "answer": "supportive",
          "hint": "-ive"
        },
        {
          "id": "tb4p102-i2",
          "prompt": "promote ______ that regulates air pollution",
          "answer": "legislation",
          "hint": "법안"
        },
        {
          "id": "tb4p102-i3",
          "prompt": "address the ______ for more public parks",
          "answer": "need",
          "hint": "필요"
        }
      ],
      "dissect": {
        "sentence": "A group of activists is working to promote legislation that regulates air pollution.",
        "fields": [
          {
            "label": "주어 핵심",
            "answer": "group"
          },
          {
            "label": "to부정사 동사",
            "answer": "promote"
          },
          {
            "label": "관계대명사",
            "answer": "that"
          },
          {
            "label": "관계절 동사",
            "answer": "regulates"
          }
        ]
      },
      "rebuild": {
        "ko": "활동가 집단은 대기 오염을 규제하는 법안을 촉진하기 위해 일하고 있다.",
        "bank": [
          "legislation that regulates air pollution.",
          "A group of activists",
          "to promote",
          "is working"
        ],
        "answer": "A group of activists is working to promote legislation that regulates air pollution."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "다음 연어 연결이 어색한 것은?",
        "options": [
          "address the problem",
          "address the need",
          "promote health",
          "promote the problem"
        ],
        "answer": 3,
        "explain": "p.102에서는 address the problem/need/situation, promote legislation/health/products."
      },
      "original": {
        "label": "Focus on Language 확인",
        "question": "‘지지해 주는’의 형용사는?",
        "answer": "supportive",
        "explain": "support + -ive → supportive."
      }
    },
    {
      "id": "tb4p103",
      "group": "textbook",
      "order": 32,
      "section": "4과 언어",
      "nav": "p.103 어법",
      "density": "보조 경량형",
      "title": "p.103 · Demand/Require + That & With-construction",
      "source": "교과서 4과 p.103 Focus on Language",
      "type": "요구동사 · with 구조",
      "flow": [
        "suggest/recommend/demand/require + that S V",
        "본문 p.95·96의 동사원형 재확인",
        "with + O + 분사/형용사 상태"
      ],
      "oneLine": "p.103의 핵심은 ‘요구·제안 that절의 동사원형’과 ‘with + 목적어 + 상태’ 두 가지다.",
      "keyExpr": "demand that S V / require that S V / with O p.p.·V-ing",
      "quotes": [
        {
          "src": "p.103",
          "en": "I recommend that anyone with chronic pain seek professional help from a doctor.",
          "ko": "만성 통증이 있는 사람은 누구나 의사의 전문적 도움을 구할 것을 권한다.",
          "why": "recommend that S + 동사원형."
        },
        {
          "src": "p.103",
          "en": "As the rain poured down, Olivia walked into an old café with her heart beating loudly in her chest.",
          "ko": "비가 쏟아지는 가운데 Olivia는 가슴 속 심장이 크게 뛰는 채 오래된 카페로 들어갔다.",
          "why": "with + O + V-ing."
        }
      ],
      "grammar": {
        "title": "요구·제안 that절 + with O C",
        "body": "suggest/recommend/demand/require/insist 뒤 that절에서 (should) + 동사원형. with her heart beating / with his arms crossed처럼 목적어 뒤 상태를 붙인다.",
        "cue": "p.95 design, p.96 include까지 본문으로 다시 되돌아가 확인."
      },
      "inputs": [
        {
          "id": "tb4p103-i1",
          "prompt": "They insisted that everyone ______ the meeting.",
          "answer": "attend",
          "hint": "동사원형"
        },
        {
          "id": "tb4p103-i2",
          "prompt": "The bill requires that every manufacturer ______ the index.",
          "answer": "include",
          "hint": "p.96"
        },
        {
          "id": "tb4p103-i3",
          "prompt": "with his arms ______",
          "answer": "crossed",
          "hint": "팔짱 낀 채"
        }
      ],
      "dissect": {
        "sentence": "I recommend that anyone with chronic pain seek professional help from a doctor.",
        "fields": [
          {
            "label": "요구·제안 동사",
            "answer": "recommend"
          },
          {
            "label": "that절 주어",
            "answer": "anyone"
          },
          {
            "label": "that절 동사",
            "answer": "seek"
          },
          {
            "label": "동사 형태",
            "answer": "동사원형"
          }
        ]
      },
      "rebuild": {
        "ko": "나는 만성 통증이 있는 사람은 누구나 의사의 전문적 도움을 구할 것을 권한다.",
        "bank": [
          "seek professional help from a doctor.",
          "I recommend",
          "anyone with chronic pain",
          "that"
        ],
        "answer": "I recommend that anyone with chronic pain seek professional help from a doctor."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "어법상 맞는 문장은?",
        "options": [
          "The law demands that manufacturers designs devices carefully.",
          "The law demands that manufacturers design devices carefully.",
          "The law demands manufacturers designing devices carefully.",
          "The law demands that manufacturers designed devices carefully."
        ],
        "answer": 1,
        "explain": "demand that S + 동사원형 구조이므로 design."
      },
      "original": {
        "label": "p.103 Practice",
        "question": "Ryan demanded that Amy ______ for her behavior.",
        "answer": "apologize",
        "explain": "demanded that S + 동사원형."
      }
    },
    {
      "id": "tb4p104105",
      "group": "textbook",
      "order": 33,
      "section": "4과 활동",
      "nav": "p.104~105 View",
      "density": "보조 경량형",
      "title": "p.104~105 · Transformations in Agriculture",
      "source": "교과서 4과 p.104~105 View & Learn",
      "type": "지속가능 농업 · floating farm",
      "flow": [
        "기후 위기로 농지 감소",
        "로테르담 floating farm이 도심 물 위에서 식량 생산",
        "태양광·빗물·근거리 생산 → 탄소 배출 감소"
      ],
      "oneLine": "수상 농장은 필요한 곳 가까이에서 자원을 순환하며 생산해 전통 농업의 지속가능한 대안이 된다.",
      "keyExpr": "floating farm → local production → lower transportation CO₂",
      "quotes": [
        {
          "src": "p.104",
          "en": "However, floating farms are helping to revolutionize our approach to agriculture by producing fresh food on the water.",
          "ko": "수상 농장은 물 위에서 신선한 식량을 생산함으로써 농업에 대한 접근 방식을 혁신하고 있다.",
          "why": "핵심 기능."
        },
        {
          "src": "p.104",
          "en": "With a floating farm in the heart of the city, food can be produced where it is consumed.",
          "ko": "도시 중심에 수상 농장이 있으면 식량을 소비되는 곳에서 생산할 수 있다.",
          "why": "근거리 생산."
        },
        {
          "src": "p.104",
          "en": "This means that the amount of carbon dioxide produced in the transportation of food is significantly reduced.",
          "ko": "이는 식품 운송에서 발생하는 이산화탄소의 양이 크게 줄어든다는 뜻이다.",
          "why": "환경적 결과."
        }
      ],
      "grammar": {
        "title": "by V-ing / where S V / p.p. 수식",
        "body": "by producing, where it is consumed, carbon dioxide produced in transportation 구조를 확인한다.",
        "cue": "3층 구조: top cows / middle processing / bottom storage도 내용 확인용으로 짚어."
      },
      "inputs": [
        {
          "id": "tb4p104105-i1",
          "prompt": "The floating farm has ______ layers.",
          "answer": "three",
          "hint": "층 수"
        },
        {
          "id": "tb4p104105-i2",
          "prompt": "Food can be produced ______ it is consumed.",
          "answer": "where",
          "hint": "관계부사"
        },
        {
          "id": "tb4p104105-i3",
          "prompt": "carbon dioxide is significantly ______",
          "answer": "reduced",
          "hint": "감소"
        }
      ],
      "dissect": {
        "sentence": "With a floating farm in the heart of the city, food can be produced where it is consumed.",
        "fields": [
          {
            "label": "with 뒤 명사",
            "answer": "a floating farm"
          },
          {
            "label": "주절 주어",
            "answer": "food"
          },
          {
            "label": "수동태",
            "answer": "can be produced"
          },
          {
            "label": "관계부사",
            "answer": "where"
          }
        ]
      },
      "rebuild": {
        "ko": "도시 중심에 수상 농장이 있으면 식량을 소비되는 곳에서 생산할 수 있다.",
        "bank": [
          "food can be produced",
          "With a floating farm",
          "where it is consumed.",
          "in the heart of the city,"
        ],
        "answer": "With a floating farm in the heart of the city, food can be produced where it is consumed."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "floating farm이 지속가능한 대안인 이유로 가장 직접적인 것은?",
        "options": [
          "식량을 멀리 운송해야 하기 때문에",
          "도시 가까이서 생산하고 태양광·빗물을 활용해 운송 관련 탄소를 줄이기 때문에",
          "전통 농업보다 더 많은 농지를 사용하기 때문에",
          "모든 제품을 수입하기 때문에"
        ],
        "answer": 1,
        "explain": "도심 생산, solar panels, collected rainwater, reduced transportation CO₂가 근거다."
      },
      "original": {
        "label": "p.105 While You View",
        "question": "영상의 주된 내용은?",
        "answer": "an innovative way of producing food in the city",
        "explain": "정답 b."
      }
    },
    {
      "id": "tb4p106107",
      "group": "textbook",
      "order": 34,
      "section": "4과 활동",
      "nav": "p.106~107 Write",
      "density": "보조 경량형",
      "title": "p.106~107 · Analyzing Environmental Issues",
      "source": "교과서 4과 p.106~107 Write & Share",
      "type": "그래프 설명 · 비교",
      "flow": [
        "그래프 주제 제시",
        "가장 높고 낮은 수치·비교 표현",
        "데이터에서 결론 도출"
      ],
      "oneLine": "그래프 쓰기는 ‘주제 → 핵심 수치 비교 → 결론’ 세 단계로 정리하면 된다.",
      "keyExpr": "This graph shows... / had the largest... / results indicate...",
      "quotes": [
        {
          "src": "p.106",
          "en": "This graph shows how individuals in the EU dealt with digital devices that they no longer used in 2022.",
          "ko": "이 그래프는 2022년 EU 개인들이 더 이상 사용하지 않는 디지털 기기를 어떻게 처리했는지 보여 준다.",
          "why": "그래프 주제 문장."
        },
        {
          "src": "p.107",
          "en": "According to the graph, Europe had the highest recycling rate at 42.5%, which was the only rate above the global average.",
          "ko": "그래프에 따르면 유럽은 42.5%로 가장 높은 재활용률을 보였고, 이는 세계 평균보다 높은 유일한 비율이었다.",
          "why": "수치 비교 핵심 예문."
        }
      ],
      "grammar": {
        "title": "how절 / 최상급 / which 계속적 용법",
        "body": "shows how S V, the highest/lowest rate, which was...를 그래프 서술 기본틀로 본다.",
        "cue": "수치를 전부 외우기보다 highest Europe 42.5 / second Asia 11.7 / lowest Africa 0.9 세 개를 중심으로."
      },
      "inputs": [
        {
          "id": "tb4p106107-i1",
          "prompt": "Europe had the ______ recycling rate.",
          "answer": "highest",
          "hint": "최고"
        },
        {
          "id": "tb4p106107-i2",
          "prompt": "Asia had the ______ highest rate.",
          "answer": "second",
          "hint": "두 번째"
        },
        {
          "id": "tb4p106107-i3",
          "prompt": "Africa had the ______ recycling rate.",
          "answer": "lowest",
          "hint": "최저"
        }
      ],
      "dissect": {
        "sentence": "According to the graph, Europe had the highest recycling rate at 42.5%, which was the only rate above the global average.",
        "fields": [
          {
            "label": "주어",
            "answer": "Europe"
          },
          {
            "label": "동사",
            "answer": "had"
          },
          {
            "label": "최상급",
            "answer": "the highest"
          },
          {
            "label": "계속적 관계대명사",
            "answer": "which"
          }
        ]
      },
      "rebuild": {
        "ko": "그래프에 따르면 유럽은 42.5%로 가장 높은 재활용률을 보였다.",
        "bank": [
          "at 42.5%.",
          "Europe had",
          "According to the graph,",
          "the highest recycling rate"
        ],
        "answer": "According to the graph, Europe had the highest recycling rate at 42.5%."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "그래프 설명 문단의 가장 자연스러운 순서는?",
        "options": [
          "결론 → 세부 수치 → 주제",
          "주제 → 주요 수치 비교 → 데이터에서 얻은 결론",
          "세부 수치만 나열",
          "개인 의견 → 주제 생략"
        ],
        "answer": 1,
        "explain": "p.106 Sample Analysis가 Topic → Description → Findings 순서로 표시한다."
      },
      "original": {
        "label": "p.107 Write Your Own",
        "question": "2019년 가장 낮은 e-waste recycling rate를 보인 지역은?",
        "answer": "Africa",
        "explain": "샘플 문장에서 Africa had the lowest recycling rate at 0.9%."
      }
    },
    {
      "id": "tb4p108",
      "group": "textbook",
      "order": 35,
      "section": "4과 활동",
      "nav": "p.108 Wrap Up",
      "density": "보조 경량형",
      "title": "p.108 · Recycling & Carbon Footprint",
      "source": "교과서 4과 p.108 Wrap Up",
      "type": "생활 적용 · 지속가능성",
      "flow": [
        "화장품 공병 회수·재활용",
        "장거리 식품 운송은 CO₂ 증가",
        "지역 생산 식품 선택 등 일상 행동"
      ],
      "oneLine": "지속가능성은 기기 수리뿐 아니라 기업의 회수·재활용과 우리의 소비·이동 선택에도 연결된다.",
      "keyExpr": "recycling programs / long-distance transport → CO₂ / locally-grown food",
      "quotes": [
        {
          "src": "p.108",
          "en": "Transporting food over such long distances generates large quantities of carbon dioxide, with air shipment producing almost 50 times more than sea shipment.",
          "ko": "식품을 장거리 운송하면 많은 이산화탄소가 발생하며 항공 운송은 해상 운송보다 거의 50배 더 많이 발생시킨다.",
          "why": "장거리 운송의 환경 영향."
        },
        {
          "src": "p.108",
          "en": "For example, we should try to buy locally-grown produce.",
          "ko": "예를 들어 우리는 지역에서 재배된 농산물을 사려고 해야 한다.",
          "why": "일상 행동으로 연결."
        }
      ],
      "grammar": {
        "title": "동명사 주어 / with O V-ing",
        "body": "Transporting food...가 주어. with air shipment producing...은 부가 상황을 덧붙인다.",
        "cue": "기업의 recycling effort와 개인의 carbon footprint 감소를 두 갈래로 정리."
      },
      "inputs": [
        {
          "id": "tb4p108-i1",
          "prompt": "Long-distance food transport generates large quantities of carbon ______.",
          "answer": "dioxide",
          "hint": "CO₂"
        },
        {
          "id": "tb4p108-i2",
          "prompt": "We should buy ______-grown produce.",
          "answer": "locally",
          "hint": "지역에서 재배된"
        }
      ],
      "dissect": {
        "sentence": "Transporting food over such long distances generates large quantities of carbon dioxide.",
        "fields": [
          {
            "label": "동명사 주어",
            "answer": "Transporting food"
          },
          {
            "label": "동사",
            "answer": "generates"
          },
          {
            "label": "목적어 핵심",
            "answer": "quantities"
          },
          {
            "label": "of 뒤 물질",
            "answer": "carbon dioxide"
          }
        ]
      },
      "rebuild": {
        "ko": "식품을 장거리 운송하는 것은 많은 양의 이산화탄소를 발생시킨다.",
        "bank": [
          "large quantities of carbon dioxide.",
          "Transporting food",
          "generates",
          "over such long distances"
        ],
        "answer": "Transporting food over such long distances generates large quantities of carbon dioxide."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "p.108의 두 소재를 관통하는 공통 주제는?",
        "options": [
          "소비 편의를 위해 폐기물을 늘리는 법",
          "기업과 개인의 선택을 통해 환경 영향을 줄이는 방법",
          "장거리 운송의 경제적 장점",
          "화장품 사용의 위험성"
        ],
        "answer": 1,
        "explain": "공병 recycling program과 local produce 모두 environmental sustainability를 위한 행동이다."
      },
      "original": {
        "label": "p.108 Read and Write",
        "question": "장거리 식품 운송의 환경적 영향은?",
        "answer": "It generates large quantities of carbon dioxide.",
        "explain": "Q1의 교과서 답."
      }
    },
    {
      "id": "tb4check",
      "group": "textbook",
      "order": 36,
      "section": "4과 복습",
      "nav": "4과 종합체크",
      "density": "누적 복습",
      "title": "4과 종합 체크",
      "source": "교과서 4과 p.92~108",
      "type": "누적 · 혼합 문제",
      "template": "unitCheck",
      "checkItems": [
        {
          "id": "tb4c1",
          "kind": "input",
          "prompt": "p.93 · She can have it ______.",
          "answer": "repaired"
        },
        {
          "id": "tb4c2",
          "kind": "input",
          "prompt": "p.94 · By 2030, the amount will have ______.",
          "answer": "doubled"
        },
        {
          "id": "tb4c3",
          "kind": "mc",
          "prompt": "p.95 · 수리권 운동이 금지하려는 것은?",
          "options": [
            "소비자의 직접 수리",
            "원하는 기술자 선택",
            "소비자의 custom software 설치를 막는 관행",
            "제품 정보 공개"
          ],
          "answer": 2,
          "explain": "preventing consumers from installing custom software should be prohibited."
        },
        {
          "id": "tb4c4",
          "kind": "input",
          "prompt": "p.96 · the repairability ______",
          "answer": "index"
        },
        {
          "id": "tb4c5",
          "kind": "mc",
          "prompt": "p.97 · 지수의 두 직접 효과는?",
          "options": [
            "광고 증가·가격 상승",
            "소비자 informed decisions·제조사 repair-friendly design",
            "수입 금지·수출 증가",
            "제품 교체 촉진·매립 증가"
          ],
          "answer": 1,
          "explain": "소비자 선택과 제조사 설계를 동시에 바꾼다."
        },
        {
          "id": "tb4c6",
          "kind": "input",
          "prompt": "p.98 · Repair Cafés ______ individuals to maintain devices.",
          "answer": "enable"
        },
        {
          "id": "tb4c7",
          "kind": "input",
          "prompt": "p.99 · If that ______ the case, ...",
          "answer": "were"
        },
        {
          "id": "tb4c8",
          "kind": "mc",
          "prompt": "p.100 · Repair Café와 연결되는 단어는?",
          "options": [
            "colors",
            "technician",
            "sharing",
            "manufacturers"
          ],
          "answer": 2,
          "explain": "advice와 sharing이 Repair Cafés 요약 칸에 들어간다."
        },
        {
          "id": "tb4c9",
          "kind": "input",
          "prompt": "p.102 · support → ______",
          "answer": "supportive"
        },
        {
          "id": "tb4c10",
          "kind": "input",
          "prompt": "p.103 · The law demands that manufacturers ______ devices.",
          "answer": "design"
        },
        {
          "id": "tb4c11",
          "kind": "mc",
          "prompt": "p.104~105 · floating farm의 장점은?",
          "options": [
            "농지 사용을 늘린다.",
            "도심 생산으로 운송 관련 탄소를 줄일 수 있다.",
            "빗물을 버린다.",
            "전기를 전부 화석연료로 공급한다."
          ],
          "answer": 1,
          "explain": "도심 생산·태양광·빗물 활용·운송 CO₂ 감소가 핵심."
        },
        {
          "id": "tb4c12",
          "kind": "input",
          "prompt": "p.107 · Europe had the ______ recycling rate.",
          "answer": "highest"
        },
        {
          "id": "tb4c13",
          "kind": "input",
          "prompt": "p.108 · locally-grown ______",
          "answer": "produce"
        },
        {
          "id": "tb4c14",
          "kind": "mc",
          "prompt": "4과 전체 결론은?",
          "options": [
            "새 제품 구매가 항상 최선이다.",
            "수리 접근성·정보·공동체 지원을 높이면 e-waste를 줄일 수 있다.",
            "재활용만이 유일한 해결책이다.",
            "수리는 환경과 무관하다."
          ],
          "answer": 1,
          "explain": "세 본문 해결책 모두 repair를 실질적 선택으로 만드는 방향."
        }
      ]
    },
    {
      "id": "tb5map",
      "group": "textbook",
      "order": 40,
      "section": "5과 전체",
      "nav": "5과 전체맵",
      "density": "전체 구조",
      "title": "Lesson 5 · The Colorful Truth About Ancient Sculptures",
      "source": "교과서 5과 p.118~130",
      "type": "전체 논리 · 편견과 수정",
      "flow": [
        "고대 조각의 polychromy 흔적 발견",
        "르네상스 이후 ‘흰 대리석=이상적 아름다움’ 편견 형성·고착",
        "과학적 분석과 학자 연구로 편견 수정 → 객관적 시각의 중요성"
      ],
      "oneLine": "5과는 ‘고대 조각은 원래 흰색’이라는 오해가 어떻게 생겨 오래 지속되었고, 과학적 증거가 그것을 어떻게 수정했는지를 보여 준다.",
      "keyExpr": "polychromy → Renaissance misconception → entrenched bias → scientific evidence → changed perception",
      "quotes": [
        {
          "src": "p.119",
          "en": "There were clear signs of polychromy: the use of various colors in the decoration of statues or works of architecture.",
          "ko": "조각상이나 건축물을 장식할 때 여러 색을 사용한 다색채색의 명백한 흔적이 있었다.",
          "why": "본문 전체의 출발점이 되는 발견."
        },
        {
          "src": "p.124",
          "en": "The fact that Greek and Roman artists normally decorated their sculptures with vivid colors is now widely acknowledged.",
          "ko": "그리스·로마 예술가들이 조각을 선명한 색으로 장식했다는 사실은 이제 널리 인정된다.",
          "why": "현재의 수정된 인식을 압축한다."
        },
        {
          "src": "p.125",
          "en": "Perhaps there is more to the world than meets the eye.",
          "ko": "어쩌면 세상에는 눈에 보이는 것보다 더 많은 것이 있을지도 모른다.",
          "why": "편견과 고정관념에 대한 최종 교훈."
        }
      ],
      "grammar": {
        "title": "시간·인과 신호 + ‘증거 → 인식 변화’",
        "body": "본문은 in the early 1980s, since the Renaissance, over time, until the 1960s, since the 1980s처럼 시간 흐름을 따라 편견 형성과 수정을 보여 준다.",
        "cue": "학생에게 ‘사실의 변화’가 아니라 ‘사람들의 인식이 어떻게 바뀌었는지’를 중심으로 말하게 해."
      },
      "inputs": [
        {
          "id": "tb5map-i1",
          "prompt": "여러 색으로 조각을 꾸미는 관행: ______",
          "answer": "polychromy",
          "hint": "핵심 용어"
        },
        {
          "id": "tb5map-i2",
          "prompt": "르네상스 이후 흰 대리석과 ______ beauty가 연결되었다.",
          "answer": "ideal",
          "hint": "p.122"
        },
        {
          "id": "tb5map-i3",
          "prompt": "현재는 다색채색이 널리 ______.",
          "answer": "acknowledged",
          "hint": "p.124"
        }
      ],
      "dissect": {
        "sentence": "The fact that Greek and Roman artists normally decorated their sculptures with vivid colors is now widely acknowledged.",
        "fields": [
          {
            "label": "주어 핵심",
            "answer": "fact"
          },
          {
            "label": "동격 접속사",
            "answer": "that"
          },
          {
            "label": "that절 동사",
            "answer": "decorated"
          },
          {
            "label": "주절 동사",
            "answer": "is acknowledged"
          }
        ]
      },
      "rebuild": {
        "ko": "그리스와 로마 예술가들이 조각을 선명한 색으로 장식했다는 사실은 이제 널리 인정된다.",
        "bank": [
          "is now widely acknowledged.",
          "The fact that",
          "normally decorated their sculptures with vivid colors",
          "Greek and Roman artists"
        ],
        "answer": "The fact that Greek and Roman artists normally decorated their sculptures with vivid colors is now widely acknowledged."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "5과 전체의 핵심 메시지로 가장 적절한 것은?",
        "options": [
          "오래된 미적 기준은 과학적 증거보다 항상 신뢰할 만하다.",
          "고대 조각의 색채는 현대 학자들이 새로 만든 것이다.",
          "오랜 믿음도 편견일 수 있으므로 증거를 통해 객관적으로 재검토해야 한다.",
          "르네상스 예술가들은 고대의 색채 관행을 정확히 보존했다."
        ],
        "answer": 2,
        "explain": "본문은 흰 대리석 편견이 오래 지속되었지만 과학적 분석과 연구로 수정된 과정을 보여 준다."
      },
      "original": {
        "label": "5과 전체 확인",
        "question": "사람들의 polychromy 인식 변화에 기여한 것은?",
        "answer": "The development of new methods of scientific analysis and the work of scholars.",
        "explain": "p.124 Q9의 직접 답."
      }
    },
    {
      "id": "tb5p118",
      "group": "textbook",
      "order": 41,
      "section": "5과 준비",
      "nav": "p.118 Before",
      "density": "보조 경량형",
      "title": "p.118 · Before You Read",
      "source": "교과서 5과 p.118",
      "type": "배경 · 핵심 어휘",
      "flow": [
        "흰 조각 vs 채색 조각 비교",
        "sculpture · astonished · fade · contrast · reinforce · associate",
        "본문 주제: 우리가 익숙한 ‘흰 고대 조각’ 이미지에 의문"
      ],
      "oneLine": "본문에 들어가기 전, ‘고대 조각=흰색’이라는 익숙한 인상을 깨뜨릴 어휘와 시각적 대비를 준비한다.",
      "keyExpr": "sculpture / fade / contrast / reinforce / associate",
      "quotes": [
        {
          "src": "p.118",
          "en": "The color of my favorite shirt has faded after many years of wearing it.",
          "ko": "내가 좋아하는 셔츠의 색은 여러 해 입은 뒤 바랬다.",
          "why": "본문에서 고대 조각의 색이 사라지는 과정과 연결되는 fade."
        },
        {
          "src": "p.118",
          "en": "The positive reviews of his new book reinforced his reputation as a great writer.",
          "ko": "새 책에 대한 긍정적 평가는 훌륭한 작가라는 그의 평판을 강화했다.",
          "why": "p.122에서 흰 대리석 미학이 강화되는 reinforce와 연결."
        }
      ],
      "grammar": {
        "title": "어휘를 본문 흐름에 연결",
        "body": "fade는 색이 바래다, reinforce는 기존 생각을 강화하다, associate A with B는 A와 B를 연결 짓다.",
        "cue": "단어만 외우기보다 ‘색이 fade → 흰색 이미지가 reinforce → whiteness를 beauty와 associate’ 흐름으로 묶어."
      },
      "inputs": [
        {
          "id": "tb5p118-i1",
          "prompt": "색이 바래다: ______",
          "answer": "fade",
          "hint": "시간이 지나며 색이 약해짐"
        },
        {
          "id": "tb5p118-i2",
          "prompt": "A를 B와 연관 짓다: associate A ______ B",
          "answer": "with",
          "hint": "전치사"
        },
        {
          "id": "tb5p118-i3",
          "prompt": "기존 인식을 강화하다: ______",
          "answer": "reinforce",
          "hint": "강화하다"
        }
      ],
      "dissect": {
        "sentence": "Many people associate summer with vacations or the beach.",
        "fields": [
          {
            "label": "주어",
            "answer": "Many people"
          },
          {
            "label": "동사",
            "answer": "associate"
          },
          {
            "label": "A",
            "answer": "summer"
          },
          {
            "label": "전치사",
            "answer": "with"
          }
        ]
      },
      "rebuild": {
        "ko": "많은 사람들은 여름을 휴가나 해변과 연관 짓는다.",
        "bank": [
          "summer",
          "Many people associate",
          "with",
          "vacations or the beach."
        ],
        "answer": "Many people associate summer with vacations or the beach."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "p.118의 어휘 중 본문의 ‘흰 대리석=아름다움’ 인식 형성과 가장 직접적으로 연결되는 조합은?",
        "options": [
          "fade + reinforce + associate",
          "sculpture + beach + shirt",
          "astonished + vacation + review",
          "contrast + wearing + writer"
        ],
        "answer": 0,
        "explain": "색은 fade되고, 흰 대리석 이미지가 reinforce되며, whiteness가 beauty와 associate된다."
      },
      "original": {
        "label": "Before You Read 확인",
        "question": "‘대조’라는 뜻의 단어는?",
        "answer": "contrast",
        "explain": "p.118 Vocabulary Preview에 제시된다."
      }
    },
    {
      "id": "tb5p119",
      "group": "textbook",
      "order": 42,
      "section": "5과 본문",
      "nav": "p.119 발견",
      "density": "본문 고밀도",
      "title": "p.119 · Brinkmann’s Unexpected Discovery",
      "source": "교과서 5과 p.119",
      "type": "발견 · 핵심 개념",
      "flow": [
        "Brinkmann이 도구 자국을 자세히 보기 위해 UV lamp 개발",
        "조각을 비추다 예상 못한 것을 발견",
        "polychromy 흔적 확인"
      ],
      "oneLine": "도구 자국을 보려던 연구가 우연히 고대 조각의 색채 흔적을 발견하는 계기가 된다.",
      "keyExpr": "ultraviolet lamp → unexpected signs → polychromy",
      "quotes": [
        {
          "src": "p.119",
          "en": "He wanted to figure out a way to closely examine the marks left by tools on ancient Greek and Roman marble sculptures, so he developed a special ultraviolet lamp that would reveal marble surfaces in great detail.",
          "ko": "그는 고대 그리스·로마 대리석 조각에 도구가 남긴 자국을 자세히 조사할 방법을 찾고자 특별한 자외선 램프를 개발했다.",
          "why": "램프의 원래 목적."
        },
        {
          "src": "p.119",
          "en": "When Brinkmann shone his lamp on the sculptures, he was astonished to see something that he had not expected.",
          "ko": "Brinkmann이 램프를 비췄을 때 예상하지 못한 것을 보고 놀랐다.",
          "why": "발견의 전환점."
        },
        {
          "src": "p.119",
          "en": "There were clear signs of polychromy: the use of various colors in the decoration of statues or works of architecture.",
          "ko": "조각상이나 건축물 장식에 여러 색을 사용하는 다색채색의 명백한 흔적이 있었다.",
          "why": "핵심 용어 정의."
        }
      ],
      "grammar": {
        "title": "과거분사 후치수식 / 관계대명사 that",
        "body": "marks left by tools에서 left는 marks를 뒤에서 꾸민다. lamp that would reveal..., something that he had not expected에서 that은 관계대명사.",
        "cue": "‘램프 목적 = 색 찾기’가 아니라 ‘도구 자국 관찰’이었다는 점을 꼭 구분."
      },
      "inputs": [
        {
          "id": "tb5p119-i1",
          "prompt": "He developed a special ______ lamp.",
          "answer": "ultraviolet",
          "hint": "자외선"
        },
        {
          "id": "tb5p119-i2",
          "prompt": "He was ______ to see something unexpected.",
          "answer": "astonished",
          "hint": "깜짝 놀란"
        },
        {
          "id": "tb5p119-i3",
          "prompt": "clear signs of ______",
          "answer": "polychromy",
          "hint": "다색채색"
        }
      ],
      "dissect": {
        "sentence": "He wanted to figure out a way to closely examine the marks left by tools on ancient Greek and Roman marble sculptures.",
        "fields": [
          {
            "label": "주어",
            "answer": "He"
          },
          {
            "label": "to부정사 동사 1",
            "answer": "figure out"
          },
          {
            "label": "to부정사 동사 2",
            "answer": "examine"
          },
          {
            "label": "과거분사 수식",
            "answer": "left by tools"
          }
        ]
      },
      "rebuild": {
        "ko": "그는 고대 그리스와 로마 대리석 조각에 도구가 남긴 자국을 자세히 조사할 방법을 찾고자 했다.",
        "bank": [
          "the marks left by tools",
          "He wanted to figure out",
          "on ancient Greek and Roman marble sculptures.",
          "a way to closely examine"
        ],
        "answer": "He wanted to figure out a way to closely examine the marks left by tools on ancient Greek and Roman marble sculptures."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "Brinkmann이 특별한 자외선 램프를 개발한 원래 목적은?",
        "options": [
          "조각의 원래 색을 복원하려고",
          "도구가 남긴 자국을 자세히 조사하려고",
          "르네상스 조각의 연대를 측정하려고",
          "대리석의 가격을 비교하려고"
        ],
        "answer": 1,
        "explain": "p.119 Q1도 같은 내용을 묻는다."
      },
      "original": {
        "label": "p.119 Q2",
        "question": "Brinkmann은 램프를 비췄을 때 무엇을 발견했는가?",
        "answer": "He discovered clear signs of polychromy.",
        "explain": "교과서 Q2의 직접 답."
      }
    },
    {
      "id": "tb5p120",
      "group": "textbook",
      "order": 43,
      "section": "5과 본문",
      "nav": "p.120 증거",
      "density": "본문 고밀도",
      "title": "p.120 · Evidence Everywhere",
      "source": "교과서 5과 p.120",
      "type": "증거 확대 · 원래 모습",
      "flow": [
        "더 많은 조각 조사 → 거의 모든 조각에서 색 흔적",
        "특별한 램프 없이도 육안으로 보이는 흔적",
        "흰 대리석은 canvas처럼 사용되어 선명한 색으로 장식됨"
      ],
      "oneLine": "색채 흔적은 예외가 아니라 매우 널리 존재했고, 흰 대리석 표면은 원래 색칠을 위한 바탕이었다.",
      "keyExpr": "evidence on almost every statue → white marble as canvas → vivid pigments",
      "quotes": [
        {
          "src": "p.120",
          "en": "To his surprise, he found evidence of polychromy on almost every statue that he looked at.",
          "ko": "놀랍게도 그가 본 거의 모든 조각상에서 다색채색의 증거를 발견했다.",
          "why": "polychromy가 예외가 아니었음을 보여 준다."
        },
        {
          "src": "p.120",
          "en": "Their research showed undeniable evidence that, while white marble was a highly valued material for Greek and Roman sculptors, its smooth surface was not always left bare.",
          "ko": "흰 대리석이 높이 평가된 재료였지만 매끄러운 표면이 항상 맨 상태로 남겨진 것은 아니었다는 명백한 증거를 보여 주었다.",
          "why": "기존 인식과 실제 사용을 대비."
        },
        {
          "src": "p.120",
          "en": "Instead, the white marble was used like a canvas.",
          "ko": "대신 흰 대리석은 캔버스처럼 사용되었다.",
          "why": "고대 조각의 원래 기능을 압축."
        }
      ],
      "grammar": {
        "title": "by V-ing / while 대조 / not always",
        "body": "by examining은 방법, while은 ‘~인 반면/비록 ~이지만’의 대조, was not always left bare는 부분 부정.",
        "cue": "bare marble ≠ final appearance, canvas = painted surface라는 이미지로 설명."
      },
      "inputs": [
        {
          "id": "tb5p120-i1",
          "prompt": "He found evidence on almost ______ statue.",
          "answer": "every",
          "hint": "거의 모든"
        },
        {
          "id": "tb5p120-i2",
          "prompt": "The marble surface was not always left ______.",
          "answer": "bare",
          "hint": "아무것도 입히지 않은"
        },
        {
          "id": "tb5p120-i3",
          "prompt": "White marble was used like a ______.",
          "answer": "canvas",
          "hint": "그림 바탕"
        }
      ],
      "dissect": {
        "sentence": "Their research showed undeniable evidence that, while white marble was a highly valued material for Greek and Roman sculptors, its smooth surface was not always left bare.",
        "fields": [
          {
            "label": "주절 동사",
            "answer": "showed"
          },
          {
            "label": "동격 내용 접속사",
            "answer": "that"
          },
          {
            "label": "대조 접속사",
            "answer": "while"
          },
          {
            "label": "수동태",
            "answer": "was not always left"
          }
        ]
      },
      "rebuild": {
        "ko": "흰 대리석은 그리스·로마 조각가들에게 높이 평가된 재료였지만 그 표면이 항상 그대로 남겨진 것은 아니었다.",
        "bank": [
          "its smooth surface was not always left bare.",
          "while white marble was a highly valued material",
          "Their research showed undeniable evidence that,",
          "for Greek and Roman sculptors,"
        ],
        "answer": "Their research showed undeniable evidence that, while white marble was a highly valued material for Greek and Roman sculptors, its smooth surface was not always left bare."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "p.120의 ‘white marble was used like a canvas’가 의미하는 것은?",
        "options": [
          "대리석에 글만 적었다.",
          "대리석 표면에 다양한 색의 안료를 칠했다.",
          "대리석을 천처럼 접었다.",
          "대리석을 흰색으로 다시 칠했다."
        ],
        "answer": 1,
        "explain": "바로 뒤 문장에서 vivid pigments were applied to decorate the sculptures in many rich colors라고 설명한다."
      },
      "original": {
        "label": "p.120 Q3",
        "question": "‘색 흔적은 특별한 램프 없이는 볼 수 없었다’는 T/F?",
        "answer": "F",
        "explain": "많은 흔적은 naked eye로도 clearly 볼 수 있었다."
      }
    },
    {
      "id": "tb5p121",
      "group": "textbook",
      "order": 44,
      "section": "5과 본문",
      "nav": "p.121 오해 시작",
      "density": "본문 고밀도",
      "title": "p.121 · How the Misconception Began",
      "source": "교과서 5과 p.121",
      "type": "원인 · 르네상스",
      "flow": [
        "오늘날 ‘고대 조각=순백’ 이미지가 익숙함",
        "1,000년 이상 지나며 원래 페인트가 닳고 발굴 과정에서도 벗겨짐",
        "르네상스 사람들이 흰 대리석의 매끈함과 명암 대비에 감탄"
      ],
      "oneLine": "고대 조각이 원래 흰색이어서가 아니라, 색이 오랜 시간과 발굴 과정에서 사라진 채 르네상스에 발견되면서 오해가 시작됐다.",
      "keyExpr": "paint wore off → white marble exposed → Renaissance admiration",
      "quotes": [
        {
          "src": "p.121",
          "en": "Over a period of more than 1,000 years, much of the paint with which these sculptures were originally decorated wore off.",
          "ko": "1,000년이 넘는 기간 동안 이 조각들을 원래 장식했던 페인트의 상당 부분이 닳아 없어졌다.",
          "why": "전치사+관계대명사 + 오해 발생 원인."
        },
        {
          "src": "p.121",
          "en": "Any paint that remained was faded, and more of it came off during the excavation process itself.",
          "ko": "남아 있던 페인트도 바랬고, 발굴 과정 자체에서 더 많은 페인트가 벗겨졌다.",
          "why": "흰 표면이 드러난 과정."
        },
        {
          "src": "p.121",
          "en": "As a result, when these ancient statues were taken out of the ground, their surfaces were plain white marble.",
          "ko": "그 결과 고대 조각들이 땅에서 꺼내졌을 때 표면은 장식 없는 흰 대리석이었다.",
          "why": "원인→결과 연결."
        }
      ],
      "grammar": {
        "title": "전치사 + 관계대명사 / when절 / 수동태",
        "body": "paint with which the sculptures were decorated = 조각을 장식했던 페인트. were taken out은 수동태.",
        "cue": "‘흰 상태로 제작’이 아니라 ‘색이 사라진 뒤 흰 상태로 발굴’이라는 차이를 반복."
      },
      "inputs": [
        {
          "id": "tb5p121-i1",
          "prompt": "Much of the paint ______ off.",
          "answer": "wore",
          "hint": "wear off"
        },
        {
          "id": "tb5p121-i2",
          "prompt": "Any paint that remained was ______.",
          "answer": "faded",
          "hint": "색이 바랜"
        },
        {
          "id": "tb5p121-i3",
          "prompt": "The statues were taken out of the ______.",
          "answer": "ground",
          "hint": "발굴"
        }
      ],
      "dissect": {
        "sentence": "Over a period of more than 1,000 years, much of the paint with which these sculptures were originally decorated wore off.",
        "fields": [
          {
            "label": "선행사",
            "answer": "paint"
          },
          {
            "label": "전치사",
            "answer": "with"
          },
          {
            "label": "관계대명사",
            "answer": "which"
          },
          {
            "label": "주절 동사",
            "answer": "wore off"
          }
        ]
      },
      "rebuild": {
        "ko": "1,000년이 넘는 동안 이 조각들을 원래 장식했던 페인트의 상당 부분이 닳아 없어졌다.",
        "bank": [
          "wore off.",
          "much of the paint",
          "Over a period of more than 1,000 years,",
          "with which these sculptures were originally decorated"
        ],
        "answer": "Over a period of more than 1,000 years, much of the paint with which these sculptures were originally decorated wore off."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "르네상스 사람들이 고대 조각을 흰 대리석으로 인식하게 된 직접적인 원인은?",
        "options": [
          "고대 예술가들이 흰색만 사용해서",
          "원래 페인트가 오랜 시간과 발굴 과정에서 사라졌기 때문에",
          "Brinkmann이 색을 제거했기 때문에",
          "로마 시대 법이 채색을 금지해서"
        ],
        "answer": 1,
        "explain": "paint wore off/faded/came off → surfaces were plain white marble."
      },
      "original": {
        "label": "p.121 Q5",
        "question": "1,000년 넘는 기간 동안 고대 조각에 무슨 일이 일어났는가?",
        "answer": "Much of the paint with which the sculptures were originally decorated wore off.",
        "explain": "Q5의 교과서 답."
      }
    },
    {
      "id": "tb5p122",
      "group": "textbook",
      "order": 45,
      "section": "5과 본문",
      "nav": "p.122 편견 강화",
      "density": "본문 고밀도",
      "title": "p.122 · White Marble Becomes an Ideal",
      "source": "교과서 5과 p.122",
      "type": "미적 기준 형성",
      "flow": [
        "1489 Apollo Belvedere 발굴",
        "맨 돌 표면과 몸의 윤곽이 르네상스 예술가들에게 강한 인상",
        "흰 대리석을 ideal beauty와 연결 → Michelangelo도 같은 관점"
      ],
      "oneLine": "발굴 당시의 흰 모습이 아름다움의 기준으로 받아들여지면서 ‘흰 대리석=이상미’라는 연결이 강화됐다.",
      "keyExpr": "bare white marble → admiration → ideal beauty",
      "quotes": [
        {
          "src": "p.122",
          "en": "Renaissance artists were amazed by how its bare stone surface highlighted the elegant outline of the sculpted body.",
          "ko": "르네상스 예술가들은 맨 돌 표면이 조각된 몸의 우아한 윤곽을 강조하는 방식에 감탄했다.",
          "why": "흰 표면 미학의 출발."
        },
        {
          "src": "p.122",
          "en": "This discovery reinforced the artists’ admiration for white marble.",
          "ko": "이 발견은 예술가들의 흰 대리석에 대한 감탄을 강화했다.",
          "why": "reinforce 반복."
        },
        {
          "src": "p.122",
          "en": "Both artists and scholars began to associate undecorated white marble with ideal beauty.",
          "ko": "예술가와 학자 모두 장식되지 않은 흰 대리석을 이상적인 아름다움과 연관 짓기 시작했다.",
          "why": "편견 형성의 핵심 문장."
        }
      ],
      "grammar": {
        "title": "how + S V / associate A with B / in order to",
        "body": "amazed by how its surface highlighted..., associate A with B, traveled ... in order to purchase... 구조를 본다.",
        "cue": "Apollo Belvedere는 ‘증거’가 아니라 편견을 강화한 역사적 계기라는 점."
      },
      "inputs": [
        {
          "id": "tb5p122-i1",
          "prompt": "The discovery ______ the artists’ admiration.",
          "answer": "reinforced",
          "hint": "강화했다"
        },
        {
          "id": "tb5p122-i2",
          "prompt": "associate white marble ______ ideal beauty",
          "answer": "with",
          "hint": "전치사"
        },
        {
          "id": "tb5p122-i3",
          "prompt": "Michelangelo traveled to quarries to purchase high-quality white ______.",
          "answer": "marble",
          "hint": "재료"
        }
      ],
      "dissect": {
        "sentence": "Both artists and scholars began to associate undecorated white marble with ideal beauty.",
        "fields": [
          {
            "label": "주어",
            "answer": "Both artists and scholars"
          },
          {
            "label": "동사",
            "answer": "began"
          },
          {
            "label": "to부정사 동사",
            "answer": "associate"
          },
          {
            "label": "전치사",
            "answer": "with"
          }
        ]
      },
      "rebuild": {
        "ko": "예술가와 학자 모두 장식되지 않은 흰 대리석을 이상적인 아름다움과 연관 짓기 시작했다.",
        "bank": [
          "with ideal beauty.",
          "Both artists and scholars",
          "undecorated white marble",
          "began to associate"
        ],
        "answer": "Both artists and scholars began to associate undecorated white marble with ideal beauty."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "Apollo Belvedere의 발견이 편견 형성에 기여한 방식은?",
        "options": [
          "원래 색이 완벽히 보존되어 채색 전통을 확립했다.",
          "흰 표면의 미적 효과가 찬사를 받아 whiteness와 beauty의 연결을 강화했다.",
          "색채 흔적이 발견되어 즉시 기존 인식이 바뀌었다.",
          "Michelangelo가 조각을 다시 채색했다."
        ],
        "answer": 1,
        "explain": "bare stone surface에 대한 admiration이 white marble=ideal beauty 연결을 reinforce했다."
      },
      "original": {
        "label": "p.122 Q6",
        "question": "르네상스 예술가와 학자들은 장식되지 않은 흰 대리석을 무엇과 연관 지었는가?",
        "answer": "ideal beauty",
        "explain": "Q6의 교과서 답."
      }
    },
    {
      "id": "tb5p123",
      "group": "textbook",
      "order": 46,
      "section": "5과 본문",
      "nav": "p.123 편견 고착",
      "density": "본문 고밀도",
      "title": "p.123 · When Evidence Was Ignored",
      "source": "교과서 5과 p.123",
      "type": "편견 고착 · 반증 무시",
      "flow": [
        "흰색=예술적 아름다움 연결이 서양 문화에 깊게 뿌리내림",
        "18~19세기 색 흔적이 발견되어도 인식은 바뀌지 않음",
        "polychromy를 믿은 학자 비판·채색 복원품 폄하·색 흔적 제거까지"
      ],
      "oneLine": "편견이 강해지자 반대 증거가 나와도 사람들은 증거를 무시하거나 깎아내리며 기존 믿음을 유지했다.",
      "keyExpr": "deeply rooted bias → contrary evidence ignored → misconception persisted",
      "quotes": [
        {
          "src": "p.123",
          "en": "Over time, the association of whiteness with artistic beauty grew stronger in people’s minds, and it became deeply rooted in Western art and culture.",
          "ko": "시간이 지나면서 흰색과 예술적 아름다움의 연관은 더 강해져 서양 예술과 문화에 깊이 뿌리내렸다.",
          "why": "편견의 고착."
        },
        {
          "src": "p.123",
          "en": "Despite the excavation of ancient Greek and Roman artifacts with traces of color in the 18th and 19th centuries, the bias toward white marble sculpture was so firmly established that people’s perceptions did not alter.",
          "ko": "색 흔적이 있는 유물이 발굴됐음에도 흰 대리석 편견이 너무 확고해 인식이 바뀌지 않았다.",
          "why": "despite + so...that."
        },
        {
          "src": "p.123",
          "en": "Some of them even had their colors wiped off so that the bare white surface beneath could be seen.",
          "ko": "일부는 아래의 흰 표면이 보이도록 색을 닦아내기까지 했다.",
          "why": "have O p.p. + so that."
        }
      ],
      "grammar": {
        "title": "despite / so ... that / have O p.p.",
        "body": "Despite + 명사, so firmly established that..., had their colors wiped off 구조가 핵심.",
        "cue": "‘증거 없음’이 아니라 ‘증거가 있어도 받아들이지 않음’이 포인트."
      },
      "inputs": [
        {
          "id": "tb5p123-i1",
          "prompt": "The bias became deeply ______ in Western art and culture.",
          "answer": "rooted",
          "hint": "뿌리내린"
        },
        {
          "id": "tb5p123-i2",
          "prompt": "people’s perceptions did not ______",
          "answer": "alter",
          "hint": "바뀌다"
        },
        {
          "id": "tb5p123-i3",
          "prompt": "Some sculptures had their colors ______ off.",
          "answer": "wiped",
          "hint": "have O p.p."
        }
      ],
      "dissect": {
        "sentence": "The bias toward white marble sculpture was so firmly established that people’s perceptions did not alter.",
        "fields": [
          {
            "label": "주어 핵심",
            "answer": "bias"
          },
          {
            "label": "수동태",
            "answer": "was established"
          },
          {
            "label": "강조 구조 앞부분",
            "answer": "so firmly"
          },
          {
            "label": "결과 접속사",
            "answer": "that"
          }
        ]
      },
      "rebuild": {
        "ko": "흰 대리석 조각에 대한 편견은 너무 확고하게 자리 잡아서 사람들의 인식이 바뀌지 않았다.",
        "bank": [
          "that people’s perceptions did not alter.",
          "The bias toward white marble sculpture",
          "so firmly established",
          "was"
        ],
        "answer": "The bias toward white marble sculpture was so firmly established that people’s perceptions did not alter."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "p.123이 ‘편견’의 위험을 가장 강하게 보여 주는 사례는?",
        "options": [
          "색 흔적 발견 뒤 즉시 학계가 수정됨",
          "색채 복원품이 높은 평가를 받음",
          "반대 증거가 있어도 무시하고 일부 조각의 색을 지우기까지 함",
          "르네상스 이전부터 흰색 편견이 사라짐"
        ],
        "answer": 2,
        "explain": "증거가 존재했지만 perceptions did not alter, colors were wiped off까지 이어진다."
      },
      "original": {
        "label": "p.123 Q8",
        "question": "‘일부 고대 조각은 색이 의도적으로 닦여 나갔다’는 T/F?",
        "answer": "T",
        "explain": "Some of them even had their colors wiped off..."
      }
    },
    {
      "id": "tb5p124",
      "group": "textbook",
      "order": 47,
      "section": "5과 본문",
      "nav": "p.124 인식 변화",
      "density": "본문 고밀도",
      "title": "p.124 · Science Changes the Picture",
      "source": "교과서 5과 p.124",
      "type": "인식 수정 · 연구 확산",
      "flow": [
        "1980s 이후 과학 분석법+Brinkmann 부부 연구",
        "polychromy가 흔했다는 사실이 널리 인정",
        "colored recreations·Gods in Color 전시로 대중 인식 확장"
      ],
      "oneLine": "새 분석 기술과 지속적인 연구가 충분한 증거를 쌓으면서 오랜 편견이 학계와 대중 모두에서 수정되기 시작했다.",
      "keyExpr": "scientific analysis + scholarship → sufficient evidence → public enlightenment",
      "quotes": [
        {
          "src": "p.124",
          "en": "However, since the 1980s, thanks to the development of new methods of scientific analysis and the work of scholars such as Vinzenz Brinkmann and Ulrike Koch-Brinkmann, the bias about white marble sculptures has been changing.",
          "ko": "그러나 1980년대 이후 새로운 과학 분석법과 학자들의 연구 덕분에 흰 대리석 조각에 대한 편견은 변화해 왔다.",
          "why": "인식 변화의 원인."
        },
        {
          "src": "p.124",
          "en": "The fact that Greek and Roman artists normally decorated their sculptures with vivid colors is now widely acknowledged.",
          "ko": "그리스·로마 예술가들이 조각을 선명한 색으로 장식했다는 사실은 이제 널리 인정된다.",
          "why": "현재의 합의."
        },
        {
          "src": "p.124",
          "en": "The contrast has provided an eye-opening experience for the public, challenging artistic biases and deeply rooted misconceptions.",
          "ko": "그 대비는 대중에게 눈을 뜨게 하는 경험을 제공해 예술적 편견과 깊이 뿌리박힌 오해에 도전했다.",
          "why": "전시의 역할 + 분사구문."
        }
      ],
      "grammar": {
        "title": "현재완료진행 의미 / 동격 that / 분사구문",
        "body": "has been changing은 과거부터 현재까지 변화 진행. The fact that...에서 that은 fact 내용 설명. challenging...은 결과·부가 설명.",
        "cue": "‘새 사실이 생긴 것’이 아니라 ‘기존 사실에 대한 해석이 바뀐 것’으로 정리."
      },
      "inputs": [
        {
          "id": "tb5p124-i1",
          "prompt": "The bias has been ______ since the 1980s.",
          "answer": "changing",
          "hint": "변화 중"
        },
        {
          "id": "tb5p124-i2",
          "prompt": "The colorful past is now widely ______.",
          "answer": "acknowledged",
          "hint": "인정되다"
        },
        {
          "id": "tb5p124-i3",
          "prompt": "The exhibition was called Gods in ______.",
          "answer": "Color",
          "hint": "전시명"
        }
      ],
      "dissect": {
        "sentence": "The fact that Greek and Roman artists normally decorated their sculptures with vivid colors is now widely acknowledged.",
        "fields": [
          {
            "label": "주어 핵심",
            "answer": "fact"
          },
          {
            "label": "동격 접속사",
            "answer": "that"
          },
          {
            "label": "that절 동사",
            "answer": "decorated"
          },
          {
            "label": "주절 수동태",
            "answer": "is acknowledged"
          }
        ]
      },
      "rebuild": {
        "ko": "그리스와 로마 예술가들이 조각을 선명한 색으로 장식했다는 사실은 이제 널리 인정된다.",
        "bank": [
          "is now widely acknowledged.",
          "Greek and Roman artists",
          "The fact that",
          "normally decorated their sculptures with vivid colors"
        ],
        "answer": "The fact that Greek and Roman artists normally decorated their sculptures with vivid colors is now widely acknowledged."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "p.124에서 colored recreations를 전시하는 목적은?",
        "options": [
          "원본을 대체해 흰 조각을 숨기기 위해",
          "연구와 대중 교육에 모두 도움을 주기 위해",
          "원래 조각의 색을 지우기 위해",
          "르네상스 미학을 강화하기 위해"
        ],
        "answer": 1,
        "explain": "both to benefit research and to enlighten the public라고 직접 제시된다."
      },
      "original": {
        "label": "p.124 Q9",
        "question": "사람들의 태도 변화에 기여한 것은?",
        "answer": "The development of new methods of scientific analysis and the work of scholars.",
        "explain": "교과서 Q9의 직접 답."
      }
    },
    {
      "id": "tb5p125",
      "group": "textbook",
      "order": 48,
      "section": "5과 본문",
      "nav": "p.125 교훈",
      "density": "본문 고밀도",
      "title": "p.125 · Transform Our Eyes",
      "source": "교과서 5과 p.125",
      "type": "결론 · 일반화",
      "flow": [
        "Brinkmann: misconceptions 극복하려면 eyes를 objective tools로 바꿔야 함",
        "오랜 믿음이 stereotypes/biases의 결과인지 질문",
        "눈에 보이는 것보다 더 많은 것이 있을 수 있음"
      ],
      "oneLine": "5과의 최종 교훈은 ‘익숙하게 보이는 것’을 그대로 믿지 말고 객관적 증거로 오래된 믿음을 검토하자는 것이다.",
      "keyExpr": "transform our eyes → objective tools → question stereotypes and biases",
      "quotes": [
        {
          "src": "p.125",
          "en": "Brinkmann believes that we need to transform our eyes into objective tools in order to overcome widespread misconceptions.",
          "ko": "Brinkmann은 널리 퍼진 오해를 극복하기 위해 우리의 눈을 객관적 도구로 바꿀 필요가 있다고 믿는다.",
          "why": "본문 메시지의 직접 진술."
        },
        {
          "src": "p.125",
          "en": "Shouldn’t we pause to ask ourselves if some of our long-held beliefs are the results of stereotypes and biases?",
          "ko": "오래 유지한 믿음 중 일부가 고정관념과 편견의 결과인지 잠시 멈춰 스스로 물어봐야 하지 않을까?",
          "why": "주제를 일반화."
        },
        {
          "src": "p.125",
          "en": "Perhaps there is more to the world than meets the eye.",
          "ko": "어쩌면 세상에는 눈에 보이는 것보다 더 많은 것이 있을지도 모른다.",
          "why": "마지막 메시지."
        }
      ],
      "grammar": {
        "title": "transform A into B / if 간접의문 / there is more than",
        "body": "transform our eyes into objective tools, ask ourselves if..., there is more to A than... 표현을 본다.",
        "cue": "조각 이야기에서 끝내지 말고 ‘고정관념 일반’으로 확장되는 문단임을 강조."
      },
      "inputs": [
        {
          "id": "tb5p125-i1",
          "prompt": "transform our eyes ______ objective tools",
          "answer": "into",
          "hint": "A를 B로 바꾸다"
        },
        {
          "id": "tb5p125-i2",
          "prompt": "overcome widespread ______",
          "answer": "misconceptions",
          "hint": "오해"
        },
        {
          "id": "tb5p125-i3",
          "prompt": "stereotypes and ______",
          "answer": "biases",
          "hint": "편견"
        }
      ],
      "dissect": {
        "sentence": "Shouldn’t we pause to ask ourselves if some of our long-held beliefs are the results of stereotypes and biases?",
        "fields": [
          {
            "label": "주어",
            "answer": "we"
          },
          {
            "label": "첫 동사",
            "answer": "pause"
          },
          {
            "label": "간접의문 접속사",
            "answer": "if"
          },
          {
            "label": "if절 주어",
            "answer": "some of our long-held beliefs"
          }
        ]
      },
      "rebuild": {
        "ko": "우리는 오래된 믿음 일부가 고정관념과 편견의 결과인지 스스로 물어보기 위해 잠시 멈춰야 하지 않을까?",
        "bank": [
          "are the results of stereotypes and biases?",
          "Shouldn’t we pause",
          "if some of our long-held beliefs",
          "to ask ourselves"
        ],
        "answer": "Shouldn’t we pause to ask ourselves if some of our long-held beliefs are the results of stereotypes and biases?"
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "p.125가 고대 조각 사례에서 끌어내는 일반적 교훈은?",
        "options": [
          "시각적 인상은 항상 객관적이다.",
          "오래 믿어 온 생각도 고정관념·편견의 결과인지 재검토해야 한다.",
          "전문가의 말은 증거 없이도 믿어야 한다.",
          "역사적 오해는 수정할 수 없다."
        ],
        "answer": 1,
        "explain": "objective tools, long-held beliefs, stereotypes and biases가 직접 연결된다."
      },
      "original": {
        "label": "Big Question 연결",
        "question": "학문 세계가 편견과 고정관념을 없애는 데 할 수 있는 역할은?",
        "answer": "It can use objective evidence and research to challenge and correct long-held misconceptions.",
        "explain": "p.124~125의 연구·전시·객관적 증거 흐름을 바탕으로 한 핵심 요지."
      }
    },
    {
      "id": "tb5p126",
      "group": "textbook",
      "order": 49,
      "section": "5과 복습",
      "nav": "p.126 After",
      "density": "보조 경량형",
      "title": "p.126 · Timeline Summary",
      "source": "교과서 5과 p.126 After You Read",
      "type": "요약 · 시간 순서",
      "flow": [
        "고대: vivid colors",
        "르네상스: 흰 대리석 미학 형성",
        "18~19C 증거 무시 → 1980s 이후 재발견·전시"
      ],
      "oneLine": "p.126은 5과를 ‘고대 사실 → 르네상스 오해 → 편견 고착 → 현대 수정’ 순서로 다시 배열하는 페이지다.",
      "keyExpr": "ancient polychromy → Renaissance whiteness → ignored evidence → modern correction",
      "quotes": [
        {
          "src": "p.126",
          "en": "During the time of ancient Greece and Rome, sculptors painted their sculptures with vivid colors.",
          "ko": "고대 그리스와 로마 시대에 조각가들은 조각을 선명한 색으로 칠했다.",
          "why": "시작점."
        },
        {
          "src": "p.126",
          "en": "The bias toward white sculptures was so widespread in Western art that people started to ignore the traces of colors found on sculptures excavated in the 18th and 19th centuries.",
          "ko": "흰 조각 편견이 너무 널리 퍼져 18~19세기 발굴 조각의 색 흔적을 무시하기 시작했다.",
          "why": "편견 고착."
        }
      ],
      "grammar": {
        "title": "시간 순서 재구성",
        "body": "사건 자체보다 1→2→3→4→5→6 순서를 통해 인식 변화의 원인을 복습한다.",
        "cue": "학생에게 번호 없이 여섯 사건을 말로 재배열시켜도 좋아."
      },
      "inputs": [
        {
          "id": "tb5p126-i1",
          "prompt": "Ancient sculptors used vivid ______.",
          "answer": "colors",
          "hint": "고대"
        },
        {
          "id": "tb5p126-i2",
          "prompt": "Brinkmann found signs of ______.",
          "answer": "polychromy",
          "hint": "1980s"
        },
        {
          "id": "tb5p126-i3",
          "prompt": "Modern researchers created ______ versions for display.",
          "answer": "colored",
          "hint": "재현품"
        }
      ],
      "dissect": {
        "sentence": "During the time of ancient Greece and Rome, sculptors painted their sculptures with vivid colors.",
        "fields": [
          {
            "label": "주어",
            "answer": "sculptors"
          },
          {
            "label": "동사",
            "answer": "painted"
          },
          {
            "label": "목적어",
            "answer": "their sculptures"
          },
          {
            "label": "전치사구",
            "answer": "with vivid colors"
          }
        ]
      },
      "rebuild": {
        "ko": "고대 그리스와 로마 시대에 조각가들은 조각을 선명한 색으로 칠했다.",
        "bank": [
          "with vivid colors.",
          "During the time of ancient Greece and Rome,",
          "their sculptures",
          "sculptors painted"
        ],
        "answer": "During the time of ancient Greece and Rome, sculptors painted their sculptures with vivid colors."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "다음 사건의 올바른 흐름은?",
        "options": [
          "편견 수정 → 고대 채색 → 르네상스 발견",
          "고대 채색 → 색 소실·르네상스 흰색 찬미 → 증거 무시 → 현대 수정",
          "르네상스 채색 → 고대 흰색 → 현대 오해",
          "현대 연구 → 고대 채색 시작"
        ],
        "answer": 1,
        "explain": "p.126 Summary의 시간 순서와 동일하다."
      },
      "original": {
        "label": "p.126 Check Out the Details",
        "question": "‘Michelangelo는 흰 대리석을 ideal beauty와 연관 짓지 않았다’는 T/F?",
        "answer": "F",
        "explain": "Michelangelo was no exception."
      }
    },
    {
      "id": "tb5p127",
      "group": "textbook",
      "order": 50,
      "section": "5과 복습",
      "nav": "p.127 Extension",
      "density": "보조 경량형",
      "title": "p.127 · Misconceptions Beyond Art",
      "source": "교과서 5과 p.127 Extension",
      "type": "오해 검증 · 확장",
      "flow": [
        "본문 후 자신의 인식 변화 말하기",
        "다른 misconception을 fact로 검증",
        "left/right brain·10% brain·microwave 사례"
      ],
      "oneLine": "5과의 사고방식을 다른 오해에도 적용해 ‘익숙한 주장’과 ‘검증된 사실’을 구분한다.",
      "keyExpr": "misconception → evidence/fact → revised belief",
      "quotes": [
        {
          "src": "p.127",
          "en": "I was really surprised to learn that many ancient sculptures were originally painted.",
          "ko": "많은 고대 조각이 원래 채색되어 있었다는 사실을 알고 정말 놀랐다.",
          "why": "본문 학습 후 인식 변화의 예."
        },
        {
          "src": "p.127",
          "en": "When it is healthy, the entire brain is active, and this is true even when people are sleeping.",
          "ko": "건강한 경우 뇌 전체가 활동하며 이는 잠잘 때도 마찬가지다.",
          "why": "‘뇌 10%’ 오해를 반박하는 fact."
        }
      ],
      "grammar": {
        "title": "misconception vs fact",
        "body": "언어 지식보다 ‘주장-증거’ 구조가 핵심. 자료에서 misconception과 fact를 분리해 읽는다.",
        "cue": "학생에게 ‘왜 그 말을 믿었는지’보다 ‘무슨 증거가 반박하는지’를 말하게 해."
      },
      "inputs": [
        {
          "id": "tb5p127-i1",
          "prompt": "Humans can only use 10% of their brain. → This is a ______.",
          "answer": "misconception",
          "hint": "오해"
        },
        {
          "id": "tb5p127-i2",
          "prompt": "When healthy, the ______ brain is active.",
          "answer": "entire",
          "hint": "전체"
        }
      ],
      "dissect": {
        "sentence": "When it is healthy, the entire brain is active, and this is true even when people are sleeping.",
        "fields": [
          {
            "label": "첫 시간접속사",
            "answer": "When"
          },
          {
            "label": "주절 주어",
            "answer": "the entire brain"
          },
          {
            "label": "주절 동사",
            "answer": "is"
          },
          {
            "label": "두 번째 시간접속사",
            "answer": "when"
          }
        ]
      },
      "rebuild": {
        "ko": "건강할 때 뇌 전체가 활동하며, 이는 사람이 자는 동안에도 사실이다.",
        "bank": [
          "and this is true",
          "the entire brain is active,",
          "When it is healthy,",
          "even when people are sleeping."
        ],
        "answer": "When it is healthy, the entire brain is active, and this is true even when people are sleeping."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "p.127 Extension의 목적은?",
        "options": [
          "새 미술사 본문을 추가한다.",
          "본문에서 배운 ‘편견을 증거로 검토하기’를 다른 오해에 적용한다.",
          "고대 조각을 다시 흰색으로 해석한다.",
          "문법만 암기시킨다."
        ],
        "answer": 1,
        "explain": "misconception/fact 사례를 검색·비교하게 한다."
      },
      "original": {
        "label": "Extension 확인",
        "question": "‘사람은 뇌의 10%만 사용한다’는 주장에 대한 자료의 판단은?",
        "answer": "It is wrong.",
        "explain": "건강한 뇌는 전체가 활동한다고 설명한다."
      }
    },
    {
      "id": "tb5p128",
      "group": "textbook",
      "order": 51,
      "section": "5과 언어",
      "nav": "p.128 어휘",
      "density": "보조 경량형",
      "title": "p.128 · Word & Collocation Building",
      "source": "교과서 5과 p.128 Focus on Language",
      "type": "접미사·접두사 · 연어",
      "flow": [
        "-ure: sculpt→sculpture, expose→exposure, depart→departure",
        "in-: inaccurate, infinite, inadequate, inconvenient",
        "detect / acknowledge 연어"
      ],
      "oneLine": "형태 변화와 함께 detect a trace/movement/error, widely/officially/barely acknowledge를 묶어 익힌다.",
      "keyExpr": "sculpture / exposure / inaccurate / inconvenient / detect / acknowledge",
      "quotes": [
        {
          "src": "p.128",
          "en": "Excessive exposure to loud noise can cause permanent hearing loss.",
          "ko": "큰 소음에 과도하게 노출되면 영구적 청력 손실을 일으킬 수 있다.",
          "why": "expose→exposure 품사 변화."
        },
        {
          "src": "p.128",
          "en": "His boss barely acknowledged his dedication, which led him to quit.",
          "ko": "상사는 그의 헌신을 거의 인정하지 않았고 그것이 그가 그만두게 했다.",
          "why": "barely acknowledge 연어."
        }
      ],
      "grammar": {
        "title": "-ure / in- / collocation",
        "body": "sculpt→sculpture, press→pressure, expose→exposure, depart→departure. in-은 부정 의미를 더한다.",
        "cue": "본문의 sculpture, inaccurate, acknowledge와 직접 연결해."
      },
      "inputs": [
        {
          "id": "tb5p128-i1",
          "prompt": "sculpt → ______",
          "answer": "sculpture",
          "hint": "명사"
        },
        {
          "id": "tb5p128-i2",
          "prompt": "accurate → ______",
          "answer": "inaccurate",
          "hint": "부정 접두사"
        },
        {
          "id": "tb5p128-i3",
          "prompt": "detect an ______",
          "answer": "error",
          "hint": "연어"
        }
      ],
      "dissect": {
        "sentence": "Excessive exposure to loud noise can cause permanent hearing loss.",
        "fields": [
          {
            "label": "주어 핵심",
            "answer": "exposure"
          },
          {
            "label": "전치사",
            "answer": "to"
          },
          {
            "label": "조동사",
            "answer": "can"
          },
          {
            "label": "동사",
            "answer": "cause"
          }
        ]
      },
      "rebuild": {
        "ko": "큰 소음에 과도하게 노출되면 영구적인 청력 손실을 일으킬 수 있다.",
        "bank": [
          "permanent hearing loss.",
          "Excessive exposure",
          "can cause",
          "to loud noise"
        ],
        "answer": "Excessive exposure to loud noise can cause permanent hearing loss."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "다음 중 p.128 연어로 맞지 않는 것은?",
        "options": [
          "detect a trace",
          "detect movement",
          "detect an error",
          "detect a dedication"
        ],
        "answer": 3,
        "explain": "dedication은 acknowledge와 연결되고, detect에는 trace/movement/error가 제시된다."
      },
      "original": {
        "label": "Focus on Language 확인",
        "question": "‘불편한’에 해당하는 in- 파생어는?",
        "answer": "inconvenient",
        "explain": "convenient → inconvenient."
      }
    },
    {
      "id": "tb5p129",
      "group": "textbook",
      "order": 52,
      "section": "5과 언어",
      "nav": "p.129 어법",
      "density": "보조 경량형",
      "title": "p.129 · Appositive That & Preposition + Which",
      "source": "교과서 5과 p.129 Focus on Language",
      "type": "동격 that · 전치사+관계대명사",
      "flow": [
        "the news/fact/rumor that S V = 앞 명사의 내용",
        "the position for which...",
        "본문 p.120·124 that, p.121 with which 연결"
      ],
      "oneLine": "p.129는 ‘내용을 설명하는 that’과 ‘전치사를 앞에 둔 관계대명사 which’를 본문 문장으로 다시 묶는다.",
      "keyExpr": "the fact that S V / the N + prep + which",
      "quotes": [
        {
          "src": "p.129 / p.120",
          "en": "Their research showed undeniable evidence that, while white marble was a highly valued material for Greek and Roman sculptors, its smooth surface was not always left bare.",
          "ko": "그들의 연구는 흰 대리석의 표면이 항상 맨 상태로 남은 것은 아니라는 명백한 증거를 보여 주었다.",
          "why": "evidence의 내용을 설명하는 that."
        },
        {
          "src": "p.129 / p.121",
          "en": "Over a period of more than 1,000 years, much of the paint with which these sculptures were originally decorated wore off.",
          "ko": "1,000년이 넘는 동안 이 조각들을 장식했던 페인트의 상당 부분이 닳아 없어졌다.",
          "why": "전치사 + 관계대명사."
        }
      ],
      "grammar": {
        "title": "동격 that vs 관계대명사 / 전치사 + which",
        "body": "the news/fact/evidence that S V에서 that은 앞 명사의 ‘내용’을 설명한다. with which에서 which는 선행사 paint를 받아 관계절 성분이 된다.",
        "cue": "that 뒤 문장이 완전한지, which가 절 안에서 명사 역할을 하는지 비교."
      },
      "inputs": [
        {
          "id": "tb5p129-i1",
          "prompt": "I heard the news ______ his novel was published.",
          "answer": "that",
          "hint": "동격"
        },
        {
          "id": "tb5p129-i2",
          "prompt": "the paint ______ which these sculptures were decorated",
          "answer": "with",
          "hint": "전치사"
        },
        {
          "id": "tb5p129-i3",
          "prompt": "the position for ______ you applied",
          "answer": "which",
          "hint": "관계대명사"
        }
      ],
      "dissect": {
        "sentence": "Over a period of more than 1,000 years, much of the paint with which these sculptures were originally decorated wore off.",
        "fields": [
          {
            "label": "선행사",
            "answer": "paint"
          },
          {
            "label": "전치사",
            "answer": "with"
          },
          {
            "label": "관계대명사",
            "answer": "which"
          },
          {
            "label": "주절 동사",
            "answer": "wore off"
          }
        ]
      },
      "rebuild": {
        "ko": "1,000년 넘는 기간 동안 이 조각들을 원래 장식했던 페인트의 상당 부분이 닳아 없어졌다.",
        "bank": [
          "with which these sculptures were originally decorated",
          "wore off.",
          "Over a period of more than 1,000 years,",
          "much of the paint"
        ],
        "answer": "Over a period of more than 1,000 years, much of the paint with which these sculptures were originally decorated wore off."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "다음 중 that의 쓰임이 p.129 Point 1과 같은 것은?",
        "options": [
          "The lamp that he developed was special.",
          "The fact that the sculptures were colorful surprised people.",
          "The statue that stood outside was old.",
          "The scholar that wrote the book traveled widely."
        ],
        "answer": 1,
        "explain": "the fact that S V에서 that은 fact의 내용을 설명하는 동격 접속사."
      },
      "original": {
        "label": "p.129 Practice",
        "question": "‘그 약이 효과가 없다는 소문’의 올바른 어순은?",
        "answer": "The rumor that the medicine didn’t work",
        "explain": "the rumor + that + 완전한 문장."
      }
    },
    {
      "id": "tb5p130",
      "group": "textbook",
      "order": 53,
      "section": "5과 활동",
      "nav": "p.130 View",
      "density": "보조 경량형",
      "title": "p.130 · The Way We Interpret the World",
      "source": "교과서 5과 p.130 View & Learn",
      "type": "인지편향 · survivorship bias",
      "flow": [
        "불완전한 정보로 판단할 때 cognitive bias 발생",
        "survivorship bias = 성공·생존 사례에만 주목",
        "WWII 항공기: 돌아온 비행기 손상 부위가 아니라 돌아오지 못한 비행기까지 고려해야 함"
      ],
      "oneLine": "보이는 데이터만 보면 중요한 ‘빠진 데이터’를 놓칠 수 있으므로, 분석할 때 무엇이 빠졌는지를 고려해야 한다.",
      "keyExpr": "survivors only → missing data ignored → wrong conclusion",
      "quotes": [
        {
          "src": "p.130",
          "en": "There are about 180 different types of cognitive biases.",
          "ko": "인지 편향에는 약 180가지 유형이 있다.",
          "why": "인지편향의 범위."
        },
        {
          "src": "p.130",
          "en": "This cognitive bias, “survivorship bias,” for example, is an inclination to focus only on individuals or things that have succeeded or survived, while ignoring those that have not.",
          "ko": "생존자 편향은 성공하거나 살아남은 대상에만 집중하고 그렇지 않은 대상을 무시하는 경향이다.",
          "why": "survivorship bias 정의."
        },
        {
          "src": "p.130",
          "en": "We need to consider what is missing in our analysis in order to make better decisions.",
          "ko": "더 나은 결정을 위해 분석에서 무엇이 빠졌는지 고려해야 한다.",
          "why": "영상의 교훈."
        }
      ],
      "grammar": {
        "title": "focus on / while V-ing / what 명사절",
        "body": "focus only on..., while ignoring..., consider what is missing 구조를 확인한다.",
        "cue": "‘돌아온 비행기’만 본 것이 왜 표본 편향인지 그림과 함께 말하게 해."
      },
      "inputs": [
        {
          "id": "tb5p130-i1",
          "prompt": "Survivorship bias focuses on things that have succeeded or ______.",
          "answer": "survived",
          "hint": "살아남은"
        },
        {
          "id": "tb5p130-i2",
          "prompt": "while ______ those that have not",
          "answer": "ignoring",
          "hint": "무시하면서"
        },
        {
          "id": "tb5p130-i3",
          "prompt": "consider what is ______ in our analysis",
          "answer": "missing",
          "hint": "빠진 것"
        }
      ],
      "dissect": {
        "sentence": "We need to consider what is missing in our analysis in order to make better decisions.",
        "fields": [
          {
            "label": "주어",
            "answer": "We"
          },
          {
            "label": "동사",
            "answer": "need"
          },
          {
            "label": "명사절",
            "answer": "what is missing"
          },
          {
            "label": "목적 표현",
            "answer": "in order to make better decisions"
          }
        ]
      },
      "rebuild": {
        "ko": "더 나은 결정을 내리기 위해 분석에서 무엇이 빠져 있는지 고려해야 한다.",
        "bank": [
          "in order to make better decisions.",
          "We need to consider",
          "in our analysis",
          "what is missing"
        ],
        "answer": "We need to consider what is missing in our analysis in order to make better decisions."
      },
      "transform": {
        "badge": "워크북 변형",
        "question": "Abraham Wald가 기존 분석의 문제를 발견한 핵심 이유는?",
        "options": [
          "돌아온 비행기의 손상 부위가 치명적이라고 가정해서",
          "돌아오지 못한 비행기가 데이터에서 빠져 있다는 점을 고려해서",
          "모든 비행기의 손상 부위가 같아서",
          "장갑을 제거해야 한다고 생각해서"
        ],
        "answer": 1,
        "explain": "surviving planes만 조사했고, return하지 못한 planes를 overlook한 것이 문제였다."
      },
      "original": {
        "label": "View & Learn 확인",
        "question": "survivorship bias에서 피해야 할 분석 오류는?",
        "answer": "Ignoring the individuals or things that did not succeed or survive.",
        "explain": "p.130 정의의 핵심."
      }
    },
    {
      "id": "tb5check",
      "group": "textbook",
      "order": 54,
      "section": "5과 복습",
      "nav": "5과 종합체크",
      "density": "누적 복습",
      "title": "5과 종합 체크",
      "source": "교과서 5과 p.118~130",
      "type": "누적 · 혼합 문제",
      "template": "unitCheck",
      "checkItems": [
        {
          "id": "tb5c1",
          "kind": "input",
          "prompt": "p.118 · associate A ______ B",
          "answer": "with"
        },
        {
          "id": "tb5c2",
          "kind": "input",
          "prompt": "p.119 · clear signs of ______",
          "answer": "polychromy"
        },
        {
          "id": "tb5c3",
          "kind": "mc",
          "prompt": "p.119 · Brinkmann이 UV lamp를 개발한 원래 목적은?",
          "options": [
            "색 복원",
            "도구 자국 자세히 조사",
            "연대 측정",
            "대리석 구매"
          ],
          "answer": 1,
          "explain": "marks left by tools를 examine하려고 개발했다."
        },
        {
          "id": "tb5c4",
          "kind": "input",
          "prompt": "p.120 · White marble was used like a ______.",
          "answer": "canvas"
        },
        {
          "id": "tb5c5",
          "kind": "input",
          "prompt": "p.121 · Much of the paint ______ off.",
          "answer": "wore"
        },
        {
          "id": "tb5c6",
          "kind": "mc",
          "prompt": "p.122 · 흰 대리석 편견 강화의 핵심 연결은?",
          "options": [
            "white marble ↔ ideal beauty",
            "color ↔ inferiority in ancient Greece",
            "UV lamp ↔ Renaissance",
            "paint ↔ modern technology"
          ],
          "answer": 0,
          "explain": "artists and scholars associated undecorated white marble with ideal beauty."
        },
        {
          "id": "tb5c7",
          "kind": "input",
          "prompt": "p.123 · The bias became deeply ______.",
          "answer": "rooted"
        },
        {
          "id": "tb5c8",
          "kind": "mc",
          "prompt": "p.123 · 반대 증거가 있어도 편견이 유지됐음을 보여 주는 사례는?",
          "options": [
            "색 흔적 즉시 수용",
            "복원품 찬사",
            "색 흔적 무시·색 제거",
            "연구 중단"
          ],
          "answer": 2,
          "explain": "traces were ignored and some colors were wiped off."
        },
        {
          "id": "tb5c9",
          "kind": "input",
          "prompt": "p.124 · The fact is now widely ______.",
          "answer": "acknowledged"
        },
        {
          "id": "tb5c10",
          "kind": "input",
          "prompt": "p.125 · transform our eyes ______ objective tools",
          "answer": "into"
        },
        {
          "id": "tb5c11",
          "kind": "mc",
          "prompt": "p.126 · 올바른 시간 흐름은?",
          "options": [
            "현대 수정→고대 채색→르네상스",
            "고대 채색→색 소실→흰색 미학→편견 고착→현대 수정",
            "르네상스→고대→현대",
            "현대→르네상스→고대"
          ],
          "answer": 1,
          "explain": "p.126 요약 순서."
        },
        {
          "id": "tb5c12",
          "kind": "input",
          "prompt": "p.128 · accurate → ______",
          "answer": "inaccurate"
        },
        {
          "id": "tb5c13",
          "kind": "input",
          "prompt": "p.129 · the paint ______ which ...",
          "answer": "with"
        },
        {
          "id": "tb5c14",
          "kind": "input",
          "prompt": "p.130 · consider what is ______ in our analysis",
          "answer": "missing"
        },
        {
          "id": "tb5c15",
          "kind": "mc",
          "prompt": "5과 전체 메시지는?",
          "options": [
            "익숙한 인상은 항상 사실이다.",
            "오래된 믿음도 증거로 재검토해야 한다.",
            "흰 조각이 채색 조각보다 객관적으로 아름답다.",
            "편견은 과학으로 수정할 수 없다."
          ],
          "answer": 1,
          "explain": "객관적 증거와 연구로 고정관념·편견을 검토하는 것이 결론."
        }
      ]
    }
  ],
  "comprehensive": [
    {
      "id": "c1",
      "group": "textbook",
      "kind": "mc",
      "prompt": "교과서 3과: FPTP의 약점으로 가장 적절한 것은?",
      "options": [
        "항상 2차 개표가 필요하다.",
        "과반수 지지 없이도 승리할 수 있다.",
        "후순위 표만 반영한다.",
        "승자를 결정할 수 없다."
      ],
      "answer": 1,
      "explain": "본문 p.70에서 majority의 지지 없이 이길 수 있다고 명시한다."
    },
    {
      "id": "c2",
      "group": "textbook",
      "kind": "input",
      "prompt": "교과서 4과: demand that manufacturers ______ devices",
      "answer": "design"
    },
    {
      "id": "c3",
      "group": "textbook",
      "kind": "input",
      "prompt": "교과서 5과 핵심 개념: ancient sculptures의 다색채색 = ______",
      "answer": "polychromy"
    },
    {
      "id": "c4",
      "group": "suneung",
      "kind": "mc",
      "prompt": "수특 1의 핵심 주장은?",
      "options": [
        "읽기 속도가 모든 이해를 결정한다.",
        "배경지식이 이해에 큰 영향을 준다.",
        "야구 지식이 모든 과목 성적을 높인다.",
        "약한 독자는 강한 독자를 이길 수 없다."
      ],
      "answer": 1,
      "explain": "야구 배경지식을 가진 약한 독자가 더 높은 점수를 받았다."
    },
    {
      "id": "c5",
      "group": "suneung",
      "kind": "input",
      "prompt": "수특 2: 뇌가 이용 가능한 단서를 바꿔 쓰는 유연성은 vicarious ______.",
      "answer": "functioning"
    },
    {
      "id": "c6",
      "group": "suneung",
      "kind": "mc",
      "prompt": "수특 6: 즉각적 위험이 있는 위기에서 주로 찾는 것은?",
      "options": [
        "검증된 전통 정보원",
        "오직 개인 블로그",
        "오직 학술 논문",
        "광고성 콘텐츠"
      ],
      "answer": 0,
      "explain": "immediate danger에서는 trusted and verified sources, TV/radio 같은 traditional sources를 찾는다."
    },
    {
      "id": "c7",
      "group": "mock",
      "kind": "input",
      "prompt": "학평 32: 반복 접촉은 식물의 성장을 ______할 수 있다. (영어)",
      "answer": "inhibit"
    },
    {
      "id": "c8",
      "group": "mock",
      "kind": "mc",
      "prompt": "학평 38의 핵심 과정은?",
      "options": [
        "노출 → 둔감화 → 공감 감소",
        "노출 → 공감 증가 → 각성 감소",
        "게임 → 성장 억제 → 회복",
        "맥락 → 해석 → 상징"
      ],
      "answer": 0,
      "explain": "repeated exposure가 desensitization을 거쳐 reduced empathy로 이어진다."
    }
  ]
};
