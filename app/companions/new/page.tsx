import CompanionsForm from "@/components/CompanionsForm";
import { NewCompanionPermission } from "@/lib/actions/companion.actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
const NewCompanion = async () => {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");
  const canCreateCompanion = await NewCompanionPermission(userId);

  return (
    <main className="main-lg:w-1/3 min-md:w-2/3 items-center justify-center">
      {canCreateCompanion ? (
        <article className="w-full gap-4 flex flex-col">
          <h1>
            <CompanionsForm />
          </h1>
        </article>
      ) : (
        <article className="companion-limit">
          <Image
            src="/images/limit.svg"
            alt="Companion limit reached"
            width={360}
            height={360}
          />
          <div className="cta-badge">Upgrade your plan</div>
          <h1>You&apos;ve Reached your Limit</h1>
          <p>
            You&apos;ve reached your companion Limit.upgrade to create more
            companions and premium features.
          </p>
          <Link
            href="/subscription"
            className="btn-primary w-full justify-center"
          >
            Upgrade my PLan
          </Link>
        </article>
      )}
    </main>
  );
};

export default NewCompanion;
