import { useEffect, useState } from 'react';

export default function CurrencyConverter({ dollarAmount, classNameUSD, classNameBTC, textFormat='', sign=''}) {
  
  const [convertedAmount, setConvertedAmount] = useState('');  

  useEffect(() => {

    const fetchConversionRate = async () => {

      try {

        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice/USD.json');
        
        const data = await response.json();

        const exchangeRate = data.bpi.USD.rate_float;
        const convertedAmount = parseFloat(dollarAmount) / exchangeRate;
        
        setConvertedAmount(convertedAmount);
        
      } catch (error) {
        console.error('Errore durante la conversione:', error);
      }
    };

    fetchConversionRate();
  }, [dollarAmount]);

  const formattedDollarAmount = parseFloat(dollarAmount).toLocaleString('it-IT', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,    
  });

  const formattedConvertedAmount = convertedAmount.toLocaleString('it-IT', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 6,    
    
  });

  return (
    <div className={textFormat}>
      <p className={classNameUSD}>{sign} {formattedDollarAmount} USD</p>
      <p className={classNameBTC}>{formattedConvertedAmount} BTC</p>
    </div>
  );
}


