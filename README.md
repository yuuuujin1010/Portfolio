# 나의 첫 포트폴리오

React + TypeScript + Vite로 만든 한국어 포트폴리오입니다. 컴퓨터와 휴대폰 화면에 맞춰 표시됩니다.

## 시작하기

Node.js 24 LTS와 npm을 사용합니다.

```bash
npm ci
npm run dev -- --host 0.0.0.0
```

클라우드 환경에서 npm 캐시 권한 오류가 나면 `npm --cache /workspace/.npm-cache ci`를 사용하세요.

## 내 정보 바꾸기

- `src/App.tsx` 위쪽의 `profile`: 이름, 소개, GitHub 주소
- `src/App.tsx`의 소개와 작업 영역: 자기소개와 프로젝트 내용 (현재 내용은 수정용 예시)
- `src/App.css`: 화면의 색상과 배치
- `index.html`: 브라우저 탭 제목과 검색 설명

이메일 등 개인정보는 공개해도 되는 내용만 입력하세요.

## 확인하기

```bash
npm run lint
npm run build
npm run preview -- --host 0.0.0.0
```

`build`는 타입 검사와 배포용 파일 생성을 수행합니다. 결과는 `dist/`에 생깁니다.

## GitHub Pages로 공개하기

GitHub 저장소의 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 선택하세요.
`main` 브랜치에 코드를 올리면 `.github/workflows/deploy.yml`이 검사·빌드 후 배포합니다.
설정을 켜기 전에 실행되어 실패했다면 **Actions → Deploy portfolio to GitHub Pages → Re-run all jobs**로 다시 실행하세요.
배포가 성공한 뒤 접속할 주소는 `https://yuuuujin1010.github.io/portfolio/`입니다.

GitHub Pages용 빌드는 `npm run build -- --base=/portfolio/`로 생성합니다.
배포 성공 여부는 GitHub Actions에서 확인해야 합니다.
