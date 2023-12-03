'use client';

import Link from 'next/link';


function SocialButton({ children, altText, url }) {

    return (
        <div className='h-16 w-16 md:w-14 md:h-14 has-tooltip'>
            <Link className='cursor-none' href={`http://${url}`} target='_blank'>
                <div className='w-full h-full button flex justify-center items-center transition-all duration-200 border-0 border-transparent hover:border-accent hover:border-2 rounded-full  hover:scale-95'>
                    <div className='bg-primary p-3 rounded-full'>
                        {children}
                    </div>
                </div>
            </Link>
            <div className='tooltip shadow-lg bg-accent rounded  font-medium text-sm flex items-center gap-2 px-3'>
                <div className='pt-2 pb-2 pr-2 border-r-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" x2="21" y1="14" y2="3" /></svg>
                </div>
                {altText}
            </div>
        </div>
    )
}

export default SocialButton;