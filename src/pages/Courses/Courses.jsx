import styles from "./Courses.module.css";
import logo from "../../assets/logoELearning.png";
import avatarAccount from "../../assets/Courses/avatarAccount.png";
import courseInformation from "../../assets/Courses/courseInformation.png";
import addCourseInfo from "../../assets/Courses/addCourseInfo.png";
import removeCourse from "../../assets/Courses/removeCourse.png";

export function Courses() {
  return (
    <div className={styles.coursesContainer}>
      <div className={styles.headingContainer}>
        <div className={styles.contentLeftContainer}>
          <img
            className={styles.logoELearning}
            src={logo}
            alt="logo-ELearning"
          />
          <h1>E-Learning</h1>
        </div>
        <div className={styles.contentRightContainer}>
          <img src={avatarAccount} alt="logo-ELearning" />
          <p>Phan Nhat Hoa</p>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.navLeftContainer}>
          <div className={styles.courseInformation}>
            <img src={courseInformation} alt="Course-Information" />
            <p>Course Information</p>
          </div>
          <div className={styles.courseInformation}>
            <img src={addCourseInfo} alt="Add Course Info" />
            <p>Add Course Info</p>
          </div>
          <div className={styles.courseInformation}>
            <img src={removeCourse} alt="Remove Course" />
            <p>Remove Course</p>
          </div>
        </div>
      </div>
      <div className={styles.informationContainer}></div>
    </div>
  );
}
