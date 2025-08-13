import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">Start learning your way.</div>
      <h2 className="text-3xl font-bold">
        Build and personalize Your Learning Companion
      </h2>
      <p>
        Pick a name,subject, voice, personality - and start learning through
        voice conversations that feel natural and fun.
      </p>

      <Image src="/images/cta.svg" alt="cta" width={362} height={232} />
      <Button className="btn-primary">
        <Image src="/icons/plus.svg" alt="plus" width={32} height={12} />
        <Link href="/companions/new">
          {" "}
          <p>Build a New Companion</p>
        </Link>
      </Button>
    </section>
  );
};

export default CTA;
