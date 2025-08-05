import styles from "../Courses/Courses.module.css";
import logo from "../../assets/logoELearning.png";
import avatarAccount from "../../assets/Courses/avatarAccount.png";
import courseInformation from "../../assets/Courses/courseInformation.png";
import addCourseInfo from "../../assets/Courses/addCourseInfo.png";
import removeCourse from "../../assets/Courses/removeCourse.png";
import { NavNagavigateToPage } from "../components/NavNagavigateToPage";
import { Outlet } from "react-router-dom";

export function CoursesLayout() {
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
          <p className={styles.fontUsername}>Phan Nhật Hòa</p>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.navLeftContainer}>
          <NavNagavigateToPage
            stylesProps={styles}
            imgSrc={courseInformation}
            navigateTo="courses"
            pageName="Courses information"
          />

          <NavNagavigateToPage
            stylesProps={styles}
            imgSrc={addCourseInfo}
            navigateTo="add-course"
            pageName="Add Course Info"
          />

          <NavNagavigateToPage
            stylesProps={styles}
            imgSrc={removeCourse}
            navigateTo="remove-course"
            pageName="Remove Course Info"
          />
        </div>

        <div className={styles.contentRightContainer}></div>
      </div>
      <div className={styles.informationContainer}></div>
      <Outlet></Outlet>
    </div>
  );
}
