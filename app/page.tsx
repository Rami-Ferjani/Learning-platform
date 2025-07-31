import CompanionCard from "@/components/CompanionCard";
import { Button } from "@/components/ui/button";
import React from "react";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className="Home-section">
        <CompanionCard />
        <CompanionCard />
        <CompanionCard />
      </section>
    </main>
  );
};

export default Page;
