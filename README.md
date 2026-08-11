# 2026-falette-client
컬러 심리 타로 서비스 'falette' FE 레포지토리

<br>

## 🎨 폴더 구조
```
src/
├── assets/                   # 이미지, 아이콘, 폰트
├── components/               # Button, Header, Modal 등 공통 UI
├── features/                 # 기능별 코드를 모아두는 핵심 폴더
├── pages/                    # Login, Home, Detail, MyPage 등 페이지
├── layouts/                  # Header/Footer 등을 포함한 공통 페이지 구조
├── hooks/                    # 여러 기능에서 공통으로 사용하는 Custom Hook
├── api/                      # Axios 설정 등 프로젝트 전체 API 공통 설정
├── utils/                    # 여러 기능에서 사용하는 공통 함수
├── types/                    # 프로젝트 전체에서 공유하는 TypeScript 타입
├── constants/                # API URL, 메뉴명 등 공통 상수
├── styles/                   # 전역 CSS 및 공통 스타일
├── routes/                   # React Router 등 페이지 경로 관리
├── App.css                   # 
├── App.tsx                   # 라우팅 및 전체 구조
├── index.css                 #
└── main.tsx                  # 앱 실행
```
<br>

## 🎨 Commit Convention
```
- feat : 새로운 기능 추가
- fix : 버그, 오류 해결
- modify : 코드 수정 (기능의 변화가 있을 때)
- docs : README나 WIKI 등의 문서 수정
- remove : 폴더 또는 파일 삭제, 쓸모없는 코드 삭제
- rename : 파일 이름 변경 또는 파일 이동시
- refactor : 기능 추가나 버그 수정이 없는 코드 변경 ( 코드 구조 변경 등의 리팩토링 )
- style : 코드 formatting, 세미콜론 누락, 코드 자체의 변경이 없는 경우
- design : CSS 등 사용자 UI 디자인 변경
- chore : src 또는 test 파일을 수정하지 않는 기타 변경 사항 ( 빌드/패키지 매니저 설정 변경 등 )
- merge : merge 하는 경우
- hotfix : 급하게 치명적인 버그를 고쳐야 하는 경우
```

**커밋 예시**
```bash
git commit -m "커밋 태그: 커밋 내용"
ex) git commit -m "feat: 회원가입 기능 구현"
```

<br>

## 🎨 Branch Convention
```
- main : 최종 배포
- dev : 주요 개발, main merge 이전에 거치는 branch
- 작업 브랜치는 Prefix를 사용하여 구분한다.
  - feat/ : 기능 추가
  - fix/ : 에러 및 버그 수정
  - docs/ : README, 문서
  - refactor/ : 기능 변경 없이 코드 구조 개선
  - modify/ : 기능의 변화가 있는 코드 수정
  - chore/ : 설정, 패키지 등 기타 작업
```

**작업 브랜치 명 예시**
```bash
<Prefix>/#이슈번호-기능 이름
ex) feat/#21-header
```

**브랜치 전략**
- `작업 브랜치` → `dev` → `main`
- `main`과 `dev` 브랜치를 중심으로 **작업 브랜치**를 분리하여 개발한다.
  - `main` : 배포 단계에서만 사용하는 브랜치
  - `dev` : 개발 내용을 통합하는 브랜치
  - `작업 브랜치` : dev에서 분기하여, 기능 단위로 독립적인 개발 환경을 위해 사용하는 브랜치 (merge 후 각 브랜치를 삭제한다)

<br>

## 🎨 Issue Convention
- `[<Prefix>] <설명>` 형식으로 작성하며, Prefix는 **commit 태그**와 동일하게 설정한다.

**이슈명 예시**
```bash
[이슈 항목] 개발 내용
ex) [feat] Header 구현
```

**이슈 label**
```
feat : 기능 개발
fix : 버그 오류 수정
mvp : mvp 기능
docs : 문서 수정
refactor : 기능 변화가 없는
modify : 기능 변화가 있는 코드 수정
design : UI, CSS, 화면 디자인 수정
```

<br>

## 🎨 PR Convention
- 모든 PR은 관련 Issue 번호를 `#이슈번호`로 명시한다
- 해당 PR의 merge가 Issue의 작업 완료를 의미하는 경우 `Closes #이슈번호`를 사용한다.
- PR 제목은 `<Prefix>: <설명>` 형식으로 작성한다. 
