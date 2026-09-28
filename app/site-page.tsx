"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEventHandler,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";

const WHATSAPP_NUMBER = "5583996261313";
const MAP_URL = "https://maps.apple/p/39mq4P-Xu9vMbi";

const messages = {
  avaliacao: "Olá, Dr. Yuri! Gostaria de agendar uma avaliação.",
  facetas: "Olá, Dr. Yuri! Gostaria de agendar uma avaliação.",
  ortodontia: "Olá, Dr. Yuri! Gostaria de agendar uma avaliação.",
  clareamento: "Olá, Dr. Yuri! Gostaria de agendar uma avaliação.",
  proteses: "Olá, Dr. Yuri! Gostaria de agendar uma avaliação.",
  extracoes: "Olá, Dr. Yuri! Gostaria de agendar uma avaliação.",
};

function whatsappUrl(message: string) {
  const text = encodeURIComponent(message);
  return WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
    : `https://api.whatsapp.com/send?text=${text}`;
}

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 24 24"
      fill="none"
    >
      {diagonal ? (
        <>
          <path d="M7 17 17 7" />
          <path d="M8 7h9v9" />
        </>
      ) : (
        <>
          <path d="M5 12h14" />
          <path d="m14 7 5 5-5 5" />
        </>
      )}
    </svg>
  );
}

function WhatsAppMark() {
  return (
    <svg
      aria-hidden="true"
      className="whatsapp-mark"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M20.2 11.8a8.2 8.2 0 0 1-12.1 7.2L4 20l1.1-4a8.2 8.2 0 1 1 15.1-4.2Z" />
      <path d="M9 8.5c.3-.7.7-.7 1-.7h.4c.2 0 .4 0 .5.4l.8 1.8c.1.3.1.5-.1.7l-.6.7c-.2.2-.2.4 0 .7.5.9 1.2 1.6 2.1 2.1.3.2.5.2.7 0l.8-1c.2-.2.4-.3.7-.1l1.8.9c.3.2.4.3.4.5 0 .2-.2 1.2-.8 1.7-.5.5-1.2.8-2 .7-1.1-.1-2.6-.6-4.3-2.1-1.4-1.2-2.4-2.8-2.7-3.9-.3-1.1 0-2 .3-2.4Z" />
    </svg>
  );
}

function WhatsAppLink({
  message,
  children,
  className = "",
  ariaLabel,
  onClick,
}: {
  message: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </a>
  );
}

function BeforeAfter({
  before,
  after,
  label,
}: {
  before: string;
  after: string;
  label: string;
}) {
  const [position, setPosition] = useState(50);

  return (
    <div
      className="comparison"
      style={{ "--position": `${position}%` } as CSSProperties}
    >
      <img
        src={before}
        alt={`${label}: antes do tratamento`}
        className="comparison-image comparison-before"
        width="960"
        height="1280"
        loading="lazy"
      />
      <div className="comparison-after-wrap" aria-hidden="true">
        <img
          src={after}
          alt=""
          className="comparison-image comparison-after"
          width="960"
          height="1280"
          loading="lazy"
        />
      </div>
      <span className="comparison-label comparison-label-before">Antes</span>
      <span className="comparison-label comparison-label-after">Depois</span>
      <span className="comparison-handle" aria-hidden="true">
        <span>←</span>
        <span>→</span>
      </span>
      <input
        className="comparison-range"
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-label={`Comparar antes e depois: ${label}`}
      />
    </div>
  );
}

const case02Images = [
  {
    src: "/assets/caso-02-imagem-01.jpeg",
    alt: "Retrato da paciente sorrindo no Caso 02",
    width: 1702,
    height: 2560,
  },
  {
    src: "/assets/caso-02-imagem-02.jpeg",
    alt: "Retrato próximo da paciente sorrindo no Caso 02",
    width: 1021,
    height: 1536,
  },
  {
    src: "/assets/caso-02-imagem-03.jpeg",
    alt: "Retrato lateral da paciente no Caso 02",
    width: 1021,
    height: 1536,
  },
  {
    src: "/assets/caso-02-imagem-04.jpeg",
    alt: "Detalhe do sorriso da paciente no Caso 02",
    width: 1536,
    height: 802,
  },
];

const case03Images = [
  {
    src: "/assets/caso-03-imagem-01.jpeg",
    alt: "Fotografia do sorriso e do rosto do paciente no Caso 03",
    width: 960,
    height: 1280,
  },
  {
    src: "/assets/caso-03-imagem-02.jpeg",
    alt: "Fotografia clínica do paciente com afastador no Caso 03",
    width: 1280,
    height: 960,
  },
  {
    src: "/assets/caso-03-imagem-03.jpeg",
    alt: "Fotografia aproximada do sorriso do paciente no Caso 03",
    width: 1280,
    height: 960,
  },
];

const case04Images = [
  {
    src: "/assets/caso-04-imagem-01.jpeg",
    alt: "Primeira fotografia clínica do Caso 04",
    width: 1280,
    height: 960,
  },
  {
    src: "/assets/caso-04-imagem-02.jpeg",
    alt: "Segunda fotografia clínica do Caso 04",
    width: 1280,
    height: 960,
  },
  {
    src: "/assets/caso-04-imagem-03.jpeg",
    alt: "Fotografia clínica lateral do Caso 04",
    width: 864,
    height: 1536,
  },
];

function CaseGallery({
  images,
  caseLabel,
}: {
  images: typeof case02Images;
  caseLabel: string;
}) {
  const [index, setIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef<{ pointerId: number; x: number } | null>(null);
  const activeImage = images[index];

  const startDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "touch" && event.button !== 0) return;
    dragStart.current = { pointerId: event.pointerId, x: event.clientX };
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const moveDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStart.current?.pointerId !== event.pointerId) return;
    setDragOffset(event.clientX - dragStart.current.x);
  };

  const finishDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    const start = dragStart.current;
    if (!start || start.pointerId !== event.pointerId) return;

    const distance = event.clientX - start.x;
    if (Math.abs(distance) > 48) {
      setIndex((current) =>
        Math.max(0, Math.min(images.length - 1, current + (distance < 0 ? 1 : -1))),
      );
    }
    dragStart.current = null;
    setDragOffset(0);
    setIsDragging(false);
  };

  const cancelDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStart.current?.pointerId !== event.pointerId) return;
    dragStart.current = null;
    setDragOffset(0);
    setIsDragging(false);
  };

  return (
    <div className="case-gallery">
      <div
        className={`case-gallery-viewport${isDragging ? " is-dragging" : ""}`}
        style={{
          "--gallery-ratio": `${activeImage.width} / ${activeImage.height}`,
        } as CSSProperties}
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={finishDrag}
        onPointerCancel={cancelDrag}
        onDragStart={(event) => event.preventDefault()}
        aria-label={`Galeria de fotografias do ${caseLabel}. Arraste para navegar.`}
      >
        <div
          className="case-gallery-track"
          style={{ transform: `translate3d(calc(-${index * 100}% + ${dragOffset}px), 0, 0)` }}
        >
          {images.map((image) => (
            <figure className="case-gallery-slide" key={image.src}>
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
                draggable={false}
              />
            </figure>
          ))}
        </div>
      </div>

      <div className="case-gallery-footer">
        <span className="case-gallery-count" aria-live="polite">
          {String(index + 1).padStart(2, "0")} <span aria-hidden="true">/</span> {String(images.length).padStart(2, "0")}
        </span>
        <div className="case-gallery-progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${(index + 1) / images.length})` }} />
        </div>
        <div className="case-gallery-controls">
          <button
            type="button"
            aria-label="Fotografia anterior"
            disabled={index === 0}
            onClick={() => setIndex((current) => Math.max(0, current - 1))}
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            aria-label="Próxima fotografia"
            disabled={index === images.length - 1}
            onClick={() => setIndex((current) => Math.min(images.length - 1, current + 1))}
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

const treatments = [
  {
    number: "01",
    title: "Facetas em resina",
    copy: "Converse sobre facetas em resina e as possibilidades para o seu sorriso.",
    message: messages.facetas,
  },
  {
    number: "02",
    title: "Clareamento Dental",
    copy: "Uma conversa sobre tonalidade, expectativas e as possibilidades adequadas para o seu sorriso.",
    message: messages.clareamento,
  },
  {
    number: "03",
    title: "Próteses",
    copy: "Planejamento voltado à recuperação do sorriso, considerado a partir das necessidades de cada caso.",
    message: messages.proteses,
  },
  {
    number: "04",
    title: "Extrações",
    copy: "Avaliação cuidadosa e orientação clara sobre a indicação e os próximos passos do atendimento.",
    message: messages.extracoes,
  },
];

const orthodontics = [
  {
    number: "01",
    title: "Tradicional",
    copy: "Uma alternativa clássica dentro do planejamento ortodôntico, considerada conforme a avaliação.",
    image: "/assets/demo-ortho-tradicional.webp",
    alt: "Imagem demonstrativa de aparelho ortodôntico tradicional em modelo odontológico",
  },
  {
    number: "02",
    title: "Safira",
    copy: "Opção estética com componentes translúcidos, avaliada de acordo com o caso e o objetivo do paciente.",
    image: "/assets/demo-ortho-safira.webp",
    alt: "Imagem demonstrativa de aparelho ortodôntico de safira em modelo odontológico",
  },
  {
    number: "03",
    title: "Porcelana",
    copy: "Uma possibilidade de aparência discreta, incluída na conversa sobre alternativas ortodônticas.",
    image: "/assets/demo-ortho-porcelana.webp",
    alt: "Imagem demonstrativa de aparelho ortodôntico de porcelana em modelo odontológico",
  },
  {
    number: "04",
    title: "Autoligado",
    copy: "Sistema com características próprias, cuja indicação também depende de avaliação individual.",
    image: "/assets/demo-ortho-autoligado.webp",
    alt: "Imagem demonstrativa de aparelho ortodôntico autoligado em modelo odontológico",
  },
];

export default function SitePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showFloating, setShowFloating] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.documentElement.classList.add("js");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7%" },
    );

    document.querySelectorAll("[data-reveal]").forEach((element) => {
      revealObserver.observe(element);
    });

    const hero = heroRef.current;
    const heroObserver = hero
      ? new IntersectionObserver(
          ([entry]) => setShowFloating(!entry.isIntersecting),
          { threshold: 0.08 },
        )
      : null;

    if (hero && heroObserver) heroObserver.observe(hero);

    let frame = 0;
    const updateMotion = () => {
      frame = 0;
      const y = window.scrollY;
      setScrolled(y > 24);

      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((element) => {
          const speed = Number(element.dataset.parallax || 0.06);
          const rect = element.getBoundingClientRect();
          const centerOffset = rect.top + rect.height / 2 - window.innerHeight / 2;
          const shift = Math.max(-42, Math.min(42, -centerOffset * speed));
          element.style.setProperty("--parallax-y", `${shift}px`);
        });

        document.querySelectorAll<HTMLElement>("[data-case-zoom]").forEach((element) => {
          const rect = element.getBoundingClientRect();
          const progress = Math.max(
            0,
            Math.min(1, 1 - rect.top / window.innerHeight),
          );
          element.style.setProperty("--case-scale", `${1.035 - progress * 0.035}`);
        });
      }
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateMotion);
    };

    updateMotion();
    window.addEventListener("scroll", onScroll, { passive: true });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      revealObserver.disconnect();
      heroObserver?.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
      if (frame) window.cancelAnimationFrame(frame);
      document.documentElement.classList.remove("js");
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", menuOpen);
    return () => document.body.classList.remove("menu-is-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#inicio" aria-label="Dr. Yuri Trindade — início">
          <img src="/assets/dr-yuri-logo.svg" alt="Dr. Yuri Trindade Odontologia" />
        </a>

        <nav id="menu-mobile" className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navegação principal">
          <div className="nav-backdrop" aria-hidden="true" />
          <div className="nav-links">
            <a href="#tratamentos" onClick={closeMenu}>Tratamentos</a>
            <a href="#resultados" onClick={closeMenu}>Resultados</a>
            <a href="#sobre" onClick={closeMenu}>Sobre</a>
            <a href="#contato" onClick={closeMenu}>Contato</a>
          </div>
          <WhatsAppLink message={messages.avaliacao} className="nav-mobile-cta" onClick={closeMenu}>
            Agendar avaliação <Arrow />
          </WhatsAppLink>
          <div className="nav-mobile-foot">
            <span>Atendimento em Patos — PB</span>
            <span>@dr.yuritrindade</span>
          </div>
        </nav>

        <WhatsAppLink message={messages.avaliacao} className="header-cta">
          Agendar avaliação <Arrow />
        </WhatsAppLink>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio" ref={heroRef} aria-labelledby="hero-title">
          <div className="hero-media" aria-hidden="true">
            <img
              src="/assets/dr-yuri-procedimento.jpeg"
              alt=""
              width="1536"
              height="864"
              fetchPriority="high"
            />
          </div>
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-rule hero-rule-one" aria-hidden="true" />
          <div className="hero-rule hero-rule-two" aria-hidden="true" />

          <div className="hero-content">
            <p className="hero-kicker">Patos — PB <span /> CRO/PB 9020</p>
            <h1 id="hero-title">
              <span className="line-mask"><span>Seu sorriso merece</span></span>
              <span className="line-mask"><span>planejamento, cuidado</span></span>
              <span className="line-mask"><span>e naturalidade.</span></span>
            </h1>
            <p className="hero-subtitle">
              <strong>Dr. Yuri Trindade</strong>
              <span>Odontologia estética • Ortodontia • Reabilitação</span>
            </p>
            <div className="hero-actions">
              <WhatsAppLink message={messages.avaliacao} className="button button-light">
                Agendar uma avaliação <Arrow />
              </WhatsAppLink>
              <a className="button button-ghost" href="#tratamentos">
                Conhecer os tratamentos <Arrow />
              </a>
            </div>
          </div>

          <a className="scroll-cue" href="#visao" aria-label="Continuar para a próxima seção">
            <span>Scroll</span>
            <i aria-hidden="true" />
          </a>
        </section>

        <section className="vision section-light" id="visao">
          <div className="section-shell vision-grid">
            <div className="eyebrow reveal-line" data-reveal>
              <span>01</span>
              <p>Uma odontologia pensada em detalhes</p>
            </div>
            <div className="vision-copy" data-reveal>
              <h2>O seu sorriso pensado para você.</h2>
            </div>
            <p className="vision-body" data-reveal>
              Forma, proporção e harmonia precisam conversar com o sorriso de cada pessoa, respeitando sua singularidade. Aqui, estudamos os seus gostos, traçamos o seu tratamento e construímos, juntos, o sorriso que você sempre desejou.
            </p>
          </div>
        </section>

        <section className="facets" id="resultados" aria-labelledby="facets-title">
          <div className="section-shell facets-heading">
            <div className="eyebrow reveal-line" data-reveal>
              <span>02</span>
              <p>Facetas em resina</p>
            </div>
            <div className="facets-title-wrap" data-reveal>
              <h2 id="facets-title">Facetas em resina</h2>
              <p className="facets-editorial-lead">Detalhes que transformam o sorriso sem apagar sua naturalidade.</p>
              <p className="facets-description">
                O planejamento considera proporção, formato, harmonia e características individuais do sorriso. Cada caso precisa ser observado de forma própria.
              </p>
              <a className="facets-cases-link" href="#casos-reais">
                Veja alguns casos <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="section-shell cases-layout" id="casos-reais">
            <aside className="cases-aside">
              <div className="cases-sticky">
                <p>Casos reais</p>
                <small>Resultados individuais podem variar.</small>
              </div>
            </aside>

            <div className="cases-list">
              <article className="case-story" data-reveal data-case-zoom>
                <header>
                  <span>Caso 01</span>
                  <p>Arraste para comparar.</p>
                </header>
                <div className="case-media-shell">
                  <BeforeAfter
                    before="/assets/caso-01-antes.jpeg"
                    after="/assets/caso-01-depois.jpeg"
                    label="Caso real 01"
                  />
                </div>
              </article>

              <article className="case-story case-story-offset" data-reveal data-case-zoom>
                <header>
                  <span>Caso 02</span>
                </header>
                <div className="case-media-shell">
                  <CaseGallery images={case02Images} caseLabel="Caso 02" />
                </div>
              </article>

              <article className="case-story case-story-offset" data-reveal data-case-zoom>
                <header>
                  <span>Caso 03</span>
                </header>
                <div className="case-media-shell">
                  <CaseGallery images={case03Images} caseLabel="Caso 03" />
                </div>
              </article>

              <article className="case-story case-story-offset" data-reveal data-case-zoom>
                <header>
                  <span>Caso 04</span>
                </header>
                <div className="case-media-shell">
                  <CaseGallery images={case04Images} caseLabel="Caso 04" />
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="feedbacks" id="feedbacks" aria-labelledby="feedbacks-title">
          <div className="section-shell feedbacks-shell">
            <div className="feedbacks-heading" data-reveal>
              <p className="feedbacks-kicker">Feedbacks reais</p>
              <h2 id="feedbacks-title">Experiências de quem confiou no nosso trabalho.</h2>
            </div>

            <div className="feedbacks-grid">
              <article className="feedback-card" data-reveal>
                <blockquote>
                  <p>“Agradeço o cuidado e parabenizo a clínica pelo profissionalismo e humanização com que tudo está sendo feito. Não tenho dúvidas que fiz a melhor escolha.”</p>
                </blockquote>
                <footer className="feedback-card-source">Paciente</footer>
              </article>

              <article className="feedback-card" data-reveal>
                <blockquote>
                  <p>“Gratidão pelo atendimento de excelência e o resultado impecável que você entregou. Eu estou realizada.”</p>
                </blockquote>
              </article>
            </div>
          </div>
        </section>

        <section className="about" id="sobre" aria-labelledby="about-title">
          <div className="about-ghost" aria-hidden="true">YURI</div>
          <div className="section-shell about-grid">
            <figure className="about-portrait" data-reveal>
              <div className="image-clip">
                <img
                  src="/assets/dr-yuri-sobre-profissional.jpeg"
                  alt="Dr. Yuri Trindade, cirurgião-dentista"
                  width="1086"
                  height="1448"
                  loading="lazy"
                  data-parallax="0.035"
                />
              </div>
              <figcaption>Dr. Yuri Trindade • Cirurgião-dentista</figcaption>
            </figure>

            <div className="about-copy">
              <div className="eyebrow eyebrow-dark reveal-line" data-reveal>
                <span>03</span>
                <p>Sobre o profissional</p>
              </div>
              <h2 id="about-title" data-reveal>Dr. Yuri de Cristo Rodrigues Trindade</h2>
              <p className="about-role" data-reveal>
                Cirurgião-Dentista, especialista em Ortodontia, inscrito no <strong>CRO/PB 9020</strong>.
              </p>
              <p className="about-text" data-reveal>
                Meu propósito é ajudar você a alcançar a melhor versão do seu sorriso, buscando resultados naturais, harmônicos e que respeitem a sua individualidade.
              </p>
              <p className="about-text" data-reveal>
                Afinal, um sorriso bonito não precisa seguir um padrão. Precisa fazer sentido para quem o carrega.
              </p>
              <WhatsAppLink message={messages.avaliacao} className="button button-outline" ariaLabel="Conversar com Dr. Yuri pelo WhatsApp">
                Conversar com Dr. Yuri <Arrow />
              </WhatsAppLink>
            </div>
          </div>
        </section>

        <section className="treatments section-light" id="tratamentos" aria-labelledby="treatments-title">
          <div className="section-shell treatments-head">
            <div className="eyebrow reveal-line" data-reveal>
              <span>04</span>
              <p>Outros tratamentos</p>
            </div>
            <div data-reveal>
              <h2 id="treatments-title">TRATAMENTOS PENSADOS PARA VOCÊ</h2>
              <p>
                Diferentes necessidades pedem avaliações e caminhos diferentes. Conheça outras frentes de atendimento do Dr. Yuri.
              </p>
            </div>
          </div>

          <div className="section-shell treatment-index">
            {treatments.map((treatment) => (
              <article className="treatment-row" key={treatment.title} data-reveal>
                <span className="treatment-number">{treatment.number}</span>
                <div className="treatment-copy">
                  <h3>{treatment.title}</h3>
                  <p>{treatment.copy}</p>
                  <WhatsAppLink message={treatment.message} className="text-link">
                    Quero saber mais <Arrow />
                  </WhatsAppLink>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="orthodontics" aria-labelledby="ortho-title">
          <div className="section-shell ortho-grid">
            <div className="ortho-intro">
              <div className="eyebrow eyebrow-dark reveal-line" data-reveal>
                <span>05</span>
                <p>Ortodontia</p>
              </div>
              <h2 id="ortho-title" data-reveal>Diferentes alternativas. Uma avaliação individual.</h2>
              <p data-reveal>
                O tipo de aparelho é discutido a partir da avaliação, dos objetivos e das características de cada paciente — sem tratar uma opção como resposta universal.
              </p>
              <WhatsAppLink message={messages.ortodontia} className="button button-outline">
                Falar sobre ortodontia <Arrow />
              </WhatsAppLink>
            </div>

            <div className="ortho-options">
              {orthodontics.map((option) => (
                <article className="ortho-option" key={option.title} data-reveal>
                  <span>{option.number}</span>
                  <div>
                    <h3>{option.title}</h3>
                    <p>{option.copy}</p>
                  </div>
                  <div className="ortho-photo-slot">
                    <img
                      src={option.image}
                      alt={option.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="stories" aria-labelledby="stories-title">
          <div className="section-shell stories-head">
            <div className="eyebrow reveal-line" data-reveal>
              <span>06</span>
              <p>Prova visual</p>
            </div>
            <div data-reveal>
              <h2 id="stories-title">Sorrisos que contam histórias.</h2>
              <p>Registros reais do trabalho apresentado pelo Dr. Yuri.</p>
            </div>
          </div>

          <div className="section-shell stories-gallery">
            <figure className="story story-one" data-reveal>
              <div className="image-clip">
                <img
                  src="/assets/resultado-03.jpeg"
                  alt="Resultado real de tratamento odontológico em paciente sorrindo"
                  width="1170"
                  height="1434"
                  loading="lazy"
                  data-parallax="0.025"
                />
              </div>
              <figcaption><span>03</span> Caso real</figcaption>
            </figure>

            <figure className="story story-detail" data-reveal>
              <div className="image-clip">
                <img
                  src="/assets/prova-visual-clinica.jpeg"
                  alt="Registro clínico aproximado de um sorriso"
                  width="1280"
                  height="960"
                  loading="lazy"
                  data-parallax="0.04"
                />
              </div>
              <figcaption><span>04</span> Detalhe clínico</figcaption>
            </figure>

            <figure className="story story-two" data-reveal>
              <div className="image-clip">
                <img
                  src="/assets/resultado-04.jpeg"
                  alt="Resultado real de tratamento odontológico em paciente sorrindo"
                  width="1170"
                  height="1313"
                  loading="lazy"
                  data-parallax="0.03"
                />
              </div>
              <figcaption><span>05</span> Caso real</figcaption>
            </figure>
          </div>
          <p className="stories-disclaimer section-shell">Resultados individuais podem variar.</p>
        </section>

        <section className="mid-cta" aria-labelledby="mid-cta-title">
          <div className="mid-cta-lines" aria-hidden="true" />
          <div className="section-shell mid-cta-content" data-reveal>
            <p>Uma decisão bem orientada começa pela conversa.</p>
            <h2 id="mid-cta-title">O primeiro passo para transformar seu sorriso é entender o que faz sentido para você.</h2>
            <WhatsAppLink message={messages.avaliacao} className="button button-light">
              Agendar minha avaliação <Arrow />
            </WhatsAppLink>
          </div>
        </section>

        <section className="location section-light" id="contato" aria-labelledby="location-title">
          <div className="location-word" aria-hidden="true">PATOS</div>
          <div className="section-shell location-grid">
            <div className="eyebrow reveal-line" data-reveal>
              <span>07</span>
              <p>Atendimento presencial</p>
            </div>
            <div className="location-copy" data-reveal>
              <p>Local de atendimento</p>
              <h2 id="location-title">Patos — Paraíba</h2>
              <span>O endereço completo e a rota estão disponíveis no mapa compartilhado pelo profissional.</span>
              <a className="button button-dark" href={MAP_URL} target="_blank" rel="noopener noreferrer">
                Como chegar <Arrow diagonal />
              </a>
            </div>
            <div className="location-marker" aria-hidden="true">
              <span>07°</span>
              <i />
              <span>PB</span>
            </div>
          </div>
        </section>

        <section className="process" aria-labelledby="process-title">
          <div className="section-shell">
            <div className="process-heading" data-reveal>
              <span>08</span>
              <h2 id="process-title">Como funciona?</h2>
            </div>

            <ol className="process-list">
              <li data-reveal>
                <span>01</span>
                <div>
                  <h3>Primeiro contato</h3>
                  <p>Você entra em contato conosco, agendamos sua consulta e realizamos uma avaliação clínica para entender suas necessidades.</p>
                </div>
              </li>
              <li data-reveal>
                <span>02</span>
                <div>
                  <h3>Do planejamento ao tratamento</h3>
                  <p>Após traçarmos o plano do seu tratamento odontológico, damos início aos procedimentos indicados, sempre respeitando as suas necessidades e objetivos.</p>
                </div>
              </li>
              <li data-reveal>
                <span>03</span>
                <div>
                  <h3>Acompanhamento individualizado</h3>
                  <p>Acompanhamos de perto a evolução do seu tratamento, cuidando de cada etapa e caminhando junto com você em busca dos melhores resultados.</p>
                </div>
              </li>
            </ol>

            <WhatsAppLink message={messages.avaliacao} className="process-cta text-link">
              Agendar minha avaliação <Arrow />
            </WhatsAppLink>
          </div>
        </section>

        <section className="final-cta" aria-labelledby="final-title">
          <div className="section-shell final-cta-grid">
            <div data-reveal>
              <p>Pronto para conversar?</p>
              <h2 id="final-title">Sua avaliação começa com uma escuta cuidadosa.</h2>
            </div>
            <div className="final-action" data-reveal>
              <WhatsAppLink message={messages.avaliacao} className="button button-light">
                Agendar uma avaliação <Arrow />
              </WhatsAppLink>
              {!WHATSAPP_NUMBER && (
                <small>Número definitivo do WhatsApp pendente de configuração.</small>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell footer-top">
          <img src="/assets/dr-yuri-logo.svg" alt="Dr. Yuri Trindade Odontologia" />
          <p>Precisão, estética e cuidado em cada etapa.</p>
        </div>
        <div className="section-shell footer-bottom">
          <span>Dr. Yuri Trindade — Cirurgião-dentista</span>
          <span>Professor universitário</span>
          <span>Patos — PB</span>
          <a href="#inicio">Voltar ao topo ↑</a>
        </div>
      </footer>

      <WhatsAppLink
        message={messages.avaliacao}
        className={`floating-whatsapp ${showFloating ? "is-visible" : ""}`}
        ariaLabel="Agendar avaliação pelo WhatsApp"
      >
        <span>Agendar avaliação</span>
        <WhatsAppMark />
      </WhatsAppLink>
    </>
  );
}
