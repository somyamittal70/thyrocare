import { useState, useEffect, useRef } from "react";
import {
  Stethoscope,
  FlaskConical,
  Home,
  Pill,
  BarChart3,
  UserCheck,
  ArrowRight,
  CheckCircle2,
  Star,
  MapPin,
  Phone,
  Mail,
  Menu,
  X,
  ChevronRight,
  Shield,
  Award,
  Zap,
  HeartPulse,
} from "lucide-react";

const NAV_LINKS = ["Home", "Services", "About", "Packages", "Contact"];

const SERVICES = [
  {
    icon: Stethoscope,
    title: "Thyroid Profile (T3, T4, TSH)",
    desc: "Comprehensive thyroid function testing with accurate, fast results. Detect hypothyroidism, hyperthyroidism, and more.",
    img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80",
    tag: "Most Booked",
  },
  {
    icon: FlaskConical,
    title: "Autoimmune Panel",
    desc: "Anti-TPO & Anti-TG antibody tests to identify autoimmune thyroid disorders like Hashimoto's disease.",
    img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&q=80",
    tag: "Advanced",
  },
  {
    icon: Home,
    title: "Home Sample Collection",
    desc: "Book a certified phlebotomist to collect samples from your home at a time of your convenience.",
    img: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80",
    tag: "Convenient",
  },
  {
    icon: Pill,
    title: "Thyroid Wellness Plans",
    desc: "Curated wellness packages designed to monitor and manage your thyroid health over time.",
    img: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=600&q=80",
    tag: "Wellness",
  },
  {
    icon: BarChart3,
    title: "Digital Reports",
    desc: "Receive detailed, physician-reviewed digital reports within 24 hours directly to your inbox.",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80",
    tag: "24hr Delivery",
  },
  {
    icon: UserCheck,
    title: "Expert Consultation",
    desc: "Connect with endocrinologists and thyroid specialists for personalized care and treatment advice.",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
    tag: "Specialist",
  },
];

const PACKAGES = [
  {
    name: "Basic Thyroid",
    price: "₹499",
    tests: ["TSH", "T3", "T4"],
    highlight: false,
  },
  {
    name: "Advanced Thyroid",
    price: "₹999",
    tests: ["TSH", "T3", "T4", "Free T3", "Free T4", "Anti-TPO"],
    highlight: true,
  },
  {
    name: "Thyroid Complete",
    price: "₹1,799",
    tests: [
      "Full Thyroid Panel",
      "Anti-TG",
      "Vitamin D",
      "Iron Studies",
      "CBC",
    ],
    highlight: false,
  },
];

const STATS = [
  { value: "2M+", label: "Tests Conducted", icon: FlaskConical },
  { value: "500+", label: "Collection Centers", icon: MapPin },
  { value: "24hr", label: "Report Delivery", icon: Zap },
  { value: "98%", label: "Accuracy Rate", icon: Award },
];

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    location: "Delhi",
    text: "ThyroCare made managing my hypothyroidism so easy. Home collection, quick reports, and expert advice all in one place!",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    location: "Mumbai",
    text: "Incredibly professional service. The digital reports are detailed and my doctor was impressed with the quality.",
    rating: 5,
  },
  {
    name: "Anita Verma",
    location: "Bengaluru",
    text: "Affordable packages and very reliable results. I've been using ThyroCare for 2 years now. Highly recommended!",
    rating: 5,
  },
];

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Address",
    value: " D-37/1, MIDC, Turbhe, Opp. Sandoz, Navi Mumbai - 400 703",
  },
  { icon: Phone, label: "Phone", value: "+91-9870666333" },
  { icon: Mail, label: "Email", value: "thyrocarebisrakh@gmail.com" },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

export default function ThyroCare() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
  const [statsRef, statsVisible] = useInView();
  const [servRef, servVisible] = useInView();
  const [pkgRef, pkgVisible] = useInView();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="font-sans overflow-x-hidden"
      style={{ background: "#f4f6fb", color: "#1e2535" }}
    >
      {/* ── NAVBAR ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(244,246,251,0.95)"
            : "rgba(255, 255, 255, 0.95)",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          boxShadow: scrolled ? "0 1px 32px rgba(47,55,73,0.10)" : "none",
          borderBottom: scrolled ? "1px solid rgba(47,55,73,0.08)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="./logo.png" alt="ThyroCare Logo" className="w-50 h-17" />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="nav-link text-sm font-medium transition-colors"
                style={{ color: "#4a5270" }}
                onMouseEnter={(e) => (e.target.style.color = "#2f3749")}
                onMouseLeave={(e) => (e.target.style.color = "#4a5270")}
              >
                {link}
              </a>
            ))}

            <a
              href="#packages"
              className="btn-outline text-sm"
              style={{ padding: "9px 22px", fontSize: "13px" }}
            >
              Book Test
            </a>
            <a
              href="#contact"
              className="btn-primary text-sm"
              style={{ padding: "10px 24px", fontSize: "13px" }}
            >
              Get Started
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg"
            style={{ color: "#2f3749" }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{ maxHeight: menuOpen ? "400px" : "0" }}
        >
          <div
            className="px-6 pb-6 pt-2 flex flex-col gap-4"
            style={{
              background: "rgba(244,246,251,0.98)",
              borderTop: "1px solid rgba(47,55,73,0.08)",
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="py-2 text-sm font-medium border-b"
                style={{ color: "#2f3749", borderColor: "rgba(47,55,73,0.08)" }}
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary text-center justify-center mt-2"
              style={{ padding: "12px 24px" }}
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section
        id="home"
        className="relative w-full min-h-screen justify-center text-center flex items-center overflow-hidden hero-decorative"
      >
        <img
          src="./lab.jpg"
          alt="Medical lab"
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.45))",
          }}
        ></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 hero-overlay-bottom"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span
                className="w-2 h-2 rounded-full pulse-dot"
                style={{ background: "#f05f57", display: "inline-block" }}
              ></span>
              <span
                className="text-sm text-center font-bold uppercase tracking-widest"
                style={{ color: "#f05f57" }}
              >
                India's Leading Thyroid Lab
              </span>
            </div>
            <h1
              className="font-display text-5xl sm:text-6xl lg:text-[76px] font-black leading-tight mb-6"
              style={{
                color: "#fff",
                lineHeight: 1.08,
              }}
            >
              Your Thyroid
              <br />
              Health, <span className="gradient-text">Simplified</span>
            </h1>
            <p
              className="text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto text-center"
              style={{
                color: "rgba(255,255,255,0.9)",
              }}
            >
              Precise thyroid diagnostics with home collection, 24-hour digital
              reports, and expert consultations — all under one roof.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#packages" className="btn-primary">
                Book a Test <ArrowRight size={18} />
              </a>
              <a
                href="#services"
                className="border-2 border-white text-white rounded-full py-3 px-8 flex items-center gap-1.5 font-semibold text-sm transition-all duration-200 hover:bg-white hover:text-[#f05f57]"
              >
                Explore Services <ChevronRight size={18} />
              </a>
            </div>
            {/* Trust */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
              {[
                { icon: Shield, text: "NABL Accredited" },
                { icon: Award, text: "ISO 15189:2022" },
                { icon: HeartPulse, text: "2M+ Tests Done" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2"
                  style={{ color: "rgb(255, 255, 255)" }}
                >
                  <Icon size={15} style={{ color: "#f05f57" }} />
                  <span className="text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section
        style={{ background: "#2f3749", padding: "64px 0" }}
        ref={statsRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map(({ value, label, icon: Icon }, i) => (
              <div
                key={label}
                className={`stat-card-anim rounded-2xl p-6 text-center reveal reveal-delay-${i + 1} ${statsVisible ? "show" : ""}`}
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.10)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center"
                  style={{ background: "rgba(240,95,87,0.15)" }}
                >
                  <Icon size={22} style={{ color: "#f05f57" }} />
                </div>
                <div className="font-display text-4xl lg:text-5xl font-black gradient-text mb-1">
                  {value}
                </div>
                <div
                  className="text-sm font-medium"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section
        id="services"
        className="py-24"
        style={{ background: "#eef0f7" }}
        ref={servRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "#f05f57" }}
            >
              What We Offer
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-black mt-3 mb-4 navy-gradient-text">
              Comprehensive Thyroid Care
            </h2>
            <p
              className="text-lg max-w-xl mx-auto"
              style={{ color: "#6b7592" }}
            >
              From basic screening to advanced autoimmune panels — every aspect
              of thyroid health covered.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {SERVICES.map(({ icon: Icon, title, desc, img, tag }, i) => (
              <div
                key={i}
                className={`service-card rounded-3xl overflow-hidden reveal reveal-delay-${(i % 3) + 1} ${servVisible ? "show" : ""}`}
                style={{
                  background: "#ffffff",
                  boxShadow: "0 4px 32px rgba(47,55,73,0.07)",
                }}
                onMouseEnter={() => setHoveredService(i)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Image */}
                <div className="service-img relative h-48 overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(30,37,53,0.55), transparent)",
                    }}
                  ></div>
                  {/* Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="tag-badge">{tag}</span>
                  </div>
                  {/* Icon circle */}
                  <div
                    className="absolute bottom-3 right-3 w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      background: "rgba(255,255,255,0.95)",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
                    }}
                  >
                    <Icon size={20} style={{ color: "#f05f57" }} />
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3
                    className="font-bold text-lg mb-2"
                    style={{ color: "#1e2535" }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: "#6b7592" }}
                  >
                    {desc}
                  </p>
                  <div
                    className="flex items-center gap-1.5 font-semibold text-sm"
                    style={{ color: "#f05f57" }}
                  >
                    Learn more{" "}
                    <ArrowRight
                      size={15}
                      style={{
                        transition: "transform 0.2s",
                        transform:
                          hoveredService === i ? "translateX(4px)" : "none",
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24" style={{ background: "#f4f6fb" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80"
                  alt="Lab professionals"
                  className="w-full h-80 lg:h-[480px]"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                className="absolute -bottom-6 -right-6 rounded-2xl p-5 shadow-xl text-white"
                style={{
                  background: "linear-gradient(135deg,#f05f57,#d94e47)",
                  boxShadow: "0 8px 32px rgba(240,95,87,0.4)",
                }}
              >
                <p className="font-display text-3xl font-black">15+</p>
                <p className="text-sm font-medium opacity-90">
                  Years of Excellence
                </p>
              </div>
              <div
                className="absolute -top-6 -left-6 w-36 h-36 rounded-2xl overflow-hidden shadow-xl"
                style={{ border: "4px solid #f4f6fb" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=300&q=80"
                  alt="Equipment"
                  className="w-full h-full"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div>
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "#f05f57" }}
              >
                About ThyroCare
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-black mt-3 mb-6 leading-tight navy-gradient-text">
                Trusted by Millions,
                <br />
                Backed by Science
              </h2>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "#4a5270" }}
              >
                ThyroCare is India's pioneering thyroid diagnostic chain,
                established with a single mission: making accurate thyroid
                testing accessible, affordable, and convenient for every Indian.
              </p>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "#6b7592" }}
              >
                Our state-of-the-art NABL-accredited laboratories use
                cutting-edge technology to deliver precise results. With 500+
                collection centers and a dedicated home-sample team, we bring
                healthcare to your doorstep.
              </p>
              <div className="space-y-3.5">
                {[
                  "NABL & ISO 15189:2022 Certified Lab",
                  "Trained & Certified Phlebotomists",
                  "Physician-Reviewed Digital Reports",
                  "Pan-India Collection Network",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle2
                      size={20}
                      style={{ color: "#f05f57", flexShrink: 0 }}
                    />
                    <span
                      className="text-sm font-medium"
                      style={{ color: "#2f3749" }}
                    >
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section
        id="packages"
        className="py-24"
        style={{ background: "#2f3749" }}
        ref={pkgRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "#f05f57" }}
            >
              Pricing
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-black mt-3 mb-4 text-white">
              Simple, <span className="gradient-text">Transparent Pricing</span>
            </h2>
            <p
              className="text-lg max-w-xl mx-auto"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              No hidden costs. Choose the package that fits your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {PACKAGES.map((pkg, i) => (
              <div
                key={i}
                className={`pkg-card relative rounded-3xl p-8 flex flex-col reveal reveal-delay-${i + 1} ${pkgVisible ? "show" : ""} ${pkg.highlight ? "text-white" : ""}`}
                style={
                  pkg.highlight
                    ? {
                        background: "linear-gradient(135deg,#f05f57,#d44840)",
                        boxShadow: "0 24px 72px rgba(240,95,87,0.45)",
                        transform: "scale(1.04)",
                      }
                    : {
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.10)",
                      }
                }
              >
                {pkg.highlight && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest"
                    style={{ background: "white", color: "#f05f57" }}
                  >
                    Most Popular
                  </div>
                )}
                <h3
                  className="font-bold text-xl mb-1"
                  style={{
                    color: pkg.highlight ? "white" : "rgba(255,255,255,0.9)",
                  }}
                >
                  {pkg.name}
                </h3>
                <div
                  className="font-display text-5xl font-black my-4"
                  style={{ color: pkg.highlight ? "white" : "#f05f57" }}
                >
                  {pkg.price}
                </div>
                <p
                  className="text-sm mb-6"
                  style={{
                    color: pkg.highlight
                      ? "rgba(255,255,255,0.75)"
                      : "rgba(255,255,255,0.4)",
                  }}
                >
                  One-time test · Home collection included
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.tests.map((test) => (
                    <li
                      key={test}
                      className="flex items-center gap-2.5 text-sm"
                    >
                      <CheckCircle2
                        size={16}
                        style={{
                          color: pkg.highlight ? "white" : "#f05f57",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          color: pkg.highlight
                            ? "white"
                            : "rgba(255,255,255,0.7)",
                        }}
                      >
                        {test}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full font-bold py-3.5 rounded-2xl text-sm transition-all duration-200"
                  style={
                    pkg.highlight
                      ? { background: "white", color: "#f05f57" }
                      : {
                          background: "linear-gradient(135deg,#f05f57,#d44840)",
                          color: "white",
                          boxShadow: "0 6px 20px rgba(240,95,87,0.3)",
                        }
                  }
                >
                  Book This Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="works" className="py-24" style={{ background: "#eef0f7" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "#f05f57" }}
            >
              Process
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-black mt-3 navy-gradient-text">
              How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Book Online",
                desc: "Select your test package and schedule a convenient time slot in minutes.",
              },
              {
                icon: Home,
                title: "Home Collection",
                desc: "Our certified phlebotomist arrives at your doorstep on time.",
              },
              {
                icon: FlaskConical,
                title: "Lab Processing",
                desc: "Samples are processed in our NABL-certified laboratory with precision.",
              },
              {
                icon: BarChart3,
                title: "Get Report",
                desc: "Receive your detailed digital report within 24 hours.",
              },
            ].map((item, i) => (
              <div key={i} className="relative text-center group">
                {i < 3 && (
                  <div
                    className="hidden lg:block absolute top-8 left-[calc(50%+3rem)] h-px"
                    style={{
                      width: "calc(100% - 3rem)",
                      borderTop: "2px dashed rgba(240,95,87,0.25)",
                    }}
                  ></div>
                )}
                <div className="relative inline-flex mb-4">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto icon-bg group-hover:scale-110 transition-transform"
                    style={{
                      background: "white",
                      boxShadow: "0 4px 20px rgba(47,55,73,0.08)",
                    }}
                  >
                    <item.icon size={26} style={{ color: "#f05f57" }} />
                  </div>
                  <span
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: "#f05f57" }}
                  >
                    {i + 1}
                  </span>
                </div>
                <h3
                  className="font-bold text-lg mb-2"
                  style={{ color: "#1e2535" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#6b7592" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24" style={{ background: "#f4f6fb" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{ color: "#f05f57" }}
            >
              Testimonials
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-black mt-3 navy-gradient-text">
              What Our Patients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="testi-card rounded-2xl p-7"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(47,55,73,0.07)",
                  boxShadow: "0 4px 24px rgba(47,55,73,0.06)",
                }}
              >
                <div className="flex mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      fill="#f05f57"
                      style={{ color: "#f05f57" }}
                    />
                  ))}
                </div>
                <p
                  className="text-sm leading-relaxed mb-6 italic"
                  style={{ color: "#4a5270" }}
                >
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white"
                    style={{
                      background: "linear-gradient(135deg,#f05f57,#d44840)",
                    }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <p
                      className="font-semibold text-sm"
                      style={{ color: "#1e2535" }}
                    >
                      {t.name}
                    </p>
                    <p className="text-xs" style={{ color: "#9aa0b5" }}>
                      {t.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#f05f57,#c94040)" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)",
          }}
        ></div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 80% 50%, rgba(0,0,0,0.08) 0%, transparent 60%)",
          }}
        ></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
            Take Control of Your Thyroid Health Today
          </h2>
          <p
            className="text-lg mb-10 max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Book a test now and get results in 24 hours. Home collection
            available across 500+ cities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#packages"
              className="font-bold px-10 py-4 rounded-full text-base transition-all duration-200 flex items-center gap-2"
              style={{
                background: "white",
                color: "#f05f57",
                boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
            >
              Book a Test Now <ArrowRight size={18} />
            </a>
            <a
              href="tel:+919870666333"
              className="font-semibold px-10 py-4 rounded-full text-base transition-all duration-200 text-white flex items-center gap-2"
              style={{ border: "2px solid rgba(255,255,255,0.5)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              <Phone size={18} /> Call: +91-9870666333
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24" style={{ background: "#eef0f7" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "#f05f57" }}
              >
                Get In Touch
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-black mt-3 mb-6 navy-gradient-text">
                We're Here To Help
              </h2>
              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "#6b7592" }}
              >
                Have questions about your thyroid health or our services? Reach
                out to our team of experts.
              </p>
              <div className="space-y-5">
                {CONTACT_INFO.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-12 h-12 icon-bg rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={20} style={{ color: "#f05f57" }} />
                    </div>
                    <div>
                      <p
                        className="text-xs font-bold uppercase tracking-wider mb-1"
                        style={{ color: "#f05f57" }}
                      >
                        {label}
                      </p>
                      <p className="text-sm" style={{ color: "#4a5270" }}>
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-3xl p-8"
              style={{
                background: "white",
                boxShadow: "0 8px 48px rgba(47,55,73,0.09)",
                border: "1px solid rgba(47,55,73,0.06)",
              }}
            >
              <h3
                className="font-bold text-xl mb-6"
                style={{ color: "#1e2535" }}
              >
                Send us a message
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["First Name", "Last Name"].map((lbl, i) => (
                    <div key={lbl}>
                      <label
                        className="block text-xs mb-1.5 uppercase tracking-wider font-semibold"
                        style={{ color: "#9aa0b5" }}
                      >
                        {lbl}
                      </label>
                      <input
                        type="text"
                        placeholder={i === 0 ? "Rahul" : "Sharma"}
                        className="w-full rounded-xl px-4 py-3 text-sm transition-all"
                        style={{
                          background: "#f4f6fb",
                          border: "1.5px solid rgba(47,55,73,0.1)",
                          color: "#1e2535",
                        }}
                      />
                    </div>
                  ))}
                </div>
                {[
                  { lbl: "Email", type: "email", ph: "thyrocarebisrakh@gmail.com" },
                  { lbl: "Phone", type: "tel", ph: "+91 9870666333" },
                ].map(({ lbl, type, ph }) => (
                  <div key={lbl}>
                    <label
                      className="block text-xs mb-1.5 uppercase tracking-wider font-semibold"
                      style={{ color: "#9aa0b5" }}
                    >
                      {lbl}
                    </label>
                    <input
                      type={type}
                      placeholder={ph}
                      className="w-full rounded-xl px-4 py-3 text-sm transition-all"
                      style={{
                        background: "#f4f6fb",
                        border: "1.5px solid rgba(47,55,73,0.1)",
                        color: "#1e2535",
                      }}
                    />
                  </div>
                ))}
                <div>
                  <label
                    className="block text-xs mb-1.5 uppercase tracking-wider font-semibold"
                    style={{ color: "#9aa0b5" }}
                  >
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your concern..."
                    className="w-full rounded-xl px-4 py-3 text-sm resize-none transition-all"
                    style={{
                      background: "#f4f6fb",
                      border: "1.5px solid rgba(47,55,73,0.1)",
                      color: "#1e2535",
                    }}
                  ></textarea>
                </div>
                <button
                  className="btn-primary w-full justify-center"
                  style={{ padding: "14px", fontSize: "14px" }}
                >
                  Send Message <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          background: "#2f3749",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          paddingTop: "64px",
          paddingBottom: "32px",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/logo.png"
                  alt="ThyroCare Logo"
                  className="w-25 h-10 bg-white rounded-full p-1"
                />
              </div>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                India's most trusted thyroid diagnostic network. NABL
                accredited. 500+ centers.
              </p>
              {/* Social Icons */}
              <div className="flex gap-3">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/thyrocareindia/"
                  className="social-icon w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                  aria-label="Instagram"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(255,255,255,0.6)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/Thyrocare/"
                  className="social-icon w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                  aria-label="Facebook"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(255,255,255,0.6)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>

                {/* Twitter */}
                <a
                  href="https://x.com/thyrocare/"
                  className="social-icon w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                  aria-label="Twitter"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(255,255,255,0.6)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4.36a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.67 2c-2.5 0-4.51 2.01-4.51 4.5 0 ." />
                    <path d="M5.64 8.09a13 13 0 0 1-9.48-4.8s-4 8 4.72 11a13 13 0 0 1-7.64 2.66c9.06 5.88 19.98 0 19.98-11.68a4.51 4.51 0 0 0-.11-.97A3.93 3.93 0 0 0 23 3z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://in.linkedin.com/company/thyrocare-technologies-ltd"
                  className="social-icon w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                  aria-label="LinkedIn"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(255,255,255,0.6)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2h-4v9H8V4h4v3zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" fill="rgba(255,255,255,0.6)" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/c/thyrocare"
                  className="social-icon w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                  aria-label="YouTube"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(255,255,255,0.6)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                    <polygon
                      points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
                      fill="rgba(255,255,255,0.6)"
                      stroke="none"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {[
              {
                title: "Services",
                links: [
                  { name: "TSH Test", url: "#services" },
                  { name: "T3 T4 Panel", url: "#services" },
                  { name: "Autoimmune Panel", url: "#services" },
                  { name: "Home Collection", url: "#services" },
                  { name: "Expert Consultation", url: "#services" },
                ],
              },
              {
                title: "Company",
                links: [
                  { name: "Home", url: "#home" },
                  { name: "About Us", url: "#about" },
                  { name: "Services", url: "#services" },
                  { name: "Packages", url: "#packages" },
                  { name: "Contact Us", url: "#contact" },
                ],
              },
              {
                title: "Support",
                links: [
                  { name: "Book a Test", url: "#works" },
                  { name: "Track Sample", url: "#works" },
                  { name: "Download Report", url: "#works" },
                  { name: "FAQs", url: "#works" },
                ],
              },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="font-bold text-sm mb-4 text-white">
                  {col.title}
                </h4>

                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.url}
                        className="text-sm transition-colors"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                        onMouseEnter={(e) => (e.target.style.color = "#f05f57")}
                        onMouseLeave={(e) =>
                          (e.target.style.color = "rgba(255,255,255,0.4)")
                        }
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
              © 2023 ThyroCare Diagnostics Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Developed by Debox Technology"].map(
                (link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-xs transition-colors"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                    onMouseEnter={(e) =>
                      (e.target.style.color = "rgba(255,255,255,0.6)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.color = "rgba(255,255,255,0.3)")
                    }
                  >
                    {link}
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
