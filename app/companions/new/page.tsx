import CompanionsForm from "@/components/CompanionsForm";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
const NewCompanion = async () => {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  return (
    <main className="main-lg:w-1/3 min-md:w-2/3 items-center justify-center">
      <article className="w-full gap-4 flex flex-col">
        <h1>
          <CompanionsForm />
        </h1>
      </article>
    </main>
  );
};

export default NewCompanion;
