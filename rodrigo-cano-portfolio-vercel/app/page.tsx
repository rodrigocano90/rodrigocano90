"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

type Category = "Fintech" | "Branding" | "Product" | "Campaigns";
type Filter = "All" | Category;

type Project = {
  number: string;
  title: string;
  caseName?: string;
  kicker: string;
  year: string;
  categories: Category[];
  summary: string;
  heroQuestion: string;
  heroAnswer: string;
  role: string;
  duration: string;
  team: string;
  contextTitle: string;
  context: string;
  challenge: string;
  insightHeadline: string;
  insight: string;
  decisions: { title: string; text: string }[];
  system: string;
  adoption: string;
  impactStatement: string;
  proof: string[];
  impactBrand: string[];
  reflection: string;
  deliverables: string[];
  image?: string;
  cover: string;
};

type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  position: string;
  scale: number;
};

type Gallery = {
  title: string;
  description: string;
  images: GalleryImage[];
};

const filters: Filter[] = ["All", "Fintech", "Branding", "Product", "Campaigns"];

const projects: Project[] = [
  {
    number: "01",
    title: "LB Finanzas",
    caseName: "Rebuilding Trust",
    kicker: "Brand transformation · Product ecosystem",
    year: "2022—Now",
    categories: ["Fintech", "Branding", "Product"],
    summary: "How branding helped reposition a crypto-first company into a regulated financial ecosystem.",
    heroQuestion: "How do you rebuild trust when your entire industry loses it?",
    heroAnswer: "Following the collapse of Luna and FTX, we repositioned a crypto-first company into one of Argentina’s next-generation financial platforms.",
    role: "Brand Lead",
    duration: "2 years",
    team: "15 people across Brand, Marketing, Product and Leadership",
    contextTitle: "A company had changed. Its reputation hadn’t.",
    context: "When the Luna and FTX collapses reshaped public perception of the crypto industry, trust became the company’s biggest challenge. At the same time, the business had evolved far beyond cryptocurrencies, expanding into investments, payments and regulated financial services. The problem wasn’t the product. The brand still represented a company that no longer existed.",
    challenge: "The existing identity had been built for a crypto-native audience. Now we needed to reach users looking for a trusted financial platform. The challenge wasn’t creating a better-looking brand. It was repositioning the company without losing the trust it had already earned.",
    insightHeadline: "People no longer distrusted crypto. They distrusted the companies behind it.",
    insight: "That insight changed the project completely. Instead of trying to look more innovative, we focused on making the company feel more transparent, understandable and trustworthy. Every design decision originated from this shift.",
    decisions: [
      { title: "Preserve brand equity", text: "Changing everything would create even more uncertainty. We kept the recognition built around LB while moving away from a crypto-first identity." },
      { title: "Make regulation visible", text: "Rather than hiding regulatory credentials, we integrated them into the brand experience and turned compliance into a trust signal." },
      { title: "Build one visual language", text: "Product, marketing and communication started speaking the same system instead of operating independently." },
      { title: "Design for growth", text: "The identity was created not only for the current company, but for the products that did not exist yet." },
    ],
    system: "A brand is not a logo. It is a shared language. The new system included typography, color, illustration, iconography, motion and reusable components designed to scale across every customer touchpoint. From product interfaces to marketing campaigns, every new experience inherited the same visual principles.",
    adoption: "Creating the system was not the hardest part. Getting an entire organization to use it was. I led implementation across Design, Marketing, Product and Leadership, aligning teams around a single framework that reduced inconsistencies and accelerated execution. The objective was not controlling the brand. It was enabling everyone to build with it.",
    impactStatement: "The brand caught up with the business—and became infrastructure for what came next",
    proof: ["130K+ active users", "USD 500M+ processed annually", "Financial ecosystem expansion", "60+ team members"],
    impactBrand: ["Unified visual system", "Faster campaign production", "Reusable design components", "Consistent cross-channel experience"],
    reflection: "This project changed how I think about branding. A successful identity is not measured by how distinctive it looks, but by how effectively it helps a business evolve. Design did not solve a visual problem. It helped rebuild trust at a moment when an entire industry had lost it.",
    deliverables: ["Brand direction", "Design leadership", "Product UX/UI", "Campaign systems"],
    image: "/images/lb-project-canvas.png",
    cover: "cover-lb",
  },
  {
    number: "02",
    title: "El mercado está en vos",
    kicker: "Creative direction · Integrated campaign",
    year: "2026",
    categories: ["Fintech", "Branding", "Campaigns"],
    summary: "A campaign platform that turns the habit of watching the market into a personal, energetic invitation to act.",
    heroQuestion: "How do you make the market feel personal without making it feel simple?",
    heroAnswer: "We transformed an expanded stocks and ETFs proposition into a campaign about the moments when the market becomes part of everyday life.",
    role: "Creative Direction",
    duration: "2026 launch",
    team: "Brand, Marketing, Product and Motion",
    contextTitle: "A major product expansion needed a human reason to matter.",
    context: "The platform had expanded its US stocks and ETFs experience. Communicating only more assets and more features would make the launch accurate, but forgettable. The campaign needed to connect the product with the daily behaviors, ambitions and decisions of real investors.",
    challenge: "Make an expanded US stocks and ETFs experience feel relevant to everyday investors—not like a technical product update.",
    insightHeadline: "The market was already part of people’s routines. The campaign only had to make it visible.",
    insight: "Instead of explaining investing from the outside, we placed market signals inside familiar scenes. The visual tension between movement and stillness turned attention into a personal invitation to act.",
    decisions: [
      { title: "Start with behavior", text: "The concept began with the habit of checking the market, not with a list of product features." },
      { title: "Use controlled chaos", text: "Fast visual signals create energy, followed by quiet pauses that give the decision weight." },
      { title: "Build modular stories", text: "One campaign language had to support the master launch and feature-specific messages." },
      { title: "Connect campaign and product", text: "The promise and the experience used the same language, reducing the gap between attention and action." },
    ],
    system: "The creative system combined everyday scenes, market graphics, distinctive violet, editorial casting and a motion rhythm built around acceleration and pause. It was designed for launch film, social, CRM, in-app communication and product education.",
    adoption: "A reusable toolkit gave every team a clear way to translate the central idea without repeating the same execution. Messages could shift by feature, audience and format while retaining one recognizable campaign world.",
    impactStatement: "One campaign idea became a flexible launch platform across every customer touchpoint",
    proof: ["5K+ stocks and ETFs", "Multi-format launch platform", "Feature-led communication", "Product + campaign narrative"],
    impactBrand: ["Reusable visual grammar", "Motion language", "Unified launch system", "Scalable creative toolkit"],
    reflection: "A financial campaign becomes more persuasive when it recognizes how people already behave. The strongest idea was not to make the market look easier. It was to make its presence in everyday life feel undeniable.",
    deliverables: ["Campaign concept", "Art direction", "Motion language", "Launch toolkit"],
    cover: "cover-market",
  },
  {
    number: "03",
    title: "ETHLatam",
    kicker: "Event identity · Experience design",
    year: "2022",
    categories: ["Branding", "Campaigns"],
    summary: "A flexible identity built to hold the energy, optimism and complexity of Latin America’s Ethereum community.",
    heroQuestion: "How do you give a global technology event a distinctly Latin American energy?",
    heroAnswer: "ETHLatam turned a complex Web3 program into a coherent regional experience for 5,000 attendees and 25 sponsors.",
    role: "Brand and Experience Design",
    duration: "2022 event cycle",
    team: "Brand, Production, Content and Sponsors",
    contextTitle: "A global ecosystem needed a regional point of view.",
    context: "Ethereum already had a recognizable global culture, but a Latin American event could not feel like a translated international template. It needed the credibility expected by the Web3 community and enough character to represent the region hosting it.",
    challenge: "Create a regional event brand that felt credible to the global Web3 community while remaining distinctly Latin American and energetic at every scale.",
    insightHeadline: "The identity had to organize complexity without neutralizing the community’s energy.",
    insight: "The event was both a learning platform and a cultural gathering. A high-contrast system could handle dense schedules, sponsor hierarchies and large spaces while still feeling alive and optimistic.",
    decisions: [
      { title: "Design for every scale", text: "The system had to work on a social post, a badge, a schedule and a stage visible across a full venue." },
      { title: "Own the regional voice", text: "The visual language balanced global Web3 codes with a warmer and more expressive Latin American character." },
      { title: "Make complexity navigable", text: "Clear hierarchy helped attendees move through tracks, speakers, spaces and timing." },
      { title: "Give sponsors a system", text: "Partnership visibility was designed into the identity rather than added on top of it." },
    ],
    system: "A flexible identity combined a high-contrast palette, geometric Ethereum references, modular grids and a clear information hierarchy. The system extended from digital promotion to environmental graphics, schedules, credentials and stage content.",
    adoption: "The design framework aligned event production, content and sponsor needs. Reusable templates made it possible to publish a large volume of information while preserving consistency before and during the event.",
    impactStatement: "A regional identity gave 5,000 people one coherent event experience",
    proof: ["5,000 attendees", "25 sponsors", "Regional Web3 audience", "Full venue rollout"],
    impactBrand: ["Unified event identity", "Scalable content templates", "Clear sponsor hierarchy", "Consistent physical + digital experience"],
    reflection: "Event identity is not decoration around a program. At its best, it gives thousands of people a shared sense of place while helping them navigate a complex experience with confidence.",
    deliverables: ["Visual identity", "Event system", "Campaign assets", "Environmental graphics"],
    image: "/images/ethlatam-project-canvas.png",
    cover: "cover-eth",
  },
  {
    number: "04",
    title: "ETH Kipu",
    kicker: "Digital product · UX/UI · Brand system",
    year: "2023",
    categories: ["Branding", "Product"],
    summary: "Making blockchain education feel accessible through a digital experience designed for clarity, trust and momentum.",
    heroQuestion: "How do you make blockchain education feel clear before it feels technical?",
    heroAnswer: "ETH Kipu translated a complex learning initiative into an approachable brand and product system for Latin America.",
    role: "Brand and Product Design",
    duration: "2023",
    team: "Education, Content, Brand and Product",
    contextTitle: "The subject was complex. The first experience could not be.",
    context: "People entering the Ethereum ecosystem faced unfamiliar language, fragmented resources and little sense of progression. The initiative needed to establish credibility without reproducing the visual and verbal complexity that made the subject intimidating.",
    challenge: "Translate a technically complex education initiative into an approachable experience for people entering the Ethereum ecosystem.",
    insightHeadline: "Progress is the most important trust signal in a learning experience.",
    insight: "Users did not need the technology to feel less serious. They needed to see where they were, what came next and how each concept connected to a larger path.",
    decisions: [
      { title: "Show the path", text: "Learning routes and progress states made the experience feel finite, structured and achievable." },
      { title: "Use plain hierarchy", text: "Clear labels and strong information architecture reduced the cognitive load of technical content." },
      { title: "Balance rigor and warmth", text: "The identity kept Web3 credibility while avoiding cold or exclusionary visual codes." },
      { title: "Prepare for more content", text: "The system was designed to absorb new modules, lessons and learning formats." },
    ],
    system: "The brand and product language shared the same building blocks: clear grids, visible progress, modular learning units, diagrammatic illustration and a confident blue-led palette. Content hierarchy was treated as part of the identity.",
    adoption: "Reusable page patterns and content modules helped the education team expand the experience without redesigning each new lesson. The system made consistency a property of the workflow, not a final review step.",
    impactStatement: "A complex learning journey became a product people could understand and progress through",
    proof: ["Brand + product system", "Responsive learning experience", "Scalable content model", "Visible learning paths"],
    impactBrand: ["Unified visual language", "Reusable lesson patterns", "Clear progress states", "Lower barrier to entry"],
    reflection: "Designing for education means making complexity feel navigable, not hiding it. Clarity became the bridge between technical credibility and a more inclusive learning experience.",
    deliverables: ["Brand system", "Information architecture", "UX/UI", "Responsive web"],
    image: "/images/kipu-project-canvas.png",
    cover: "cover-kipu",
  },
  {
    number: "05",
    title: "The Coffee Shop",
    kicker: "Brand strategy · Identity · Retail",
    year: "2021—Now",
    categories: ["Branding"],
    summary: "Building a coffee brand designed to grow from a new idea into stores, products and its own roasting operation.",
    heroQuestion: "How do you design a brand before the business has a physical home?",
    heroAnswer: "We created The Coffee Shop as a new brand, then built a system capable of growing into two locations and a roasting line.",
    role: "Strategy, Branding and Design",
    duration: "2021—Now",
    team: "Design lead + copywriting partner",
    contextTitle: "The brand came before the first store.",
    context: "The Coffee Shop began as a new business with no locations and no inherited identity. The opportunity was to define not only how it looked, but how the experience could remain recognizable as the offer expanded across retail, packaging and digital communication.",
    challenge: "Create a distinctive system that could hold together future stores, packaging, social content and a roasting proposition without losing the warmth of a neighborhood coffee experience.",
    insightHeadline: "A local coffee brand grows through rituals, not just recognition.",
    insight: "The identity needed to feel consistent in the small repeated moments that shape the business: choosing a bag, reading a menu, finding the store, opening a package and seeing the same tone online.",
    decisions: [
      { title: "Build from the business", text: "Strategy and identity were developed together so every design choice supported the intended retail experience." },
      { title: "Create a warm system", text: "The visual language balanced contemporary simplicity with the tactility and familiarity of coffee culture." },
      { title: "Design physical and digital together", text: "Packaging, signage, web and social were treated as one connected customer journey." },
      { title: "Leave room for roasting", text: "The architecture could expand from stores into product families and an own-label roasting operation." },
    ],
    system: "The identity connected logo, packaging, signage, menus, web, social templates and photographic direction through a practical set of rules. Every touchpoint was designed to feel part of the same place, even outside the store.",
    adoption: "I led the project with a copywriting partner and advised the interior experience, translating the system across launch materials and ongoing applications. The brand remains active as the business continues to expand.",
    impactStatement: "A brand designed before the first store became the system behind an expanding retail business",
    proof: ["2 active locations", "Roasting line added", "Implemented and operating", "Full retail ecosystem"],
    impactBrand: ["Distinctive retail identity", "Packaging system", "Physical + digital consistency", "Platform for product expansion"],
    reflection: "The strongest identity systems are built for the business a brand is becoming. Designing early made it possible for The Coffee Shop to grow without having to reinvent itself at every new stage.",
    deliverables: ["Strategy", "Visual identity", "Packaging", "Signage + digital"],
    cover: "cover-coffee",
  },
  {
    number: "06",
    title: "Gestify",
    kicker: "MVP · UX/UI · Service design",
    year: "Independent",
    categories: ["Branding", "Product"],
    summary: "Turning the paperwork-heavy vehicle management process into a clear, trackable digital service.",
    heroQuestion: "How do you turn a paperwork-heavy service into a process people can trust?",
    heroAnswer: "Gestify reframed vehicle paperwork as a clear service journey supported by a simple digital product and operational workflow.",
    role: "Brand, Product and Service Design",
    duration: "Independent MVP",
    team: "Independent project",
    contextTitle: "Customers saw paperwork. The business managed dozens of invisible steps.",
    context: "Vehicle procedures were difficult for customers to understand and equally difficult for the service to communicate consistently. Information moved across messages, documents and manual follow-ups, creating uncertainty on both sides.",
    challenge: "A specialised service needed to feel simpler and more transparent for customers while giving the business a practical way to organise leads and cases.",
    insightHeadline: "Transparency is not more information. It is knowing what happens next.",
    insight: "The service did not need to expose every operational detail. It needed to translate complexity into clear stages, realistic expectations and visible next steps.",
    decisions: [
      { title: "Structure the service first", text: "The customer experience and the internal workflow were mapped before designing the interface." },
      { title: "Write in plain language", text: "Technical procedures were translated into clear actions and expectations." },
      { title: "Connect acquisition and delivery", text: "The website, sales materials and CRM followed the same stages instead of operating as separate tools." },
      { title: "Keep the MVP practical", text: "The solution prioritized the smallest system the business could use and maintain immediately." },
    ],
    system: "A simple identity and interface system connected the public website, service explanations, customer messages, sales collateral and CRM stages. The design language made progress and responsibility visible throughout the journey.",
    adoption: "The operating model was translated into a lightweight workflow that the business could use without a large technical implementation. Templates and CRM structure reduced the need to reconstruct the process for every new lead.",
    impactStatement: "An invisible operational process became a service customers and teams could follow",
    proof: ["Service + product design", "Lead workflow", "Website foundation", "CRM operating model"],
    impactBrand: ["Clear service proposition", "Consistent customer language", "Connected sales materials", "Reusable workflow"],
    reflection: "Service design creates trust when it makes an invisible process legible. The most valuable design decision was not adding more interface, but giving every interaction a clearer place in the journey.",
    deliverables: ["Identity", "Service blueprint", "UX/UI", "CRM workflow"],
    cover: "cover-gestify",
  },
];

function ProjectCover({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <div className={`project-visual ${project.cover} ${compact ? "is-compact" : ""}`}>
      {project.image ? <Image unoptimized src={project.image} alt={`${project.title} project presentation`} fill sizes={compact ? "(max-width: 800px) 100vw, 1120px" : "(max-width: 800px) 100vw, 80vw"} /> : null}
      <div className="cover-meta"><span>{project.number}</span><span>{project.categories.join(" · ")}</span></div>
    </div>
  );
}

const gallerySections = [
  {
    title: "Brand Identity",
    description: "The core visual language, hierarchy and system details.",
    captions: ["System overview", "Identity detail", "Brand language in context"],
    positions: ["left center", "center center", "right center"],
    scales: [1, 1.32, 1.12],
  },
  {
    title: "Marketing Campaign",
    description: "How the idea adapts across narrative, formats and touchpoints.",
    captions: ["Campaign narrative", "Communication detail", "Cross-channel adaptation"],
    positions: ["center top", "right center", "left bottom"],
    scales: [1.08, 1.4, 1.22],
  },
  {
    title: "Final Deliverables",
    description: "Selected applications showing the system working at scale.",
    captions: ["Primary deliverable", "Applied system detail", "Final experience"],
    positions: ["center center", "left center", "right bottom"],
    scales: [1, 1.26, 1.34],
  },
] as const;

function galleriesFor(project: Project): Gallery[] {
  const src = project.image ?? "/images/rodrigo-portfolio-hero.png";
  const isPlaceholder = !project.image;

  return gallerySections.map((section, sectionIndex) => ({
    title: section.title,
    description: section.description,
    images: section.captions.map((caption, imageIndex) => ({
      src,
      alt: isPlaceholder
        ? `${project.title} ${section.title.toLowerCase()} image placeholder ${imageIndex + 1}`
        : `${project.title} — ${caption.toLowerCase()}`,
      caption: isPlaceholder
        ? `Project image slot ${sectionIndex * 3 + imageIndex + 1} — final asset pending`
        : caption,
      position: section.positions[imageIndex],
      scale: section.scales[imageIndex],
    })),
  }));
}

const withoutTrailingPeriod = (text: string) => text.replace(/\.$/, "");

function ProjectCarousel({ project, gallery }: { project: Project; gallery: Gallery }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);

  const goTo = (nextIndex: number) => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const index = (nextIndex + gallery.images.length) % gallery.images.length;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    viewport.scrollTo({ left: viewport.clientWidth * index, behavior: reduceMotion ? "auto" : "smooth" });
    setActiveIndex(index);
  };

  const handleScroll = () => {
    const viewport = viewportRef.current;
    if (!viewport || viewport.clientWidth === 0) return;
    setActiveIndex(Math.round(viewport.scrollLeft / viewport.clientWidth));
  };

  return (
    <section
      className="case-gallery"
      aria-roledescription="carousel"
      aria-label={`${gallery.title} — ${project.title}`}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") { event.preventDefault(); goTo(activeIndex - 1); }
        if (event.key === "ArrowRight") { event.preventDefault(); goTo(activeIndex + 1); }
      }}
    >
      <div className="gallery-heading">
        <div><span>{gallery.title}</span><p>{gallery.description}</p></div>
        <div className="gallery-controls">
          <button type="button" onClick={() => goTo(activeIndex - 1)} aria-label={`Previous image in ${gallery.title}`}>←</button>
          <button type="button" onClick={() => goTo(activeIndex + 1)} aria-label={`Next image in ${gallery.title}`}>→</button>
        </div>
      </div>
      <div className="gallery-viewport" ref={viewportRef} onScroll={handleScroll}>
        {gallery.images.map((image, index) => (
          <figure className="gallery-slide" key={`${gallery.title}-${index}`} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${gallery.images.length}`}>
            <div className="gallery-image">
              <Image
                unoptimized
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 800px) 100vw, 1120px"
                style={{ objectPosition: image.position, transform: `scale(${image.scale})` }}
              />
            </div>
            <figcaption><span>{String(index + 1).padStart(2, "0")}</span><p>{image.caption}</p></figcaption>
          </figure>
        ))}
      </div>
      <div className="gallery-footer">
        <div className="gallery-dots" aria-label={`Choose an image in ${gallery.title}`}>
          {gallery.images.map((_, index) => (
            <button key={index} type="button" className={index === activeIndex ? "active" : ""} onClick={() => goTo(index)} aria-label={`Go to image ${index + 1}`} aria-current={index === activeIndex ? "true" : undefined} />
          ))}
        </div>
        <span className="gallery-count" aria-live="polite">{String(activeIndex + 1).padStart(2, "0")} / {String(gallery.images.length).padStart(2, "0")}</span>
      </div>
    </section>
  );
}

function CaseDialog({ project, onClose, onHome, onNext }: { project: Project; onClose: () => void; onHome: () => void; onNext: () => void }) {
  const caseRef = useRef<HTMLDivElement>(null);
  const galleries = useMemo(() => galleriesFor(project), [project]);

  useEffect(() => {
    caseRef.current?.focus();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [project]);

  return (
    <div
      ref={caseRef}
      className="case-screen"
      role="region"
      aria-labelledby="case-title"
      tabIndex={-1}
      onKeyDown={(event) => {
        if (event.key === "Escape") { event.preventDefault(); onClose(); }
      }}
    >
      <section className="case">
        <nav className="case-top" aria-label="Case study navigation">
          <button type="button" className="case-home" onClick={onHome} aria-label="Back to homepage">Rodrigo Cano / Home ↑</button>
          <span>{project.number} / Case study</span>
          <button type="button" className="case-close" onClick={onClose} aria-label="Back to project list">Back to work ←</button>
        </nav>
        <div className="case-hero">
          <p className="case-kicker">{project.title} · {project.kicker}</p>
          <h2 id="case-title">{project.caseName ?? project.title}</h2>
          <div className="case-opening"><h3>{project.heroQuestion}</h3><p>{project.heroAnswer}</p></div>
        </div>
        <div className="case-meta" aria-label="Project details">
          <div><span>Role</span><p>{project.role}</p></div>
          <div><span>Duration</span><p>{project.duration}</p></div>
          <div><span>Team</span><p>{project.team}</p></div>
        </div>
        {project.image ? <ProjectCover project={project} compact /> : null}

        <article className="case-section case-context">
          <span>01 / The Context</span>
          <div><h3>{withoutTrailingPeriod(project.contextTitle)}</h3><p>{project.context}</p></div>
        </article>

        <ProjectCarousel key={`${project.title}-${galleries[0].title}`} project={project} gallery={galleries[0]} />

        <article className="case-section case-challenge">
          <span>02 / The Challenge</span>
          <p>{project.challenge}</p>
        </article>

        <article className="case-insight">
          <span>03 / The Insight</span>
          <h3>{withoutTrailingPeriod(project.insightHeadline)}</h3>
          <p>{project.insight}</p>
        </article>

        <section className="case-decisions" aria-labelledby={`decisions-${project.number}`}>
          <div className="case-section-title"><span>04 / Strategic Decisions</span><h3 id={`decisions-${project.number}`}>Strategy became a set of business choices</h3></div>
          <div className="decision-grid">
            {project.decisions.map((decision, index) => <article key={decision.title}><span>{String(index + 1).padStart(2, "0")}</span><h4>{decision.title}</h4><p>{decision.text}</p></article>)}
          </div>
        </section>

        <ProjectCarousel key={`${project.title}-${galleries[1].title}`} project={project} gallery={galleries[1]} />

        <section className="case-system">
          <article><span>05 / The System</span><h3>A shared language</h3><p>{project.system}</p></article>
          <article><span>06 / Leading Adoption</span><h3>Built to be used</h3><p>{project.adoption}</p></article>
        </section>

        <ProjectCarousel key={`${project.title}-${galleries[2].title}`} project={project} gallery={galleries[2]} />

        <section className="case-impact" aria-labelledby={`impact-${project.number}`}>
          <div className="case-section-title case-impact-title">
            <span>07 / Impact</span>
            <div>
              <p>What changed</p>
              <h3 id={`impact-${project.number}`}>{project.impactStatement}</h3>
            </div>
          </div>
          <div className="impact-groups">
            <section className="impact-group" aria-labelledby={`outcomes-${project.number}`}>
              <h4 className="impact-group-title" id={`outcomes-${project.number}`}>Business outcomes</h4>
              <div className="decision-grid impact-grid">
                {project.proof.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><h4>{item}</h4></article>)}
              </div>
            </section>
            <section className="impact-group" aria-labelledby={`contributions-${project.number}`}>
              <h4 className="impact-group-title" id={`contributions-${project.number}`}>Brand / Design contributions</h4>
              <div className="decision-grid impact-grid">
                {project.impactBrand.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><h4>{item}</h4></article>)}
              </div>
            </section>
          </div>
        </section>

        <article className="case-reflection">
          <span>08 / Reflection</span>
          <p>{project.reflection}</p>
        </article>

        <button type="button" className="next-case" onClick={onNext}><span>Next case</span><strong>{projects[(projects.indexOf(project) + 1) % projects.length].title} →</strong></button>
      </section>
    </div>
  );
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const returnScrollRef = useRef(0);
  const returnProjectRef = useRef<string | null>(null);
  const featuredProjects = useMemo(() => projects.filter((project) => project.image), []);
  const visibleProjects = useMemo(
    () => featuredProjects.filter((project) => activeFilter === "All" || project.categories.includes(activeFilter)),
    [activeFilter, featuredProjects],
  );
  const visibleArchive = useMemo(
    () => projects.filter((project) => !project.image && (activeFilter === "All" || project.categories.includes(activeFilter))),
    [activeFilter],
  );

  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;
    const update = () => {
      raf = 0;
      root.style.setProperty("--scroll-y", `${Math.min(window.scrollY * 0.08, 92)}px`);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    const onPointer = (event: PointerEvent) => {
      root.style.setProperty("--mx", `${event.clientX}px`);
      root.style.setProperty("--my", `${event.clientY}px`);
    };
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.target.classList.toggle("inview", entry.isIntersecting)),
      { threshold: 0.1, rootMargin: "0px 0px -7%" },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointer, { passive: true });
    update();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointer);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const openProject = (project: Project) => {
    returnScrollRef.current = window.scrollY;
    returnProjectRef.current = project.number;
    setSelected(project);
  };

  const closeProject = () => {
    setSelected(null);
    window.setTimeout(() => {
      if (returnProjectRef.current) document.querySelector<HTMLElement>(`[data-project-number="${returnProjectRef.current}"]`)?.focus({ preventScroll: true });
      window.scrollTo({ top: returnScrollRef.current, behavior: "auto" });
    }, 80);
  };

  const homeProject = () => {
    setSelected(null);
    window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
      document.querySelector<HTMLElement>(".wordmark")?.focus({ preventScroll: true });
    }, 80);
  };

  return (
    <main>
      <div className="site-content" hidden={Boolean(selected)}>
      <div className="cursor" aria-hidden="true" />
      <nav className="topbar" aria-label="Primary navigation">
        <a className="wordmark" href="#top">Rodrigo Cano</a>
        <span>Brand / Product / Direction</span>
        <div><a href="#work">Work</a><a href="#about">About</a><a href="mailto:rodrigocano.dg@gmail.com">Contact ↗</a></div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-index reveal"><span>Portfolio / 2026</span><span>Rosario, Argentina<br />Working worldwide</span></div>
        <h1 className="reveal"><span>Strategy</span><span>into <i>form</i></span></h1>
        <div className="hero-copy reveal">
          <p>I design brands, products and campaigns for ambitious businesses—then build the systems and teams that help them move.</p>
          <a href="#work">Explore selected work <b>↓</b></a>
        </div>
        <div className="hero-stage reveal">
          <Image unoptimized src="/images/rodrigo-portfolio-hero.png" alt="Abstract chrome and smoked acrylic forms illuminated in violet" fill priority sizes="(max-width: 800px) 100vw, 84vw" />
          <div><span>Brand systems</span><span>Product experiences</span><span>Creative direction</span></div>
          <strong>RC<br />/26</strong>
        </div>
        <div className="hero-ticker" aria-hidden="true">
          <div className="hero-ticker-track">
            {[0, 1].map((set) => (
              <div className="hero-ticker-set" key={set}>
                {Array.from({ length: 6 }, (_, index) => <span key={index}>BRAND + PRODUCT + BUSINESS +&nbsp;</span>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="work" id="work">
        <header className="section-head reveal"><span>01 / Selected work</span><h2>Built to create<br /><i>real movement</i></h2></header>
        <div className="filters reveal" role="toolbar" aria-label="Filter projects">
          {filters.map((filter) => {
            const count = filter === "All" ? projects.length : projects.filter((project) => project.categories.includes(filter)).length;
            return <button key={filter} className={activeFilter === filter ? "active" : ""} onClick={() => setActiveFilter(filter)} aria-pressed={activeFilter === filter}><span>{filter}</span><sup>{String(count).padStart(2, "0")}</sup></button>;
          })}
        </div>
        <div className="project-grid" aria-live="polite">
          {visibleProjects.map((project, index) => (
            <article className={`project-card reveal inview ${index % 3 === 0 ? "project-wide" : ""}`} key={project.title}>
              <button className="project-button" data-project-number={project.number} onClick={() => openProject(project)} aria-label={`Open ${project.title} case study`}>
                <ProjectCover project={project} />
                <div className="project-info"><span>{project.number}</span><div><h3>{project.title}</h3><p>{project.kicker}</p></div><time>{project.year}</time><b>View case ↗</b></div>
              </button>
            </article>
          ))}
        </div>
        {visibleArchive.length ? <div className="other-work reveal inview">
          <span>Also in the archive · {String(visibleArchive.length).padStart(2, "0")}</span>
          {visibleArchive.map((project) => (
            <button key={project.title} data-project-number={project.number} onClick={() => openProject(project)}>
              <span>{project.number}</span><strong>{project.title}</strong><small>{project.kicker}</small><b>↗</b>
            </button>
          ))}
        </div> : null}
      </section>

      <section className="about" id="about">
        <div className="section-head reveal"><span>02 / About</span><h2>I connect the<br /><i>whole experience</i></h2></div>
        <div className="about-layout reveal">
          <p className="about-lead">Brand and product are not separate disciplines to your customer. I work across both—combining direction with hands-on craft.</p>
          <div className="about-detail"><p>For 12+ years I’ve turned business decisions into identities, digital products and campaigns for fintech, crypto, technology and culture.</p><p>Today I lead design at LB Finanzas, shaping teams, systems and AI-assisted workflows that make ambitious ideas clearer and faster to launch.</p></div>
        </div>
        <div className="capabilities reveal"><span>Brand strategy</span><span>Design leadership</span><span>Creative direction</span><span>Product / UX / UI</span><span>Campaign systems</span><span>AI-assisted workflows</span></div>
        <div className="contact reveal"><p>Have something ambitious in mind?</p><a href="mailto:rodrigocano.dg@gmail.com">Let’s make it move <span>↗</span></a><div><span>Rodrigo Cano © 2026</span><span>Rosario / Worldwide</span></div></div>
      </section>
      </div>

      {selected ? <CaseDialog project={selected} onClose={closeProject} onHome={homeProject} onNext={() => setSelected(projects[(projects.indexOf(selected) + 1) % projects.length])} /> : null}
    </main>
  );
}
