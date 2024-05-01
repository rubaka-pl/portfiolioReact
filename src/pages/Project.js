import { useParams } from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import img from "./../img/projects/02-big.jpg";
import { projects } from "../helpers/projectsList";

const Project = () => {
  const { id } = useParams();
  const project = projects[id];
  return (
    <>
      <main className="section">
        <div className="container">
          <div className="project-details">
            <h1 className="title-1">{project.title}</h1>
            <img
              src={project.bigImg}
              alt={project.title}
              className="project-details__cover"
            />

            <div className="project-details__desc">
              <p>Skills: {project.skills}</p>
            </div>
            {/* проверка есть ли ссылка на гитхаб. если нет то она не рендерится */}
            {project.gitHublink && <BtnGitHub link={project.gitHublink} />}
          </div>
        </div>
      </main>
    </>
  );
};

export default Project;
