import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaUniversity, FaGlobeEurope } from 'react-icons/fa';
import BottomNav from '../components/BottomNav';

function AssociationDetailsPage() {
  const { id } = useParams();
  const [association, setAssociation] = useState({});

  useEffect(() => {
    async function fetchAssociation() {
      const response = await fetch(`https://assocassociation.herokuapp.com/associations/${id}`, { credentials: 'include' });
      const data = await response.json();
      setAssociation(data[0]); // récupère le premier élément de l'array de la réponse
    }
    fetchAssociation();
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-12">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Association</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 text-center">{association.name}</p>
          </div>
          <div className="mt-4">
            <img className="mx-auto rounded-lg" src={association.logo} alt={association.name} />
          </div>
          <div className="mt-10">
            <p className="text-lg leading-6 font-medium text-gray-900 text-center">{association.description}</p>
          </div>
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <FaUniversity />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">IBAN</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{association.iban}</dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <FaGlobeEurope />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Country</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{association.country}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

export default AssociationDetailsPage;

