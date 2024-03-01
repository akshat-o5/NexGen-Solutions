import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-700 my-5">
            Privacy Policy
            </h1>
            <p className="mb-4">
                At NexGen Solutions, we value the trust you place in us when you use our website and services. We are committed to protecting your privacy and the security of your personal information. This privacy policy outlines how we collect, use, disclose, and protect your information.
            </p>
            <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-700 my-5">
            Information We Collect:
            </h1>
            <p className="mb-4">
            We may collect personal information from you when you interact with our website, register for an account, subscribe to our newsletter, or engage with our services. This information may include your name, email address, phone number, company information, and any other information you voluntarily provide to us.
            </p>
            <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-700 my-5">
            How We Use Your Information:
            </h1>
            <p className="mb-4">
            We use the information we collect to provide, maintain, and improve our services, communicate with you about our products and promotions, personalize your experience, and respond to your inquiries and requests. We may also use your information to analyze trends, track user activity, and comply with legal obligations.
            </p>
            <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-700 my-5">
            Information Sharing and Disclosure:
            </h1>
            <p className="mb-4">
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or as necessary to provide our services. We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you, provided they agree to keep your information confidential.
            </p>
            <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-700 my-5">
            Data Security:
            </h1>
            <p className="mb-4">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, disclosure, alteration, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
            <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-700 my-5">
            Updates to This Policy:
            </h1>
            <p className="mb-4">
            We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically for any updates. Your continued use of our website and services after any changes to this policy will constitute your acceptance of those changes.
            </p>
            <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-700 my-5">
            Contact Us:
            </h1>
            <p className="mb-4">
            If you have any questions, concerns, or requests regarding our privacy practices or this policy, please contact us at contact@example.com.
            <br />
            <br />
            Thank you for trusting NexGen Solutions with your personal information.
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