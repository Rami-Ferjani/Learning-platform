import { getCompanion } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";
interface CompanionSessionPageProps {
  params: Promise<{ id: string }>;
}
const CompanionSession = async ({ params }: CompanionSessionPageProps) => {
  const { id } = await params;
  console.log("im in");

  const companion = await getCompanion(id);
  const user = await currentUser();
  console.log("igot here");
  if (!user) redirect("/sign-in");
  if (!companion) redirect("/companions");
  console.log("one companion now");
  return (
    <main>
      <article className="flex rounded-border justify-between p-6 max-md:flex-col">
        <div className="flex items-center gap-2">
          <div
            className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden"
            style={{ backgroundColor: getSubjectColor(companion.subject) }}
          ></div>
        </div>
      </article>
    </main>
  );
};

export default CompanionSession;
