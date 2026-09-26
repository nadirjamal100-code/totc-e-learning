import type { CategoryCard } from "@/data/course";
import { Briefcase, Camera, ChartIcon, Code, Masks, Megaphone, Monitor, Palette } from "./icons";

const ICONS = {
  palette: Palette,
  code: Code,
  monitor: Monitor,
  briefcase: Briefcase,
  megaphone: Megaphone,
  camera: Camera,
  masks: Masks,
  chart: ChartIcon,
} as const;

export default function CategoryIcon({ icon, className }: { icon: CategoryCard["icon"]; className?: string }) {
  const Icon = ICONS[icon];
  return <Icon className={className} />;
}
