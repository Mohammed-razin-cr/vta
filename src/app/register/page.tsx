import type { Metadata } from "next";
import { PortalEntry } from "@/components/portal/PortalEntry";

export const metadata: Metadata = { title: "Start Training | VOC Technical Academy" };

export default function LearnerRegisterPage() {
  return <PortalEntry audience="Learner" mode="register" />;
}
