import { CATEGORIES, BRANDS } from "./site-data";

export interface Product {
  slug: string;
  title: string;
  brand: string;
  brandDomain: string;
  category: string;        // category slug
  categoryName: string;
  sub?: string;            // subcategory slug
  subName?: string;
  shortSpec: string;
  specs: { label: string; value: string }[];
  img: string;             // category image used as fallback
  description: string;
}

const slug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// Brand → categories it most plausibly fits
const BRAND_FOCUS: Record<string, string[]> = {
  Cisco: ["network-switches", "wireless", "security-firewall", "telephony"],
  Fortinet: ["security-firewall"],
  Aruba: ["network-switches", "wireless"],
  Ubiquiti: ["wireless", "network-switches", "cctv-surveillance"],
  "TP-Link": ["wireless", "network-switches", "cctv-surveillance"],
  IBM: ["server-storage", "softwares"],
  Avaya: ["telephony"],
  "D-Link": ["network-switches", "wireless", "cctv-surveillance"],
  ASUS: ["wireless", "network-switches"],
  Dell: ["server-storage", "softwares"],
  HPE: ["server-storage", "network-switches"],
  Belkin: ["cabinets-rack", "network-switches"],
  Grandstream: ["telephony"],
  Linksys: ["wireless", "network-switches"],
  "Allied Telesis": ["network-switches"],
  Cudy: ["wireless", "network-switches"],
  SonicWall: ["security-firewall"],
  MikroTik: ["network-switches", "wireless"],
  Yeastar: ["telephony"],
  Honeywell: ["cctv-surveillance", "access-control"],
  Logitech: ["telephony"],
  Tenda: ["wireless", "network-switches"],
  Fanvil: ["telephony"],
  Yealink: ["telephony"],
};

// Per-category templates: model name + spec
const TEMPLATES: Record<string, { lines: string[]; specs: (m: string) => { label: string; value: string }[] }> = {
  "network-switches": {
    lines: ["Catalyst 24-Port Gigabit Switch", "48-Port PoE+ Managed Switch", "10G SFP+ Aggregation Switch", "Smart 16-Port PoE Switch", "Stackable 48-Port L3 Switch", "Industrial 8-Port Switch"],
    specs: (m) => [
      { label: "Ports", value: m.includes("48") ? "48 x 1GbE" : m.includes("16") ? "16 x 1GbE" : m.includes("8") ? "8 x 1GbE" : "24 x 1GbE" },
      { label: "PoE", value: m.includes("PoE") ? "Yes (PoE+ 30W)" : "No" },
      { label: "Layer", value: m.includes("L3") ? "Layer 3" : "Layer 2/L3 Lite" },
      { label: "Uplinks", value: "4 x SFP+ 10G" },
      { label: "Warranty", value: "Limited Lifetime" },
    ],
  },
  telephony: {
    lines: ["Enterprise IP Phone", "Executive Color IP Phone", "DECT Wireless Handset", "VoIP PBX Appliance", "SIP Conference Phone", "Headset Pro"],
    specs: (m) => [
      { label: "Type", value: m.includes("PBX") ? "IP PBX" : m.includes("Conference") ? "Conference" : "Desk IP Phone" },
      { label: "Lines", value: m.includes("PBX") ? "50 SIP Trunks" : "Up to 6 SIP" },
      { label: "Display", value: "Color LCD" },
      { label: "PoE", value: "802.3af Supported" },
      { label: "Codec", value: "Opus, G.722, G.711" },
    ],
  },
  wireless: {
    lines: ["WiFi 6 Access Point", "WiFi 6E Tri-Band AP", "Outdoor Mesh AP", "Cloud-Managed AP", "High-Density Stadium AP", "Long-Range Bridge"],
    specs: (m) => [
      { label: "Standard", value: m.includes("6E") ? "WiFi 6E (802.11ax)" : "WiFi 6 (802.11ax)" },
      { label: "Bands", value: m.includes("Tri") || m.includes("6E") ? "Tri-Band" : "Dual-Band" },
      { label: "Throughput", value: "Up to 5.4 Gbps" },
      { label: "Mounting", value: m.includes("Outdoor") ? "Outdoor IP67" : "Ceiling / Wall" },
      { label: "Management", value: "Cloud + On-Prem" },
    ],
  },
  "security-firewall": {
    lines: ["Next-Gen Firewall 100F", "UTM Appliance 60E", "Enterprise Firewall 200F", "SD-WAN Edge Gateway", "Cloud-Managed Firewall", "SOHO Security Appliance"],
    specs: (m) => [
      { label: "Throughput", value: m.includes("200") ? "20 Gbps" : m.includes("100") ? "10 Gbps" : "5 Gbps" },
      { label: "Sessions", value: "1.5M concurrent" },
      { label: "VPN", value: "IPsec + SSL VPN" },
      { label: "Features", value: "IPS, AV, App Control, Web Filter" },
      { label: "Form Factor", value: "1U Rackmount" },
    ],
  },
  "server-storage": {
    lines: ["Rack Server R740 2U", "Tower Server T440", "Blade Server M640", "All-Flash Storage Array", "NAS Storage 12-Bay", "Hyper-Converged Node"],
    specs: (m) => [
      { label: "CPU", value: "Intel Xeon Scalable (up to 28 cores)" },
      { label: "RAM", value: "Up to 1.5 TB DDR4 ECC" },
      { label: "Storage", value: m.includes("Storage") ? "Up to 240 TB raw" : "8 x 2.5\" SAS/SSD" },
      { label: "Form Factor", value: m.includes("Tower") ? "5U Tower" : m.includes("Blade") ? "Blade" : "2U Rack" },
      { label: "Warranty", value: "3-Year ProSupport" },
    ],
  },
  "cctv-surveillance": {
    lines: ["4K IP Bullet Camera", "8MP Dome Camera", "PTZ Speed Dome 25x", "32-Channel NVR", "Thermal Imaging Camera", "AI Face Recognition Camera"],
    specs: (m) => [
      { label: "Resolution", value: m.includes("4K") ? "4K (8MP)" : m.includes("8MP") ? "8MP" : "4MP" },
      { label: "Type", value: m.includes("PTZ") ? "PTZ" : m.includes("NVR") ? "NVR Recorder" : m.includes("Thermal") ? "Thermal" : "Fixed IP" },
      { label: "IR Range", value: "Up to 50m" },
      { label: "Protection", value: "IP67 / IK10" },
      { label: "Smart", value: "AI Detection, ONVIF" },
    ],
  },
  "cabinets-rack": {
    lines: ["42U Server Rack 800x1000", "27U Wall-Mount Cabinet", "12U Open Frame Rack", "Smart PDU 24-Outlet", "Cable Manager 2U", "Floor-Standing 32U Rack"],
    specs: (m) => [
      { label: "Height", value: m.includes("42U") ? "42U" : m.includes("32U") ? "32U" : m.includes("27U") ? "27U" : "12U" },
      { label: "Type", value: m.includes("Wall") ? "Wall Mount" : m.includes("Open") ? "Open Frame" : "Floor Standing" },
      { label: "Load", value: "1500 kg static" },
      { label: "Material", value: "Cold-rolled steel" },
      { label: "Doors", value: "Glass front, mesh rear" },
    ],
  },
  softwares: {
    lines: ["Microsoft 365 Business", "Windows Server 2022 Std", "VMware vSphere Essentials", "Antivirus Enterprise (per seat)", "Backup & Recovery Suite", "Microsoft Azure Subscription"],
    specs: (m) => [
      { label: "Type", value: "Software License" },
      { label: "Subscription", value: m.includes("Microsoft") || m.includes("Azure") ? "Annual" : "Perpetual" },
      { label: "Users", value: "Per-user / Per-device" },
      { label: "Support", value: "24/7 Vendor + Stacklink" },
      { label: "Delivery", value: "Digital + Activation" },
    ],
  },
  "access-control": {
    lines: ["Biometric Fingerprint Reader", "RFID Card Door Controller", "Face Recognition Terminal", "4-Door Access Controller", "Smart Door Lock", "Visitor Management System"],
    specs: (m) => [
      { label: "Identification", value: m.includes("Face") ? "Face + Card" : m.includes("Biometric") ? "Fingerprint + Card" : "RFID Card / PIN" },
      { label: "Capacity", value: "10,000 users" },
      { label: "Connectivity", value: "TCP/IP, Wiegand" },
      { label: "Power", value: "12V DC / PoE" },
      { label: "Compliance", value: "SIRA Approved" },
    ],
  },
};

// Subcategory-specific templates for Server & Storage
const SUB_TEMPLATES: Record<string, string[]> = {
  "rack-servers": ["PowerEdge R750 Rack Server", "ProLiant DL380 Gen11", "System x3650 M5", "Rack Server R740xd 2U"],
  "tower-servers": ["PowerEdge T550 Tower", "ProLiant ML350 Tower", "System x3500 Tower"],
  "blade-servers": ["PowerEdge MX740c Blade", "ProLiant BL460c Gen10", "BladeCenter HS22"],
  "server-processors": ["Intel Xeon Gold 6338", "Intel Xeon Silver 4314", "AMD EPYC 7543 32-Core"],
  "server-hard-drives": ["1.2TB 10K SAS HDD", "960GB SATA SSD", "3.84TB NVMe Enterprise SSD", "8TB SATA Enterprise HDD"],
  "server-memories": ["32GB DDR4 ECC RDIMM", "64GB DDR4 LRDIMM", "16GB DDR4 ECC", "128GB DDR4 3DS RDIMM"],
  "server-network-controllers": ["Broadcom 57414 25GbE Adapter", "Intel X710 10GbE Quad Port", "Mellanox ConnectX-6 100GbE"],
  "server-storage-controllers": ["PERC H755 RAID Controller", "Smart Array P408i-a", "MegaRAID 9560-16i"],
  "server-licenses": ["Windows Server 2022 Datacenter", "VMware vSphere Standard 1-CPU", "Red Hat Enterprise Linux"],
  "server-network-cards": ["Dual Port 10GbE NIC", "Quad Port 1GbE NIC", "Single Port 25GbE SFP28 NIC"],
  "server-power-supplies": ["750W Platinum PSU", "1100W Hot-Plug PSU", "1600W Titanium PSU"],
  "server-accessories": ["Sliding Rail Kit 2U", "Front Bezel with Lock", "Cable Management Arm", "Bezel Filler Panel"],
};

const SUB_SPECS: Record<string, { label: string; value: string }[]> = {
  "rack-servers": [{label:"Form Factor",value:"2U Rack"},{label:"CPU",value:"2x Intel Xeon Scalable"},{label:"RAM",value:"Up to 1.5 TB DDR4"},{label:"Drives",value:"8x 2.5\" SAS/SSD"},{label:"Warranty",value:"3-Year ProSupport"}],
  "tower-servers": [{label:"Form Factor",value:"5U Tower"},{label:"CPU",value:"Up to 28 cores"},{label:"RAM",value:"Up to 1 TB"},{label:"Drives",value:"8x 3.5\" SATA/SAS"},{label:"PSU",value:"Redundant 750W"}],
  "blade-servers": [{label:"Form Factor",value:"Blade Module"},{label:"CPU",value:"2x Xeon Scalable"},{label:"RAM",value:"24 DIMM slots"},{label:"Storage",value:"2x 2.5\" Drives"},{label:"Network",value:"25/50/100 GbE"}],
  "server-processors": [{label:"Cores",value:"24-32 cores"},{label:"Cache",value:"48 MB L3"},{label:"TDP",value:"185-240W"},{label:"Socket",value:"LGA 4189"},{label:"Generation",value:"3rd Gen Xeon / EPYC Milan"}],
  "server-hard-drives": [{label:"Capacity",value:"960GB - 8TB"},{label:"Interface",value:"SAS / SATA / NVMe"},{label:"Endurance",value:"Enterprise grade"},{label:"Form",value:"2.5\" / 3.5\""},{label:"Warranty",value:"5 Year"}],
  "server-memories": [{label:"Type",value:"DDR4 ECC RDIMM/LRDIMM"},{label:"Speed",value:"3200 MT/s"},{label:"Capacity",value:"16-128 GB"},{label:"Compatibility",value:"Dell/HPE/IBM tested"},{label:"Warranty",value:"Lifetime"}],
  "server-network-controllers": [{label:"Speed",value:"10/25/100 GbE"},{label:"Ports",value:"Single/Dual/Quad"},{label:"Interface",value:"PCIe 4.0 x8"},{label:"Offload",value:"RDMA, RoCE"},{label:"Standards",value:"IEEE 802.3"}],
  "server-storage-controllers": [{label:"RAID",value:"0/1/5/6/10/50/60"},{label:"Cache",value:"8 GB DDR4 with BBU"},{label:"Ports",value:"16 internal SAS/SATA"},{label:"Speed",value:"12 Gbps SAS"},{label:"Interface",value:"PCIe 4.0"}],
  "server-licenses": [{label:"Type",value:"Perpetual / Subscription"},{label:"Edition",value:"Standard / Datacenter"},{label:"Activation",value:"Digital Key"},{label:"Cores",value:"16-Core / 1-CPU"},{label:"Support",value:"Vendor + Stacklink"}],
  "server-network-cards": [{label:"Speed",value:"1/10/25 GbE"},{label:"Ports",value:"1, 2 or 4"},{label:"Interface",value:"PCIe 3.0/4.0"},{label:"Connector",value:"RJ45 / SFP+ / SFP28"},{label:"Form",value:"Low Profile / Full Height"}],
  "server-power-supplies": [{label:"Wattage",value:"750W - 1600W"},{label:"Efficiency",value:"80+ Platinum / Titanium"},{label:"Redundancy",value:"Hot-Plug Redundant"},{label:"Input",value:"100-240 VAC"},{label:"Form",value:"Server PSU"}],
  "server-accessories": [{label:"Type",value:"Rails / Bezels / Cable Mgmt"},{label:"Compatibility",value:"Dell / HPE / IBM"},{label:"Material",value:"Steel / Plastic"},{label:"Mounting",value:"Tool-less"},{label:"Use",value:"Rack Server Accessory"}],
};

function pickImage(catSlug: string): string {
  const map: Record<string, string> = {
    "network-switches": "/src/assets/product-switch.jpg",
    "telephony": "/src/assets/product-ipphone.jpg",
    "wireless": "https://i.postimg.cc/gcRCtvjQ/wireless-network-in-uae.jpg",
    "security-firewall": "https://i.postimg.cc/kG6XLDVS/firewall-and-Security-Products-in-UAE.jpg",
    "server-storage": "https://i.postimg.cc/c47rWgkG/server-and-stoage-products-in-uae.jpg",
    "cctv-surveillance": "/src/assets/product-cctv.jpg",
    "cabinets-rack": "https://i.postimg.cc/JnRpTBFR/cabins-and-racks.jpg",
    "softwares": "https://i.postimg.cc/Hk4P1gyg/softwares.jpg",
    "access-control": "https://i.postimg.cc/kXqpjzkX/access-control-products-in-UAE.jpg",
  };
  return map[catSlug] ?? "/src/assets/product-server.jpg";
}

function makeProduct(brandName: string, catSlug: string, line: string, sub?: { slug: string; name: string }): Product {
  const brand = BRANDS.find((b) => b.name === brandName)!;
  const cat = CATEGORIES.find((c) => c.slug === catSlug)!;
  const tpl = TEMPLATES[catSlug];
  const title = `${brandName} ${line}`;
  const specs = sub && SUB_SPECS[sub.slug] ? SUB_SPECS[sub.slug] : tpl.specs(line);
  const shortSpec = specs.slice(0, 2).map((s) => `${s.label}: ${s.value}`).join(" • ");
  return {
    slug: slug(`${brandName}-${line}`),
    title,
    brand: brandName,
    brandDomain: brand.domain,
    category: catSlug,
    categoryName: cat.name,
    sub: sub?.slug,
    subName: sub?.name,
    shortSpec,
    specs,
    img: pickImage(catSlug),
    description: `${title} — original, warranty-backed enterprise hardware supplied and supported across the UAE by Stacklink. ${cat.desc}`,
  };
}

// Generate the catalog
const products: Product[] = [];

for (const [brandName, focusCats] of Object.entries(BRAND_FOCUS)) {
  for (const cs of focusCats) {
    const tpl = TEMPLATES[cs];
    if (!tpl) continue;
    if (cs === "server-storage") {
      const cat = CATEGORIES.find((c) => c.slug === cs)!;
      for (const sub of cat.subs ?? []) {
        const lines = SUB_TEMPLATES[sub.slug] ?? [`${sub.name} Module`];
        for (const line of lines.slice(0, 2)) {
          products.push(makeProduct(brandName === "Dell" || brandName === "HPE" || brandName === "IBM" ? brandName : "Dell", cs, line, sub));
        }
      }
    } else {
      for (const line of tpl.lines.slice(0, 3)) {
        products.push(makeProduct(brandName, cs, line));
      }
    }
  }
}

// Dedupe by slug
const seen = new Set<string>();
export const PRODUCT_CATALOG: Product[] = products.filter((p) => {
  if (seen.has(p.slug)) return false;
  seen.add(p.slug);
  return true;
});

export function getProductsByCategory(catSlug: string, subSlug?: string): Product[] {
  return PRODUCT_CATALOG.filter((p) => p.category === catSlug && (!subSlug || p.sub === subSlug));
}
export function getProductsByBrand(brandName: string): Product[] {
  return PRODUCT_CATALOG.filter((p) => p.brand === brandName);
}
export function getProduct(slug: string): Product | undefined {
  return PRODUCT_CATALOG.find((p) => p.slug === slug);
}
export function getRelated(p: Product, limit = 8): Product[] {
  return PRODUCT_CATALOG.filter((x) => x.slug !== p.slug && (x.category === p.category || x.brand === p.brand)).slice(0, limit);
}
export function searchProducts(q: string): Product[] {
  const t = q.trim().toLowerCase();
  if (!t) return [];
  return PRODUCT_CATALOG.filter((p) =>
    p.title.toLowerCase().includes(t) ||
    p.brand.toLowerCase().includes(t) ||
    p.categoryName.toLowerCase().includes(t) ||
    (p.subName ?? "").toLowerCase().includes(t),
  ).slice(0, 50);
}
export function featuredProducts(limit = 12): Product[] {
  // pick a varied selection across categories
  const byCat: Record<string, Product[]> = {};
  for (const p of PRODUCT_CATALOG) (byCat[p.category] ??= []).push(p);
  const out: Product[] = [];
  const cats = Object.keys(byCat);
  let i = 0;
  while (out.length < limit && i < 200) {
    const cat = cats[i % cats.length];
    const arr = byCat[cat];
    const idx = Math.floor(i / cats.length);
    if (arr[idx]) out.push(arr[idx]);
    i++;
  }
  return out;
}
