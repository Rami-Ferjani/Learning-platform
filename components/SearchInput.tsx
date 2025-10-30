"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { formUrlQuery } from "@jsmastery/utils";
const SearchInput = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParam = useSearchParams();
  const query = searchParam.get("topic") || "";
  const [searchQuery, setSearchQuery] = useState(query);
  useEffect(() => {
    if (searchQuery) {
      const newUrl = formUrlQuery({
        params: searchParam.toString(),
        key: "topic",
        value: searchQuery,
      });

      router.push(newUrl, { scroll: false });
    }
  }, [searchQuery, router, pathname, searchParam]);
  return (
    <div className="relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit">
      <Image src="/icons/search.svg" alt="search" width={15} height={15} />
      <input
        placeholder="Search companions..."
        className="outline-none"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
