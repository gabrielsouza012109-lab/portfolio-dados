import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, BarChart3, BrainCircuit, Check, ChevronRight, Database, Download, Github, Linkedin, Mail, MapPin, Menu, MessageCircle, Moon, PackageSearch, Sparkles, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { content, type Content, type Lang } from "@/lib/content";

const photoUrl = `${import.meta.env.BASE_URL}gabriel-amadai.jpg`;
const resumeUrl = `${import.meta.env.BASE_URL}CV_Gabriel_Amadai.pdf`;
const ogUrl = new URL(
  `${import.meta.env.BASE_URL}og-gabriel.png`,
  "https://gabrielsouza012109-lab.github.io",
).href;
const github = "https://github.com/gabrielsouza012109-lab";
const linkedin = "https://www.linkedin.com/in/gabriel-souza-13160a1b1/";
const email = "gabrielsouza012109@gmail.com";
const phoneDisplay = "(83) 98227-0768";
const whatsapp = `https://wa.me/5583982270768`;

const skillIcons = [BarChart3, Database, PackageSearch, BrainCircuit];
const projectMeta = [
  { type: "ai" as const, href: "https://github.com/gabrielsouza012109-lab/SupplyIA" },
  { type: "pipeline" as const },
  { type: "chart" as const },
  { type: "data" as const },
  { type: "web" as const, href: "https://github.com/gabrielsouza012109-lab/gadelha-hair-agenda" },
];

type ProjectType = (typeof projectMeta)[number]["type"];

function ProjectArt({ type, art }: { type: ProjectType; art: Content["projects"]["art"] }) {
  if (type === "ai") return <div className="relative z-10 flex h-full items-center justify-center p-7"><div className="w-full max-w-[330px] rounded-lg border border-line bg-deep p-4 shadow-2xl"><div className="mb-5 flex items-center gap-2 border-b border-line pb-3 text-xs text-deep-foreground/70"><Sparkles size={16} className="text-success" /> SupplyAI <span className="ml-auto size-2 rounded-full bg-success" /></div><div className="mb-3 max-w-[85%] rounded-md bg-line/60 px-3 py-2 text-[11px]">{art.question}</div><div className="ml-auto rounded-md border border-line px-3 py-2 text-[11px] leading-relaxed">{art.answer} <span className="text-success">↗</span></div><div className="mt-5 flex items-end gap-2">{[38, 64, 47, 82, 59, 91, 73, 100, 70].map((h, i) => <div key={i} className="flex-1 rounded-t-sm bg-success/70" style={{ height: `${h * .36}px` }} />)}</div></div></div>;
  if (type === "chart") return <div className="relative z-10 flex h-full items-center justify-center p-8"><div className="w-full max-w-[330px] rounded-lg border border-line bg-deep p-5 shadow-2xl"><div className="mb-5 flex justify-between text-[11px] text-deep-foreground/70"><span>{art.overview}</span><span>↗ BI</span></div><div className="flex items-center gap-7"><div><div className="font-display text-2xl font-bold">{art.indicators}</div><div className="mt-1 text-[10px] text-deep-foreground/60">{art.breakdown}</div></div><div className="flex-1 border-l border-line pl-5"><BarChart3 size={29} className="text-success" /></div></div><div className="mt-6 flex h-20 items-end gap-2 border-b border-line">{[34, 56, 42, 65, 48, 75, 62, 85, 72, 95, 78, 100].map((h, i) => <div key={i} className="flex-1 rounded-t-sm bg-primary" style={{ height: `${h}%`, opacity: .45 + i * .045 }} />)}</div></div></div>;
  if (type === "pipeline") return <div className="relative z-10 flex h-full items-center justify-center gap-2 px-4 sm:gap-4"><div className="rounded-md border border-line bg-deep px-3 py-4 text-center text-[10px] sm:px-5"><Database className="mx-auto mb-2 text-warm" size={22} /> {art.sources}</div><ChevronRight size={16} className="shrink-0 text-success" /><div className="rounded-md border border-success/60 bg-deep px-3 py-4 text-center text-[10px] sm:px-5"><Sparkles className="mx-auto mb-2 text-success" size={22} /> ETL</div><ChevronRight size={16} className="shrink-0 text-success" /><div className="rounded-md border border-line bg-deep px-3 py-4 text-center text-[10px] sm:px-5"><BarChart3 className="mx-auto mb-2 text-primary" size={22} /> {art.insights}</div></div>;
  if (type === "data") return <div className="relative z-10 mx-auto flex h-full w-[75%] max-w-[310px] flex-col justify-center gap-2"><div className="flex gap-2 text-[10px] text-success"><span className="rounded border border-line bg-deep px-2 py-1">SQL</span><span className="rounded border border-line bg-deep px-2 py-1">KNIME</span></div>{["SELECT produto, estoque", "FROM protheus.dados", "WHERE status = 'ativo'", "ORDER BY demanda DESC"].map((line, i) => <div key={line} className="rounded border border-line bg-deep px-3 py-1.5 font-mono text-[10px] text-deep-foreground/75"><span className="mr-3 text-success">0{i + 1}</span>{line}</div>)}</div>;
  return <div className="relative z-10 mx-auto flex h-full w-[75%] max-w-[310px] flex-col justify-center"><div className="rounded-lg border border-line bg-deep p-4 shadow-2xl"><div className="mb-4 flex items-center gap-1.5 border-b border-line pb-3"><span className="size-1.5 rounded-full bg-warm" /><span className="size-1.5 rounded-full bg-success" /><span className="size-1.5 rounded-full bg-primary" /><span className="ml-auto text-[10px] text-deep-foreground/50">{art.agenda}</span></div><div className="grid grid-cols-7 gap-2">{Array.from({ length: 21 }, (_, i) => <div key={i} className={`flex aspect-square items-center justify-center rounded-sm text-[9px] ${[4, 11, 17].includes(i) ? "bg-primary text-primary-foreground" : "bg-line/60 text-deep-foreground/60"}`}>{i + 1}</div>)}</div></div></div>;
}

function Index() {
  const [lang, setLang] = useState<Lang>("pt");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[lang];

  useEffect(() => {
    const storedTheme = localStorage.getItem("folio-theme");
    if (storedTheme === "dark" || storedTheme === "light") setTheme(storedTheme);
    const storedLang = localStorage.getItem("folio-lang");
    if (storedLang === "pt" || storedLang === "en") setLang(storedLang);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = t.langAttr;
  }, [t.langAttr]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("folio-theme", next);
  };

  const toggleLang = () => {
    const next = lang === "pt" ? "en" : "pt";
    setLang(next);
    localStorage.setItem("folio-lang", next);
  };

  return <div className="min-h-screen overflow-x-hidden">
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md"><div className="site-container flex h-[72px] items-center justify-between gap-5">
      <a href="#inicio" className="flex shrink-0 items-center gap-2.5 font-display text-lg font-bold" aria-label="Gabriel Amadai, início"><span className="flex size-8 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground">G.</span><span>Gabriel Amadai<span className="text-primary">.</span></span></a>
      <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">{t.nav.map(({ name, href }) => <a key={href} href={href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">{name}</a>)}</nav>
      <div className="flex items-center gap-1 sm:gap-2">
        <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label={theme === "dark" ? t.themeToLight : t.themeToDark}>{theme === "dark" ? <Sun /> : <Moon />}</Button>
        <Button variant="ghost" size="sm" onClick={toggleLang} aria-label={t.langSwitch} className="h-9 px-2.5 font-display text-xs font-bold tracking-wide">{lang === "pt" ? "EN" : "PT"}</Button>
        <div className="hidden items-center gap-3 lg:flex"><a href={github} target="_blank" rel="noreferrer" aria-label="GitHub" className="ml-2 text-muted-foreground transition-colors hover:text-primary"><Github size={19} /></a><Button asChild size="sm"><a href="#contato">{t.cta} <ArrowUpRight size={15} /></a></Button></div>
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? t.menuClose : t.menuOpen} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</Button>
      </div>
    </div>{menuOpen && <nav aria-label="Navegação móvel" className="site-container flex flex-col gap-1 border-t border-border py-3 lg:hidden">{t.nav.map(({ name, href }) => <a key={href} href={href} className="rounded-md px-2 py-3 text-sm font-medium hover:bg-secondary" onClick={() => setMenuOpen(false)}>{name}</a>)}</nav>}</header>

    <main>
      <section id="inicio" className="relative overflow-hidden border-b border-border fine-grid"><div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" /><div className="site-container relative grid min-h-[590px] items-center gap-5 py-10 sm:gap-10 sm:py-20 lg:grid-cols-[1.17fr_.83fr] lg:gap-20 lg:py-24">
        <div className="enter-up max-w-[670px]"><div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-[10px] font-semibold text-primary shadow-sm sm:mb-8 sm:px-4 sm:text-xs"><span className="size-2 rounded-full bg-success" /> {t.hero.badge}</div><p className="mb-2 font-display text-base font-medium text-muted-foreground sm:mb-3 sm:text-lg">{t.hero.hello}</p><h1 className="display-title text-[2.8rem] sm:text-[clamp(3.25rem,5.4vw,5.75rem)]">Gabriel Amadai <span className="block text-primary">de Souza.</span></h1><p className="mt-4 max-w-[570px] text-base leading-relaxed text-muted-foreground sm:mt-7 sm:text-lg">{t.hero.tagline}</p><div className="mt-6 flex flex-wrap gap-2 sm:mt-9 sm:gap-3"><Button asChild size="lg" className="h-11 px-3 text-xs sm:h-12 sm:px-6 sm:text-sm"><a href="#projetos">{t.hero.projects} <ArrowUpRight /></a></Button><Button asChild variant="outline" size="lg" className="h-11 px-3 text-xs sm:h-12 sm:px-6 sm:text-sm"><a href={resumeUrl} target="_blank" rel="noreferrer">{t.hero.resume} <Download /></a></Button></div><div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-muted-foreground sm:mt-12 sm:gap-x-6 sm:text-sm"><span className="inline-flex items-center gap-1.5"><MapPin size={16} className="text-primary" /> {t.hero.location}</span><span className="hidden h-4 w-px bg-border sm:block" /><a href={linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={13} /></a></div></div>
        <div className="relative mx-auto flex w-full max-w-[440px] items-center justify-center lg:max-w-none"><div className="absolute aspect-square w-[74%] rounded-full border border-primary/20 sm:w-[94%]" /><div className="absolute aspect-square w-[62%] rounded-full border border-primary/25 sm:w-[77%]" /><div className="absolute right-[12%] top-[5%] size-3 rounded-full bg-warm sm:right-0 sm:top-[10%] sm:size-4" /><div className="absolute bottom-[8%] left-[13%] size-2 rounded-full bg-primary sm:left-[3%] sm:size-3" /><div className="portrait-frame relative aspect-square w-[52%] min-w-[185px] overflow-hidden rounded-full sm:w-[65%] sm:min-w-[235px]"><img src={photoUrl} alt="Retrato de Gabriel Amadai de Souza" className="h-full w-full object-cover" fetchPriority="high" /></div><div className="absolute bottom-[4%] right-[2%] hidden items-center gap-2 rounded-md border border-border bg-card px-3 py-2.5 shadow-lg sm:flex sm:right-0"><span className="flex size-7 items-center justify-center rounded bg-secondary text-primary"><BarChart3 size={16} /></span><span className="text-xs font-semibold">{t.hero.cardTitle}<span className="block font-normal text-muted-foreground">{t.hero.cardSub}</span></span></div></div>
      </div><a href="#sobre" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary lg:flex">{t.hero.discover} <ArrowDown size={14} /></a></section>

      <section id="sobre" className="py-20 lg:py-28"><div className="site-container grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-24"><div><span className="section-label">{t.about.label}</span><h2 className="display-title mt-5 text-4xl sm:text-5xl">{t.about.headingA}<br /><span className="text-primary">{t.about.headingB}</span></h2></div><div><p className="text-xl leading-relaxed text-foreground">{t.about.lead}</p><p className="mt-5 leading-relaxed text-muted-foreground">{t.about.body}</p><div className="mt-8 grid gap-3 border-t border-border pt-7 sm:grid-cols-3">{t.about.stats.map(stat => <div key={stat.key}><div className="font-display text-2xl font-bold text-primary">{stat.key}</div><div className="mt-1 text-sm text-muted-foreground">{stat.sub}</div></div>)}</div></div></div></section>

      <section id="especialidades" className="bg-surface py-20 lg:py-28"><div className="site-container"><span className="section-label">{t.skills.label}</span><div className="mt-5 flex flex-col justify-between gap-4 md:flex-row md:items-end"><h2 className="display-title text-4xl sm:text-5xl">{t.skills.heading}<span className="text-primary">.</span></h2><p className="max-w-sm text-sm leading-relaxed text-muted-foreground">{t.skills.sub}</p></div><div className="mt-11 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{t.skills.items.map(({ title, description, tags }, i) => { const Icon = skillIcons[i]!; return <article key={title} className="rounded-md border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-lg"><div className="mb-8 flex items-start justify-between"><span className="flex size-11 items-center justify-center rounded-md bg-secondary text-primary"><Icon size={22} strokeWidth={1.8} /></span><span className="font-mono text-xs text-muted-foreground">0{i + 1}</span></div><h3 className="font-display text-lg font-bold">{title}</h3><p className="mt-2 min-h-16 text-sm leading-relaxed text-muted-foreground">{description}</p><div className="mt-5 flex flex-wrap gap-1.5">{tags.map(tag => <span key={tag} className="rounded border border-border bg-surface px-2 py-1 text-[11px] font-medium text-muted-foreground">{tag}</span>)}</div></article>; })}</div></div></section>

      <section id="projetos" className="py-20 lg:py-28"><div className="site-container"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><span className="section-label">{t.projects.label}</span><h2 className="display-title mt-5 text-4xl sm:text-5xl">{t.projects.heading}<span className="text-primary">.</span></h2></div><a href={github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">{t.projects.seeGithub} <ArrowUpRight size={16} /></a></div><div className="mt-11 grid gap-5 md:grid-cols-2">{t.projects.items.map((project, i) => { const meta = projectMeta[i]!; return <article key={project.title} className={`group overflow-hidden rounded-md border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-xl ${i === 0 ? "md:col-span-2 md:grid md:grid-cols-2" : ""}`}><div className={`project-visual h-[210px] ${i === 0 ? "md:h-full md:min-h-[285px]" : ""}`}><ProjectArt type={meta.type} art={t.projects.art} /></div><div className="flex flex-col p-6 sm:p-7"><div className="flex items-center justify-between text-[11px] font-bold tracking-widest text-primary"><span>{project.label}</span><span className="font-mono text-muted-foreground">/ 0{i + 1}</span></div><h3 className="mt-4 font-display text-2xl font-bold">{project.title}</h3><p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p><div className="mt-6 flex flex-wrap gap-1.5">{project.tags.map(tag => <span key={tag} className="rounded bg-secondary px-2 py-1 text-[11px] font-medium text-secondary-foreground">{tag}</span>)}</div>{"href" in meta && <a href={meta.href} target="_blank" rel="noreferrer" className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-bold text-primary transition-all group-hover:gap-3">{t.projects.seeRepo} <ArrowUpRight size={16} /></a>}</div></article>; })}</div></div></section>

      <section id="experiencia" className="bg-surface py-20 lg:py-28"><div className="site-container grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-24"><div><span className="section-label">{t.history.label}</span><h2 className="display-title mt-5 text-4xl sm:text-5xl">{t.history.headingA}<br /><span className="text-primary">{t.history.headingB}</span></h2><p className="mt-6 max-w-xs leading-relaxed text-muted-foreground">{t.history.sub}</p></div><div className="border-l border-border pl-6 sm:pl-9">{t.history.groups.map(item => <div key={item.company} className="relative mb-11 last:mb-0"><span className="absolute -left-[30px] top-1 size-3 rounded-full border-[3px] border-primary bg-surface sm:-left-[42px]" /><h3 className="font-display text-lg font-bold">{item.company}</h3><p className="mt-1 text-xs text-muted-foreground">{item.city}</p><div className="mt-5 space-y-6">{item.positions.map(position => <div key={position.role} className="border-b border-border pb-5 last:border-0 last:pb-0"><div className="flex flex-wrap items-baseline justify-between gap-1"><h4 className="font-semibold">{position.role}</h4><span className="text-xs font-semibold text-primary">{position.date}</span></div><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{position.description}</p></div>)}</div></div>)}</div></div></section>

      <section id="formacao" className="border-b border-border py-20 lg:py-24"><div className="site-container"><span className="section-label">{t.education.label}</span><h2 className="display-title mt-5 text-4xl sm:text-5xl">{t.education.heading}<span className="text-primary">.</span></h2><div className="mt-10 grid gap-0 md:grid-cols-3">{t.education.items.map((item, i) => <div key={item.course} className={`border-t border-border py-6 md:pr-7 ${i > 0 ? "md:border-l md:pl-7" : ""}`}><span className="font-mono text-xs font-bold text-primary">{item.year}</span><h3 className="mt-3 font-display text-lg font-bold leading-snug">{item.course}</h3><p className="mt-2 text-sm text-muted-foreground">{item.school}</p></div>)}</div></div></section>

      <section id="contato" className="bg-deep py-20 text-deep-foreground lg:py-28"><div className="site-container grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end"><div><span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-success"><span className="size-2 rounded-full bg-success" /> {t.contact.badge}</span><h2 className="display-title mt-6 max-w-2xl text-4xl sm:text-6xl">{t.contact.headingA}<span className="text-success">{t.contact.headingB}</span></h2><p className="mt-6 max-w-lg leading-relaxed text-deep-foreground/65">{t.contact.sub}</p><Button asChild size="lg" className="mt-8 h-12 px-6"><a href={whatsapp} target="_blank" rel="noreferrer">{t.contact.button} <MessageCircle /></a></Button></div><div className="lg:pl-16"><div className="border-t border-line py-5"><span className="mb-2 block text-xs uppercase tracking-widest text-deep-foreground/50">{t.contact.whatsapp}</span><a href={whatsapp} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-2 font-medium transition-colors hover:text-success"><span className="inline-flex items-center gap-2"><MessageCircle size={17} className="shrink-0" />{phoneDisplay}</span><ArrowUpRight size={17} className="shrink-0" /></a></div><div className="border-t border-line py-5"><span className="mb-2 block text-xs uppercase tracking-widest text-deep-foreground/50">{t.contact.email}</span><a href={`mailto:${email}`} className="flex items-center justify-between gap-2 break-all font-medium transition-colors hover:text-success"><span className="inline-flex items-center gap-2"><Mail size={17} className="shrink-0" />{email}</span><ArrowUpRight size={17} className="shrink-0" /></a></div><div className="border-t border-line py-5"><span className="mb-2 block text-xs uppercase tracking-widest text-deep-foreground/50">{t.contact.networks}</span><div className="flex gap-5"><a href={linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-success"><Linkedin size={17} /> LinkedIn</a><a href={github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-success"><Github size={17} /> GitHub</a></div></div><div className="flex items-center gap-2 border-t border-line py-5 text-sm text-deep-foreground/60"><Check size={16} className="text-success" /> {t.contact.location}</div></div></div></section>
    </main>
    <footer className="bg-deep text-deep-foreground"><div className="site-container flex flex-col gap-4 border-t border-line py-7 text-xs text-deep-foreground/50 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} Gabriel Amadai de Souza.</span><a href="#inicio" className="inline-flex items-center gap-2 transition-colors hover:text-deep-foreground">{t.footer.backToTop} <ArrowRight className="-rotate-90" size={14} /></a></div></footer>
    <a href={whatsapp} target="_blank" rel="noreferrer" aria-label={t.whatsappAria} className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition-transform hover:scale-105 sm:bottom-7 sm:right-7"><MessageCircle size={26} /></a>
  </div>;
}

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Gabriel Amadai de Souza | Dados, BI e Supply Chain" },
    { name: "description", content: "Portfólio de Gabriel Amadai de Souza, analista de dados, BI e Supply Chain em João Pessoa. Projetos em Python, SQL, Power BI, automação e IA." },
    { property: "og:title", content: "Gabriel Amadai de Souza | Dados, BI e Supply Chain" },
    { property: "og:description", content: "Conheça os projetos e a trajetória de Gabriel Amadai de Souza em análise de dados, BI e Supply Chain." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { property: "og:image", content: ogUrl },
    { property: "og:image:alt", content: "Gabriel Amadai de Souza — Analista de Dados · BI · Supply Chain" },
    { name: "twitter:image", content: ogUrl },
  ] }),
  component: Index,
});
