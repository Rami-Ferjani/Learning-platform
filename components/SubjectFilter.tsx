"use client";
import React, { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";
import { subjects } from "../constants";
const SubjectFilter = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParam = useSearchParams();
  const query = searchParam.get("subject") || "";
  const [subjectFilter, setSubjectFilter] = useState(query);
  useEffect(() => {
    if (subjectFilter != "all") {
      const newUrl = formUrlQuery({
        params: searchParam.toString(),
        key: "subject",
        value: subjectFilter,
      });
      router.push(newUrl, { scroll: false });
    } else {
      if (subjectFilter === "all") {
        const newUrl = removeKeysFromUrlQuery({
          params: searchParam.toString(),
          keysToRemove: ["subject"],
        });
        router.push(newUrl, { scroll: false });
      }
    }
  }, [subjectFilter, router, pathname, searchParam]);
  return (
    <Select onValueChange={(value) => setSubjectFilter(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Subject Filter" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Subject Filter</SelectLabel>
          <SelectItem key="all" value="all">
            All Companions
          </SelectItem>
          {subjects.map((subject) => (
            <SelectItem key={subject} value={`${subject}`}>
              {subject}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SubjectFilter;
