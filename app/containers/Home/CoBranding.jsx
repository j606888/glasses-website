const series = [
  {
    image: 'home-section4-1.png',
    title: 'DOUBLE A+',
  },
  {
    image: 'home-section4-2.png',
    title: 'YOUTH',
  },
]
export default function CoBranding() {
  return (
    <section className="py-20 bg-[url('/index-bg.png')] bg-center">
      <h2 className="text-center text-5xl font-bold mb-12 text-white">聯名設計鏡框</h2>
      <div className="flex justify-center max-w-7xl mx-auto">
        {series.map(series => (
          <div className="flex flex-col items-center">
            <img src={`/${series.image}`} alt={series.title} className="w-[648px]" />
            <div className="flex flex-col items-center bg-white py-2 w-full">
              <h3 className="text-5xl font-bold text-[#AA0601] italic">{series.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}