export const COMPANY = {
  name: "Stacklink",
  tagline: "22+ Years of Trusted IT Hardware & Networking Excellence",
  phone: "+971 50 000 0000",
  whatsapp: "971500000000",
  email: "info@stacklink.ae",
  address: "Dubai, United Arab Emirates",
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
];

export const PRODUCTS = [
  { slug: "firewalls", name: "Firewalls", icon: "Shield", desc: "Next-gen firewalls from Fortinet, SonicWall, Cisco.", img: "/src/assets/product-firewall.jpg" },
  { slug: "access-points", name: "Access Points", icon: "Wifi", desc: "WiFi 6/6E APs from Aruba, Ubiquiti, TP-Link.", img: "/src/assets/product-ap.jpg" },
  { slug: "routers", name: "Routers", icon: "Router", desc: "Enterprise routers and SD-WAN appliances.", img: "/src/assets/product-router.jpg" },
  { slug: "switches", name: "Switches", icon: "Network", desc: "Managed L2/L3 switches with PoE+.", img: "/src/assets/product-switch.jpg" },
  { slug: "ip-phones", name: "IP Phones", icon: "Phone", desc: "Grandstream, Yealink, Fanvil, Avaya handsets.", img: "/src/assets/product-ipphone.jpg" },
  { slug: "cctv", name: "CCTV Cameras", icon: "Cctv", desc: "IP, PTZ, thermal and AI surveillance cameras.", img: "/src/assets/product-cctv.jpg" },
  { slug: "servers", name: "Servers", icon: "Server", desc: "Dell, HPE, IBM rack and tower servers.", img: "/src/assets/product-server.jpg" },
  { slug: "storage", name: "Storage", icon: "HardDrive", desc: "NAS, SAN and hyper-converged storage.", img: "/src/assets/product-storage.jpg" },
];

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
  { name: "HPE", domain: "hpe.com" },
  { name: "Yealink", domain: "yealink.com" },
];

export const brandLogo = (domain: string) => `https://logo.clearbit.com/${domain}`;
export const brandSlug = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

export const STATS = [
  { value: 22, suffix: "+", label: "Years of Experience" },
  { value: 1000, suffix: "+", label: "Enterprise Clients" },
  { value: 5000, suffix: "+", label: "Products Delivered" },
  { value: 24, suffix: "/7", label: "Technical Support" },
];

export const OFFICES = [
  { city: "Dubai", country: "UAE", role: "Head Office", address: "Business Bay, Dubai" },
  { city: "Abu Dhabi", country: "UAE", role: "Branch", address: "Al Maryah Island, Abu Dhabi" },
  { city: "Deira", country: "UAE", role: "Branch", address: "Al Rigga, Deira" },
  { city: "London", country: "UK", role: "International", address: "Canary Wharf, London" },
  { city: "Mumbai", country: "India", role: "International", address: "Bandra Kurla Complex, Mumbai" },
];
