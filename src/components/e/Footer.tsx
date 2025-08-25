"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center shadow-inner">
      <div>
        <Link href={"https://github.com/RenanCLima/"}>
          <Image
            src={"/logo-github.ico"}
            alt="Logo GitHub"
            width={20}
            height={20}
          ></Image>
        </Link>
      </div>
      <div>
        <Link href={"https://github.com/RenanCLima/"}>
          https://github.com/RenanCLima/
        </Link>
      </div>
      <div className="px-10">This is a Global Footer</div>
    </footer>
  );
}
