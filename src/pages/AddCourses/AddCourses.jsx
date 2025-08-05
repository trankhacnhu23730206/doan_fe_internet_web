import { DisplayCourses } from "./addCourses";
import styles from "./AddCourses.module.css";

export function AddCoursesPage() {
  return (
    <div>
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
