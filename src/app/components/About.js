import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


function About() {
  return (
    <section className="py-6 lg:py-6 bg-stone-100 font-poppins dark:bg-gray-200">
      <div className="max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-5 lg:w-1/2 lg:mb-0">
            <div className="lg:max-w-md">
              <div className="px-4 pl-4 mb-6 border-l-4 border-blue-500">
                <span className="text-sm text-purple-800 uppercase dark:text-purple-800">Who we are?</span>
                <h1 className="mt-2 text-3xl font-black text-purple-800 md:text-5xl dark:text-purple-800">
                  About Us
                </h1>
              </div>
              <p className="px-4 mb-10 text-base leading-7 text-black dark:text-black">
              Welcome to NexGen Solutions, where innovation meets efficiency to transform your business operations. As a leading provider of corporate services, we specialize in delivering tailored solutions designed to propel your company towards success in today&apos;s dynamic market landscape.
                <br />
              At NexGen, we understand the intricate needs of businesses, whether you&apos;re a budding startup or an established enterprise. Our comprehensive suite of services encompasses everything from strategic consulting to streamlined processes, empowering you to focus on what truly matters - driving growth and achieving your objectives.
              <br />
              With our team of seasoned professionals, cutting-edge technologies, and a commitment to excellence, we stand ready to be your trusted partner in navigating the complexities of the corporate world. From financial management to human resources and beyond, NexGen Solutions is your catalyst for sustainable success.
              </p>
              {/* <div className="flex flex-wrap items-center">
                <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div className="p-6 bg-white dark:dark:bg-teal-300">
                    <span className="text-blue-500 dark:text-blue-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="w-10 h-10" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                        <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                      </svg>
                    </span>
                    <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">2097</p>
                    <h2 className="text-sm text-gray-700 dark:text-gray-400">Projects and Plans</h2>
                  </div>
                </div>
                <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div className="p-6 bg-white dark:dark:bg-teal-300">
                    <span className="text-blue-500 dark:text-blue-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="w-10 h-10" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        <path fillRule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                        <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                      </svg>
                    </span>
                    <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">3,590</p>
                    <h2 className="text-sm text-gray-700 dark:text-gray-400">Helped people</h2>
                  </div>
                </div>
                <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div className="p-6 bg-white dark:bg-teal-300">
                    <span className="text-blue-500 dark:text-blue-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="w-10 h-10" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                    </span>
                    <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">74</p>
                    <h2 className="text-sm text-gray-700 dark:text-gray-400">Volunteer</h2>
                  </div>
                </div>
                <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                  <div className="p-6 bg-white dark:dark:bg-teal-300">
                    <span className="text-blue-500 dark:text-blue-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="w-10 h-10" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
                      </svg>
                    </span>
                    <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">100</p>
                    <h2 className="text-sm text-gray-700 dark:text-gray-400">Timing</h2>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <Image src='/about.jpg' alt='Photo' width='600' height='1000' />
            <Link href='/about'>
                    <button className="bg-transparent flex justify-center  hover:bg-purple-800 text-purple-800 font-semibold hover:text-white py-2 px-4 border border-purple-800 hover:border-transparent rounded transition ease-in duration-700 my-16">
                        Learn More
                    </button>
                </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default About;
