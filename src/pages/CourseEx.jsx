import React from "react";
import { useParams } from "react-router-dom";
import { Header } from "../components";
import { useState, useEffect } from "react";

export default function CourseEx() {
  const LessonID = useParams();
  const [lesson, setLesson] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:8080/lesson/' + LessonID.id);
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
        const data = await response.json();
        setLesson(data);
        console.log(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchCourses();
  }, []);


  return (
    <>
      <Header title={`درس :  ${lesson.title}`} category={"شرح الدرس"} />
      <div className="flex justify-center mt-8">
        <div className=" w-11/12 dark:bg-secondary-dark-bg bg-white rounded-lg shadow-lg p-6">
          <p className=" dark:text-white text-right text-xl">
            {lesson.body}
          </p>
          <div className="flex justify-between mt-6">
            <button className=" w-1/12 text-xl px-4 py-2 bg-slate-500 text-white rounded-md">
              الرجوع
            </button>
            <button className=" w-1/12 px-4 text-xl py-2 bg-blue-500 text-white rounded-md">
              التالي
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
