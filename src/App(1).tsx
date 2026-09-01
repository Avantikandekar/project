import { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  Compass,
  FileEdit,
  Globe2,
  Handshake,
  Layers3,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Trophy,
  UserCheck,
  UserPlus,
  Users,
  Zap,
} from 'lucide-react';

type PackageName = 'YUVA' | 'PASSION' | 'ZEAL' | 'LEADER' | 'TRUST' | 'SCALEUP' | 'NONE';

const packages: {
  name: PackageName;
  subtitle: string;
  description: string;
  accent: string;
  bestFor: string;
}[] = [
  { name: 'YUVA', subtitle: 'Premium access', description: 'Build your first professional opportunities and discover entry-level roles.', accent: 'blue', bestFor: 'Students & freshers' },
  { name: 'PASSION', subtitle: 'Premium access', description: 'Turn your interests into practical opportunities with better discovery tools.', accent: 'violet', bestFor: 'Early professionals' },
  { name: 'ZEAL', subtitle: 'Premium access', description: 'Accelerate your growth with stronger matching and priority visibility.', accent: 'teal', bestFor: 'Active job seekers' },
  { name: 'LEADER', subtitle: 'Premium access', description: 'Lead teams, source skilled people and create high-quality opportunities.', accent: 'amber', bestFor: 'Team leads' },
  { name: 'TRUST', subtitle: 'Premium access', description: 'Verified ecosystem access designed for reliable professional connections.', accent: 'emerald', bestFor: 'Verified organisations' },
  { name: 'SCALEUP', subtitle: 'Premium access', description: 'Scale hiring, talent discovery and ecosystem reach from one platform.', accent: 'rose', bestFor: 'Growing startups' },
  { name: 'NONE', subtitle: 'Basic features', description: 'Use the essential ecosystem features without a premium package.', accent: 'slate', bestFor: 'Explore first' },
];

const startups = [
  { name: 'TechNova', field: 'AI / ML', roles: 8, location: 'Pune', icon: Zap },
  { name: 'FinFlow', field: 'Fintech', roles: 5, location: 'Mumbai', icon: TrendingUp },
  { name: 'CloudSync', field: 'Cloud', roles: 7, location: 'Bengaluru', icon: Globe2 },
  { name: 'DataDrive', field: 'Analytics', roles: 6, location: 'Hyderabad', icon: Target },
  { name: 'HealthTech', field: 'Healthcare', roles: 4, location: 'Delhi', icon: ShieldCheck },
  { name: 'EduSpark', field: 'EdTech', roles: 9, location: 'Pune', icon: Compass },
];

const talent = [
  { name: 'Aarav Mehta', role: 'Frontend Developer', skill: 'React', score: 96, location: 'Pune', type: 'Candidate' },
  { name: 'Isha Sharma', role: 'Product Designer', skill: 'Figma', score: 92, location: 'Mumbai', type: 'Candidate' },
  { name: 'Rohan Patil', role: 'AI Engineer', skill: 'Python', score: 89, location: 'Bengaluru', type: 'Candidate' },
  { name: 'Neha Kulkarni', role: 'Growth Associate', skill: 'Marketing', score: 87, location: 'Hyderabad', type: 'Candidate' },
];

const mapPlaces = [
  { name: 'TechNova', kind: 'startup', x: 18, y: 30, city: 'Pune', detail: '8 open roles · AI / ML' },
  { name: 'FinFlow', kind: 'startup', x: 35, y: 57, city: 'Mumbai', detail: '5 open roles · Fintech' },
  { name: 'CloudSync', kind: 'startup', x: 63, y: 29, city: 'Bengaluru', detail: '7 open roles · Cloud' },
  { name: 'DataDrive', kind: 'startup', x: 77, y: 52, city: 'Hyderabad', detail: '6 open roles · Analytics' },
  { name: 'Aarav', kind: 'talent', x: 27, y: 72, city: 'Pune', detail: 'Frontend Developer · 96% match' },
  { name: 'Isha', kind: 'talent', x: 53, y: 67, city: 'Mumbai', detail: 'Product Designer · 92% match' },
  { name: 'Rohan', kind: 'talent', x: 83, y: 28, city: 'Bengaluru', detail: 'AI Engineer · 89% match' },
];

const features = [
  { icon: Target, title: 'Smart Matching', text: 'Match candidates and organisations using skills, role preferences, location and ecosystem fit.', tone: 'blue' },
  { icon: MapPin, title: 'Location Intelligence', text: 'Discover nearby startups and talent with an interactive ecosystem map and radius filters.', tone: 'rose' },
  { icon: Trophy, title: 'Talent Hunt', text: 'Surface high-potential profiles through skills, match scores and focused talent discovery.', tone: 'amber' },
  { icon: BadgeCheck, title: 'Verified Profiles', text: 'Keep the ecosystem credible with verified organisations and professional profiles.', tone: 'green' },
];

const steps = [
  { icon: FileEdit, title: 'Create your profile', text: 'Tell the ecosystem who you are, what you can offer and what you are looking for.' },
  { icon: Search, title: 'Discover', text: 'Search jobs, internships, startups and talent using relevant filters.' },
  { icon: Handshake, title: 'Connect', text: 'Send interest, shortlist profiles and start meaningful professional conversations.' },
  { icon: RocketIcon, title: 'Grow together', text: 'Turn successful connections into hiring, internships and long-term growth.' },
];

function RocketIcon(props: { className?: string }) {
  return <Zap {...props} />;
}

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<PackageName>('NONE');
  const [mapFilter, setMapFilter] = useState<'all' | 'startup' | 'talent'>('all');
  const [radius, setRadius] = useState(25);
  const [selectedPin, setSelectedPin] = useState(mapPlaces[0]);
  const [talentFilter, setTalentFilter] = useState('All');
  const [showAllTalent, setShowAllTalent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const visiblePins = mapPlaces.filter((p) => mapFilter === 'all' || p.kind === mapFilter);
  const visibleTalent = useMemo(
    () => (talentFilter === 'All' ? talent : talent.filter((person) => person.skill === talentFilter)),
    [talentFilter]
  );
  const shownTalent = showAllTalent ? visibleTalent : visibleTalent.slice(0, 3);
  const currentPackage = packages.find((p) => p.name === selectedPackage)!;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="app-shell">
      <header className={`site-header ${scrolled ? 'site-header-scrolled' : ''}`}>
        <nav className="nav-inner">
          <button className="brand" onClick={() => scrollTo('home')} aria-label="Go to home">
            <span className="brand-mark">E</span>
            <span>
              <strong>Ecombinator</strong>
              <small>Ecosystem</small>
            </span>
          </button>

          <div className="desktop-nav">
            <button className="nav-link active" onClick={() => scrollTo('home')}>Home</button>
            <button className="nav-link" onClick={() => scrollTo('talent')}>Talent Hunt</button>
            <button className="nav-link" onClick={() => scrollTo('about')}>About</button>
            <button className="nav-link" onClick={() => scrollTo('packages')}>Packages</button>
          </div>

          <div className="nav-actions">
            <button className="btn btn-outline small"><UserPlus size={16} /> Employee Login</button>
            <button className="btn btn-primary small"><UserCheck size={16} /> Candidate Login</button>
            <button className="mobile-menu" onClick={() => setResourcesOpen(!resourcesOpen)} aria-label="Open menu">
              <ChevronDown size={18} />
            </button>
          </div>
        </nav>
        {resourcesOpen && (
          <div className="mobile-nav">
            <button onClick={() => scrollTo('home')}>Home</button>
            <button onClick={() => scrollTo('talent')}>Talent Hunt</button>
            <button onClick={() => scrollTo('map')}>Map Locator</button>
            <button onClick={() => scrollTo('packages')}>Packages</button>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <span className="eyebrow"><Sparkles size={15} /> Startup + Talent Ecosystem</span>
            <h1>Where Startups Meet <span>Exceptional Talent.</span></h1>
            <p>A focused ecosystem to discover talent, find opportunities, connect locally and build teams that actually fit.</p>
            <div className="hero-actions">
              <button className="btn btn-primary large" onClick={() => scrollTo('talent')}><Search size={18} /> Explore Talent</button>
              <button className="btn btn-outline large" onClick={() => scrollTo('packages')}><Layers3 size={18} /> Choose Package</button>
            </div>
            <div className="trust-row">
              <span><BadgeCheck size={17} /> Verified startups</span>
              <span><Users size={17} /> Quality candidates</span>
              <span><ShieldCheck size={17} /> Secure ecosystem</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="hero-center-card">
              <div className="mini-window">
                <div className="window-bar"><i /><i /><i /></div>
                <div className="match-line"><Users size={17} /><span /><b>96%</b></div>
                <div className="match-line"><Briefcase size={17} /><span /><b>91%</b></div>
                <div className="match-line highlight"><Target size={17} /><span /><b>Smart Match</b></div>
              </div>
            </div>
            <div className="floating-chip chip-a"><Briefcase size={17} /><b>8,200+</b><small>open roles</small></div>
            <div className="floating-chip chip-b"><Users size={17} /><b>50K+</b><small>candidates</small></div>
            <div className="floating-chip chip-c"><MapPin size={17} /><b>Local</b><small>talent discovery</small></div>
          </div>
        </section>

        <section className="stats-strip">
          <div><Building2 /><strong>2,500+</strong><span>Startups</span></div>
          <div><Users /><strong>50,000+</strong><span>Active candidates</span></div>
          <div><Briefcase /><strong>10,000+</strong><span>Jobs posted</span></div>
          <div><Star /><strong>98%</strong><span>Satisfaction</span></div>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <span className="eyebrow">Simple workflow</span>
            <h2>How the ecosystem works</h2>
            <p>Everything important is kept in one flow: profile → discovery → connection → growth.</p>
          </div>
          <div className="steps-grid">
            {steps.map((step, i) => (
              <div className="step-card" key={step.title}>
                <div className="step-number">{i + 1}</div>
                <div className="icon-tile blue"><step.icon size={25} /></div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                {i < steps.length - 1 && <ChevronRight className="step-arrow" size={20} />}
              </div>
            ))}
          </div>
        </section>

        <section className="hiring-section">
          <div className="section-heading compact">
            <span className="eyebrow">Live ecosystem</span>
            <h2>Startups actively building teams</h2>
          </div>
          <div className="startup-track">
            {[...startups, ...startups].map((startup, i) => (
              <article className="startup-card" key={`${startup.name}-${i}`}>
                <div className="startup-icon"><startup.icon size={21} /></div>
                <div>
                  <h3>{startup.name}</h3>
                  <p>{startup.field} · {startup.location}</p>
                </div>
                <span>{startup.roles} open roles</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <span className="eyebrow">Why Ecombinator</span>
            <h2>More than a job board</h2>
            <p>The platform is designed around matching, verification, local discovery and talent quality.</p>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <div className={`icon-tile ${feature.tone}`}><feature.icon size={23} /></div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
                <button onClick={() => scrollTo(feature.title === 'Talent Hunt' ? 'talent' : feature.title === 'Location Intelligence' ? 'map' : 'packages')}>
                  Explore <ArrowRight size={15} />
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="map" className="section map-section">
          <div className="map-copy">
            <span className="eyebrow"><MapPin size={15} /> GMap AI Locator</span>
            <h2>Find the right people and startups around you.</h2>
            <p>Use ecosystem type, discovery radius and map selection to narrow down relevant opportunities instead of scrolling through an unstructured list.</p>

            <div className="map-controls">
              <div className="segmented">
                {(['all', 'startup', 'talent'] as const).map((filter) => (
                  <button key={filter} className={mapFilter === filter ? 'selected' : ''} onClick={() => setMapFilter(filter)}>
                    {filter === 'all' ? 'All' : filter === 'startup' ? 'Startups' : 'Talent'}
                  </button>
                ))}
              </div>
              <label className="range-control">
                <span>Search radius <b>{radius} km</b></span>
                <input type="range" min="5" max="50" step="5" value={radius} onChange={(e) => setRadius(Number(e.target.value))} />
              </label>
            </div>

            <div className="selected-location">
              <div className="location-icon"><MapPin size={19} /></div>
              <div><strong>{selectedPin.name}</strong><span>{selectedPin.city} · {selectedPin.detail}</span></div>
            </div>

            <button className="btn btn-primary" onClick={() => scrollTo('talent')}>Explore nearby talent <ChevronRight size={18} /></button>
          </div>

          <div className="map-card">
            <div className="map-toolbar">
              <span><span className="status-dot" /> Live ecosystem view</span>
              <span>{visiblePins.length} results</span>
            </div>
            <div className="map-canvas" aria-label="Interactive ecosystem map">
              <div className="map-grid" />
              <div className="map-road road-one" />
              <div className="map-road road-two" />
              <div className="map-road road-three" />
              <div className="map-radius" style={{ width: `${Math.min(80, 35 + radius)}%`, height: `${Math.min(80, 35 + radius)}%` }} />
              {visiblePins.map((pin) => (
                <button
                  key={pin.name}
                  className={`map-pin ${pin.kind} ${selectedPin.name === pin.name ? 'active' : ''}`}
                  style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                  onClick={() => setSelectedPin(pin)}
                  title={`${pin.name}: ${pin.detail}`}
                >
                  <span>{pin.kind === 'startup' ? <Building2 size={13} /> : <Users size={13} />}</span>
                  <small>{pin.name}</small>
                </button>
              ))}
              <div className="map-center"><MapPin size={17} /></div>
            </div>
            <div className="map-legend">
              <span><i className="legend-dot startup-dot" /> Startups</span>
              <span><i className="legend-dot talent-dot" /> Talent</span>
              <span><MapPin size={14} /> {radius} km radius</span>
            </div>
          </div>
        </section>

        <section id="talent" className="section talent-section">
          <div className="talent-header">
            <div>
              <span className="eyebrow"><Trophy size={15} /> Talent Hunt</span>
              <h2>Surface high-potential talent faster.</h2>
              <p>Ranked profiles make discovery more useful than a generic candidate directory.</p>
            </div>
            <button className="btn btn-outline" onClick={() => setShowAllTalent(!showAllTalent)}>
              {showAllTalent ? 'Show less' : 'View all talent'} <ArrowRight size={16} />
            </button>
          </div>

          <div className="talent-filters">
            {['All', 'React', 'Figma', 'Python', 'Marketing'].map((filter) => (
              <button key={filter} className={talentFilter === filter ? 'active' : ''} onClick={() => setTalentFilter(filter)}>
                {filter}
              </button>
            ))}
          </div>

          <div className="talent-grid">
            {shownTalent.map((person) => (
              <article className="talent-card" key={person.name}>
                <div className="talent-avatar">{person.name.split(' ').map((n) => n[0]).join('')}</div>
                <div className="talent-main">
                  <div className="talent-title-row">
                    <div><h3>{person.name}</h3><p>{person.role}</p></div>
                    <span className="match-score">{person.score}%</span>
                  </div>
                  <div className="talent-meta"><span>{person.skill}</span><span><MapPin size={13} /> {person.location}</span></div>
                  <div className="score-bar"><span style={{ width: `${person.score}%` }} /></div>
                  <button className="text-button">View profile <ArrowRight size={14} /></button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="packages" className="section packages-section">
          <div className="section-heading">
            <span className="eyebrow"><CircleDollarSign size={15} /> Select Package</span>
            <h2>Choose the access that fits your journey.</h2>
            <p>Seven package choices, including the basic NONE option shown in your reference design.</p>
          </div>

          <div className="package-layout">
            <div className="package-grid">
              {packages.map((pkg) => (
                <button
                  key={pkg.name}
                  className={`package-card ${selectedPackage === pkg.name ? 'selected' : ''}`}
                  onClick={() => setSelectedPackage(pkg.name)}
                >
                  <div>
                    <strong>{pkg.name}</strong>
                    <span>{pkg.subtitle}</span>
                  </div>
                  <Check className="package-check" size={17} />
                </button>
              ))}
            </div>

            <div className="package-detail">
              <div className={`package-detail-icon ${currentPackage.accent}`}><Layers3 size={23} /></div>
              <span className="detail-label">Selected package</span>
              <h3>{currentPackage.name}</h3>
              <p>{currentPackage.description}</p>
              <div className="detail-for"><span>Best for</span><strong>{currentPackage.bestFor}</strong></div>
              <button className="btn btn-primary">Continue with {currentPackage.name} <ArrowRight size={17} /></button>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div>
            <span className="eyebrow">Ready when you are</span>
            <h2>Build your next opportunity with the right people.</h2>
            <p>Join the ecosystem and turn discovery into real professional connections.</p>
          </div>
          <div className="cta-actions">
            <button className="btn btn-primary large" onClick={() => scrollTo('packages')}>Get started <ChevronRight size={18} /></button>
            <button className="btn btn-outline large" onClick={() => scrollTo('map')}>Open locator <MapPin size={18} /></button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand"><span className="brand-mark">E</span><strong>Ecombinator Ecosystem</strong></div>
        <div className="footer-links"><button>Privacy Policy</button><button>Terms of Service</button><button>Contact</button></div>
        <span>© 2026 Ecombinator. All rights reserved.</span>
      </footer>
    </div>
  );
}

export default App;
