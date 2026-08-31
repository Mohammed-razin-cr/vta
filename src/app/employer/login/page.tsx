import type { Metadata } from "next";
import { PortalLogin } from "@/components/portal/PortalLogin";

export const metadata: Metadata = { title: "Employer Login | VOC Technical Academy" };

export default function EmployerLoginPage() {
  return <PortalLogin audience="Employer" />;
}
