const socials = [
  {
    image: '/ic-social-fb.png',
    alt: 'facebook',
  },
  {
    image: '/ic_social_ig.png',
    alt: 'instagram',
  },
  {
    image: '/ic_social_line.png',
    alt: 'line',
  }
]
export default function Footer() {
  return (
    <footer className="bg-[#AA0601] pt-12 pb-8 md:px-9">
      <div className="flex justify-center flex-col max-w-7xl mx-auto text-white">
        <div className="flex justify-between w-full items-center mb-6">
          <div className="flex gap-12">
            <a href="/">首頁</a>
            <a href="/">系列鏡框</a>
            <a href="/">門市據點</a>
            <a href="/">部落格</a>
            <a href="/">常見問題</a>
          </div>
          <div className="flex gap-8 md:gap-4">
            {socials.map(social => (
              <img src={social.image} alt={social.alt} className="w-12 h-12 md:w-10 md:h-10" key={social.alt} />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-5 mb-2 font-noto">
          <img src="/ic_outline-phone.png" className="w-9 h-9 text-white" />
          <p className="text-4xl">0800-000-00</p>
        </div>
        <div className="flex items-center gap-5 mb-8 font-noto">
          <img src="/ic_outline-email.png" className="w-9 h-9 text-white" />
          <p className="text-4xl">glasses@business.co</p>
        </div>
        <hr className='mb-8' />
        <div className="flex justify-between gap-12 w-full items-center">
          <p className='mr-auto'>Copyright © 2020 Glasses.All rights reserved.</p>
          <p className='text-sm'>隱私權政策</p>
          <p className='text-sm'>服務條款</p>
        </div>
      </div>
    </footer>
  )
}