import Image from "next/image";
import Reveal from "./Reveal";

const WORKS = [
  {
    title: "小さな美容室の壁紙・照明コンサルティング",
    space: "Beauty Salon",
    role: "配色 ・ 壁紙 ・ 照明",
    desc: "落ち着いた低彩度カラーと暖色系の照明で、居心地とブランド感を両立した空間に整理しました。",
    tags: ["Color", "Wallpaper", "Lighting", "Shop"],
    img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=70",
    alt: "やわらかな照明とナチュラルな内装の美容室の客席空間。",
  },
  {
    title: "在宅ワーク用書斎のインテリア改善",
    space: "Home Office",
    role: "配色 ・ 家具配置 ・ 素材",
    desc: "集中しやすい配色と家具配置に整理し、オンライン会議でも印象の良い背景をつくりました。",
    tags: ["Living", "Furniture", "Remote Work"],
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=70",
    alt: "木目のデスクと観葉植物のある、落ち着いた在宅ワーク用書斎。",
  },
  {
    title: "カフェの客席空間リニューアル",
    space: "Cafe",
    role: "コンセプト ・ 壁面 ・ 照明",
    desc: "壁紙と照明を軸に世界観を再整理し、写真に残したくなる客席空間へと導きました。",
    tags: ["Wallpaper", "Lighting", "Shop", "Display"],
    img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=70",
    alt: "木とグリーンを基調にした、あたたかい雰囲気のカフェ客席。",
  },
  {
    title: "企業オフィスのエントランス配色提案",
    space: "Office",
    role: "配色 ・ 素材 ・ 見え方",
    desc: "素材感と配色で企業らしさを表現し、来客時に信頼感が伝わるエントランスに整えました。",
    tags: ["Color", "Office", "Layout"],
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=70",
    alt: "明るく整った企業オフィスのエントランス空間。",
  },
  {
    title: "家族向けリビングの家具配置相談",
    space: "Living",
    role: "家具配置 ・ 配色 ・ 導線",
    desc: "家族の過ごし方に合わせて家具の配置と動線を見直し、広く感じられるリビングに整えました。",
    tags: ["Living", "Furniture", "Layout", "Color"],
    img: "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=800&q=70",
    alt: "ソファとラグで整えられた、明るく開放的な家族向けリビング。",
  },
  {
    title: "雑貨店のディスプレイ・壁面デザイン提案",
    space: "Select Shop",
    role: "壁面 ・ ディスプレイ ・ 照明",
    desc: "壁面デザインとディスプレイの見せ方を整理し、商品が魅力的に映る売り場に仕上げました。",
    tags: ["Display", "Wallpaper", "Shop", "Lighting"],
    img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=70",
    alt: "商品が美しく並ぶ、雑貨店のディスプレイと壁面。",
  },
];

export default function Works() {
  return (
    <section className="section" id="works">
      <div className="container">
        <Reveal className="head-row">
          <div>
            <p className="eyebrow">Works</p>
            <h2 className="section-title">コンサルティング事例</h2>
          </div>
          <p className="section-lead">
            ※ 掲載している事例はポートフォリオ用に制作した架空のサンプルです。空間・提案内容の方向性の参考としてご覧ください。
          </p>
        </Reveal>

        <div className="works__grid">
          {WORKS.map((w, i) => (
            <Reveal key={w.title} className="work-card" delay={(i % 3) * 90}>
              <div className="work-card__media">
                <span className="work-card__space">{w.space}</span>
                <Image
                  src={w.img}
                  alt={w.alt}
                  fill
                  sizes="(max-width: 620px) 90vw, (max-width: 900px) 45vw, 30vw"
                />
              </div>
              <div className="work-card__body">
                <h3 className="work-card__title">{w.title}</h3>
                <p className="work-card__role">担当範囲：{w.role}</p>
                <p className="work-card__desc">{w.desc}</p>
                <ul className="tags">
                  {w.tags.map((t) => (
                    <li key={t} className="tag">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
