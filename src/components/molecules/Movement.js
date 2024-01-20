import MoneyReceived from '@icons/MoneyReceived';
import CurrencyConverter from '@atoms/CurrencyConverter';
import MoneySent from '@icons/MoneySent';

export default function Movement({type, date, dollarAmount}){

    return(

        <div className="flex justify-between items-center h-full px-4 border-b border-tertiary/30 py-3">                       

            <div className="flex gap-2 items-center">

                {type == 'sent'? <MoneySent/> : <MoneyReceived/> }                

                <div>
                    <h4 className="font-semibold text-sm text-tertiary">{type == 'sent'? 'Sent' : 'Received'}</h4>
                    <p className="text-xs text-tertiary/60">{date}</p>
                    
                </div>

            </div>

            <div>

                <CurrencyConverter
                    sign={type == 'sent'? '-' : '+'}
                    dollarAmount={dollarAmount}
                    classNameUSD={type == 'sent' ? 'text-red-500 font-medium text-sm' : 'text-primary font-medium text-sm'}
                    classNameBTC='text-xs text-tertiary/60'
                    textFormat='text-end'
                />

            </div>

        </div>
    )
}