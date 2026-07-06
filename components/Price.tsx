import Reveal from "./Reveal";

const PRICES = [
  { name: "オンライン簡易相談", en: "Online Consulting", value: "15,000" },
  { name: "個人宅インテリア相談", en: "Personal Interior", value: "50,000" },
  { name: "壁紙・配色提案", en: "Wallpaper & Color", value: "35,000" },
  { name: "店舗空間コンサルティング", en: "Shop Space", value: "120,000" },
  { name: "オフィス空間コンサルティング", en: "Office Space", value: "180,000" },
  { name: "継続コンサルティング", en: "Monthly Support", value: "50,000", monthly: true },
];

export default function Price() {
  return (
    <section className="section section--alt" id="price">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Price</p>
          <h2 className="section-title">料金の目安</h2>
          <p className="section-lead">
            対象や範囲に合わせた、わかりやすい料金設定。ご予算に合わせた進め方もご提案します。
          </p>
        </Reveal>

        <div className="price__grid">
          {PRICES.map((p) => (
            <Reveal key={p.name} className="price-card">
              <span className="price-card__name">
                <strong>{p.name}</strong>
                <span>{p.en}</span>
              </span>
              <span className="price-card__value">
                ¥{p.value}
                <em>{p.monthly ? " / 月 〜" : " 〜"}</em>
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="price__note">
          内容、対象範囲、現地確認の有無、提案資料のボリュームにより変動します。まずはお気軽にご相談ください。
        </Reveal>
      </div>
    </section>
  );
}
