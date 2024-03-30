'use client';

import Category from '@/components/category';
import ContactComponent from '@/components/contact';
import HeroMainComponent from '@/components/heromain';
import HowToComponent from '@/components/howto';
import NavigationComponent from '@/components/nav';
import Price from '@/components/price';
import { useParams } from '@/node_modules/next/navigation';
import { useEffect, useRef } from 'react';

export default function Home() {

    const contactRef = useRef<HTMLDivElement>(null)
    const priceRef = useRef<HTMLDivElement>(null)
    const howToRef = useRef<HTMLDivElement>(null)
    const { hash } = useParams<{ hash: string }>()

    const handleContactClicked = () => {
        if (contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const handlePriceClicked = () => {
        if (priceRef.current) {
            priceRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const handleHowToClicked = () => {
        if (howToRef.current) {
            howToRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    useEffect(() => {
        if (hash === 'contact' && contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: 'smooth' });
        }

        if (hash === 'price' && priceRef.current) {
            priceRef.current.scrollIntoView({ behavior: 'smooth' });
        }

        if (hash === 'howto' && howToRef.current) {
            howToRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [hash]);

    return <div className='flex justify-center w-full bg-white h-full'>
        <div className='flex flex-col w-full md:px-[40px] 2xl:px-0 2xl:w-[1400px] items-center '>
            <NavigationComponent
                onContactClicked={handleContactClicked}
                onPriceClicked={handlePriceClicked}
                onHowToClicked={handleHowToClicked}/>
            <HeroMainComponent/>
            <Category/>
            <div ref={howToRef} id="howto" className="flex w-full">
                <HowToComponent/>
            </div>
            <div ref={priceRef} id="price" className="flex w-full">
                <Price/>
            </div>
            <div ref={contactRef} id="contact" className="flex w-full">
                <ContactComponent/>
            </div>
        </div>
    </div>

    // <a href="https://www.freepik.com/free-vector/forms-concept-illustration_12445722.htm#fromView=search&page=1&position=4&uuid=47867fa7-c3f9-4dfc-90f6-65e8592486f0">Image by storyset on Freepik</a>
    // <a href="https://www.freepik.com/free-vector/preferences-concept-illustration_7140417.htm#fromView=search&page=1&position=0&uuid=47867fa7-c3f9-4dfc-90f6-65e8592486f0">Image by storyset on Freepik</a>
    // <a href="https://www.freepik.com/free-vector/mail-sent-concept-illustration_5425970.htm#fromView=search&page=1&position=36&uuid=9b1ced5a-fa35-4318-9a78-bc649be24429">Image by storyset on Freepik</
    // <a href="https://www.freepik.com/free-vector/mobile-payments-concept-illustration_7140420.htm#fromView=search&page=1&position=38&uuid=fd3f450a-6350-49ba-b5f5-2cf3652f9152">Image by storyset on Freepik</a>a>
}