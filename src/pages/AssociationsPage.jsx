import React, { useState, useEffect } from 'react';
import BottomNav from '../components/BottomNav';
import { Link } from 'react-router-dom';

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
    <div className="flex flex-wrap justify-center associations-list" style={{ marginBottom: '5rem' }}>
      {associations.map((assoc) => (
        <div key={assoc.id} className="w-full md:w-1/2 lg:w-1/3 max-w-sm rounded overflow-hidden shadow-lg m-4">
          <img className="mx-auto mt-4 h-40 w-40 object-contain" src={assoc.logo} alt={assoc.name} />
          <div className="text-center px-6 py-4">
            <div className="font-bold text-xl mb-2">{assoc.name}</div>
            <button className="bg-assoc hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            <Link to={`/associations/${assoc.id}`}>
              Get more information
            </Link>
            </button>
          </div>
        </div>
      ))}
      <BottomNav />
    </div>
  );
}

export default AssociationsPage;


