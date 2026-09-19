import { redirect } from "next/navigation";
import { CURRENT_SEASON } from "@/data/seasons";

export default function RootPage() {
  redirect(`/${CURRENT_SEASON}`);
}
