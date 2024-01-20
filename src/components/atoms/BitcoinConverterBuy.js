import { useState, useEffect } from 'react';
import PrimeButton from '@atoms/PrimeButton';
import CurrencyInput from 'react-currency-input-field';

export default function BitcoinConverterBuy() {
  const [usdAmount, setUsdAmount] = useState('');
  const [btcAmount, setBtcAmount] = useState('');
  const [displayBtcAmount, setDisplayBtcAmount] = useState('');
  

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      handleConversion(usdAmount);
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [btcAmount]);

  const handleAmountChange = (e) => {
    const amount = e.target.value;
    setUsdAmount(amount);
    handleConversion(amount);
  };

  const handleConversion = (amount) => {
  
    const apiUrl = 'https://api.coindesk.com/v1/bpi/currentprice/USD.json';
    
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const btcRate = data.bpi.USD.rate_float;
        const convertedAmount = (usdAmount / btcRate).toFixed(6);
        setBtcAmount(convertedAmount);
        setDisplayBtcAmount(convertedAmount === '0.000000' ? '' : convertedAmount);
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

          <label className='font-semibold text-tertiary text-sm' htmlFor='USDamount'>
            Amount in USD <span className='text-red-500'> *</span>
          </label>

          <input

            displayType='input'
            className='text-sm h-[40px] px-4 w-full border border-tertiary rounded-full mt-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-inner shadow-tertiary/25 bg-whiteCustom'
            placeholder='Insert amount in USD'
            id='USDamount'
            value={usdAmount}
            onChange={handleAmountChange}
            type='number'           
           
          />

        </div>

        {/* secondo input */}

        <div className='flex flex-col text-start w-full'>

          <label className='font-semibold text-tertiary text-sm' htmlFor='BTCamount'>
            Conversion in BTC
          </label>

          <CurrencyInput

            decimalSeparator="," groupSeparator="."

            className='text-sm h-[40px] px-4 w-full border border-tertiary rounded-full mt-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary shadow-inner shadow-tertiary/25 bg-tertiary/20 placeholder-tertiary/90'
            placeholder='BTC Amount'
            id='BTCamount'
            value={displayBtcAmount}
            readOnly     
            
          />

        </div>

      </div>

      {/* fine contenitore due input */}
      <PrimeButton to='/market'>Buy</PrimeButton>

    </div>
  );
}


