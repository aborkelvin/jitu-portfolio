import Image from "next/image";
import Header from "./_components/header/header";
import { DM_Mono } from "next/font/google";

const dmMono = DM_Mono({ subsets: ['latin'], weight: '400', variable: '--font-dm-mono' });

export default function Home() {
  return (
    <main className="bg-[#130520] min-h-screen">
      
      {/* Hero Section */}
      <section className="py-10 px-4 lg:px-[100px]">
        <Header />
        <div className="mt-[80px] lg:mt-[108px] mx-auto w-fit" >
          <div className="mb-10 lg:mb-11">
            <Image
              src="/ug.svg"
              width={258}
              height={280}
              alt="Jitu Clare"
              className="w-[258px] h-[280px] mx-auto"
            />
          </div>
          {/* <div className="mt-20 relative w-fit">
            <Image
              src="/imgBg.jpg"
              width={258}
              height={280}
              alt="Jitu Clare"
              className="w-[258px] h-[280px] rotate-6"
            />
            <Image
              src="/ug2.png"
              width={226}
              height={180}
              alt="Jitu Clare"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[226px] h-[180px]"
            />
          </div> */}
          
          <div className="w-fit mx-auto text-brand-white text-center">
            <h2 className="font-bold lg:text-4xl mb-1.5 lg:mb-2.5">
              HI, I’M CLARE JITU, A CREATIVE
            </h2>
            <div className="flex items-center gap-1 lg:gap-2">
              <span className="flex-1 border-t border-brand-white"></span>
              <p className={`italic ${dmMono.className} px-2 text-xs lg:text-2xl`} style={{ fontStyle: 'italic', transform: 'skew(-8deg)' }}>
                the world is my canvas
              </p>
              <span className="flex-1 border-t border-brand-white"></span>
            </div>
          </div>
        </div>      
      </section>      
      
      {/* Mini About Section */}
      <section className="py-10 px-4 lg:px-[100px]">
        
        <div className="max-w-[90%] lg:max-w-[615px] mx-auto md:mx-0 relative flex flex-col xphones:pr-5" >
          <div className="ml-auto z-10 max-w-[213px] lg:max-w-[410px] border border-brand-white rounded-md lg:rounded-lg p-3 lg:p-4 w-fit" >
            <div className="bg-brand-white rounded-md lg:rounded-lg px-3.5 py-8 lg:px-6 lg:py-9" >
              <p className="font-medium text-xs lg:text-xl" >
                A Nigerian based UI/UX designer with boundless love for creativity, design and seamless user experience.
              </p>
            </div>
          </div>
          
          <Image
            src="/ug3.svg"
            width={156}
            height={169}
            alt="Jitu Clare"
            className="w-[156px] h-[169px] lg:w-[258px] lg:h-[280px] relative bottom-[100px]"
          />


        </div>


      </section>

    </main>
  )
}
