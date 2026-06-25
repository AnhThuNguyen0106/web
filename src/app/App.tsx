import { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  Facebook,
  ShoppingCart,
  Search,
  User,
  Menu,
  X,
  ChevronRight,
  Star,
  ArrowRight,
  Leaf,
  Heart,
  Sprout,
  Users,
  Clock,
  Droplets,
  CheckCircle,
  Package,
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

// ── Image imports ──────────────────────────────────────────────────────────
import logoImg from "@/imports/LOGO___1_.png";
import bannerImg from "@/imports/z7951583676493_ac9609699090abe7cf256a1e40e92dfb.jpg";
import combo1Img from "@/imports/z7951622925302_896d9a2b4814bd5a2c7afeae42e092a6.jpg";
import combo2Img from "@/imports/z7951638091609_f1588a843c160e9a65a993479d378535.jpg";
import combo3Img from "@/imports/z7951643819635_6a2b13f849dd0e69264a686c1fe4e188.jpg";
import combo4Img from "@/imports/z7951673117269_44ce4dcc14e305dab093b82044ab66cc.jpg";
import hoaNhaiImg from "@/imports/nh_i.jpg";
import hoaHongCoImg from "@/imports/rose.jpg";

// ── Tiny helpers ───────────────────────────────────────────────────────────
const Label = ({ children }: { children: React.ReactNode }) => (
  <span className="block text-[#C8A96A] text-[11px] tracking-[0.32em] uppercase font-medium mb-3 font-['Be_Vietnam_Pro']">
    {children}
  </span>
);

const Heading = ({
  children,
  light = false,
  className = "",
}: {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}) => (
  <h2
    className={`font-['Cormorant_Garamond'] text-4xl md:text-5xl font-bold leading-[1.15] ${
      light ? "text-white" : "text-[#1C2B1C]"
    } ${className}`}
  >
    {children}
  </h2>
);

const StarRow = ({ n = 5 }: { n?: number }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star
        key={i}
        size={13}
        className={
          i <= n
            ? "fill-[#C8A96A] text-[#C8A96A]"
            : "text-gray-300"
        }
      />
    ))}
  </div>
);

// ── Countdown ──────────────────────────────────────────────────────────────
const FLASH_TARGET = new Date("2026-07-01T00:00:00");

const useCountdown = (target: Date) => {
  const calc = () => {
    const ms = Math.max(0, target.getTime() - Date.now());
    return {
      d: Math.floor(ms / 86400000),
      h: Math.floor((ms % 86400000) / 3600000),
      m: Math.floor((ms % 3600000) / 60000),
      s: Math.floor((ms % 60000) / 1000),
    };
  };
  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return t;
};

const Digit = ({ v, label }: { v: number; label: string }) => (
  <div className="flex flex-col items-center gap-1.5">
    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#355E3B] rounded-xl flex items-center justify-center shadow-lg border border-[#C8A96A]/20">
      <span className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-bold text-white">
        {String(v).padStart(2, "0")}
      </span>
    </div>
    <span className="text-[10px] tracking-[0.25em] uppercase text-[#6B7B5E] font-['Be_Vietnam_Pro']">
      {label}
    </span>
  </div>
);

// ══════════════════════════════════════════════════════════════════════════
// ANNOUNCEMENT BAR
// ══════════════════════════════════════════════════════════════════════════
function AnnouncementBar() {
  return (
    <div className="bg-[#355E3B] text-white py-2 px-4 text-xs font-['Be_Vietnam_Pro']">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <a
          href="tel:0349067765"
          className="flex items-center gap-1.5 hover:text-[#C8A96A] transition-colors shrink-0"
        >
          <Phone size={11} />
          <span>0349 067 765</span>
        </a>
        <span className="hidden sm:block text-center font-medium text-[#C8A96A]">
          🎁 Miễn phí vận chuyển đơn từ 500.000 ₫
        </span>
        <a
          href="mailto:trashantuyettamshan@gmail.com"
          className="flex items-center gap-1.5 hover:text-[#C8A96A] transition-colors shrink-0"
        >
          <Mail size={11} />
          <span className="hidden md:inline">
            trashantuyettamshan@gmail.com
          </span>
        </a>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════
// HEADER
// ══════════════════════════════════════════════════════════════════════════
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    "Trang chủ",
    "Sản phẩm",
    "Câu chuyện",
    "Di sản trà",
    "Blog",
    "Liên hệ",
  ];
  const scrollTo = (label) => {
    const map = {
      "Sản phẩm": "san-pham",
      "Câu chuyện": "cau-chuyen",
      "Di sản trà": "di-san",
      Blog: "blog",
      "Liên hệ": "lien-he",
    };
    const id = map[label];
    if (id) {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/96 backdrop-blur-md shadow-md"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="shrink-0">
          <ImageWithFallback
            src={logoImg}
            alt="TÂM SHAN – Trà Shan Tuyết"
            className="h-12 w-auto object-contain"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollTo(l);
                setOpen(false);
              }}
              className="text-sm font-['Be_Vietnam_Pro'] text-[#1C2B1C] hover:text-[#355E3B] transition-colors relative group"
            >
              {l}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C8A96A] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button className="hidden sm:flex p-2 hover:text-[#355E3B] transition-colors">
            <Search size={17} />
          </button>
          <button className="hidden sm:flex p-2 hover:text-[#355E3B] transition-colors">
            <User size={17} />
          </button>
          <button className="p-2 hover:text-[#355E3B] transition-colors relative">
            <ShoppingCart size={17} />
            <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-[#C8A96A] text-white text-[8px] rounded-full flex items-center justify-center font-bold">
              0
            </span>
          </button>
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-1.5 bg-[#355E3B] text-white text-sm px-5 py-2.5 rounded-full hover:bg-[#2a4c2f] transition-colors font-['Be_Vietnam_Pro'] font-medium"
          >
            Mua ngay
          </a>
          <button
            className="lg:hidden p-2"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-[#EAE6DC] px-4 py-5">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l}
                href="#"
                onClick={() => setOpen(false)}
                className="text-[#1C2B1C] font-['Be_Vietnam_Pro'] border-b border-[#EAE6DC] pb-3 text-sm"
              >
                {l}
              </a>
            ))}
            <a
              href="#"
              className="mt-1 text-center bg-[#355E3B] text-white py-3 rounded-full font-['Be_Vietnam_Pro'] font-medium"
            >
              Mua ngay
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

// ══════════════════════════════════════════════════════════════════════════
// HERO
// ══════════════════════════════════════════════════════════════════════════
function HeroSection() {
  return (
    <section className="relative min-h-[88vh] bg-[#F5F1E8] overflow-hidden flex items-center">
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-[#E8CFCF]/40 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#355E3B]/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT – text */}
        <div className="flex flex-col gap-7 order-2 lg:order-1">
          <Label>Trà Shan Tuyết Tây Bắc cổ thụ</Label>

          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl xl:text-[5.5rem] font-normal text-[#1C2B1C]">
            TINH HOA
            <br />
            <span className="text-[#355E3B]">SHAN TUYẾT</span>
          </h1>
          <p className="font-['Cormorant_Garamond'] text-2xl md:text-3xl italic text-[#6B7B5E] -mt-3">
            Trọn vẹn hương vị Việt
          </p>

          <p className="font-['Be_Vietnam_Pro'] text-[#6B7B5E] leading-relaxed max-w-lg text-sm md:text-base">
            Trà Shan Tuyết cổ thụ kết hợp với hoa nhài Hà Nội
            tươi thơm và hoa hồng cổ SaPa quý hiếm — tinh túy từ
            núi rừng Tây Bắc, ấm áp trong từng câu chuyện gia
            đình.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <div>
              <div className="font-['Cormorant_Garamond'] text-3xl font-bold text-[#355E3B]">
                190.000 ₫
              </div>
              <div className="text-[10px] tracking-widest text-[#6B7B5E] font-['Be_Vietnam_Pro'] uppercase">
                / Hộp (80g)
              </div>
            </div>
            <div className="w-px h-10 bg-[#C8A96A]/40" />
            <div>
              <div className="font-['Cormorant_Garamond'] text-3xl font-bold text-[#C8A96A]">
                350.000 ₫
              </div>
              <div className="text-[10px] tracking-widest text-[#6B7B5E] font-['Be_Vietnam_Pro'] uppercase">
                / Combo (2 × 80g)
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() =>
                document
                  .getElementById("san-pham")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-2 bg-[#355E3B] text-white px-7 py-3.5 rounded-full hover:bg-[#2a4c2f] transition-all shadow-lg shadow-[#355E3B]/20 font-['Be_Vietnam_Pro'] font-medium"
            >
              Khám phá sản phẩm <ChevronRight size={15} />
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("cau-chuyen")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-2 border border-[#355E3B]/60 text-[#355E3B] px-7 py-3.5 rounded-full hover:bg-[#355E3B]/5 transition-all font-['Be_Vietnam_Pro'] font-medium"
            >
              Câu chuyện của chúng tôi
            </button>
          </div>

          <div className="flex flex-wrap gap-5 pt-1">
            {[
              "100% tự nhiên",
              "Hái thủ công",
              "Không phụ gia",
            ].map((b) => (
              <span
                key={b}
                className="flex items-center gap-1.5 text-xs text-[#6B7B5E] font-['Be_Vietnam_Pro']"
              >
                <CheckCircle
                  size={12}
                  className="text-[#355E3B]"
                />
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT – banner image, full, no crop */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative w-full max-w-[560px]">
            <div className="absolute -inset-6 bg-gradient-to-br from-[#355E3B]/15 to-[#C8A96A]/10 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/60">
              <ImageWithFallback
                src={bannerImg}
                alt="TÂM SHAN – Trà Shan Tuyết Hoa Nhài & Hoa Hồng Cổ SaPa"
                className="w-full h-auto block"
              />
            </div>
            <div className="absolute -bottom-5 left-4 bg-white rounded-xl shadow-xl px-4 py-2.5 ring-1 ring-[#EAE6DC]">
              <div className="font-['Cormorant_Garamond'] text-sm font-bold text-[#355E3B]">
                Hoa Nhài Hà Nội
              </div>
              <div className="text-[10px] text-[#6B7B5E] font-['Be_Vietnam_Pro']">
                Jasmine Shan Tea
              </div>
            </div>
            <div className="absolute -top-5 right-4 bg-[#355E3B] rounded-xl shadow-xl px-4 py-2.5">
              <div className="font-['Cormorant_Garamond'] text-sm font-bold text-[#C8A96A]">
                Hoa Hồng Cổ SaPa
              </div>
              <div className="text-[10px] text-white/60 font-['Be_Vietnam_Pro']">
                Mrs. B. R. Cant Rose Shan tuyết tea
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════
// BRAND STORY
// ══════════════════════════════════════════════════════════════════════════
function BrandStorySection() {
  return (
    <section
      id="cau-chuyen"
      className="bg-white py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Image – full, no crop */}
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-[#F5F1E8]">
            <ImageWithFallback
              src={combo4Img}
              alt="Bộ quà tặng TÂM SHAN – combo trà Hoa Nhài và Hoa Hồng Cổ"
              className="w-full h-auto block"
            />
          </div>
          <div className="self-end bg-[#355E3B] text-white rounded-2xl px-6 py-4 shadow-lg inline-flex items-center gap-4">
            <div>
              <div className="font-['Cormorant_Garamond'] text-4xl font-bold leading-none">
                100+
              </div>
              <div className="text-[10px] tracking-[0.2em] text-[#C8A96A] mt-1 font-['Be_Vietnam_Pro'] uppercase">
                Năm cổ thụ
              </div>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-6">
          <Label>Câu chuyện thương hiệu</Label>
          <Heading>
            CÂU CHUYỆN
            <br />
            TÂM SHAN
          </Heading>
          <div className="w-10 h-0.5 bg-[#C8A96A]" />
          <div className="flex flex-col gap-4 text-[#6B7B5E] font-['Be_Vietnam_Pro'] text-sm leading-loose">
            <p>
              Tâm Shan bắt đầu từ tình yêu dành cho trà Shan
              Tuyết cổ thụ – loại trà được sinh trưởng tự nhiên
              trên những đỉnh núi cao Tây Bắc, nơi mây, sương và
              thời gian cùng tạo nên một hương vị đặc biệt không
              thể sao chép.
            </p>
            <p>
              Chúng tôi tin rằng giá trị của Shan Tuyết không
              chỉ nằm ở vị trà đậm đà và hậu ngọt sâu, mà còn ở
              những phút giây bình yên mà một tách trà mang lại.
              Bằng sự kết hợp giữa trà Shan Tuyết cổ thụ cùng
              hoa hồng cổ và hoa nhài, Tâm Shan tạo nên những
              trải nghiệm thưởng trà hài hòa giữa truyền thống
              và hiện đại.
            </p>
            <p>
              Với sứ mệnh gìn giữ và lan tỏa giá trị trà Việt,
              Tâm Shan luôn theo đuổi năm giá trị cốt lõi: Chân
              thật – Chất lượng – Gìn giữ bản sắc Việt – Kết nối
              – Bền vững.
              <br />
              Tâm Shan – Trọn vị trà, tròn chuyện nhà.
            </p>
          </div>
          <button className="self-start flex items-center gap-2 text-[#355E3B] font-['Be_Vietnam_Pro'] font-semibold border-b-2 border-[#355E3B] pb-0.5 hover:gap-4 transition-all">
            Đọc thêm <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════
// CORE VALUES
// ══════════════════════════════════════════════════════════════════════════
const values = [
  {
    icon: <Leaf size={26} />,
    title: "Chân thật",
    desc: "Tôn trọng nguyên bản từ nguồn gốc trà Shan Tuyết đến hương vị tự nhiên, không pha tạp, không đánh đổi chất lượng.",
  },
  {
    icon: <Heart size={26} />,
    title: "Chất lượng",
    desc: "Cam kết mang đến những sản phẩm trà được tuyển chọn kỹ lưỡng, đảm bảo tinh khiết, an toàn và ổn định trong từng trải nghiệm.",
  },
  {
    icon: <Sprout size={26} />,
    title: "Gìn giữ bản sắc Việt",
    desc: "Trân trọng và lan tỏa giá trị văn hóa trà Việt, đặc biệt là tinh hoa trà Shan Tuyết cổ thụ của núi rừng Tây Bắc.",
  },
  {
    icon: <Users size={26} />,
    title: "Kết nối",
    desc: "Tạo ra những khoảnh khắc gắn kết giữa con người với con người thông qua từng tách trà, từ gia đình đến cộng đồng.",
  },
  {
    icon: <Users size={26} />,
    title: "Bền vững",
    desc: "Phát triển hài hòa với thiên nhiên và cộng đồng địa phương, hướng đến giá trị lâu dài cho cả người trồng trà và người thưởng trà.",
  },
];

function CoreValuesSection() {
  return (
    <section className="bg-[#F5F1E8] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Label>Giá trị cốt lõi</Label>
          <Heading>GIÁ TRỊ CỐT LÕI</Heading>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 flex flex-col gap-4 shadow-sm hover:shadow-lg transition-shadow border border-[#EAE6DC] group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#355E3B]/10 flex items-center justify-center text-[#355E3B] group-hover:bg-[#355E3B] group-hover:text-white transition-colors">
                {v.icon}
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-xl font-bold text-[#1C2B1C]">
                {v.title}
              </h3>
              <p className="text-[#6B7B5E] font-['Be_Vietnam_Pro'] text-sm leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════
// PRODUCTS
// ══════════════════════════════════════════════════════════════════════════
const products = [
  {
    img: hoaHongCoImg,
    name: "Trà Shan Tuyết Hoa Hồng Cổ SaPa",
    sub: "Mrs. B. R. Cant Rose Shan tuyết tea",
    price: "190.000 ₫",
    weight: "80g",
    desc: "Trà Shan Tuyết cổ thụ kết hợp với hoa hồng cổ SaPa quý hiếm. Vị trà đậm đà, hương hồng nhẹ nhàng lãng mạn.",
    badge: "Hoa Hồng Cổ",
    badgeCls: "bg-rose-50 text-rose-700",
  },
  {
    img: hoaNhaiImg,
    name: "Trà Shan Tuyết Hoa Nhài",
    sub: "Jasmine Shan Tea",
    price: "190.000 ₫",
    weight: "80g",
    desc: "Trà Shan Tuyết cổ thụ ướp cùng hoa nhài Hà Nội tươi thơm. Hương hoa quyện cùng vị trà thanh tao, nhẹ nhàng.",
    badge: "Hoa Nhài",
    badgeCls: "bg-blue-50 text-blue-700",
  },
];

function ProductSection() {
  return (
    <section id="san-pham" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Label>Sản phẩm đặc trưng</Label>
          <Heading>SẢN PHẨM NỔI BẬT</Heading>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((p, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden border border-[#EAE6DC] bg-[#F5F1E8] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Product image – full, no crop */}
              <div className="overflow-hidden bg-[#F5F1E8]">
                <ImageWithFallback
                  src={p.img}
                  alt={p.name}
                  className="w-full h-auto block group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-['Be_Vietnam_Pro'] font-semibold ${p.badgeCls}`}
                  >
                    {p.badge}
                  </span>
                  <span className="text-[10px] text-[#6B7B5E] font-['Be_Vietnam_Pro'] border border-[#EAE6DC] px-2.5 py-0.5 rounded-full bg-white">
                    Khối lượng tịnh: {p.weight}
                  </span>
                </div>
                <div>
                  <h3 className="font-['Cormorant_Garamond'] text-2xl font-bold text-[#1C2B1C] leading-snug">
                    {p.name}
                  </h3>
                  <p className="text-[#C8A96A] text-[11px] font-['Be_Vietnam_Pro'] italic mt-0.5">
                    {p.sub}
                  </p>
                </div>
                <p className="text-[#6B7B5E] font-['Be_Vietnam_Pro'] text-sm leading-relaxed">
                  {p.desc}
                </p>
                <div className="flex items-center justify-between pt-2 mt-auto">
                  <div>
                    <span className="font-['Cormorant_Garamond'] text-2xl font-bold text-[#355E3B]">
                      {p.price}
                    </span>
                    <span className="text-[#6B7B5E] text-xs font-['Be_Vietnam_Pro'] ml-1">
                      / hộp
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 border border-[#355E3B] text-[#355E3B] rounded-full text-xs font-['Be_Vietnam_Pro'] hover:bg-[#355E3B] hover:text-white transition-colors">
                      Chi tiết
                    </button>
                    <button className="px-4 py-2 bg-[#355E3B] text-white rounded-full text-xs font-['Be_Vietnam_Pro'] hover:bg-[#2a4c2f] transition-colors flex items-center gap-1.5">
                      <ShoppingCart size={12} /> Thêm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════
// COMBO – 4 ảnh bố cục 2×2 đẹp, không cắt ảnh
// ══════════════════════════════════════════════════════════════════════════
function ComboSection() {
  return (
    <section className="bg-[#355E3B] py-20 md:py-28 relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        {/* 4-image grid: 2×2, all images full aspect ratio */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src={combo1Img}
              alt="TÂM SHAN Combo – sản phẩm trên bàn cẩm thạch"
              className="w-full h-auto block"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src={combo2Img}
              alt="TÂM SHAN Combo – cận cảnh hộp trà"
              className="w-full h-auto block"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src={combo3Img}
              alt="TÂM SHAN Combo – cầm trên tay"
              className="w-full h-auto block"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src={combo4Img}
              alt="TÂM SHAN Combo – bộ quà tặng sang trọng"
              className="w-full h-auto block"
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-6 text-white">
          <div className="inline-flex">
            <span className="bg-[#C8A96A] text-[#1C2B1C] text-[10px] font-['Be_Vietnam_Pro'] font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.2em]">
              ⭐ BEST SELLER
            </span>
          </div>
          <Label>Ưu đãi đặc biệt</Label>
          <Heading light>
            TÂM SHAN
            <br />
            COMBO
          </Heading>
          <div className="w-10 h-0.5 bg-[#C8A96A]" />

          <div className="flex flex-col gap-3 font-['Be_Vietnam_Pro'] text-sm">
            {[
              {
                name: "Trà Shan Tuyết Hoa Nhài",
                en: "Jasmine Shan Tea – 80g",
              },
              {
                name: "Trà Shan Tuyết Hoa Hồng Cổ SaPa",
                en: "Mrs. B. R. Cant Rose Shan tuyết tea – 80g",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 text-white/90"
              >
                <CheckCircle
                  size={15}
                  className="text-[#C8A96A] shrink-0 mt-0.5"
                />
                <div>
                  <div>{item.name}</div>
                  <div className="text-white/50 text-xs italic">
                    {item.en}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex items-end gap-4">
            <div>
              <div className="text-white/40 text-sm font-['Be_Vietnam_Pro'] line-through">
                380.000 ₫
              </div>
              <div className="font-['Cormorant_Garamond'] text-5xl font-bold text-[#C8A96A] leading-none mt-1">
                350.000 ₫
              </div>
            </div>
            <span className="bg-rose-500 text-white text-[10px] font-['Be_Vietnam_Pro'] font-bold px-3 py-1.5 rounded-full mb-1">
              Tiết kiệm 30.000 ₫
            </span>
          </div>

          <button className="self-start flex items-center gap-2 bg-[#C8A96A] text-[#1C2B1C] px-8 py-4 rounded-full font-['Be_Vietnam_Pro'] font-bold text-base hover:bg-[#b8996a] transition-colors shadow-xl">
            Mua Combo ngay <ShoppingCart size={17} />
          </button>
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════
// FLASH SALE
// ══════════════════════════════════════════════════════════════════════════
function FlashSaleSection() {
  const t = useCountdown(FLASH_TARGET);
  return (
    <section className="bg-[#1C2B1C] py-16 md:py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg,#C8A96A 0,#C8A96A 1px,transparent 0,transparent 50%)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-8">
        <div>
          <span className="text-[#C8A96A] text-[10px] tracking-[0.4em] uppercase font-['Be_Vietnam_Pro'] font-medium">
            ⚡ Ưu đãi có hạn
          </span>
          <h2 className="font-['Cormorant_Garamond'] text-6xl md:text-8xl font-bold text-white leading-none mt-2">
            FLASH SALE
          </h2>
          <p className="font-['Cormorant_Garamond'] text-3xl italic text-[#C8A96A] mt-1">
            01 / 07 / 2026
          </p>
          <p className="text-white/50 font-['Be_Vietnam_Pro'] text-sm mt-3 max-w-sm mx-auto">
            Ưu đãi đặc biệt mừng ngày ra mắt — giảm giá độc
            quyền cho đơn Combo đầu tiên.
          </p>
        </div>

        <div className="flex items-start gap-3 sm:gap-5">
          <Digit v={t.d} label="Ngày" />
          <span className="font-['Cormorant_Garamond'] text-4xl text-[#C8A96A] font-bold mt-3">
            :
          </span>
          <Digit v={t.h} label="Giờ" />
          <span className="font-['Cormorant_Garamond'] text-4xl text-[#C8A96A] font-bold mt-3">
            :
          </span>
          <Digit v={t.m} label="Phút" />
          <span className="font-['Cormorant_Garamond'] text-4xl text-[#C8A96A] font-bold mt-3">
            :
          </span>
          <Digit v={t.s} label="Giây" />
        </div>

        <button className="flex items-center gap-2 bg-[#C8A96A] text-[#1C2B1C] px-10 py-4 rounded-full font-['Be_Vietnam_Pro'] font-bold text-base hover:bg-[#b8996a] transition-colors shadow-2xl">
          Đặt mua ngay <ArrowRight size={17} />
        </button>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════
// TEA HERITAGE TIMELINE
// ══════════════════════════════════════════════════════════════════════════
const steps = [
  {
    icon: <Leaf size={20} />,
    title: "Rừng trà cổ thụ",
    desc: "Chè Shan Tuyết trăm năm tuổi trên núi cao Lào Cai, trong làn sương mù mát lạnh.",
  },
  {
    icon: <Sprout size={20} />,
    title: "Thu hoạch thủ công",
    desc: "Người trồng trà Lào Cai hái từng búp chè một, giữ trọn dưỡng chất và tinh hoa tự nhiên.",
  },
  {
    icon: <Droplets size={20} />,
    title: "Tuyển chọn hoa",
    desc: "Hoa nhài Hà Nội và hoa hồng cổ SaPa được chọn kỹ vào sáng sớm, hương thơm nhất.",
  },
  {
    icon: <Clock size={20} />,
    title: "Ướp hương truyền thống",
    desc: "Ướp trà cùng hoa qua 7–10 lớp theo phương pháp truyền thống, hương thấm đều sâu.",
  },
  {
    icon: <Package size={20} />,
    title: "Đóng gói tinh tế",
    desc: "Hộp trà sang trọng, bảo quản hương vị toàn vẹn — thích hợp làm quà biếu tặng.",
  },
  {
    icon: <Heart size={20} />,
    title: "Trải nghiệm thưởng trà",
    desc: "Mỗi tách mang câu chuyện núi rừng Tây Bắc đến bàn nhà bạn.",
  },
];

function TeaHeritageSection() {
  return (
    <section
      id="di-san"
      className="bg-[#F5F1E8] py-20 md:py-28"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Label>Di sản trà Việt</Label>
          <Heading>HÀNH TRÌNH TỪ NÚI RỪNG</Heading>
        </div>
        <div className="flex flex-col gap-0">
          {steps.map((s, i) => (
            <div key={i} className="flex gap-6 group">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#355E3B] text-white flex items-center justify-center shadow-md shrink-0 group-hover:bg-[#C8A96A] transition-colors">
                  {s.icon}
                </div>
                {i < steps.length - 1 && (
                  <div
                    className="w-px flex-1 bg-[#C8A96A]/30 my-1"
                    style={{ minHeight: 32 }}
                  />
                )}
              </div>
              <div className="pb-8 flex-1">
                <div className="bg-white rounded-2xl p-5 border border-[#EAE6DC] shadow-sm group-hover:border-[#355E3B]/30 group-hover:shadow-md transition-all">
                  <h3 className="font-['Cormorant_Garamond'] text-xl font-bold text-[#1C2B1C] mb-1">
                    {s.title}
                  </h3>
                  <p className="text-[#6B7B5E] font-['Be_Vietnam_Pro'] text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════
// BREWING GUIDE
// ══════════════════════════════════════════════════════════════════════════
const brew = [
  {
    n: "01",
    icon: <Droplets size={26} />,
    title: "Tráng ấm & chén",
    desc: "Tráng ấm và chén bằng nước nóng để làm ấm dụng cụ trà trước khi pha.",
    en: "Rinse teapot with hot water before brewing.",
  },
  {
    n: "02",
    icon: <Clock size={26} />,
    title: "Cho trà vào ấm",
    desc: "Cho 5g trà vào ấm. Cho khoảng 100ml nước sôi ~90°C vào ấm trà.",
    en: "Add 5g of tea into the pot. Pour about 100ml of boiling water at 90°C.",
  },
  {
    n: "03",
    icon: <Heart size={26} />,
    title: "Ủ trà & thưởng thức",
    desc: "Ủ trà khoảng 25–30 giây cho lần đầu. Bỏ hết nước trà ra chén và thưởng thức. Có thể pha nhiều lần.",
    en: "Steep for 25–30 seconds. Pour into cup and enjoy. Can be re-steeped multiple times.",
  },
];

function BrewingGuideSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Label>Hướng dẫn pha trà</Label>
          <Heading>CÁCH PHA TRÀ SHAN TUYẾT</Heading>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {brew.map((b, i) => (
            <div
              key={i}
              className="relative bg-[#F5F1E8] rounded-2xl p-8 border border-[#EAE6DC] group hover:border-[#355E3B]/30 hover:shadow-lg transition-all"
            >
              <div className="absolute top-6 right-6 font-['Cormorant_Garamond'] text-7xl font-bold text-[#355E3B]/[0.08] group-hover:text-[#355E3B]/[0.15] transition-colors select-none">
                {b.n}
              </div>
              <div className="relative z-10 flex flex-col gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#355E3B] text-white flex items-center justify-center shadow-md">
                  {b.icon}
                </div>
                <h3 className="font-['Cormorant_Garamond'] text-2xl font-bold text-[#1C2B1C]">
                  {b.title}
                </h3>
                <p className="text-[#6B7B5E] font-['Be_Vietnam_Pro'] text-sm leading-relaxed">
                  {b.desc}
                </p>
                <p className="text-[#6B7B5E]/60 font-['Be_Vietnam_Pro'] text-xs italic leading-relaxed">
                  {b.en}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-5 border border-[#EAE6DC]">
            <div className="text-[10px] uppercase tracking-widest text-[#C8A96A] font-['Be_Vietnam_Pro'] font-semibold mb-2">
              Thành phần
            </div>
            <p className="text-[#6B7B5E] font-['Be_Vietnam_Pro'] text-sm leading-relaxed">
              Trà Shan Tuyết{" "}
              <strong className="text-[#355E3B]">85%</strong> ·
              Hoa nhài / Hoa hồng cổ{" "}
              <strong className="text-[#355E3B]">15%</strong>
            </p>
            <p className="text-[#6B7B5E]/60 text-xs font-['Be_Vietnam_Pro'] italic mt-1">
              Natural Shan Tuyết Tea 85% · Natural Flowers 15%
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-[#EAE6DC]">
            <div className="text-[10px] uppercase tracking-widest text-[#C8A96A] font-['Be_Vietnam_Pro'] font-semibold mb-2">
              Bảo quản
            </div>
            <p className="text-[#6B7B5E] font-['Be_Vietnam_Pro'] text-sm leading-relaxed">
              Nơi khô ráo, thoáng mát, tránh ánh sáng mặt trời.
              Đóng kín sau khi sử dụng.
            </p>
            <p className="text-[#6B7B5E]/60 text-xs font-['Be_Vietnam_Pro'] italic mt-1">
              Store in cool, dry place. Seal firmly after
              opening.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════
// REVIEWS
// ══════════════════════════════════════════════════════════════════════════
const reviews = [
  {
    name: "Nguyễn Thị Lan",
    loc: "Hà Nội",
    text: "Trà hoa nhài thơm lắm, uống buổi sáng tỉnh người hẳn. Hộp quà đẹp, mua tặng mẹ mà mẹ thích lắm. Sẽ order tiếp!",
    init: "NL",
    bg: "bg-[#355E3B]",
  },
  {
    name: "Trần Minh Khoa",
    loc: "TP. Hồ Chí Minh",
    text: "Combo hai hộp giá rất hợp lý. Trà hoa hồng cổ vị đậm, nhẹ hương hoa — rất thích hợp tiếp khách. Đóng gói chuyên nghiệp.",
    init: "MK",
    bg: "bg-[#C8A96A]",
  },
  {
    name: "Lê Thu Hương",
    loc: "Đà Nẵng",
    text: "Lần đầu uống Shan Tuyết cổ thụ, thực sự ấn tượng. Hương thơm tự nhiên, vị ngọt hậu. TÂM SHAN làm trà Việt thật đẳng cấp!",
    init: "TH",
    bg: "bg-[#E8CFCF]",
  },
];

function ReviewsSection() {
  const [active, setActive] = useState(0);
  return (
    <section className="bg-[#F5F1E8] py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Label>Khách hàng nói gì</Label>
          <Heading>ĐÁNH GIÁ CỦA KHÁCH HÀNG</Heading>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className={`bg-white rounded-2xl p-7 border cursor-pointer transition-all duration-300 ${
                i === active
                  ? "border-[#355E3B] shadow-xl scale-[1.02]"
                  : "border-[#EAE6DC] hover:border-[#C8A96A]/50 shadow-sm"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-full ${r.bg} flex items-center justify-center font-['Cormorant_Garamond'] font-bold text-sm shrink-0 text-white`}
                >
                  {r.init}
                </div>
                <div>
                  <div className="font-['Be_Vietnam_Pro'] font-semibold text-[#1C2B1C] text-sm">
                    {r.name}
                  </div>
                  <div className="text-[#6B7B5E] text-xs font-['Be_Vietnam_Pro']">
                    {r.loc}
                  </div>
                </div>
              </div>
              <StarRow />
              <p className="text-[#6B7B5E] font-['Be_Vietnam_Pro'] text-sm leading-relaxed mt-3 italic">
                "{r.text}"
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-8 bg-[#355E3B]"
                  : "w-2 bg-[#C8A96A]/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════
// BLOG
// ══════════════════════════════════════════════════════════════════════════
const posts = [
  {
    cat: "Hướng dẫn",
    title:
      "Cách pha Trà Shan Tuyết đúng chuẩn để có tách trà ngon nhất",
    date: "15/06/2026",
    read: "5 phút",
    accent: "bg-[#355E3B]/10",
  },
  {
    cat: "Sức khỏe",
    title: "Lợi ích sức khỏe của Trà Shan Tuyết cổ thụ Tây Bắc",
    date: "10/06/2026",
    read: "7 phút",
    accent: "bg-[#C8A96A]/15",
  },
  {
    cat: "Văn hóa",
    title:
      "Văn hóa trà Việt Nam — Hành trình nghìn năm lịch sử",
    date: "05/06/2026",
    read: "10 phút",
    accent: "bg-[#E8CFCF]/70",
  },
];

function BlogSection() {
  return (
    <section id="blog" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-14">
          <div>
            <Label>Kiến thức trà</Label>
            <Heading>BÀI VIẾT MỚI NHẤT</Heading>
          </div>
          <button className="flex items-center gap-2 text-[#355E3B] font-['Be_Vietnam_Pro'] font-semibold border-b border-[#355E3B] pb-0.5 hover:gap-4 transition-all text-sm">
            Xem tất cả <ArrowRight size={13} />
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <article key={i} className="group cursor-pointer">
              <div
                className={`${p.accent} rounded-2xl h-44 flex items-center justify-center mb-5 overflow-hidden`}
              >
                <Leaf size={44} className="text-[#355E3B]/25" />
              </div>
              <div className="flex items-center gap-2 text-[10px] text-[#6B7B5E] font-['Be_Vietnam_Pro'] mb-3 flex-wrap">
                <span className="bg-[#F5F1E8] px-2.5 py-0.5 rounded-full text-[#355E3B] font-semibold">
                  {p.cat}
                </span>
                <span>·</span>
                <span>{p.date}</span>
                <span>·</span>
                <span>{p.read} đọc</span>
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-xl font-bold text-[#1C2B1C] leading-snug group-hover:text-[#355E3B] transition-colors">
                {p.title}
              </h3>
              <button className="mt-3 flex items-center gap-1.5 text-[#355E3B] text-sm font-['Be_Vietnam_Pro'] font-medium group-hover:gap-3 transition-all">
                Đọc tiếp <ChevronRight size={13} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════
// CONTACT
// ══════════════════════════════════════════════════════════════════════════
function ContactSection() {
  return (
    <section
      id="lien-he"
      className="bg-[#F5F1E8] py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Label>Liên hệ</Label>
          <Heading>LIÊN HỆ VỚI CHÚNG TÔI</Heading>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#EAE6DC]">
            <h3 className="font-['Cormorant_Garamond'] text-2xl font-bold text-[#1C2B1C] mb-6">
              Gửi tin nhắn
            </h3>
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    label: "Họ và tên",
                    type: "text",
                    ph: "Nguyễn Văn A",
                  },
                  {
                    label: "Số điện thoại",
                    type: "tel",
                    ph: "0xxx xxx xxx",
                  },
                ].map((f) => (
                  <div
                    key={f.label}
                    className="flex flex-col gap-1.5"
                  >
                    <label className="text-[10px] uppercase tracking-wider text-[#6B7B5E] font-['Be_Vietnam_Pro'] font-medium">
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      placeholder={f.ph}
                      className="border border-[#EAE6DC] rounded-xl px-4 py-3 text-sm font-['Be_Vietnam_Pro'] bg-[#F5F1E8] focus:outline-none focus:border-[#355E3B] transition-colors"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase tracking-wider text-[#6B7B5E] font-['Be_Vietnam_Pro'] font-medium">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="border border-[#EAE6DC] rounded-xl px-4 py-3 text-sm font-['Be_Vietnam_Pro'] bg-[#F5F1E8] focus:outline-none focus:border-[#355E3B] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase tracking-wider text-[#6B7B5E] font-['Be_Vietnam_Pro'] font-medium">
                  Tin nhắn
                </label>
                <textarea
                  rows={4}
                  placeholder="Nội dung tin nhắn..."
                  className="border border-[#EAE6DC] rounded-xl px-4 py-3 text-sm font-['Be_Vietnam_Pro'] bg-[#F5F1E8] focus:outline-none focus:border-[#355E3B] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-[#355E3B] text-white py-3.5 rounded-xl font-['Be_Vietnam_Pro'] font-semibold hover:bg-[#2a4c2f] transition-colors"
              >
                Gửi tin nhắn
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <div className="mb-3">
                <ImageWithFallback
                  src={logoImg}
                  alt="TÂM SHAN – Trà Shan Tuyết"
                  className="h-14 w-auto object-contain"
                />
              </div>
              <p className="text-[#6B7B5E] font-['Be_Vietnam_Pro'] text-sm leading-relaxed">
                Tinh hoa Shan Tuyết – Trọn vẹn hương vị Việt.
                Chúng tôi luôn sẵn sàng tư vấn và hỗ trợ bạn
                chọn được tách trà ưng ý nhất.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {[
                {
                  icon: <Phone size={17} />,
                  label: "Hotline / Zalo",
                  val: "0349 067 765",
                  href: "tel:0349067765",
                },
                {
                  icon: <Mail size={17} />,
                  label: "Email",
                  val: "trashantuyettamshan@gmail.com",
                  href: "mailto:trashantuyettamshan@gmail.com",
                },
                {
                  icon: <Facebook size={17} />,
                  label: "Facebook",
                  val: "TÂM SHAN – Trà Shan Tuyết",
                  href: "https://www.facebook.com/share/18ntoKwuxi/?mibextid=wwXIfr",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={
                    item.href.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel="noreferrer"
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[#EAE6DC] hover:border-[#355E3B]/40 hover:shadow-sm transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#355E3B]/10 flex items-center justify-center text-[#355E3B] group-hover:bg-[#355E3B] group-hover:text-white transition-colors shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] text-[#6B7B5E] font-['Be_Vietnam_Pro'] uppercase tracking-wider">
                      {item.label}
                    </div>
                    <div className="text-[#1C2B1C] font-['Be_Vietnam_Pro'] font-medium text-sm mt-0.5 break-all">
                      {item.val}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════════════════
// FOOTER
// ══════════════════════════════════════════════════════════════════════════
function Footer() {
  const quickLinks = [
    "Trang chủ",
    "Sản phẩm",
    "Câu chuyện thương hiệu",
    "Di sản trà",
    "Blog",
    "Liên hệ",
  ];
  const support = [
    "Chính sách vận chuyển",
    "Chính sách đổi trả",
    "Chính sách bảo mật",
    "Điều khoản dịch vụ",
  ];

  return (
    <footer className="bg-[#1C2B1C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="mb-4 bg-white/90 rounded-xl inline-block px-3 py-2">
            <ImageWithFallback
              src={logoImg}
              alt="TÂM SHAN – Trà Shan Tuyết"
              className="h-12 w-auto object-contain"
            />
          </div>
          <p className="text-white/50 font-['Be_Vietnam_Pro'] text-sm leading-relaxed">
            Tinh hoa trà Shan Tuyết Tây Bắc, kết hợp với hoa
            nhài Hà Nội và hoa hồng cổ SaPa — mang câu chuyện
            núi rừng đến từng ngôi nhà Việt.
          </p>
          <div className="flex gap-3 mt-6">
            <a
              href="https://www.facebook.com/share/18ntoKwuxi/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#C8A96A] transition-colors"
            >
              <Facebook size={15} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-['Cormorant_Garamond'] text-base font-semibold text-[#C8A96A] mb-5 uppercase tracking-widest">
            Liên kết nhanh
          </h4>
          <ul className="flex flex-col gap-3">
            {quickLinks.map((l) => (
              <li key={l}>
                <a
                  href="#"
                  className="text-white/50 hover:text-[#C8A96A] transition-colors text-sm font-['Be_Vietnam_Pro'] flex items-center gap-1.5 group"
                >
                  <ChevronRight
                    size={11}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-['Cormorant_Garamond'] text-base font-semibold text-[#C8A96A] mb-5 uppercase tracking-widest">
            Hỗ trợ
          </h4>
          <ul className="flex flex-col gap-3">
            {support.map((l) => (
              <li key={l}>
                <a
                  href="#"
                  className="text-white/50 hover:text-[#C8A96A] transition-colors text-sm font-['Be_Vietnam_Pro'] flex items-center gap-1.5 group"
                >
                  <ChevronRight
                    size={11}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-['Cormorant_Garamond'] text-base font-semibold text-[#C8A96A] mb-5 uppercase tracking-widest">
            Liên hệ
          </h4>
          <div className="flex flex-col gap-4">
            {[
              {
                icon: <Phone size={14} />,
                label: "Hotline / Zalo",
                val: "0349 067 765",
                href: "tel:0349067765",
              },
              {
                icon: <Mail size={14} />,
                label: "Email",
                val: "trashantuyettamshan@gmail.com",
                href: "mailto:trashantuyettamshan@gmail.com",
              },
              {
                icon: <Facebook size={14} />,
                label: "Facebook",
                val: "TÂM SHAN",
                href: "https://www.facebook.com/share/18ntoKwuxi/?mibextid=wwXIfr",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={
                  item.href.startsWith("http")
                    ? "_blank"
                    : undefined
                }
                rel="noreferrer"
                className="flex items-start gap-3 group"
              >
                <span className="mt-0.5 text-[#C8A96A] shrink-0">
                  {item.icon}
                </span>
                <div>
                  <div className="text-[9px] text-white/35 font-['Be_Vietnam_Pro'] uppercase tracking-wider">
                    {item.label}
                  </div>
                  <div className="text-white/70 text-xs font-['Be_Vietnam_Pro'] group-hover:text-[#C8A96A] transition-colors mt-0.5 break-all">
                    {item.val}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-xs font-['Be_Vietnam_Pro']">
            © 2026 TÂM SHAN. All Rights Reserved.
          </p>
          <p className="text-[#C8A96A]/50 text-xs font-['Cormorant_Garamond'] italic">
            Tinh Hoa Shan Tuyết – Trọn Vẹn Hương Vị Việt
          </p>
        </div>
      </div>
    </footer>
  );
}

// ══════════════════════════════════════════════════════════════════════════
// ROOT
// ══════════════════════════════════════════════════════════════════════════
export default function App() {
  document.title = "TÂM SHAN – Trà Shan Tuyết";

  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Header />
      <main>
        <HeroSection />
        <BrandStorySection />
        <CoreValuesSection />
        <ProductSection />
        <ComboSection />
        <FlashSaleSection />
        <TeaHeritageSection />
        <BrewingGuideSection />
        <ReviewsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}