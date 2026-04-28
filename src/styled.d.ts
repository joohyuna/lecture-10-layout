// d.ts 파일 src에 적용
// 타입스크립트 엔진에게 타입(자료형)을 재지정 등을 통해 알려주기 위해 존재하는 파일
// styled-components라고 하는 라이브러리에 이미 있는 타입을 재지정해주기 위해 생성
// d.ts 파일은 리액트 프로젝트가 시작할 때 자동으로 로딩하여 구동함
// import를 해주지 않으면 styled-components전체가 재지정됨
// 그러므로 import로 여기 있는것만 재지정해줌
import "styled-components";

// DefaultTheme가 리액트에 있는데(공간만) 하단 color스타일로 변형해서 사용하겠다
// 이것을 색상 팔레트를 만든다.라고 한다.
declare module 'styled-components' {
    export interface DefaultTheme {
        color: {
            background: string;
            text: string;
            primary: string;  // 사이트의 메인 색상 지정 강조 색상
            muted: string;   // 임의적으로 넣었다
        };
    }
}