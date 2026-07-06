import Image from "next/image";
import Reveal from "./Reveal";

const CASES = [
  {
    no: "Case 01",
    title: "在宅ワーク部屋",
    before: "物が多く、集中しにくい印象。",
    after: "壁面収納と低彩度カラーで、落ち着いた作業空間へ。",
    beforeImg:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=700&q=70",
    beforeAlt: "整理される前の、やや雑然としたワークスペース。",
    afterImg:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=700&q=70",
    afterAlt: "配色と収納が整えられ、落ち着いた在宅ワーク用の書斎。",
  },
  {
    no: "Case 02",
    title: "小さなカフェ",
    before: "内装に統一感がなく、写真で魅力が伝わりにくい。",
    after: "壁紙と照明を整え、印象に残る客席空間へ。",
    beforeImg:
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=700&q=70",
    beforeAlt: "統一感のない、改善前のカフェ客席。",
    afterImg:
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=700&q=70",
    afterAlt: "壁紙と照明を整え、世界観を統一したカフェ客席。",
  },
  {
    no: "Case 03",
    title: "オフィス受付",
    before: "無機質で、会社の印象が伝わりにくい。",
    after: "素材感と配色で、信頼感のあるエントランスへ。",
    beforeImg:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=70",
    beforeAlt: "無機質な印象の、改善前のオフィス受付。",
    afterImg:
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=700&q=70",
    afterAlt: "素材感と配色を整えた、信頼感のあるオフィスエントランス。",
  },
];

export default function BeforeAfter() {
  return (
    <section className="section" id="beforeafter">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Before / After</p>
          <h2 className="section-title">整えると、変わる。</h2>
          <p className="section-lead">
            ※ 掲載画像は施工写真ではなく、改善イメージをお伝えするための商用利用可能な類似イメージです。
          </p>
        </Reveal>

        <div className="ba__list">
          {CASES.map((c) => (
            <Reveal key={c.no} className="ba-case">
              <div className="ba-case__info">
                <span className="ba-case__no">{c.no}</span>
                <h3 className="ba-case__title">{c.title}</h3>
                <div className="ba-case__row">
                  <div>
                    <span className="ba-case__tag ba-case__tag--before">
                      Before
                    </span>
                    <p className="ba-case__text">{c.before}</p>
                  </div>
                  <div>
                    <span className="ba-case__tag ba-case__tag--after">
                      After
                    </span>
                    <p className="ba-case__text">{c.after}</p>
                  </div>
                </div>
              </div>

              <div className="ba-case__images">
                <figure className="is-before">
                  <Image
                    src={c.beforeImg}
                    alt={c.beforeAlt}
                    fill
                    sizes="(max-width: 820px) 45vw, 30vw"
                  />
                  <figcaption>Before</figcaption>
                </figure>
                <figure className="is-after">
                  <Image
                    src={c.afterImg}
                    alt={c.afterAlt}
                    fill
                    sizes="(max-width: 820px) 45vw, 30vw"
                  />
                  <figcaption>After</figcaption>
                </figure>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
