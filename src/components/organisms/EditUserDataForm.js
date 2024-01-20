import FormInput from "@molecules/FormInput"
import PrimeButton from "@atoms/PrimeButton"

export default function EditUserDataForm(){

    return(    
        
        <section className="flex flex-col container gap-10">

            <form className='flex flex-col items-center mt-5 gap-3 container'>

                <FormInput
                    label='Name'
                    placeholder='Enter your name'
                    id='name'
                    required='true'
                    value='Elisa'                   
                />

                <FormInput
                    label='Surname'
                    placeholder='Enter your surname'
                    id='Surname'
                    required='true'
                    value='Rubin'                    
                />

                <FormInput
                    label='Birthday'
                    placeholder='dd/mm/yyyy'
                    id='Birthday'
                    type='date'
                    required='true'
                    value='1994-09-08'                   
                />

                <FormInput
                    label='Address'
                    placeholder='Enter your address'
                    id='Address'
                    required='true'
                    value='Via i Bug, 100'                    
                />

                <div className="flex grid-cols-2 gap-5">

                    <FormInput
                        label='City'
                        placeholder='Enter your city'
                        id='City'
                        required='true'
                        value='Turin'                        
                    />

                    <FormInput
                        label='Postal Code'
                        placeholder='Enter your postal code'
                        id='Postal Code'
                        type='number'
                        required='true'
                        value='10100'                                       
                    />
                    
                </div>

            </form>

            <PrimeButton to='/profile'>Confirm</PrimeButton>

        </section>
                
    )
}