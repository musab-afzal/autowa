import { withAdmin } from "@/lib/api";
import { operations } from "@/lib/admin";

export const GET = withAdmin(async () => operations());
