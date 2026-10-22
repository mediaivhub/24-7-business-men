"use client";

import { useEffect, useState } from "react";

const fmt = new Intl.DateTimeFormat("en-US", {
  timeZone: "Asia/Dubai",
  hour: "numeric",
  minute: "2-digit",
});

// "Open now" pill with the live time in Dubai. The office never closes, so it is always open;
// the clock is what proves it. Renders without the time until mounted to avoid a hydration mismatch.
export default function OpenNow({ className = "" }: { className?: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={`open-now ${className}`} aria-live="off">
      <span className="open-dot" aria-hidden="true" />
      <span>
        Open now{time ? <span className="open-time"> · {time} in Dubai</span> : null}
      </span>
    </span>
  );
}
