import React from "react";

const CartDetail = ({ cartDetail }) => {
  const { id, courseName, credit, price } = cartDetail;

  return (
    <div>
      <li>{courseName}</li>
    </div>
  );
};

export default CartDetail;
