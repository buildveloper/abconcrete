import type { CSSProperties } from "react";
import Chatbot from "./Chatbot";

const phoneDisplay = "(832) 888-4109";
const phoneHref = "tel:8328884109";

const nav = ["Driveway Replacement", "Patios", "Repair", "Sidewalks", "Parking Lot Repair", "Reviews", "Contact"];

const heroImage = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85";

const serviceImages = [
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
];

const services = [
  {
    title: "Driveway replacement",
    text: "Premium tear-out, form, pour and finish work for Houston homeowners who want a clean approach, better curb appeal and long-term durability.",
  },
  {
    title: "Driveway repair",
    text: "Targeted concrete driveway repair for cracked, damaged or unsafe sections, delivered by a local crew focused on reliable results.",
  },
  {
    title: "Patios & outdoor living",
    text: "Modern concrete patios, curved pathways and pool-side transitions designed to make backyards feel polished, usable and finished.",
  },
  {
    title: "Sidewalks & walkways",
    text: "Smooth, code-conscious pedestrian concrete with clean radius turns, crisp edges and a finish that elevates the property exterior.",
  },
  {
    title: "Parking lot repair",
    text: "Commercial concrete repair including replacement of damaged areas with substantial 6–8 inch concrete sections where projects call for it.",
  },
  {
    title: "Concrete guidance",
    text: "Practical advice for project planning, driveway cost questions, concrete calculators and rebar decisions before the pour begins.",
  },
];

const trust = [
  "80+ Google reviews",
  "Houston concrete driveway contractor",
  "Mon–Sat availability",
  "Free quote by phone",
  "Local Spring / Houston presence",
  "Google & Facebook review channels",
];

const gallery = [
  {
    title: "Nice radius turns on walkway",
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Newly poured residential driveway, beautifully finished and taped off for curing",
    image: "https://images.unsplash.com/photo-1597047084897-51e81819a499?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "AB Concrete crew on site",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "6 to 8 inches of concrete replaced on a parking lot repair",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Pumping a driveway",
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Full driveway replacement",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Fresh driveway approach in Houston",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Concrete patio with a curved pathway leading to the swimming pool and landscaping",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=800&q=80",
  },
];


const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AB Concrete in Houston, TX",
  url: "https://ab-concrete.com/",
  telephone: "+1 832 888 4109",
  address: { "@type": "PostalAddress", streetAddress: "Spring", addressCountry: "United States" },
  geo: { "@type": "GeoCoordinates", latitude: 30.1185635, longitude: -95.3730176 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "08:00", closes: "18:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "00:00", closes: "00:00" },
  ],
  sameAs: ["https://www.google.com/search?q=AB+Concrete+Houston+TX+reviews", "https://www.facebook.com/search/top?q=AB%20Concrete%20Houston"],
};

const posts = [
  ["January 29, 2026", "Top Concrete Services in Houston, TX", "Unveiling the fundamentals of premium concrete services."],
  ["September 13, 2025", "Mastering Concrete Paving: Tips for Durable Driveways", "Best practices for a longer-lasting driveway or patio."],
  ["April 18, 2025", "Driveway Replacement in Houston: Why Rebar Matters", "A homeowner-focused introduction to stronger driveway replacement."],
];

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
      <ThemeScript />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="AB Concrete home">
          <span className="brand-mark" aria-hidden="true">AB</span>
          <span>AB Concrete</span>
        </a>
        <nav aria-label="Primary navigation">
          {nav.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`}>{item}</a>
          ))}
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" aria-label="Toggle light and dark mode" data-theme-toggle>
            <span>◐</span>
          </button>
          <a className="pill" href={phoneHref}>Call {phoneDisplay}</a>
        </div>
      </header>

      <section id="top" className="hero section-grid">
        <div className="hero-copy reveal">
          <p className="eyebrow">Houston, TX concrete contractor</p>
          <h1>Driveway repair and replacement with a luxury finish.</h1>
          <p className="lead">
            AB Concrete helps Houston-area homeowners and commercial properties transform cracked, tired concrete into durable, high-end curb appeal. Call Tony today for a fast, free quote.
          </p>
          <div className="cta-row">
            <a className="button primary" href={phoneHref}>Get a Free Quote</a>
            <a className="button ghost" href="#media">See Recent Work</a>
          </div>
          <div className="metric-strip" aria-label="AB Concrete trust signals">
            <div><strong>80+</strong><span>Google reviews</span></div>
            <div><strong>8:00–6:30</strong><span>Mon–Sat hours</span></div>
            <div><strong>2026</strong><span>Local content & guides</span></div>
          </div>
        </div>
        <div className="hero-card reveal delay-1" aria-label="AB Concrete project summary">
          <figure className="hero-photo">
            <img src={heroImage} alt="Premium concrete crew finishing a modern exterior project" />
          </figure>
          <div className="logo-orb" aria-label="AB Concrete luxury brand mark">
            <span className="orb-stars">★★★★★</span>
            <strong>AB</strong>
            <em>Concrete</em>
          </div>
          <div className="project-card glass">
            <span className="status-dot" />
            <p>Now booking Houston concrete projects</p>
            <h2>Driveways • Patios • Sidewalks • Parking Lots</h2>
            <a href={phoneHref}>{phoneDisplay}</a>
          </div>
          <div className="concrete-slab slab-one" />
          <div className="concrete-slab slab-two" />
        </div>
      </section>

      <section className="marquee" aria-label="Services marquee">
        <div>
          <span>Driveway Replacement</span><span>Patios</span><span>Repair</span><span>Sidewalks</span><span>Parking Lot Repair</span><span>Concrete Calculator</span>
        </div>
      </section>

      <section id="driveway-replacement" className="section services">
        <div className="section-heading reveal">
          <p className="eyebrow">Built for conversion</p>
          <h2>Concrete services presented like a premium construction studio.</h2>
          <p>Every visitor sees the core offer immediately: expert driveway repair in Houston, full driveway replacement, patios, sidewalks, parking lot repair and a direct phone path to Tony.</p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card reveal" style={{ "--i": index } as CSSProperties} key={service.title} id={index === 1 ? "repair" : index === 2 ? "patios" : index === 3 ? "sidewalks" : index === 4 ? "parking-lot-repair" : undefined}>
              <img src={serviceImages[index]} alt={`${service.title} by AB Concrete`} />
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="media" className="section split">
        <div className="reveal">
          <p className="eyebrow">Project showcase</p>
          <h2>Recent work, real outcomes and a clear proof story.</h2>
          <p>
            The original site highlights previous concrete work from satisfied customers, a project showcase video, and Google page exploration. This redesign turns those proof points into a cinematic work wall.
          </p>
          <div className="showcase-note">
            <strong>Project showcase video</strong>
            <span>Use this section to embed the original customer project reel after deployment, without adding unsupported binary files to the pull request.</span>
          </div>
        </div>
        <div className="gallery-grid reveal delay-1">
          {gallery.map((item, index) => (
            <div className="work-tile" key={item.title}>
              <img src={item.image} alt={item.title} />
              <span>{index + 1}</span>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="reviews" className="section proof image-split">
        <div className="proof-panel reveal">
          <p className="eyebrow">Reviews & reputation</p>
          <h2>Value our customers. Prove it publicly.</h2>
          <p>
            AB Concrete actively invites customers to review the business on Google and Facebook, and promotes more than 80 Google reviews as a core trust signal for Houston concrete buyers.
          </p>
          <div className="review-actions">
            <a className="button primary" href="https://www.google.com/search?q=AB+Concrete+Houston+TX+reviews">Read Google Reviews</a>
            <a className="button ghost" href="https://www.facebook.com/search/top?q=AB%20Concrete%20Houston">Review on Facebook</a>
          </div>
        </div>
        <div className="trust-list reveal delay-1">
          <img className="proof-image" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80" alt="Beautiful finished home exterior and driveway" />
          {trust.map((item) => <div key={item}>✓ {item}</div>)}
        </div>
      </section>

      <section className="section mission mission-visual">
        <div className="reveal">
          <p className="eyebrow">Our mission</p>
          <blockquote>
            “Provide top-quality paving services that exceed client expectations, striving for excellence in every project and ensuring durable, reliable results.”
          </blockquote>
        </div>
        <div className="mission-card reveal delay-1">
          <img src="https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=900&q=80" alt="Construction professionals reviewing a quality project" />
          <h3>Why Houston chooses AB Concrete</h3>
          <p>Local presence, visible reviews, practical concrete education and a direct owner-style call-to-action create the trust needed before a homeowner books a quote.</p>
        </div>
      </section>

      <section className="section blog">
        <div className="section-heading reveal">
          <p className="eyebrow">Concrete guide</p>
          <h2>Educational content that brings buyers closer to a quote.</h2>
        </div>
        <div className="blog-grid">
          {posts.map(([date, title, text]) => (
            <article className="blog-card reveal" key={title}>
              <time>{date}</time>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href={phoneHref}>Discuss this project →</a>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section final-cta">
        <p className="eyebrow">Let’s discuss your project</p>
        <h2>Call Tony today to be your concrete contractor.</h2>
        <p>Serving Houston, Spring and nearby communities. Mon - Sat: 8:00 AM - 6:30 PM. Sunday closed.</p>
        <a className="button primary" href={phoneHref}>Call {phoneDisplay}</a>
      </section>

      <Chatbot />

      <footer>
        <div><strong>AB Concrete in Houston, TX</strong><span>Spring, United States • Geo presence: 30.1185635, -95.3730176</span></div>
        <div><span>Driveway Cost Guide</span><span>Privacy Policy</span><span>Copyright © 2026, AB Concrete. All Rights Reserved.</span><span>demo built by buildveloper@gmail.com</span></div>
      </footer>
    </main>
  );
}

function ThemeScript() {
  const code = `
    (function(){
      const stored = localStorage.getItem('ab-theme');
      const initial = stored || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
      document.documentElement.dataset.theme = initial;
      addEventListener('DOMContentLoaded', function(){
        document.querySelectorAll('[data-theme-toggle]').forEach(function(button){
          button.addEventListener('click', function(){
            const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
            document.documentElement.dataset.theme = next;
            localStorage.setItem('ab-theme', next);
          });
        });
      });
    })();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
