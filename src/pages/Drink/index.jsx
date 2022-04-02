import React, { useState, useEffect } from 'react';
import { useDrinks } from '../../hooks/useDrinks';

import Footer from '../../components/Footer';
import DrinkCards from '../../components/DrinkCards';

const Drink = () => {
  const [categories, setCategories] = useState([]);
  const { getDrinkInfos, drinks } = useDrinks();

  useEffect(() => {
    getDrinkInfos();
  }, [getDrinkInfos]);

  useEffect(() => {
    const getCategoriesList = async () => {
      try {
        const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
        const response = await request.json();
        setCategories(response.drinks);
      } catch (error) {
        return error.message;
      }
    };
    getCategoriesList();
  }, []);

  console.log('categ', categories);
  return (
    <>
      {/* <Header /> */}
      {/* realiza renderização condicional do Header apenas se clicar no search */}
      {/* <SearchFilters /> */}
      <section>
        { categories && categories.map(({ strCategory }, index) => {
          const CARDS_QTT = 5;
          if (index === CARDS_QTT) { strCategory = 'All'; }
          if (index > CARDS_QTT) return null;
          return (
            <button
              type="button"
              key={ index }
              data-testid={ `${strCategory}-category-filter` }
            >
              {strCategory}
            </button>);
        })}
      </section>
      {/* data-testid="Beef-category-filter" */}
      <p>Drink</p>
      {drinks && drinks.map((drink, index) => {
        const CARDS_QTT = 12;
        if (index >= CARDS_QTT) return null;
        return (
          <DrinkCards
            dataTestid={ `${index}-recipe-card` }
            { ...drink }
            index={ index }
            key={ drink.idDrink }
          />);
      })}
      {/* categoriesList.map((recipeCard) =>  ) */}
      <Footer />
    </>
  );
};

export default Drink;
