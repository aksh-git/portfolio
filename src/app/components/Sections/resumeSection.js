import React from 'react'
import Label from '../label'
import Image from 'next/image'
import Link from 'next/link'

function ResumeSection() {
    return (
        <section id="resume" className='min-h-screen bg-bgcolor p-4 rounded-xl'>
            <Label>Resume</Label>
            <div className='w-full mt-4 space-y-10'>
                {/* Introduction */}
                <div className='w-full md:flex gap-4 max-w-4xl'>
                    <div className='w-[12rem] md:w-[26rem] flex justify-center items-center'>
                        <div className='w-ful flex items-center justify-center  rounded-full p-2'>
                            <Image width={420} height={420} src={"/images/sample_user_icon.png"} alt="avatar" />
                        </div>
                    </div>
                    <div className='space-y-1'>
                        <div className='text-4xl font-normal font-sans'>Akash Yadav</div>
                        <div className='text-lg md:text-xl font-light font-sans /85'>Full Stack Developer | Backend Spl.</div>
                        <div className='text-base md:text-base font-normal font-sans /90'><p>Innovative Full Stack Developer and Cybersecurity Enthusiast fluent in Java, Python and MERN Stack. Specializing in Backend Development, proficient in Reverse Engineering, with a passion for bridging tech and security, dedicated to making a meaningful impact in the tech world.</p></div>
                    </div>
                </div>

                <div className='w-full bg-accent/10 p-2'>
                    <div className='max-w-4xl md:p-2 px-4'>
                        <div className='flex flex-wrap gap-4 md:gap-12'>

                            <Link href="mailto:ydevakash@outlook.com" className='cursor-pointer hover:bg-secondary/5 rounded-lg'>
                                <div className='flex gap-3 justify-start items-center md:px-4 py-1 '>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                    <div className='font-sans font-medium text-lg'>ydevakash@outlook.com</div>
                                </div>
                            </Link>


                            <div className='md:px-4 py-1 flex gap-3 justify-start items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                <div className='font-sans font-medium text-lg'>New Delhi, India</div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='w-full'>
                    <div className='w-full md:flex flex-wrap gap-12 space-y-8 md:space-y-0'>
                        {/* EDUCATION */}
                        <div className='w-fit space-y-6'>
                            <div className='w-fit'>
                                <div className='flex gap-4 font-bold font-sans text-secondary/90 text-xl'>EDUCATION</div>
                            </div>

                            <div className='space-y-6'>
                                <div className='flex w-full gap-6 justify-start'>
                                    <div className='w-8 h-5 border-b-2 border-accent'></div>
                                    <div className='w-fit space-y-1'>
                                        <div className='text-xl font-sans font-semibold'>Bachelor&apos;s in Computer Science</div>
                                        <div className='text-xl font-sans font-thin'>Punjab Technical University</div>
                                        <div className='text-sm md:text-base font-sans font-extralight italic text-gray-600'>05/2020 - 07/2023</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ACHIEVEMENTS */}
                        <div className='w-fit space-y-6 md:max-w-lg'>
                            <div className='w-fit '>
                                <div className='flex gap-4 font-bold font-sans text-secondary/90 text-xl'>ACHIEVEMENTS</div>
                            </div>

                            <div className='space-y-6'>
                                <div className='w-fit space-y-2'>
                                    <div className='text-xl font-sans font-semibold'>Code Crack Tech Competition - 1st Place</div>
                                    <div className='text-sm md:text-base font-sans font-medium italic text-gray-500 hyphens-auto'>Secured top honors in the technical category in the Code Crack event during college festival. Conquered rounds in general aptitude, reasoning,and problem-solving, earning a coveted trophy for outstanding technical prowess.</div>
                                </div>

                                <div className='w-fit space-y-2'>
                                    <div className='text-xl font-sans font-semibold'>ISRO Online Bootcamp on Satellite-Based Navigation</div>
                                    <div className='text-sm md:text-base font-sans font-medium italic text-gray-500 hyphens-auto'>Completed a 15-day online bootcamp organized by the Indian Institute of Remote Sensing (ISRO, Department of Space, Government of India). Gained profound insights into satellite-based navigation, with practical applications in data processing algorithms, and systems integration. This experience enhances problem-solving skills and expands the scope for innovative solutions in the ever-evolving field of computer science.</div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>


                <div className='w-full'>
                    <div className='w-full lg:flex flex-wrap gap-16 space-y-8 md:space-y-0'>
                        <div className='w-fit space-y-6'>
                            <div className='w-fit'>
                                <div className='flex gap-4 font-bold font-sans text-secondary/90 text-xl'>LANGUAGES</div>
                            </div>

                            <div className='w-fit space-y-2'>
                                <div className='md:flex flex-wrap space-y-4 md:space-y-0 md:space-x-24'>
                                    <div className='flex flex-col'>
                                        <span className='font-sans text-lg md:text-xl font-semibold'>Hindi</span>
                                        <span className='font-sans text-sm md:text-base italic text-gray-500'>Native or Bilingual Proficiency</span>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='font-sans text-lg md:text-xl font-semibold'>English</span>
                                        <span className='font-sans text-sm md:text-base italic text-gray-500'>Full Professional Proficiency</span>
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='font-sans text-lg md:text-xl font-semibold'>Japanese</span>
                                        <span className='font-sans text-sm md:text-base italic text-gray-500'>Limited Working Proficiency</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full'>
                    <div className='w-full lg:flex flex-wrap gap-16 space-y-8 md:space-y-0'>
                        <div className='w-fit space-y-8'>
                            <div className='w-fit'>
                                <div className='flex gap-4 font-bold font-sans text-secondary/90 text-xl'>INTERESTS</div>
                            </div>

                            <div className='w-fit space-y-2'>
                                <div className='flex flex-wrap gap-4 md:space-x-4 '>
                                    <div className='text-sm py-2 px-6 border font-sans font-semibold  border-gray-600 rounded-lg'>Gardening</div>
                                    <div className='text-sm py-2 px-6 border font-sans font-semibold  border-gray-600 rounded-lg'>Astronomy</div>
                                    <div className='text-sm py-2 px-6 border font-sans font-semibold border-gray-600 rounded-lg'>Old Music</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ResumeSection