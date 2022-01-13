import React from 'react'
import ReactPlayer from 'react-player'
import BannerVid from './bannerbg.MP4';

function Banner() {
    return (
        <div className='relative flex min-h-75vh'>
            <div className='text-white w-2/4 flex flex-col justify-center px-12'>
                <h4 className='uppercase font-extralight'>make an impact</h4>
                <h2 className='text-4xl font-light mb-4'>Discover and contribute to the latest environmental projects</h2>
                <p className='text-xl font-light'>First decentralized social network with a misson to create a sustainable world</p>
                <div className='flex flex-col w-fit space-y-4 my-8'>
                    <button className='bg-transparent border border-solid border-gray-300 px-4 py-2 uppercase'>
                        Explore Projects
                    </button>
                    <button className='bg-white border border-solid border-gray-300 px-4 py-2 uppercase text-dc_blue'>
                        Login
                    </button>
                </div>
            </div>
            <div className='overflow-hidden fixed top-0 -z-10'>
                <ReactPlayer
                    height="100%"
                    width="100%"
                    muted
                    playing={true}
                    loop={true}
                    url={BannerVid}
                />
            </div>

        </div>
    )
}

export default Banner
