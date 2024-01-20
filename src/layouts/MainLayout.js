import Navbar from '@organisms/Navbar';

export default function MainLayout({children, header}){

    return(

        <div className="h-screen bg-secondary flex flex-col pt-6">

            {header}            

            <div className="bg-whiteCustom rounded-t-[30px] grow flex flex-col items-center gap-6 px-[24px]">

                {children}

            </div>

            <Navbar/>            

        </div>
    )
}