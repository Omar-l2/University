import React, { useState, useEffect } from "react";
import { BsCurrencyDollar, BsArrowLeftShort } from "react-icons/bs";

import {
  Stacked,
  Pie,
  Button,
  LineChart,
  SparkLine,
  CarouselComponent,
} from "../components";
import { ordersData, ordersGrid } from "../data/grid";

// import product9 from "../data/product9.jpg";

import { Navigate, useNavigate } from "react-router-dom";

const InfoCard = ({ text, infoImage, number }) => {
  return (
    <>
      <div className=" shadow-md w-72 h-44 mx-3 bg-white mt-2 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl">
        <div className="flex flex-row">
          <button type="button" className="flex-none">
            <img
              src={infoImage}
              alt="infoimage"
              className="  w-10 opacity-0.9 hover:drop-shadow-xl"
            />
          </button>
          <p className="ml-3 flex-1 text-2xl text-gray-400 text-right">
            {text}
          </p>
        </div>
        <p className="mt-3">
          <span className=" text-3xl font-semibold">{number}</span>
        </p>
      </div>
    </>
  );
};

const Dashboard = () => {
  const Navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("email")) {
      Navigate("/Login");
    }
  }, []);
  return (
    <div className=" mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white shadow-md dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 mt-3  bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-2xl text-gray-400">
                عدد الدورات في المنصة
              </p>
              <p className="text-2xl">50</p>
            </div>
          </div>
          <div
            onClick={() => {
              Navigate("/More");
            }}
            className="mt-4"
          >
            <Button
              color="white"
              bgColor="blue"
              text="شاهد جميع الدورات"
              borderRadius="10px"
              size="md"
            ></Button>
          </div>
        </div>

        <div className="flex m-3 flex-wrap justify-center gap-1 items-center"></div>
        <InfoCard
          number="12"
          infoImage="../../assets/check.png"
          text="الدورات المكتملة"
        />
        <InfoCard
          number="12"
          infoImage="../../assets/process.png"
          text="الدورات في التقديم"
        />
        {/* <InfoCard
          number="12"
          infoImage="../../assets/star.png"
          text="الشهادات"
        /> */}
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl w-1000">
          <div className="felx font-extrabold text-xl text-right justify-between">
            <p className=" dark:text-white">واصل التعلم</p>
          </div>
          <div className=" mt-2 flex-row-reverse flex-nowrap flex ">
            <div className="basis-1/3 pt-1 pr-2 text-right">الدرس</div>
            <div className="dark:text-white basis-1/3 pt-1 pr-2 text-right">
              الدروس المتبقية
            </div>
            <div className="dark:text-white basis-1/3 pt-1 pr-2 text-right">
              النسبة
            </div>
            <BsArrowLeftShort
              className=" invisible basis-1/6 pt-1"
              size="30"
              color="purple"
            />
          </div>
          {ordersData.map((item, index) => {
            return (
              <div
                className=" mt-2 flex-row-reverse flex-nowrap flex h-12 place-items-center shadow-[0px_0px_10px_1px_rgba(0,0,0,0.25)] rounded-2xl"
                onClick={() => {
                  Navigate("/SubCourse/" + item.CourseName);
                }}
              >
                <div className="dark:text-white basis-1/3 pt-1 pr-2 text-right">
                  {item.CourseName}
                </div>
                <div className="dark:text-white basis-1/3 pt-1 pr-2 text-right">
                  {item.Number}
                </div>
                <div className="dark:text-white basis-1/3 pt-1 pr-2 text-right">
                  {item.Percent}
                </div>
                <BsArrowLeftShort
                  className="basis-1/6 pt-1"
                  size="30"
                  color="purple"
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="  flex gap-10 flex-wrap justify-center ">
        <div className=" bg-white dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl w-1000 ">
          <CarouselComponent />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
