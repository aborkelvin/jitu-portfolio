import Image from "next/image"

export default function Footer() {

    return (
        <section className="py-10 lg:py-[100px] px-4 lg:px-[100px] bg-[#130520] bg-[url(/bg1.png)] bg-no-repeat bg-cover bg-center relative overflow-hidden ">
            <div className="absolute inset-0 bg-gradient-to-b from-[#130520]/95 to-[#130520]/95 z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/40"></div>

            <div className="relative z-10 h-full flex flex-col md:flex-row gap-[52px] md:items-center md:justify-between text-brand-white font-semibold ">
            <div className="flex items-center gap-1.5 lg:gap-2.5" >
                <h1 className="text-2xl lg:text-3xl">CLARE JITU</h1>
                <Image
                    src="/butterfly.svg"
                    width={24}
                    height={24}
                    alt="butterfly"
                    className="w-6 h-6 lg:w-8 lg:h-8 relative bottom-[1px]"
                />
            </div>
            <div className="flex gap-5 items-center">
                <Image
                    src="/x.svg"
                    width={40}
                    height={40}
                    alt="butterfly"
                    className="w-10 h-10 lg:w-[52px] lg:h-[52px] relative bottom-[1px]"
                />
                <Image
                    src="/behance.svg"
                    width={40}
                    height={40}
                    alt="butterfly"
                    className="w-10 h-10 lg:w-[52px] lg:h-[52px] relative bottom-[1px]"
                />
                <Image
                    src="/linkedin.svg"
                    width={40}
                    height={40}
                    alt="butterfly"
                    className="w-10 h-10 lg:w-[52px] lg:h-[52px] relative bottom-[1px]"
                />
            </div>
            <div className="flex flex-col gap-1 text-brand-white ">
                <p className="font-medium text-xl lg:text-[28px]" >LET’S WORK FOR YOU</p>
                <p className="text-2xl lg:text-[28px]" >claraezejitu@gmail.com</p>
            </div>
            </div>
      </section>
    )
}