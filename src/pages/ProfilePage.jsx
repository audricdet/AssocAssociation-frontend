import React, { useState, useEffect } from 'react';
import { FaUser, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CompleteProfilePage from '../pages/CompleteProfilePage'
import BottomNav from '../components/BottomNav';

function ProfilePage() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Récupérer l'ID de l'utilisateur à partir du localStorage
    const userId = localStorage.getItem('user_id');

    // Vérifier que l'ID de l'utilisateur est disponible
    if (!userId) {
      // Rediriger vers la page de connexion
      window.location.href = '/login';
    } else {
      // Construire l'URL de l'endpoint
      const url = `https://assocassociation.herokuapp.com/profile/${userId}`;

      // Effectuer la requête GET pour récupérer les informations de profil de l'utilisateur
      fetch(url, {
        credentials: 'include'
      })
        .then((response) => response.json())
        .then((data) => {
          setUserData(data[0]);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  if (!userData) {
    return <CompleteProfilePage/>;
  }

  return (
      <body> 
        <div className="flex flex-col items-center mt-10">
          <h1 className="text-3xl font-bold mb-4">Votre profil</h1>
          <div className="bg-assoc-gray p-4 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="mr-4">
                <FaUser size={30} />
              </div>
              <div>
                <p className="text-gray-600 font-semibold mb-1">Nom complet</p>
                <p className="text-lg">{userData.firstname} {userData.lastname}</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="mr-4">
                <FaPhone size={30} />
              </div>
              <div>
                <p className="text-gray-600 font-semibold mb-1">Téléphone</p>
                <p className="text-lg">{userData.phone}</p>
              </div>
            </div>
            <button className="bg-assoc hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              <Link to={`/profile/${userData.id}/edit`}>
                Modifier le profil
              </Link>
            </button>
          </div>
          <BottomNav/>
        </div>
      </body>
      );
}

export default ProfilePage;


