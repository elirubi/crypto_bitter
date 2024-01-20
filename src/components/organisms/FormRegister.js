import PrimeButton from '@atoms/PrimeButton'
import SecondButton from '@atoms/SecondButton'

export default function FormRegister(){

    return(

        <div className='h-full flex flex-col '>

            <div className='mx-7 flex flex-col justify-evenly h-full'>

                <div>

                    <p className='text-tertiary font-medium mb-2 text-lg'>New account creation:</p>

                    <p className='text-tertiary text-lg'>Government regulations require us to ask and store the following information from you.</p>

                </div>

                <div>

                    <h2 className='text-tertiary/50 uppercase text-sm mb-4'>Requested informations</h2>

                    <ul className='text-sm'>

                        <li className='flex items-center gap-2'>
                            <i class="fa-solid fa-user"></i>                             <p>Full legal name, birthday, address</p>
                        </li>

                        <li className='flex items-center gap-2'>
                            <i class="fa-solid fa-id-card"></i>                           <p>ID</p>
                        </li>

                        <li className='flex items-center gap-2'>
                            <i class="fa-solid fa-camera"></i>                           <p>Photo</p>
                        </li>

                    </ul>

                </div>

            </div>            

            <div className='container flex flex-col gap-5 mb-7'>

                <PrimeButton to='/register/accessdata'>Agree and continue</PrimeButton>
                <SecondButton to='/login'>Log in your account</SecondButton>

            </div>

        </div>
    )
}