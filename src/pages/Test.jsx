import React from "react";
import { NavLink, useNavigate, useParams, useLocation } from "react-router-dom";
import { Header } from "../components";
import { useState, useEffect } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { TextareaAutosize } from "@mui/material";

function Test() {
  const ExamID = useParams();
  const location = useLocation();
  const [exam, setExam] = useState("");
  const [language, setLanguage] = useState("");
  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8080/${ExamID.id}/submit`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Exam", data);
      })
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    if(location.state !== null) {
      setExam(location.state.exam);
      setLanguage(location.state.language);
    }
  }, [location.state]);

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
              السؤال
            </label>
            <label>{exam.question}</label>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="CodeEditor"
            className="block mb-2 text-xl font-semibold text-gray-700 dark:text-gray-300"
          >
            Code Editor
          </label>
          <CodeEditor
            value={code}
            language={language}
            placeholder={`Please enter ${language} code.`}
            onChange={(evn) => setCode(evn.target.value)}
            padding={15}
            style={{
              fontSize: 12,
              backgroundColor: "#f5f5f5",
              fontFamily:
                "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
            }}
          />
        </div>
        <div className="flex flex-row-reverse mb-4">
          <div className="w-1/2 pr-2">
            <label className="block mb-2  text-gray-700 text-xl font-semibold dark:text-gray-300">
              الجواب المتوقع
            </label>
            <label>
              {(exam.output || '').trim().split(',').map((i) => (
                <li>{i}</li>
              ))}
            </label>
          </div>
          <div className="w-1/2 pr-2">
            <label className="block mb-2  text-gray-700 text-xl font-semibold dark:text-gray-300">
              البيانات المدخلة
            </label>
            <label>
              {(exam.input || '').trim().split(',').map((i) => (
                <li>{i}</li>
              ))}
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-2xl text-white bg-purple-500 hover:bg-purple-700 rounded-md "
        >
          تسليم
        </button>
        <button
          type="button"
          className="w-full px-4 py-2 text-2xl text-white mt-3  bg-slate-500 hover:bg-slate-700 rounded-md "
          onClick={() => {
            navigate("/More")
          }}
        >
          قائمة الدروس
        </button>
      </form>
    </div>
  );
}

export default Test;
