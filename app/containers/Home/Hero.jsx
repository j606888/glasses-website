export default function Hero() {
  return (
    <section className="bg-[url('/home-header-sm.png')] xl:bg-[url('/home-header.png')] h-[396px] bg-cover bg-center xl:h-[787px] ">
      <div className="flex flex-col items-end justify-center mx-auto max-w-7xl h-full px-[14px] md:px-9">
        <p className="text-base text-[#650300] md:text-4xl">Promise-Desert 2020 早春系列</p>
        <h2 className="text-[#650300] text-2xl mb-2 font-bold md:text-[64px] md:mb-1 ">
          看得清，才能看得遠
        </h2>
        <button className="bg-[#AA0601] text-white text-xl border-none px-3 py-2">
          立即購買
        </button>
      </div>
    </section>
  );
}
