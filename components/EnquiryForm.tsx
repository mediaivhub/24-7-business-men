"use client";

import { useId, useState } from "react";
import { SERVICES } from "@/lib/services";

// Appointment request. Not wired to a backend yet: it only confirms on screen.
export default function EnquiryForm({ service }: { service?: string }) {
  const id = useId();
  const [message, setMessage] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const ok = String(data.get("name") ?? "").trim() && String(data.get("phone") ?? "").trim();
    setMessage(
      ok
        ? "Thank you. Our team will call you back within minutes, any time of day."
        : "Please add your name and phone number.",
    );
  }

  return (
    <form className="enquiry" noValidate onSubmit={onSubmit}>
      <div className="two">
        <div className="fi">
          <label htmlFor={`${id}name`}>Name</label>
          <input id={`${id}name`} name="name" autoComplete="name" />
        </div>
        <div className="fi">
          <label htmlFor={`${id}phone`}>Phone</label>
          <input id={`${id}phone`} name="phone" inputMode="tel" autoComplete="tel" />
        </div>
      </div>
      <div className="fi">
        <label htmlFor={`${id}svc`}>Service</label>
        {service ? (
          <input id={`${id}svc`} name="service" value={service} readOnly />
        ) : (
          <select id={`${id}svc`} name="service">
            {SERVICES.map((s) => (
              <option key={s.slug}>{s.title}</option>
            ))}
          </select>
        )}
      </div>
      <div className="fi">
        <label htmlFor={`${id}date`}>Preferred date</label>
        <input id={`${id}date`} name="date" type="date" />
      </div>
      <button className="btn btn-gold" type="submit">Request appointment</button>
      {message && <p className="sent">{message}</p>}
    </form>
  );
}
