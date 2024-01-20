export default function EyeIcon({code='', dark}){

    const isDark = dark ? ' border-tertiary/70 text-tertiary/70' : ' border-whiteCustom/70 text-whiteCustom/70';

    return(

        <i className={`fa-solid fa-eye${code} absolute -top-4 right-0 border h-8 w-8 rounded-lg flex items-center justify-center ` + isDark}></i>

    )
}