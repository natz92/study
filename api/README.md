# Orange Cat Market API

Nest 기반 고양이 쇼핑몰 목업 API입니다. 프론트엔드 스터디 참여자가 Next.js 앱에서 서버 데이터를 연동해볼 수 있도록 만든 별도 서버입니다.

## 실행

루트 디렉터리에서 Docker Compose로 실행합니다.

```bash
docker compose up --build cat-market-api
```

API 서버는 기본적으로 `http://localhost:4000`에서 실행됩니다.

## 엔드포인트

- `GET /health`
- `GET /categories`
- `GET /products`
- `GET /products?category=간식`
- `GET /products/:slug`

## 로컬 개발

```bash
cd api
npm install
npm run start:dev
```
