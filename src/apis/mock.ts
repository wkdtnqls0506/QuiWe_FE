export const mockData = [
  {
    type: "multiple-choice",
    question:
      "리액트에서 컴포넌트 생명주기 메서드 중 컴포넌트가 처음 DOM에 마운트될 때 호출되는 메서드는 무엇인가요?",
    options: [
      "componentWillMount",
      "componentDidMount",
      "componentWillUpdate",
      "componentDidUpdate",
    ],
    answer: "componentDidMount",
  },
  {
    type: "short-answer",
    question:
      "리액트 훅(React Hooks) 중 상태(state)를 관리하기 위해 사용하는 기본 훅의 이름은 무엇인가요?",
    answer: "useState",
  },
  {
    type: "multiple-choice",
    question: "다음 중 리액트의 상태(state)와 관련이 없는 것은 무엇인가요?",
    options: ["useState", "useReducer", "useContext", "useRef"],
    answer: "useRef",
  },
  {
    type: "short-answer",
    question:
      "JSX에서 자바스크립트 표현식을 사용하기 위해 사용하는 문법은 무엇인가요?",
    answer: "중괄호 ({})",
  },
  {
    type: "essay",
    question:
      "리액트에서 불변성(Immutability)의 중요성과 이를 유지하는 방법에 대해 설명하세요.",
    answer:
      "불변성은 리액트에서 성능 최적화와 예측 가능한 코드 작성을 위해 중요합니다. 불변성을 유지함으로써 리액트는 상태 변화 여부를 쉽게 감지할 수 있고, 이는 컴포넌트의 리렌더링을 최적화하는데 도움이 됩니다. 불변성을 유지하기 위해서는 상태를 직접 변경하는 것이 아니라, 상태의 복사본을 만들어 변경된 값을 반영하는 방법을 사용합니다. 예를 들어 배열이나 객체의 경우, `spread 연산자`나 `Object.assign` 메서드를 사용하여 새 객체를 생성하고 변경된 값을 적용합니다.",
  },
  {
    type: "multiple-choice",
    question:
      "리액트에서 Context API는 어떤 문제를 해결하기 위해 도입되었나요?",
    options: ["성능 최적화", "상태 관리", "컴포넌트 재사용", "프로퍼티 드릴링"],
    answer: "프로퍼티 드릴링",
  },
  {
    type: "short-answer",
    question:
      "리액트에서 컴포넌트를 클래스형으로 정의할 때 상태를 초기화하는 방법은 무엇인가요?",
    answer: "constructor 메서드에서 this.state를 사용하여 초기화",
  },
  {
    type: "multiple-choice",
    question:
      "리액트에서 useEffect 훅을 사용할 때, 의존성 배열(dependency array)이 비어 있으면 어떤 일이 발생하나요?",
    options: [
      "컴포넌트가 언마운트 될 때만 실행된다.",
      "컴포넌트가 마운트 될 때만 실행된다.",
      "컴포넌트가 업데이트 될 때만 실행된다.",
      "컴포넌트가 마운트 및 언마운트 될 때 실행된다.",
    ],
    answer: "컴포넌트가 마운트 될 때만 실행된다.",
  },
  {
    type: "short-answer",
    question: "리액트의 Virtual DOM이 실제 DOM보다 효율적인 이유는 무엇인가요?",
    answer:
      "Virtual DOM은 실제 DOM 조작의 비용을 줄이기 위해, 변경 사항을 메모리 내에서 먼저 계산하여 최소한의 실제 DOM 업데이트를 수행하기 때문입니다.",
  },
  {
    type: "essay",
    question:
      "리액트에서 HOC(Higher-Order Component)의 개념과 용도에 대해 설명하세요.",
    answer:
      "HOC는 컴포넌트를 인수로 받아서 새로운 컴포넌트를 반환하는 함수입니다. 이는 컴포넌트 로직을 재사용할 수 있게 해주는 패턴으로, 주로 공통된 로직을 여러 컴포넌트에서 공유할 때 사용됩니다. 예를 들어, 인증 검사, 데이터 가져오기, 로깅 등의 기능을 HOC로 구현하여 여러 컴포넌트에 적용할 수 있습니다.",
  },
  {
    type: "multiple-choice",
    question: "리액트에서 Redux를 사용할 때 액션(action)의 역할은 무엇인가요?",
    options: [
      "상태를 직접 변경한다.",
      "상태 변경의 의도를 기술한다.",
      "상태를 조회한다.",
      "상태를 초기화한다.",
    ],
    answer: "상태 변경의 의도를 기술한다.",
  },
  {
    type: "short-answer",
    question: "리액트에서 useMemo 훅의 주요 목적은 무엇인가요?",
    answer:
      "비용이 많이 드는 계산의 결과를 메모이제이션하여 성능을 최적화하는 것",
  },
  {
    type: "multiple-choice",
    question:
      "다음 중 리액트의 합성 이벤트(Synthetic Event)에 대한 설명으로 옳은 것은 무엇인가요?",
    options: [
      "네이티브 이벤트를 직접 사용한다.",
      "모든 이벤트 핸들러는 브라우저의 기본 이벤트 모델을 사용한다.",
      "리액트는 네이티브 이벤트를 추상화한 합성 이벤트를 사용한다.",
      "합성 이벤트는 네이티브 이벤트보다 성능이 낮다.",
    ],
    answer: "리액트는 네이티브 이벤트를 추상화한 합성 이벤트를 사용한다.",
  },
  {
    type: "essay",
    question:
      "리액트의 상태 관리 라이브러리인 Redux와 Context API의 차이점에 대해 설명하세요.",
    answer:
      "Redux는 애플리케이션의 상태를 전역에서 관리할 수 있게 해주는 라이브러리로, 복잡한 상태 관리를 위해 도입되었습니다. 액션, 리듀서, 스토어와 같은 개념을 사용하여 상태의 변경을 예측 가능하게 관리합니다. 반면 Context API는 컴포넌트 트리 전체에 데이터를 전달하기 위해 사용되는 리액트의 내장 기능입니다. 비교적 간단한 상태 공유를 위해 사용되며, 별도의 설정이 필요하지 않습니다. 그러나 대규모 애플리케이션에서의 복잡한 상태 관리는 Redux가 더 적합합니다.",
  },
  {
    type: "multiple-choice",
    question: "리액트에서 포탈(Portal)의 주된 용도는 무엇인가요?",
    options: [
      "컴포넌트를 동적으로 생성한다.",
      "이벤트 버블링을 막는다.",
      "컴포넌트를 DOM 트리의 다른 위치에 렌더링한다.",
      "컴포넌트의 성능을 최적화한다.",
    ],
    answer: "컴포넌트를 DOM 트리의 다른 위치에 렌더링한다.",
  },
];
