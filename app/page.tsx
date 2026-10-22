import Link from "next/link";
import ContactBlock from "@/components/ContactBlock";
import Estimator from "@/components/Estimator";
import HeroVideo from "@/components/HeroVideo";
import Icon from "@/components/Icon";
import ServiceShowcase from "@/components/ServiceShowcase";
import { BRAND, SERVICES, bySlug } from "@/lib/services";

const BAR: Record<"trustee" | "visa", [string, string][]> = {
  trustee: [
    ["sale-transfer", "Property transfer"],
    ["sale-mortgage-registration", "Mortgage"],
    ["oqood-transfer", "Oqood"],
    ["gift-transfer", "Gifting"],
  ],
  visa: [
    ["golden-visa-10-year", "10-year visa"],
    ["dependent-visa", "Dependents"],
    ["medical-insurance", "Medical insurance"],
    ["property-valuation-golden-visa", "Valuation"],
  ],
};

export default function Home() {
  return (
    <main id="top">
      <div className="hero">
        <HeroVideo />
        <div className="wrap">
          <div className="hero-copy">
            <h1>Property &amp; residency, around the clock</h1>
            <div className="actions">
              <a className="btn btn-gold" href="#contact">Book an appointment</a>
              <a className="btn btn-glass" href="#estimate">Check Golden Visa eligibility</a>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="svc-bar">
          {(["trustee", "visa"] as const).map((d) => (
            <div className={`svc-group ${d}`} key={d}>
              <h2>{d === "trustee" ? "Property Trustee" : "Golden Visa"}</h2>
              <ul>
                {BAR[d].map(([slug, label]) => (
                  <li key={slug}>
                    <Link href={`/services/${slug}`}>
                      <Icon name={bySlug(slug)!.icon} />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="wrap">
        <div className="intro">
          <div>
            <p className="kicker" style={{ marginBottom: 16 }}>Dubai · Open 24/7</p>
            <h2>A trustee office that <em>never closes</em>, and stays with you after the transfer.</h2>
          </div>
          <p>
            Transfer your title deed at our office at any hour, then use it for your 10-year Golden Visa. One file,
            one team, so your residency application starts the day your deed is issued.
          </p>
        </div>
        <div className="facts">
          <div className="fact"><b>24/7</b><span>Transfers at any hour</span></div>
          <div className="fact"><b>Same day</b><span>Title deed issuance</span></div>
          <div className="fact"><b>AED 2M</b><span>Golden Visa threshold</span></div>
          <div className="fact"><b>10 years</b><span>Renewable residency</span></div>
        </div>
      </div>

      <section id="services" className="svc-band">
        <div className="wrap">
          <div className="sec-head">
            <div><p className="kicker">Services</p><h2>Two offices in one</h2></div>
            <p>{SERVICES.length} services, from registration to residency, available every hour of every day.</p>
          </div>
          <ServiceShowcase />
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link className="btn btn-gold" href="/services">View all {SERVICES.length} services</Link>
          </div>
        </div>
      </section>

      <section id="estimate">
        <div className="wrap">
          <div className="bridge">
            <div>
              <p className="kicker" style={{ color: "#E2C48E" }}>Transfer to residency</p>
              <h2 style={{ marginTop: 12 }}>
                Bought for AED 2M or more? Your title deed is <em>your visa application.</em>
              </h2>
              <p>Enter the purchase price to estimate your transfer-day costs and check Golden Visa eligibility.</p>
              <ol>
                <li>Sign and transfer at our trustee desk, day or night</li>
                <li>Receive your title deed the same day</li>
                <li>We file your Golden Visa with that deed</li>
              </ol>
            </div>
            <Estimator />
          </div>
        </div>
      </section>

      <section className="soft">
        <div className="wrap">
          <div className="sec-head">
            <div><p className="kicker">Why {BRAND}</p><h2>Fewer offices, no closing time</h2></div>
          </div>
          <div className="why">
            <div>
              <h3>24 hours, 7 days</h3>
              <p>Complete transfers late at night, at weekends and on public holidays, when the Land Department itself is closed.</p>
            </div>
            <div>
              <h3>One file</h3>
              <p>Your documents are collected once and used for both the transfer and the visa.</p>
            </div>
            <div>
              <h3>One contact</h3>
              <p>A single relationship manager from the day you sign to the day you receive your Emirates ID.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <ContactBlock />
      </section>
    </main>
  );
}
