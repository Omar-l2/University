import { Header } from "../components";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CreateCourseT = () => {
  const [title, setTitle] = useState("");
  const [explanation, setExplanation] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const courseData = {
      name: title,
      description: explanation,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(courseData),
    };

    fetch(`http://localhost:8080/course/new`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("Lesson created:", data);
      })
      .catch((error) => console.error("Error:", error));

    navigate("/More");
  };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10  dark:bg-secondary-dark-bg bg-white rounded-3xl">
      <Header category="" title="انشاء دورة جديد" />
      <form
        onSubmit={handleSubmit}
        className=" bg-white dark:bg-gray-800 rounded-lg p-8 text-right"
      >
        <div className="flex flex-row-reverse mb-4">
          <div className="w-1/3 pr-2">
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
        </div>

        <div className="mb-4">
          <label
            htmlFor="explanation"
            className="block mb-2 text-xl font-semibold text-gray-700 dark:text-gray-300"
          >
            محتوى الدورة
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

export default CreateCourseT;
