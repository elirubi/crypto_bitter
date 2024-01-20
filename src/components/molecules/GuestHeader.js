export default function GuestHeader({title}){

    function renderTitle(){

        return(

            <h1 className="text-tertiary font-semibold text-[40px] tracking-widest smallCaps"><span className="text-primary">{title[0]}</span>{title.slice(1)}</h1>

        )}

    return(

        <header className="text-center mt-[50px] flex flex-col items-center">

            <img className="w-[130px]" src="/media/logo_bello.png" alt="logo" />

            {renderTitle()}            

        </header>
    )
}