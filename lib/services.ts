// Service catalogue. Trustee services follow tamleekpt.ae, residency services follow goldencube.ae.
// Copy is original; fees are indicative placeholders.

export type Division = "trustee" | "visa";

export type Group = { division: Division; key: string; name: string; blurb: string };

export type Service = {
  slug: string;
  title: string;
  group: string;
  icon: string;
  summary: string;
  overview: string;
  who: string[];
  docs: string[];
  fees: { label: string; value: string }[];
  time: string;
  outputs: string[];
};

export const BRAND = "24/7 Businessmen";
export const PHONE = "+971 4 123 4567";
export const WHATSAPP = "+971 50 123 4567";
export const EMAIL = "hello@247businessmen.ae";
// WhatsApp chat link with a prefilled message (number is a placeholder).
export const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP.replace(/[^\d]/g, "")}?text=${encodeURIComponent(text)}`;
export const ADDRESS =
  "24 Seven Government Transaction Center LLC, 17 A Street, Al Khabaisi (behind Abu Baker Al Siddique Metro Station), Deira, Dubai, UAE. P.O. Box 81143";

export const DIVISIONS: Record<Division, { name: string; icon: string; blurb: string }> = {
  trustee: { name: "Property Trustee", icon: "home", blurb: "A registration trustee office handling Dubai Land Department transactions, day and night." },
  visa: { name: "Golden Visa & Residency", icon: "passport", blurb: "Long-term UAE residency for property owners, retirees and their families, filed and followed through by our team." },
};

export const GROUPS: Group[] = [
  {
    "division": "trustee",
    "key": "registration",
    "name": "Registration",
    "blurb": "Property registration between parties, for ready and off-plan units."
  },
  {
    "division": "trustee",
    "key": "trustee-services",
    "name": "Trustee services",
    "blurb": "Certificates, plans and record updates for property you already own."
  },
  {
    "division": "trustee",
    "key": "additional",
    "name": "Additional services",
    "blurb": "Legal paperwork that usually needs a separate trip to court or a translator."
  },
  {
    "division": "trustee",
    "key": "in-house",
    "name": "Complimentary",
    "blurb": "Included free with any transaction at our office."
  },
  {
    "division": "visa",
    "key": "residency",
    "name": "Residency visas",
    "blurb": "Long-term and short-term UAE residency for owners, retirees, families and guests."
  },
  {
    "division": "visa",
    "key": "visa-support",
    "name": "Visa support",
    "blurb": "Everything that keeps a residency file valid and up to date."
  }
];

export const TRUSTEE_STEPS: [string, string][] = [
  [
    "Book",
    "Reserve a slot online, by phone, or send your documents on WhatsApp."
  ],
  [
    "Check",
    "We review every document in advance so nothing is missing on the day."
  ],
  [
    "Sign & pay",
    "Visit our office, or sign through a legal representative, and settle the fees."
  ],
  [
    "Receive",
    "Your documents are issued electronically and sent to you by email."
  ]
];

export const VISA_STEPS: [string, string][] = [
  [
    "Eligibility",
    "A free check of your property, income or profile against the current criteria."
  ],
  [
    "Documents",
    "Upload your passport, photo and supporting papers. We prepare the file."
  ],
  [
    "Application",
    "We submit to the immigration authority and track the file daily."
  ],
  [
    "Medical & ID",
    "We book your medical test and Emirates ID biometrics."
  ],
  [
    "Issued",
    "Your visa is issued and your Emirates ID is delivered."
  ]
];

export const SERVICES: Service[] = [
  {
    "slug": "sale-transfer",
    "title": "Sale transfer",
    "group": "registration",
    "icon": "home",
    "summary": "Transfer ownership of a ready property from seller to buyer and receive the new title deed the same day.",
    "overview": "Register the full or partial sale of land, a villa, an apartment or an office between a seller and a buyer, or their legal representatives. Once the fees are paid, the Dubai Land Department issues the new title deed in the buyer's name electronically.",
    "who": [
      "UAE citizens, residents and non-residents",
      "Individuals and registered companies",
      "Buyers paying cash or with a mortgage"
    ],
    "docs": [
      "Copy of the current title deed",
      "Passports and Emirates IDs of buyer and seller",
      "No Objection Certificate (NOC) from the developer",
      "Signed Form F (MOU) sale agreement",
      "Manager's cheque in the seller's name",
      "Power of attorney, if a representative signs"
    ],
    "fees": [
      {
        "label": "Dubai Land Department",
        "value": "4% of the sale price"
      },
      {
        "label": "Title deed issuance",
        "value": "AED 580 for apartment, villa or office · AED 430 for land"
      },
      {
        "label": "Trustee office fee",
        "value": "AED 4,000 + 5% VAT (property AED 500K and above) · AED 2,000 + 5% VAT below"
      }
    ],
    "time": "30 to 45 minutes",
    "outputs": [
      "Electronic title deed",
      "Property map",
      "Payment receipts"
    ]
  },
  {
    "slug": "oqood-transfer",
    "title": "Off-plan sale (Oqood)",
    "group": "registration",
    "icon": "file",
    "summary": "Register or resell an off-plan unit under the Oqood interim register before the building is complete.",
    "overview": "Oqood is the Dubai Land Department's register for property still under construction. We register first purchases from the developer and resale assignments between buyers, coordinating the developer's approval and the payment history on file.",
    "who": [
      "Buyers of off-plan units from approved developers",
      "Investors reselling before handover"
    ],
    "docs": [
      "Sale and purchase agreement (SPA) or existing Oqood certificate",
      "Passports and Emirates IDs of both parties",
      "Developer NOC for resale",
      "Statement of account from the developer",
      "Signed Form F, for resale"
    ],
    "fees": [
      {
        "label": "Dubai Land Department",
        "value": "4% of the sale price"
      },
      {
        "label": "Developer admin fee",
        "value": "Set by the developer"
      },
      {
        "label": "Trustee office fee",
        "value": "AED 4,000 + 5% VAT (property AED 500K and above) · AED 2,000 + 5% VAT below"
      }
    ],
    "time": "30 to 45 minutes",
    "outputs": [
      "Oqood certificate",
      "Payment receipts"
    ]
  },
  {
    "slug": "gift-transfer",
    "title": "Gift transfer",
    "group": "registration",
    "icon": "gift",
    "summary": "Gift a ready property to a first-degree relative at a reduced Land Department fee.",
    "overview": "Transfer a completed property to a parent, child or spouse as a gift. Gifts between first-degree relatives are registered at a reduced Dubai Land Department fee instead of the standard 4% transfer fee.",
    "who": [
      "Owners gifting to a spouse, parent or child",
      "Families restructuring ownership"
    ],
    "docs": [
      "Copy of the title deed",
      "Passports and Emirates IDs of both parties",
      "Proof of relationship: marriage or birth certificate, attested if issued abroad",
      "Developer NOC",
      "Property valuation certificate"
    ],
    "fees": [
      {
        "label": "Dubai Land Department",
        "value": "0.125% of the property value"
      },
      {
        "label": "Title deed issuance",
        "value": "AED 580 for apartment, villa or office · AED 430 for land"
      },
      {
        "label": "Trustee office fee",
        "value": "AED 4,000 + 5% VAT (property AED 500K and above) · AED 2,000 + 5% VAT below"
      }
    ],
    "time": "30 to 45 minutes",
    "outputs": [
      "Electronic title deed in the recipient's name",
      "Payment receipts"
    ]
  },
  {
    "slug": "off-plan-gift-transfer",
    "title": "Off-plan gift transfer",
    "group": "registration",
    "icon": "gift",
    "summary": "Gift an off-plan unit registered under Oqood to a first-degree relative.",
    "overview": "The same reduced-fee family gift, applied to a unit that is still under construction. We obtain the developer's approval and update the Oqood record in the recipient's name.",
    "who": [
      "Off-plan owners gifting to a spouse, parent or child"
    ],
    "docs": [
      "Oqood certificate or SPA",
      "Passports and Emirates IDs of both parties",
      "Proof of relationship, attested if issued abroad",
      "Developer NOC and statement of account"
    ],
    "fees": [
      {
        "label": "Dubai Land Department",
        "value": "0.125% of the amount paid"
      },
      {
        "label": "Developer admin fee",
        "value": "Set by the developer"
      },
      {
        "label": "Trustee office fee",
        "value": "AED 4,000 + 5% VAT (property AED 500K and above) · AED 2,000 + 5% VAT below"
      }
    ],
    "time": "30 to 45 minutes",
    "outputs": [
      "Updated Oqood certificate",
      "Payment receipts"
    ]
  },
  {
    "slug": "sale-mortgage-registration",
    "title": "Sale & mortgage registration",
    "group": "registration",
    "icon": "card",
    "summary": "Register a purchase and the buyer's mortgage in one sitting, with the bank's representative present.",
    "overview": "When the buyer is financing the purchase, the sale and the new mortgage are registered together. We coordinate the buyer's bank, the seller's bank where a loan is being cleared, and the Land Department so all cheques are exchanged in one appointment.",
    "who": [
      "Buyers using a UAE bank mortgage",
      "Sellers with an outstanding loan being cleared"
    ],
    "docs": [
      "Copy of the title deed",
      "Passports and Emirates IDs of both parties",
      "Developer NOC",
      "Signed Form F",
      "Final offer letter from the buyer's bank",
      "Liability letter and release letter from the seller's bank, if applicable"
    ],
    "fees": [
      {
        "label": "Dubai Land Department",
        "value": "4% of the sale price"
      },
      {
        "label": "Mortgage registration",
        "value": "0.25% of the loan amount + AED 290"
      },
      {
        "label": "Trustee office fee",
        "value": "AED 4,000 + 5% VAT (property AED 500K and above) · AED 2,000 + 5% VAT below"
      }
    ],
    "time": "45 to 60 minutes",
    "outputs": [
      "Electronic title deed",
      "Mortgage certificate",
      "Payment receipts"
    ]
  },
  {
    "slug": "property-blocking",
    "title": "Property blocking",
    "group": "registration",
    "icon": "lock",
    "summary": "Place a temporary hold on a property so it cannot be sold to anyone else while a deal completes.",
    "overview": "A block is registered on the title at the request of the owner, so no other transaction can be made while a sale, mortgage or legal matter is being finalised. We register the block and its later removal.",
    "who": [
      "Sellers and buyers mid-transaction",
      "Owners protecting a property during a dispute"
    ],
    "docs": [
      "Copy of the title deed",
      "Owner's passport and Emirates ID",
      "Signed blocking request",
      "Supporting agreement or court letter, if applicable"
    ],
    "fees": [
      {
        "label": "Dubai Land Department",
        "value": "As per the DLD fee schedule"
      },
      {
        "label": "Trustee office fee",
        "value": "AED 4,000 + 5% VAT (property AED 500K and above) · AED 2,000 + 5% VAT below"
      }
    ],
    "time": "20 to 30 minutes",
    "outputs": [
      "Blocking confirmation"
    ]
  },
  {
    "slug": "company-registration",
    "title": "Company registration",
    "group": "registration",
    "icon": "building",
    "summary": "Register your company with the Land Department so it can buy, sell or own property in Dubai.",
    "overview": "A company must be registered with the Dubai Land Department before it can take part in any property transaction. We register mainland and free zone companies and keep their records current.",
    "who": [
      "Mainland companies",
      "Free zone companies",
      "Offshore companies permitted to own Dubai property"
    ],
    "docs": [
      "Trade licence",
      "Memorandum and articles of association",
      "Certificate of incumbency or good standing",
      "Board resolution authorising the transaction",
      "Passport and Emirates ID of the authorised signatory"
    ],
    "fees": [
      {
        "label": "Dubai Land Department",
        "value": "As per the DLD fee schedule"
      },
      {
        "label": "Trustee office fee",
        "value": "Quoted on request"
      }
    ],
    "time": "30 to 45 minutes",
    "outputs": [
      "DLD company registration"
    ]
  },
  {
    "slug": "affection-plan",
    "title": "Affection plan",
    "group": "trustee-services",
    "icon": "map",
    "summary": "An official site plan of your plot or building showing its boundaries, area and permitted use.",
    "overview": "The affection plan is the official plot plan issued for a property. It is needed for building permits, valuations, sales and many government applications. We request it and send you the certified copy.",
    "who": [
      "Owners of land, villas and buildings",
      "Developers and consultants"
    ],
    "docs": [
      "Copy of the title deed",
      "Owner's passport and Emirates ID"
    ],
    "fees": [
      {
        "label": "Dubai Land Department",
        "value": "As per the DLD fee schedule"
      },
      {
        "label": "Trustee office fee",
        "value": "Quoted on request"
      }
    ],
    "time": "Same day",
    "outputs": [
      "Affection plan (PDF)"
    ]
  },
  {
    "slug": "owner-information-update",
    "title": "Owner information update",
    "group": "trustee-services",
    "icon": "user",
    "summary": "Update the owner's passport, Emirates ID, contact details or name on the Land Department record.",
    "overview": "Keep your ownership record accurate after renewing a passport, receiving a new Emirates ID or changing your name. Outdated records can delay sales, mortgages and Golden Visa applications.",
    "who": [
      "Any registered property owner"
    ],
    "docs": [
      "Copy of the title deed",
      "New passport and Emirates ID",
      "Name change document, if applicable"
    ],
    "fees": [
      {
        "label": "Dubai Land Department",
        "value": "As per the DLD fee schedule"
      },
      {
        "label": "Trustee office fee",
        "value": "Quoted on request"
      }
    ],
    "time": "20 to 30 minutes",
    "outputs": [
      "Updated ownership record"
    ]
  },
  {
    "slug": "property-annexation",
    "title": "Property annexation",
    "group": "trustee-services",
    "icon": "merge",
    "summary": "Merge two adjoining units or plots into one registered property with a single title deed.",
    "overview": "Annexation joins neighbouring units or plots into one property on the register, for example two apartments combined into one home. We prepare the application and coordinate the developer and Land Department approvals.",
    "who": [
      "Owners of adjoining units or plots"
    ],
    "docs": [
      "Title deeds for each unit",
      "Owner's passport and Emirates ID",
      "Developer NOC",
      "Approved plans for the merged unit"
    ],
    "fees": [
      {
        "label": "Dubai Land Department",
        "value": "As per the DLD fee schedule"
      },
      {
        "label": "Trustee office fee",
        "value": "Quoted on request"
      }
    ],
    "time": "Varies by approvals",
    "outputs": [
      "Single title deed for the merged property"
    ]
  },
  {
    "slug": "property-valuation-dubai-municipality",
    "title": "Property valuation for Dubai Municipality",
    "group": "trustee-services",
    "icon": "scale",
    "summary": "A certified valuation of your property for Dubai Municipality and other government applications.",
    "overview": "An official valuation by a Land Department-approved valuer, accepted by Dubai Municipality and other authorities. We arrange the inspection and deliver the certificate.",
    "who": [
      "Property owners applying to Dubai Municipality",
      "Owners needing an official valuation for legal or court use"
    ],
    "docs": [
      "Copy of the title deed",
      "Owner's passport and Emirates ID",
      "Affection plan"
    ],
    "fees": [
      {
        "label": "Valuation fee",
        "value": "Quoted by property type and size"
      },
      {
        "label": "Trustee office fee",
        "value": "Quoted on request"
      }
    ],
    "time": "2 to 3 working days",
    "outputs": [
      "Valuation certificate"
    ]
  },
  {
    "slug": "to-whom-it-may-concern-letter",
    "title": "To Whom It May Concern letter",
    "group": "trustee-services",
    "icon": "mail",
    "summary": "An official Land Department letter confirming ownership details for banks, embassies or authorities.",
    "overview": "A formal letter confirming who owns a property and its registered details. It is often requested by banks, embassies, courts and visa authorities.",
    "who": [
      "Property owners",
      "Legal representatives of owners"
    ],
    "docs": [
      "Copy of the title deed",
      "Owner's passport and Emirates ID",
      "Purpose of the letter"
    ],
    "fees": [
      {
        "label": "Dubai Land Department",
        "value": "As per the DLD fee schedule"
      },
      {
        "label": "Trustee office fee",
        "value": "Quoted on request"
      }
    ],
    "time": "Same day",
    "outputs": [
      "Official letter (PDF)"
    ]
  },
  {
    "slug": "online-power-of-attorney",
    "title": "Online power of attorney",
    "group": "additional",
    "icon": "pen",
    "summary": "Appoint someone to act for you on a property transaction, notarised online without visiting court.",
    "overview": "Not in Dubai, or can't attend on the day? We draft a property power of attorney and arrange its notarisation through the Dubai Courts online notary, so your representative can sign for you.",
    "who": [
      "Owners and buyers living abroad",
      "Anyone unable to attend in person"
    ],
    "docs": [
      "Passport and Emirates ID of the person granting the POA",
      "Passport of the representative",
      "Title deed or property details"
    ],
    "fees": [
      {
        "label": "Dubai Courts notary",
        "value": "As per the court fee schedule"
      },
      {
        "label": "Drafting fee",
        "value": "Quoted on request"
      }
    ],
    "time": "1 to 2 working days",
    "outputs": [
      "Notarised power of attorney"
    ]
  },
  {
    "slug": "courts-declaration",
    "title": "Courts declaration",
    "group": "additional",
    "icon": "scale",
    "summary": "A notarised declaration through Dubai Courts, commonly needed when a seller is represented by POA.",
    "overview": "When a seller signs through a power of attorney, a court declaration confirms the sale and the representative's authority. We prepare and file it so the transfer can go ahead.",
    "who": [
      "Sellers represented by a power of attorney",
      "Parties needing a notarised statement"
    ],
    "docs": [
      "Passport and Emirates ID of the declarant",
      "Power of attorney, if applicable",
      "Title deed or sale agreement"
    ],
    "fees": [
      {
        "label": "Dubai Courts notary",
        "value": "As per the court fee schedule"
      },
      {
        "label": "Service fee",
        "value": "Quoted on request"
      }
    ],
    "time": "Same day to 1 working day",
    "outputs": [
      "Notarised declaration"
    ]
  },
  {
    "slug": "legal-translation",
    "title": "Legal translation",
    "group": "additional",
    "icon": "globe",
    "summary": "Certified Arabic and English translation of documents for the Land Department, courts and immigration.",
    "overview": "Certificates and contracts issued abroad usually need a certified legal translation before UAE authorities will accept them. We translate and certify them in-house.",
    "who": [
      "Anyone submitting foreign documents in Dubai"
    ],
    "docs": [
      "Clear copy of the document to translate"
    ],
    "fees": [
      {
        "label": "Translation fee",
        "value": "Per page, quoted on request"
      }
    ],
    "time": "1 to 2 working days",
    "outputs": [
      "Certified legal translation"
    ]
  },
  {
    "slug": "mou-preparation",
    "title": "MOU preparation",
    "group": "in-house",
    "icon": "file",
    "summary": "We draft the Form F memorandum of understanding between buyer and seller at no charge.",
    "overview": "Form F is the standard sale agreement in Dubai. When you complete your transfer with us, we prepare it, check it against the title deed and NOC, and have it ready to sign.",
    "who": [
      "Buyers and sellers transferring with us"
    ],
    "docs": [
      "Title deed copy",
      "Passports and Emirates IDs of both parties",
      "Agreed price and terms"
    ],
    "fees": [
      {
        "label": "Fee",
        "value": "Complimentary with your transfer"
      }
    ],
    "time": "Same day",
    "outputs": [
      "Ready-to-sign Form F"
    ]
  },
  {
    "slug": "pick-drop",
    "title": "Pick & drop",
    "group": "in-house",
    "icon": "car",
    "summary": "A chauffeured car to bring you to our office and back on transfer day.",
    "overview": "Complimentary pick-up and drop-off within Dubai for buyers and sellers completing a transaction at our office.",
    "who": [
      "Clients with a booked transfer appointment"
    ],
    "docs": [
      "Appointment confirmation"
    ],
    "fees": [
      {
        "label": "Fee",
        "value": "Complimentary with your transfer"
      }
    ],
    "time": "Booked with your appointment",
    "outputs": []
  },
  {
    "slug": "golden-visa-10-year",
    "title": "10-year Golden Visa",
    "group": "residency",
    "icon": "passport",
    "summary": "Renewable 10-year UAE residency for owners of Dubai property worth AED 2 million or more.",
    "overview": "The Golden Visa gives property investors ten years of renewable residency without a local sponsor. You can live, work and invest in the UAE, sponsor your family for the same period, and stay outside the country without losing your visa.",
    "who": [
      "Owners of ready property worth AED 2M or more",
      "Owners of off-plan property from approved developers",
      "Mortgaged owners, with a bank NOC",
      "Joint owners whose share meets the threshold"
    ],
    "docs": [
      "Title deed or Oqood certificate",
      "Bank NOC, for mortgaged property",
      "Passport valid for at least 6 months",
      "Photo meeting ICP specifications",
      "Previous Emirates ID, if any",
      "UAE health insurance"
    ],
    "fees": [
      {
        "label": "Government fees",
        "value": "Set by the immigration authority"
      },
      {
        "label": "Service fee",
        "value": "Quoted after your eligibility check"
      }
    ],
    "time": "2 to 4 weeks",
    "outputs": [
      "10-year residency visa",
      "Emirates ID"
    ]
  },
  {
    "slug": "retirement-visa-5-year",
    "title": "5-year retirement visa",
    "group": "residency",
    "icon": "sun",
    "summary": "Renewable 5-year residency for retirees aged 55 and above.",
    "overview": "Retire in Dubai on your own visa. You can qualify through property ownership, savings or a regular retirement income, and sponsor your spouse and children.",
    "who": [
      "Aged 55 or above",
      "Owning property worth AED 1M or more, or",
      "Holding savings of AED 1M or more, or",
      "Receiving a monthly income of AED 20,000 or more"
    ],
    "docs": [
      "Passport and photo",
      "Title deed, bank deposit certificate or pension statement",
      "UAE health insurance",
      "Previous Emirates ID, if any"
    ],
    "fees": [
      {
        "label": "Government fees",
        "value": "Set by the immigration authority"
      },
      {
        "label": "Service fee",
        "value": "Quoted after your eligibility check"
      }
    ],
    "time": "2 to 4 weeks",
    "outputs": [
      "5-year residency visa",
      "Emirates ID"
    ]
  },
  {
    "slug": "dependent-visa",
    "title": "Dependent visa",
    "group": "residency",
    "icon": "family",
    "summary": "Sponsor your spouse, children and parents on the same residency as yours.",
    "overview": "Golden Visa and retirement visa holders can sponsor close family for the same validity. We file dependants together with the main applicant, or add them later.",
    "who": [
      "Spouses",
      "Children, with no age limit for sons under Golden Visa rules",
      "Parents"
    ],
    "docs": [
      "Sponsor's visa and Emirates ID",
      "Passports and photos of each dependant",
      "Attested marriage certificate",
      "Attested birth certificates",
      "UAE health insurance for each dependant"
    ],
    "fees": [
      {
        "label": "Government fees",
        "value": "Per dependant, set by the immigration authority"
      },
      {
        "label": "Service fee",
        "value": "Quoted per family"
      }
    ],
    "time": "2 to 3 weeks",
    "outputs": [
      "Residency visa and Emirates ID for each dependant"
    ]
  },
  {
    "slug": "visit-visa",
    "title": "Visit visa",
    "group": "residency",
    "icon": "plane",
    "summary": "Short-stay visas for family and guests visiting you in the UAE.",
    "overview": "Bring family or friends to Dubai for a holiday or to attend your property transfer. We apply for single- or multiple-entry visit visas of 30, 60 or 90 days.",
    "who": [
      "Relatives and friends of UAE residents",
      "Overseas buyers attending a transaction"
    ],
    "docs": [
      "Passport copy valid for at least 6 months",
      "Photo",
      "Return ticket and accommodation details",
      "Host's visa and Emirates ID, if sponsored by family"
    ],
    "fees": [
      {
        "label": "Government fees",
        "value": "By duration and entry type"
      },
      {
        "label": "Service fee",
        "value": "Quoted on request"
      }
    ],
    "time": "2 to 5 working days",
    "outputs": [
      "Electronic visit visa"
    ]
  },
  {
    "slug": "medical-insurance",
    "title": "Medical insurance",
    "group": "visa-support",
    "icon": "heart",
    "summary": "UAE health insurance plans that meet residency requirements, issued for you and your family.",
    "overview": "Health insurance from a UAE insurer is required for every residency application. We compare plans and issue a policy that meets the visa requirement, from essential to comprehensive cover.",
    "who": [
      "Golden Visa and retirement visa applicants",
      "Dependants on any residency"
    ],
    "docs": [
      "Passport copy",
      "Visa or entry permit, if issued",
      "Date of birth and nationality"
    ],
    "fees": [
      {
        "label": "Premium",
        "value": "By plan, age and cover level"
      }
    ],
    "time": "Same day",
    "outputs": [
      "Insurance certificate"
    ]
  },
  {
    "slug": "update-personal-information",
    "title": "Update personal information",
    "group": "visa-support",
    "icon": "user",
    "summary": "Update your passport, name or other details on your residency and Emirates ID.",
    "overview": "Renewed your passport or changed your name? Your residency record and Emirates ID must be updated to match before your next trip or renewal.",
    "who": [
      "Residency visa holders"
    ],
    "docs": [
      "New passport",
      "Current Emirates ID",
      "Supporting document for name changes"
    ],
    "fees": [
      {
        "label": "Government fees",
        "value": "Set by the immigration authority"
      },
      {
        "label": "Service fee",
        "value": "Quoted on request"
      }
    ],
    "time": "3 to 5 working days",
    "outputs": [
      "Updated residency record",
      "Reissued Emirates ID, if required"
    ]
  },
  {
    "slug": "visa-cancellation",
    "title": "Visa cancellation",
    "group": "visa-support",
    "icon": "close",
    "summary": "Cancel a residency or dependent visa properly, for example when switching to a Golden Visa.",
    "overview": "An existing residency must usually be cancelled before a new one is issued. We file the cancellation and time it so you stay legally covered while switching.",
    "who": [
      "Residents switching to a Golden Visa",
      "Sponsors cancelling a dependant's visa",
      "Residents leaving the UAE"
    ],
    "docs": [
      "Passport",
      "Emirates ID",
      "Sponsor's consent, for dependants"
    ],
    "fees": [
      {
        "label": "Government fees",
        "value": "Set by the immigration authority"
      },
      {
        "label": "Service fee",
        "value": "Quoted on request"
      }
    ],
    "time": "1 to 3 working days",
    "outputs": [
      "Cancellation confirmation"
    ]
  },
  {
    "slug": "property-valuation-golden-visa",
    "title": "Property valuation for Golden Visa & gifting",
    "group": "visa-support",
    "icon": "scale",
    "summary": "The official valuation certificate that proves your property meets the Golden Visa threshold.",
    "overview": "If your title deed shows a price below AED 2 million but the property is now worth more, an official valuation can qualify you. The same certificate is needed for gift transfers.",
    "who": [
      "Owners whose deed value is below today's market value",
      "Owners gifting property to family"
    ],
    "docs": [
      "Copy of the title deed",
      "Owner's passport and Emirates ID",
      "Access to the property for inspection"
    ],
    "fees": [
      {
        "label": "Valuation fee",
        "value": "Quoted by property type and size"
      }
    ],
    "time": "2 to 3 working days",
    "outputs": [
      "Valuation certificate"
    ]
  },
  {
    "slug": "interior-design",
    "title": "Interior design",
    "group": "visa-support",
    "icon": "sofa",
    "summary": "Furnish and style your new home or rental property, ready for you or your tenants.",
    "overview": "Bought a new home or an investment unit? Our design partners handle furnishing, styling and handover, so the property is ready to live in or to let when you collect the keys.",
    "who": [
      "New owners moving in",
      "Investors preparing a unit for rent"
    ],
    "docs": [
      "Floor plan or unit details",
      "Budget and style preferences"
    ],
    "fees": [
      {
        "label": "Design fee",
        "value": "Quoted after a consultation"
      }
    ],
    "time": "By project",
    "outputs": [
      "Design proposal",
      "Furnished handover"
    ]
  }
];

export const groupOf = (s: Service) => GROUPS.find((g) => g.key === s.group)!;
export const divisionOf = (s: Service): Division => groupOf(s).division;
export const bySlug = (slug: string) => SERVICES.find((s) => s.slug === slug);
export const servicesIn = (groupKey: string) => SERVICES.filter((s) => s.group === groupKey);
