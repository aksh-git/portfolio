import React from 'react'

function Label({ children }) {
    return (
        <div className='w-fit'>
            <div className='flex gap-4 font-semibold text-secondary text-2xl'>#{children}</div>
        </div>
    )
}

export default Label