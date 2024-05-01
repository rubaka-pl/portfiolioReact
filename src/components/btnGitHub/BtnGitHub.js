import imgIcon from "../../img/icons/gitHub-black.svg";
import { useLocalStorage } from "../../utils/useLocalStorage";
const BtnGitHub = ({ link }) => {
  return (
    <>
      <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
        <img src={imgIcon} alt="imgIcon" />
        GitHub repo
      </a>
    </>
  );
};

export default BtnGitHub;
