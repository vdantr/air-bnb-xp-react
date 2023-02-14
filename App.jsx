import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data"

export default function App() {
  let elements = data.map(info => {
    return(
    <Card 
      img={info.coverImg}
      title={info.title} 
      rating={info.stats.rating} 
      reviewCount={info.stats.reviewCount}
      location={info.location}
      price={info.price}
    />)})

  return (
    <div>
      <Navbar />
      <Hero />
      {elements}
    </div>
  )
}