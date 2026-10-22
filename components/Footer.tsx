import Link from "next/link";
import { ADDRESS, BRAND, EMAIL, PHONE, SERVICES, WHATSAPP, divisionOf } from "@/lib/services";

export default function Footer() {
  const trustee = SERVICES.filter((s) => divisionOf(s) === "trustee").slice(0, 6);
  const visa = SERVICES.filter((s) => divisionOf(s) === "visa").slice(0, 6);
  return (
    <footer className="site-foot">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Link className="logo" href="/" aria-label={`${BRAND} home`}>
              <span className="logo-mark">24/7</span>
              <span className="logo-text">
                Businessmen<small>Trustee &amp; Residency</small>
              </span>
            </Link>
            <p>{"Dubai's round-the-clock registration trustee and Golden Visa office."}</p>
            <p>{ADDRESS}</p>
          </div>
          <div>
            <h4>Property Trustee</h4>
            <ul>
              {trustee.map((s) => (
                <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.title}</Link></li>
              ))}
              <li><Link href="/services#trustee">All trustee services →</Link></li>
            </ul>
          </div>
          <div>
            <h4>Golden Visa</h4>
            <ul>
              {visa.map((s) => (
                <li key={s.slug}><Link href={`/services/${s.slug}`}>{s.title}</Link></li>
              ))}
              <li><Link href="/services#visa">All visa services →</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>Open 24 hours, 7 days</li>
              <li>{PHONE}</li>
              <li>WhatsApp {WHATSAPP}</li>
              <li>{EMAIL}</li>
              <li><Link href="/#contact">Book an appointment →</Link></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 {BRAND}. All rights reserved.</span>
          <span>Contact details and fees are placeholders</span>
        </div>
      </div>
    </footer>
  );
}
