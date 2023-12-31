import React from "react";
import { NavLink, useNavigate, useLocation, useParams } from "react-router-dom";
import { Header } from "../components";
import { useState, useEffect } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";

export default function CourseEx() {
  const LessonID = useParams();
  const location = useLocation();
  const lessons = location.state.lessons;
  const currentLessonIndex = lessons.indexOf(
    lessons.find((l) => l.id == LessonID.id)
  );
  const nextLessonID = lessons[currentLessonIndex + 1];
  const previousLessonID = lessons[currentLessonIndex - 1];
  const [lesson, setLesson] = useState("");
  const [TestID, setTestID] = useState("");
  const navigate = useNavigate();
  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );
  useEffect(() => {
    const fetchLesson = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/lesson/" + LessonID.id
        );
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        const data = await response.json();
        setLesson(data);
        console.log(data)
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchLesson();
  }, [LessonID.id]);

  return (
    <>
      <Header title={`درس :  ${lesson.title}`} category={"شرح الدرس"} />
      <div className="flex justify-center mt-8">
        <div className=" w-11/12 dark:bg-secondary-dark-bg bg-white rounded-lg shadow-lg p-6">
          <p className=" dark:text-white text-right text-xl">{lesson.body}</p>
          {/* <CodeEditor
            value={code}
            language={"js"}
            placeholder="Please enter JS code."
            onChange={(evn) => setCode(evn.target.value)}
            padding={15}
            style={{
              fontSize: 12,
              backgroundColor: "#f5f5f5",
              fontFamily:
                "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
            }}
          /> */}
          <div className=" flex justify-center">
            <button
              hidden={lesson.exam === undefined || lesson.exam.question === ""}
              onClick={() => {
                navigate(`/Test/${lesson.exam.id}`, {state: {
                  exam: lesson.exam,
                  language: lesson.language 
                }});
              }}
              className=" w-1/12 px-4 text-xl py-2 bg-purple-600 text-white rounded-md"
            >
              اختبر
            </button>
          </div>
          <div
            className={`flex ${
              previousLessonID === undefined ? "flex-row-reverse" : ""
            } justify-between mt-6`}
          >
            <button
              hidden={previousLessonID === undefined}
              onClick={() => {
                navigate(`/Courses/${previousLessonID.id}`, {
                  state: { lessons: lessons },
                });
              }}
              className=" w-1/12 text-xl px-4 py-2 bg-slate-500 text-white rounded-md"
            >
              الرجوع
            </button>
            <button
              hidden={nextLessonID === undefined}
              onClick={() => {
                navigate(`/Courses/${nextLessonID.id}`, {
                  state: { lessons: lessons },
                });
              }}
              className=" w-1/12 px-4 text-xl py-2 bg-blue-500 text-white rounded-md"
            >
              التالي
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
