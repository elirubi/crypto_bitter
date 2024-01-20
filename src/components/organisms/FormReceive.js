import FormInput from '@molecules/FormInput';
import ShareButton from '@atoms/ShareButton';

export default function FormReceive(){
    
    return(

        <section className='w-full h-full flex flex-col items-center justify-evenly mb-40'>

            <img className='w-[160px]' src="/media/qrcode.png" alt="qr code" />
        
            <FormInput
                label='My wallet address'
                id='address'
                value='flia3dsh5fla2ehflk4e'   
                readOnly='true'                 
            />            
                
            <ShareButton
                text='This is my CryptoBitter Wallet address: flia3dsh5fla2ehflk4e. Please, send some bits. :D'
            />            

        </section>
    )
}