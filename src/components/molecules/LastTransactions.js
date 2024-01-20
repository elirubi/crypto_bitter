import { Link } from 'react-router-dom';
import Movement from './Movement';

export default function LastTransactions(){

    const movements = [

        { date:'01/01/2023', dollarAmount: '350', type: 'received' },
        { date:'30/12/2022', dollarAmount: '1200', type: 'sent' },
        { date:'15/12/2022', dollarAmount: '2418', type: 'received' },
        { date:'10/12/2022', dollarAmount: '200', type: 'sent' },
    ]

    return(

        <div className="flex flex-col w-full">

            {/* inizio sezione titoli */}

            <div className="flex justify-between mb-3">

                <h3 className="text-base font-medium text-tertiary ">Last Transactions</h3>

                <Link to='/wallet/movements' className=" text-base font-medium text-primary underline ">View All</Link>

            </div>

            {/* fine sezione titoli */}

            {/* inizio transazioni */}           

            {
                movements.map((movement , index) => {
                    return <Movement
                    key={index}
                    date={movement.date}
                    dollarAmount={movement.dollarAmount}
                    type={movement.type}
                />
                })
            }           

            {/* fine transazioni */}

        </div> 
      
    )
}