
import Link from 'next/link'
import React from 'react'

function Connect() {
  return (

    <div className="py-4">
    <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between text-black">
            <div className="md:w-2/3">
            <h1 className="mt-2 text-3xl font-black text-purple-800 md:text-5xl dark:text-purple-800 my-5">
                  Connect with Us
                </h1>
                <p className="text-lg mb-8">Connect with us for all your business needs and consultancy services. Whether you&apos;re looking to develop a stunning website that reflects your brand identity, create engaging user interfaces and experiences, or devise effective marketing strategies to reach your target audience, we&apos;ve got you covered. Our team of experts is dedicated to understanding your unique requirements and providing tailored solutions to help you achieve your business goals. With our extensive experience and innovative approach, we&apos;ll work closely with you to deliver results that exceed your expectations. Let&apos;s collaborate and take your business to new heights together. Reach out to us today to get started!</p>
            </div>
            <div className="md:w-1/3">
            <Link href='/about'>
                    <button className="bg-transparent flex justify-center  hover:bg-purple-800 text-purple-800 font-semibold hover:text-white py-2 px-4 border border-purple-800 hover:border-transparent rounded transition ease-in duration-700 my-16">
                        Connect
                    </button>
                </Link>
            </div>
        </div>
    </div>
</div>


  )
}

export default Connect