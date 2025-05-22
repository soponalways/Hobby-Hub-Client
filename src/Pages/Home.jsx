import React from 'react';
import Banner from '../Components/Banner';
import BookMarkedCard from '../Components/BookMarkedCard';
import HowItWorksCard from '../Components/HowItWorksCard';

const Home = () => {
    return (
        <div>
            <header>
                <Banner></Banner>
            </header>
            <main>
                <section className='space-y-2 md:space-y-3'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold md:font-bold mt-3 md:mt-5'>Bookmarks </h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5  my-4 md:my-6 lg:my-8'>
                        <BookMarkedCard
                            h2="Exactly the app our book club needed"
                            p='We can keep track of all the books we’ve read, see the one we are currently reading, post meet up info and there are discussion questions in the app! Love it!'
                        ></BookMarkedCard>
                        <BookMarkedCard
                            h2="Shared Interest"
                            p="The core element is a shared passion for hiking, exploring trails, and being outdoors. "
                        ></BookMarkedCard>
                        <BookMarkedCard
                            h2={"Potential for Different Focuses"}
                            p={"Some crews may specialize in specific types of hiking, like women's hiking crews, or focus on social wellness. "}
                        ></BookMarkedCard>
                    </div>
                </section>

                <section className='space-y-2 md:space-y-3'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold md:font-bold mt-3 md:mt-5'>How it works? </h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5 my-4 md:my-6 lg:my-8'>
                        <HowItWorksCard
                            count="01"
                            h2="sign up / login"
                            p="First of all create a account on Hobby Hub website or login"
                        ></HowItWorksCard>
                        <HowItWorksCard
                            count={"02"}
                            h2={"Choose Hobby"}
                            p={"Choose the hobby group on your own Hobby. and then join the hobby based group"}
                        ></HowItWorksCard>
                        <HowItWorksCard
                            count={"03"}
                            h2={"Build Community"}
                            p={"Add the hobby group and then create or build your hobby Community"}
                        ></HowItWorksCard>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;