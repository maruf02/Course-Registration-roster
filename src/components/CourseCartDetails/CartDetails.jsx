import React from "react";

const CartDetails = () => {
  return (
    <div className="w-full  lg:w-1/4 py-5 px-3">
      <p className="text-[#2F80ED text-lg font-bold">
        Credit Hour Remaining 7 hr
      </p>
      <hr className="py-4" />
      <h1 className="text-black text-xl font-bold pb-5">Course Name</h1>
      <ol className=" list-inside list-decimal text-black text-base font-normal pb-6">
        <li>Introduction to c programming</li>
        <li>Introduction to c programming</li>
        <li>Introduction to c programming</li>
      </ol>
      <hr />
      <p className="text-black text-base font-medium py-4">
        Total Credit Hour : 13
      </p>
      <hr />
      <p className="text-black text-base font-semibold py-4">
        Total Price : 48000 USD
      </p>
    </div>
  );
};

export default CartDetails;
