import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="footer-container absolute overflow-hidden mt-auto py-3 bg-theme-300 border-t-4 bottom-0 border-white rounded-lg">
            <div className="relative z-10 mx-auto max-w-7xl px-2">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center">
                                <Logo width="100px" />
                            </div>
                            <div>
                                <p className="text-lg text-black">
                                    &copy; Copyright 2023. All Rights Reserved by Developer.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-s font-bold uppercase">
                                Company
                            </h3>
                            <ul>
                                <li className="mb-2">
                                    <Link
                                        className=" text-base font-medium"
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        className=" text-base font-medium"
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        className=" text-base font-medium"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium"
                                        to="/"
                                    >
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-s font-bold uppercase">
                                Support
                            </h3>
                            <ul>
                                <li className="mb-2">
                                    <Link
                                        className=" text-base font-medium"
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        className=" text-base font-medium"
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        className=" text-base font-medium"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium"
                                        to="/"
                                    >
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-s font-bold uppercase">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-2">
                                    <Link className=" text-base font-medium"
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link className=" text-base font-medium"
                                        to="/">                                    
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link className=" text-base font-medium"
                                        to="/">                                    
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Footer