import "./App.css";
import Header from "./components/header/Header";
import Cards from "./components/Cards/Cards";
import CartDetails from "./components/CourseCartDetails/CartDetails";
import { useState } from "react";

function App() {
  const [cartDetails, setCartDetails] = useState([]);
  const [cartCredit, setCartCredit] = useState(0);
  const [cartPrice, setCartPrice] = useState(0);
  // const [cartHour, setCartHour] = useState(20);
  const [cartHour, setCartHour] = useState(0);

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
      console.log("credit", credit);
      const tempCartCredit = cartCredit + credit;
      if (tempCartCredit < 20) {
        setCartDetails(newCartDetails);
      } else {
        alert("oh no2 credit");
      }
    } else {
      alert("Sorry!! Already added it");
      console.log(countDuplicate);
    }
    console.log("ok1", cartCredit);
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
      console.log("tempCartCredit", tempCartCredit);
      if (tempCartCredit < 20) {
        const newCartCredit = cartCredit + credit;
        // console.log("ok1", newCartCredit);
        setCartCredit(newCartCredit);
        // const newCartHour = 20 - (cartHour - newCartCredit);
        const newCartHour = 20 - newCartCredit;
        setCartHour(newCartHour);
        // console.log("ok2", newCartHour);
      }
    } else {
      // setCartCredit(cartCredit);
      // console.log("not ok");
    }
  };

  const handlePrice = (id, price) => {
    const cartIDV = cartDetails.map((cartDetail) => cartDetail.id);
    // console.log("id array", cartIDV);
    const countDuplicate = cartIDV.filter((dulpct) => dulpct === id).length;
    // console.log(typeof countDuplicate);
    if (countDuplicate === 0) {
      const newCartPrice = cartPrice + price;
      setCartPrice(newCartPrice);
      // console.log("ok");
    } else {
      // setCartCredit(cartCredit);
      // console.log("not ok");
    }

    // console.log("object", price);
  };

  return (
    <>
      <div className="bg-white h-[3000px]">
        <div className="container mx-auto">
          <Header></Header>
          <hr className="w-11/12 mx-auto my-5" />
          <div className="flex flex-col lg:flex-row gap-6">
            <Cards
              handleAddToCartDetails={handleAddToCartDetails}
              handleCredit={handleCredit}
              handlePrice={handlePrice}
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
