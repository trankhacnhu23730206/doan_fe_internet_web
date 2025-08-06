import styles from "./Courses.module.css";
import { DisplayCourses } from "./courses";

export function Courses() {
  return (
    <div>
      <h1 className={styles.courseHeading}>Course Information</h1>
      <div className={styles.courseTitleContainer}>
        <div className={styles.courseTitleInfor}>NO.</div>
        <div className={styles.courseTitleInfor}>Course Code</div>
        <div className={styles.courseTitleInfor}>Subject Name</div>
        <div className={styles.courseTitleInfor}>Credits</div>
        <div className={styles.courseTitleInfor}>Professor</div>
        <div className={styles.courseTitleInfor}>School Year</div>
      </div>
      <DisplayCourses stylesProps={styles} />
    </div>
  );
}
