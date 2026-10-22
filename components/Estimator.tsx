"use client";

import { useState } from "react";

const fmt = (n: number) => "AED " + Math.round(n).toLocaleString("en-US");

// Indicative transfer-day costs: DLD 4%, trustee fee + 5% VAT, AED 580 title deed issuance.
export default function Estimator() {
  const [value, setValue] = useState(2450000);
  const dld = value * 0.04;
  const trustee = (value >= 500000 ? 4000 : 2000) * 1.05;
  const eligible = value >= 2000000;

  return (
    <div className="estimator">
      <label htmlFor="price">Purchase price</label>
      <div className="money">
        <span>AED</span>
        <input
          id="price"
          inputMode="numeric"
          autoComplete="off"
          value={value ? value.toLocaleString("en-US") : ""}
          onChange={(e) => setValue(Number(e.target.value.replace(/[^\d]/g, "")) || 0)}
        />
      </div>
      <div className="rows" aria-live="polite">
        <div className="row"><span>DLD transfer fee (4%)</span><span>{fmt(dld)}</span></div>
        <div className="row"><span>Trustee fee, incl. VAT</span><span>{fmt(trustee)}</span></div>
        <div className="row"><span>Title deed issuance</span><span>AED 580</span></div>
        <div className="row total"><span>Estimated total</span><span>{fmt(dld + trustee + 580)}</span></div>
      </div>
      <p className={`verdict${eligible ? "" : " no"}`}>
        {eligible
          ? "Eligible for the 10-year Golden Visa."
          : `A further ${fmt(2000000 - value)} in property value would qualify for the Golden Visa.`}
      </p>
      <p className="fine">Indicative figures. Final fees are confirmed by DLD on the day.</p>
    </div>
  );
}
