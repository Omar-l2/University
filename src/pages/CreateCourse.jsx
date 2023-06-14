import { Header } from "../components";
import React, { useState, useEffect } from "react";

const CreateCourse = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [explanation, setExplanation] = useState("");
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
        console.log(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchCourses();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const lessonData = {
      title: subtitle,
      body: explanation,
    };

    console.log(lessonData, category);
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lessonData),
    };

    fetch(`http://localhost:8080/lesson/${category}/newLesson`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("Lesson created:", data);
      })
      .catch((error) => console.error("Error:", error));
  };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10  dark:bg-secondary-dark-bg bg-white rounded-3xl">
      <Header category="" title="انشاء درس جديد" />
      <form
        onSubmit={handleSubmit}
        className=" bg-white dark:bg-gray-800 rounded-lg p-8 text-right"
      >
        <div className="mb-4">
          <label
            htmlFor="نوع مسار الدورة"
            className="block mb-2 text-xl font-semibold text-gray-700 dark:text-gray-300"
          >
            نوع مسار الدورة
          </label>
          <select
            id="category"
            className="w-full px-4 py-2 border rounded-md bg-gray-100 dark:bg-gray-700"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option className="text-right" value="">
              اختر المسار
            </option>
            {courses.map((course) => (
          <option key={course.id} value={course.id}>
          {course.name}
        </option>
      ))}

          </select>
        </div>

        <div className="flex mb-4">
          <div className="w-1/2 pr-2">
            <label className="block mb-2  text-gray-700 text-xl font-semibold dark:text-gray-300">
              اسم المساق
            </label>
            <input
              type="text"
              id="title"
              className="w-full px-4 py-2 border rounded-md bg-gray-100 dark:bg-gray-700"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="w-1/2 pl-2">
            <label className="block mb-2  text-xl font-semibold text-gray-700 dark:text-gray-300">
              عنوان الدرس
            </label>
            <input
              type="text"
              id="subtitle"
              className="w-full px-4 py-2 border rounded-md bg-gray-100 dark:bg-gray-700"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="explanation"
            className="block mb-2 text-xl font-semibold text-gray-700 dark:text-gray-300"
          >
            محتوى الدرس
          </label>
          <textarea
            id="explanation"
            className="w-full px-4 py-2 border rounded-md bg-gray-100 dark:bg-gray-700"
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
            rows="5"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-2xl text-white bg-purple-500 hover:bg-purple-700 rounded-md "
        >
          تسليم
        </button>
      </form>
    </div>
  );
};

export default CreateCourse;
