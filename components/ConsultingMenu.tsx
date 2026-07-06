import Reveal from "./Reveal";

const MENUS = [
  {
    no: "Menu 01",
    title: "Personal Space Plan",
    forWhom: "個人宅向け",
    desc: "リビング、寝室、書斎、子ども部屋などの配色・家具・壁紙のご相談を承ります。",
    items: [
      "オンライン相談",
      "配色提案",
      "家具配置アドバイス",
      "壁紙・素材候補の提案",
    ],
    mod: "menu-card--1",
  },
  {
    no: "Menu 02",
    title: "Shop Styling Plan",
    forWhom: "店舗向け",
    desc: "美容室、カフェ、雑貨店、サロンなどの世界観づくりをサポートします。",
    items: [
      "コンセプト整理",
      "壁面・什器・照明提案",
      "SNS映えする撮影ポイント提案",
      "店舗導線の簡易アドバイス",
    ],
    mod: "menu-card--2",
  },
  {
    no: "Menu 03",
    title: "Office Design Plan",
    forWhom: "会社・事務所向け",
    desc: "働きやすさと印象を両立する、オフィス空間のご提案を行います。",
    items: [
      "エントランス印象改善",
      "会議室・執務室の配色",
      "集中しやすいワークスペース",
      "来客時の見え方整理",
    ],
    mod: "menu-card--3",
  },
];

export default function ConsultingMenu() {
  return (
    <section className="section section--alt" id="consulting">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Consulting Menu</p>
          <h2 className="section-title">相談メニュー</h2>
          <p className="section-lead">
            対象となる空間に合わせて、3つの相談メニューをご用意しています。目的に近いものからお選びください。
          </p>
        </Reveal>

        <div className="menu__grid">
          {MENUS.map((m, i) => (
            <Reveal key={m.title} className={`menu-card ${m.mod}`} delay={i * 110}>
              <span className="menu-card__no">{m.no}</span>
              <h3 className="menu-card__title">{m.title}</h3>
              <p className="menu-card__for">{m.forWhom}</p>
              <p className="menu-card__desc">{m.desc}</p>
              <ul className="menu-card__list">
                {m.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
