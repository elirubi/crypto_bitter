export default function AccordionBody({children, active, last=false}){

    let isActive = active ? " " : " hidden";
    let isLast = last ? " rounded-b-[25px]" : " ";

    let additionalClasses = isActive + isLast;
    
    return(

        <div className={"bg-whiteCustom shadow-lg drop-shadow-[0_0px_4px_rgbA(7,26,30,0.2)]" + additionalClasses}>

            <p className=' text-tertiary p-4 text-sm'>{children}</p>

        </div>  

    )

}