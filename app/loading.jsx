export default function Loading() {
  return (
    <div className="w-full bg-[#faf8f2] min-h-screen">
      {/* Hero Section Skeleton */}
      <section className="relative w-full overflow-hidden bg-[#f9f5e6] border-b border-[#e8e4d9]/60 pt-6 pb-8 lg:pt-14 lg:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[500px]">
            {/* Left Content Skeleton */}
            <div className="lg:col-span-6 space-y-6">
              {/* Eyebrow pill */}
              <div className="h-4 w-44 rounded-full skeleton-shimmer" />

              {/* Title bars */}
              <div className="space-y-3">
                <div className="h-10 sm:h-12 w-3/4 rounded-xl skeleton-shimmer" />
                <div className="h-10 sm:h-12 w-4/5 rounded-xl skeleton-shimmer" />
                <div className="h-10 sm:h-12 w-2/3 rounded-xl skeleton-shimmer" />
              </div>

              {/* Paragraph */}
              <div className="space-y-2 pt-2 max-w-md">
                <div className="h-3.5 w-full rounded-md skeleton-shimmer" />
                <div className="h-3.5 w-5/6 rounded-md skeleton-shimmer" />
                <div className="h-3.5 w-4/6 rounded-md skeleton-shimmer" />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 pt-2">
                <div className="h-12 w-44 rounded-full skeleton-shimmer" />
                <div className="h-12 w-36 rounded-full skeleton-shimmer" />
              </div>

              {/* 3 Badges */}
              <div className="flex items-center gap-4 pt-6 border-t border-[#e8e4d9]">
                <div className="h-10 w-28 rounded-xl skeleton-shimmer" />
                <div className="h-10 w-28 rounded-xl skeleton-shimmer" />
                <div className="h-10 w-28 rounded-xl skeleton-shimmer" />
              </div>
            </div>

            {/* Right Photo Skeleton */}
            <div className="lg:col-span-6 h-72 sm:h-96 lg:h-[460px] rounded-3xl skeleton-shimmer" />
          </div>
        </div>
      </section>

      {/* Grid Cards Skeleton */}
      <section className="py-16 bg-white border-b border-[#e8e4d9]/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-md mx-auto space-y-3">
            <div className="h-3 w-32 mx-auto rounded-full skeleton-shimmer" />
            <div className="h-8 w-64 mx-auto rounded-xl skeleton-shimmer" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="rounded-2xl border border-[#e8e4d9] overflow-hidden bg-[#fbf9f4] space-y-4 p-4"
              >
                <div className="aspect-[4/3] rounded-xl skeleton-shimmer" />
                <div className="h-5 w-3/4 rounded-md skeleton-shimmer" />
                <div className="h-3 w-full rounded-md skeleton-shimmer" />
                <div className="h-3 w-4/5 rounded-md skeleton-shimmer" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
