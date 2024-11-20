"use client";

import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { DM_Mono } from "next/font/google";
import { useEffect } from "react";
import Header from "../_components/header/header";
import Footer from "../_components/header/footer";



const dmMono = DM_Mono({ subsets: ['latin'], weight: '400', variable: '--font-dm-mono' });


export default function Projects() {

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
            <section className="py-10 px-4 lg:px-[100px]  bg-[#130520] bg-[url(/bg3.png)] bg-repeat bg-contain bg-center min-h-screen relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#130520]/90 to-[#130520]/90 z-0"></div>       
                {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/30"></div>

                <div className="relative z-10 h-full">
                    <Header />
                    <div data-aos="fade-up" className="mt-[60px] lg:mt-[108px] mx-auto w-full relative" >
                        <div className="mb-12 lg:mb-[100px] w-fit mx-auto text-brand-white text-center">
                            <h2 className="font-bold text-xl lg:text-4xl mb-1.5 lg:mb-2.5">
                                WHY YOU SHOULD HIRE ME
                            </h2>
                            <div className="flex items-center gap-1 lg:gap-2">
                                <span className="flex-1 border-t border-brand-white"></span>
                                <p className={`italic ${dmMono.className} px-2 text-[10px] xphones:text-[11px] md:text-xs lg:text-xl`} style={{ fontStyle: 'italic', transform: 'skew(-8deg)' }}>
                                    delivering like Hebrew women
                                </p>
                                <span className="flex-1 border-t border-brand-white"></span>
                            </div>
                        </div>

                        <div data-aos = "fade-up-right" className="mb-16 lg:mb-[100px] flex flex-col md:flex-row items-center gap-6 md:gap-10 lg:justify-between" >
                            <a href="https://achebe-net.vercel.app/" target="_blank" className="block w-full h-[230px] md:min-w-[320px] md:h-[220px] lg:min-w-[405px] lg:h-[264px] xl:w-[100%]">
                                <Image
                                    src="/achebe.svg"
                                    width={343}
                                    height={230}
                                    alt="Jitu Clare"
                                    className="w-full h-[230px] md:w-[320px] md:h-[220px] lg:w-[405px] lg:h-[264px] xl:w-[100%]"
                                />
                            </a>
                            <p className="text-base font-medium md:text-lg lg:text-2xl text-brand-white" >
                            Achebe.net is the digital twin of the cultural icon ‘Chinua Achebe’. The goal of this project was to simulate interactions between users and  Chinua Achebe questions and also get his opinion about the decentralized world.
                            </p>
                        </div>
                        <div data-aos = "fade-up-left" className="mb-20 lg:mb-[100px] flex flex-col md:flex-row-reverse items-center gap-6 lg:gap-10 lg:justify-between" >
                            <a href="https://nc-abeokuta-2024.vercel.app/" target="_blank" className="block w-full h-[230px] md:min-w-[320px] md:h-[220px] lg:min-w-[405px] lg:h-[264px] xl:w-[100%]">
                                <Image
                                    src="/bridge.svg"
                                    width={343}
                                    height={230}
                                    alt="Jitu Clare"
                                    className="w-full h-[230px] md:w-[320px] md:h-[220px] lg:w-[405px] lg:h-[264px] xl:w-[100%]"
                                />
                            </a>
                            <p className="text-base font-medium md:text-lg lg:text-2xl text-brand-white" >
                            The branding of AIESEC, a youth run non governmental organization’s national conference held in Abeokuta, was done to tell stories of leadership that shapes our future as youths. I worked on the website design and branding of this project.
                            </p>
                        </div>

                        {/* Templates */}
                        <div data-aos = "fade-up-right" className="mb-16 lg:mb-[100px] flex flex-col md:flex-row items-center gap-6 md:gap-10 lg:justify-between" >
                            <a href="https://ntsenugu.vercel.app/" target="_blank" className="block w-full h-[230px] md:min-w-[320px] md:h-[220px] lg:min-w-[405px] lg:h-[264px] xl:w-[100%]">
                                <Image
                                    src="/nts.svg"
                                    width={343}
                                    height={230}
                                    alt="Jitu Clare"
                                    className="w-full h-[230px] md:w-[320px] md:h-[220px] lg:w-[405px] lg:h-[264px] xl:w-[100%]"
                                />
                            </a>
                            <p className="text-base font-medium md:text-lg lg:text-2xl text-brand-white" >
                                I designed the registration website of an organization’s National Training Seminar held in Enugu. The website was designed to give a gaming contest vibe as specified in the design brief. 
                            </p>
                        </div>
                        <div data-aos = "fade-up-left" className="mb-20 lg:mb-[100px] flex flex-col md:flex-row-reverse items-center gap-6 lg:gap-10 lg:justify-between" >
                            <a href="https://ncjos2024.netlify.app/?fbclid=PAAabSRVMsG9id2Y1N0pRVryll8F21ikv9oBSr2OoGr5Bv3H6A0YtyiNn84dU_aem_ARhmIeaP5NDDtC9bB_FA7t7eVA4JOYHNQ7muJ_hiIiPZjfYadaePIiyIE32IkPxIKnU" target="_blank" className="block w-full h-[230px] md:min-w-[320px] md:h-[220px] lg:min-w-[405px] lg:h-[264px] xl:w-[100%]">
                                <Image
                                    src="/winter.svg"
                                    width={343}
                                    height={230}
                                    alt="Jitu Clare"
                                    className="w-full h-[230px] md:w-[320px] md:h-[220px] lg:w-[405px] lg:h-[264px] xl:w-[100%]"
                                />
                            </a>
                            <p className="text-base font-medium md:text-lg lg:text-2xl text-brand-white" >
                                ‘Winter is Coming’, the theme of the congress held in Jos. While designing the website, i ensured that it contained elements that depicts the cold weather in Jos which aligns with the theme of the congress.
                            </p>
                        </div>
                        <div data-aos = "fade-up-right" className="mb-16 lg:mb-[100px] flex flex-col md:flex-row items-center gap-6 md:gap-10 lg:justify-between" >
                            <a href="https://adventurous-words-205646.framer.app/" target="_blank" className="block w-full h-[230px] md:min-w-[320px] md:h-[220px] lg:min-w-[405px] lg:h-[264px] xl:w-[100%]">
                                <Image
                                    src="/aihelper.svg"
                                    width={343}
                                    height={230}
                                    alt="Jitu Clare"
                                    className="w-full h-[230px] md:w-[320px] md:h-[220px] lg:w-[405px] lg:h-[264px] xl:w-[100%]"
                                />
                            </a>
                            <p className="text-base font-medium md:text-lg lg:text-2xl text-brand-white" >
                                AI Helper is an assistant that helps tech and non tech users manage tasks and offers recommendations as well that could boost productivity while achieving their daily task target. 
                            </p>
                        </div>
                        
                        <a href="https://www.behance.net/clarejitu" target="_blank" className="flex items-center justify-center gap-2.5 mx-auto cursor-pointer" >
                            <span className="font-medium text-2xl lg:text-3xl text-brand-white" >VIEW CASE STUDIES</span>
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