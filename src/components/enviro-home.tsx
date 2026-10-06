import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Grease Trap Cleaning",
    description:
      "Grease traps are the most effective way of stopping fats, oil and grease entering your drainage system.",
    image: "/grease-interceptor.jpg",
  },
  {
    title: "Kitchen Hood Cleaning",
    description:
      "Kitchen Hood cleaning is process of removing grease that has accumulated inside the ducts.",
    image: "/kitchen-hood-cleaning.jpg",
  },
  {
    title: "Drain Maintenance",
    description:
      "Enviro Care recommends biological-dosing systems that continuously protect your kitchen.",
    image: "/drain-maintenance.png",
  },
  {
    title: "Sewage Tank Cleaning",
    description:
      "The term “septic” relates to the anaerobic bacterial system that develops within the tank and causes the waste",
    image: "/septic-tank-cleaning.jpg",
  },
  {
    title: "Water Tanker Cleaning/Chlorination",
    description:
      "Enviro Care offer a, hygienic and mechanized cleaning solution for storage water tanks.",
    image: "/water-tank-cleaning.png",
  },
  {
    title: "AC Dust Cleaning",
    description:
      "Have total peace of mind with professional ductwork cleaning services from the experts in the industry.",
    image: "/ac-duct-cleaning.png",
  },
];

const strengths = [
  {
    title: "Professional Expert",
    description: "We have a professional team with years of experience in the UAE.",
    icon: Users,
  },
  {
    title: "Certified",
    description:
      "Enviro Care is approved grease trap cleaning / water tank cleaning company from Dubai Municipality.",
    icon: BadgeCheck,
    featured: true,
  },
  {
    title: "Commitment",
    description:
      "Our dedication to serve our stakeholders in unmatched and we go out of our way to make our clients happy.",
    icon: ShieldCheck,
  },
  {
    title: "Excellent Customer Service",
    description: "We are known to provide excellent customer service to all our clients.",
    icon: Sparkles,
  },
];

const process = [
  {
    number: "01",
    step: "STEP 1",
    title: "Consultation",
    description:
      "Get in touch with our expert team with all of your requirements. They will be glad to assist you.",
  },
  {
    number: "02",
    step: "STEP 2",
    title: "Choose Product",
    description: "Choose one or multiple services as per the requirements.",
  },
  {
    number: "03",
    step: "STEP 3",
    title: "Get The Service",
    description: "Our team will deliver you the best service with complete satisfaction.",
  },
];

const navItems = ["HOME", "OUR PRODUCTS", "ABOUT US", "GALLERY", "CONTACT US"];

function Header() {
  const targets: Record<string, string> = {
    HOME: "#home",
    "OUR PRODUCTS": "#products",
    "ABOUT US": "#about",
    GALLERY: "#products",
    "CONTACT US": "#contact",
  };

  return (
    <>
      <div className="top-bar">
        <div className="page-shell flex min-h-10 items-center justify-between gap-4 py-2 text-[0.72rem] font-semibold">
          <p className="hidden items-center gap-2 sm:flex">
            <MapPin aria-hidden="true" className="size-3.5 text-brand-bright" /> Dubai – U.A.E
          </p>
          <div className="ml-auto flex flex-wrap items-center justify-end gap-x-5 gap-y-1">
            <a className="contact-link" href="tel:+97142679673">
              <Phone aria-hidden="true" className="size-3.5" /> +971 42679673
            </a>
            <a className="contact-link" href="mailto:info@envirocareme.com">
              <Mail aria-hidden="true" className="size-3.5" /> info@envirocareme.com
            </a>
          </div>
        </div>
      </div>
      <header className="site-header">
        <div className="page-shell">
          <div className="nav-shell">
            <a href="#home" aria-label="Enviro Care home" className="nav-logo">
              <img src="/enviro-care-logo.png" alt="Enviro Care" className="h-9 w-auto sm:h-10" />
            </a>
            <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
              {navItems.map((item, index) => (
                <a
                  key={item}
                  href={targets[item]}
                  className={index === 0 ? "nav-link nav-link-active" : "nav-link"}
                >
                  {item}
                </a>
              ))}
              <Button asChild variant="corporate" size="corporate" className="h-11 px-6">
                <a href="#contact">GET QUOTE <ArrowRight /></a>
              </Button>
            </nav>
            <details className="mobile-menu relative lg:hidden">
              <summary className="mobile-menu-toggle" aria-label="Open navigation">
                <span className="mobile-menu-lines" aria-hidden="true" />
              </summary>
              <nav aria-label="Mobile navigation" className="mobile-menu-panel">
                <div className="flex flex-col p-4">
                  {navItems.map((item) => (
                    <a key={item} href={targets[item]} className="mobile-link">
                      {item}
                    </a>
                  ))}
                  <Button asChild variant="corporate" size="corporate" className="mt-4">
                    <a href="#contact">GET QUOTE</a>
                  </Button>
                </div>
              </nav>
            </details>
          </div>
        </div>
      </header>
    </>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-section scroll-mt-32">
      <img
        src="/enviro-care-team.jpg"
        alt="Enviro Care team providing professional kitchen technical services"
        className="hero-image absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="page-shell relative grid min-h-[44rem] items-center pt-36 pb-24 md:min-h-[48rem] lg:grid-cols-[1fr_auto] lg:gap-12">
        <div className="hero-content max-w-3xl text-corporate-foreground">
          <p className="eyebrow-light">Welcome to Enviro Care</p>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[4.25rem]">
            Reliable Cleaning &amp; Technical Services
          </h1>
          <p className="mt-7 max-w-[38rem] text-[0.95rem] leading-8 text-corporate-foreground/80 sm:text-base">
            Enviro Care is approved grease trap cleaning / water tank cleaning company from Dubai
            Municipality. Our company uses state of the art equipment and aim to provide the best
            services at economical price to clients. The company is operated by experienced
            professionals and support staff who are also experts in this field.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild variant="corporate" size="corporate">
              <a href="#contact">GET QUOTE <ArrowRight /></a>
            </Button>
            <Button asChild variant="corporateOutline" size="corporate">
              <a href="#contact">CONTACT US</a>
            </Button>
          </div>
        </div>
        <div className="hero-chips mt-12 flex flex-wrap gap-3 lg:mt-0 lg:flex-col lg:self-end">
          <div className="glass-chip">
            <span className="chip-icon"><BadgeCheck className="size-4" /></span>
            <span>Dubai Municipality Approved</span>
          </div>
          <div className="glass-chip">
            <span className="chip-icon"><MapPin className="size-4" /></span>
            <span>Dubai – U.A.E</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-pad scroll-mt-28 bg-background">
      <div className="page-shell grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="image-frame reveal-left">
          <img
            src="/kitchen-hood-cleaning.jpg"
            alt="Professional kitchen hood cleaning service"
            className="h-[26rem] w-full object-cover sm:h-[33rem]"
          />
          <div className="image-stamp">
            <BadgeCheck className="size-6 shrink-0 text-primary" />
            <span>Dubai Municipality Approved</span>
          </div>
        </div>
        <div className="reveal-right">
          <p className="eyebrow">Who We Are ?</p>
          <h2 className="section-title mt-4">Reliable Technical &amp; Cleaning Services</h2>
          <p className="body-copy mt-6 max-w-xl">
            It’s our pleasure to introduce Enviro Care in the United Arab Emirates. Our vision is to
            evolve Enviro Care as the best company providing Grease Trap / Interceptor Cleaning /
            Pumping Service, Grease Trap sales &amp; Installation, Hydro Jet / Plumbing Service, Kitchen
            Exhaust Duct Cleaning, Sewerage / Septic Tank Cleaning, Water Tank Cleaning in the United
            Arab Emirates. If you are hunting for a company that can cater to all your above needs,
            your search ends right here.
          </p>
          <Button asChild variant="corporate" size="corporate" className="mt-9">
            <a href="#about">READ MORE <ArrowRight /></a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = ["Years Experience", "Services", "Happy Clients", "Expert Team", "Countries Served"];
  return (
    <section aria-label="Company statistics" className="stats-wrap">
      <div className="page-shell">
        <div className="stats-band reveal">
          {stats.map((label) => (
            <div key={label} className="stat-item">
              <strong className="text-4xl font-bold tracking-tight sm:text-5xl">0+</strong>
              <span className="mt-2 text-xs font-semibold uppercase tracking-wider text-corporate-foreground/65">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="products" className="section-pad section-soft scroll-mt-28">
      <div className="page-shell">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">Our Products</p>
          <h2 className="section-title mt-4">We Offer Following Products</h2>
        </div>
        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.title} className="service-card reveal group">
              <div className="service-media">
                <img src={service.image} alt={service.title} />
                <span className="service-number">0{index + 1}</span>
              </div>
              <div className="flex flex-1 flex-col px-6 pt-6 pb-7">
                <h3 className="text-xl font-bold leading-snug text-foreground">{service.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">{service.description}</p>
                <span className="service-link">
                  SERVICE OVERVIEW <span className="service-arrow"><ArrowRight className="size-4" /></span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="section-pad bg-background">
      <div className="page-shell grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="reveal-left">
          <p className="eyebrow">Why choose us</p>
          <h2 className="section-title mt-4">Trusted &amp; Well Reputed Company</h2>
          <p className="body-copy mt-6 max-w-lg">
            We are striving to deliver our customers the best services at competitive prices. Our team
            works round the clock to deliver you the best customer service possible.
          </p>
          <div className="why-visual mt-9">
            <img src="/enviro-care-team.jpg" alt="Enviro Care professionals at work" />
            <div className="glass-chip absolute bottom-5 left-5">
              <span className="chip-icon"><BadgeCheck className="size-4" /></span>
              <span>Dubai Municipality Approved</span>
            </div>
          </div>
        </div>
        <div className="grid content-center gap-5 sm:grid-cols-2">
          {strengths.map(({ title, description, icon: Icon, featured }) => (
            <article key={title} className={featured ? "strength-card strength-card-featured reveal" : "strength-card reveal"}>
              <span className="strength-icon"><Icon className="size-6" strokeWidth={1.8} aria-hidden="true" /></span>
              <h3 className="mt-5 text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
              {featured && (
                <span className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-[0.68rem] font-bold uppercase text-secondary-foreground">
                  <CheckCircle2 className="size-3.5" /> Dubai Municipality
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section-pad section-soft">
      <div className="page-shell">
        <div className="reveal text-center">
          <p className="eyebrow justify-center">Our Process</p>
          <h2 className="section-title mx-auto mt-4">How To Get Our Help</h2>
        </div>
        <div className="process-grid mt-16">
          {process.map((item) => (
            <article key={item.number} className="process-item reveal">
              <span className="process-marker" aria-hidden="true" />
              <div className="process-number">{item.number}</div>
              <p className="text-[0.7rem] font-bold tracking-wider text-primary">{item.step}</p>
              <h3 className="mt-2 text-xl font-bold text-foreground">{item.title}</h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCta() {
  return (
    <section id="contact" className="scroll-mt-28 bg-background py-20 sm:py-24">
      <div className="page-shell">
        <div className="cta-block reveal">
          <div className="relative max-w-2xl">
            <p className="eyebrow-light">Enviro Care Dubai</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-[2.6rem]">Need Reliable Cleaning &amp; Technical Services?</h2>
            <p className="mt-4 text-[0.95rem] leading-7 text-corporate-foreground/75">
              Get in touch with our expert team with all of your requirements.
            </p>
          </div>
          <div className="cta-actions">
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="light" size="corporate">
                <a href="mailto:info@envirocareme.com">GET QUOTE</a>
              </Button>
              <Button asChild variant="corporateOutline" size="corporate">
                <a href="tel:+97142679673">CONTACT US</a>
              </Button>
            </div>
            <a className="cta-phone" href="tel:+97142679673">
              <span className="chip-icon"><Phone className="size-4" /></span> +971 42679673
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell grid gap-12 py-20 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_0.75fr_1.1fr]">
        <div>
          <span className="inline-block rounded-2xl bg-background px-3 py-2">
            <img src="/enviro-care-logo.png" alt="Enviro Care" className="h-11 w-auto" />
          </span>
          <h2 className="footer-heading mt-7">About</h2>
          <p className="mt-4 max-w-md text-[0.8rem] leading-7 text-corporate-foreground/60">
            ENVIRO CARE provides trusted services such as Grease Trap / Interceptor Cleaning / Pumping
            Service, Grease Trap sales , Delivery &amp; Installation, Hydro Jet / Plumbing Service,
            Kitchen Exhaust Duct Cleaning, Sewerage / Septic Tank Cleaning, Water Tank Cleaning,
            Tanker Service, Used Cooking Oil.
          </p>
        </div>
        <div>
          <h2 className="footer-heading">Services</h2>
          <ul className="footer-list">
            <li>Grease Trap Cleaning</li><li>Kitchen Hood Cleaning</li><li>Drain Maintenance</li>
            <li>Sewage Tank/Sum Pit Cleaning</li><li>Water Tank Cleaning</li><li>AC Dust Cleaning</li>
          </ul>
        </div>
        <div>
          <h2 className="footer-heading">Quick links</h2>
          <ul className="footer-list">
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#products">Our Gallery</a></li>
          </ul>
        </div>
        <div>
          <h2 className="footer-heading">CONTACT</h2>
          <ul className="footer-list footer-contact">
            <li><Phone className="size-4" /><a href="tel:+97142679673">+971 42679673/+971 42554685</a></li>
            <li><Mail className="size-4" /><a href="mailto:info@envirocare.com">info@envirocare.com</a></li>
            <li><MapPin className="size-4" />Dubai – U.A.E</li>
            <li><Mail className="size-4" />P.O.Box: 234183</li>
          </ul>
          <div className="mt-7 flex gap-3" aria-label="Social media">
            <span className="social-icon" aria-label="Facebook"><Facebook /></span>
            <span className="social-icon" aria-label="Instagram"><Instagram /></span>
          </div>
        </div>
      </div>
      <div className="border-t border-corporate-foreground/10">
        <div className="page-shell flex flex-col gap-2 py-6 text-[0.72rem] text-corporate-foreground/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Enviro Care. All rights reserved.</p>
          <p className="flex items-center gap-2"><Clock3 className="size-3.5" /> Cleaning &amp; Technical Services</p>
        </div>
      </div>
    </footer>
  );
}

export function EnviroHome() {
  return (
    <div className="min-h-screen overflow-x-clip bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <WhyChooseUs />
        <Process />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}
