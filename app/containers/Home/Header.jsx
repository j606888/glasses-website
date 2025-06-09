const navs = [
  '系列鏡框',
  '門市據點',
  '部落格',
  '常見問題',
]
export default function Header() {
  return (
    <div className="bg-[rgb(170,6,1)] sticky top-0 z-10">
      <div className="flex flex-wrap items-center justify-between md:px-9 xl:mx-auto xl:max-w-7xl">
        <div className='w-full flex items-center p-4 h-[80px] md:w-auto md:p-0'>
          <img src="/logo-white.png" alt="logo" className="w-[80px]" />
        </div>
        <div className="flex flex-wrap text-white  w-full md:w-auto md:gap-16 md:text-xl">
          {navs.map(nav => (
            <div className='flex justify-center items-center h-[48px] w-[50%] border-1 border-white md:border-none md:w-auto'>
              <a className='' href="/" key={nav}>{nav}</a>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
}
