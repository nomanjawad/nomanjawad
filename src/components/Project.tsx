import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchProjects } from "@/lib/projectData";
import { MdArrowOutward } from "react-icons/md";

// Define the type for the Project object
type ProjectData = {
  id: number;
  title: string;
  featureImage: string;
  websiteurl: string;
};

const Project = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const rawData = await fetchProjects();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data: ProjectData[] = rawData.map((project: any) => ({
          id: Number(project.id),
          title: project.title || "",
          featureImage: project.featureImage,
          websiteurl: project.websiteurl || "",
        }));
        setProjects(data);
      } catch (error) {
        setError("Failed to load projects");
        console.error(error);
      }
    };
    getProjects();
  }, []);

  return (
    <section id="works" className="projects-area">
      <div className="container">
        <div className="container-inner">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title text-center wow fadeInUp delay-0-2s">
                <h2>Works & Projects</h2>
                <p>
                  Check out some of my design projects, meticulously crafted
                  with love and dedication.
                </p>
              </div>
            </div>
          </div>
          <div className="row project-masonry-active row-gap-5">
            {error && <p>{error}</p>}
            {projects.map((project) => (
              <div key={project.id} className="col-lg-4 col-md-6 item">
                <div className="project-item style-two wow fadeInUp delay-0-8s">
                  <Image
                    src={project.featureImage}
                    alt={project.title}
                    className="project-image"
                    fill
                  />
                  <a
                    href={project.websiteurl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-details-btn popup-youtube"
                  >
                    <MdArrowOutward />
                  </a>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
