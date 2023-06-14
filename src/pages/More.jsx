import React, { useState, useEffect } from "react";
import { Header } from "../components";
import { useNavigate } from "react-router-dom";

const More = () => {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:8080/course');
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchCourses();
  }, []);

  const Navigate = useNavigate();
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10  dark:bg-secondary-dark-bg bg-white rounded-3xl">
      <Header category="" title="مسارات البرمجية" />
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 rounded-3xl md:grid-cols-3 lg:grid-cols-4">
        {courses.map((course) => (
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
                Navigate(`/SubCourse/${course.id}`);
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
