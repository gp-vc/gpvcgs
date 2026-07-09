# GPVC Wine

Next.js 14 (App Router) + Tailwind CSS 와인 수입사 랜딩 사이트.

## 프로젝트 위치 이력 (중요)

이 프로젝트는 원래 `C:\Users\User\OneDrive\Desktop\GPVC\웹페이지\gpvc-wine`(OneDrive 동기화 폴더)에 있었으나,
OneDrive Files-On-Demand가 `.next` 빌드 산출물을 클라우드 placeholder(reparse point)로 바꿔버려서
`next dev` 재시작 시 `EINVAL: readlink` 에러가 반복 발생했다. 이를 근본적으로 해결하기 위해
프로젝트 전체(소스 + node_modules)를 OneDrive 밖인 이 경로(`C:\Users\User\Projects\gpvc-wine`)로 이동했다.
OneDrive 안의 원본 폴더는 삭제 대상이며, 더 이상 사용하지 않는다.

## gpvcgs 데이터 의존성 (중요, 비직관적)

`app/lib/wine-data.ts`는 와인/와이너리 데이터를 이 프로젝트 소스가 아니라 **형제 프로젝트인 `gpvcgs`**
(별도 git 저장소, 원래 `GPVC/웹페이지/gpvcgs`)에서 상대경로로 직접 import한다:

```ts
import { ... } from '../../../gpvcgs/src/data/mockData';
import type { ... } from '../../../gpvcgs/src/data/types';
```

프로젝트를 옮기면서 이 상대경로가 깨지지 않도록, `C:\Users\User\Projects\gpvcgs`에
실제 OneDrive의 `gpvcgs` 폴더(`C:\Users\User\OneDrive\Desktop\GPVC\웹페이지\gpvcgs`)를 가리키는
**NTFS 정션(junction)**을 만들어두었다. 이 정션을 지우거나 원본 `gpvcgs`를 다른 곳으로 옮기면
`npx tsc`나 `next dev`에서 `Cannot find module '../../../gpvcgs/...'` 에러가 난다.

`gpvcgs` 저장소 자체를 수정하는 작업이 아니라면 이 구조를 건드릴 필요는 없다.

## 디자인

사이트는 단일 디자인(코드네임 "Swiss Grid Editorial")만 운영 중이다. 원래 `/1`, `/2`, `/3` 세 가지
디자인 톤 프리뷰를 실험했고 `/3`이 채택되어 루트(`/`)로 승격되었다. 나머지 프리뷰와 구 디자인
(세리프 헤딩, ivory/wine 팔레트, `PageShell`/`SiteHeader`/`SiteFooter` 등 공용 컴포넌트)은 전부 삭제했다.

- 폰트: Helvetica Neue/Arial 계열 grotesk (컴포넌트마다 inline `style`로 지정)
- 컬러: `swiss.bg`(흰색), `swiss.ink`(검정), `swiss.accent`(#8a1f1a, 딥레드), `swiss.line`(테두리)
- 레이아웃: `border` 기반 그리드, bold uppercase, 섹션 번호 매기기

## 라우트

`/`, `/portfolio`, `/portfolio/[countrySlug]`, `/portfolio/[countrySlug]/[winerySlug]`,
`/portfolio/[countrySlug]/[winerySlug]/[wineSlug]`, `/press`, `/wines`, `/contact`

## 이미지 흑백/컬러 처리

대부분의 카드/썸네일 이미지는 `grayscale-0 transition duration-500 group-hover:grayscale` 패턴—
기본은 원래 색상, 마우스 호버 시 흑백으로 전환된다 (사용자 요청으로 원래 반대 방향에서 반전시킴).

예외적으로 항상 흑백 고정인 이미지 3곳은 호버 대상이 아니므로 건드리지 않는다:
- `app/page.tsx` 홈 히어로 배경 이미지
- `app/portfolio/[countrySlug]/[winerySlug]/page.tsx` 와이너리 상세 배경 이미지
- 같은 파일의 와이너리 로고 이미지

## 스크립트

- `npm run dev`
- `npm run build`
- `npm run start`
