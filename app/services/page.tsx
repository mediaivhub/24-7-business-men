import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import { DIVISIONS, GROUPS, SERVICES, servicesIn, type Division } from "@/lib/services";

export const metadata: Metadata = {
  title: "All services",
  description: "Property trustee and Golden Visa services in Dubai, available 24/7.",
};

export default function ServicesPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="wrap">
          <ol className="crumbs">
            <li><Link href="/">Home</Link></li>
            <li>All services</li>
          </ol>
          <p className="kicker">{SERVICES.length} services · open 24/7</p>
          <h1>Every property and residency service, in one office</h1>
          <p className="sum">{"Choose a service to see who it's for, the documents you need, the steps and the fees."}</p>
        </div>
      </div>

      {(["trustee", "visa"] as Division[]).map((d) => (
        <section id={d} key={d} className={d === "visa" ? "soft" : undefined}>
          <div className="wrap">
            <p className="kicker">{d === "trustee" ? "Division I" : "Division II"}</p>
            <div className={`division-title${d === "visa" ? " visa" : ""}`}>
              <i><Icon name={DIVISIONS[d].icon} /></i>
              <h2>{DIVISIONS[d].name}</h2>
            </div>
            <p style={{ color: "var(--muted)", maxWidth: "40em", margin: "14px 0 40px" }}>{DIVISIONS[d].blurb}</p>
            {GROUPS.filter((g) => g.division === d).map((g) => (
              <div className="dir-group" key={g.key}>
                <div>
                  <h2>{g.name}</h2>
                  <p>{g.blurb}</p>
                </div>
                <div className="tiles">
                  {servicesIn(g.key).map((s) => (
                    <Link className="tile" href={`/services/${s.slug}`} key={s.slug}>
                      <b>{s.title}</b>
                      <span>{s.summary}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
