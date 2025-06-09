const customers = [
  {
    image: 'home-section5-1.png',
    name: 'Jessy',
    content: '眼鏡品質優良，下次還會想來這邊購買！',
    date: '2021/06/20',
  },
  {
    image: 'home-section5-2.png',
    name: '凱倫',
    content: '做工細緻、鏡架很輕盈，待久也不會覺得有負擔，推薦給大家！',
    date: '2021/04/18',
  },
  {
    image: 'home-section5-3.png',
    name: '悠悠',
    content: '謝謝客服人員的詳細回答，成功買到了喜歡的眼鏡，下次會再回購！',
    date: '2020/12/25',
  },
  {
    image: 'home-section5-4.png',
    name: 'Kyuan',
    content: '服務很好，品質沒有任何問題，非常喜歡。',
    date: '2020/10/31',
  },
]
export default function Customers() {
  return (
    <section className="py-10 px-3 md:py-20 md:px-9 xl:px-0">
      <h2 className="text-center text-2xl md:text-5xl font-bold mb-6 md:mb-12 text-[#650300]">顧客推薦</h2>
      <div className="flex justify-center max-w-7xl mx-auto gap-4 md:gap-6 flex-col md:flex-row md:flex-wrap xl:flex-nowrap">
        {customers.map(customer => (
          <div className="flex flex-col items-center rounded-sm shadow-[0_2px_6px_#00000029] md:w-[calc(50%-12px)]">
            <img src={`./${customer.image}`} alt={customer.name} className="w-full h-[306px] object-cover" />
            <div className="p-4 h-[205px] flex flex-col w-full">
              <h3 className="text-base font-medium mb-2">{customer.name}</h3>
              <p className="text-sm leading-6">{customer.content}</p>
              <span className="text-sm text-[#707070] mt-auto">{customer.date}</span>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}