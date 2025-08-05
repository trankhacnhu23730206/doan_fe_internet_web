import { useNavigate } from "react-router-dom";

export function NavNagavigateToPage({
  stylesProps,
  imgSrc,
  navigateTo,
  pageName,
}) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/${navigateTo}`);
  };
  return (
    <div className={stylesProps.courseInformation} onClick={handleNavigate}>
      <img
        className={stylesProps.imageCourseInfor}
        src={imgSrc}
        alt={`${pageName}-Information`}
      />
      <p>{pageName}</p>
    </div>
  );
}
