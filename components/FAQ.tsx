"use client";

import { useRef, useState } from "react";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "まだ具体的なイメージがなくても相談できますか？",
    a: "はい、もちろんです。「なんとなく落ち着かない」「もっと印象を良くしたい」といった段階からご相談いただけます。現状のお悩みを伺いながら、一緒に方向性を整理します。",
  },
  {
    q: "オンラインだけで相談できますか？",
    a: "はい。写真や図面を共有いただければ、オンラインだけでも配色・素材・家具配置のご提案が可能です。遠方の方も対応しています。",
  },
  {
    q: "壁紙だけの相談もできますか？",
    a: "はい。壁紙・アクセントクロスや配色のみのご相談も承っています。部分的なご相談から、空間全体のご提案まで柔軟に対応します。",
  },
  {
    q: "家具の購入先も提案してもらえますか？",
    a: "はい。ご予算やテイストに合わせて、家具や照明、素材の候補・購入先の例をご提案します。特定メーカーへの誘導は行いません。",
  },
  {
    q: "施工まで対応していますか？",
    a: "ShijimiWORKsは、空間の方向性・色・素材・見せ方を整えるコンサルティングを行う会社です。施工は行いませんが、必要に応じて施工会社の検討をサポートします。",
  },
  {
    q: "店舗やオフィスの相談もできますか？",
    a: "はい。美容室・カフェ・雑貨店などの店舗や、企業のオフィス空間のご相談も承っています。働きやすさや来客時の印象まで含めてご提案します。",
  },
  {
    q: "予算に合わせた提案は可能ですか？",
    a: "はい。ご予算をお伺いした上で、優先順位をつけて実現しやすい範囲からご提案します。段階的に進める方法もご相談いただけます。",
  },
  {
    q: "相談前に用意するものはありますか？",
    a: "現在の空間の写真があるとスムーズです。図面やお気に入りのイメージ画像があれば、より具体的なご提案が可能です。なくても問題ありません。",
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const answerRef = useRef<HTMLDivElement | null>(null);
  const panelId = `faq-panel-${index}`;
  const btnId = `faq-btn-${index}`;

  return (
    <div className={`faq-item ${open ? "is-open" : ""}`}>
      <button
        type="button"
        id={btnId}
        className="faq-item__q"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        {q}
        <span className="faq-item__icon" aria-hidden="true" />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className="faq-item__a"
        ref={answerRef}
        style={{
          maxHeight: open ? `${answerRef.current?.scrollHeight ?? 400}px` : 0,
        }}
      >
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title">よくあるご質問</h2>
        </Reveal>

        <Reveal className="faq__list" delay={80}>
          {FAQS.map((item, i) => (
            <FaqItem key={item.q} q={item.q} a={item.a} index={i} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
