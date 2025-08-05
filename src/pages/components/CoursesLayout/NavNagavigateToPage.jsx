import { useNavigate } from "react-router-dom";

export function NavNagavigateToPage({
  stylesProps,
  imgSrc,
  navigateTo,
  pageName,
  isActive,
  onClick,
}) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/${navigateTo}`);
    if (onClick) onClick();
  };

  const classNames = `${stylesProps.navItems} ${
    isActive ? stylesProps.active : ""
  }`;

  return (
    <div className={classNames} onClick={handleNavigate}>
      <img
        className={stylesProps.imageCourseInfor}
        src={imgSrc}
        alt={`${pageName}-Information`}
      />
      <p>{pageName}</p>
    </div>
  );
}
