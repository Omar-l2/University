import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const SubmitForm = (e) => {
    e.preventDefault();
    localStorage.setItem("email", email);
    navigate("/");
  };
  return (
    <div style={{ zIndex: "1001" }} class="absolute inset-0 h-screen md:flex">
      <div class=" relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-400 i justify-around items-center hidden">
        <div className=" p-20">
          <h1 class="text-white font-bold text-4xl font-sans">
            Codunity مرحبا بك في
          </h1>
          <p class="text-white text-xl mt-4">
            مرحبًا بك في موقع تعلم البرمجة! نحن نقدم مصدرًا موثوقًا لتعلم
            البرمجة بطريقة سهلة وشيقة. سواء كنت مبتدئًا أو محترفًا، يمكنك
            الاستفادة من المقالات والدروس والتمارين التفاعلية لتعلم لغات البرمجة
            المختلفة وتنمية مهاراتك. ستحصل على فهم عميق لمفاهيم البرمجة وتطبيقها
            في بناء تطبيقات الويب والهواتف المحمولة والمجالات المتقدمة. تعلم
            البرمجة يمنحك قدرات تحليلية وإبداعية تساعدك في حل المشكلات وتحقيق
            الابتكار. انضم إلينا الآن وابدأ رحلتك في تحقيق أهدافك في عالم
            التكنولوجيا.
          </p>
        </div>
        <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form
          onSubmit={(e) => {
            SubmitForm(e);
          }}
          class="bg-white"
        >
          <h1 class="text-gray-800 font-bold text-2xl mb-1">مرحبا مجدا</h1>
          <p class="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              required
              class="pl-2 outline-none border-none"
              type="text"
              name=""
              id=""
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="بريد الاكتروني"
            />
          </div>
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              required
              class="pl-2 outline-none border-none"
              type="text"
              name=""
              id=""
              placeholder="كلمة المرور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            onClick={() => {}}
            type="submit"
            class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            تسجيل دخول
          </button>

          <NavLink to="/Register">
            <button
              type="submit"
              class="block w-full bg-purple-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              انشاء حساب
            </button>
          </NavLink>
          <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer">
            Forgot Password ?
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
