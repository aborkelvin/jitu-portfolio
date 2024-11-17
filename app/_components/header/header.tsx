"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Header() {
    const pathName = usePathname();

    return (
        <header className="bg-[#FFFFFF0D] text-brand-white font-semibold px-3.5 lg:px-9 py-[18px] lg:py-5 flex justify-between items-center rounded-full " >
            <Link href="/" className="flex items-center justify-center gap-1.5 lg:gap-2.5" >
                <h1 className="text-xs lg:text-2xl">CLARE JITU</h1>
                <Image
                    src="/butterfly.svg"
                    width={12}
                    height={12}
                    alt="butterfly"
                    className="w-3 h-3 lg:w-6 lg:h-6 relative bottom-[1px]"
                />
            </Link>
            <nav className="flex items-center gap-[18px] lg:gap-[62px] justify-between " >
                <Link href="/" className={` ${pathName == "/" ? "border-b border-brand-white p-0.5" : ""}  text-[10px] lg:text-xl`} >
                    Home
                </Link>
                <Link href="/projects" className={` ${pathName == "/projects" ? "border-b border-brand-white p-0.5" : ""}  text-[10px] lg:text-xl`} >
                    Projects
                </Link>
                <Link href="/about" className={` ${pathName == "/about" ? "border-b border-brand-white p-0.5" : ""}  text-[10px] lg:text-xl`} >
                    About
                </Link>
            </nav>
            <a href="mailto:claraezejitu@gmail.com">
                <Image
                    src="/arrow.svg"
                    width={24}
                    height={24}
                    alt="Contact Me"
                    className="w-6 h-6 lg:w-[60px] lg:h-[60px] cursor-pointer"
                />
            </a>
        </header>
    )
}