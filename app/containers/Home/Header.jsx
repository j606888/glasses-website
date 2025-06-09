export default function Header() {
  return (
    <div className="bg-[#AA0601] sticky top-0 z-10">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-20">
        <img src="/logo-white.png" alt="logo" className="w-20" />
        <div className="flex items-center gap-16 text-white text-xl">
          <a href="/">系列鏡框</a>
          <a href="/">門市據點</a>
          <a href="/">部落格</a>
          <a href="/">常見問題</a>
        </div>
      </div>
    </div>
  );
}
