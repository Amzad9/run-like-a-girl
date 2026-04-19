export type SiteNavItem = {
  label: string;
  href: string;
};

export const siteNav: SiteNavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Event Details", href: "/event-details" },
  { label: "Our Beneficiary", href: "/our-beneficiary" },
  { label: "Swag", href: "/swag" },
  { label: "Packet Pickup", href: "/packet-pickup" },
  { label: "Questions", href: "/questions" },
];

export const siteContact = {
  emailShowroom: "jeff@ultrafitusa.com",
  emailOperations: "jeff@ultrafitusa.com",
  phone: "614-332-5205",
  phoneHref: "tel:+16143325205",
  addressLines: [
    "Westerville Athletic Complex,",
    "325 N. Cleveland Ave,",
    "Westerville, OH 43081",
  ],
  directionsHref:
    "https://www.google.com/maps/search/?api=1&query=325+N.+Cleveland+Ave,+Westerville,+OH+43081",
  businessHours: [
    "Packet pickup - Saturday, Sept 20 | 10:00am to 1:00pm",
    "Packet pickup - Saturday, Sept 27 | 10:00am to 1:00pm",
    "Race day - Sunday, Oct 04 | Start 9:00am",
  ],
  socials: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/runlikeagirlOH",
      key: "facebook",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/runlikeagirlOH",
      key: "instagram",
    },
    {
      label: "X (Twitter)",
      href: "https://x.com/runlikeagirlOH",
      key: "x",
    },
  ],
} as const;
