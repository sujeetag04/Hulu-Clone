import React from 'react'
import { CgFacebook } from 'react-icons/cg'
import { AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
    return (
        
            <footer className="px-14 divide-y dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                    <div className="lg:w-1/3 flex flex-col space-y-5">
                        <div className='flex items-center space-x-4 whitespace-nowrap'>
                            <p className='cursor-pointer hover:text-white'>About Hulu</p>
                            <p className='cursor-pointer hover:text-white'>Terms Of Use</p>
                            <p className='cursor-pointer hover:text-white'>Privacy Policy</p>
                            <p className='cursor-pointer hover:text-white'>FAQ</p>
                            <p className='cursor-pointer hover:text-white'>Feedback</p>
                            <p className='cursor-pointer hover:text-white'>Careers</p>
                        </div>
                        <p className='text-xs'>&copy; {new Date().getFullYear()} HULU. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.</p>
                    </div>
                   
                        
                        <div className="space-y-2">
                            <div className="dark:text-gray-50">Connect with us</div>
                            <div className="flex justify-start space-x-2">
                                <a rel="noopener noreferrer" target={'_blank'} href="https://www.facebook.com/hulu/" title="Facebook" className="p-2 bg-[#0C111B] hover:bg-[#1F80E0]">
                                    <CgFacebook className="w-6 h-6 fill-current">
                                    </CgFacebook>
                                </a>
                                <a rel="noopener noreferrer" target='_blank' href="https://twitter.com/hulu" title="Twitter" className="p-2 bg-[#0C111B] hover:bg-[#1F80E0]">
                                    <AiOutlineTwitter className="w-6 h-6 fill-current">
                                    </AiOutlineTwitter>
                                </a>
                            </div>
                        </div>


                        <div className="">
                            <div className=" dark:text-gray-50 ">Hulu App</div>
                            <div className="flex justify-start">
                                <a rel="noopener noreferrer" target={'_blank'} href="https://play.google.com/store/apps/details?id=com.hulu.plus" title="Facebook" className="p-0 -ml-2">
                                    <img src='/google-play.png' className="h-12">
                                    </img>
                                </a>
                                <a rel="noopener noreferrer" target={'_blank'} href="https://apps.apple.com/us/app/hulu-stream-shows-movies/id376510438" title="Facebook" className="p-0 -mx-2">
                                    <img src='/app-store.png' className="h-12">
                                    </img>
                                </a>
                            </div>
                        </div>
                    
                </div>
                
            </footer>
      
    )
}

export default Footer