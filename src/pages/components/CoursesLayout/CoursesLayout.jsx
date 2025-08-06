import styles from "./CoursesLayout.module.css";
import logo from "../../../assets/logoELearning.png";
import avatarAccount from "../../../assets/Courses/avatarAccount.png";
import courseInformation from "../../../assets/Courses/courseInformation.png";
import addCourseInfo from "../../../assets/Courses/addCourseInfo.png";
import removeCourse from "../../../assets/Courses/removeCourse.png";
import { Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import { NavNagavigateToPage } from "./NavNagavigateToPage";
import { UserContext } from "../UserContext";
import { listUserAccount } from "../../Login/useLogin";

export function CoursesLayout() {
  const { user } = useContext(UserContext);
  const userLogedIn = getCoursesByUser(user);
  const [activeItem, setActiveItem] = useState("courses");

  return (
    <div className={styles.coursesContainer}>
      <div className={styles.headingContainer}>
        <div className={styles.contentNavHeading}>
          <img
            className={styles.logoELearning}
            src={logo}
            alt="logo-ELearning"
          />
          <h2>E-Learning</h2>
        </div>
        <div className={styles.contentNavHeading}>
          <img
            className={styles.avatarAccount}
            src={avatarAccount}
            alt="Avatar Account"
          />
          <p className={styles.fontUsername}>{userLogedIn.fullName}</p>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.navLeftContainer}>
          <NavNagavigateToPage
            stylesProps={styles}
            imgSrc={courseInformation}
            navigateTo="courses"
            pageName="Courses information"
            isActive={activeItem === "courses"}
            onClick={() => setActiveItem("courses")}
          />

          <NavNagavigateToPage
            stylesProps={styles}
            imgSrc={addCourseInfo}
            navigateTo="courses/add-course"
            pageName="Add Course Info"
            isActive={activeItem === "courses/add-course"}
            onClick={() => setActiveItem("courses/add-course")}
          />

          <NavNagavigateToPage
            stylesProps={styles}
            imgSrc={removeCourse}
            navigateTo="courses/remove-course"
            pageName="Remove Course Info"
            isActive={activeItem === "courses/remove-course"}
            onClick={() => setActiveItem("courses/remove-course")}
          />
        </div>

        <div className={styles.contentRightContainer}>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

function getCoursesByUser(user) {
  if (!user || !user.id) return null;
  return listUserAccount.find((users) => users.id === user.id);
}
