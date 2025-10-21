import { getAllCompanions } from "@/lib/actions/companion.actions";
import React from "react";

const CompanionsLibrary = async ({ searchParams }: SearchParams) => {
  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : "";
  const topic = filters.topic ? filters.topic : "";

  const companions = await getAllCompanions({ subject, topic });
  console.log(companions);
  return <div>CompanionsLibrary</div>;
};

export default CompanionsLibrary;
