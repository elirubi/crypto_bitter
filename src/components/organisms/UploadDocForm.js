import PrimeButton from "@atoms/PrimeButton"
import UploadID from "@molecules/UploadID"
import TakePhoto from "@molecules/TakePhoto"

export default function UploadDocForm(){

    return(    
        
        <section className="flex flex-col container justify-around h-screen mt-6">

            <form className='flex flex-col items-center container mb-4'>
                
                <div className="flex flex-col items-center justify-center w-full gap-10">

                    <UploadID/>

                    <TakePhoto/>
                                            
                </div>

            </form>

            <PrimeButton to='/register/end-register'>Next</PrimeButton>

        </section>
                
    )
}