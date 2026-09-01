import { useState, useEffect } from 'react';
import {
  Rocket,
  Users,
  MapPin,
  Target,
  Zap,
  Shield,
  TrendingUp,
  Briefcase,
  GraduationCap,
  Building2,
  ChevronRight,
  Star,
  Network,
  Globe,
  Search,
  UserCheck,
  CheckCircle,
  ChevronDown,
  ArrowRight,
  FileEdit,
  UserPlus,
  Handshake,
  BadgeCheck,
  LayoutDashboard,
} from 'lucide-react';

const startups = [
  { name: 'TechNova', logo: Rocket, field: 'AI/ML' },
  { name: 'FinFlow', logo: TrendingUp, field: 'Fintech' },
  { name: 'CloudSync', logo: Globe, field: 'Cloud' },
  { name: 'DataDrive', logo: Target, field: 'Analytics' },
  { name: 'HealthTech', logo: Shield, field: 'Healthcare' },
  { name: 'EduSpark', logo: GraduationCap, field: 'EdTech' },
  { name: 'GreenEnergy', logo: Zap, field: 'CleanTech' },
  { name: 'CryptoBase', logo: Network, field: 'Web3' },
];

const stats = [
  { value: '2,500+', label: 'Startups', icon: Building2, color: 'blue' },
  { value: '50,000+', label: 'Active Candidates', icon: Users, color: 'teal' },
  { value: '10,000+', label: 'Jobs Posted', icon: Briefcase, color: 'amber' },
  { value: '98%', label: 'Satisfaction Rate', icon: Star, color: 'rose' },
];

const steps = [
  {
    num: 1,
    icon: FileEdit,
    title: 'Create Your Profile',
    desc: 'Sign up as a startup or candidate and create your profile.',
  },
  {
    num: 2,
    icon: Search,
    title: 'Post or Search',
    desc: 'Post jobs or explore job/internship opportunities.',
  },
  {
    num: 3,
    icon: Handshake,
    title: 'Connect',
    desc: 'Connect with the right candidates or startups.',
  },
  {
    num: 4,
    icon: Rocket,
    title: 'Grow Together',
    desc: 'Build your team or career and achieve success.',
  },
];

const features = [
  {
    icon: Target,
    title: 'Smart Matching',
    description: 'AI-powered algorithms match startups with the perfect candidates based on skills, culture fit, and growth potential.',
    color: 'blue',
  },
  {
    icon: MapPin,
    title: 'Location Intelligence',
    description: 'Our GMap AI Locator helps you discover startups and talent within your preferred proximity.',
    color: 'rose',
  },
  {
    icon: Zap,
    title: 'Fast Hiring',
    description: 'Streamlined process reduces time-to-hire by 60%. Get from application to offer in days, not weeks.',
    color: 'amber',
  },
  {
    icon: Shield,
    title: 'Verified Profiles',
    description: 'Every startup and candidate is verified to ensure authentic, high-quality connections.',
    color: 'green',
  },
];

const iconBoxClass: Record<string, string> = {
  blue: 'icon-box icon-box-blue',
  rose: 'icon-box icon-box-rose',
  amber: 'icon-box icon-box-amber',
  green: 'icon-box icon-box-green',
};

const iconColorClass: Record<string, string> = {
  blue: 'text-brand-500',
  rose: 'text-rose-500',
  amber: 'text-amber-500',
  green: 'text-emerald-500',
};

const statIconBg: Record<string, string> = {
  blue: 'bg-brand-100',
  teal: 'bg-teal-100',
  amber: 'bg-amber-100',
  rose: 'bg-rose-100',
};
const statIconColor: Record<string, string> = {
  blue: 'text-brand-600',
  teal: 'text-teal-600',
  amber: 'text-amber-600',
  rose: 'text-rose-600',
};

const stepIconBg = ['bg-brand-100', 'bg-sky-100', 'bg-teal-100', 'bg-amber-100'];
const stepIconColor = ['text-brand-600', 'text-sky-600', 'text-teal-600', 'text-amber-600'];
const stepNumBg = ['bg-brand-500', 'bg-sky-500', 'bg-teal-500', 'bg-amber-500'];

function FloatingCard({
  icon: Icon,
  label,
  className,
  style,
  iconBg,
  iconColor,
}: {
  icon: React.ElementType;
  label: string;
  className?: string;
  style?: React.CSSProperties;
  iconBg: string;
  iconColor: string;
}) {
  return (
    <div
      className={`absolute bg-white rounded-2xl shadow-card border border-surface-200 px-4 py-3 flex flex-col items-center gap-2 text-center min-w-[110px] ${className}`}
      style={style}
    >
      <div className={`w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center`}>
        <Icon className={`w-5 h-5 ${iconColor}`} />
      </div>
      <span className="text-xs font-semibold text-surface-700 leading-tight">{label}</span>
    </div>
  );
}

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-surface-100">
      {/* ── Header ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-surface-200 shadow-sm'
            : 'bg-white/80 backdrop-blur-sm border-b border-surface-100'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-3.5">
          <div className="flex items-center ">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow shadow-brand-500/30">
                <span className="text-white font-black text-base leading-none">E</span>
              </div>
              <div className="leading-tight">
                <div className="text-base font-extrabold text-surface-900 tracking-tight">Ecombinator</div>
                <div className="text-[10px] font-semibold text-brand-500 tracking-widest uppercase">Ecosystem</div>
              </div>
            </div>

            {/* Navigation */}
            <div className="hidden md:flex items-centre gap-8 ml-20">
              <a href="#" className="nav-link font-semibold text-brand-600 border-b-2 border-brand-500 pb-0.5">Home</a>
              <a href="#talent" className="nav-link">Talent Hunt</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#packages" className="nav-link">Packages</a>
            </div>

            {/* Login Buttons */}
            <div className="flex items-center gap-3 ml-auto">
              <button className="btn-outline text-sm py-2.5 px-5">
                <UserPlus className="w-4 h-4" />
                Employee Login
              </button>
              <button className="btn-primary text-sm py-2.5 px-5 flex items-center gap-2">
                <UserCheck className="w-4 h-4" />
                Candidate Login
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* ── Hero ── */}
        <section className="relative pt-28 pb-8 overflow-hidden">
          {/* Subtle bg blobs */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-32 -right-32 w-[700px] h-[700px] bg-brand-200/25 rounded-full blur-3xl" />
            <div className="absolute bottom-0 -left-24 w-[500px] h-[500px] bg-sky-100/60 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-10 items-start min-h-[520px]">
              {/* Left content */}
              <div className="space-y-7">
                <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-surface-900">
                  Where Startups<br />
                  Meet Exceptional<br />
                  <span className="gradient-text">Talent.</span>
                </h1>

                <p className="text-lg text-surface-500 max-w-md leading-relaxed">
                  A powerful ecosystem to post jobs, discover opportunities, and build the future together.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button className="btn-primary flex items-center gap-2 text-base py-3.5 px-7">
                    <Rocket className="w-5 h-5" />
                    Post a Job
                  </button>
                  <button className="btn-outline flex items-center gap-2 text-base py-3.5 px-7 text-surface-700 border-surface-300">
                    <Search className="w-5 h-5 text-surface-500" />
                    Find Jobs / Internships
                  </button>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-6 pt-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-brand-50 flex items-center justify-center">
                      <BadgeCheck className="w-5 h-5 text-brand-500" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-surface-800">Verified Startups</div>
                      <div className="text-xs text-surface-500">Trusted & Reliable</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center">
                      <Users className="w-5 h-5 text-teal-500" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-surface-800">Quality Candidates</div>
                      <div className="text-xs text-surface-500">Pre-screened Profiles</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-surface-800">Secure Platform</div>
                      <div className="text-xs text-surface-500">Your Data is Safe</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right — illustration with floating cards */}
              <div className="relative flex items-start justify-center h-[420px] lg:h-[480px] -mt-20">
                {/* Central device mockup */}
                <div className="relative w-72 h-52">
                  {/* Screen */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-surface-100 rounded-2xl border-2 border-surface-200 shadow-xl overflow-hidden">
                    {/* Screen chrome */}
                    <div className="flex items-center gap-1.5 px-3 py-2 border-b border-surface-200 bg-white/70">
                      <div className="w-2 h-2 rounded-full bg-rose-400" />
                      <div className="w-2 h-2 rounded-full bg-amber-400" />
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <div className="p-3 space-y-2">
                      <div className="flex items-center gap-2 bg-white rounded-lg p-2 shadow-sm border border-surface-100">
                        <Users className="w-4 h-4 text-brand-500" />
                        <div className="flex-1">
                          <div className="h-1.5 bg-brand-200 rounded w-2/3 mb-1" />
                          <div className="h-1.5 bg-surface-200 rounded w-1/2" />
                        </div>
                        <TrendingUp className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div className="flex items-center gap-2 bg-white rounded-lg p-2 shadow-sm border border-surface-100">
                        <Briefcase className="w-4 h-4 text-amber-500" />
                        <div className="flex-1">
                          <div className="h-1.5 bg-amber-200 rounded w-3/4 mb-1" />
                          <div className="h-1.5 bg-surface-200 rounded w-2/5" />
                        </div>
                        <Star className="w-4 h-4 text-amber-400" />
                      </div>
                      <div className="flex items-center gap-2 bg-brand-500 rounded-lg p-2">
                        <Target className="w-4 h-4 text-white" />
                        <div className="flex-1">
                          <div className="h-1.5 bg-white/40 rounded w-2/3 mb-1" />
                          <div className="h-1.5 bg-white/25 rounded w-1/2" />
                        </div>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                  {/* Base shadow */}
                  <div className="absolute -bottom-3 left-6 right-6 h-4 bg-surface-300/40 rounded-full blur-md" />
                </div>

                {/* Floating cards */}
                <FloatingCard
                  icon={Briefcase}
                  label="Post Jobs"
                  className="top-12 left-0 animate-float"
                  style={{ animationDelay: '0s' } as React.CSSProperties}
                  iconBg="bg-brand-50"
                  iconColor="text-brand-500"
                />
                <FloatingCard
                  icon={Search}
                  label={`Find the right talent\nfor your startup`}
                  className="top-8 right-0 min-w-[130px] animate-float"
                  style={{ animationDelay: '1.5s' } as React.CSSProperties}
                  iconBg="bg-teal-50"
                  iconColor="text-teal-500"
                />
                <FloatingCard
                  icon={Network}
                  label="Connect & Collaborate"
                  className="top-24 -right-4 animate-float"
                  style={{ animationDelay: '0.8s' } as React.CSSProperties}
                  iconBg="bg-sky-50"
                  iconColor="text-sky-500"
                />
                <FloatingCard
                  icon={Globe}
                  label="Discover Opportunities"
                  className="bottom-64 left-0 animate-float"
                  style={{ animationDelay: '2s' } as React.CSSProperties}
                  iconBg="bg-emerald-50"
                  iconColor="text-emerald-500"
                />
                <FloatingCard
                  icon={Rocket}
                  label="Grow Together"
                  className="bottom-80 right-8 animate-float"
                  style={{ animationDelay: '1s' } as React.CSSProperties}
                  iconBg="bg-amber-50"
                  iconColor="text-amber-500"
                />
                {/* Connector dots */}
                <div className="absolute inset-0 -z-10">
                  {[
                    { x: '20%', y: '50%' }, { x: '75%', y: '30%' }, { x: '60%', y: '75%' },
                  ].map((pos, i) => (
                    <div
                      key={i}
                      className="absolute w-1.5 h-1.5 rounded-full bg-brand-300/50"
                      style={{ left: pos.x, top: pos.y }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats Bar ── */}
        <section className="bg-white border-y border-surface-200 py-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl ${statIconBg[stat.color]} flex items-center justify-center flex-shrink-0`}>
                    <stat.icon className={`w-6 h-6 ${statIconColor[stat.color]}`} />
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold text-surface-900">{stat.value}</div>
                    <div className="text-sm text-surface-500">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-10 bg-brand-300" />
                <h2 className="text-3xl font-extrabold text-surface-900">How It Works</h2>
                <div className="h-px w-10 bg-brand-300" />
              </div>
              <p className="text-surface-500">Simple steps to connect and grow</p>
            </div>

            <div className="grid md:grid-cols-4 gap-4 relative">
              {steps.map((step, i) => (
                <div key={i} className="relative">
                  <div className="card p-7 flex flex-col items-center text-center h-full">
                    {/* Step number badge */}
                    <div className={`absolute -top-4 left-6 w-8 h-8 rounded-full ${stepNumBg[i]} flex items-center justify-center shadow`}>
                      <span className="text-white font-bold text-sm">{step.num}</span>
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl ${stepIconBg[i]} flex items-center justify-center mb-5 mt-2`}>
                      <step.icon className={`w-7 h-7 ${stepIconColor[i]}`} />
                    </div>

                    <h3 className="text-base font-bold text-surface-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-surface-500 leading-relaxed">{step.desc}</p>
                  </div>

                  {/* Arrow connector */}
                  {i < steps.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-5 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full border border-surface-200 shadow items-center justify-center">
                      <ChevronRight className="w-5 h-5 text-brand-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Scrolling Startups ── */}
        <section className="py-16 bg-white border-y border-surface-200">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-surface-900 mb-1">Actively Hiring Startups</h2>
            <p className="text-surface-500 text-sm">Discover opportunities at innovative companies</p>
          </div>
          <div className="marquee-container">
            <div className="marquee-content">
              {[...startups, ...startups].map((startup, i) => (
                <div key={i} className="card startup-card p-5 mx-3 min-w-[180px]">
                  <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center mb-3">
                    <startup.logo className="w-5 h-5 text-brand-500" />
                  </div>
                  <div className="text-sm font-semibold text-surface-900">{startup.name}</div>
                  <div className="text-xs text-surface-500 mb-2">{startup.field}</div>
                  <span className="px-2 py-0.5 rounded-md bg-brand-50 text-xs text-brand-600 font-medium">5+ Open Roles</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features / Why Choose Us ── */}
        <section id="about" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="tag mb-5">
                <Star className="w-4 h-4" />
                Why Choose Us
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-surface-900 mb-3">
                The Smarter Way to Hire & Get Hired
              </h2>
              <p className="text-surface-500 max-w-2xl mx-auto">
                Built for the modern startup ecosystem with AI and location intelligence.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f, i) => (
                <div key={i} className="feature-card p-6">
                  <div className={`${iconBoxClass[f.color]} mb-4`}>
                    <f.icon className={`w-6 h-6 ${iconColorClass[f.color]}`} />
                  </div>
                  <h3 className="text-base font-semibold text-surface-900 mb-2">{f.title}</h3>
                  <p className="text-surface-500 text-sm leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GMap AI Locator ── */}
        <section id="talent" className="py-24 bg-white border-y border-surface-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="card p-4">
                <div className="relative aspect-video rounded-xl bg-surface-50 overflow-hidden border border-surface-100">
                  <div className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '24px 24px' }}
                  />
                  {[
                    { x: 15, y: 30, type: 'startup' }, { x: 35, y: 45, type: 'candidate' },
                    { x: 55, y: 25, type: 'startup' }, { x: 70, y: 55, type: 'candidate' },
                    { x: 80, y: 35, type: 'startup' }, { x: 45, y: 70, type: 'candidate' },
                    { x: 25, y: 60, type: 'startup' },
                  ].map((m, i) => (
                    <div key={i} className="absolute w-2.5 h-2.5 rounded-full" style={{
                      left: `${m.x}%`, top: `${m.y}%`,
                      backgroundColor: m.type === 'startup' ? '#3b82f6' : '#f43f5e',
                      boxShadow: `0 0 7px ${m.type === 'startup' ? '#3b82f6' : '#f43f5e'}`,
                    }} />
                  ))}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border border-dashed border-brand-400/40" />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-dashed border-surface-300" />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 border-brand-500" />
                </div>
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div className="card p-3.5 flex items-center gap-2.5">
                    <Building2 className="w-5 h-5 text-brand-500" />
                    <div>
                      <div className="font-semibold text-surface-900 text-sm">24 Startups</div>
                      <div className="text-xs text-surface-500">In your area</div>
                    </div>
                  </div>
                  <div className="card p-3.5 flex items-center gap-2.5">
                    <Users className="w-5 h-5 text-teal-500" />
                    <div>
                      <div className="font-semibold text-surface-900 text-sm">156 Candidates</div>
                      <div className="text-xs text-surface-500">Open to work</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="tag"><MapPin className="w-4 h-4" />GMap AI Locator</div>
                <h2 className="text-3xl lg:text-4xl font-bold text-surface-900">Find Startups & Candidates Near You</h2>
                <p className="text-surface-500 leading-relaxed">
                  Our GMap AI Locator uses advanced geolocation algorithms to surface the best opportunities and talent within your chosen radius.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Target, title: 'Hyperlocal Search', desc: 'Filter by distance, commute time, or neighborhood.' },
                    { icon: Zap, title: 'Real-Time Updates', desc: 'Get notified when new matches enter your area.' },
                    { icon: Users, title: 'Smart Recommendations', desc: 'AI picks the best fits based on your preferences.' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="icon-box icon-box-blue"><item.icon className="w-5 h-5 text-brand-500" /></div>
                      <div>
                        <h4 className="font-semibold text-surface-900">{item.title}</h4>
                        <p className="text-sm text-surface-500 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="btn-primary flex items-center gap-2">
                  Open Map Locator <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Packages ── */}
        <section id="packages" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="tag mb-5"><Briefcase className="w-4 h-4" />Pricing Plans</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-surface-900 mb-3">Choose Your Growth Path</h2>
              <p className="text-surface-500 max-w-2xl mx-auto">Flexible plans for startups of all sizes and candidates at every stage.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card p-8">
                <div className="text-surface-500 font-medium mb-2">Starter</div>
                <div className="flex items-baseline gap-1 mb-6"><span className="text-4xl font-bold text-surface-900">$0</span><span className="text-surface-400">/mo</span></div>
                <ul className="space-y-4 mb-8">
                  {['Basic job posting', 'Browse candidates', '5 applications/month', 'Email support'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-surface-600 text-sm"><CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0" />{item}</li>
                  ))}
                </ul>
                <button className="btn-secondary w-full">Get Started</button>
              </div>
              <div className="card p-8 relative border-brand-400/40 ring-2 ring-brand-500/15">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 text-sm font-semibold text-white shadow shadow-brand-500/25">
                  Most Popular
                </div>
                <div className="text-brand-500 font-medium mb-2">Pro</div>
                <div className="flex items-baseline gap-1 mb-6"><span className="text-4xl font-bold text-surface-900">$49</span><span className="text-surface-400">/mo</span></div>
                <ul className="space-y-4 mb-8">
                  {['Unlimited job postings', 'Advanced candidate search', 'GMap AI Locator', 'Priority support', 'Analytics dashboard'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-surface-600 text-sm"><CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0" />{item}</li>
                  ))}
                </ul>
                <button className="btn-primary w-full">Start Pro Trial</button>
              </div>
              <div className="card p-8">
                <div className="text-surface-500 font-medium mb-2">Enterprise</div>
                <div className="flex items-baseline gap-1 mb-6"><span className="text-4xl font-bold text-surface-900">$199</span><span className="text-surface-400">/mo</span></div>
                <ul className="space-y-4 mb-8">
                  {['Everything in Pro', 'Dedicated account manager', 'Custom branding', 'API access', 'SLA guarantee'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-surface-600 text-sm"><CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0" />{item}</li>
                  ))}
                </ul>
                <button className="btn-secondary w-full">Contact Sales</button>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-white border-y border-surface-200">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="card p-12">
              <h3 className="text-2xl font-bold text-surface-900 mb-3">Ready to Start Your Journey?</h3>
              <p className="text-surface-500 mb-8">Join thousands of startups and candidates building the future together.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn-primary flex items-center gap-2">Get Started <ChevronRight className="w-5 h-5" /></button>
                <button className="btn-secondary flex items-center gap-2">Learn More <ChevronRight className="w-5 h-5" /></button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-surface-200 py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
              <span className="text-white font-black text-sm">E</span>
            </div>
            <span className="font-bold text-surface-900">Ecombinator Ecosystem</span>
          </div>
          <div className="flex items-center gap-6 text-surface-500 text-sm">
            <a href="#" className="hover:text-brand-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-500 transition-colors">Contact</a>
          </div>
          <div className="text-surface-400 text-sm">2024 Ecombinator. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
