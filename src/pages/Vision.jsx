﻿import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import jprLogo from "@/assets/jaisirlogo.png";

const COLORS = {
  bgDark: "#0B0B0D",
  bgCard: "#14161B",
  text: "#E8E8EC",
  gold: "#CDA434",
  blue: "#4169E1",
  subtext: "#B3B3B8",
  stroke: "#1F2128",
};

const Vision = () => {
  const [activePillar, setActivePillar] = useState(null);

  const pillarsLeft = [
    { icon: "fa-tooth", title: "Dentistry", desc: "Global leader in implantology and laser dentistry." },
    { icon: "fa-globe", title: "Entrepreneurship", desc: "Founder & CEO of multi-sector enterprises." },
    { icon: "fa-robot", title: "AI Innovation", desc: "Building next-gen AI assistants and platforms." },
    { icon: "fa-medal", title: "Leadership", desc: "Military discipline shaping global ventures." },
    { icon: "fa-cart-shopping", title: "Market", desc: "Curating premium marketplaces worldwide." },
  ];

  const pillarsRight = [
    { icon: "fa-city", title: "Real Estate", desc: "Designing eco-villages and smart cities." },
    { icon: "fa-graduation-cap", title: "Education", desc: "Mentoring future leaders and talents." },
    { icon: "fa-podcast", title: "Podcasts", desc: "Sharing culture and history via media." },
    { icon: "fa-seedling", title: "Philanthropy", desc: "Transforming communities with social projects." },
    { icon: "fa-chess-king", title: "Strategy", desc: "Architecting visions for societies and businesses." },
  ];

  const togglePillar = (title) => {
    setActivePillar((prev) => (prev === title ? null : title));
  };

  const renderPillarCard = (pillar) => {
    const isActive = activePillar === pillar.title;
    const cardStyle = {
      background: COLORS.bgCard,
      borderColor: isActive ? COLORS.gold : COLORS.stroke,
    };
    const baseClasses = "cursor-pointer rounded-lg border transition-transform duration-300 hover:-translate-y-1 flex items-center justify-center";
    const sizeClasses = isActive ? "min-h-[110px] px-4 py-4" : "min-h-[80px] px-3 py-2";

    return (
      <div
        key={pillar.title}
        role="button"
        tabIndex={0}
        onClick={() => togglePillar(pillar.title)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            togglePillar(pillar.title);
          }
        }}
        className={`${baseClasses} ${sizeClasses}`}
        style={cardStyle}
      >
        <div className="flex flex-col items-center justify-center gap-1 text-center">
          <i className={`fa-solid ${pillar.icon} text-xl`} style={{ color: COLORS.gold }}></i>
          <h3 className="text-base font-semibold">{pillar.title}</h3>
          {isActive && (
            <p className="text-xs mt-2 leading-relaxed" style={{ color: COLORS.subtext }}>
              {pillar.desc}
            </p>
          )}
        </div>
      </div>
    );
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: COLORS.bgDark, color: COLORS.text }}
    >
      {/* NAVBAR */}
      <nav
        className="fixed top-0 left-0 right-0 h-[70px] flex items-center justify-end px-6 border-b"
        style={{ background: COLORS.bgCard, borderColor: COLORS.stroke }}
      >
        <Button
          className="px-6 py-2 font-semibold"
          style={{ background: COLORS.gold, color: COLORS.bgDark }}
        >
          Login
        </Button>
      </nav>

      {/* HERO */}
      <main className="flex-1 mt-[70px] flex flex-col justify-between items-center text-center px-4 py-6">
        {/* Logo */}
        <div className="mb-6">
          <img
            src={jprLogo}
            alt="Logo"
            className="w-40 h-40 md:w-60 md:h-60 mx-auto object-contain"
          />
        </div>

        {/* Name + Taglines */}
        <div>
          <h1
            className="text-3xl md:text-5xl font-bold"
            style={{ color: COLORS.gold }}
          >
            Dr Jai Prathap Reddy
          </h1>
          <p className="text-lg md:text-xl mt-3" style={{ color: COLORS.subtext }}>
            Strategic partner to the world's visionaries
          </p>
          <p className="text-lg md:text-xl" style={{ color: COLORS.subtext }}>
            I do not chase scale. I sculpt legacy.
          </p>
        </div>

        {/* Pillars */}
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-5xl my-6">
          <div className="flex-1 flex flex-col gap-3">
            {pillarsLeft.map(renderPillarCard)}
          </div>
          <div className="flex-1 flex flex-col gap-3">
            {pillarsRight.map(renderPillarCard)}
          </div>
        </div>

        {/* CTA */}
        <div className="mb-6">
          <Button
            variant="outline"
            className="px-8 py-4 font-semibold text-lg border-2"
            style={{ borderColor: COLORS.gold, color: COLORS.gold, background: "transparent" }}
          >
            Signup
            <ArrowRight className="ml-2 inline h-5 w-5" />
          </Button>
        </div>
      </main>

      {/* FOOTER */}
      <footer
        className="h-20 flex flex-col justify-center items-center text-center text-sm"
        style={{ background: COLORS.bgCard, borderTop: `1px solid ${COLORS.stroke}`, color: COLORS.subtext }}
      >
        <div>
          <strong>Jai Reddy HQ</strong> | London, UK
        </div>
        <div>Email: hello@jaireddy.com | Phone: +44 123 456 789</div>
        <div className="flex gap-3 mt-1">
          <i className="fab fa-linkedin text-lg" style={{ color: COLORS.gold }}></i>
          <i className="fab fa-twitter text-lg" style={{ color: COLORS.gold }}></i>
          <i className="fab fa-facebook text-lg" style={{ color: COLORS.gold }}></i>
          <i className="fab fa-instagram text-lg" style={{ color: COLORS.gold }}></i>
        </div>
        <div className="mt-1">&copy; 2025 Dr Jai Prathap Reddy. All Rights Reserved.</div>
      </footer>
    </div>
  );
};

export default Vision;










