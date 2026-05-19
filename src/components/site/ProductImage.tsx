import imgRouter from "@/assets/product-router.jpg";
import imgSwitch from "@/assets/product-switch.jpg";
import imgIpphone from "@/assets/product-ipphone.jpg";
import imgCctv from "@/assets/product-cctv.jpg";
import imgServer from "@/assets/product-server.jpg";

export const CATEGORY_IMG: Record<string, string> = {
  "network-switches": "https://i.postimg.cc/nhSBQPwK/Network-Switches-Stacklink-in-uk.jpg",
  "telephony": imgIpphone,
  "wireless": "https://i.postimg.cc/gcRCtvjQ/wireless-network-in-uae.jpg",
  "security-firewall": "https://i.postimg.cc/kG6XLDVS/firewall-and-Security-Products-in-UAE.jpg",
  "server-storage": "https://i.postimg.cc/c47rWgkG/server-and-stoage-products-in-uae.jpg",
  "cctv-surveillance": imgCctv,
  "cabinets-rack": "https://i.postimg.cc/JnRpTBFR/cabins-and-racks.jpg",
  "softwares": "https://i.postimg.cc/Hk4P1gyg/softwares.jpg",
  "access-control": "https://i.postimg.cc/kXqpjzkX/access-control-products-in-UAE.jpg",
  "routers": imgRouter,
};

export function imgForCategory(slug: string): string {
  return CATEGORY_IMG[slug] ?? imgServer;
}
