import { React, useEffect, useState } from "react";
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, NavLink } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#000000");

  const [carouselData, setCarouselData] = useState([]);
  // carouselData = [
  //   {
  //     image: "../../assets/unity.png",
  //     title: "Unit Game Dev.",
  //     buttonLabel: "تسجيل",
  //   },
  //   {
  //     image: "../../assets/html.jpg",
  //     title: "html web devlopment",
  //     buttonLabel: "تسجيل",
  //   },
  //   {
  //     image: "../../assets/C.png",
  //     title: "C++ programming language",
  //     buttonLabel: "تسجيل",
  //   },
  // ];
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:8080/course");
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        const data = await response.json();
        setCarouselData(data);
        setLoading(true);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchCourses();
  }, [loading]);
  return (
    <div className="   pb-10 pt-3 pl-10 pr-10">
      <div className=" dark:text-gray-300 text-right text-3xl pb-5 font-bold">
        الدورات المقترحة
      </div>
      {!loading ? (
        <ClipLoader
          color={color}
          loading={loading}
          // cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <Carousel {...settings}>
          {carouselData.map((item, index) => (
            <div key={index}>
              <img
                className=" align-middle scale-75"
                src={"/assets/CourseImage.png"}
                alt={item.title}
              />
              <div className="text-center mt-4">
                <h2 className="text-2xl dark:text-gray-300 font-bold">
                  {item.name}
                </h2>
                <NavLink to={`/SubCourse/${item.name}`}>
                  <button className="mt-4 px-4 py-2 w-40 text-xl bg-purple-400 text-white rounded-3xl">
                    {"تسجيل"}
                  </button>
                </NavLink>
              </div>
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default CarouselComponent;
