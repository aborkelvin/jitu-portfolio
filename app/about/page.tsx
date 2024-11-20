
"use client";

import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { DM_Mono } from "next/font/google";
import { useEffect } from "react";
import Header from "../_components/header/header";
import Footer from "../_components/header/footer";



const dmMono = DM_Mono({ subsets: ['latin'], weight: '400', variable: '--font-dm-mono' });


export default function About() {

    useEffect(() => {
        AOS.init({
        duration: 1000, // Animation duration (in ms)
        offset: 200,    // Offset (in px) from the original trigger point
        easing: "ease-in-out", // Easing function for animations
        once: true,     // Whether animation should happen only once
        });
    }, []);
    
    return (
        <main>
            <section className="py-10 px-4 lg:px-[100px]  bg-[#130520] bg-[url(/bg1.png)] bg-repeat bg-cover bg-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#130520]/90 to-[#130520]/90 z-0"></div>       
                {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/30"></div>

                <div className="relative z-10 h-full">
                    <Header />
                    <div data-aos="fade-up" className="mt-[60px] lg:mt-[108px] mx-auto w-fit" >
                        <div className="mb-12 lg:mb-[100px] w-fit mx-auto text-brand-white text-center">
                            <h2 className="font-bold text-xl lg:text-4xl mb-1.5 lg:mb-2.5">
                                I’M SUCH A BLACK SERIES MOVIE FAN
                            </h2>
                            <div className="flex items-center gap-1 lg:gap-2">
                                <span className="flex-1 border-t border-brand-white"></span>
                                <p className={`italic ${dmMono.className} px-2 text-[10px] xphones:text-[11px] md:text-xs lg:text-xl`} style={{ fontStyle: 'italic', transform: 'skew(-8deg)' }}>
                                    all american and the chi remains one of my best
                                </p>
                                <span className="flex-1 border-t border-brand-white"></span>
                            </div>
                        </div>                                                
                    </div>
                    <div className="w-full relative" >
                        <div data-aos = "fade-right" className="max-w-[90%] md:max-w-[480px] lg:max-w-[615px] mx-auto md:mx-0 relative flex flex-col xphones:pr-5" >
                            <div className="ml-auto z-10 max-w-[213px] md:max-w-[320px] lg:max-w-[410px] border border-brand-white rounded-md lg:rounded-lg p-3 lg:p-4 w-fit" >
                                <div className="bg-brand-white rounded-md lg:rounded-lg px-2 py-4 md:px-3.5 md:py-8 lg:px-6 lg:py-9" >
                                    <p className="font-medium text-xs md:text-sm lg:text-xl" >
                                        Asides being a designer, I work as a creative director and a water engineering research assistant. I also bake and manage Clare’s treat.
                                    </p>
                                </div>
                            </div>
                        
                            <Image
                                src="/bake.svg"
                                width={156}
                                height={169}
                                alt="Jitu Clare"
                                className="hidden lg:block w-[156px] h-[169px] md:w-[200px] md:h-[220px] lg:w-[258px] lg:h-[280px] relative bottom-10 md:bottom-[100px]"
                            />      
                            <div className="block lg:hidden relative bottom-10 md:bottom-[100px] w-fit">
                                <Image
                                    src="/imBg.jpg"
                                    width={156}
                                    height={169}
                                    alt="Jitu Clare"
                                    className="w-[156px] h-[169px] md:w-[200px] md:h-[220px] lg:w-[258px] lg:h-[280px] relative "
                                />
                                <Image
                                    src="/profile/4.jpeg"
                                    width={156}
                                    height={169}
                                    alt="Jitu Clare"
                                    className="w-[90%] h-[65%] absolute top-2.5 md:top-3 lg:top-3.5 xl:top-4 left-1/2 transform -translate-x-1/2 object-cover object-top"
                                />
                                <h2 className="absolute bottom-4 md:bottom-7 lg:bottom-10 font-medium text-xl phones:text-[22px] md:text-[29px] lg:text-[40px] text-center left-1/2 transform -translate-x-1/2 w-[90%] ">
                                    BAKE
                                </h2>
                            </div>
                        </div>
                        <div data-aos = "fade-left" className="max-w-[90%] md:max-w-[480px] lg:max-w-[615px] mx-auto md:mx-0 md:ml-auto relative -bottom-5 md:bottom-36 flex flex-col xphones:pr-5" >
                            <div className="mr-auto z-10 max-w-[213px] md:max-w-[320px] lg:max-w-[410px] border border-brand-white rounded-md lg:rounded-lg p-3 lg:p-4 w-fit" >
                                <div className="bg-brand-white rounded-md lg:rounded-lg px-2 py-4 md:px-3.5 md:py-8 lg:px-6 lg:py-9" >
                                    <p className="font-medium text-xs md:text-sm lg:text-xl" >
                                        When I’m not on my laptop screen, I’m playing volleyball or watching clips from the Cosby show.
                                    </p>
                                </div>
                            </div>
                        
                            <Image
                                src="/sports.png"
                                width={156}
                                height={169}
                                alt="Jitu Clare"
                                className="hidden w-[156px] h-[169px] md:w-[200px] md:h-[220px] lg:w-[258px] lg:h-[280px] ml-auto relative bottom-10 md:bottom-[100px]"
                            />
                            <div className="block relative bottom-10 md:bottom-[100px] ml-auto w-fit">
                                <Image
                                    src="/imBg.jpg"
                                    width={156}
                                    height={169}
                                    alt="Jitu Clare"
                                    className="w-[156px] h-[169px] md:w-[200px] md:h-[220px] lg:w-[258px] lg:h-[280px] relative "
                                />
                                <Image
                                    src="/profile/5.jpeg"
                                    width={156}
                                    height={169}
                                    alt="Jitu Clare"
                                    className="w-[90%] h-[65%] absolute top-2.5 md:top-3 lg:top-3.5 xl:top-4 left-1/2 transform -translate-x-1/2 object-cover object-top"
                                />
                                <h2 className="absolute bottom-4 md:bottom-7 lg:bottom-10 font-medium text-xl phones:text-[22px] md:text-[29px] lg:text-[40px] text-center left-1/2 transform -translate-x-1/2 w-[90%] ">
                                    SPORTS
                                </h2>
                            </div>
                        </div>
                        <div data-aos = "fade-right" className="max-w-[90%] md:max-w-[480px] lg:max-w-[615px] mx-auto md:mx-0 relative -bottom-9 md:bottom-60 flex flex-col xphones:pr-5" >
                            <div className="ml-auto z-10 max-w-[213px] md:max-w-[320px] lg:max-w-[410px] border border-brand-white rounded-md lg:rounded-lg p-3 lg:p-4 w-fit" >
                            <div className="bg-brand-white rounded-md lg:rounded-lg px-2 py-4 md:px-3.5 md:py-8 lg:px-6 lg:py-9" >
                                <p className="font-medium text-xs md:text-sm lg:text-xl" >
                                    I love to try new restaurants, recipes and places, but I can’t fund them. Hire me so I could fund them and drop reviews.
                                </p>
                            </div>
                            </div>
                        
                            <Image
                                src="/dm.svg"
                                width={156}
                                height={169}
                                alt="Jitu Clare"
                                className="hidden lg:block w-[156px] h-[169px] md:w-[200px] md:h-[220px] lg:w-[258px] lg:h-[280px] relative bottom-10 md:bottom-[100px]"
                            />
                            <div className="block lg:hidden relative bottom-10 md:bottom-[100px] w-fit">
                                <Image
                                    src="/imBg.jpg"
                                    width={156}
                                    height={169}
                                    alt="Jitu Clare"
                                    className="w-[156px] h-[169px] md:w-[200px] md:h-[220px] lg:w-[258px] lg:h-[280px] relative "
                                />
                                <Image
                                    src="/profile/6.jpeg"
                                    width={156}
                                    height={169}
                                    alt="Jitu Clare"
                                    className="w-[90%] h-[65%] absolute top-2.5 md:top-3 lg:top-3.5 xl:top-4 left-1/2 transform -translate-x-1/2 object-cover "
                                />
                                <h2 className="absolute bottom-4 md:bottom-7 lg:bottom-10 font-medium text-xl phones:text-[22px] md:text-[29px] lg:text-[40px] text-center left-1/2 transform -translate-x-1/2 w-[90%] ">
                                    SEND A DM
                                </h2>
                            </div>
                        </div>
                        <a href="https://www.instagram.com/clares_treat?igsh=MXRvZ202ZDJyN2djdw==" target="_blank" className="mt-10 md:-mt-52 flex flex-col-reverse md:flex-row items-center justify-center gap-2.5 mx-auto cursor-pointer" >
                            <span className="font-medium text-2xl lg:text-3xl text-brand-white text-center" >YOU CAN ALSO SUPPORT CLARE’S TREAT</span>
                            <Image
                                src="/arrow.svg"
                                width={24}
                                height={24}
                                alt="Contact Me"
                                className="w-6 h-6 lg:w-[40px] lg:h-[40px] cursor-pointer"
                            />
                        </a>
                    </div>
                    
                </div>
            </section>
            {/* Footer Section */}
            <Footer />
        </main>
    )
}