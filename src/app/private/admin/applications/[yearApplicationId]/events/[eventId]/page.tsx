'use client';

import React, { useEffect, useState } from 'react'
import CustomNavTabs from '@/customComponents/CustomNavTabs'
import IconifyIcon from '@/customComponents/IconifyIcon'
import { cn } from '@/lib/utils'
import { useAppSettingsStore } from '@/store/appSettings'
import { set } from 'date-fns';
import EventDetailsView from './partials/EventDetailsView';
import ApplicationCandidatesView from './partials/ApplicationCandidatesView';
import EventsGradingView from './partials/EventsGradingView';


type TEventViews = 'Event Details' | 'Candidates' | 'Grading'

const eventViews: TEventViews[] = ['Event Details', 'Candidates', 'Grading']

const page = () => {
  const { updatenoMaxWidthStatus } = useAppSettingsStore()
  // this is a useeffect that updates the no max width status to true when the page is mounted
  useEffect(() => {
    updatenoMaxWidthStatus(true)
    return () => {
      updatenoMaxWidthStatus(false)
    };
  }, [])

  // current view state
  const [currentView, setcurrentView] = useState<TEventViews>('Event Details')
  const [views, setviews] = useState<TEventViews[]>(['Event Details', 'Candidates'])


  useEffect(() => {
    setviews(eventViews)
    return () => {
    }
  }, [])





  return (
    <div className='eventDetailPage'>
      {/* page header */}
      <div className="topBar border-b bg-white z-20 px-8 py-6 sticky top-0">
        <div className="barContents mx-auto maximum-width flex items-center justify-between w-full">
          {/* left side */}
          <div className="leftSide flex items-center gap-6">
            {/* back */}
            <div className="arrowBack size-8 rounded-full bg-gray-300 cursor-pointer">
              <IconifyIcon icon='ep:back' fontSize={14} />
            </div>
            {/* header details */}
            <div className="headerDetails">
              <div className='font-semibold text-2xl mb-1 flex items-center gap-4 divide-x'><span className='pr-4'> JHS Exams Session </span> <span className='font-thin text-base text-gray-500'>5th Grade</span></div>
              <p className='text-sm text-gray-500'>Monday, 5th 2025.</p>
            </div>
          </div>

          {/* right side */}
          <div className={cn("currentStatus px- pr-3 py-0.4 rounded-full bg-primary/10 flex items-center gap-2 text-primary")}>
            <IconifyIcon icon='icons8:checked' className='text-xs' />
            <p className='text-xs'>Sumbitted</p>
          </div>
        </div>
      </div>

      <div className="applicationContentDets mx-auto maximum-width px-4">
        {/* view tabs */}
        <div className="tabList my-6 h-[36px] sticky top-26 z-10 bg-[#f8f8fb] border-x-none w-full">
          <CustomNavTabs initialTab={currentView} clicked={(val: any) => { setcurrentView(val) }} tabs={views} />
        </div>


        {/* VIEWS */}

        <div className="viewsContainer pb-10 md:px-1">
          <div className="forms col-span-6">
            {/* Event details */}
            {currentView == 'Event Details' && <EventDetailsView />}
            {/* Application Candidates */}
            {currentView == 'Candidates' && <ApplicationCandidatesView />}
            {/* Grading */}
            {currentView == 'Grading' && <EventsGradingView />}
          </div>
        </div>

      </div>
    </div>
  )
}

export default page
