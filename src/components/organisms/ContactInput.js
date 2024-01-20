import PrimeButton from '@atoms/PrimeButton';
import LabelInput from '@atoms/LabelInput';

export default function ContactInput(){

    return(

        <section className="container flex flex-col justify-evenly h-full mb-[150px]">

            <div className="flex flex-col text-start w-full">
                        
            <LabelInput
                label='Problem'
                id='problem'
                required={true}                
            />

                <select required name="problem" id="problem" className="text-sm h-[40px] px-4 w-full border border-tertiary rounded-full mt-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-inner shadow-tertiary/25">

                    <option selected disabled>Choose a problem</option>
                    <optgroup label="Wallet"></optgroup>
                    <option value="Wallet Home">Wallet home</option>
                    <option value="Movements">Movements</option>
                    <option value="Send">Send</option>
                    <option value="Receive">Receive</option>
                    <optgroup label="Market"></optgroup>
                    <option value="Market Home">Market home</option>
                    <option value="Buy">Buy</option>
                    <option value="Sell">Send</option>
                    <optgroup label="Profile">Profile</optgroup>
                    <option value="Profile Home">Profile home</option>
                    <option value="Edit password">Edit password</option>
                    <option value="Edit user data">Edit user data</option>                    
                    
                </select>
                            
            </div>

            <div>

            <LabelInput
                label='Description'
                id='description'
                required={true}                
            />

                <textarea name="description" id="description" rows="9" placeholder="Please describe your problem" className="text-sm px-4 w-full border border-tertiary rounded-[25px] mt-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-inner shadow-tertiary/25 pt-3"></textarea>

            </div>

            <PrimeButton to='/profile'>Confirm</PrimeButton>

        </section>
    )
}