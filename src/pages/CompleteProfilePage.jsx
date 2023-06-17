import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function CompleteProfilePage() {
  const navigate = useNavigate();
  const inputRefFirstName = useRef();
  const inputRefLastName = useRef();
  const inputRefPhone = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstname: inputRefFirstName.current.value,
      lastname: inputRefLastName.current.value,
      phone: inputRefPhone.current.value,
      user_id: localStorage.getItem('user_id')
    };
    console.log(data);
    fetch('https://assocassociation.herokuapp.com/insertProfileInfos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      credentials: 'include',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="flex flex-col items-center" onSubmit={onSubmit}>
        <h3 className="mb-4 font-medium text-gray-800">Complete your profile</h3>

        <label htmlFor="firstname" className="sr-only">
          First Name
        </label>
        <input
          className="w-full px-4 py-2 mb-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          ref={inputRefFirstName}
          name="firstname"
          type="text"
          placeholder="Enter your first name"
          required
        />

        <label htmlFor="lastname" className="sr-only">
          Last Name
        </label>
        <input
          className="w-full px-4 py-2 mb-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          ref={inputRefLastName}
          type="text"
          placeholder="Enter your last name"
          required
        />

        <label htmlFor="phone" className="sr-only">
          Phone
        </label>
        <input
          className="w-full px-4 py-2 mb-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          ref={inputRefPhone}
          type="tel"
          placeholder="Enter your phone number"
          required
        />

        <button
          type="submit"
          className="w-full px-4 py-2 text-lg font-bold text-white bg-assoc rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default CompleteProfilePage;
