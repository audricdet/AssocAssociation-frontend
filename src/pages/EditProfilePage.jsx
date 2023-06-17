import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EditProfileInfos() {
  const { userId } = useParams();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
  });

  useEffect(() => {
    // Récupérer les informations de profil de l'utilisateur depuis le backend
    const url = `https://assocassociation.herokuapp.com/profile/${userId}`;
    fetch(url, {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        // Mettre à jour les valeurs du formulaire avec les données existantes
        setFormData({
          firstname: data.firstname,
          lastname: data.lastname,
          phone: data.phone,
        });
      })
      .catch((error) => console.log(error));
  }, [userId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Envoyer les nouvelles informations de profil au backend
    const url = `https://assocassociation.herokuapp.com/profile/${userId}/edit`;
    fetch(url, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(() => {
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold mb-4">Modifier votre profil</h1>
      <form
        className="bg-assoc-gray p-4 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            htmlFor="firstname"
            className="text-gray-600 font-semibold mb-1"
          >
            Prénom
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            className="w-full bg-white border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastname"
            className="text-gray-600 font-semibold mb-1"
          >
            Nom
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            className="w-full bg-white border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="text-gray-600 font-semibold mb-1">
            Téléphone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-white border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-assoc hover:bg-blue-700 text-white font-bold py2 px-4 rounded mt-4"
        >
          Enregistrer les modifications
        </button>
      </form>
    </div>
  );
}

export default EditProfileInfos;
