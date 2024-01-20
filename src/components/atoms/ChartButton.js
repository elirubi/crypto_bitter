export default function ChartButton({onClick, label, active}){

    const isActive = active ? " bg-tertiary/50 text-whiteCustom" : " text-tertiary";

    return(

        <button className={"font-medium p-1 text-xs rounded-lg" + isActive} onClick={onClick}>{label}</button>
    )
}