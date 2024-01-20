import MainLayout from '@layouts/MainLayout';
import ActionHeader from '@molecules/ActionHeader';
import BitcoinConverterSell from '@atoms/BitcoinConverterSell';

export default function Sell(){

    return(

        <MainLayout
            header={<ActionHeader title='Sell'/>}
        >
            
            <BitcoinConverterSell/>            

        </MainLayout>

    )
}