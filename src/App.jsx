import "./App.css";
import Header from "./components/header/Header";
import Cards from "./components/Cards/Cards";
import CartDetails from "./components/CourseCartDetails/CartDetails";
import { useState } from "react";
//
import Swal from "sweetalert2";

function App() {
  const [cartDetails, setCartDetails] = useState([]);
  const [cartCredit, setCartCredit] = useState(0);
  const [cartPrice, setCartPrice] = useState(0);
  // const [cartHour, setCartHour] = useState(20);
  const [cartHour, setCartHour] = useState(20);

  const handleAddToCartDetails = (id, card, credit) => {
    const newCartDetails = [...cartDetails, card];

    // console.log("click id", id);

    const cartIDV = newCartDetails.map((cartDetail) => cartDetail.id);
    // console.log("id array", cartIDV);
    const countDuplicate = cartIDV.filter((dulpct) => dulpct === id).length;
    // const duplicate =
    //   countDuplicate > 1 ? alert("oh no") :
    if (countDuplicate < 2) {
      // console.log(cartHour);
      // console.log("credit", credit);
      const tempCartCredit = cartCredit + credit;
      if (tempCartCredit <= 20) {
        setCartDetails(newCartDetails);
      } else {
        // alert("sorry!! you have only ");
      }
    } else {
      // alert("Sorry!! Already added it.Add another");
      Swal.fire("Sorry!! Already added it.Add another One.");
      // console.log(countDuplicate);
    }
    // console.log("ok1", cartCredit);
    // console.log(duplicate);
  };

  const handleCredit = (id, credit) => {
    const cartIDV = cartDetails.map((cartDetail) => cartDetail.id);
    // console.log("id array", cartIDV);
    const countDuplicate = cartIDV.filter((dulpct) => dulpct === id).length;
    // console.log(typeof countDuplicate);
    if (countDuplicate === 0) {
      // console.log(cartHour);
      const tempCartCredit = cartCredit + credit;
      // console.log("tempCartCredit", tempCartCredit);
      if (tempCartCredit <= 20) {
        const newCartCredit = cartCredit + credit;

        setCartCredit(newCartCredit);
        // const newCartHour = 20 - (cartHour - newCartCredit);
        const newCartHour = 20 - newCartCredit;
        setCartHour(newCartHour);
        // const newCartHour = cartHour - newCartCredit;
        // setCartHour(newCartHour);
      } else {
        // alert(`sorry!! you have only ${cartHour}hr left`);
        Swal.fire(
          `Sorry!! you have already ${cartCredit}hr & only ${cartHour}hr left !!`
        );
      }
      // const newCartHour = cartHour - tempCartCredit;
      // console.log("abc", cartHour);
      // console.log("abc", tempCartCredit);
      // console.log("abc", newCartHour);
      // setCartHour(newCartHour);
    } else {
      // setCartCredit(cartCredit);
      // console.log("not ok");
    }
  };

  // const handleRemainingHour = (credit) => {
  //   console.log("cartCredit", cartCredit);
  // };

  const handlePrice = (id, price, credit) => {
    const cartIDV = cartDetails.map((cartDetail) => cartDetail.id);
    const countDuplicate = cartIDV.filter((dulpct) => dulpct === id).length;
    if (countDuplicate === 0) {
      // console.log(cartHour);
      const tempCartCredit = cartCredit + credit;
      // console.log("tempCartCredit", tempCartCredit);
      if (tempCartCredit <= 20) {
        const newCartPrice = cartPrice + price;
        setCartPrice(newCartPrice);
      }
    }
  };

  return (
    <>
      <div className="bg-white h-full">
        <div className="container mx-auto">
          <Header></Header>
          <hr className="w-11/12 mx-auto my-5" />
          <div className="flex flex-col lg:flex-row gap-6">
            <Cards
              handleAddToCartDetails={handleAddToCartDetails}
              handleCredit={handleCredit}
              handlePrice={handlePrice}
              // handleRemainingHour={handleRemainingHour}
            ></Cards>
            <CartDetails
              cartDetails={cartDetails}
              cartCredit={cartCredit}
              cartPrice={cartPrice}
              cartHour={cartHour}
            ></CartDetails>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
