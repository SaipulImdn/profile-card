import React from 'react';
import Image from 'next/image';
import heroImg from '../public/images/Hero-img.png';
import rubick from '../public/images/RoundCube-Orange-Glossy.png';
import ball from '../public/images/Sphere-White-Matte.png';
import pill from '../public/images/SuperToroid-Purple-Glossy.png';
import arrow from '../public/images/arrow.png';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <div className='container mx-auto w-5/6 flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center min-h-screen pt-24 md:pt-10'>
        {/* left col */}
        <div className="text-color-white z-10">
            <h1 className='text-3xl lg:leading-[80px] md:text-6xl text-center lg:text-left'>
                Hello! I'm Syaiful. <br/> A <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#EF4444]'>BackEnd</span><span className='text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#EC4899]'> Developer</span>
            </h1>
            <p className='max-w-lg mx-auto lg:max-w-none text-center my-5 lg:text-left'>Passionate in Backend Dev. 
                Likes to build fast-performance and well-designed website interfaces using the latest technologies.
            </p>
            <button className='bg-[#F2672E] hover:bg-[#D65926] transition duration-300 rounded-[4px] px-8 py-4 mb-12 font-semibold block mx-auto lg:inline'>
                <Link href='portfolio' className='flex items-center'>
                    View Portfolio
                    <div className="ml-3">
                        <Image
                            src={arrow}
                            width={25}
                            alt='image'
                        />
                    </div>
                </Link>
            </button>
            <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/syaiful-imanudin-a6a60926a/" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/images/linkedin-icon.png"
                        alt="LinkedIn Icon"
                        width={55}
                        height={55}
                    />
                </a>
                <a href="https://www.instagram.com/saipulimdn/?hl=id" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/images/instagram-icon.png"
                        alt="Instagram Icon"
                        width={55}
                        height={55}

                    />
                </a>
            </div>
        </div>
        {/* right col */}
        <div className='text-color-white w-full md:w-3/5 z-10 relative'>
            <Image
                src={heroImg}
                alt="image"
                priority
            />
            <div className="absolute w-20 inset-y-0 inset-x-1/3 animate-softShake">
                <Image
                    src={rubick}
                    alt="image"
                />
            </div>
            <div className="absolute w-24 bottom-1/4 right-0 animate-hardShake">
                <Image
                    src={ball}
                    alt="image"
                />
            </div>
            <div className="absolute w-28 left-0 bottom-0 animate-mediumShake">
                <Image
                    src={pill}
                    alt="image"
                />
            </div>
        </div>
    </div>
  )
}
