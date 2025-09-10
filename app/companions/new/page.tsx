import CompanionsForm from "@/components/CompanionsForm";

const NewCompanion = () => {
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
