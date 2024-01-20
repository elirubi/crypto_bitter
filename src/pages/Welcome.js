import PrimeButton from "@atoms/PrimeButton";
import SecondButton from "@atoms/SecondButton";
import ThirdButton from "@atoms/ThirdButton";

function Welcome() {

  return (

    <div className="h-screen bg-whiteCustom px-[24px] flex flex-col items-center justify-between pb-[100px] pt-[50px]">
      
      <header>
        
        <img className="w-full max-w-xs mx-auto" src="/media/header.png" alt="header" />

        <h1 className="hidden">CryptoBitter</h1>

        <div className="h-[280px] flex items-center diamondGreen">
          <p className="text-center font-medium text-2xl px-[47px]">Your experience of the cryptos’ future begins here.</p>
        </div>
      </header>

      <div className="flex flex-col gap-5 w-full">

        <ThirdButton to='/refcode'>GOT AN INVITATION CODE?</ThirdButton>

        <PrimeButton to='/login'>LOG IN YOUR ACCOUNT</PrimeButton>

        <SecondButton to='/register'>CREATE NEW ACCOUNT</SecondButton>

      </div>


    </div>
    
  );
}

export default Welcome;
