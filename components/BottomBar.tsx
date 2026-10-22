"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";
import { waLink } from "@/lib/services";

const WA_TEXT = "Hi, I'd like help with a property transfer or Golden Visa.";

// App-style tab bar on phones; a floating WhatsApp button on larger screens.
export default function BottomBar() {
  const path = usePathname();
  const on = (match: boolean) => (match ? { "aria-current": "page" as const } : {});

  return (
    <>
      <nav className="bottom-bar" aria-label="Quick actions">
        <Link href="/" {...on(path === "/")}><Icon name="home" /><span>Home</span></Link>
        <Link href="/services" {...on(path.startsWith("/services") && path !== "/services/golden-visa-10-year")}>
          <Icon name="grid" /><span>Services</span>
        </Link>
        <Link href="/#contact" className="bb-book"><i><Icon name="calendar" /></i><span>Book</span></Link>
        <Link href="/services/golden-visa-10-year" {...on(path === "/services/golden-visa-10-year")}>
          <Icon name="passport" /><span>Golden Visa</span>
        </Link>
        <a href={waLink(WA_TEXT)} target="_blank" rel="noopener noreferrer" className="bb-wa">
          <Icon name="whatsapp" /><span>WhatsApp</span>
        </a>
      </nav>
      <a className="wa-float" href={waLink(WA_TEXT)} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <Icon name="whatsapp" />
      </a>
    </>
  );
}
