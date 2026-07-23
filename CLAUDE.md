# GPVC Wine

Next.js 14 (App Router) + Tailwind CSS 와인 수입사 랜딩 사이트.

## 이 저장소에 대해 (중요)

이 폴더(`gp-vc/gpvcgs`)는 **실제 프로덕션 저장소이자 배포 대상**이다. `main` 브랜치가 Vercel과
연동돼 있어서, `main`에 push하는 즉시 실제 도메인(`https://www.gpvcgs.com`)에 반영된다.
force-push나 히스토리를 재작성하는 작업은 하지 않는다.

옛 버전(세리프 헤딩, `src/app`/`src/components/sections` 구조의 이전 사이트)은 전부 삭제하고
아래 설명하는 "Swiss Grid Editorial" 디자인으로 완전히 교체된 상태다.

## 와인/와이너리 데이터 (중요, 비직관적)

`app/lib/wine-data.ts`가 실제로 쓰는 데이터는 `app/lib/gpvc-data/mockData.ts`, `types.ts`다.
이 두 파일은 원래 별도 프로젝트였던 `gpvcgs`(데이터 관리용 사이드 프로젝트, 로컬 경로
`C:\Users\User\Projects\gpvcgs`)의 `src/data/mockData.ts`, `src/data/types.ts`를 그대로 복사해온
**정적 스냅샷**이다. 실시간으로 연결되어 있지 않으므로, 그 프로젝트에서 와인/와이너리 정보가
바뀌면 이 폴더의 `app/lib/gpvc-data/`로 **수동으로 다시 복사**해야 반영된다.

(`mockData.ts`를 복사해올 때 원본에 있던 미사용 `import { wineryLogos } from "../assets/logos"` 줄은
빼야 한다 — 이 프로젝트엔 svg/png를 모듈로 import하는 설정이 없어서 그대로 두면 빌드가 깨진다.)

## 디자인

사이트는 단일 디자인(코드네임 "Swiss Grid Editorial")만 운영 중이다.

- 폰트: Helvetica Neue/Arial 계열 grotesk (컴포넌트마다 inline `style`로 지정)
- 컬러: `swiss.bg`(흰색), `swiss.ink`(검정), `swiss.accent`(#8a1f1a, 딥레드), `swiss.line`(테두리)
- 레이아웃: `border` 기반 그리드, bold uppercase, 섹션 번호 매기기
- Footer는 전체 폭 검정 배경(`bg-swiss-ink`) + 흰 글씨 — 사이트에서 유일하게 반전된 색 블록

## 라우트

`/`, `/portfolio`, `/portfolio/[countrySlug]`, `/portfolio/[countrySlug]/[winerySlug]`,
`/portfolio/[countrySlug]/[winerySlug]/[wineSlug]`, `/press`, `/wines`, `/contact`, `/privacy`

옛 사이트의 `/privacy-policy`는 `next.config.js`의 `redirects()`로 `/privacy`에 301 리다이렉트된다
(검색엔진에 이미 색인된 옛 URL이 죽지 않도록).

## SEO

`app/layout.tsx`의 `metadata`, `app/robots.ts`, `app/sitemap.ts`는 옛 사이트에서 쓰던 네이버
소유확인 메타태그·OG 태그·sitemap 로직을 그대로 이식한 것이다. 도메인은 `NEXT_PUBLIC_SITE_URL`
환경변수가 없으면 `https://www.gpvcgs.com`으로 폴백한다.

## 이미지 흑백/컬러 처리

카드/썸네일/배경 이미지는 전부 `grayscale-0 transition duration-500 group-hover:grayscale` 패턴—
기본은 원래 색상, 마우스 호버 시 흑백으로 전환된다 (사용자 요청으로 원래 반대 방향에서 반전시킴).
호버 대상은 부모 요소에 `group` 클래스가 필요하다 (하이퍼링크가 아닌 경우, 예: 홈 히어로 배경, 와이너리
상세 배경 이미지는 이미지를 감싸는 `<div>`에 직접 `group`을 붙였다).

예외: `app/portfolio/[countrySlug]/[winerySlug]/[wineSlug]/page.tsx`의 와인병 이미지는 항상 원래
색상 고정이며 호버 대상이 아니다 (건드리지 않는다). 와이너리 로고 이미지는 삭제되어 더 이상 존재하지 않는다.

## 스크립트

- `npm run dev`
- `npm run build`
- `npm run start`
