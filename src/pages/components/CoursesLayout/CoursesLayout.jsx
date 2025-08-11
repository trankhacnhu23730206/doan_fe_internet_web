import { useState, useRef, useEffect } from "react";
import styles from "./CoursesLayout.module.css";
import logo from "../../../assets/logoELearning.png";
import avatarAccount from "../../../assets/Courses/avatarAccount.png";
import courseInformation from "../../../assets/Courses/courseInformation.png";
import addCourseInfo from "../../../assets/Courses/addCourseInfo.png";
import removeCourse from "../../../assets/Courses/removeCourse.png";
import passwordKeyImage from "../../../assets/Courses/passwordKeyImage.png";
import logOut from "../../../assets/Courses/logout.png";
import { Outlet } from "react-router-dom";
import { NavNagavigateToPage } from "./NavNagavigateToPage";
import { getCoursesByUser } from "./CoursesLayout.js";

export function CoursesLayout() {
  const userLogedIn = getCoursesByUser();
  const [activeItem, setActiveItem] = useState("courses");
  const [showProfile, setShowProfile] = useState(false);
  const profileRef = useRef(null); 
  const headingAvatarRef = useRef(null);

  useEffect(() => {
  function handleClickOutside(event) {
    if (
      (profileRef.current) &&
      (!profileRef.current.contains(event.target)) &&
      (headingAvatarRef.current) &&
      (!headingAvatarRef.current.contains(event.target))
    ) {
      setShowProfile(false);
    }
  }
  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

  return (
    <div className={styles.coursesContainer}>
      <div className={styles.headingContainer}>
        <div className={styles.contentNavHeading}>
          <img className={styles.logoELearning} src={logo} alt="logo-ELearning" />
          <h2>E-Learning</h2>
        </div>
        <div
          ref={headingAvatarRef}
          className={styles.contentNavHeadingAvatar}
          onClick={() => setShowProfile(!showProfile)}
        >
          <img className={styles.avatarAccount} src={avatarAccount} alt="Avatar Account" />
          <p className={styles.fontUsername}>{userLogedIn.fullName}</p>
        </div>
      </div>

      {showProfile && (
        <div className={styles.navHeadingProfileContainer} ref={profileRef}>
          <div className={styles.navHeadingProfileContent}>
            <img className={styles.logoInfo} src={passwordKeyImage} alt="Password Key" />
            <p>Account</p>
          </div>
          <div className={styles.navHeadingProfileContent}>
            <img className={styles.logoInfo} src={logOut} alt="Log Out" />
            <p>Log Out</p>
          </div>
        </div>
      )}

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
          <Outlet />
        </div>
      </div>
    </div>
  );
}

