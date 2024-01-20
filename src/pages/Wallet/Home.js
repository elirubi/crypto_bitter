import HomeHeader from '@molecules/HomeHeader';
import PrimeDashboard from "@molecules/PrimeDashboard";
import LastTransactions from "@molecules/LastTransactions";
import SendReceiveButtons from "@molecules/SendReceiveButtons";
import MainLayout from "@layouts/MainLayout";

export default function Home(){

    return(

        <MainLayout header={<HomeHeader title='Wallet'/>}>
                   
            <PrimeDashboard/>

            <SendReceiveButtons
                text1='Send'
                to1='/wallet/send'
                text2='Receive'
                to2='/wallet/receive'
            />

            <LastTransactions/>               

        </MainLayout>

    )
}