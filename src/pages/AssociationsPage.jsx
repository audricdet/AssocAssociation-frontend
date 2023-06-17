import React, { useState, useEffect } from 'react';
import BottomNav from '../components/BottomNav';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

function AssociationsPage() {
  const [associations, setAssociations] = useState([]);

  useEffect(() => {
    async function fetchAssociations() {
      const response = await fetch('https://assocassociation.herokuapp.com/associations', { credentials: 'include' });
      const data = await response.json();
      setAssociations(data);
    }
    fetchAssociations();
  }, []);

  return (
    <body className='bg-assoc-bg font-sans'>
    <div className='flex justify-center item-center pt-6 bg-assoc'>
    <h1 className='text-gray-100 pb-6'>
      ASSOCIATIONS
    </h1>
  </div>
  <div className="flex flex-wrap justify-start mb-8 pt-8">
    {associations.map((assoc) => (
      <div key={assoc.id} className="w-full md:w-1/2 lg:w-1/3 overflow-hidden px-8">
        <Link to={`/associations/${assoc.id}`}>
          <img className="mx-auto w-full border border-gray-200 rounded-xl" src={assoc.logo} alt={assoc.name} />
        </Link>
        <div className='flex justify-start pl-8 pt-2 mb-8'>
          <div >
            <Link to={`/associations/${assoc.id}`}>
              <div className="font-sans text-m">{assoc.name}</div>
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
  <BottomNav />
</body>

);
}

export default AssociationsPage;


