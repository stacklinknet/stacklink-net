import imgFirewall from "@/assets/product-firewall.jpg";
import imgAp from "@/assets/product-ap.jpg";
import imgRouter from "@/assets/product-router.jpg";
import imgSwitch from "@/assets/product-switch.jpg";
import imgIpphone from "@/assets/product-ipphone.jpg";
import imgCctv from "@/assets/product-cctv.jpg";
import imgServer from "@/assets/product-server.jpg";
import imgStorage from "@/assets/product-storage.jpg";

export const CATEGORY_IMG: Record<string, string> = {
  "network-switches": imgSwitch,
  "telephony": imgIpphone,
  "wireless": imgAp,
  "security-firewall": imgFirewall,
  "server-storage": imgServer,
  "cctv-surveillance": imgCctv,
  "cabinets-rack": imgStorage,
  "softwares": imgServer,
  "access-control": imgFirewall,
  "routers": imgRouter,
};

export function imgForCategory(slug: string): string {
  return CATEGORY_IMG[slug] ?? imgServer;
}
