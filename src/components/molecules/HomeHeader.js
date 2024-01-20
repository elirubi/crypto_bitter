import UserImage from "@atoms/UserImage"

export default function HomeHeader({title}){

    function renderTitle(){

        return(

            <h1 className="text-tertiary font-semibold text-[40px] tracking-widest smallCaps"><span className="text-primary">{title[0]}</span>{title.slice(1)}</h1>

        )}

    return(

        <div className="flex flex-col mx-[24px]">

            <header className="flex items-center justify-between mb-16">

                <div>

                    {renderTitle()} 

                    <h2 className="text-tertiary/80 text-xl">
                        Welcome, <span className="font-medium">Name</span>
                    </h2> 

                </div>

                <UserImage/>
                
            </header>   

        </div>
    )
}