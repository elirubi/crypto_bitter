import MainLayout from '@layouts/MainLayout';
import ActionHeader from '@molecules/ActionHeader';

import BitcoinConverterBuy from '@atoms/BitcoinConverterBuy';

export default function Buy(){

    return(

        <MainLayout
            header={<ActionHeader title='Buy'/>}>
            
            <BitcoinConverterBuy/>            

        </MainLayout>

    )
}