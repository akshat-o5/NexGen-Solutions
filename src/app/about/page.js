import React from 'react'
import Navbar from "../components/Navbar";
import Image from 'next/image';


function page() {
  return (
    <>


    {/* Navbar Starts */}
    <Navbar heading="About Us"/>
    {/* Navbar Starts */}

    

    {/* About Us Section Starts */}
    <div className='bg-gray-200 my-5'>
          <div className="2xl:container lg:py-16 lg:px-20 md:py-6 md:px-6 py-2 px-4 bg-gray-200">
            <div className="flex flex-col lg:flex-row justify-between gap-8  bg-gray-200">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-purple-800 pb-4">About Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">At NexGen Solutions, we are a dynamic team of forward-thinkers dedicated to revolutionizing the way businesses operate. With a passion for innovation and a commitment to excellence, we specialize in providing comprehensive corporate services tailored to meet the diverse needs of our clients.
                      <br />
                    Driven by a relentless pursuit of excellence, we strive to exceed expectations and deliver tangible results that propel our clients towards sustainable growth and success. With a focus on collaboration, integrity, and client-centricity, we stand as a trusted partner, empowering businesses to thrive in an ever-evolving landscape.</p>
                </div>
                <div >
                    <Image className="w-full h-full" src="/about.jpg" alt="A group of People" width={500} height={200}>

                    </Image>
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-purple-800 pb-4">Our Vision</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">Our vision is to be the leading provider of corporate services, known for our unparalleled commitment to excellence, innovation, and client satisfaction. We aspire to be the catalyst that transforms businesses, helping them navigate challenges, seize opportunities, and achieve sustainable growth in an increasingly competitive marketplace.</p>
                </div>
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                  <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-purple-800 pb-4">Our Mission</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">Our mission at NexGen Solutions is to empower businesses to realize their full potential by providing innovative, tailored solutions that drive efficiency, growth, and success. We are committed to delivering exceptional value to our clients through a combination of expertise, technology, and unwavering dedication to their success</p>
                </div>
            </div>
        </div>
    </div>

    {/* About Us Section Ends */}


<div>
  <hr />
</div>

    {/* About Us Section Starts */}
    <div className="bg-gray-200 py-24 sm:py-32 my-5">
  <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
    <div className="max-w-2xl">
      <h2 className="text-3xl font-bold tracking-tight text-purple-800 sm:text-4xl">Meet our leadership</h2>
      <p className="mt-6 text-lg leading-8 text-gray-600">At NexGen Solutions, our leadership team comprises visionary individuals who bring a wealth of experience, expertise, and dedication to the table. With a shared commitment to excellence and innovation, they drive our company forward, inspiring our team and guiding our clients towards success.</p>
    </div>
    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">




      <li>
        <div className="flex items-center gap-x-6">
          
          <Image className="h-16 w-16 rounded-full" src="/bg.jpg" alt="" height={64} width={64}>
          </Image>
          <div>
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
            <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
          </div>
        </div>
      </li>



      <li>
        <div className="flex items-center gap-x-6">
          
          <Image className="h-16 w-16 rounded-full" src="/bg.jpg" alt="" height={64} width={64}>
          </Image>
          <div>
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
            <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
          </div>
        </div>
      </li>



      <li>
        <div className="flex items-center gap-x-6">
          
          <Image className="h-16 w-16 rounded-full" src="/bg.jpg" alt="" height={64} width={64}>
          </Image>
          <div>
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
            <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
          </div>
        </div>
      </li>



      <li>
        <div className="flex items-center gap-x-6">
          
          <Image className="h-16 w-16 rounded-full" src="/bg.jpg" alt="" height={64} width={64}>
          </Image>
          <div>
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
            <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
          </div>
        </div>
      </li>



      <li>
        <div className="flex items-center gap-x-6">
          
          <Image className="h-16 w-16 rounded-full" src="/bg.jpg" alt="" height={64} width={64}>
          </Image>
          <div>
            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Leslie Alexander</h3>
            <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
          </div>
        </div>
      </li>

      
    </ul>
  </div>
</div>
    {/* About Us Section Ends */}




    </>
  )
}

export default page