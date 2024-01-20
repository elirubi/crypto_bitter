import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { WhatsappShareButton, FacebookMessengerShareButton, EmailShareButton, LinkedinShareButton } from 'react-share';
import { WhatsappIcon, FacebookMessengerIcon, EmailIcon, LinkedinIcon } from 'react-share';

export default function ShareButton({ text }) {
  const [showButton, setShowButton] = useState(true);
  const [showButtons, setShowButtons] = useState(false);

  const handleClick = () => {
    setShowButton(false);
    setTimeout(() => {
      setShowButtons(true);
    }, 500);
  };

  return (
    <div className="w-full">
      <CSSTransition
        in={showButton}
        classNames="fade"
        timeout={500}
        unmountOnExit
      >
        <button
          className="w-full h-[40px] bg-primary border border-whiteCustom rounded-full shadow-md shadow-gray-300"
          onClick={handleClick}
          style={{
            filter: showButton ? 'opacity(1)' : 'opacity(0)',
            transition: 'filter 0.5s ease-in-out',
          }}
        >
          <span className="font-semibold text-[16px] text-whiteCustom uppercase">Share</span>
        </button>
      </CSSTransition>

      <CSSTransition
        in={showButtons}
        classNames="fade"
        timeout={500}
        unmountOnExit
      >
        <div className="h-[40px] flex items-center justify-evenly">
          <EmailShareButton className="share-button" url={text} subject="My CryptoBitter Wallet">
            <EmailIcon size={30} round={true} />
          </EmailShareButton>

          <WhatsappShareButton className="share-button" url={text}>
            <WhatsappIcon size={30} round={true} />
          </WhatsappShareButton>

          <FacebookMessengerShareButton className="share-button" url={text}>
            <FacebookMessengerIcon size={30} round={true} />
          </FacebookMessengerShareButton>

          <LinkedinShareButton className="share-button" url={text}>
            <LinkedinIcon size={30} round={true} />
          </LinkedinShareButton>
        </div>
      </CSSTransition>

      <style>{`
        .fade-enter {
          opacity: 0;
          
        }
        
        .fade-enter-active {
          opacity: 1;
          
          transition: opacity 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
