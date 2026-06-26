export type Product = {
  slug: string;
  name: string;
  category: "사료" | "간식" | "장난감" | "리빙";
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  badge?: string;
  shortDescription: string;
  description: string;
  color: string;
  specs: string[];
};

export const products: Product[] = [
  {
    slug: "salmon-grain-free-kibble",
    name: "연어 그레인프리 사료",
    category: "사료",
    price: 39000,
    originalPrice: 46000,
    rating: 4.8,
    reviewCount: 128,
    badge: "베스트",
    shortDescription: "민감한 고양이를 위한 연어 베이스 데일리 사료",
    description:
      "연어를 주원료로 사용한 그레인프리 건식 사료입니다. 목업 데이터지만 상품 상세, 옵션, 리뷰 섹션을 확장하기 좋은 대표 상품입니다.",
    color: "bg-orange-200",
    specs: ["1.8kg", "주원료 연어", "전연령 급여 가능"],
  },
  {
    slug: "tuna-churu-pack",
    name: "참치 츄르 20개입",
    category: "간식",
    price: 18000,
    rating: 4.6,
    reviewCount: 74,
    badge: "신상품",
    shortDescription: "보상 간식으로 쓰기 좋은 부드러운 참치 스틱",
    description:
      "수분 섭취가 아쉬운 날 가볍게 급여하기 좋은 스틱 간식입니다. 장바구니, 수량 선택, 추천 상품 로직을 실습하기 좋은 상품입니다.",
    color: "bg-sky-200",
    specs: ["20개입", "참치맛", "개별 포장"],
  },
  {
    slug: "round-cat-bed",
    name: "포근한 라운드 캣베드",
    category: "리빙",
    price: 49000,
    originalPrice: 59000,
    rating: 4.9,
    reviewCount: 211,
    shortDescription: "몸을 둥글게 말고 쉬기 좋은 부드러운 원형 침대",
    description:
      "쿠션감 있는 원형 캣베드입니다. 색상 옵션, 재고 상태, 배송 안내 같은 상세 페이지 요소를 붙이기 좋습니다.",
    color: "bg-emerald-200",
    specs: ["지름 45cm", "커버 분리 가능", "미끄럼 방지 바닥"],
  },
  {
    slug: "feather-wand-toy",
    name: "깃털 낚싯대 장난감",
    category: "장난감",
    price: 12000,
    rating: 4.5,
    reviewCount: 96,
    badge: "추천",
    shortDescription: "사냥 놀이 시간을 늘려주는 가벼운 낚싯대",
    description:
      "깃털과 끈 움직임으로 고양이의 관심을 끄는 장난감입니다. 관련 상품 추천이나 카테고리 필터 실습에 잘 어울립니다.",
    color: "bg-violet-200",
    specs: ["리필 깃털 2개", "길이 90cm", "가벼운 손잡이"],
  },
  {
    slug: "tofu-cat-litter",
    name: "두부 모래 오리지널",
    category: "리빙",
    price: 22000,
    rating: 4.4,
    reviewCount: 53,
    shortDescription: "먼지가 적고 응고력이 좋은 데일리 두부 모래",
    description:
      "실내 화장실 관리에 쓰기 좋은 두부 모래입니다. 정기 배송, 배송비 정책, 재구매 UX를 이어서 실습할 수 있습니다.",
    color: "bg-amber-200",
    specs: ["7L", "오리지널 향", "빠른 응고"],
  },
  {
    slug: "window-hammock",
    name: "창가 해먹 선반",
    category: "리빙",
    price: 54000,
    rating: 4.7,
    reviewCount: 88,
    badge: "한정",
    shortDescription: "햇빛 드는 창가에 설치하는 흡착식 휴식 공간",
    description:
      "창가에 붙여 고양이가 바깥을 구경하며 쉴 수 있게 돕는 해먹입니다. 설치 안내와 주의사항 콘텐츠를 상세 페이지에 더하기 좋습니다.",
    color: "bg-rose-200",
    specs: ["최대 15kg", "흡착판 4개", "커버 세탁 가능"],
  },
];

export const categories = ["전체", "사료", "간식", "장난감", "리빙"] as const;

export const featuredProducts = products.slice(0, 3);

export function formatPrice(price: number) {
  return new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
    maximumFractionDigits: 0,
  }).format(price);
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
