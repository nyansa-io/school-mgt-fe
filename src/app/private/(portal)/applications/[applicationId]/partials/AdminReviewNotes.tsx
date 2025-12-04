'use client';

import React from 'react'

const AdminReviewNotes = () => {
    return (
        <div className='bg-white p-4 rounded-lg shadow'>
            <div className="headerTexts">
                <div className="headerText flex items-center gap-4">
                    {/* <ShieldUserIcon className='w-' /> */}
                    <p className='font-semibold '>
                        Admin Review Notes
                    </p>
                </div>
                <p className="subheader text-sm text-gray-500">
                    These are notes made by the admin during the review of the application.
                </p>
            </div>

            <div className="notes mt-4 bg-gray-50 p-4 test-sm">
                    {'No notes available.'}
            </div>
        </div>
    )
}

export default AdminReviewNotes
