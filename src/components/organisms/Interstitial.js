import PrimeButton from '@atoms/PrimeButton'

export default function Interstitial({code, textIcon, text, to, textButton}){

    return(

        <section className='flex flex-col justify-evenly h-full mb-5'>

            <div className='flex flex-col items-center gap-2 mt-5'>                

                <i className={`text-[60px] text-primary bg-secondary p-4 rounded-full fa-${code}`}></i>                

                <p className='text-secondary text-xs'>{textIcon}</p>                

            </div>

            <p className='text-tertiary mx-12 mb-24'>{text}</p>


            <PrimeButton to={to}>{textButton}</PrimeButton>  

        </section>        


    )
}