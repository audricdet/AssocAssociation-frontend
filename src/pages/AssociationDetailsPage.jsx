import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaUniversity, FaGlobeEurope } from 'react-icons/fa';
import BottomNav from '../components/BottomNav';
import Stripe from 'stripe'; 
import { loadStripe } from '@stripe/stripe-js';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import BackButton from '../components/BackButton'

//import dotenv from 'dotenv';


function AssociationDetailsPage() {
  //dotenv.config()
  const { id } = useParams();
  const [association, setAssociation] = useState({});
  const stripePromise = loadStripe('pk_test_51N93ayHZFEg0ReCDNRo2YYBSUahf6ykR6Tpduequvf3FwYIvkLuM11PAWWcEvp5ec80l6YcMS57qi2o5hrZXUazY006XBbvu59');
  

  useEffect(() => {
    async function fetchAssociation() {
      const response = await fetch(`https://assocassociation.herokuapp.com/associations/${id}`, { credentials: 'include' });
      const data = await response.json();
      setAssociation(data[0]); // récupère le premier élément de l'array de la réponse
    }
    fetchAssociation();

    const handlePayment = async () => {
      const stripe = await stripePromise;
    
      const { error } = await stripe.redirectToCheckout({
        lineItems: [{ price: 'price_12345', quantity: 1 }],
        mode: 'payment',
        successUrl: 'https://votre-site.com/success',
        cancelUrl: 'https://votre-site.com/cancel',
      });
    
      if (error) {
        console.error(error);
      }
    };
    const paymentButton = document.getElementById('payment-button');
  if (paymentButton) {
    paymentButton.addEventListener('click', handlePayment);
  }

  return () => {
    // Nettoyer l'écouteur d'événement lorsque le composant est démonté
    if (paymentButton) {
      paymentButton.removeEventListener('click', handlePayment);
    }
  } 

  }, [id]);

  
  
  
  return (
    <body className='font-sans'>

      <div className="min-h-screen">
      <div className="py-12">
        <BackButton/>
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-assoc text-center">{association.name}</p>
          </div>
          <div className="mt-4">
            <img className="mx-auto rounded-lg" src={association.logo} alt={association.name} />
          </div>
          <div className="mt-10">
            <p className="text-lg leading-6 font-medium text-gray-900 text-justify">{association.description}</p>
          </div>
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className='payment flex justify-center'>
              <button id="payment-button" className="bg-assoc hover:bg-assoc-bg text-assoc-gray font-bold py-2 px-4 rounded">Faire un don</button>
          </div>
            </dl>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
    </body>
  );
}

export default AssociationDetailsPage;

