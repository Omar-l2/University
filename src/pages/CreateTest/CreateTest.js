import React, { useState } from "react";
import classes from "./style";
import { useFormik } from "formik";
import strings from "../../Constants/strings";
import { courses, lessons, lines } from "../Main/helper";
import CustomTextField from "../CustomTextField/CustomTextField";
import CustomDropdownList from "../CustomDropdownList/CustomDropdownList";
import { Box, Button, Grid, Input } from "@mui/material";
import colors from "../../Constants/colors";

const CreateTest = () => {
  const [questions, setQuestions] = useState([]);
  const style = classes();
  const optionsSeries = ["الأول", "الثاني", "الثالث"];
  const formik = useFormik({
    initialValues: {
      lineType: "",
      courseName: "",
      lessonName: "",
      question: "",
      options: [],
      option1: "",
      option2: "",
      option4: "",
      currentOption: "",
    },
    onSubmit: () => {
      // to set the last question
      setQuestions([
        ...questions,
        {
          question: formik.values.question,
          options: formik.values.options,
        },
      ]);
      //to do : save the test on BE
    },
    onChange: (values) => {
      formik.setValues(values);
    },
  });
  const optionsEnd = formik.values.options?.length === 3;

  const handleKeyDown = (event) => {
    formik.setFieldValue("currentOption", "");
    if (event.key === "Enter") {
      formik.setFieldValue("options", [
        ...formik.values.options,
        event.target.value,
      ]);
    }
  };

  const handleQuestion = () => {
    setQuestions([
      ...questions,
      {
        question: formik.values.question,
        options: formik.values.options,
      },
    ]);
    formik.handleReset();
  };
  return (
    <Grid container style={style.box}>
      <Grid item xs={12}>
        <CustomDropdownList
          items={lines}
          label={strings.lineType}
          name={"lineType"}
          formik={formik}
        />
      </Grid>
      <Grid item xs={12} style={style.row}>
        <CustomDropdownList
          formik={formik}
          items={courses}
          label={strings.courseName}
          name={"courseName"}
        />
        <CustomDropdownList
          items={lessons}
          label={strings.lessonName}
          formik={formik}
          name={"lessonName"}
        />
      </Grid>
      <Grid item xs={12}>
        <CustomTextField
          name="question"
          label={strings.questions}
          formik={formik}
        />
      </Grid>
      <Grid item xs={3}>
        {formik.values.options?.map((op, index) => {
          return (
            <Box sx={style.option} key={`option${index}`}>
              <Input
                defaultValue={op}
                name={`option${index}`}
                inputProps={{
                  sx: style.optionInput,
                }}
              />
            </Box>
          );
        })}
        {!optionsEnd && (
          <CustomTextField
            name={"currentOption"}
            formik={formik}
            placeholder={`ادخل الخيار${
              optionsSeries[formik.values.options?.length]
            }`}
            onKeyDown={handleKeyDown}
            initializeValue={formik.values.currentOption}
          />
        )}
      </Grid>
      <Grid item xs={12} sx={style.buttons}>
        <Button
          variant="contained"
          sx={classes(colors.testDark).button}
          color="primary"
          onClick={handleQuestion}
        >
          سؤال التالي
        </Button>
        <Button
          onClick={formik.handleSubmit}
          variant="contained"
          sx={classes(colors.missionDark).button}
        >
          انشاءالامتحان
        </Button>
      </Grid>
    </Grid>
  );
};

export default CreateTest;
