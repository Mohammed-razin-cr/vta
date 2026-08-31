import type { Metadata } from "next";
import { PortalLogin } from "@/components/portal/PortalLogin";

export const metadata: Metadata = { title: "Learner Login | VOC Technical Academy" };

export default function LearnerLoginPage() {
  return <PortalLogin audience="Learner" />;
}
