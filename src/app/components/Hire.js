import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const cardData = [
    {
        title: 'Strategic Consulting',
        imageSrc: '/bg.jpg',
        description: 'Harnessing expertise to devise innovative strategies tailored to your business goals.'
    },
    {
        title: 'Digital Transformation',
        imageSrc: '/bg.jpg',
        description: 'Driving digital innovation to modernize your operations and stay ahead in the digital age.'
    },
    {
        title: 'Hire Us For UI/UX Design',
        imageSrc: '/bg.jpg',
        description: 'Crafting intuitive and visually captivating UI/UX designs to elevate user experiences and drive engagement.'
    }
];

function Card({ title, imageSrc, description }) {
    return (
        <div className="max-w-sm bg-purple-800 border border-purple-800 rounded-lg shadow dark:bg-purple-400 dark:border-gray-700 my-4">
            <Image className="rounded-t-lg" src={imageSrc} alt="" width={500} height={300} />

            <div className="p-5">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-grey">{title}</h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-600">{description}</p>
            </div>
        </div>
    );
}



export default function Hire() {
    return (
        <>
            <h1 className="mt-2 text-3xl font-black flex justify-center text-purple-800 md:text-5xl">
                  Hire Us For
                </h1>
            <div className="flex flex-wrap justify-center space-x-6 mx-4 ">
                {cardData.map((data, index) => (
                    <Card key={index} {...data} />
                ))}
            </div>
            <div className="flex justify-center my-3">
                <Link href='/services'>
                    <button className="bg-transparent flex justify-center mb-3  hover:bg-purple-800 text-purple-800 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded transition ease-in duration-700">
                        View More
                    </button>
                </Link>
            </div>
        </>
    );
}
