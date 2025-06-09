const InputForm = ({ label, placeholder, type, id, name }) => {
  return (
    <div>
      <label className="block mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        className="w-full border-1 py-1.5 px-3 placeholder:text-[#c0c0c0]"
        placeholder={placeholder}
        type={type}
        id={id}
        name={name}
      />
    </div>
  );
};

export default function ContactUs() {
  return (
    <section className="py-10 px-3 md:py-20 md:px-9 xl:px-0 bg-[#FBF2F2]">
      <h2 className="text-center text-2xl md:text-5xl font-bold mb-6 md:mb-12 text-[#650300]">
        聯絡我們
      </h2>
      <div className="mx-auto md:max-w-[576px] xl:max-w-[636px] ">
        <p className="text-base xl:text-xl mb-6">
          我們相當重視您的意見，若您有任何疑問，可先參考「常見問題」，若仍有任何問題，請填妥以下資料，我們會在近期與您聯繫。
        </p>
        <form className="flex flex-col gap-4">
          <InputForm label="姓名" placeholder="陳小明" type="text" id="name" name="name" />
          <InputForm label="聯絡電話" placeholder="0912-345-678" type="text" id="phone" name="phone" />
          <InputForm label="電子郵件" placeholder="example@email.com" type="text" id="phone" name="phone" />
          <div>
            <label className="block mb-2" htmlFor="review">意見反應</label>
            <textarea 
              className="w-full border-1 py-1.5 px-3 placeholder:text-[#c0c0c0]" 
              placeholder="請輸入您的意見" 
              id="review" 
              name="review" 
              rows={5} 
            />
          </div>
          <div>
            <input type="checkbox" id="privacy" name="privacy" className="mr-2 hidden" />
            <label htmlFor="privacy" className="flex items-start cursor-pointer">
              <img src="/checkbox.svg" alt="checkbox" className="w-6 h-6 mr-2" />
              我同意隱私權政策，並同意依隱私權政策中所述的方式處理自己的資料。
            </label>
          </div>
          <button
            type="submit"
            className="bg-[#AA0601] text-white p-4 w-full mx-auto mt-9 md:w-[336px] xl:w-[416px]"
          >
            確認送出
          </button>
        </form>
      </div>
    </section>
  );
}
