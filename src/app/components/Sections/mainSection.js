import React from 'react'
import ProjectSection from './projectSection'
import Label from '../label'
import Sidebar from '../sidebar'
import TechStack from './techStack'
import ResumeSection from './resumeSection'

function MainSection() {
  return (
    <section id="about" className='cursor-auto max-h-screen max-w-screen bg-bgcolor/90 md:rounded-t-xl scroll-smooth'>
      <div className='h-full w-full flex cursor-default p-4 md:p-6 gap-8 md:gap-6'>
        {/* SIDEBAR */}
        <aside className='w-min h-full md:w-[320px] sticky top-0 pt-4'>
          <Sidebar />
        </aside>

        <div className='h-full w-full'>
          <div className='w-full py-4 md:pr-4 md:py-6 space-y-8 '>
            {/** Project Section */}
            <ProjectSection />
            <TechStack />
            <ResumeSection/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainSection