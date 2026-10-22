import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactBlock from "@/components/ContactBlock";
import {
  DIVISIONS,
  PHONE,
  SERVICES,
  TRUSTEE_STEPS,
  VISA_STEPS,
  bySlug,
  divisionOf,
  groupOf,
} from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = bySlug((await params).slug);
  return s ? { title: s.title, description: s.summary } : {};
}

export default async function ServicePage({ params }: Props) {
  const s = bySlug((await params).slug);
  if (!s) notFound();

  const division = divisionOf(s);
  const group = groupOf(s);
  const steps = division === "trustee" ? TRUSTEE_STEPS : VISA_STEPS;

  let related = SERVICES.filter((r) => r.group === s.group && r.slug !== s.slug);
  if (related.length < 3) {
    related = related.concat(
      SERVICES.filter((r) => divisionOf(r) === division && r.group !== s.group).slice(0, 4 - related.length),
    );
  }

  const cross =
    division === "trustee"
      ? {
          title: "Property worth AED 2M or more?",
          body: "Your new title deed can go straight into a 10-year Golden Visa application.",
          href: "/services/golden-visa-10-year",
          cta: "See the Golden Visa",
        }
      : {
          title: "Still buying the property?",
          body: "Complete the transfer at our trustee desk, any hour, and we start your visa the same day.",
          href: "/services/sale-transfer",
          cta: "See property transfer",
        };

  return (
    <main>
      <div className="page-hero">
        <div className="wrap">
          <ol className="crumbs">
            <li><Link href="/">Home</Link></li>
            <li><Link href={`/services#${division}`}>{DIVISIONS[division].name}</Link></li>
            <li>{s.title}</li>
          </ol>
          <p className="kicker">{group.name}</p>
          <h1>{s.title}</h1>
          <p className="sum">{s.summary}</p>
          <div className="actions">
            <a className="btn btn-gold" href="#contact">Book this service</a>
            <a className="btn btn-glass" href="#documents">Required documents</a>
          </div>
        </div>
      </div>

      <div className="wrap page-body">
        <article>
          <div className="blk">
            <h2>Overview</h2>
            <p>{s.overview}</p>
          </div>
          <div className="blk">
            <h2>{"Who it's for"}</h2>
            <ul className="ticks">{s.who.map((w) => <li key={w}>{w}</li>)}</ul>
          </div>
          <div className="blk" id="documents">
            <h2>Required documents</h2>
            <ol className="docs">{s.docs.map((d) => <li key={d}>{d}</li>)}</ol>
          </div>
          <div className="blk">
            <h2>How it works</h2>
            <ol className="flow">
              {steps.map(([a, b]) => (
                <li key={a}><b>{a}</b><span>{b}</span></li>
              ))}
            </ol>
          </div>
          <div className="blk">
            <h2>Fees</h2>
            <dl className="fees">
              {s.fees.map((f) => (
                <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>
              ))}
            </dl>
            <p className="fine">Indicative. Government fees are confirmed by the relevant authority on the day.</p>
          </div>
        </article>

        <aside className="side">
          <div className="card">
            <h3>At a glance</h3>
            <dl className="glance">
              <div><dt>Processing time</dt><dd>{s.time}</dd></div>
              <div><dt>Available</dt><dd>24 hours, 7 days a week</dd></div>
              <div><dt>Fee</dt><dd>{s.fees[0].value}</dd></div>
              {s.outputs.length > 0 && (
                <div>
                  <dt>You receive</dt>
                  <dd>
                    <ul className="ticks" style={{ gap: 6, marginTop: 6 }}>
                      {s.outputs.map((o) => <li key={o}>{o}</li>)}
                    </ul>
                  </dd>
                </div>
              )}
            </dl>
            <a className="btn btn-gold" href="#contact">Book this service</a>
          </div>
          <div className="card dark">
            <strong>Call any time</strong>
            <p>Our team answers around the clock.</p>
            <p style={{ color: "#E2C48E", fontSize: "1.05rem", marginTop: 12, userSelect: "all" }}>{PHONE}</p>
          </div>
          <div className="card">
            <h3>Related services</h3>
            <ul className="related">
              {related.slice(0, 4).map((r) => (
                <li key={r.slug}>
                  <Link href={`/services/${r.slug}`}>{r.title}<span aria-hidden="true">→</span></Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <div className="wrap" style={{ paddingBottom: 96 }}>
        <div className="cross">
          <div><h2>{cross.title}</h2><p>{cross.body}</p></div>
          <Link className="btn btn-line" href={cross.href}>{cross.cta}</Link>
        </div>
      </div>

      <section id="contact" className="soft">
        <ContactBlock service={s.title} />
      </section>
    </main>
  );
}
