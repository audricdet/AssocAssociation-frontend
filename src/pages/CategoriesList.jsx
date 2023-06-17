import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CategoriesList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('https://assocassociation.herokuapp.com/categories', { credentials: 'include' }); 
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <body className='bg-assoc-bg font-sans'>
      <div className='flex justify-center item-center pt-6 bg-assoc'>
        <h1 className='text-gray-100 pb-6'>CATEGORIES</h1>
      </div>
      <div className="flex flex-wrap justify-start mb-8 pt-8">
        {categories.map((category) => (
          <div key={category.id} className="w-full md:w-1/2 lg:w-1/3 overflow-hidden px-8">
            <div className='flex justify-start pl-8 pt-2 mb-8'>
              <div>
                <Link to={`/categories/${category.id}`}>
                  <div className="font-sans text-m">{category.name}</div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </body>
  );
}

export default CategoriesList;

