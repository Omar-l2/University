import React from "react";
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, NavLink } from "react-router-dom";

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const carouselData = [
    {
      image: "../../assets/unity.png",
      title: "Unit Game Dev.",
      buttonLabel: "تسجيل",
    },
    {
      image: "../../assets/html.jpg",
      title: "html web devlopment",
      buttonLabel: "تسجيل",
    },
    {
      image: "../../assets/C.png",
      title: "C++ programming language",
      buttonLabel: "تسجيل",
    },
  ];

  return (
    <div className=" pb-10 pt-3 pl-10 pr-10">
      <div className=" dark:text-gray-300 text-right text-3xl pb-5 font-bold">
        الدورات المقترحة
      </div>
      <Carousel {...settings}>
        {carouselData.map((item, index) => (
          <div key={index}>
            <img
              className=" align-middle scale-75"
              src={item.image}
              alt={item.title}
            />
            <div className="text-center mt-4">
              <h2 className="text-2xl dark:text-gray-300 font-bold">
                {item.title}
              </h2>
              <NavLink to={`/SubCourse/${item.title}`}>
                <button className="mt-4 px-4 py-2 w-40 text-xl bg-purple-400 text-white rounded-3xl">
                  {item.buttonLabel}
                </button>
              </NavLink>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
