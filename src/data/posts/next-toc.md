# Intro

NextJS에서 md파일을 사용해 정적인 블로그를 생성할 때, 목차 만드는 과정을 기록합니다.

## 사용한 패키지

```json
//package.json

"next": "^13.4.0",
"@types/react-syntax-highlighter": "^15.5.6",
"react-markdown": "^8.0.7", // 마크다운을 렌더링할 수 있는 리액트 컴포넌트
"react-syntax-highlighter": "^15.5.0", // 강조, 코드 인용, 인용 표시를 커스터마이즈
"remark-gfm": "^3.0.1", // link, table, checklist 등의 형식 표현


```

## 구현 순서

1. node 모듈인 `fs` 와 `path`를 이용해 `.md` 파일을 불러온다.

```typescript
import path from 'path';
import { promises as fs } from 'fs';

export const getContent = async (pathname: string): Promise<string> => {
  // file이 저장된 경로를 받아온다.
  const filepath = path.join(process.cwd(), 'src', 'data', 'posts', `${pathname}.md`);
  // 해당 파일을 fs.readFile을 통해 불러오고, 'utf-8'로 인코딩 해준다.
  // 기본적으로 바이트 스트림으로 반환하기 때문에 인코딩 해주지 않으면 buffer형태로 넘어옴
  const data = await fs.readFile(filepath, 'utf-8');

  return data;
};
```

2. 데이터로 넘어온 문자열을 markdown
