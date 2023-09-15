import React from "react";

const CartDetail = ({ cartDetail }) => {
  const { id, courseName, credit, price } = cartDetail;
  //   console.log(id);
  let arr = [];
  let newarr = arr.push(id);
  // console.log("111", newarr);
  return (
    <div>
      <li>{courseName}</li>
      {/* <p className="text-black text-base font-medium py-4">
        Total Credit Hour : {credit}
      </p> */}
    </div>
  );
};

export default CartDetail;
