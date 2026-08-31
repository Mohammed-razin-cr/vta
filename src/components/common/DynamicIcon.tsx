import {
  Award,
  BadgeCheck,
  BarChart3,
  BookOpen,
  BookOpenCheck,
  Briefcase,
  Building2,
  ClipboardCheck,
  FileText,
  GraduationCap,
  Handshake,
  ListChecks,
  QrCode,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  UserRound,
  Users,
  UserSquare2,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  award: Award,
  "badge-check": BadgeCheck,
  "bar-chart-3": BarChart3,
  "book-open": BookOpen,
  "book-open-check": BookOpenCheck,
  briefcase: Briefcase,
  "building-2": Building2,
  "clipboard-check": ClipboardCheck,
  "file-text": FileText,
  "graduation-cap": GraduationCap,
  handshake: Handshake,
  "list-checks": ListChecks,
  "qr-code": QrCode,
  "shield-check": ShieldCheck,
  smartphone: Smartphone,
  "trending-up": TrendingUp,
  "user-round": UserRound,
  users: Users,
  "user-square-2": UserSquare2,
  wrench: Wrench,
};

interface DynamicIconProps {
  name: string;
  className?: string;
}

/**
 * Resolves an icon by the same kebab-case name used in the original
 * `data-lucide` attributes, so section data arrays can stay declarative.
 */
export function DynamicIcon({ name, className }: DynamicIconProps) {
  const Icon = ICON_MAP[name];
  if (!Icon) return null;
  return <Icon className={className} aria-hidden="true" />;
}
