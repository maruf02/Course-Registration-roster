import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";

const Cards = ({
  id,
  handleAddToCartDetails,
  handleCredit,
  handlePrice,
  handleRemainingHour,
}) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("JsonData.json")
      .then((res) => res.json())
      //   .then((data) => console.log(data));
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 ">
      {/* <h1>cards:{cards.length}</h1> */}
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          handleAddToCartDetails={handleAddToCartDetails}
          handleCredit={handleCredit}
          handlePrice={handlePrice}
          // handleRemainingHour={handleRemainingHour}
        ></Card>
      ))}
    </div>
  );
};

Cards.propTypes = {
  handleAddToCartDetails: PropTypes.func,
};

export default Cards;
