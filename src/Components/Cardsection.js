import React from "react";
import Card from "./Cardtemplate";
import { Container } from "react-bootstrap";
import '../Styles/Cardsection.scss';

import image1 from '../Images/pexels-pixabay-414029.jpg';
import image2 from '../Images/pexels-leonardho-1552242.jpg';
import image3 from '../Images/pexels-olly-917732.jpg';


function CardSection() {
   const cardData = [
    {
      id: 1,
      image: image1,
      title: "Strength training",
      description: "In this class you strengthen your core muscles making....",
      alt: "",
    }, // Pass imported image1
    {
      id: 2,
      image: image2,
      title: "Hopscotch hiit",
      description: "This class focuses on large muscle groups...",
      alt: "",
    }, // Pass imported image2
    {
      id: 3,
      image: image3,
      title: "Yoga",
      description: "Yoga class that challenges both mind and body...",
      alt: "",
    }, // Pass imported image2
  ];

  return (
    <Container fluid="lg">
      <div className="cardsSection row ms-auto me-auto my-5">
        <h2 className="text-left mb-2">New classes</h2>
        {cardData.map((data) => (
          <div key={data.id} className="col-md-4 g-4">
            <Card image={data.image} title={data.title} description={data.description} alt={data.alt} className="productCard"/>{" "}
            {/* Passing the correct props */}
          </div>
        ))}
      </div>
    </Container>
  );
}

export default CardSection;