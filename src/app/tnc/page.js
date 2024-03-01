import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-700 my-5">
            Terms and Conditions
            </h1>
            <p className="mb-4">
            Welcome to NexGen Solutions! These Terms and Conditions govern your access to and use of our website and services. By accessing or using our website and services, you agree to comply with these Terms and Conditions and all applicable laws and regulations. If you do not agree with any part of these terms, please do not use our website or services.
            </p>
            <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-700 my-5">
            Use of Our Services:
            </h1>
            <p className="mb-4">
            You may use our website and services solely for lawful purposes and in accordance with these Terms and Conditions. You agree not to use our website or services in any way that violates any applicable laws or regulations, infringes upon the rights of others, or interferes with the operation of our website or services.
            </p>
            <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-700 my-5">
            Intellectual Property:
            </h1>
            <p className="mb-4">
            All content and materials available on our website, including but not limited to text, graphics, logos, images, videos, and software, are the property of NexGen Solutions or its licensors and are protected by copyright, trademark, and other intellectual property laws. You may not use, modify, reproduce, distribute, or transmit any content or materials from our website without prior written consent.
            </p>
            <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-700 my-5">
            Disclaimer of Warranties:
            </h1>
            <p className="mb-4">
            Our website and services are provided on an &quot;as is&quot; and &quot;as available&quot; basis without any warranties of any kind, express or implied. We do not warrant that our website or services will be uninterrupted, error-free, secure, or free of viruses or other harmful components.
            </p>
            <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-700 my-5">
            Limitation of Liability:
            </h1>
            <p className="mb-4">
            Under no circumstances shall NexGen Solutions, its affiliates, partners, officers, directors, employees, agents, or licensors be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising out of or in any way connected with your use of our website or services, even if advised of the possibility of such damages.
            </p>
            <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-700 my-5">
            Changes to These Terms and Conditions
            </h1>
            <p className="mb-4">
            We reserve the right to modify or replace these Terms and Conditions at any time without prior notice. Any changes will be effective immediately upon posting the updated Terms and Conditions on our website. Your continued use of our website and services after any such changes constitutes your acceptance of the revised Terms and Conditions.
            </p>
            <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-700 my-5">
            Contact Us:
            </h1>
            <p className="mb-4">
            If you have any questions, concerns, or requests regarding these Terms and Conditions, please contact us at contact@example.com.


            <br />
            <br />
            Thank you for choosing NexGen Solutions!
            </p>
            <Link href='/'>
                <button className="bg-transparent flex justify-center  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded transition ease-in duration-700 my-16">
                    Back to Home
                </button>
            </Link>
        </div>

    )
}

export default page