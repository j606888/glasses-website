const items = [
  {
    icon: 'home-section2-1.png',
    title: '單一價格',
    description: '無論任何度數皆不需追加費用即可擁有適合自己的薄型球面鏡片。'
  },
  {
    icon: 'home-section2-2.png',
    title: '20 分鐘即可取件',
    description: '為了您的寶貴時間著想，以豐富專業知識與技術將結帳到交件的時間縮減至最快 20 分鐘即可完成。'
  },
  {
    icon: 'home-section2-3.png',
    title: '安心售後服務',
    description: '我們提供長達 120 天的保固售後服務，不限會員資格皆享有免費深層保養及專業維修服務。'
  },
  {
    icon: 'home-sectioin2-4.png',
    title: '關於鏡片',
    description: '使用世界知名頂級品牌，抗UV、防汙鍍膜薄型非球面鏡片。'
  },
]

export default function AboutUs() {
  return (
    <section className="px-3 bg-[#FBF2F2] py-10 md:px-9 md:py-20 xl:px-0 ">
      <h2 className="text-center text-2xl md:text-5xl font-bold mb-9 text-[#650300]">用專業的心，做專業的事</h2>
      <div className="flex justify-center flex-col gap-6 max-w-7xl mx-auto  md:flex-row md:flex-wrap lg:flex-nowrap">
        {items.map((item) => (
          <div key={item.title} className="flex flex-col items-center md:w-[calc(50%-12px)]">
            <img src={`/${item.icon}`} alt={item.title} className="mb-6 w-25 h-25 xl:w-16 xl:h-16 xl:mb-4" />
            <h3 className="text-2xl font-bold text-[#650300] mb-2">{item.title}</h3>
            <p className="text-base ">{item.description}</p>

          </div>
        ))}
      </div>
    </section>
  );
}