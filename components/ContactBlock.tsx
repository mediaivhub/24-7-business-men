import EnquiryForm from "./EnquiryForm";
import { ADDRESS, EMAIL, PHONE, WHATSAPP } from "@/lib/services";

export default function ContactBlock({ service }: { service?: string }) {
  return (
    <div className="wrap contact">
      <div>
        <p className="kicker">Contact</p>
        <h2>{service ? `Book ${service.toLowerCase()}` : "Book a transfer or a Golden Visa consultation."}</h2>
        <dl>
          <dt>Office</dt><dd>{ADDRESS}</dd>
          <dt>Hours</dt><dd>Open 24 hours, 7 days a week</dd>
          <dt>Phone</dt><dd>{PHONE}</dd>
          <dt>WhatsApp</dt><dd>{WHATSAPP}</dd>
          <dt>Email</dt><dd>{EMAIL}</dd>
        </dl>
      </div>
      <EnquiryForm service={service} />
    </div>
  );
}
