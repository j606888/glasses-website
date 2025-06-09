const socials = [
  {
    image: './ic-social-fb.png',
    alt: 'facebook',
  },
  {
    image: './ic_social_ig.png',
    alt: 'instagram',
  },
  {
    image: './ic_social_line.png',
    alt: 'line',
  }
]

export default function Footer() {
  return (
    <footer className="bg-[#AA0601] px-3 pt-6 md:pt-12 pb-6 md:pb-8 md:px-9 relative">
      <div className="flex justify-center flex-col max-w-7xl mx-auto text-white">
        <div className="absolute top-6 right-6 md:relative md:top-0 md:right-0 flex justify-end  md:flex-row md:justify-between w-full items-center mb-6">
          <div className="hidden md:flex gap-12">
            <a href="/">首頁</a>
            <a href="/">系列鏡框</a>
            <a href="/">門市據點</a>
            <a href="/">部落格</a>
            <a href="/">常見問題</a>
          </div>
          <div className="flex gap-2 xl:gap-8 md:gap-4">
            {socials.map(social => (
              <img src={social.image} alt={social.alt} className="w-6 h-6 md:w-10 md:h-10 xl:w-12 xl:h-12" key={social.alt} />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3 md:gap-5 mb-2 font-noto">
          <img src="./ic_outline-phone.png" className="w-4.5 h-4.5 md:w-9 md:h-9 text-white" />
          <p className="text-base md:text-4xl">0800-000-00</p>
        </div>
        <div className="flex items-center gap-3 md:gap-5 mb-6 md:mb-8 font-noto">
          <img src="./ic_outline-email.png" className="w-4.5 h-4.5 md:w-9 md:h-9 text-white" />
          <p className="text-base md:text-4xl">glasses@business.co</p>
        </div>
        <hr className='mb-4 md:mb-8' />
        <div className="flex flex-col md:flex-row justify-between gap-2  md:gap-12 w-full items-start md:items-center">
          <p className='mr-auto'>Copyright © 2020 Glasses.All rights reserved.</p>
          <p className='text-sm'>隱私權政策</p>
          <p className='text-sm'>服務條款</p>
        </div>
      </div>
    </footer>
  )
}