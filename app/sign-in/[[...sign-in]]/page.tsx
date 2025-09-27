import { SignIn } from "@clerk/nextjs";

const page = () => {
  return (
    <main className="felx items-center justify-center">
      <SignIn />
    </main>
  );
};

export default page;
