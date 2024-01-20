export default function AccordionHeader({title, active, first=false, last=false, onClick}){

    let isActive = active ? "  bg-primary text-whiteCustom" : " bg-whiteCustom text-primary";
    let isFirst = first ? " rounded-t-3xl" : " ";
    let isLastActive = last && !active ? " rounded-b-3xl" : " ";

    let additionalClasses = isActive + isFirst + isLastActive;
    
    let accordionArrow = active ? " fa-angle-up" : " fa-angle-down";

    return(

        <h2 onClick={onClick}>

            <button className={"text-sm font-semibold flex justify-between items-center w-full p-6 shadow-tertiary/20 drop-shadow-[0_0px_4px_rgbA(7,26,30,0.2)]" + additionalClasses}>
                
                <span>{title}</span> 

                <i className={"fa-solid" + accordionArrow}></i>

            </button>
            
        </h2>
    )
}