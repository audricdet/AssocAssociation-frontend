import React, { useState, useEffect } from 'react';

function AssociationsPage() {
  const [associations, setAssociations] = useState([]);

  useEffect(() => {
    async function fetchAssociations() {
      const response = await fetch('https://assocassociation.herokuapp.com/associations', {credentials: "include"});
      const data = await response.json();
      setAssociations(data);
    }
    fetchAssociations();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {associations.map((assoc) => (
        <div key={assoc.id} className="max-w-xs rounded overflow-hidden shadow-lg m-4">
          <img className="mx-auto mt-4" src={assoc.logo} alt={assoc.name} style={{ width: '120px' }} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{assoc.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AssociationsPage;
