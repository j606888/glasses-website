const series = [
  {
    image: 'home-section4-1.png',
    mobileImage: 'home-section4-1-sm.png',
    title: 'DOUBLE A+',
  },
  {
    image: 'home-section4-2.png',
    mobileImage: 'home-section4-2-sm.png',
    title: 'YOUTH',
  },
]

export default function CoBranding() {
  return (
    <section className="py-10 px-3 md:py-20 bg-[url('/index-bg.png')] bg-center md:px-9 xl:px-0">
      <h2 className="text-2xl text-center md:text-5xl font-bold mb-6 md:mb-12 text-white">聯名設計鏡框</h2>
      <div className="flex justify-center max-w-7xl mx-auto flex-col xl:flex-row gap-6 xl:gap-0">
        {series.map(series => (
          <div key={series.title} className="flex flex-col items-center">
            <picture>
              <source media="(min-width: 768px)" srcSet={`./${series.image}`} />
              <source media="(max-width: 767px)" srcSet={`./${series.mobileImage}`} />
              <img 
                src={`./${series.image}`} 
                alt={series.title} 
                className="w-full" 
              />
            </picture>
            <div className="flex flex-col items-center bg-white py-2 w-full">
              <h3 className="text-5xl font-bold text-[#AA0601] italic leading-[72px]">{series.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}