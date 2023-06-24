import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMenuOutline, IoGrid, IoSettingsOutline } from "react-icons/io5";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Courses } from "../data/courses";
import { TfiMore } from "react-icons/tfi";
import { AiOutlineFile, AiOutlineBulb } from "react-icons/ai";
import { Premium } from "./Premium";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";
  const [openPremium, setPremium] = useState(false);
  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:8080/course");
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="top-2/4 w-11/12 ml-3 h-screen md md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight"
            >
              <img
                className="h-10 w-10"
                src="../../assets/Logo.png"
                alt=""
                srcset=""
              />
              <span className="dark:text-white text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Codunity
              </span>
            </Link>

            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() =>
                  setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                }
                className="text-xl p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <IoMenuOutline />
              </button>
            </TooltipComponent>
          </div>

          <div className="mt-10">
            {/* Dashboard */}
            <div>
              <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase font-extrabold text-2xl">
                الرئيسية
              </p>

              <NavLink
                to="/Dashboard"
                onClick={handleCloseSideBar}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? currentColor : "",
                })}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <IoGrid />
                <span className="capitalize text-xl">الصفحة الرئيسية</span>
              </NavLink>
            </div>
            {/* Settings */}
            {/* <div>
              <NavLink
                to="/Settings"
                onClick={handleCloseSideBar}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? currentColor : "",
                })}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <IoSettingsOutline />
                <span className="capitalize text-xl">اعدادات</span>
              </NavLink>
            </div> */}
            {/* Courses */}
            <div>
              <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase font-extrabold text-2xl">
                الدورات
              </p>
              {courses.map(
                (coursearr, index) =>
                  index < 3 && (
                    <NavLink
                      key={coursearr.id}
                      to={`/SubCourse/${coursearr.id}`}
                      onClick={handleCloseSideBar}
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? currentColor : "",
                      })}
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                    >
                      {coursearr.icon}
                      <span className="capitalize text-xl">
                        {coursearr.name}
                      </span>
                    </NavLink>
                  )
              )}
              <NavLink
                to="/More"
                onClick={handleCloseSideBar}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? currentColor : "",
                })}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <TfiMore />
                <span className="capitalize text-xl">المزيد</span>
              </NavLink>
            </div>
            {/* Create Course */}
            {localStorage.getItem("userType") == "TEACHER" ? (
              <div>
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase font-extrabold text-2xl">
                  انشاء دورة
                </p>
                <NavLink
                  to="/NewCourse"
                  onClick={handleCloseSideBar}
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? currentColor : "",
                  })}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <AiOutlineFile size={22} />
                  <span className="capitalize text-xl">انشاء درس</span>
                </NavLink>
                <NavLink
                  to="/CreateCourseT"
                  onClick={handleCloseSideBar}
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? currentColor : "",
                  })}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <AiOutlineFile size={22} />
                  <span className="capitalize text-xl">انشاء الدورة</span>
                </NavLink>
                <NavLink
                  to="/NewTest"
                  onClick={handleCloseSideBar}
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? currentColor : "",
                  })}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <AiOutlineBulb size={22} />
                  <span className="capitalize text-xl">انشاء اختبار</span>
                </NavLink>
              </div>
            ) : (
              <div></div>
            )}
            {localStorage.getItem("Premium") == "false" ? (
              <div>
                <div class="mx-4">
                  <div
                    class="relative flex flex-col min-w-0 break-words p-4 bg-purple-300 border-0 shadow-none rounded-2xl bg-clip-border"
                    sidenav-card
                  >
                    <img
                      class="w-1/2 mx-auto"
                      src="../../assets/diamond.png"
                      alt="Diamond"
                    />
                    <div class="flex-auto w-full p-4 pt-0 text-center">
                      <h6 class="mb-0 mt-3 text-lg text-white ">
                        الاشتراك الذهبي
                      </h6>
                      <p class="mb-0 text-lg font-semibold leading-tight text-white dark:opacity-60">
                        أكتشف المزيد من الدورات مع العضوية الذهبية
                      </p>
                    </div>
                    <button
                      class=" mt-3 mb-3 inline-block w-full px-8 py-2 text-lg font-bold leading-normal text-center text-violet-400 align-middle transition-all ease-in bg-white border-0 rounded-lg shadow-md select-none bg-150 bg-x-25 hover:shadow-xs hover:-translate-y-px"
                      onClick={() => {
                        setPremium(true);
                      }}
                    >
                      احصل
                    </button>
                    {openPremium ? (
                      <div className=" z-20">
                        <Premium
                          open={openPremium}
                          onClose={() => {
                            setPremium(false);
                          }}
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
