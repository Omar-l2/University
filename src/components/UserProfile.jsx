import { convertStringToValue } from "@syncfusion/ej2/maps";
import React, { useState, useEffect } from "react";
import { redirect } from "react-router-dom";

const UserProfile = ({ open, onClose }) => {
  const [Edit, setEdit] = useState(false);
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [name, setName] = useState(localStorage.getItem("name"));
  const EditDB = () => {
    const userData = {
      firstName: name,
      email: email,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    };

    fetch(
      `http://localhost:8080/profile/${localStorage.getItem("userID")}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("User Updated:", data);
        localStorage.setItem("email", data.email);
        localStorage.setItem("name", data.firstName);
      })
      .catch((error) => console.error("Error:", error));
  };
  return (
    <div className=" bg-opacity-60 bg-slate-500 fixed top-0 left-0 flex items-center justify-center w-full h-full">
      <div
        className="py-12 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
        id="modal"
      >
        <div
          role="alert"
          className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
        >
          <div className="relative  py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
            <div className="w-full  flex justify-center text-gray-600 mb-3">
              <img
                src="/assets/Profile.jpg"
                alt="Profile Image"
                className="w-24  h-24 rounded-full"
              />
            </div>
            <h1 className="text-gray-800 font-lg text-center font-bold tracking-normal leading-tight mb-4">
              معلومات الشخصية
            </h1>
            <label
              htmlFor="name"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              الاسم
            </label>
            <input
              disabled={!Edit}
              id="name"
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label
              htmlFor="email2"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              ايميل
            </label>
            <input
              disabled
              id="email"
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <div className="flex items-center justify-start w-full">
              <button
                onClick={() => {
                  setEdit(!Edit);
                  EditDB();
                }}
                className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
              >
                {!Edit ? "تعديل" : "حفظ"}
              </button>
              <button
                className="focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                onClick={onClose}
              >
                الغاء
              </button>
            </div>
            <div
              className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Close"
                className="icon icon-tabler icon-tabler-x"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1={18} y1={6} x2={6} y2={18} />
                <line x1={6} y1={6} x2={18} y2={18} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
