export const COMPANY = {
  name: "Stacklink",
  tagline: "22+ Years of Trusted IT Hardware & Networking Excellence",
  phone: "+971 56 339 0030",
  whatsapp: "971547832139",
  whatsappDisplay: "+971 54 783 2139",
  email: "contact@stacklink.net",
  address: "Business Bay, Dubai, United Arab Emirates",
  social: {
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
  },
};

export const SERVICES = [
  { slug: "it-services", title: "IT Services", icon: "Cog", desc: "Managed IT, consultancy and digital transformation services for enterprises.", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80" },
  { slug: "it-security", title: "IT Security Solutions", icon: "ShieldCheck", desc: "Enterprise-grade firewalls, endpoint protection and SOC services.", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&q=80" },
  { slug: "wireless", title: "Wireless Solutions", icon: "Wifi", desc: "High-density indoor & outdoor WiFi 6/6E from leading vendors.", img: "https://images.unsplash.com/photo-1606765962248-7ff407b51667?w=900&q=80" },
  { slug: "networking", title: "Networking Solutions", icon: "Network", desc: "Switching, routing and SD-WAN built for scale and uptime.", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=900&q=80" },
  { slug: "ip-telephony", title: "IP Telephony Solutions", icon: "PhoneCall", desc: "VoIP PBX, IP phones and unified communications.", img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&q=80" },
  { slug: "infrastructure", title: "IT Infrastructure", icon: "Server", desc: "Servers, storage, structured cabling and data center fit-out.", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80" },
  { slug: "cctv", title: "CCTV Installation", icon: "Cctv", desc: "IP camera supply, installation and centralized monitoring.", img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=900&q=80" },
  { slug: "support", title: "Technical Support", icon: "Headphones", desc: "AMC, SLA-backed support and on-site engineers across UAE.", img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&q=80" },
  { slug: "firewall", title: "Firewall Solutions", icon: "ShieldCheck", desc: "Next-gen firewall design, deployment and managed services.", img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=900&q=80" },
  { slug: "cabling", title: "Structured Cabling", icon: "Network", desc: "Cat6/6A, fiber backbone and certified data cabling installations.", img: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=900&q=80" },
  { slug: "cloud", title: "Cloud Solutions", icon: "Layers", desc: "Microsoft 365, Azure, AWS migration and hybrid cloud architecture.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80" },
];

// 9 main categories (e-commerce style) with optional subcategories
export interface Subcategory { slug: string; name: string; }
export interface Category {
  slug: string;
  name: string;
  icon: string;
  desc: string;
  img: string;
  subs?: Subcategory[];
}

export const CATEGORIES: Category[] = [
  { slug: "network-switches", name: "Network Switches", icon: "Network",
    desc: "Managed L2/L3 switches, PoE+ and core switching for any scale.",
    img: "/src/assets/product-switch.jpg" },
  { slug: "telephony", name: "Telephony", icon: "PhoneCall",
    desc: "IP PBX, VoIP gateways, IP phones and unified communications.",
    img: "/src/assets/product-ipphone.jpg" },
  { slug: "wireless", name: "Wireless", icon: "Wifi",
    desc: "WiFi 6/6E access points, controllers and outdoor wireless.",
    img: "https://i.postimg.cc/gcRCtvjQ/wireless-network-in-uae.jpg" },
  { slug: "security-firewall", name: "Security & Firewall", icon: "ShieldCheck",
    desc: "Next-gen firewalls, UTM appliances and endpoint security.",
    img: "https://i.postimg.cc/kG6XLDVS/firewall-and-Security-Products-in-UAE.jpg" },
  { slug: "server-storage", name: "Server & Storage", icon: "Server",
    desc: "Rack, tower and blade servers plus enterprise storage.",
    img: "https://i.postimg.cc/c47rWgkG/server-and-stoage-products-in-uae.jpg",
    subs: [
      { slug: "rack-servers", name: "Rack Servers" },
      { slug: "tower-servers", name: "Tower Servers" },
      { slug: "blade-servers", name: "Blade Servers" },
      { slug: "server-processors", name: "Server Processors" },
      { slug: "server-hard-drives", name: "Server Hard Drives" },
      { slug: "server-memories", name: "Server Memories" },
      { slug: "server-network-controllers", name: "Server Network Controllers" },
      { slug: "server-storage-controllers", name: "Server Storage Controllers" },
      { slug: "server-licenses", name: "Server Licenses" },
      { slug: "server-network-cards", name: "Server Network Cards" },
      { slug: "server-power-supplies", name: "Server Power Supplies" },
      { slug: "server-accessories", name: "Server Accessories" },
    ],
  },
  { slug: "cctv-surveillance", name: "CCTV & Surveillance", icon: "Cctv",
    desc: "IP cameras, NVRs, PTZ, thermal and AI surveillance.",
    img: "/src/assets/product-cctv.jpg" },
  { slug: "cabinets-rack", name: "Cabinets & Rack", icon: "Server",
    desc: "Server racks, wall-mount cabinets, PDUs and accessories.",
    img: "https://i.postimg.cc/JnRpTBFR/cabins-and-racks.jpg" },
  { slug: "softwares", name: "Softwares", icon: "Cog",
    desc: "Microsoft, VMware, antivirus and enterprise software licenses.",
    img: "https://i.postimg.cc/Hk4P1gyg/softwares.jpg" },
  { slug: "access-control", name: "Access Control", icon: "Lock",
    desc: "Biometric, RFID readers, door controllers and visitor systems.",
    img: "https://i.postimg.cc/kXqpjzkX/access-control-products-in-UAE.jpg" },
];

// Legacy alias for older pages
export const PRODUCTS = CATEGORIES.slice(0, 8).map((c) => ({
  slug: c.slug, name: c.name, icon: c.icon, desc: c.desc, img: c.img,
}));

// Real brand logos via Clearbit logo API (uses their domain)
export const BRANDS: { name: string; domain: string }[] = [
  { name: "Cisco", domain: "cisco.com" },
  { name: "Fortinet", domain: "fortinet.com" },
  { name: "Aruba", domain: "arubanetworks.com" },
  { name: "Ubiquiti", domain: "ui.com" },
  { name: "TP-Link", domain: "tp-link.com" },
  { name: "IBM", domain: "ibm.com" },
  { name: "Avaya", domain: "avaya.com" },
  { name: "D-Link", domain: "dlink.com" },
  { name: "ASUS", domain: "asus.com" },
  { name: "Dell", domain: "dell.com" },
  { name: "HPE", domain: "hpe.com" },
  { name: "Belkin", domain: "belkin.com" },
  { name: "Grandstream", domain: "grandstream.com" },
  { name: "Linksys", domain: "linksys.com" },
  { name: "Allied Telesis", domain: "alliedtelesis.com" },
  { name: "Cudy", domain: "cudy.com" },
  { name: "SonicWall", domain: "sonicwall.com" },
  { name: "MikroTik", domain: "mikrotik.com" },
  { name: "Yeastar", domain: "yeastar.com" },
  { name: "Honeywell", domain: "honeywell.com" },
  { name: "Logitech", domain: "logitech.com" },
  { name: "Tenda", domain: "tendacn.com" },
  { name: "Fanvil", domain: "fanvil.com" },
  { name: "Yealink", domain: "yealink.com" },
];

export const brandLogo = (domain: string) => `https://logo.clearbit.com/${domain}`;
export const brandSlug = (name: string) => name.toLowerCase().replace(/\s+/g, "-");
export const brandByName = (name: string) => BRANDS.find((b) => b.name === name);

export const STATS = [
  { value: 22, suffix: "+", label: "Years of Experience" },
  { value: 1000, suffix: "+", label: "Enterprise Clients" },
  { value: 5000, suffix: "+", label: "Products Delivered" },
  { value: 24, suffix: "/7", label: "Technical Support" },
];

export const OFFICES = [
  { city: "Dubai", country: "UAE", role: "Head Office", address: "Business Bay, Dubai, UAE" },
  { city: "Abu Dhabi", country: "UAE", role: "Branch", address: "Al Maryah Island, Abu Dhabi, UAE" },
  { city: "Deira", country: "UAE", role: "Branch", address: "Al Rigga, Deira, Dubai, UAE" },
  { city: "London", country: "UK", role: "International", address: "Canary Wharf, London, United Kingdom" },
  { city: "Mumbai", country: "India", role: "International", address: "Bandra Kurla Complex, Mumbai, India" },
];

export const TESTIMONIALS = [
  { name: "Ahmed Al Mansoori", role: "IT Director", company: "Dubai Holdings", text: "Stacklink delivered our entire HQ network refresh on time and within budget. Their Cisco and Fortinet expertise is best-in-class." },
  { name: "Priya Sharma", role: "Head of Infrastructure", company: "Emirates Hospitality Group", text: "We've worked with Stacklink for over 8 years. They are our trusted partner for everything from CCTV to data center." },
  { name: "Mohammed Khan", role: "CTO", company: "Gulf Logistics LLC", text: "Premium support, genuine products, and engineers who actually know enterprise networking. Highly recommended." },
  { name: "Sarah Williams", role: "Operations Manager", company: "Marina Towers", text: "Their structured cabling and wireless team transformed our property's connectivity. Outstanding service." },
];

export const CERTIFICATIONS = [
  "Cisco Premier Partner",
  "Fortinet Authorized Reseller",
  "Aruba Silver Partner",
  "Microsoft Gold Partner",
  "Dell Technologies Partner",
  "HPE Business Partner",
];
