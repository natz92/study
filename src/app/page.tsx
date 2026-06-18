export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,#ffd98a_0,#fff8ed_34rem)] px-6 py-8 text-stone-950 sm:px-10">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-5xl flex-col justify-between gap-12">
        <header className="flex items-center justify-between">
          <p className="text-lg font-semibold tracking-wide">Orange</p>
          <p className="rounded-full border border-stone-900/15 px-3 py-1 text-sm text-stone-700">
            Static Cocktail Atlas
          </p>
        </header>

        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-orange-700">
            Next.js 16 + Tailwind CSS
          </p>
          <h1 className="text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">
            칵테일과 재료를 따라 탐색하는 작은 도감.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
            레시피, 재료 관계, 비슷한 칵테일 추천을 정적 데이터로 빌드하는
            토이 프로젝트의 첫 잔입니다.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {[
            "칵테일 JSON 정규화",
            "재료별 역인덱스",
            "유사 칵테일 추천",
          ].map((item) => (
            <div
              className="rounded-lg border border-stone-900/10 bg-white/55 p-4 shadow-sm"
              key={item}
            >
              <p className="text-sm font-medium text-stone-800">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
