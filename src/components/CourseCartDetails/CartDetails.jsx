import React from "react";
import CartDetail from "../CartDetail/CartDetail";

const CartDetails = ({ cartDetails, cartCredit, cartPrice, cartHour }) => {
  console.log(cartDetails);
  const { credit, price } = cartDetails;

  return (
    <div className="w-full  lg:w-1/4 py-5 ">
      <p className="text-[#2F80ED] text-base font-bold pb-6">
        Credit Hour Remaining: {cartHour} hr
      </p>
      <hr className="py-4" />
      <h1 className="text-black text-xl font-bold pb-5">Course Name</h1>
      <ol className=" list-inside list-decimal text-black text-base font-normal pb-6">
        {cartDetails.map((cartDetail) => (
          <CartDetail key={cartDetail.id} cartDetail={cartDetail}></CartDetail>
        ))}
      </ol>
      <hr />
      <p className="text-black text-base font-medium py-4">
        Total Credit Hour : {cartCredit}
      </p>
      <hr />
      <p className="text-black text-base font-semibold py-4">
        Total Price : {cartPrice} USD
      </p>
    </div>
  );
};

export default CartDetails;
