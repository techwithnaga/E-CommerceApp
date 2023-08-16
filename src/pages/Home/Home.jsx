import React from "react";
import Slider from "../../components/slider/Slider";
import Card from "../../components/card/Card";
import "./home.scss";

const Home = () => {
  const items = [
    {
      id: 1,
      img1: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "hat",
      oldPrice: 19,
      isNew: true,
      price: 12,
    },
    {
      id: 2,
      img1: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "hat",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img1: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "hat",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img1: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "hat",
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="home">
      <Slider />
      <div className="featuredProduct">
        <div className="top">
          <h2>Featured products</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
            quo eum totam suscipit ducimus, unde illum, iusto hic blanditiis at
            tenetur. Quas velit quisquam reprehenderit!
          </p>
        </div>

        <div className="items">
          {items.map((item) => {
            return <Card item={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
