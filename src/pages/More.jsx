import React from "react";
import { Header } from "../components";
import { useNavigate } from "react-router-dom";
const Courses = [
  {
    id: 1,
    name: "Unit Game Dev.",
    image: "../../assets/unity.png",
  },
  {
    id: 2,
    name: "html web devlopment",
    image: "../../assets/html.jpg",
  },
  {
    id: 3,
    name: "C++ programming language",
    image: "../../assets/C.png",
  },
  {
    id: 1,
    name: "Unit Game Dev.",
    image: "../../assets/unity.png",
  },
  {
    id: 2,
    name: "html web devlopment",
    image: "../../assets/html.jpg",
  },
  {
    id: 3,
    name: "C++ programming language",
    image: "../../assets/C.png",
  },
  {
    id: 1,
    name: "Unit Game Dev.",
    image: "../../assets/unity.png",
  },
  {
    id: 2,
    name: "html web devlopment",
    image: "../../assets/html.jpg",
  },
  {
    id: 3,
    name: "C++ programming language",
    image: "../../assets/C.png",
  },
];
const More = () => {
  const Navigate = useNavigate();
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10  dark:bg-secondary-dark-bg bg-white rounded-3xl">
      <Header category="" title="مسارات البرمجية" />
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 rounded-3xl md:grid-cols-3 lg:grid-cols-4">
        {Courses.map((course) => (
          <div
            key={course.id}
            className=" shadow-lg rounded-3xl  dark:bg-main-dark-bg bg-white p-4 flex flex-col items-center"
          >
            <div className="mb-2 h-4/5 w-full">
              <img
                src={course.image}
                alt={course.name}
                className="w-full h-auto object-contain"
              />
            </div>
            <h2 className="text-lg dark:text-white font-semibold mb-2 text-center">
              {course.name}
            </h2>
            <button
              onClick={() => {
                Navigate(`/Courses/${course.name}`);
              }}
              className="bg-purple-500 hover:bg-purple-700 w-full  text-xl text-white font-bold py-2 px-4 rounded"
            >
              التحق
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default More;
