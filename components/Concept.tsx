import Image from "next/image";
import Reveal from "./Reveal";

export default function Concept() {
  return (
    <section className="section" id="concept">
      <div className="container concept__grid">
        <Reveal className="concept__body">
          <p className="eyebrow">Concept</p>
          <h2 className="section-title">空間の印象は、
          <br />
          細部の重なりでできている。</h2>
          <p className="concept__lead">
            空間の印象は、家具だけで決まるものではありません。
          </p>
          <p>
            壁紙の色、床の素材、照明の温度、家具の配置、余白の取り方。その一つひとつが重なって、心地よさや働きやすさ、記憶に残る空気感をつくります。
          </p>
          <p>
            ShijimiWORKsは、住宅・店舗・オフィスの目的に合わせて、色、素材、家具、照明、導線を整理し、空間全体の印象を整えるデザインコンサルティングを行います。
          </p>
        </Reveal>

        <Reveal className="concept__figures" delay={120}>
          <figure className="concept__fig--tall">
            <Image
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=700&q=70"
              alt="くすんだグリーンの壁とナチュラルな家具で整えられた居室の一角。"
              fill
              sizes="(max-width: 860px) 45vw, 22vw"
            />
          </figure>
          <figure className="concept__fig--wide">
            <Image
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=700&q=70"
              alt="木目のデスクと間接照明が置かれた、落ち着いたワークスペース。"
              fill
              sizes="(max-width: 860px) 45vw, 22vw"
            />
          </figure>
          <figure className="concept__fig--wide">
            <Image
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=700&q=70"
              alt="壁紙や布地などの素材サンプルとカラーパレット。"
              fill
              sizes="(max-width: 860px) 45vw, 22vw"
            />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
