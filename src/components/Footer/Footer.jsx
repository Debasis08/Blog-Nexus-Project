import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className=" md:w-full md:h-60 overflow-hidden mt-auto py-3 bg-theme-300 border-t-4 bottom-0 border-white rounded-lg">
            <div className="mx-auto max-w-7xl px-2">
                <div className=" lg:m-0 m-3 lg:items-center flex flex-wrap md:flex-no-wrap">
                    
                    <div className="flex lg:items-center w-full md:w-1/2">
                        <div className="h-full w-1/2">
                            <h3 className="tracking-px text-center mb-9 md:mb-3 md:mt-8 text-sm font-semibold uppercase">
                                Company
                            </h3>
                            <ul className=' text-sm text-center'>
                                <li className="mb-2">
                                    <Link
                                        className=""
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        className=" "
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        className=" "
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=""
                                        to="/"
                                    >
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    
                        <div className="h-full w-1/2">
                            <h3 className="tracking-px md:mb-3 md:mt-8 mb-9 text-s text-center font-semibold uppercase">
                                Support
                            </h3>
                            <ul className="text-sm text-center">
                                <li className='mb-2'>
                                    <Link
                                        className=""
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        className=""
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        className=""
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=""
                                        to="/"
                                    >
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex mt-14 md:mt-0">
                        <div className="h-full w-1/2">
                            <h3 className="tracking-px md:mb-3 md:mt-8 mb-9 text-s text-center font-semibold uppercase">
                                Legals
                            </h3>
                            <ul className='text-sm text-center text-medium'>
                                <li className="mb-2">
                                    <Link
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        to="/">                                    
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/">                                    
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="flex h-full w-1/2 flex-col lg:mt-5 text-center">
                            <div className="mb-4 mx-auto w-28 md:w-40 flex justify-center">
                                <Link to='/'>
                                    <Logo/>
                                </Link>
                            </div>
                            <div>
                                <p className="text-sm md:text-xs text-black">
                                    &copy; Copyright 2023. All Rights Reserved by Developer.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Footer