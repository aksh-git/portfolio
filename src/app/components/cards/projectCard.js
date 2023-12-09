import Image from 'next/image';
import React from 'react'

function ProjectCard(props) {

  const { title, description, banner_src } = props.data;

  return (
    <div className="w-full md:max-w-[250px] min-h-[14rem] shadow-lg bg-primary/10 backdrop-blur-sm rounded-lg z-1">
      <div className='rounded-sm p-4'>
        <Image className="w-full rounded-xl h-36 md:h-[7.5rem]" src={banner_src} alt={title + "-banner"} height={140} width={250} />
      </div>
      {/** BUTTONS */}
      <div className='-mt-10 w-full flex justify-end items-center px-4 gap-2 z-10'>
        {props.data.github_url && <div onClick={() => window.open(props.data.github_url)} className='has-tooltip bg-bgcolor hover:bg-primary  h-10 w-10 flex justify-center items-center rounded-xl cursor-pointer relative'>
          <svg xmlns="http://www.w3.org/2000/svg" widt20h="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
          <div className='tooltip shadow-lg bg-accent/30 backdrop-blur-sm rounded font-medium text-xs w-max flex items-center gap-2 px-3 mt-20 absolute right-0'>
            <div className='pt-2 pb-2 pr-2 border-r-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" x2="21" y1="14" y2="3" /></svg>
            </div>
            View Github
          </div>
        </div>}

        {props.data.live_url && <div onClick={() => window.open(props.data.live_url)} className='bg-bgcolor hover:bg-primary h-10 w-10 flex justify-center has-tooltip relative items-center rounded-xl cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe-2"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" /><path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17" /><path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" /><circle cx="12" cy="12" r="10" /></svg>
          <div className='tooltip shadow-lg bg-accent/30 backdrop-blur-sm rounded font-medium text-xs w-max flex items-center gap-2 px-3 mt-20 absolute right-0'>
            <div className='pt-2 pb-2 pr-2 border-r-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" x2="21" y1="14" y2="3" /></svg>
            </div>
            View Live
          </div>
        </div>}
      </div>

      <div className="px-4 -mt-2 h-24">
        <div className="font-bold text-xl md:text-base mb-2">{title}</div>
        <p className="text-secondary text-sm md:text-xs hyphens-auto">
          {description.length >= 130 ? description.slice(0, 135) + "..." : description}
        </p>
      </div>

      {props.data.techStack && <div className="px-4 pt-4 bottom-0 pb-2 text-xs justify-items-end">
        <span className='text-gray-600 font-semibold'>Tech Used - </span>
        <span className='text-secondary text-xs'>{
          props.data.techStack.map((t, index) => index === props.data.techStack.length - 1 ? `${t}` : `${t}, `)
        }</span>
      </div>}
    </div>
  )
}

export default ProjectCard