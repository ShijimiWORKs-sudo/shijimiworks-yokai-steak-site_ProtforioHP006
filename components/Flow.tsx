import Reveal from "./Reveal";

const STEPS = [
  { title: "お問い合わせ", desc: "フォームからご連絡ください。相談内容が固まっていなくても大丈夫です。" },
  { title: "現状ヒアリング", desc: "空間の目的やお悩み、ご予算などを丁寧にお聞きします。" },
  { title: "写真・図面・希望イメージの共有", desc: "現在の写真や図面、理想のイメージを共有いただきます。" },
  { title: "課題整理", desc: "空間の課題と目指す方向性を整理します。" },
  { title: "配色・素材・レイアウト提案", desc: "色、素材、家具配置、照明などの具体案をご提案します。" },
  { title: "オンライン／対面での説明", desc: "提案内容をわかりやすくご説明し、疑問を解消します。" },
  { title: "施工会社・購入先の検討", desc: "必要に応じて、施工会社や購入先の検討をサポートします。" },
  { title: "アフターフォロー", desc: "実施後の見え方や追加のご相談にも対応します。" },
];

export default function Flow() {
  return (
    <section className="section section--deep" id="flow">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Flow</p>
          <h2 className="section-title">相談から提案までの流れ</h2>
          <p className="section-lead">
            ご相談から提案・アフターフォローまで、8つのステップで進めます。各段階で確認を挟みながら進めるので安心です。
          </p>
        </Reveal>

        <div className="flow__list">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} className="flow-step" delay={(i % 2) * 80}>
              <span className="flow-step__num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="flow-step__title">{s.title}</h3>
                <p className="flow-step__desc">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
