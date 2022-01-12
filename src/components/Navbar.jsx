import React from 'react'

function Navbar() {
    return (
        <div className='flex flex-row p-4 text-gray-300 items-center justify-between'>
            <div className='flex items-center justify-center'>
                <img src="./assets/icons/logo-white.png" alt="logo" height={56} width={56}/>
                {/* <h2 className='text-white uppercase'>DREAMCOIL</h2> */}
            </div>
            <div className='flex items-center justify-between'>
                <div className='space-x-8 mr-16 font-medium'>
                    <span>Explore</span>
                    <span>Activity</span>
                    <span>Community</span>
                </div>
                <button className='bg-transparent border border-solid border-gray-300 px-4 py-2'>
                    Connect Wallet
                </button>
            </div>
        </div>
    )
}

export default Navbar
