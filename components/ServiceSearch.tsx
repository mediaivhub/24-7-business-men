"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useId, useMemo, useState } from "react";
import Icon from "./Icon";
import { SERVICES, groupOf, waLink } from "@/lib/services";

const POPULAR = ["Golden Visa", "Sale transfer", "Mortgage", "Gift"];

// Instant search over all services: matches every word against title, summary and group.
export default function ServiceSearch() {
  const router = useRouter();
  const id = useId();
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const [focused, setFocused] = useState(false);

  const results = useMemo(() => {
    const words = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!words.length) return [];
    return SERVICES.map((s) => {
      const title = s.title.toLowerCase();
      const hay = `${title} ${s.summary} ${groupOf(s).name} ${s.overview}`.toLowerCase();
      if (!words.every((w) => hay.includes(w))) return null;
      const score = words.reduce((n, w) => n + (title.includes(w) ? 3 : 1), 0) + (title.startsWith(words[0]) ? 2 : 0);
      return { s, score };
    })
      .filter((x): x is { s: (typeof SERVICES)[number]; score: number } => x !== null)
      .sort((x, y) => y.score - x.score)
      .slice(0, 6)
      .map((x) => x.s);
  }, [q]);

  const open = focused && q.trim().length > 0;

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!open) return;
    if (e.key === "ArrowDown") { e.preventDefault(); setActive((i) => Math.min(i + 1, results.length - 1)); }
    if (e.key === "ArrowUp") { e.preventDefault(); setActive((i) => Math.max(i - 1, 0)); }
    if (e.key === "Enter" && results[active]) { e.preventDefault(); router.push(`/services/${results[active].slug}`); }
    if (e.key === "Escape") setQ("");
  }

  return (
    <div className="search" onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false); }}>
      <div className="search-box">
        <Icon name="search" />
        <label className="sr-only" htmlFor={`${id}q`}>Search services</label>
        <input
          id={`${id}q`}
          type="search"
          placeholder='Search "Golden Visa", "gift"…'
          autoComplete="off"
          role="combobox"
          aria-expanded={open}
          aria-controls={`${id}list`}
          aria-activedescendant={open && results[active] ? `${id}opt${active}` : undefined}
          value={q}
          onFocus={() => setFocused(true)}
          onChange={(e) => { setQ(e.target.value); setActive(0); }}
          onKeyDown={onKeyDown}
        />
        {q && (
          <button type="button" className="search-clear" aria-label="Clear search" onClick={() => setQ("")}>×</button>
        )}
      </div>

      {open && (
        <div className="search-results" id={`${id}list`} role="listbox">
          {results.length ? (
            results.map((s, i) => (
              <Link
                key={s.slug}
                id={`${id}opt${i}`}
                role="option"
                aria-selected={i === active}
                className="search-item"
                href={`/services/${s.slug}`}
                onMouseEnter={() => setActive(i)}
              >
                <i><Icon name={s.icon} /></i>
                <span><b>{s.title}</b><small>{groupOf(s).name}</small></span>
              </Link>
            ))
          ) : (
            <div className="search-empty">
              <p>{`No service matches "${q}".`}</p>
              <a href={waLink(`Hi, I need help with: ${q}`)} target="_blank" rel="noopener noreferrer">Ask us on WhatsApp →</a>
            </div>
          )}
        </div>
      )}

      <div className="search-popular">
        <span>Popular:</span>
        {POPULAR.map((p) => (
          <button type="button" key={p} onClick={() => { setQ(p); setFocused(true); setActive(0); }}>{p}</button>
        ))}
      </div>
    </div>
  );
}
