import { Grid } from "@mui/material";
import classes from "./style";
import CustomTitle from "../CustomTitle/CustomTitle";
import strings from "../../Constants/strings";
import colors from "../../Constants/colors";
import Course from "../Course/Course";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
const Main = () => {
  const [course, setCourse] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/course/" +
            location.pathname.slice("/SubCourse/".length)
        );
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        const data = await response.json();
        setCourse(data);
        console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchCourses();
  }, [location]);

  const style = classes();
  const navigate = useNavigate();
  return (
    <Grid container spacing={2} style={style.container}>
      <Grid item xs={12}>
        <CustomTitle
          title={strings.courses}
          bgColor={colors.testDark}
          withLine
        />
        <div className="container mx-auto">
          {Array.isArray(course.lessons) && course.lessons.length > 0 ? (
            course.lessons.map((lesson) => (
              <div key={lesson.id}>
                <div
                  key={lesson.id}
                  onClick={() => {
                    if (!lesson.isClosed) {
                      console.log("redirected");
                      navigate(`/Courses/${lesson.id}`, {
                        state: { lessons: course.lessons },
                      });
                    }
                  }}
                >
                  <Course
                    number={lesson.id}
                    name={lesson.title}
                    image={"/assets/CourseImage.png"}
                    status={lesson.status}
                    isClosed={lesson.isClosed}
                  />
                </div>
              </div>
            ))
          ) : (
            <div>No lessons available</div>
          )}
        </div>
      </Grid>
      {/* <Grid item xs={3}>
        <CustomTitle
          title={strings.upcomingEvents}
          bgColor={colors.testLight}
        />
        {mockEvents.map((e) => {
          return (
            <div key={e.key}>
              <UpcomingEvent
                category={e.category}
                type={e.type}
                title={e.title}
              />
            </div>
          );
        })}
      </Grid> */}
    </Grid>
  );
};

export default Main;
