import FormInput from "@molecules/FormInput"
import PrimeButton from "@atoms/PrimeButton"

export default function UserDataForm(){

    return(    
        
        <section className="cointainer flex flex-col h-screen gap-8 mb-8">

            <form className='flex flex-col h-full container justify-center items-center gap-4'>

                <FormInput
                    label='Name'
                    placeholder='Enter your name'
                    id='name'
                    required='true'
                />

                <FormInput
                    label='Surname'
                    placeholder='Enter your surname'
                    id='Surname'
                    required='true'
                />

                <FormInput
                    label='Birthday'
                    placeholder='dd/mm/yyyy'
                    id='Birthday'
                    type='date'
                    required='true'
                />

                <FormInput
                    label='Address'
                    placeholder='Enter your address'
                    id='Address'
                    required='true'
                />

                <div className="flex grid-cols-2 gap-5">

                    <FormInput
                        label='City'
                        placeholder='Enter your city'
                        id='City'
                        required='true'
                    />

                    <FormInput
                        label='Postal Code'
                        placeholder='Enter your postal code'
                        id='Postal Code'
                        type='number'
                        required='true'
                        pattern="[0-9]{5}"
                    />
                    
                </div>                

            </form>

            <PrimeButton to='/register/upload-doc'>Next</PrimeButton>

        </section>
                
    )
}