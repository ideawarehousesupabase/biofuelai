import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-biofuel.jpg";
import {
  ArrowRight,
  ShieldCheck,
  Activity,
  Database,
  Cpu,
  LineChart,
  FileCheck2,
  Layers,
  Zap,
  Leaf,
  CheckCircle2,
  AlertTriangle,
  Fingerprint,
  Boxes,
  Radio,
  Sparkle,
  Building2,
  Users2,
  Factory,
  Gauge,
} from "lucide-react";

const WTP_PERCENTAGE = "55%";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Modules />
        <Technology />
        <EvidencePack />
        <Impact />
        <Market />
        <Competitive />
        <Pricing />
        <Roadmap />
        <Financials />
        <Founder />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

/* ------------------------------ NAV ------------------------------ */
function Nav() {
  const links = [
    { href: "#problem", label: "Problem" },
    { href: "#solution", label: "Solution" },
    { href: "#modules", label: "Modules" },
    { href: "#technology", label: "Technology" },
    { href: "#market", label: "Market Validation" },
    { href: "#pricing", label: "Pricing" },
    { href: "#roadmap", label: "Roadmap" },
    { href: "#founder", label: "Founder" },
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-primary/95 border-b border-primary/20 text-primary-foreground">
      <div className="w-full max-w-[100rem] mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-3">
          <div className="relative h-9 w-9 flex items-center justify-center">
            <img src="/logo.png" alt="BioFuel Integrity Twin Logo" className="h-full w-full object-contain" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-base tracking-tight">BioFuel Integrity Twin</span>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-7 text-sm text-primary-foreground/70">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-primary-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#cta"
          className="inline-flex items-center gap-1.5 rounded-full bg-verified text-primary-foreground px-3 py-1.5 text-xs font-semibold shadow-lg hover:brightness-110 transition"
        >
          Request pilot <ArrowRight className="h-3 w-3" />
        </a>
      </div>
    </header>
  );
}

function Flame() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary-foreground" fill="currentColor">
      <path d="M12 2s3 3 3 6a3 3 0 1 1-6 0c0-1 .5-2 .5-2S6 9 6 13a6 6 0 0 0 12 0c0-4-3-6-3-6s0 2-1 3c0-3-2-8-2-8Z" />
    </svg>
  );
}

/* ------------------------------ HERO ------------------------------ */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-14 pb-24">
      <div className="container-page grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="chip">
            <span className="h-1.5 w-1.5 rounded-full bg-verified" /> CLIMATE-TECH · BIOENERGY · CARBON MRV
          </span>
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.02]">
            Turn fragmented fuel evidence into{" "}
            <span className="text-gradient-ember">Audit-Ready Carbon Truth.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            BioFuel Integrity Twin is the Digital MRV operating system for UK industrial biomass —
            closing the{" "}
            <span className="text-foreground font-medium">Carbon Integrity Gap</span> between fuel
            physics and carbon claims through forensic, explainable, audit-ready evidence.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-full bg-verified text-primary-foreground px-6 py-3 font-semibold shadow-xl hover:brightness-110 transition"
            >
              Request Pilot Access <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#modules"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 font-semibold text-foreground hover:bg-surface transition"
            >
              See the platform
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6">
            <Stat value="£10bn+" label="UK biomass power market by 2035" />
            <Stat value="£114bn" label="Global carbon credit market (2025)" />
            <Stat value="2,000+" label="UK target industrial sites" />
          </div>
        </div>

        <div className="relative">
          <div className="surface-panel ember-glow overflow-hidden">
            <img
              src={heroImage}
              alt="Biomass boiler with digital twin overlay showing forensic evidence chain"
              width={1600}
              height={1104}
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 surface-panel p-4 w-64 hidden md:block">
            <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-muted-foreground">
              <span>Carbon Defensibility</span>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-4xl font-bold text-gradient-ember">94</span>
              <span className="text-sm text-muted-foreground">/100</span>
            </div>
            <div className="mt-1 text-xs text-muted-foreground">
              Batch BFT-2026-00184 · Example Biomass Operator Ltd (Illustrative)
            </div>
            <div className="mt-4 text-[10px] text-muted-foreground italic border-t border-border/40 pt-2">
              Illustrative product mock-up. BioFuel Integrity Twin is pre-launch; no client data is shown.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl md:text-3xl font-bold text-gradient-ember">{value}</div>
      <div className="mt-1 text-xs text-muted-foreground leading-snug">{label}</div>
    </div>
  );
}

/* ------------------------------ PROBLEM ------------------------------ */
function Problem() {
  const steps = [
    {
      k: "STEP 01",
      title: "Fuel delivered",
      body: "Biomass feedstock arrives with paper lab certs, spreadsheet moisture logs and disconnected supplier records.",
    },
    {
      k: "STEP 02",
      title: "Boiler runs",
      body: "Moisture drift, storage degradation and combustion inefficiency compound — invisible to compliance systems.",
    },
    {
      k: "STEP 03",
      title: "Claim submitted",
      body: "Operator files carbon reductions on assumptions; physical fuel evidence never mapped to the claim.",
    },
    {
      k: "STEP 04",
      title: "Ofgem audit",
      body: "Fragmented, retrospective evidence fails scrutiny. Credits discounted, invalidated or rejected — projected 20–35% ROI lost.",
    },
  ];
  return (
    <section id="problem" className="py-24 border-t border-border/50">
      <div className="container-page">
        <span className="chip">Chapter 01 · The Crisis</span>
        <h2 className="mt-4 text-4xl md:text-5xl font-bold max-w-4xl">
          The <span className="text-gradient-ember">Carbon Integrity Gap</span>: millions in credits
          lost between the boiler room and the boardroom.
        </h2>
        <p className="mt-5 text-muted-foreground max-w-3xl">
          Based on pre-launch market research, an estimated 70% of UK biomass operators aggregate fuel-quality data manually. Teams are estimated to spend 4–6 hours
          per site per week on documentation. In market modelling, 72% feel their evidence trail is vulnerable to
          verifier scrutiny. Industry-wide, this is a multi-million pound "verification tax".
        </p>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div key={s.k} className="surface-panel p-6 relative">
              <div className="text-[11px] tracking-[0.18em] text-primary font-semibold">{s.k}</div>
              <div className="mt-3 text-lg font-semibold">{s.title}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 h-5 w-5 text-primary/70" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-1 gap-4 max-w-3xl mx-auto">
          <div className="surface-panel p-6 flex items-start gap-4 text-sm">
            <AlertTriangle className="h-5 w-5 text-ember shrink-0 mt-0.5" />
            <div className="text-foreground flex-1">
              <p>
                "The National Audit Office has found that the government cannot demonstrate whether biomass generators receiving £22 billion in public subsidies are complying with the sustainability requirements under which they are classed as carbon neutral."
              </p>
              <p className="mt-2 text-xs text-muted-foreground italic">
                Source: National Audit Office, The government's support for biomass, January 2024.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ SOLUTION ------------------------------ */
function Solution() {
  return (
    <section id="solution" className="py-24 border-t border-border/50">
      <div className="container-page grid lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-2">
          <span className="chip">Chapter 02 · The Solution</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Measure. Model. <span className="text-gradient-ember">Assure.</span> Sustain.
          </h2>
        </div>
        <div className="lg:col-span-3 space-y-6 text-muted-foreground text-lg leading-relaxed">
          <p>
            A closed-loop platform that captures the physical "DNA" of every biomass batch —
            moisture, GCV, contamination, storage, transport — and encodes it as a reusable,
            benchmarked digital twin.
          </p>
          <p>
            The proprietary{" "}
            <span className="text-foreground font-semibold">Carbon Integrity Gap Engine</span>{" "}
            deconstructs each carbon claim in real time, mapping fuel physics against Ofgem,
            UK Biomass Strategy 2023 and voluntary registry frameworks (CDM · Gold Standard · VCS · GCC).
          </p>
          <p>
            Operators reclaim the full financial value of every tonne burnt — no more
            "verification anxiety", no more credit leakage.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ ENDORSEMENTS (PENDING) ------------------------------ */
/*
function Endorsements() {
  return (
    <section id="endorsements" className="py-24 border-t border-border/50">
      <div className="container-page">
        <span className="chip">Recognised and Supported</span>
        <h2 className="mt-4 text-4xl md:text-5xl font-bold max-w-4xl">
          Backed by <span className="text-gradient-ember">scientific and governance</span> leaders.
        </h2>
        <p className="mt-5 text-muted-foreground max-w-3xl leading-relaxed">
          BioFuel Integrity Twin's innovation and market approach are supported by letters from senior figures in science, environmental governance, and carbon markets, including Dr. Raghunath Anant Mashelkar FRS (Padma Vibhushan; former Director General, CSIR India; Fellow of the Royal Society) and Prof. James Palmer (Senior Lecturer in Environmental Governance, University of Bristol).
        </p>
      </div>
    </section>
  );
}
*/

/* ------------------------------ MODULES ------------------------------ */
function Modules() {
  const modules = [
    {
      icon: Fingerprint,
      k: "MODULE 01",
      title: "BioFuel Integrity Twin Generation Engine",
      body: "A data-fusion engine that maps supplier records, lab certificates, transport data and boiler telemetry into an unbroken evidence chain per batch.",
    },
    {
      icon: Gauge,
      k: "MODULE 02",
      title: "Carbon Integrity Gap Engine",
      body: "Automatically calculates the delta between claimed carbon reductions and physically-supported outcomes — detecting moisture, storage and combustion discrepancies.",
    },
    {
      icon: Activity,
      k: "MODULE 03",
      title: "Predictive Biomass Integrity Intelligence Engine",
      body: "Forecasts fuel-quality drift against historical storage patterns — flagging moisture spikes and degradation before credit issuance is compromised.",
    },
    {
      icon: Boxes,
      k: "MODULE 04",
      title: "Supplier Traceability & Reliability Intelligence",
      body: "Turns transient supplier data into permanent traceability equity. Every fuel source scored, benchmarked and audit-mapped.",
    },
    {
      icon: ShieldCheck,
      k: "MODULE 05",
      title: "Carbon Credit Defensibility Score",
      body: "A composite 0–100 score quantifying the credibility of every carbon claim — instantly de-risking credit disputes and unlocking premium pricing.",
    },
    {
      icon: FileCheck2,
      k: "MODULE 06",
      title: "Evidence-as-a-Service Dashboard",
      body: "One-click, signed evidence packs — documents, batch DNA, scores and reviewer notes — ready for Ofgem, verifiers and carbon registries.",
    },
  ];
  return (
    <section id="modules" className="py-24 border-t border-border/50">
      <div className="container-page">
        <span className="chip">Product · Six integrated modules</span>
        <h2 className="mt-4 text-4xl md:text-5xl font-bold max-w-4xl">
          From fragmented fuel logs to{" "}
          <span className="text-gradient-ember">audit-ready carbon truth.</span>
        </h2>
        <p className="mt-5 text-muted-foreground max-w-3xl">
          Six proprietary modules — architected around forensic fuel physics and UK regulatory
          reality — form a single Evidence-as-a-Service layer.
        </p>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((m) => {
            const Icon = m.icon;
            return (
              <div key={m.k} className="surface-panel p-6 hover:border-primary/40 transition group">
                <div className="flex items-center justify-between">
                  <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary/20 to-ember/10 border border-primary/20 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-[11px] tracking-[0.18em] text-muted-foreground">
                    {m.k}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-snug">{m.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ TECHNOLOGY ------------------------------ */
function Technology() {
  const stages = [
    { n: "01", t: "Evidence Ingestion", d: "LIMS · boiler meters · supplier ERPs · weather APIs — data-agnostic connectors, no hardware." },
    { n: "02", t: "Normalisation", d: "Disparate fuel formats standardised into a single batch-level physical schema." },
    { n: "03", t: "Forensic Logic", d: "Carbon Integrity Gap Engine maps fuel physics to Ofgem, CDM, Gold Standard, VCS, GCC frameworks." },
    { n: "04", t: "Predictive Layer", d: "AI models flag storage degradation, moisture drift and combustion inefficiency." },
    { n: "05", t: "Defensibility Dashboard", d: "Real-time scores, signed evidence packs, benchmark reports for auditors and investors." },
  ];
  const stack = [
    { l: "Ingestion", v: "LIMS · Boiler API · ERP" },
    { l: "Logic Layer", v: "Carbon Integrity Gap Engine" },
    { l: "Prediction", v: "AI/ML fuel-quality models" },
    { l: "Ledger", v: "Biomass Integrity Ledger (BIFL)" },
    { l: "Compliance", v: "Ofgem · UK ETS · UK Biomass Strategy 2023" },
    { l: "Standards", v: "CDM · Gold Standard · VCS · GCC" },
    { l: "Security", v: "Encrypted evidence store · role-based access" },
    { l: "Delivery", v: "Cloud-native · API-first · multi-region" },
  ];
  return (
    <section id="technology" className="py-24 border-t border-border/50">
      <div className="container-page">
        <span className="chip">Technology Plan</span>
        <h2 className="mt-4 text-4xl md:text-5xl font-bold max-w-4xl">
          A five-stage pipeline built on{" "}
          <span className="text-gradient-ember">forensic fuel physics.</span>
        </h2>

        <div className="mt-14 grid lg:grid-cols-5 gap-4">
          {stages.map((s) => (
            <div key={s.n} className="surface-panel p-5">
              <div className="text-3xl font-bold text-primary font-mono">{s.n}</div>
              <div className="mt-3 font-semibold">{s.t}</div>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-4">
          <div className="surface-panel p-6">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Audit prep</div>
            <div className="mt-2 text-4xl font-bold text-gradient-ember">40–50%</div>
            <div className="mt-1 text-sm text-muted-foreground">projected reduction in audit preparation time, based on modelled workflow analysis.</div>
          </div>
          <div className="surface-panel p-6">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Credit defensibility</div>
            <div className="mt-2 text-4xl font-bold text-gradient-ember">+25%</div>
            <div className="mt-1 text-sm text-muted-foreground">modelled average increase in documentation completeness.</div>
          </div>
          <div className="surface-panel p-6">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Boiler efficiency</div>
            <div className="mt-2 text-4xl font-bold text-gradient-ember">+12%</div>
            <div className="mt-1 text-sm text-muted-foreground">estimated improvement via predictive moisture alerts.</div>
          </div>
        </div>

        <div className="mt-10 surface-panel p-6">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Platform Stack
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-3 text-sm">
            {stack.map((s) => (
              <div key={s.l} className="flex justify-between gap-4 border-b border-border/40 pb-2">
                <span className="text-muted-foreground">{s.l}</span>
                <span className="text-foreground font-medium text-right">{s.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ EVIDENCE PACK ------------------------------ */
function EvidencePack() {
  const rows = [
    ["Batch Summary", "BFT-2026-00184 · 128t wood pellets"],
    ["Operator", "Example Biomass Operator Ltd (Illustrative)"],
    ["Fuel DNA", "Moisture 8.2% · GCV 18.4 MJ/kg · Ash 1.1%"],
    ["Supplier Trace", "3 tier-1 suppliers · full chain-of-custody"],
    ["Carbon Reduction Claim", "412 tCO₂e · methodology GCC-Bio"],
    ["Defensibility Score", "94 / 100"],
    ["Findings", "1 predictive moisture alert · resolved"],
    ["Signed", "BioFuel Integrity Twin Ltd · Ref BFT-2026-00184"],
  ];
  return (
    <section className="py-24 border-t border-border/50">
      <div className="container-page grid lg:grid-cols-5 gap-10 items-start">
        <div className="lg:col-span-2">
          <span className="chip">Deliverable · Audit Evidence Pack</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            One-click, signed <span className="text-gradient-ember">Carbon Truth</span> report.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Every document, extracted field, batch DNA and reviewer note — ready for Ofgem,
            registries and internal audit. Immutable, timestamped, defensible.
          </p>
          <a
            href="#cta"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary/20 transition"
          >
            See a sample pack <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="lg:col-span-3 surface-panel p-6 ember-glow">
          <div className="flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground">
            <span>Evidence Pack · BFT-2026-00184</span>
          </div>
          <div className="mt-4 mb-2 text-xs text-muted-foreground italic">
            Illustrative product mock-up. BioFuel Integrity Twin is pre-launch; no client data is shown.
          </div>
          <div className="mt-6 divide-y divide-border/50">
            {rows.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-6 py-3 text-sm">
                <span className="text-muted-foreground">{k}</span>
                <span className="text-foreground font-medium text-right">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ IMPACT ------------------------------ */
function Impact() {
  const impacts = [
    { v: "30%+", l: "Modelled improvement in operational efficiency" },
    { v: "25%+", l: "Projected reduction in quality claims & rejections" },
    { v: "20%+", l: "Estimated lower compliance & audit overhead" },
    { v: "15%+", l: "Projected increase in validation success" },
    { v: "20+", l: "Specialist UK green jobs created" },
  ];
  return (
    <section className="py-20 border-t border-border/50 bg-gradient-to-b from-transparent via-surface/40 to-transparent">
      <div className="container-page">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <span className="chip">Impact That Matters</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">
              Trusted data. Smarter decisions. Sustainable impact.
            </h2>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-4">
          {impacts.map((i) => (
            <div key={i.l} className="surface-panel p-6 text-center">
              <div className="text-4xl font-bold text-gradient-ember">{i.v}</div>
              <div className="mt-3 text-xs text-muted-foreground leading-snug">{i.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ MARKET ------------------------------ */
function Market() {
  const stats = [
    { v: "88%", l: "projected to consider a unified digital twin for fuel evidence essential" },
    { v: "92%", l: "modelled to want automated flagging of quality-to-carbon risks pre-audit" },
    { v: "84%", l: "indicated interest in piloting a platform of this kind, in pre-launch market research modelling (186 respondents)" },
    { v: "72%", l: "estimated to feel their current evidence trail is vulnerable to verifier scrutiny" },
    { v: "70%", l: "projected to aggregate biomass fuel-quality data entirely manually" },
    { v: WTP_PERCENTAGE, l: "estimated willingness to pay £1,000–£4,000 monthly for audit-integrity assurance" },
  ];
  return (
    <section id="market" className="py-24 border-t border-border/50">
      <div className="container-page">
        <span className="chip">Based on pre-launch market research modelling · 186 respondents</span>
        <h2 className="mt-4 text-4xl md:text-5xl font-bold max-w-4xl">
          A validated, <span className="text-gradient-ember">underserved</span> industrial market.
        </h2>
        <p className="mt-5 text-muted-foreground max-w-3xl">
          Structured findings across industrial heat users, carbon developers, energy
          consultants and biomass suppliers, anchored by the founder's engagement with 10 completed interviews with UK
          industrial biomass operators across Humber, Teesside, North West and Scotland clusters.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {stats.map((s) => (
            <div key={s.l} className="surface-panel p-6">
              <div className="text-5xl font-bold text-gradient-ember">{s.v}</div>
              <div className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {[
            { i: Factory, t: "Industrial Boiler Operators", d: "~1,500 UK sites — Ofgem-regulated heat users." },
            { i: Building2, t: "Carbon Project Developers", d: "~500 firms needing pre-verification evidence packs." },
            { i: Users2, t: "Energy & Carbon Consultants", d: "~1,000 advisory firms managing multi-client audits." },
          ].map((c) => {
            const Icon = c.i;
            return (
              <div key={c.t} className="surface-panel p-6">
                <Icon className="h-6 w-6 text-primary" />
                <div className="mt-3 font-semibold">{c.t}</div>
                <div className="mt-1 text-sm text-muted-foreground">{c.d}</div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 surface-panel p-6 text-sm text-muted-foreground leading-relaxed">
          <h3 className="font-semibold text-foreground mb-2 text-base">Global Expansion Readiness</h3>
          The India–UK Comprehensive Economic and Trade Agreement (CETA), in force since 15 July 2026, establishes a formal framework for UK–India services and digital trade — directly supporting BioFuel Integrity Twin's planned expansion into the Indian industrial biomass market, where the maturing Carbon Credit Trading Scheme (CCTS) will require operators to evidence the integrity of their carbon claims.
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ COMPETITIVE ------------------------------ */
function Competitive() {
  // [capability, Enterprise ESG, Biomass Supply Chain / ERP, Ratings & dMRV Agencies, Traditional Fuel Labs, BioFuel Integrity Twin]
  const rows: [string, boolean, boolean, boolean, boolean, boolean][] = [
    ["Forensic fuel-physics digital twin", false, false, false, false, true],
    ["Carbon Integrity Gap Engine", false, false, false, false, true],
    ["Predictive storage-degradation alerts", false, false, false, false, true],
    ["Ofgem / UK Biomass Strategy 2023 alignment", false, true, true, false, true],
    ["Multi-standard mapping (CDM · Gold Standard · VCS · GCC)", true, false, true, false, true],
    ["Evidence-as-a-Service audit packs", false, false, false, false, true],
    ["Federated integrity benchmarking (BIFL)", false, false, false, false, true],
  ];
  const Cell = ({ v }: { v: boolean }) =>
    v ? (
      <CheckCircle2 className="h-5 w-5 text-verified inline" />
    ) : (
      <span className="text-muted-foreground/50">—</span>
    );
  return (
    <section className="py-24 border-t border-border/50">
      <div className="container-page">
        <span className="chip">Competitive Advantage</span>
        <h2 className="mt-4 text-4xl md:text-5xl font-bold max-w-4xl">
          Why competitors <span className="text-gradient-ember">cannot easily replicate</span> this.
        </h2>
        <div className="mt-6 text-sm text-muted-foreground border-l-2 border-primary/40 pl-4 py-1 max-w-3xl">
          UK Patent Application GB2617530.7 (filed 28 July 2026), covering all six novel elements A to F, search and examination requested, supported by an independent novelty search against global competitors.
        </div>
        <div className="mt-8 surface-panel overflow-x-auto">
          <table className="w-full text-sm min-w-[900px]">
            <thead>
              <tr className="text-left border-b border-border/60">
                <th className="p-4 font-semibold">Capability</th>
                <th className="p-4 text-center font-semibold text-muted-foreground">
                  Enterprise ESG Platforms
                </th>
                <th className="p-4 text-center font-semibold text-muted-foreground">
                  Biomass Supply Chain / ERP
                </th>
                <th className="p-4 text-center font-semibold text-muted-foreground">
                  Ratings & dMRV Agencies
                </th>
                <th className="p-4 text-center font-semibold text-muted-foreground">
                  Traditional Fuel Labs
                </th>
                <th className="p-4 text-center font-semibold text-primary">
                  BioFuel Integrity Twin
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r[0]} className="border-b border-border/40 last:border-0">
                  <td className="p-4">{r[0]}</td>
                  <td className="p-4 text-center"><Cell v={r[1]} /></td>
                  <td className="p-4 text-center"><Cell v={r[2]} /></td>
                  <td className="p-4 text-center"><Cell v={r[3]} /></td>
                  <td className="p-4 text-center"><Cell v={r[4]} /></td>
                  <td className="p-4 text-center bg-primary/5"><Cell v={r[5]} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ PRICING ------------------------------ */
function Pricing() {
  const tiers = [
    {
      name: "Integrity Diagnostic",
      price: "£200",
      unit: "/ site (one-off)",
      target: "Industrial Biomass Operators",
      features: [
        "Baseline site audit + Carbon Integrity Gap analysis",
        "Fuel-physics benchmark report (moisture, GCV, ash)",
        "Ofgem-aligned evidence readiness score",
      ],
    },
    {
      name: "SaaS Subscription",
      price: "£290",
      unit: "/ month",
      target: "Industrial Biomass Operators",
      popular: true,
      features: [
        "Continuous Digital MRV monitoring",
        "Carbon Credit Defensibility Score",
        "Predictive Biomass Integrity Intelligence Engine",
        "Evidence-as-a-Service dashboard",
      ],
    },
    {
      name: "Supplier Certification",
      price: "£340",
      unit: "/ month",
      target: "Biomass suppliers & chain-of-custody partners",
      features: [
        "Supplier Traceability & Reliability Intelligence",
        "Chain-of-custody evidence bundling",
        "BioFuel Integrity Ledger (BIFL) registration",
      ],
    },
    {
      name: "Carbon Developer Licence",
      price: "£300",
      unit: "/ month",
      target: "Carbon Project Developers",
      features: [
        "Pre-verification evidence packs (CDM · Gold Standard · VCS · GCC)",
        "Batch-to-credit forensic mapping",
        "Registry-ready audit trail",
      ],
    },
    {
      name: "Professional Consultant Licence",
      price: "£420",
      unit: "/ month",
      target: "Energy Consultants & assurance firms",
      features: [
        "Multi-client white-label dashboard",
        "Federated benchmarking across engagements",
        "Advanced forensic reporting & audit support",
      ],
    },
    {
      name: "Onboarding Fee",
      price: "£950",
      unit: " / site (one-off)",
      target: "All new clients",
      features: [
        "System integration and setup",
        "Initial data onboarding",
      ],
    },
    {
      name: "Evidence Pack",
      price: "£1,150",
      unit: " / pack",
      target: "Operators & Developers",
      features: [
        "Comprehensive audit-ready pack",
        "Signed verification",
      ],
    },
  ];
  return (
    <section id="pricing" className="py-24 border-t border-border/50">
      <div className="container-page">
        <span className="chip">Viability · Value-based pricing</span>
        <h2 className="mt-4 text-4xl md:text-5xl font-bold max-w-4xl">
          A subscription that pays for itself the first time it{" "}
          <span className="text-gradient-ember">prevents an audit failure.</span>
        </h2>
        <p className="mt-5 text-muted-foreground max-w-3xl">
          Priced deliberately below enterprise ESG platforms — designed for the operational reality
          of UK biomass sites. Based on pre-launch market research, an estimated {WTP_PERCENTAGE} of modelled firms indicated willingness to pay for
          audit-integrity assurance at these price points.
        </p>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`surface-panel p-7 relative ${t.popular ? "ember-glow border-primary/40" : ""}`}
            >
              {t.popular && (
                <span className="absolute -top-3 left-7 chip bg-verified text-primary-foreground border-none">
                  <Sparkle className="h-3 w-3" /> Most popular
                </span>
              )}
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{t.target}</div>
              <div className="mt-3 text-xl font-semibold">{t.name}</div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-gradient-ember">{t.price}</span>
                <span className="text-sm text-muted-foreground">{t.unit}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-verified mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className="mt-7 w-full inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface-elevated px-5 py-2.5 text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition"
              >
                Request Pilot Access
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ ROADMAP ------------------------------ */
function Roadmap() {
  const phases = [
    {
      p: "Phase 1 · Year 1",
      t: "UK Soft Launch & Validation",
      d: "MVP delivery: BioFuel Integrity Twin Generation Engine + LIMS/boiler API connectors. Deploy diagnostics at 5–10 UK industrial biomass sites. Validate the BioFuel Integrity Ledger (BIFL) against third-party audit outcomes.",
      m: "0 → 45 active sites",
    },
    {
      p: "Phase 2 · Year 2",
      t: "Full UK Launch",
      d: "Full SaaS rollout across 50–100 sites in Humber, Teesside and North West clusters. Plug-and-play LIMS/monitoring integration. Strategic partnerships with UK carbon verifiers and consultants.",
      m: "45 → 100+ sites",
    },
    {
      p: "Phase 3 · Year 3",
      t: "National Expansion",
      d: "National UK coverage. Automated Carbon Credit Defensibility reporting at scale. API licensing to carbon registries. Launch of the BioFuel Integrity Ledger (BIFL) network layer.",
      m: "100 → 200+ sites",
    },
    {
      p: "Phase 4 · Years 4–5",
      t: "International Scaling",
      d: "First EU industrial-cluster pilots, then global expansion toward 500+ industrial biomass sites. Licensing and franchising with regional sustainability partners. 20+ specialist UK jobs created.",
      m: "200 → 500+ sites",
    },
  ];
  return (
    <section id="roadmap" className="py-24 border-t border-border/50">
      <div className="container-page">
        <span className="chip">Five-year roadmap</span>
        <h2 className="mt-4 text-4xl md:text-5xl font-bold max-w-4xl">
          From UK soft launch to{" "}
          <span className="text-gradient-ember">global bioenergy standard.</span>
        </h2>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {phases.map((p) => (
            <div key={p.p} className="surface-panel p-6">
              <div className="text-[11px] tracking-[0.18em] text-primary font-semibold">{p.p}</div>
              <div className="mt-2 text-lg font-semibold">{p.t}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              <div className="mt-5 pt-4 border-t border-border/40 text-sm text-verified font-medium">
                {p.m}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ FINANCIALS ------------------------------ */
function Financials() {
  const years = [
    { y: "Year 1", theme: "Foundation & Validation", rev: "£101k", margin: "13.3%", sites: "45" },
    { y: "Year 2", theme: "UK Scale", rev: "£437k", margin: "26.9%", sites: "100+" },
    { y: "Year 3", theme: "National + Early International", rev: "£890k", margin: "29.8%", sites: "200+" },
  ];
  return (
    <section className="py-24 border-t border-border/50">
      <div className="container-page">
        <span className="chip">Financial Plan</span>
        <h2 className="mt-4 text-4xl md:text-5xl font-bold max-w-4xl">
          Lean scale.{" "}
          <span className="text-gradient-ember">High margins.</span> Founder-funded start.
        </h2>
        <p className="mt-5 text-muted-foreground max-w-3xl">
          £50k opening capital from founder equity covers MVP, methodology alignment and pilot
          acquisition.
        </p>

        <div className="mt-10 grid lg:grid-cols-4 gap-4">
          <div className="surface-panel p-6">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              Year 3 revenue
            </div>
            <div className="mt-2 text-4xl font-bold text-gradient-ember">£890k</div>
          </div>
          <div className="surface-panel p-6">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              Year 3 net margin
            </div>
            <div className="mt-2 text-4xl font-bold text-gradient-ember">29.8%</div>
          </div>
          <div className="surface-panel p-6">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              Year 3 cash
            </div>
            <div className="mt-2 text-4xl font-bold text-gradient-ember">£429k</div>
          </div>
          <div className="surface-panel p-6">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              Startup capital
            </div>
            <div className="mt-2 text-4xl font-bold text-gradient-ember">£50k</div>
          </div>
        </div>

        <div className="mt-8 surface-panel overflow-x-auto">
          <table className="w-full text-sm min-w-[600px]">
            <thead>
              <tr className="text-left border-b border-border/60">
                <th className="p-4 font-semibold">Year</th>
                <th className="p-4 font-semibold">Theme</th>
                <th className="p-4 font-semibold">Revenue</th>
                <th className="p-4 font-semibold">Net Margin</th>
                <th className="p-4 font-semibold">Active Sites</th>
              </tr>
            </thead>
            <tbody>
              {years.map((y) => (
                <tr key={y.y} className="border-b border-border/40 last:border-0">
                  <td className="p-4 font-semibold text-primary">{y.y}</td>
                  <td className="p-4 text-muted-foreground">{y.theme}</td>
                  <td className="p-4 font-medium">{y.rev}</td>
                  <td className="p-4 font-medium">{y.margin}</td>
                  <td className="p-4 font-medium">{y.sites}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-xs text-muted-foreground">
          Targets from the internal financial model. All figures GBP. Actual outcomes depend on
          pilot conversion, regional partnership execution and UK carbon-market conditions.
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ FOUNDER ------------------------------ */
function Founder() {
  return (
    <section id="founder" className="py-24 border-t border-border/50">
      <div className="container-page grid lg:grid-cols-5 gap-10 items-start">
        <div className="lg:col-span-2">
          <span className="chip">Founder Profile</span>
          <div className="mt-6 h-24 w-24 rounded-2xl bg-gradient-to-br from-primary to-ember flex items-center justify-center text-3xl font-bold text-primary-foreground shadow-xl shadow-ember/40">
            SJ
          </div>
          <h2 className="mt-6 text-4xl font-bold">Satyajit Joglekar</h2>
          <div className="mt-2 text-muted-foreground">Founder & CEO</div>
          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            <div className="surface-panel p-4">
              <div className="text-xl font-bold text-gradient-ember">10</div>
              <div className="text-[11px] text-muted-foreground mt-1">Completed interviews</div>
            </div>
            <div className="surface-panel p-4">
              <div className="text-xl font-bold text-gradient-ember">186</div>
              <div className="text-[11px] text-muted-foreground mt-1">Modelled respondents</div>
            </div>
            <div className="surface-panel p-4">
              <div className="text-xl font-bold text-gradient-ember">3</div>
              <div className="text-[11px] text-muted-foreground mt-1">Carbon frameworks</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-5 text-muted-foreground leading-relaxed">
          <p>
            Satyajit brings 14 years of experience in carbon markets and industrial energy, spanning India and the UK. At Thermax Ltd, one of India's leading energy and environment engineering companies, he developed India's first Industrial CDM Programme of Activities (PoA) — pioneering work in structuring verifiable carbon reduction programmes for industrial energy users.
          </p>
          <p>
            <span className="text-foreground font-medium">MSc Climate Change Science & Policy</span>,
            University of Bristol. Technical mastery of biomass fuel physics (GCV, moisture, ash
            analysis) and onsite energy-efficiency monitoring — the exact skillset needed to close
            the industry's "verification gap".
          </p>
          <p>
            This career-long focus on the gap between claimed and evidence-supported carbon performance is the founding insight behind BioFuel Integrity Twin.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 pt-4">
            {[
              "Full carbon lifecycle: baseline → MRV → issuance",
              "UK sustainability & TCFD/ISSB fluency",
              "Biomass fuel-physics: GCV, moisture, ash",
              "Voluntary carbon market operator relationships",
            ].map((s) => (
              <div key={s} className="flex items-start gap-2 text-sm">
                <Leaf className="h-4 w-4 text-verified mt-0.5 shrink-0" />
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ CTA ------------------------------ */
function CTA() {
  return (
    <section id="cta" className="py-24 border-t border-border/50">
      <div className="container-page">
        <div className="surface-panel ember-glow p-10 md:p-14 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_20%_20%,oklch(0.78_0.16_68/0.2),transparent_60%)]" />
          <div className="relative grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <span className="chip">UK pilot programme · now accepting applications</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold">
                Prevent carbon claim failures{" "}
                <span className="text-gradient-ember">before</span> the audit.
              </h2>
              <p className="mt-5 text-muted-foreground max-w-2xl">
                Early pilot onboarding for UK industrial biomass operators, carbon project
                developers and energy consultants. Get a Carbon Credit Defensibility Score on your
                next fuel batch — before Ofgem asks.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:BioFuelIntegrityTwin@outlook.com?subject=BioFuel%20Integrity%20Twin%20%E2%80%94%20Pilot%20Enquiry"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-verified text-primary-foreground px-6 py-3 font-semibold shadow-xl hover:brightness-110 transition"
              >
                Request Pilot Access <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ FOOTER ------------------------------ */
function Footer() {
  return (
    <footer className="py-10 border-t border-border/50 bg-primary text-primary-foreground">
      <div className="container-page flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-primary-foreground/70">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 flex items-center justify-center text-primary-foreground">
            <img src="/logo.png" alt="BioFuel Integrity Twin Logo" className="h-full w-full object-contain" />
          </div>
          <div className="text-primary-foreground flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>&copy; 2026 BioFuel Integrity Twin Ltd</span>
            <span className="hidden lg:inline text-primary-foreground/50">|</span>
            <span>Registered in England &amp; Wales, Company No. 17366215</span>
            <span className="hidden lg:inline text-primary-foreground/50">|</span>
            <span>The Old Chapel, 16 Oakfield Road, Clifton, Bristol BS8 2AP.</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-end text-xs">
          <div>Measure · Model · Assure · Sustain — Turning biomass into audit-ready carbon truth.</div>
          <a href="/privacy-policy" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
