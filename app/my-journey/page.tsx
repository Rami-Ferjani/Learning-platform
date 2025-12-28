import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getUserCompanions, getUserSessions } from "@/lib/actions/companion.actions";
const Profile = async () => {
  const user = await currentUser();
  if (!user) redirect("/sign-in");
  const companions=await getUserCompanions(user.id);
  const sessionHistory=await getUserSessions(user.id);

  return (
    <main className="min-lg:w-3/4">
      <section className="">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
};

export default Profile;
