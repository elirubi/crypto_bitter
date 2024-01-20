import Movement from "@molecules/Movement";
import { useState } from 'react';

export default function FormMovements(){

    const [filterType, setFilterType] =useState(null);

    const movements = [

        { date:'01/01/2023', dollarAmount: '350', type: 'received' },
        { date:'30/12/2022', dollarAmount: '1200', type: 'sent' },
        { date:'15/12/2022', dollarAmount: '2418', type: 'received' },
        { date:'10/12/2022', dollarAmount: '200', type: 'sent' },
        { date:'15/11/2022', dollarAmount: '165', type: 'sent' },
        { date:'06/11/2022', dollarAmount: '1520', type: 'received' },
        { date:'10/10/2022', dollarAmount: '2450', type: 'received' },
        { date:'05/10/2022', dollarAmount: '650', type: 'sent' },
        { date:'28/09/2022', dollarAmount: '1800', type: 'received' },
    
    ]
       
    return(

        <section className="flex flex-col w-full h-full">

            {/* inizio sezione titoli */}

            <div className="flex justify-between items-center h-[60px]">

                <h3 className="text-sm font-semibold text-tertiary ">Filter:</h3> 

                <div className=" h-full ">

                    <div className="flex h-full items-center justify-end gap-2">                
                    
                        <button 
                            onClick={() => setFilterType('received')} className={`text-sm py-1 px-2 rounded-full font-medium ${filterType === 'received' ? 'bg-primary text-whiteCustom' : 'opacity-70'}`}>
                            Received
                        </button>

                        <button 
                            onClick={() => setFilterType('sent')} className={`text-sm py-1 px-2 rounded-full font-medium ${filterType === 'sent' ? 'bg-red-500 text-whiteCustom ' : 'opacity-70'}`}>
                            Sent
                        </button> 

                        <button 
                            onClick={() => setFilterType(null)} className={`text-sm py-1 px-2 rounded-full ${filterType === null ? '' : 'opacity-70'}`}>
                            <i class="fa-solid fa-filter-circle-xmark text-lg text-tertiary"></i>
                        </button>                            

                    </div> 

                </div>              

            </div>

            {/* fine sezione titoli */}

            {/* inizio transazioni */}  

            <div className="overflow-y-scroll max-h-[365px] ">

                <div>                    
    
                {
                    movements
                        .filter(movement => filterType === null || movement.type === filterType)
                        .map((movement, index) => (
                        <Movement
                            key={index}
                            date={movement.date}
                            dollarAmount={movement.dollarAmount}
                            type={movement.type}
                        />
                        ))
                }

                </div>  

            </div>

            {/* fine transazioni */}

        </section> 
    )
}