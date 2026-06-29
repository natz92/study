# Orange Cat Market

Next.js App Router 스터디를 위한 고양이 쇼핑몰 샘플 프로젝트입니다.

별도 목업 API 서버는 `api` 디렉터리에 있으며 Docker로 실행할 수 있습니다.

## Getting Started

프론트엔드 개발 서버를 실행합니다.

```bash
pnpm dev
```

[http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

## Mock API

Nest 기반 목업 API를 실행합니다.

```bash
docker compose up --build cat-market-api
```

API 서버는 [http://localhost:4000](http://localhost:4000)에서 실행됩니다.

주요 엔드포인트:

- `GET /health`
- `GET /categories`
- `GET /products`
- `GET /products?category=간식`
- `GET /products/:slug`

프론트엔드는 서버 컴포넌트에서 `API_BASE_URL`을 사용해 API를 호출합니다.

```bash
API_BASE_URL=http://localhost:4000 pnpm dev
```

## Frontend

```bash
pnpm lint
pnpm build
```

## API Local Development

```bash
cd api
npm install
npm run start:dev
```

API만 타입 체크하려면 다음을 실행합니다.

```bash
cd api
npm run typecheck
```
