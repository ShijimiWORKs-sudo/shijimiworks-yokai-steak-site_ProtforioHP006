import Reveal from "./Reveal";

type IconName =
  | "home"
  | "palette"
  | "wall"
  | "sofa"
  | "lamp"
  | "building";

function Icon({ name }: { name: IconName }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "home":
      return (
        <svg {...common}>
          <path d="M3 10.5 12 4l9 6.5" />
          <path d="M5 9.5V20h14V9.5" />
          <path d="M10 20v-5h4v5" />
        </svg>
      );
    case "palette":
      return (
        <svg {...common}>
          <path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.7-.9 1.5-1.8-.2-.9.4-1.7 1.3-1.7H17a4 4 0 0 0 4-4c0-5-4-9.5-9-9.5Z" />
          <circle cx="7.5" cy="11.5" r="1" fill="currentColor" stroke="none" />
          <circle cx="10.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
          <circle cx="15" cy="8" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "wall":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="16" rx="1" />
          <path d="M3 9h18M3 15h18M8 4v5m8-5v5M12 9v6M8 15v5m8-5v5" />
        </svg>
      );
    case "sofa":
      return (
        <svg {...common}>
          <path d="M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3" />
          <path d="M2 12a2 2 0 0 1 2 2v3h16v-3a2 2 0 0 1 2-2v3a2 2 0 0 1-2 2v1M4 19v-2" />
          <path d="M6 11h12" />
        </svg>
      );
    case "lamp":
      return (
        <svg {...common}>
          <path d="M9 2h6l3 7H6l3-7Z" />
          <path d="M12 9v9" />
          <path d="M9 21h6" />
        </svg>
      );
    case "building":
      return (
        <svg {...common}>
          <rect x="5" y="3" width="14" height="18" rx="1" />
          <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3" />
        </svg>
      );
  }
}

const SERVICES: {
  icon: IconName;
  title: string;
  jp: string;
  desc: string;
}[] = [
  {
    icon: "home",
    title: "Interior Consulting",
    jp: "インテリアコンサルティング",
    desc: "住宅・店舗・オフィスのインテリア全体の方向性を整理します。",
  },
  {
    icon: "palette",
    title: "Color Coordination",
    jp: "配色コーディネート",
    desc: "壁紙、床材、家具、照明に合わせた配色提案を行います。",
  },
  {
    icon: "wall",
    title: "Wallpaper Planning",
    jp: "壁紙・素材プランニング",
    desc: "空間の印象を変える壁紙選び、アクセントクロス、素材選定をサポートします。",
  },
  {
    icon: "sofa",
    title: "Furniture Layout",
    jp: "家具レイアウト",
    desc: "家具配置、動線、見え方を考慮したレイアウト提案を行います。",
  },
  {
    icon: "lamp",
    title: "Lighting Direction",
    jp: "照明ディレクション",
    desc: "照明の色温度、明るさ、配置を含めた空間演出を提案します。",
  },
  {
    icon: "building",
    title: "Office / Shop Design",
    jp: "オフィス・店舗コンサル",
    desc: "働きやすいオフィス、印象に残る店舗空間づくりを支援します。",
  },
];

export default function Service() {
  return (
    <section className="section section--alt" id="service">
      <div className="container">
        <Reveal className="head-row">
          <div>
            <p className="eyebrow">Service</p>
            <h2 className="section-title">できること</h2>
          </div>
          <p className="section-lead">
            色・素材・家具・照明・導線。空間を構成する要素を一つずつ整理し、目的に合った心地よい空間へと導きます。
          </p>
        </Reveal>

        <div className="service__grid">
          {SERVICES.map((s, i) => (
            <Reveal
              key={s.title}
              className="service-card"
              delay={(i % 3) * 90}
            >
              <span className="service-card__icon">
                <Icon name={s.icon} />
              </span>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__jp">{s.jp}</p>
              <p className="service-card__desc">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
