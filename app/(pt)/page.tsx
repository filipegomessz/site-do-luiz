import { site } from "@/data/site";
import { SitePage } from "@/components/SitePage";

export default function Home() {
  return <SitePage content={site} />;
}
