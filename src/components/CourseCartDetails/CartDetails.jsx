import React from "react";
import CartDetail from "../CartDetail/CartDetail";
import { useState } from "react";

const CartDetails = ({ id, cartDetails, cartCredit, cartPrice, cartHour }) => {
  // const [cartRHour, setCartRHour] = useState(20);
  // const handleRemainingHour = (credit) => {
  //   // console.log("cartCredit", cartCredit);
  //   const newCartRHour = cartHour - cartCredit;
  //   setCartRHour(newCartRHour);
  //   console.log("cartCredit", cartCredit);
  // };
  // console.log(cartDetails);
  // const cartIDV = [];
  // cartDetails.map((cartDetail) => {
  //   const cartid = cartDetail.id;
  //   cartIDV.push(cartid);
  // console.log("Click Id", id);
  // });
  // console.log("cartIdP", cartIDV);
  // console.log("Click Id", id);
  // const isTrue = cartIDV
  // cartIDV.includes(cartid)
  // console.log("object", 20 - cartCredit);
  const cartRemainHourTotal = 20;
  let cartRemainHour = cartRemainHourTotal - cartCredit;

  return (
    <div className="w-full px-8 md:mx-auto md:w-1/2 lg:px-0 lg:w-1/4 py-5 ">
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
