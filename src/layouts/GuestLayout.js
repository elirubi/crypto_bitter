import GuestHeader from "@molecules/GuestHeader"

export default function GuestLayout({children, title='Register'}){

    return(

        <div className="h-screen bg-whiteCustom px-[24px] flex flex-col items-center justify-between pb-[50px]">

            <GuestHeader title={title}/>

            {children}

        </div>
    )
}