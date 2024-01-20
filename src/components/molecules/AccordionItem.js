import AccordionHeader from "@atoms/AccordionHeader";
import AccordionBody from "@atoms/AccordionBody";

export default function AccordionItems({first=false, last=false, title, body, active=false, onAccordionToggle}){

    function toggleAccordion(){
        onAccordionToggle();
    }

    return(

        <div>

            <AccordionHeader 
                title={title} 
                active={active} 
                first={first}
                last={last}
                onClick={toggleAccordion}
                                
            />

            <AccordionBody active={active} last={last}>
                {body}
            </AccordionBody>

        </div>
    )
}