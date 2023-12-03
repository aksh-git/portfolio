"use client";

import React from 'react';
import MyTypeWriter from '@/app/components/typewriter';
import SocialButton from '@/app/components/socialButton';
import AnimatedBg from '@/app/components/animatedBg';
import { useRouter } from 'next/navigation';

function TopSection() {

    const router = useRouter()

    return (
        <section className='w-full min-h-screen px-8 md:px-12 lg:px-28 flex flex-col-reverse md:flex-row items-center justify-end md:justify-between'>
            {/* Banner */}
            <div className='absolute -z-50' >
                <AnimatedBg data={{
                    color: "#1e293b3d",
                    linksColor: "#64748b3b",
                    backgroundColor: "#e2e8f0",
                }} />
            </div >

            <div className='min-w-full md:min-w-min'>
                <div className='font-extrabold text-4xl md:text-6xl capitalize space-y-6 '>
                    <div className='font-sans'>Hi there,</div>
                    <div className='flex gap-2 font-sans'>
                        I&apos;m
                        <span className='text-secondary'>Akash</span>
                        <span className='text-accent'>Yadav</span>
                    </div>
                </div>
                <div className='flex font-semibold text-2xl md:text-3xl mt-6'>
                    <span className=' text-secondary font-sans'>I Am Into</span>
                    <div className='text-accent px-3'>
                        <MyTypeWriter data={["Full-Stack Dev.", "Backend Dev.", "Web Development", "Node.js Dev."]} />
                    </div>
                </div>

                <div onClick={() => router.push("#about")} className='py-2 px-6 bg-accent w-fit mt-6 rounded-full font-medium cursor-pointer text-slate-200 flex items-center gap-1'>
                    About me
                    <div className='flex justify-center items-center w-6 h-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-down"><path d="m7 6 5 5 5-5" /><path d="m7 13 5 5 5-5" /></svg>
                    </div>
                </div>

                <div className='mt-8'> {/* Social Buttons */}
                    <div className='flex flex-row gap-1 -ml-2'>
                        <SocialButton
                            altText="Linkedin Profile"
                            url="linkedin.com/in/ydevakash"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0277b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect width="4" height="12" x="2" y="9"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </SocialButton>
                        <SocialButton
                            altText="Github Profile"
                            url="github.com/aksh-git"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2a9d8f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                <path d="M9 18c-4.51 2-5-2-7-2"></path>
                            </svg>
                        </SocialButton>
                        <SocialButton
                            altText="X (formerly twitter)"
                            url="x.com/ydevakash"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="28" height="28" stroke='white' strokeWidth='1'><path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.282L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z" /></svg>
                        </SocialButton>
                        <SocialButton
                            altText="Leetcode Profile"
                            url="leetcode.com/ydevakash"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" strokeWidth="1" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" width="28" height="28" id="leetcode"><path fill="#FCC34A" d="M20.303,16.047h-9.561c-0.936,0-1.697-0.803-1.697-1.79s0.762-1.79,1.697-1.79h9.561c0.936,0,1.697,0.803,1.697,1.79S21.238,16.047,20.303,16.047z"></path><path fill="currentColor" d="M11.618,24c-1.604,0-2.977-0.533-3.97-1.541l-4.098-4.181C2.551,17.262,2,15.819,2,14.215c0-1.578,0.551-3.008,1.552-4.025l9.519-9.681c0.66-0.67,1.828-0.653,2.506,0.036c0.694,0.706,0.71,1.839,0.034,2.524l-1.762,1.816c0.655,0.268,1.241,0.659,1.739,1.159l2.463,2.53c0.672,0.684,0.655,1.815-0.039,2.521c-0.346,0.352-0.802,0.545-1.284,0.545l0,0c-0.464,0-0.896-0.181-1.219-0.509l-2.536-2.492c-0.281-0.287-0.779-0.49-1.367-0.49c-0.606,0-1.069,0.157-1.375,0.469l-4.067,4.194c-0.342,0.349-0.521,0.831-0.521,1.4c0,0.577,0.189,1.101,0.519,1.436l4.083,4.182c0.315,0.281,0.774,0.484,1.362,0.484s1.045-0.163,1.36-0.484l2.549-2.505c0.314-0.281,0.746-0.502,1.209-0.503c0.001,0,0.002,0,0.002,0c0.483,0,0.939,0.194,1.286,0.546c0.693,0.705,0.71,1.837,0.036,2.522l-2.457,2.525C14.586,23.438,13.176,24,11.618,24z M14.29,1c-0.193,0-0.374,0.074-0.507,0.21l-9.519,9.681C3.449,11.72,3,12.9,3,14.215c0,1.341,0.449,2.535,1.265,3.363c0,0,0,0,0.001,0.001l4.097,4.18C9.162,22.57,10.288,23,11.618,23c1.288,0,2.444-0.455,3.258-1.282l2.457-2.525c0.295-0.301,0.279-0.804-0.034-1.122c-0.156-0.159-0.36-0.247-0.573-0.247c0,0,0,0-0.001,0c-0.192,0.001-0.37,0.075-0.502,0.209l-2.549,2.505c-0.497,0.507-1.214,0.778-2.068,0.778s-1.572-0.271-2.076-0.784L5.446,16.35c-0.519-0.527-0.805-1.286-0.805-2.136c0-0.824,0.286-1.57,0.806-2.099l4.067-4.194c0.503-0.512,1.206-0.771,2.091-0.771c0.854,0,1.571,0.271,2.074,0.783l2.536,2.492c0.139,0.142,0.318,0.216,0.512,0.216l0,0c0.212,0,0.415-0.087,0.571-0.246c0.313-0.319,0.33-0.822,0.037-1.121l-2.461-2.528c-0.56-0.563-1.263-0.957-2.028-1.137c-0.175-0.041-0.331-0.176-0.382-0.349s-0.021-0.363,0.104-0.492l2.285-2.398c0.298-0.302,0.282-0.805-0.031-1.124C14.707,1.088,14.504,1,14.29,1z"></path></svg>
                        </SocialButton>
                    </div>
                </div>
            </div>

            {/* Avatar */}
            <div className='w-full flex justify-center items-center py-28 md:mb-0'>
                <div className='flex justify-center items-center'>
                    <div className='w-52 h-52 md:w-80 md:h-80'>
                        <div className='h-full w-full rounded-full border '>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopSection;