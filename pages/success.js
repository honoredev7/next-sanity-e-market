import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Merci pour votre achat !</h2>
        <p className="email-msg">Vérifiez votre boîte mail pour la réception.</p>
        <p className="description">
          Si vous avez une question, envoyez nous un mail au 
          <a className="email" href="mailto:order@example.com">
            order@market.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continuer Vos Achats
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success