import MainLayout from '@layouts/MainLayout';
import HomeHeader from '@molecules/HomeHeader';
import Dashboard from '@molecules/Dashboard';
import SendReceiveButtons from "@molecules/SendReceiveButtons";
import BitChart from '@atoms/BitChart';


export default function Home(){

    return(
    
        <MainLayout header={
            <HomeHeader title='Market'/>}
        >
            
            <Dashboard className='-mt-10'/>

            <SendReceiveButtons
                text1='Buy'
                to1='/market/buy'
                text2='Sell'
                to2='/market/sell'
            />

            <div className='h-[350px] w-full flex items-center justify-center'>

                <BitChart/>            
            
            </div>

        </MainLayout>
        
    )

}