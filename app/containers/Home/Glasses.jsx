const series = [
  {
    image: 'home-section3-1.png',
    title: 'OPTICAL',
  },
  {
    image: 'home-section3-2.png',
    title: 'SUNGLASSES',
  },
  {
    image: 'home-section3-3.png',
    title: 'FUNCTIONAL',
  },
]
export default function Glasses() {
  return (
    <section className="px-3 py-10 md:py-20 xl:px-0">
      <h2 className="text-center text-2xl mb-6 md:text-5xl font-bold md:mb-12 text-[#650300]">經典系列鏡框</h2>
      <div className="flex justify-center gap-6 max-w-7xl mx-auto flex-col lg:flex-row">
        {series.map((item) => (
          <div key={item.title} className="flex flex-col items-center">
            <img src={`./${item.image}`} alt={item.title} className="w-full mb-4 md:w-[336px] xl:w-full" />
            <h3 className="text-5xl font-bold text-[#AA0601] mb-2 italic">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
