import React, { useEffect, useState } from 'react'

const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('JsonData.json')
            .then(res => res.json())
            .then(data=>console.log(data))
    },[])
  return (
      <div>
          
    </div>
  )
}

export default Cards