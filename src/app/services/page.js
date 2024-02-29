import React from 'react'
import Navbar from "../components/Navbar";


function page() {
  return (
    <>

      {/* Navbat starts */}
      <Navbar heading="Services" />
      {/* Navbat ends */}



      {/* Services starts */}
      <div className='my-5 bg-gray-200'>
  <section id="features" className="container mx-auto px-4 space-y-6 bg-gray-200 py-8 dark:bg-gray-200 md:py-12 lg:py-20">

    <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">

      <h2 className="font-bold text-3xl text-purple-800 leading-[1.1] sm:text-3xl md:text-6xl">Services Catalogue</h2>

      <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
        The product can personalize user experiences by understanding individual preferences and tailoring
        recommendations or content based on user behavior and historical data.
      </p>

    </div>

    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">

      <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
        <div className="flex h-[180px] flex-col justify-between rounded-md p-6 shadow-2xl shadow-gray-700">
          <div className="space-y-2">
            <h3 className="font-bold">Website Development</h3>
            <p className="text-sm text-muted-foreground">Crafting dynamic and user-centric websites tailored to your brand&apos;s unique identity, ensuring seamless functionality and captivating design.</p>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
        <div className="flex h-[180px] flex-col justify-between rounded-md p-6 shadow-2xl shadow-gray-700">
          <div className="space-y-2">
            <h3 className="font-bold">SEO Management</h3>
            <p className="text-sm">Boosting your online visibility and driving organic traffic through strategic SEO tactics, optimizing your website for higher search engine rankings and increased brand exposure.</p>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
        <div className="flex h-[180px] flex-col justify-between rounded-md p-6 shadow-2xl shadow-gray-700">
          <div className="space-y-2">
            <h3 className="font-bold">Business Consultancy</h3>
            <p className="text-sm text-muted-foreground">Guiding businesses through challenges and opportunities with expert advice and strategic insights, empowering decision-makers to navigate complexities and achieve sustainable growth.</p>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
        <div className="flex h-[180px] flex-col justify-between rounded-md p-6 shadow-2xl shadow-gray-700">
          <div className="space-y-2">
            <h3 className="font-bold">Digital Marketing</h3>
            <p className="text-sm text-muted-foreground">Executing result-driven digital marketing campaigns across diverse channels, leveraging data-driven strategies to enhance brand awareness, engage audiences, and drive conversions.</p>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
        <div className="flex h-[180px] flex-col justify-between rounded-md p-6 shadow-2xl shadow-gray-700">
          <div className="space-y-2">
            <h3 className="font-bold">Data Analytics</h3>
            <p className="text-sm text-muted-foreground">Unleashing the power of data to derive actionable insights and make informed business decisions.</p>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
        <div className="flex h-[180px] flex-col justify-between rounded-md p-6 shadow-2xl shadow-gray-700">
          <div className="space-y-2">
            <h3 className="font-bold">IT Solutions</h3>
            <p className="text-sm text-muted-foreground">Providing cutting-edge IT solutions to optimize infrastructure, enhance security, and drive technological advancement.</p>
          </div>
        </div>
      </div>

    </div>

  </section>
</div>

      
      {/* Services ends */}

    <div>
      <hr />
    </div>


      {/* Why Choose Us Section starts */}
      <div className="antialiased flex justify-center items-center h-full pt-20 pb-20 bg-gray-200 my-5">
        <div className=" flex rounded-lg bg-white shadow-md overflow-hidden">
          <div className="p-4 bg-purple-800 w-56">
            <div className="text-white text-2xl">Why Choose Us?</div>

          </div>
          <div className="p-4">
            <div className="flex justify-between">
              <div className="pt-1 pl-32">

              </div>
            </div>
            <div className="text-xl text-purple-900 flex flex-wrap">
              <ol className="list-disc mx-3">
                <li>Our team brings years of industry experience and specialized knowledge to every project.</li>
                <li>We understand that one size doesn&apos;t fit all, offering customized services to meet your unique needs.</li>
                <li>We go above and beyond to deliver exceptional results and exceed client expectations.</li>
                <li>Our portfolio showcases successful projects and satisfied clients across various industries.</li>
                <li>Your satisfaction is our top priority, and we&apos;re dedicated to providing attentive, personalized service every step of the way.</li>
              </ol>
            </div>
          </div>
        </div>

      </div>
      {/* Why Choose Us Section ends */}




    </>
  )
}

export default page





