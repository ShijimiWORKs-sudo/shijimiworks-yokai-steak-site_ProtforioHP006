import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__grid">
        <div>
          <p className="hero__eyebrow">ShijimiWORKs Interior Design Consulting</p>
          <h1 className="hero__title">
            色と素材で、
            <br />
            空間の印象を<em>整える</em>。
          </h1>
          <p className="hero__sub">
            住宅・店舗・オフィスのインテリア、壁紙、配色、家具配置、照明計画まで、空間全体の見え方をトータルでご提案します。
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn">
              空間デザインを相談する <span className="btn__arrow">→</span>
            </a>
            <a href="#works" className="btn btn--ghost">
              事例を見る
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__photo">
            <Image
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=70"
              alt="自然光が差し込む、ベージュとグリーンで整えられた明るいリビングルームのインテリア。"
              fill
              sizes="(max-width: 880px) 90vw, 42vw"
              priority
            />
          </div>
          <div className="hero__card">
            <span>Color &amp; Material</span>
            <p>暮らしに合う配色を。</p>
            <div className="palette" aria-hidden="true">
              <span style={{ background: "#e7e0d2" }} />
              <span style={{ background: "#7d9079" }} />
              <span style={{ background: "#c17a58" }} />
              <span style={{ background: "#a98b6f" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
