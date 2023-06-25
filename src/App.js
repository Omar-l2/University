import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  redirect,
} from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import CreateCourseT from "./pages/CreateCourseT";
import Main from "./pages/Main/Main";
import CreateTest from "./pages/CreateTest/CreateTest";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Dashboard,
  Customers,
  Calender,
  More,
  CreateCourse,
  Login,
  Register,
  CourseEx,
} from "./pages";
import "./App.css";
import { useStateContext } from "./contexts/ContextProvider";
import Test from "./pages/Test";

const App = () => {
  const { activeMenu, currentMode, themeSettings, setThemeSettings } =
    useStateContext();
  useEffect(() => {
    if (!localStorage.getItem("email")) {
      redirect("/Login");
    }
  }, []);
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl bg-slate-500 p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ borderRadius: "50%" }}
                onClick={() => {
                  setThemeSettings(true);
                }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              {" "}
              <Sidebar />
            </div>
          )}

          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
            <div>
              {themeSettings && <ThemeSettings />}
              <Routes>
                {/* Dashboard */}
                <Route
                  path="/"
                  element={
                    localStorage.getItem("email") ? <Dashboard /> : <Login />
                  }
                />
                <Route
                  path="/Dashboard"
                  element={
                    localStorage.getItem("email") ? <Dashboard /> : <Login />
                  }
                />
                <Route
                  path="/CreateCourseT"
                  element={
                    localStorage.getItem("email") &&
                    localStorage.getItem("userType") == "TEACHER" ? (
                      <CreateCourseT />
                    ) : (
                      <Login />
                    )
                  }
                />
                {/* Pages */}
                <Route
                  path="/Customers"
                  element={
                    localStorage.getItem("email") ? <Customers /> : <Login />
                  }
                />
                <Route
                  path="/Calender"
                  element={
                    localStorage.getItem("email") ? <Calender /> : <Login />
                  }
                />
                <Route
                  path="/More"
                  element={localStorage.getItem("email") ? <More /> : <Login />}
                />
                {/* <Route
                  path="/CreateTest"
                  element={
                    localStorage.getItem("email") ? <CreateTest /> : <Login />
                  }
                /> */}
                <Route
                  path="/NewCourse"
                  element={
                    localStorage.getItem("email") &&
                    localStorage.getItem("userType") == "TEACHER" ? (
                      <CreateCourse />
                    ) : (
                      <Dashboard />
                    )
                  }
                />
                <Route
                  path="/NewTest"
                  element={
                    localStorage.getItem("email") &&
                    localStorage.getItem("userType") == "TEACHER" ? (
                      <CreateTest />
                    ) : (
                      <Dashboard />
                    )
                  }
                />
                <Route
                  path="/SubCourse/:id"
                  element={localStorage.getItem("email") ? <Main /> : <Login />}
                />
                <Route
                  path="/Test/:id"
                  element={localStorage.getItem("email") ? <Test /> : <Login />}
                />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route
                  path="/Courses/:id"
                  element={
                    localStorage.getItem("email") ? <CourseEx /> : <Login />
                  }
                />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
