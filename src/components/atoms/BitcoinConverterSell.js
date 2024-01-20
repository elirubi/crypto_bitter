import { useState, useEffect } from 'react';
import PrimeButton from '@atoms/PrimeButton';
import CurrencyInput from 'react-currency-input-field';

export default function BitcoinConverterSell() {
  const [usdAmount, setUsdAmount] = useState('');
  const [btcAmount, setBtcAmount] = useState('');
  const [displayUsdAmount, setDisplayUsdAmount] = useState('');
  

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      handleConversion(usdAmount);
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [usdAmount]);

  const handleAmountChange = (e) => {
    const amount = e.target.value;
    setBtcAmount(amount);
    handleConversion(amount);
  };

  const handleConversion = (amount) => {
  
    const apiUrl = 'https://api.coindesk.com/v1/bpi/currentprice/USD.json';
    
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const btcRate = data.bpi.USD.rate_float;
        const convertedAmount = (btcAmount * btcRate).toFixed(2);
        setUsdAmount(convertedAmount);
        setDisplayUsdAmount(convertedAmount === '0.00' ? '' : convertedAmount);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  return (

    <div className='w-full h-full flex flex-col justify-evenly mb-32'>

      {/* inizio contenitore due input */}

      <div className='flex flex-col justify-center gap-8'>

        {/* primo input */}

        <div className='flex flex-col text-start w-full'>

          <label className='font-semibold text-tertiary text-sm' htmlFor='BTCamount'>
            Amount in BTC <span className='text-red-500'> *</span>
          </label>

          <input

            className='text-sm h-[40px] px-4 w-full border border-tertiary rounded-full mt-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-inner shadow-tertiary/25 bg-whiteCustom'
            placeholder='Insert amount in BTC'
            id='BTCamount'
            value={btcAmount}
            onChange={handleAmountChange}
            type='number'
              
           
          />

        </div>

        {/* secondo input */}

        <div className='flex flex-col text-start w-full'>

          <label className='font-semibold text-tertiary text-sm' htmlFor='USDamount'>
            Conversion in USD
          </label>

          <CurrencyInput

            decimalSeparator="," groupSeparator="."

            className='text-sm h-[40px] px-4 w-full border border-tertiary rounded-full mt-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-inner shadow-tertiary/25 bg-tertiary/20 placeholder-tertiary/90'
            placeholder='USD Amount'
            id='USDamount'
            value={displayUsdAmount}
            readOnly     
            
          />

        </div>

      </div>

      {/* fine contenitore due input */}
      <PrimeButton to='/market'>Sell</PrimeButton>

    </div>
  );
}


