export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
  readTime: string;
  content: { heading?: string; body: string }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "network-security-solutions",
    title: "Network Security Solutions: A 2025 Guide for UAE Enterprises",
    excerpt:
      "Discover the layered security architecture every UAE business needs to defend against modern cyber threats, ransomware, and insider attacks.",
    date: "2025-09-12",
    author: "Stacklink Editorial",
    image: "https://i.postimg.cc/kG6XLDVS/firewall-and-Security-Products-in-UAE.jpg",
    category: "Security",
    readTime: "7 min read",
    content: [
      { body: "Cybersecurity is no longer a checkbox — for UAE enterprises operating across banking, hospitality, healthcare and government, it is the foundation of business continuity. In this guide we unpack the practical building blocks of a modern network security stack." },
      { heading: "Why traditional perimeter security fails", body: "Hybrid work, cloud-first applications and IoT have dissolved the classic network perimeter. Threat actors increasingly bypass legacy firewalls by exploiting identity, endpoints and unmanaged devices." },
      { heading: "The layered defense model", body: "A robust posture combines next-generation firewalls (Fortinet, Palo Alto, SonicWall), secure SD-WAN, EDR/XDR endpoint protection, Zero Trust Network Access (ZTNA) and centralized SIEM monitoring. Each layer compensates when another is breached." },
      { heading: "Compliance in the UAE", body: "Solutions must align with UAE TRA, NESA, ISR (SIRA) and ADHICS frameworks. Stacklink's engineers design architectures that meet these mandates while keeping operations frictionless." },
      { heading: "Getting started", body: "Begin with a security posture assessment, identify the crown-jewel assets, and roll out segmented zones with policy-based access. Our team can deliver a free 30-minute consultation tailored to your environment." },
    ],
  },
  {
    slug: "wireless-access-point-guide",
    title: "Wireless Access Point Buying Guide for Offices in the UAE",
    excerpt:
      "Wi-Fi 6 vs Wi-Fi 7, indoor vs outdoor, controller-based vs cloud-managed — everything you need to choose the right AP for your workspace.",
    date: "2025-08-28",
    author: "Stacklink Editorial",
    image: "https://i.postimg.cc/gcRCtvjQ/wireless-network-in-uae.jpg",
    category: "Wireless",
    readTime: "6 min read",
    content: [
      { body: "Choosing the right access point is the single biggest factor in office Wi-Fi performance. Density, ceiling height, and the apps your team runs all matter more than raw datasheet speeds." },
      { heading: "Wi-Fi 6 vs Wi-Fi 7", body: "Wi-Fi 6 (802.11ax) remains the sweet spot for most UAE offices in 2025 — broad client support, strong OFDMA performance, and excellent pricing. Wi-Fi 7 makes sense for high-density venues, AR/VR labs, and bandwidth-heavy creative studios." },
      { heading: "Controller vs cloud-managed", body: "Aruba Central, Cisco Meraki and Ruckus Cloud simplify multi-site management. On-prem controllers (Aruba MM, Cisco 9800) suit regulated environments that cannot send telemetry off-site." },
      { heading: "Survey before you buy", body: "A predictive site survey using Ekahau or Hamina prevents dead zones and overspending. Stacklink offers free pre-sales surveys across Dubai and Abu Dhabi." },
    ],
  },
  {
    slug: "structured-cabling-best-practices",
    title: "Structured Cabling Best Practices for Modern Data Centers",
    excerpt:
      "Cat6A, OM4 fiber, MPO trunks and TIA-942 — a practical reference for IT managers planning new cabling for server rooms in the UAE.",
    date: "2025-08-14",
    author: "Stacklink Editorial",
    image: "https://i.postimg.cc/28TBs9S9/Access-control-product-seller-in-uae.jpg",
    category: "Infrastructure",
    readTime: "5 min read",
    content: [
      { body: "Cabling is the invisible backbone that determines whether your network can scale for the next decade. Cutting corners here costs ten times more to fix later." },
      { heading: "Copper vs fiber", body: "Use Cat6A for horizontal runs to desks and APs (10G up to 100m). For backbone and inter-rack links, OM4 multimode fiber with LC or MPO connectors is the modern standard." },
      { heading: "TIA-942 compliance", body: "Follow TIA-942 tier guidelines for redundancy, hot-aisle/cold-aisle separation, overhead vs underfloor routing, and proper bend radius management." },
      { heading: "Labeling and documentation", body: "Every port and patch must be labeled and recorded in a DCIM tool. This single discipline saves hours during every future move-add-change." },
    ],
  },
  {
    slug: "access-control-systems-explained",
    title: "Access Control Systems Explained: From RFID to Biometrics",
    excerpt:
      "A clear breakdown of physical access control technologies, how they integrate with HR and CCTV, and which fits your facility best.",
    date: "2025-07-30",
    author: "Stacklink Editorial",
    image: "https://i.postimg.cc/kXqpjzkX/access-control-products-in-UAE.jpg",
    category: "Access Control",
    readTime: "6 min read",
    content: [
      { body: "Physical access control has moved far beyond simple keypads. Today's systems unify doors, turnstiles, parking, elevators and visitor management into a single policy engine." },
      { heading: "Card vs biometric vs mobile", body: "MIFARE DESFire EV3 cards remain the most cost-effective option. Biometrics (face, palm-vein, fingerprint) suit high-security zones. Mobile credentials via Bluetooth/NFC are gaining ground in modern offices." },
      { heading: "Integration with CCTV and HR", body: "ACS platforms like ZKTeco, HID and Suprema integrate with Hikvision/Dahua VMS and HRMS systems so a termination in HR automatically revokes access." },
      { heading: "SIRA approval in Dubai", body: "All commercial installations in Dubai must be performed by SIRA-certified integrators. Stacklink holds the relevant certifications and handles all DCD approvals." },
    ],
  },
  {
    slug: "server-storage-solutions-2025",
    title: "Choosing Server & Storage Solutions: Tower, Rack or Hyperconverged?",
    excerpt:
      "An IT leader's guide to selecting the right server platform and storage architecture for SMB, mid-market, and enterprise workloads.",
    date: "2025-07-16",
    author: "Stacklink Editorial",
    image: "https://i.postimg.cc/Wbf4dXLk/server-storage-products-in-uae.jpg",
    category: "Server & Storage",
    readTime: "8 min read",
    content: [
      { body: "Server consolidation, virtualization licensing changes and the rise of AI workloads have all reshaped how organizations buy compute and storage in 2025." },
      { heading: "Tower vs rack vs blade", body: "Towers (HPE ML, Dell T-series) suit small offices. 1U/2U rack servers (HPE DL, Dell R-series, Lenovo SR) are the workhorse of every data center. Blades are increasingly replaced by composable infrastructure." },
      { heading: "SAN, NAS or HCI?", body: "Traditional SAN (NetApp, Pure, HPE Primera) still wins on raw performance. NAS (Synology, QNAP, NetApp FAS) is best for unstructured data. HCI (Nutanix, VxRail, HPE SimpliVity) simplifies operations for mid-market virtualization." },
      { heading: "Right-sizing for VMware alternatives", body: "With Broadcom's VMware pricing changes, many clients are evaluating Nutanix AHV, Proxmox and Hyper-V. We help model TCO across all options." },
    ],
  },
  {
    slug: "firewall-comparison-fortinet-sonicwall-sophos",
    title: "Firewall Comparison 2025: Fortinet vs SonicWall vs Sophos",
    excerpt:
      "Performance, pricing, management and threat intelligence — a head-to-head review of the three most popular NGFW platforms in the UAE.",
    date: "2025-06-25",
    author: "Stacklink Editorial",
    image: "https://i.postimg.cc/kG6XLDVS/firewall-and-Security-Products-in-UAE.jpg",
    category: "Security",
    readTime: "7 min read",
    content: [
      { body: "Picking a next-generation firewall is a 5-year decision. Here is how the three platforms we deploy most often in the UAE actually stack up." },
      { heading: "Fortinet FortiGate", body: "Best raw throughput per dirham, excellent SD-WAN, deep Security Fabric integration. Ideal for distributed enterprises and ISPs." },
      { heading: "SonicWall", body: "Strong mid-market value, simple management via NSM, capture ATP sandbox. Sweet spot for 50–500 user offices." },
      { heading: "Sophos XGS", body: "Tight integration with Sophos Intercept X endpoints (Synchronized Security), clean web UI, great for organizations that want a single-vendor security story." },
      { heading: "Our recommendation", body: "There is no universal winner — the right choice depends on existing infrastructure, internal skills and renewal economics. Talk to our pre-sales team for a tailored comparison." },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return BLOG_POSTS.slice(0, limit);
  return BLOG_POSTS.filter((p) => p.slug !== slug)
    .sort((a, b) => (a.category === current.category ? -1 : 1))
    .slice(0, limit);
}

export function formatBlogDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" });
}