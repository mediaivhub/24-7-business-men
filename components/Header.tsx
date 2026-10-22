"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import OpenNow from "./OpenNow";
import { BRAND, bySlug, divisionOf } from "@/lib/services";

export default function Header() {
  const pathname = usePathname();
  const home = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // On the home page the header floats over the hero video until the page scrolls.
  // On phones it stays hidden until the video has scrolled almost out of view.
  useEffect(() => {
    if (!home) return;
    const phone = window.matchMedia("(max-width: 700px)");
    const onScroll = () =>
      setScrolled(window.scrollY > (phone.matches ? window.innerHeight - 90 : 40));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [home]);

  useEffect(() => setOpen(false), [pathname]);

  const slug = pathname.startsWith("/services/") ? pathname.split("/")[2] : "";
  const service = slug ? bySlug(slug) : undefined;
  const current = home
    ? "home"
    : service
      ? divisionOf(service)
      : pathname === "/services"
        ? "services"
        : "";
  const cur = (k: string) => (k === current ? { "aria-current": "page" as const } : {});

  const cls = home ? `overlay${scrolled || open ? " scrolled" : ""}` : undefined;

  return (
    <header className={cls}>
      <div className="wrap">
        <Link className="logo" href="/" aria-label={`${BRAND} home`}>
          <span className="logo-mark">24/7</span>
          <span className="logo-text">
            Businessmen<small>Trustee &amp; Residency</small>
          </span>
        </Link>
        <nav id="mainNav" aria-label="Main" className={open ? "open" : undefined} onClick={(e) => {
          if ((e.target as HTMLElement).closest("a")) setOpen(false);
        }}>
          <ul>
            <li><Link href="/" {...cur("home")}>Home</Link></li>
            <li><Link href="/services#trustee" {...cur("trustee")}>Property Trustee</Link></li>
            <li><Link href="/services#visa" {...cur("visa")}>Golden Visa</Link></li>
            <li><Link href="/services" {...cur("services")}>All services</Link></li>
            <li><Link href="/#contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="head-right">
          <OpenNow className="in-header" />
          <Link className="btn btn-gold" href="/#contact">Book a video call</Link>
          <button
            className="menu-btn"
            type="button"
            aria-expanded={open}
            aria-controls="mainNav"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
    </header>
  );
}
