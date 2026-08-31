import type { Metadata } from "next";
import { PortalEntry } from "@/components/portal/PortalEntry";

export const metadata: Metadata = { title: "Hire VTA Talent | VOC Technical Academy" };

export default function EmployerRegisterPage() {
  return <PortalEntry audience="Employer" mode="register" />;
}
