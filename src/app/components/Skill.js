import React from 'react'

function SkillIcon({ children, tag }) {
    return (
        <div className='has-tooltip relative cursor-pointer outline-none'>
            <div className='rounded-lg flex justify-center items-center'>
                {children}
            </div>
            <div className='w-max tooltip shadow-lg bg-primary rounded  font-medium text-sm flex items-center gap-2 px-3 p-1 absolute -left-1/3 mt-1'>
                <span className='w-max'>{tag}</span>
            </div>
        </div>
    )
}

export default SkillIcon