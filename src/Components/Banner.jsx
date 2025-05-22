import React from 'react';
import bookBanner from '../assets/banner1.webp'; 
import hikingCrew from '../assets/hiking_9zta.svg'; 
import scating from '../assets/skateboard_w3bz.svg'; 
import { Typewriter } from 'react-simple-typewriter';
import { Fade, Slide } from 'react-awesome-reveal';

const Banner = () => {
    return (
        <div className='h-fit'>
            <div className="carousel w-full h-fit">
                <div id="slide1" className="carousel-item relative w-full">
                    {/* carousel 1st */}
                    <div className='flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-7 my-4 md:my-6 lg:my-8 items-center'>
                        <div className='md:w-1/2'>
                            <Fade damping={0.2} cascade>
                                <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-primary my-3 md:my-5 lg:my-5'>
                                    <Typewriter
                                        words={['Your secret to an organized book club']} />
                                </h2>
                                <p className='text-xl md:text-2xl lg:text-3xl font-semibold text-secondary my-2 md:my-3 lg:my-4'>
                                    <Typewriter
                                        typeSpeed={60}
                                        deleteSpeed={40}
                                        loop
                                        cursor cursorBlinking
                                        words={['Start or Join the Book Club', 'Manage The book club', 'Organaized The Book']} />
                                </p>
                                <Slide direction='up'>
                                    <button className='btn btn-primary my-1 md:my-2 lg:my-3'>Join Now</button>
                                </Slide>
                            </Fade>
                        </div>
                        <div className='md:w-1/2'>
                            <img src={bookBanner} alt="" />
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    {/* carousel 2nd */}
                    <div className='flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-7 my-4 md:my-6 lg:my-8 items-center'>
                        <div className='md:w-1/2'>
                            <Fade damping={0.2} cascade>
                                <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-primary my-3 md:my-5 lg:my-5'>
                                    <Typewriter
                                        words={['A hiking crew,  also known as a hiking group.']} />
                                </h2>
                                <p className='text-xl md:text-2xl lg:text-3xl font-semibold text-secondary my-2 md:my-3 lg:my-4'>
                                    <Typewriter
                                        typeSpeed={60}
                                        deleteSpeed={40}
                                        loop
                                        cursor cursorBlinking
                                        words={['Start or Join the Hiking crew', 'Manage The hiking crew Group', 'a group of people who come together to hike and explore trails']} />
                                </p>
                                <Slide direction='up'>
                                    <button className='btn btn-primary my-1 md:my-2 lg:my-3'>Join Now</button>
                                </Slide>
                            </Fade>
                        </div>
                        <div className='md:w-1/2'>
                            <img src={hikingCrew} alt="" />
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    {/* carousel 3rd */}
                    <div className='flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-7 my-4 md:my-6 lg:my-8 items-center'>
                        <div className='md:w-1/2'>
                            <Fade damping={0.2} cascade>
                                <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-primary my-3 md:my-5 lg:my-5'>
                                    <Typewriter
                                        words={['A great hobby that includes skating is roller derby.']} />
                                </h2>
                                <p className='text-xl md:text-2xl lg:text-3xl font-semibold text-secondary my-2 md:my-3 lg:my-4'>
                                    <Typewriter
                                        typeSpeed={60}
                                        deleteSpeed={40}
                                        loop
                                        cursor cursorBlinking
                                        words={['Start or Join the scating derby', 'Manage The scating derby Group', 'Roller derby is a high-energy, full-contact sport played on roller skates.']} />
                                </p>
                                <Slide direction='up'>
                                    <button className='btn btn-primary my-1 md:my-2 lg:my-3'>Join Now</button>
                                </Slide>
                            </Fade>
                        </div>
                        <div className='md:w-1/2'>
                            <img src={scating} alt="" />
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    {/* carousel 4th */}
                    <div className='flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-7 my-4 md:my-6 lg:my-8 items-center'>
                        <div className='md:w-1/2'>
                            <Fade damping={0.2} cascade>
                                <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-primary my-3 md:my-5 lg:my-5'>
                                    <Typewriter
                                        words={['A hiking crew,  also known as a hiking group.']} />
                                </h2>
                                <p className='text-xl md:text-2xl lg:text-3xl font-semibold text-secondary my-2 md:my-3 lg:my-4'>
                                    <Typewriter
                                        typeSpeed={60}
                                        deleteSpeed={40}
                                        loop
                                        cursor cursorBlinking
                                        words={['Start or Join the Hiking crew', 'Manage The hiking crew Group', 'a group of people who come together to hike and explore trails']} />
                                </p>
                                <Slide direction='up'>
                                    <button className='btn btn-primary my-1 md:my-2 lg:my-3'>Join Now</button>
                                </Slide>
                            </Fade>
                        </div>
                        <div className='md:w-1/2'>
                            <img src={hikingCrew} alt="" />
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;