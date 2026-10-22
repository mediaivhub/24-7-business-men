"use client";

import Link from "next/link";
import { useState } from "react";
import Icon from "./Icon";
import { DIVISIONS, GROUPS, bySlug, servicesIn, type Division } from "@/lib/services";

const FEATURED: Record<Division, { slug: string; image: string; tag: string }> = {
  trustee: { slug: "sale-transfer", image: "/assets/hero-poster.jpg", tag: "Most requested" },
  visa: { slug: "golden-visa-10-year", image: "/assets/hero-mobile-poster.jpg", tag: "For property owners" },
};

// Dark services band: division switch, a featured photo card, then a card row per group.
export default function ServiceShowcase() {
  const [division, setDivision] = useState<Division>("trustee");

  return (
    <>
      <div className="svc-tabs" role="tablist" aria-label="Service division">
        {(["trustee", "visa"] as Division[]).map((d) => (
          <button
            key={d}
            type="button"
            role="tab"
            id={d === "trustee" ? "tabTrustee" : "tabVisa"}
            aria-selected={division === d}
            aria-controls={`panel-${d}`}
            onClick={() => setDivision(d)}
          >
            <Icon name={DIVISIONS[d].icon} />
            {d === "trustee" ? "Property Trustee" : "Golden Visa"}
          </button>
        ))}
      </div>

      {(["trustee", "visa"] as Division[]).map((d) => {
        const f = FEATURED[d];
        const fs = bySlug(f.slug)!;
        return (
          <div className="svc-panel" id={`panel-${d}`} role="tabpanel" key={d} hidden={division !== d}>
            <Link className="feature" href={`/services/${fs.slug}`} style={{ backgroundImage: `url('${f.image}')` }}>
              <span className="feature-body">
                <span className="feature-tag">{f.tag}</span>
                <span className="feature-title">{fs.title}</span>
                <span className="feature-sum">{fs.summary}</span>
                <span className="feature-cta">Explore service <span aria-hidden="true">→</span></span>
              </span>
            </Link>
            {GROUPS.filter((g) => g.division === d).map((g) => (
              <div className="card-group" key={g.key}>
                <h4>{g.name}</h4>
                <div className="scards">
                  {servicesIn(g.key)
                    .filter((s) => s.slug !== f.slug)
                    .map((s) => (
                      <Link className="scard" href={`/services/${s.slug}`} key={s.slug}>
                        <i><Icon name={s.icon} /></i>
                        <b>{s.title}</b>
                        <span>{s.summary}</span>
                        <em aria-hidden="true">→</em>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </>
  );
}
