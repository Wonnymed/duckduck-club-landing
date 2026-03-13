"use client";

import { useState, useEffect, useRef } from "react";
import { Globe, ArrowRight, Menu, X, Check, ChevronDown, Compass, BookOpen, Handshake, Settings } from "lucide-react";
import Image from "next/image";

const GOLD = "#C9A84C";
const GOLD_DIM = "#A0832A";

// Community screenshots
const SCREEN1 = "/club-screen-1.png";
const SCREEN2 = "/club-screen-2.png";
const SCREEN3 = "/club-screen-3.png";

// ★ SWAP THESE: Replace with your converted JPG/PNG URLs

/* ─── Fade-in on scroll ─── */
function useFadeIn() {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); obs.disconnect(); } }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, style: { opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)" } };
}
function Fade({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, style } = useFadeIn();
  return <div ref={ref} style={{ ...style, transitionDelay: `${delay}ms` }} className={className}>{children}</div>;
}

/* ─── Logo: replace src with your real logo PNG when available ─── */
function Logo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 65 C30 65 25 58 28 48 C31 38 38 32 45 30 C48 29 50 26 49 22 C48 18 51 15 55 16 C59 17 60 21 58 24 C57 26 58 28 60 29 C66 31 72 36 74 44 C76 52 73 60 68 65 C63 70 55 72 50 72 C42 72 35 70 30 65Z" fill={GOLD} opacity="0.9"/>
      <circle cx="52" cy="24" r="2" fill="#0A0A0A"/>
      <rect x="46" y="76" width="8" height="16" rx="2" fill={GOLD} opacity="0.7"/>
      <rect x="42" y="86" width="6" height="3" rx="1" fill={GOLD} opacity="0.7"/>
      <rect x="52" y="83" width="6" height="3" rx="1" fill={GOLD} opacity="0.7"/>
      <circle cx="50" cy="50" r="47" stroke={GOLD} strokeWidth="1.5" opacity="0.25"/>
    </svg>
  );
}

/* ─── Shared UI ─── */
function Badge({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center text-xs tracking-widest uppercase px-4 py-1.5 rounded-full border" style={{ color: GOLD, borderColor: "rgba(201,168,76,0.3)", background: "rgba(201,168,76,0.06)", letterSpacing: "0.15em", fontFamily: "var(--serif)" }}>{children}</span>;
}
function GoldButton({ children, onClick, className = "" }: { children: React.ReactNode; onClick?: () => void; className?: string }) {
  return (
    <button onClick={onClick} className={`group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-sm tracking-wider uppercase transition-all duration-300 ${className}`}
      style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD_DIM})`, color: "#0A0A0A", fontFamily: "var(--serif)", letterSpacing: "0.12em", fontWeight: 600 }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 40px rgba(201,168,76,0.18), 0 8px 32px rgba(0,0,0,0.4)"}
      onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}>
      {children}<ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
    </button>
  );
}
function OutlineButton({ children, onClick, className = "" }: { children: React.ReactNode; onClick?: () => void; className?: string }) {
  return (
    <button onClick={onClick} className={`group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm tracking-wider uppercase transition-all duration-300 border w-full ${className}`}
      style={{ color: GOLD, borderColor: "rgba(201,168,76,0.3)", background: "transparent", fontFamily: "var(--serif)", letterSpacing: "0.12em" }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.background = "rgba(201,168,76,0.06)"; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)"; e.currentTarget.style.background = "transparent"; }}>
      {children}
    </button>
  );
}
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl transition-all duration-300 cursor-pointer" style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${open ? "rgba(201,168,76,0.15)" : "rgba(255,255,255,0.06)"}` }} onClick={() => setOpen(!open)}>
      <div className="flex items-center justify-between p-5 md:p-6">
        <h4 className="text-sm md:text-base font-medium pr-4" style={{ fontFamily: "var(--serif)", color: open ? GOLD : "white" }}>{q}</h4>
        <ChevronDown size={18} style={{ color: "rgba(255,255,255,0.3)", transform: open ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.3s", flexShrink: 0 }} />
      </div>
      {open && <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0"><p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{a}</p></div>}
    </div>
  );
}
function MobileNav({ open, onClose, onCheckout }: { open: boolean; onClose: () => void; onCheckout: (plan: string) => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex flex-col" style={{ background: "rgba(10,10,10,0.97)", backdropFilter: "blur(20px)" }}>
      <div className="flex justify-between items-center px-6 py-5">
        <div className="flex items-center gap-3"><Logo size={28} /><span className="text-white text-sm tracking-widest uppercase" style={{ fontFamily: "var(--serif)" }}>DuckDuck Club</span></div>
        <button onClick={onClose}><X size={22} className="text-white/60" /></button>
      </div>
      <div className="flex flex-col items-center justify-center flex-1 gap-8">
        {[["O clube", "#about"], ["Por dentro", "#inside"], ["Acesso", "#pricing"]].map(([l, h]) => (
          <a key={l} href={h} onClick={onClose} className="text-2xl text-white/70 hover:text-white transition-colors" style={{ fontFamily: "var(--serif)", letterSpacing: "0.1em" }}>{l}</a>
        ))}
        <GoldButton onClick={() => { onClose(); setTimeout(() => onCheckout("base"), 200); }}>Ver meu acesso</GoldButton>
      </div>
    </div>
  );
}

/* ═══ CHECKOUT MODAL ═══ */
const LANGS = ["English", "Spanish", "Italian", "French", "German", "Mandarin", "Korean", "Japanese"];
function CheckoutModal({ plan, onClose }: { plan: string; onClose: () => void }) {
  const premium = plan === "premium";
  const base = premium ? 29 : 15;
  const [poly, setPoly] = useState(false);
  const [langs, setLangs] = useState<string[]>([]);
  const free = premium ? 2 : 0;
  const paid = Math.max(0, langs.length - free);
  const total = base + paid * 5 + (poly ? 10 : 0);
  const brl = Math.round(total * 5.2);
  const toggle = (l: string) => setLangs(p => p.includes(l) ? p.filter(x => x !== l) : [...p, l]);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(12px)" }} onClick={onClose}>
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl" style={{ background: "#111", border: "1px solid rgba(255,255,255,0.08)" }} onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full" style={{ background: "rgba(255,255,255,0.05)" }}><X size={16} className="text-white/60" /></button>
        <div className="grid md:grid-cols-5">
          <div className="md:col-span-3 p-6 md:p-8">
            <div className="inline-flex items-center text-[10px] tracking-widest uppercase px-3 py-1 rounded-full mb-6" style={{ color: GOLD, background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.15)", letterSpacing: "0.15em" }}>Plano {premium ? "Premium" : "Base"}</div>
            <h3 className="text-2xl md:text-3xl font-light mb-4" style={{ fontFamily: "var(--serif)" }}>Personalize seu acesso</h3>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.45)" }}>
              {premium ? "Seus 2 primeiros idiomas já estão incluídos. Adicione extras ou o Polymarket Lab se quiser expandir." : "Nenhum idioma incluído neste plano. Escolha quantos quiser por +US$5/mês cada, e adicione o Polymarket Lab se desejar."}
            </p>
            <div className="rounded-xl p-5 mb-6" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex items-center justify-between">
                <div><div className="text-sm font-medium mb-1" style={{ fontFamily: "var(--serif)" }}>Polymarket Lab</div><div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>+US$10/mês · aprox. R$52/mês</div></div>
                <button onClick={() => setPoly(!poly)} className="w-12 h-6 rounded-full relative shrink-0 transition-all duration-300" style={{ background: poly ? GOLD : "rgba(255,255,255,0.1)" }}><div className="w-5 h-5 rounded-full absolute top-0.5 transition-all duration-300" style={{ background: poly ? "#0A0A0A" : "rgba(255,255,255,0.4)", left: poly ? "26px" : "2px" }} /></button>
              </div>
            </div>
            <div className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="text-sm font-medium mb-2" style={{ fontFamily: "var(--serif)" }}>{premium ? "Escolha seus idiomas" : "Idiomas disponíveis"}</div>
              <p className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.35)" }}>{premium ? "2 incluídos no plano. A partir do 3º: +US$5/mês cada." : "+US$5/mês por idioma · aprox. R$26/mês cada."}</p>
              {premium && <p className="text-xs mb-3" style={{ color: GOLD, opacity: 0.7 }}>{Math.min(langs.length, free)}/{free} incluídos selecionados</p>}
              <div className="flex flex-wrap gap-2 mt-3">
                {LANGS.map(l => { const on = langs.includes(l); return <button key={l} onClick={() => toggle(l)} className="text-xs px-4 py-2 rounded-full transition-all duration-200" style={{ background: on ? "rgba(201,168,76,0.12)" : "rgba(255,255,255,0.04)", border: `1px solid ${on ? "rgba(201,168,76,0.4)" : "rgba(255,255,255,0.08)"}`, color: on ? GOLD : "rgba(255,255,255,0.5)" }}>{l}</button>; })}
              </div>
            </div>
          </div>
          <div className="md:col-span-2 p-6 md:p-8" style={{ background: "rgba(255,255,255,0.02)", borderLeft: "1px solid rgba(255,255,255,0.06)" }}>
            <h4 className="text-sm font-medium mb-6" style={{ color: GOLD, fontFamily: "var(--serif)" }}>Seu acesso selecionado</h4>
            <div className="space-y-5">
              {[["Plano", premium ? "Premium" : "Base"], ["Inclui", premium ? "Tudo do Base + The Sanctum, Duck Tank, Black Book, Global Moves e 2 idiomas" : "The Portal, The Core, The Lounge e Geopolitics"], ["Idiomas", langs.length > 0 ? langs.join(", ") : "Nenhum"], ["Extensões", poly ? "Polymarket Lab" : "Nenhum"]].map(([label, value], i) => (
                <div key={label} className={i > 0 ? "pt-4" : ""} style={i > 0 ? { borderTop: "1px solid rgba(255,255,255,0.06)" } : {}}><div className="text-[10px] uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em" }}>{label}</div><div className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>{value}</div></div>
              ))}
            </div>
            <div className="mt-8 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="flex items-baseline justify-between mb-1"><span className="text-sm font-medium" style={{ color: GOLD, fontFamily: "var(--serif)" }}>Total mensal</span><span className="text-2xl font-light" style={{ fontFamily: "var(--serif)" }}>US${total}</span></div>
              <div className="text-xs mb-6" style={{ color: "rgba(255,255,255,0.3)" }}>Aprox. R${brl}/mês</div>
              <button className="w-full py-3.5 rounded-lg text-sm tracking-wider uppercase transition-all duration-300" style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD_DIM})`, color: "#0A0A0A", fontFamily: "var(--serif)", letterSpacing: "0.12em", fontWeight: 600 }} onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 30px rgba(201,168,76,0.15)"} onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}>Continuar para checkout</button>
              <p className="text-[10px] mt-4 leading-relaxed text-center" style={{ color: "rgba(255,255,255,0.25)" }}>Cobrança via Stripe. Valor pode variar conforme câmbio e taxas.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══ COMMUNITY SCREENSHOTS SHOWCASE ═══ */
function CommunityShowcase() {
  return (
    <div className="relative">
      {/* Glow behind */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(201,168,76,0.04) 0%, transparent 70%)" }} />
      
      {/* Phone mockup container */}
      <div className="flex justify-center gap-4 md:gap-6 items-end">
        {/* Screen 1 */}
        <div className="w-36 sm:w-44 md:w-52 rounded-2xl overflow-hidden shadow-2xl relative" style={{ border: "1px solid rgba(255,255,255,0.08)", transform: "rotate(-3deg) translateY(12px)" }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, transparent 60%, rgba(10,10,10,0.4) 100%)", zIndex: 2 }} />
          <Image src={SCREEN1} alt="The Portal & Core" width={390} height={844} className="w-full h-auto block" style={{ filter: "brightness(0.9)" }} />
        </div>
        {/* Screen 2 - center, larger */}
        <div className="w-44 sm:w-52 md:w-60 rounded-2xl overflow-hidden shadow-2xl relative" style={{ border: "1px solid rgba(201,168,76,0.15)", zIndex: 3 }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, transparent 60%, rgba(10,10,10,0.3) 100%)", zIndex: 2 }} />
          <Image src={SCREEN2} alt="The Sanctum & Duck Tank" width={390} height={844} className="w-full h-auto block" style={{ filter: "brightness(0.95)" }} />
        </div>
        {/* Screen 3 */}
        <div className="w-36 sm:w-44 md:w-52 rounded-2xl overflow-hidden shadow-2xl relative" style={{ border: "1px solid rgba(255,255,255,0.08)", transform: "rotate(3deg) translateY(12px)" }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, transparent 60%, rgba(10,10,10,0.4) 100%)", zIndex: 2 }} />
          <Image src={SCREEN3} alt="Languages & Polymarket" width={390} height={844} className="w-full h-auto block" style={{ filter: "brightness(0.9)" }} />
        </div>
      </div>
    </div>
  );
}

/* ═══ MAIN ═══ */
export default function DuckDuckClub() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [checkout, setCheckout] = useState<string | null>(null);
  useEffect(() => { const fn = () => setScrolled(window.scrollY > 40); window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn); }, []);

  return (
    <div className="min-h-screen" style={{ "--serif": "'Cormorant Garamond', serif", "--sans": "'DM Sans', sans-serif", background: "#0A0A0A", color: "white", fontFamily: "var(--sans)" }}>
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}><div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] rounded-full" style={{ background: "radial-gradient(circle, rgba(201,168,76,0.03) 0%, transparent 70%)" }} /><div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] rounded-full" style={{ background: "radial-gradient(circle, rgba(201,168,76,0.02) 0%, transparent 70%)" }} /></div>

      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} onCheckout={p => setCheckout(p)} />
      {checkout && <CheckoutModal plan={checkout} onClose={() => setCheckout(null)} />}

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-40 transition-all duration-500" style={{ background: scrolled ? "rgba(10,10,10,0.85)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none", borderBottom: scrolled ? "1px solid rgba(255,255,255,0.04)" : "1px solid transparent" }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3"><Logo size={30} /><span className="text-white text-sm tracking-widest uppercase hidden sm:inline" style={{ fontFamily: "var(--serif)", letterSpacing: "0.15em" }}>DuckDuck Club</span></div>
          <div className="hidden md:flex items-center gap-8">
            {[["O clube", "#about"], ["Por dentro", "#inside"], ["Acesso", "#pricing"]].map(([l, h]) => (
              <a key={l} href={h} className="text-xs tracking-widest uppercase transition-colors" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--serif)", letterSpacing: "0.15em" }} onMouseEnter={e => e.currentTarget.style.color = GOLD} onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}>{l}</a>
            ))}
          </div>
          <div className="hidden md:block">
            <button onClick={() => setCheckout("base")} className="text-xs tracking-widest uppercase px-5 py-2.5 rounded-lg transition-all duration-300" style={{ background: "rgba(201,168,76,0.1)", color: GOLD, border: "1px solid rgba(201,168,76,0.2)", fontFamily: "var(--serif)", letterSpacing: "0.12em" }} onMouseEnter={e => { e.currentTarget.style.background = "rgba(201,168,76,0.15)"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)"; }} onMouseLeave={e => { e.currentTarget.style.background = "rgba(201,168,76,0.1)"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)"; }}>Ver meu acesso</button>
          </div>
          <button className="md:hidden" onClick={() => setMenuOpen(true)}><Menu size={22} style={{ color: "rgba(255,255,255,0.6)" }} /></button>
        </div>
      </nav>

      {/* ═══ 1. HERO ═══ */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-20" style={{ zIndex: 1 }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none"><div className="absolute top-1/3 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.06), transparent)" }} /></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <Fade><Badge>Ecossistema Privado</Badge></Fade>
          <Fade delay={150}>
            <h1 className="mt-10 mb-7 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light leading-tight" style={{ fontFamily: "var(--serif)" }}>
              Antes de pensar em crescer financeiramente, <span className="italic" style={{ color: GOLD }}>aumente o seu valor no jogo.</span>
            </h1>
          </Fade>
          <Fade delay={300}>
            <p className="max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.45)" }}>
              DuckDuck Club é um ecossistema privado para quem quer mais direção, mais contexto e mais valor real. Aqui você constrói repertório internacional, aprende idiomas, amplia networking e acessa temas como offshore, China import, geopolítica, investimentos, segurança digital e operação global.
            </p>
          </Fade>
          <Fade delay={450}><GoldButton onClick={() => setCheckout("base")} className="mx-auto">Ver meu acesso</GoldButton></Fade>
          <Fade delay={600}>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {["Idiomas para acesso global", "Network, deals e matchmaking", "Offshore, China e geopolítica", "Privado, curado, sem ruído"].map(t => (
                <span key={t} className="text-xs px-4 py-2 rounded-full border" style={{ color: "rgba(255,255,255,0.45)", borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}>{t}</span>
              ))}
            </div>
          </Fade>
        </div>
      </section>

      {/* ═══ 2. O PROBLEMA ═══ */}
      <section id="about" className="relative py-20 md:py-28 px-6" style={{ zIndex: 1 }}>
        <div className="max-w-5xl mx-auto">
          <Fade>
            <Badge>O problema</Badge>
            <h2 className="mt-6 text-2xl sm:text-3xl md:text-5xl font-light leading-tight mb-6" style={{ fontFamily: "var(--serif)" }}>
              Ambição sem contexto, sem linguagem e sem estrutura vira <span className="italic" style={{ color: GOLD }}>desperdício de potencial.</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-10 max-w-3xl" style={{ color: "rgba(255,255,255,0.45)" }}>
              Muita gente quer crescer e acessar oportunidades maiores. Mas tenta fazer isso com informação espalhada, networking fraco, leitura rasa de cenário e pouca capacidade prática de execução. O resultado é viver ocupada, mas continuar jogando abaixo do próprio potencial.
            </p>
          </Fade>
          <div className="grid md:grid-cols-3 gap-5">
            {[{ t: "Muito conteúdo, pouca direção", d: "Sem leitura de cenário e geopolítica, a maioria reage tarde e decide no ruído." }, { t: "Muito potencial, pouco acesso", d: "Sem linguagem, repertório e as pessoas certas por perto, oportunidades simplesmente não chegam." }, { t: "Muita ambição, pouca estrutura", d: "Sem ferramentas, proteção e operações globais bem entendidas, o jogo fica mais caro e mais lento." }].map((item, i) => (
              <Fade key={item.t} delay={i * 100}>
                <div className="p-6 md:p-7 rounded-2xl h-full" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <h3 className="text-lg font-medium mb-3" style={{ fontFamily: "var(--serif)" }}>{item.t}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{item.d}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. POR DENTRO ═══ */}
      <section id="inside" className="relative py-20 md:py-28 px-6" style={{ zIndex: 1 }}>
        <div className="max-w-5xl mx-auto">
          <Fade>
            <Badge>Por dentro</Badge>
            <h2 className="mt-6 text-2xl sm:text-3xl md:text-5xl font-light leading-tight mb-4" style={{ fontFamily: "var(--serif)" }}>O que você encontra <span className="italic" style={{ color: GOLD }}>ao entrar</span></h2>
            <p className="text-sm md:text-base leading-relaxed mb-12 max-w-3xl" style={{ color: "rgba(255,255,255,0.45)" }}>
              DuckDuck Club não é mais um espaço de consumo passivo. É um ecossistema construído para aumentar seu valor em quatro frentes — e dar tração real a cada uma delas.
            </p>
          </Fade>
          <div className="grid md:grid-cols-2 gap-5">
            {[{ icon: Compass, title: "Direção", desc: "Leitura de cenário, geopolítica, sinal e contexto para antecipar movimentos e tomar decisões com mais clareza.", tags: "cenário global · geopolítica · leitura macro · timing" }, { icon: BookOpen, title: "Valor pessoal", desc: "Idiomas, repertório, ferramentas e autodidatismo para elevar seu valor, ampliar alcance e fortalecer utilidade prática.", tags: "idiomas · repertório · tools · cultura · learning stack" }, { icon: Handshake, title: "Valor relacional", desc: "Networking, deals, matchmaking e parcerias para aproximar você de operadores, investidores e oportunidades alinhadas.", tags: "networking · deals · matchmaking · parceiros estratégicos" }, { icon: Settings, title: "Valor operacional", desc: "Offshore, China import, crypto OPSEC e estruturas internacionais para operar com mais inteligência, proteção e execução real.", tags: "offshore · China import · OPSEC · estruturas globais" }].map((item, i) => (
              <Fade key={item.title} delay={i * 80}>
                <div className="p-6 md:p-8 rounded-2xl h-full" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.15)" }}><item.icon size={18} style={{ color: GOLD }} /></div>
                  <h3 className="text-lg md:text-xl font-medium mb-3" style={{ fontFamily: "var(--serif)" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>{item.desc}</p>
                  <p className="text-xs" style={{ color: GOLD, opacity: 0.45 }}>{item.tags}</p>
                </div>
              </Fade>
            ))}
          </div>
          <Fade delay={350}><div className="mt-14 text-center"><GoldButton onClick={() => setCheckout("premium")} className="mx-auto">Quero acessar o clube</GoldButton></div></Fade>
        </div>
      </section>

      {/* ═══ 4. COMMUNITY SCREENSHOTS ═══ */}
      <section className="relative py-20 md:py-28 px-6 overflow-hidden" style={{ zIndex: 1 }}>
        <div className="max-w-5xl mx-auto">
          <Fade>
            <div className="text-center mb-12">
              <Badge>O ambiente</Badge>
              <h2 className="mt-6 text-2xl sm:text-3xl md:text-5xl font-light leading-tight mb-4" style={{ fontFamily: "var(--serif)" }}>
                Um ecossistema{" "}<span className="italic" style={{ color: GOLD }}>real e organizado.</span>
              </h2>
              <p className="text-sm md:text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                Canais estruturados, inteligência curada e espaços que funcionam — do onboarding ao nível mais operacional.
              </p>
            </div>
          </Fade>
          <Fade delay={200}>
            <CommunityShowcase />
          </Fade>
          <Fade delay={350}>
            <p className="text-center mt-10 text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
              Plataforma via app e desktop · Acesso imediato após checkout
            </p>
          </Fade>
        </div>
      </section>

      {/* ═══ 5. SOBRE O CRIADOR (with photo placeholder) ═══ */}
      <section className="relative py-20 md:py-28 px-6" style={{ zIndex: 1 }}>
        <div className="max-w-5xl mx-auto">
          <Fade>
            <Badge>Sobre o criador</Badge>
            <div className="mt-8 grid md:grid-cols-5 gap-10 md:gap-14 items-start">
              {/* Photo */}
              <div className="md:col-span-2 flex justify-center md:justify-start">
                <div className="relative">
                  <div className="w-52 h-64 md:w-60 md:h-72 rounded-2xl overflow-hidden relative" style={{ border: "1px solid rgba(201,168,76,0.15)" }}>
                    <Image src="/founder-photo.jpg" alt="Founder" fill className="object-cover object-top" />
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "#0A0A0A", border: "1px solid rgba(201,168,76,0.2)" }}><Globe size={16} style={{ color: GOLD }} /></div>
                </div>
              </div>
              {/* Text */}
              <div className="md:col-span-3">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight mb-6" style={{ fontFamily: "var(--serif)" }}>
                  A DuckDuck Club nasceu da interseção entre <span className="italic" style={{ color: GOLD }}>contexto global, operação real e construção de valor.</span>
                </h2>
                <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Depois de viver entre países, operar em ambientes diferentes e perceber como idioma, geopolítica, estrutura, network e execução mudam o nível do jogo, eu decidi reunir tudo isso em um ecossistema privado. A DuckDuck Club foi criada para quem quer deixar de depender de improviso, ruído e informação solta — e começar a operar com mais clareza, mais linguagem e mais capacidade prática.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {["Direção para entender o jogo antes de agir", "Valor pessoal para ampliar utilidade e repertório", "Valor relacional para se aproximar das pessoas certas", "Valor operacional para transformar contexto em movimento real"].map(item => (
                    <div key={item} className="flex items-start gap-2.5 p-3 rounded-lg" style={{ background: "rgba(255,255,255,0.02)" }}><div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: GOLD }} /><span className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{item}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* ═══ 6. PARA VOCÊ SE... ═══ */}
      <section className="relative py-20 md:py-28 px-6" style={{ zIndex: 1 }}>
        <div className="max-w-5xl mx-auto">
          <Fade><h2 className="text-2xl sm:text-3xl md:text-5xl font-light leading-tight mb-12" style={{ fontFamily: "var(--serif)" }}>Isso é para você se<span style={{ color: GOLD }}>...</span></h2></Fade>
          <div className="grid md:grid-cols-2 gap-5">
            <Fade>
              <div className="p-6 md:p-8 rounded-2xl h-full" style={{ background: "rgba(201,168,76,0.02)", border: "1px solid rgba(201,168,76,0.1)" }}>
                <div className="space-y-5">
                  {["Quer aumentar o próprio valor antes de aumentar o tamanho do jogo", "Valoriza contexto, curadoria e repertório internacional", "Quer construir networking útil — não só consumir conteúdo", "Quer operar melhor com mais direção, linguagem e alavancas"].map(item => (
                    <div key={item} className="flex items-start gap-3"><Check size={16} className="mt-0.5 shrink-0" style={{ color: GOLD }} /><span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>{item}</span></div>
                  ))}
                </div>
              </div>
            </Fade>
            <Fade delay={100}>
              <div className="p-6 md:p-8 rounded-2xl h-full" style={{ background: "rgba(255,255,255,0.015)", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="space-y-5">
                  {["Procura hype, promessa fácil ou atalhos mágicos", "Quer só assistir sem aplicar", "Prefere volume em vez de sinal", "Não valoriza contexto, profundidade e execução"].map(item => (
                    <div key={item} className="flex items-start gap-3"><X size={16} className="mt-0.5 shrink-0" style={{ color: "rgba(255,255,255,0.2)" }} /><span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.3)" }}>{item}</span></div>
                  ))}
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* ═══ 7. PRICING ═══ */}
      <section id="pricing" className="relative py-20 md:py-28 px-6" style={{ zIndex: 1 }}>
        <div className="max-w-5xl mx-auto">
          <Fade>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-light leading-tight mb-3" style={{ fontFamily: "var(--serif)" }}>Escolha seu nível de <span className="italic" style={{ color: GOLD }}>acesso</span></h2>
            <p className="text-sm md:text-base leading-relaxed mb-12" style={{ color: "rgba(255,255,255,0.45)" }}>Entre pelo core ou desbloqueie a camada mais valiosa do clube.</p>
          </Fade>
          <div className="grid md:grid-cols-2 gap-5">
            <Fade>
              <div className="p-6 md:p-8 rounded-2xl h-full flex flex-col" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <Badge>Base</Badge>
                <h3 className="mt-5 text-sm mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>A camada de direção e posicionamento</h3>
                <div className="mt-3 mb-1"><span className="text-3xl md:text-4xl font-light" style={{ fontFamily: "var(--serif)" }}>US$15</span><span className="text-sm ml-1" style={{ color: "rgba(255,255,255,0.35)" }}>/mês</span></div>
                <p className="text-xs mb-6" style={{ color: "rgba(255,255,255,0.25)" }}>aprox. R$79/mês</p>
                <div className="space-y-3 mb-8 flex-1">
                  {["The Portal", "The Core", "The Lounge", "Geopolitics"].map(item => (<div key={item} className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.25)" }} /><span className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>{item}</span></div>))}
                </div>
                <OutlineButton onClick={() => setCheckout("base")}>Escolher Base</OutlineButton>
              </div>
            </Fade>
            <Fade delay={100}>
              <div className="p-6 md:p-8 rounded-2xl h-full flex flex-col relative overflow-hidden" style={{ background: "rgba(201,168,76,0.03)", border: "1px solid rgba(201,168,76,0.2)" }}>
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
                <span className="inline-flex items-center text-xs tracking-widest uppercase px-4 py-1.5 rounded-full border self-start" style={{ color: GOLD, borderColor: GOLD, background: "rgba(201,168,76,0.1)", letterSpacing: "0.15em", fontFamily: "var(--serif)" }}>Premium</span>
                <h3 className="mt-5 text-sm mb-1" style={{ color: "rgba(201,168,76,0.7)" }}>A camada mais valiosa do clube</h3>
                <div className="mt-3 mb-1"><span className="text-3xl md:text-4xl font-light" style={{ fontFamily: "var(--serif)", color: GOLD }}>US$29</span><span className="text-sm ml-1" style={{ color: "rgba(201,168,76,0.5)" }}>/mês</span></div>
                <p className="text-xs mb-6" style={{ color: "rgba(201,168,76,0.35)" }}>aprox. R$149/mês</p>
                <div className="space-y-3 mb-8 flex-1">
                  {["Tudo do Base", "The Sanctum", "Duck Tank", "Black Book", "Global Moves", "2 idiomas incluídos"].map(item => (<div key={item} className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full" style={{ background: GOLD }} /><span className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>{item}</span></div>))}
                </div>
                <GoldButton onClick={() => setCheckout("premium")} className="w-full">Escolher Premium</GoldButton>
              </div>
            </Fade>
          </div>
          <Fade delay={200}>
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>Cobrança internacional via Stripe. Valor final pode variar conforme câmbio.</p>
              <div className="w-1 h-1 rounded-full hidden sm:block" style={{ background: "rgba(255,255,255,0.15)" }} />
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>Teste por 7 dias. Cancele com facilidade.</p>
            </div>
          </Fade>
        </div>
      </section>

      {/* ═══ 8. FAQ ═══ */}
      <section className="relative py-20 md:py-28 px-6" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto">
          <Fade><h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight mb-10" style={{ fontFamily: "var(--serif)" }}>Perguntas <span className="italic" style={{ color: GOLD }}>frequentes</span></h2></Fade>
          <div className="space-y-3">
            {[{ q: "O que exatamente eu recebo no Base?", a: "Acesso ao core do ecossistema: leitura de cenário, contexto, sinal e networking leve, sem ruído. Inclui The Portal, The Core, The Lounge e Geopolitics." }, { q: "O que muda no Premium?", a: "O Premium abre a camada mais valiosa do clube: The Sanctum, Duck Tank, Black Book, Global Moves e 2 idiomas incluídos. É onde vive a parte mais estratégica e operacional." }, { q: "Os 2 idiomas do Premium são escolhidos na entrada?", a: "Sim. Ao entrar no Premium, você define seus 2 idiomas. Extras podem ser adicionados depois por US$5/mês cada." }, { q: "Posso adicionar idiomas no Base?", a: "Sim. No Base, idiomas funcionam como extensão opcional por +US$5/mês cada." }, { q: "O que é o Polymarket Lab?", a: "Camada opcional para acompanhar leituras, teses e sinais ligados a prediction markets dentro da lógica do ecossistema. +US$10/mês." }, { q: "Como funciona o acesso depois do pagamento?", a: "Após confirmação, você segue para a ativação do acesso conforme o plano e extensões escolhidas." }, { q: "O pagamento é mensal?", a: "Sim. Recorrente via Stripe, com cobrança internacional." }, { q: "Posso cancelar?", a: "Sim. Acesso simples, sem fricção." }].map((item, i) => (
              <Fade key={i} delay={i * 40}><FAQItem q={item.q} a={item.a} /></Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 9. FINAL CTA ═══ */}
      <section className="relative py-28 md:py-40 px-6" style={{ zIndex: 1 }}>
        <div className="absolute inset-0 pointer-events-none"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full" style={{ background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 60%)" }} /></div>
        <div className="max-w-3xl mx-auto text-center relative">
          <Fade><Logo size={48} /></Fade>
          <Fade delay={100}><h2 className="mt-8 text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-6" style={{ fontFamily: "var(--serif)" }}>Seu próximo nível começa <span className="italic" style={{ color: GOLD }}>pelo ambiente certo.</span></h2></Fade>
          <Fade delay={200}><p className="text-sm md:text-base max-w-lg mx-auto leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.4)" }}>Privado. Curado. Internacional.<br />Feito para quem quer operar com mais contexto, mais conexões e mais capacidade prática.</p></Fade>
          <Fade delay={300}><GoldButton onClick={() => setCheckout("premium")} className="mx-auto">Ver meu acesso</GoldButton></Fade>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-10 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.04)", zIndex: 1 }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3"><Logo size={22} /><span className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.25)", fontFamily: "var(--serif)", letterSpacing: "0.15em" }}>DuckDuck Club</span></div>
          <div className="flex gap-6">{["Termos", "Privacidade", "Contato"].map(item => (<a key={item} href="#" className="text-xs transition-colors" style={{ color: "rgba(255,255,255,0.2)" }} onMouseEnter={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"} onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.2)"}>{item}</a>))}</div>
          <div className="text-xs" style={{ color: "rgba(255,255,255,0.15)" }}>© 2025 DuckDuck Club</div>
        </div>
      </footer>
    </div>
  );
}
