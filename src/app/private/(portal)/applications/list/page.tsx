'use client';

import React from 'react'
import ApplicationCard from '../partials/ApplicationCard';

const Page = () => {
  return (
    <div className='externalUserApplicationListPage mt-4 h-full px-4'>
      {/* form headers */}
      <div className="headerText">
        <p className="subHeader text-[24px] text-darkGrey">
          Applications List
        </p>

        <p className='subText text-base mt-2 text-darkGrey'>Manage all your submitted and ongoing application forms here.</p>
      </div>

      {/* application cards */}
      <div className="applicationCards mt-10 bg-gradient-to-r from-primary/5 to-primary/10 grid grid-cols-3 gap-4 p-4">
        <ApplicationCard />
        <ApplicationCard />
        <ApplicationCard />
      </div>
    </div>
  )
}

export default Page
