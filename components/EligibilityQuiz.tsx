"use client";

import Link from "next/link";
import { useState } from "react";
import Icon from "./Icon";
import { waLink } from "@/lib/services";

type Answers = {
  value: number;
  type?: "ready" | "off-plan";
  pay?: "cash" | "mortgage";
  family?: "solo" | "family";
};

const THRESHOLD = 2_000_000;
const PRESETS = [1_500_000, 2_000_000, 3_000_000, 5_000_000];
const aed = (n: number) => "AED " + Math.round(n).toLocaleString("en-US");
const short = (n: number) => (n >= 1_000_000 ? `${+(n / 1_000_000).toFixed(2)}M` : `${Math.round(n / 1000)}K`);

// Three-question Golden Visa check, ending in a result card with transfer-day costs.
export default function EligibilityQuiz() {
  const [step, setStep] = useState(0);
  const [a, setA] = useState<Answers>({ value: 2_450_000 });

  const set = (patch: Partial<Answers>, next = true) => {
    setA((prev) => ({ ...prev, ...patch }));
    if (next) setStep((s) => s + 1);
  };

  const total = 4;
  const eligible = a.value >= THRESHOLD;
  const dld = a.value * 0.04;
  const mortgage = a.pay === "mortgage" ? a.value * 0.7 * 0.0025 + 290 : 0;
  const trustee = (a.value >= 500_000 ? 4000 : 2000) * 1.05;
  const admin = a.type === "off-plan" ? 40 : 580;

  const notes: string[] = [];
  if (eligible && a.type === "off-plan") notes.push("Off-plan qualifies when bought from an approved developer.");
  if (eligible && a.pay === "mortgage") notes.push("Mortgaged property qualifies with a no-objection letter from your bank.");
  if (eligible && a.family === "family") notes.push("Your spouse, children and parents can be added on the same timeline.");
  if (!eligible && a.value >= 1_000_000) notes.push("Aged 55 or over? A property worth AED 1M or more can qualify you for the 5-year retirement visa.");
  if (!eligible) notes.push("Several properties in your name can be combined to reach the threshold.");

  const summary =
    `Hi, I'd like to start a Golden Visa application. Property value: ${aed(a.value)}, ` +
    `${a.type ?? "ready"}, ${a.pay ?? "cash"}, applying ${a.family === "family" ? "with family" : "alone"}.`;

  return (
    <div className="quiz" aria-live="polite">
      <div className="quiz-top">
        <span className="quiz-step">{step < 3 ? `Question ${step + 1} of 3` : "Your result"}</span>
        {step > 0 && (
          <button type="button" className="quiz-back" onClick={() => setStep((s) => s - 1)}>
            ← Back
          </button>
        )}
      </div>
      <div className="quiz-bar" aria-hidden="true">
        <span style={{ width: `${((step + 1) / total) * 100}%` }} />
      </div>

      <div className="quiz-body" key={step}>
        {step === 0 && (
          <>
            <h3>What is the property worth?</h3>
            <label className="sr-only" htmlFor="quizValue">Property value in AED</label>
            <div className="money">
              <span>AED</span>
              <input
                id="quizValue"
                inputMode="numeric"
                autoComplete="off"
                value={a.value ? a.value.toLocaleString("en-US") : ""}
                onChange={(e) => set({ value: Number(e.target.value.replace(/[^\d]/g, "")) || 0 }, false)}
              />
            </div>
            <div className="quiz-chips">
              {PRESETS.map((p) => (
                <button
                  type="button"
                  key={p}
                  className="quiz-chip"
                  aria-pressed={a.value === p}
                  onClick={() => set({ value: p }, false)}
                >
                  {short(p)}
                </button>
              ))}
            </div>
            <button type="button" className="btn btn-gold quiz-next" disabled={!a.value} onClick={() => setStep(1)}>
              Next
            </button>
          </>
        )}

        {step === 1 && (
          <>
            <h3>Is it ready or off-plan?</h3>
            <div className="quiz-options">
              <button type="button" className="quiz-option" onClick={() => set({ type: "ready" })}>
                <Icon name="home" /><b>Ready</b><span>Completed, with a title deed</span>
              </button>
              <button type="button" className="quiz-option" onClick={() => set({ type: "off-plan" })}>
                <Icon name="file" /><b>Off-plan</b><span>Under construction, Oqood</span>
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h3>How are you paying, and who is applying?</h3>
            <div className="quiz-options">
              <button type="button" className="quiz-option" aria-pressed={a.pay === "cash"} onClick={() => set({ pay: "cash" }, false)}>
                <Icon name="card" /><b>Cash</b><span>No mortgage</span>
              </button>
              <button type="button" className="quiz-option" aria-pressed={a.pay === "mortgage"} onClick={() => set({ pay: "mortgage" }, false)}>
                <Icon name="building" /><b>Mortgage</b><span>With a UAE bank</span>
              </button>
              <button type="button" className="quiz-option" aria-pressed={a.family === "solo"} onClick={() => set({ family: "solo" }, false)}>
                <Icon name="user" /><b>Just me</b><span>Single applicant</span>
              </button>
              <button type="button" className="quiz-option" aria-pressed={a.family === "family"} onClick={() => set({ family: "family" }, false)}>
                <Icon name="family" /><b>With family</b><span>Spouse, children, parents</span>
              </button>
            </div>
            <button type="button" className="btn btn-gold quiz-next" disabled={!a.pay || !a.family} onClick={() => setStep(3)}>
              See my result
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <div className={`quiz-verdict${eligible ? "" : " no"}`}>
              <i><Icon name={eligible ? "check" : "scale"} /></i>
              <div>
                <b>{eligible ? "You qualify for the 10-year Golden Visa" : "Not yet eligible for the Golden Visa"}</b>
                <span>
                  {eligible
                    ? `${aed(a.value)} is above the AED 2M threshold.`
                    : `${aed(THRESHOLD - a.value)} more in property value would qualify you.`}
                </span>
              </div>
            </div>
            {notes.length > 0 && (
              <ul className="ticks quiz-notes">{notes.map((n) => <li key={n}>{n}</li>)}</ul>
            )}
            <div className="rows">
              <div className="row"><span>DLD transfer fee (4%)</span><span>{aed(dld)}</span></div>
              {a.pay === "mortgage" && (
                <div className="row"><span>Mortgage registration*</span><span>{aed(mortgage)}</span></div>
              )}
              <div className="row"><span>Trustee fee, incl. VAT</span><span>{aed(trustee)}</span></div>
              <div className="row"><span>{a.type === "off-plan" ? "Oqood registration" : "Title deed issuance"}</span><span>{aed(admin)}</span></div>
              <div className="row total"><span>Transfer day total</span><span>{aed(dld + mortgage + trustee + admin)}</span></div>
            </div>
            <p className="fine">
              Indicative. {a.pay === "mortgage" ? "*Assumes a loan of 70% of the price. " : ""}Final fees are confirmed by DLD on the day.
            </p>
            <div className="quiz-actions">
              <a className="btn btn-wa" href={waLink(summary)} target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" />Start on WhatsApp
              </a>
              <Link className="btn btn-line" href="#contact">Book an appointment</Link>
            </div>
            <button type="button" className="quiz-restart" onClick={() => { setA({ value: 2_450_000 }); setStep(0); }}>
              Start again
            </button>
          </>
        )}
      </div>
    </div>
  );
}
