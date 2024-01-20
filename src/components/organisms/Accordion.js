import { useState } from 'react';
import AccordionItem from "@molecules/AccordionItem";

export default function Accordion(){

    const [activeAccordionIndex, setActiveAccordionIndex] = useState(0);

    function handleAccordionToggle(index) {
      setActiveAccordionIndex(activeAccordionIndex === index ? null : index);
    }

    const accordionItems = [

        {title: "What is Bitcoin?", body: "Bitcoin is a cryptocurrency, a form of electronic cash. It is a decentralized digital currency without a central bank or single administrator that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries." },
        {title: "Is there any risk?", body: "Cryptocurrencies aren't backed by a government or central bank. Unlike most traditional currencies, such as the U.S. dollar, the value of a cryptocurrency is not tied to promises by a government or a central bank. If you store your cryptocurrency online, you don't have the same protections as a bank account."},
        {title:"How can I buy Bitcoin?", body:"The two main ways to buy bitcoin are through bitcoin wallet apps, like CryptoBitter, and cryptocurrency centralized exchanges that accept fiat currencies. Using a self-custodial bitcoin wallet app that accepts fiat is the safest because CEXs come with real risks related to control and security of your digital assets."},
    ]

    return(

        <section className='h-full w-full flex flex-col justify-center gap-2 mb-[115px]'>

            {
                accordionItems.map((item, index) => {

                    return(

                        <AccordionItem
                            key={index}
                            title={item.title}
                            body={item.body}
                            first={index == 0}
                            last={index == (accordionItems.length - 1)}
                            active={activeAccordionIndex === index}
                            onAccordionToggle={() => handleAccordionToggle(index)}
                        />
                        
                    )
                })
            }

        </section>

    )
}