import React, { Component } from "react";
import "./CSS/Preference.css";
import axios from "../../ApiServices/axiosUrl";
import CourseTitle from "./CourseTitle";
import { Redirect } from "react-router-dom";
import Alert from "../Auth/Forms/alert";
import Layout from "../../components/Layout/Layout";

class Preference extends Component {
  state = {
    interest: [],
    userId: localStorage.getItem("userId"),

    Courses: {
      Physics: {
        touched: false,
      },
      Chemistry: {
        touched: false,
      },
      Mathematics: {
        touched: false,
      },
      Aptitude: {
        touched: false,
      },
      Biology: {
        touched: false,
      },
      Logical_Reasoning: {
        touched: false,
      },
    },
    redirect: null,
    alert: {
      valid: false,
      msg: "",
      alertType: "",
    },

    alertPressed: false,
    token: localStorage.getItem("user"),
  };

  AlertError(alertmsg, alertType) {
    const AlertArray = { ...this.state.alert };
    AlertArray.msg = alertmsg;
    AlertArray.valid = true;
    AlertArray.alertType = alertType;
    this.setState({ alert: AlertArray });
  }

  categoryHandler = (CourseName) => {
    if (this.state.Courses[CourseName].touched) {
      const UpdatedCourses = { ...this.state.Courses };
      UpdatedCourses[CourseName].touched = false;

      this.setState({ Courses: UpdatedCourses });
      const index = this.state.interest.indexOf(CourseName);
      if (index > -1) this.state.interest.splice(index, 1);
    } else {
      const UpdatedCourses = { ...this.state.Courses };
      UpdatedCourses[CourseName].touched = true;

      this.setState({ Courses: UpdatedCourses });
      this.state.interest.push(CourseName);
    }

    this.setState((prevState) => ({
      interest: prevState.interest,
      Courses: prevState.Courses,
    }));

    console.log(this.state.interest);
  };

  sumbitHandler = () => {
    // const fd =new FormData();
    const formData = {
      interest: this.state.interest,
      userId: this.state.userId,
    };
    this.setState({ alertPressed: true });
    setTimeout(() => this.setState({ alertPressed: false }), 3000);

    console.log(formData);

    //fd.append("userId",this.state.userId);
    //fd.append("interest",this.state.interest);

    axios
      .post("/home/interests/", formData, {
        headers: {
          Authorization:
            "Bearer " +
            this.state.token +
            " " +
            localStorage.getItem("ref_token"),
        },
      })
      .then((response) => {
        console.log("Preference Added");
        this.AlertError("Preferences Added", "success");
        this.setState({ redirect: "/home/preferences" });
      })
      .catch((error) => {
        console.log(error.response);
        if (error.response.statusText === "Internal Server Error") {
          this.setState({ redirect: "/login" });
        }
      });
  };

  render() {
    let alertContent = null;

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    var webdev, webdesigning, react, ml, photo, nodejs;

    if (this.state.Courses["Physics"].touched) {
      webdev = ["touched"];
    } else {
      webdev = [""];
    }

    if (this.state.Courses["Chemistry"].touched) {
      webdesigning = ["touched"];
    } else {
      webdesigning = [""];
    }
    if (this.state.Courses["Mathematics"].touched) {
      react = ["touched"];
    } else {
      react = [""];
    }
    if (this.state.Courses["Aptitude"].touched) {
      ml = ["touched"];
    } else {
      ml = [""];
    }
    if (this.state.Courses["Biology"].touched) {
      photo = ["touched"];
    } else {
      photo = [""];
    }
    if (this.state.Courses["Logical_Reasoning"].touched) {
      nodejs = ["touched"];
    } else {
      nodejs = [""];
    }

    if (this.state.alert.valid) {
      alertContent = (
        <Alert
          value={this.state.alertPressed}
          alertMsg={this.state.alert.msg}
          alertType={this.state.alert.alertType}
        />
      );
    }

    return (
      <Layout>
        <div className="container">
          {alertContent}
          <div className="title">
            <CourseTitle welcomeMessage={"Choose Your interests,"} />
          </div>
          <div className="Preference-buttons">
            <button
              className={webdev.join(" ")}
              onClick={() => this.categoryHandler("Physics")}
            >
              {" "}
              Physics
            </button>
            <button
              className={webdesigning.join(" ")}
              onClick={() => this.categoryHandler("Chemistry")}
            >
              {" "}
              Chemistry
            </button>
            <button
              className={react.join(" ")}
              onClick={() => this.categoryHandler("Mathematics")}
            >
              {" "}
              Mathematics
            </button>
            <button
              className={react.join(" ")}
              onClick={() => this.categoryHandler("Kids")}
            >
              {" "}
              Kids
            </button>
            <button
              className={ml.join(" ")}
              onClick={() => this.categoryHandler("Aptitude")}
            >
              {" "}
              Aptitude
            </button>
            <button
              className={photo.join(" ")}
              onClick={() => this.categoryHandler("Biology")}
            >
              {" "}
              Biology
            </button>
            <button
              className={nodejs.join(" ")}
              onClick={() => this.categoryHandler("Logical_Reasoning")}
            >
              {" "}
              Logical Reasoning
            </button>
          </div>

          <div className="SumbitBtn">
            <button onClick={this.sumbitHandler}>SUMBIT</button>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Preference;
