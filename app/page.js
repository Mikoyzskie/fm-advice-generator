"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [advice, setAdvice] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setId(data.slip.id);
        setAdvice(JSON.stringify(data.slip.advice));
      });
  }, []);

  const getAdvice = () => {
    fetch("https://api.adviceslip.com/advice", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setId(data.slip.id);
        setAdvice(JSON.stringify(data.slip.advice));
      });
  };

  return (
    <main className="advice-container max-w-lg p-5 py-10 lg:p-12 text-center rounded-2xl flex items-center justify-center flex-col gap-7 relative lg:pb-16 pb-16">
      <span>ADVICE #{id}</span>
      <h1 className="text-[28px]">{advice}</h1>
      <Image
        className="hidden md:block"
        src={"./pattern-divider-desktop.svg"}
        width={9999}
        height={100}
        alt="desktop-divider"
      />
      <Image
        className="md:hidden"
        src={"./pattern-divider-mobile.svg"}
        width={9999}
        height={100}
        alt="mobile-divider"
      />
      <button
        className="dice p-4 rounded-full absolute bottom-[-25px] hover:drop-shadow-[0_0_20px_rgba(82,255,168,0.9)]"
        onClick={getAdvice}
      >
        <Image src={"./icon-dice.svg"} width={20} height={20} alt="dice" />
      </button>
    </main>
  );
}
