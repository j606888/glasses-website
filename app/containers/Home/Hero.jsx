export default function Hero() {
  return (
    <section className="bg-[url('/home-header.png')] bg-cover bg-center h-[787px] md:bg-[url('/home-header-sm.png')]">
      <div className="flex flex-col items-end justify-center mx-auto max-w-7xl h-full md:pr-9">
        <p className="text-[#650300] text-4xl">Promise-Desert 2020 早春系列</p>
        <h2 className="text-[#650300] text-[64px] font-bold">
          看得清，才能看得遠
        </h2>
        <button className="bg-[#AA0601] text-white text-xl border-none px-3 py-2">
          立即購買
        </button>
      </div>
    </section>
  );
}
