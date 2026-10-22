"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";
import { waLink } from "@/lib/services";

const WA_TEXT = "Hi, I'd like help with a property transfer or Golden Visa.";
const VISA = "/services/golden-visa-10-year";

// Phone dock, always visible on every page: a capsule of tabs (the current one expands to show
// its name) beside an arch-shaped Book button. Larger screens get a floating WhatsApp button.
export default function BottomBar() {
  const path = usePathname();
  const current = path === "/" ? "home" : path === VISA ? "visa" : path.startsWith("/services") ? "services" : "";
  const on = (k: string) => (k === current ? { "aria-current": "page" as const } : {});

  return (
    <>
      <nav className="dock" aria-label="Quick actions">
        <div className="dock-tabs">
          <Link href="/" {...on("home")}><Icon name="home" /><span className="lbl">Home</span></Link>
          <Link href="/services" {...on("services")}><Icon name="grid" /><span className="lbl">Services</span></Link>
          <Link href={VISA} {...on("visa")} aria-label="Golden Visa"><Icon name="passport" /><span className="lbl">Visa</span></Link>
          <a href={waLink(WA_TEXT)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp, online now">
            <Icon name="whatsapp" /><em className="dock-live" aria-hidden="true" /><span className="lbl">WhatsApp</span>
          </a>
        </div>
        <Link href="/#contact" className="dock-book"><Icon name="calendar" /><span>Book</span></Link>
      </nav>
      <a className="wa-float" href={waLink(WA_TEXT)} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <Icon name="whatsapp" />
      </a>
    </>
  );
}
