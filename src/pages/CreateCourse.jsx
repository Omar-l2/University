import { create } from "@mui/material/styles/createTransitions";
import { Header } from "../components";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const CreateCourse = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [explanation, setExplanation] = useState("");
  const [createTest, setCreateTest] = useState(false);
  const [Language, setLanguage] = useState("c++");
  const [courses, setCourses] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [firstInput, setFirstInput] = useState("");
  const [firstOutput, setFirstOutput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [secondOutput, setSecondOutput] = useState("");
  const [thirdInput, setThirdInput] = useState("");
  const [thirdOutput, setThirdOutput] = useState("");

  const navigate = useNavigate();
  const languages = [
    { id: "cpp", name: "C++" },
    { id: "js", name: "Javascript" },
    { id: "java", name: "Java" },
    { id: "csharp", name: "C#" },
  ];
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:8080/course");
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        const data = await response.json();
        setCourses(data);
        console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchCourses();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const lessonData = {
      title: subtitle,
      body: explanation,
      language: Language,
      exam: {
        question: question,
        output: firstOutput + "," + secondOutput + "," + thirdOutput,
        input: firstInput + "," + secondInput + "," + thirdInput,
      }
    };

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

      navigate("/More")
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
        <div className="flex flex-row-reverse justify-between mb-4">
          <div className="w-1/3 pr-2">
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
          <div className="w-1/3 pr-2">
            <label
              htmlFor="نوع مسار الدورة"
              className="block mb-2 text-xl font-semibold text-gray-700 dark:text-gray-300"
            >
              نوع اللغة{" "}
            </label>
            <select
              id="Language"
              className="w-full px-4 py-2 border rounded-md bg-gray-100 dark:bg-gray-700"
              value={Language}
              onChange={(e) => setLanguage(e.target.value)}
              required
            >
              <option className="text-right" value="">
                اختر اللغة
              </option>
              {languages.map((language) => (
                <option key={language.id} value={language.id}>
                  {language.name}
                </option>
              ))}
            </select>
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
        <label className=" mr-3 mb-2 text-xl font-semibold text-gray-700 dark:text-gray-300">
          انشاء اختبار
        </label>
        <input
          className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
          type="checkbox"
          onChange={(e) => {
            setCreateTest(e.target.checked);
          }}
        />

        {createTest &&
          <>
            <div className="flex flex-row-reverse mb-4">
              <div className="w-1/3 pr-2">
                <label className="block mb-2  text-gray-700 text-xl font-semibold dark:text-gray-300">
                  السؤال
                </label>
                <input
                  type="text"
                  id="question"
                  className="w-full px-4 py-2 border rounded-md bg-gray-100 dark:bg-gray-700"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="الجواب"
                className="block mb-2 text-xl font-semibold text-gray-700 dark:text-gray-300"
              >
                الجواب
              </label>
              <textarea
                id="answer"
                className="w-full px-4 py-2 border rounded-md bg-gray-100 dark:bg-gray-700"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <div className="flex text-left flex-row-reverse">
                <div className=" columns-1 mx-2">
                  <label
                    htmlFor="Output 1"
                    className="block mb-2 text-xl font-semibold text-gray-700 dark:text-gray-300"
                  >
                    Output 1
                  </label>
                  <textarea
                    id="Output1"
                    className=" px-4 py-2 border rounded-md bg-gray-100 dark:bg-gray-700"
                    value={firstOutput}
                    onChange={(e) => setFirstOutput(e.target.value)}
                    required
                  />
                </div>
                <div className=" columns-1">
                  <label
                    htmlFor="Input 1"
                    className="block mb-2 text-xl font-semibold text-gray-700 dark:text-gray-300"
                  >
                    Input 1
                  </label>
                  <textarea
                    id="Input1"
                    className=" px-4 py-2 border rounded-md bg-gray-100 dark:bg-gray-700"
                    value={firstInput}
                    onChange={(e) => setFirstInput(e.target.value)}
                    required
                  />
                </div>
              </div>
              {/* Line 2 for Test Casses */}
              <div className="flex text-left flex-row-reverse">
                <div className=" columns-1 mx-2">
                  <label
                    htmlFor="Output 2"
                    className="block mb-2 text-xl font-semibold text-gray-700 dark:text-gray-300"
                  >
                    Output 2
                  </label>
                  <textarea
                    id="Output2"
                    className=" px-4 py-2 border rounded-md bg-gray-100 dark:bg-gray-700"
                    value={secondOutput}
                    onChange={(e) => setSecondOutput(e.target.value)}
                    required
                  />
                </div>
                <div className=" columns-1">
                  <label
                    htmlFor="Input 2"
                    className="block mb-2 text-xl font-semibold text-gray-700 dark:text-gray-300"
                  >
                    Input 2
                  </label>
                  <textarea
                    id="Input2"
                    className=" px-4 py-2 border rounded-md bg-gray-100 dark:bg-gray-700"
                    value={secondInput}
                    onChange={(e) => setSecondInput(e.target.value)}
                    required
                  />
                </div>
              </div>
              {/* End Line 2 for Test Casses */}
              {/* Line 3 for Test Casses */}
              <div className="flex text-left flex-row-reverse">
                <div className=" columns-1 mx-2">
                  <label
                    htmlFor="Output 3"
                    className="block mb-2 text-xl font-semibold text-gray-700 dark:text-gray-300"
                  >
                    Output 3
                  </label>
                  <textarea
                    id="Output3"
                    className=" px-4 py-2 border rounded-md bg-gray-100 dark:bg-gray-700"
                    value={thirdOutput}
                    onChange={(e) => setThirdOutput(e.target.value)}
                    required
                  />
                </div>
                <div className=" columns-1">
                  <label
                    htmlFor="Input 3"
                    className="block mb-2 text-xl font-semibold text-gray-700 dark:text-gray-300"
                  >
                    Input 3
                  </label>
                  <textarea
                    id="Input3"
                    className=" px-4 py-2 border rounded-md bg-gray-100 dark:bg-gray-700"
                    value={thirdInput}
                    onChange={(e) => setThirdInput(e.target.value)}
                    required
                  />
                </div>
              </div>
              {/* End Line 3 for Test Casses */}
            </div>
          </>
        }

        <button
          type="submit"
          className="w-full mt-4 px-4 py-2 text-2xl text-white bg-purple-500 hover:bg-purple-700 rounded-md "
        >
          تسليم
        </button>
      </form>
    </div>
  );
};

export default CreateCourse;
