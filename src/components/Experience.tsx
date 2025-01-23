import { fetchExperience } from "@/lib/experienceData";
import { useState, useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

// Define the type for the Experience object
type ExperienceData = {
  id: number;
  jobTitle: string;
  companyName: string;
  jobDuration: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  jobDiscription: any;
  companyLogoUrl: string;
};

const Experience = () => {
  const [experience, setExperience] = useState<ExperienceData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const rawData = await fetchExperience();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data: ExperienceData[] = rawData.map((experience: any) => ({
          id: Number(experience.id),
          jobTitle: experience.jobTitle || "",
          companyName: experience.companyName || "",
          jobDuration: experience.jobDuration || "",
          jobDiscription: experience.jobDiscription || "",
          companyLogoUrl: experience.companyLogoUrl || "",
        }));
        console.log(data);
        setExperience(data);
      } catch (error) {
        setError("Failed to load projects");
        console.error(error);
      }
    };
    getProjects();
  }, []);

  return (
    <div id="resume" className="resume-area">
      <div className="container">
        <div className="resume-items">
          <div className="row">
            {/* START EXPERIENCE RESUME DESIGN AREA */}
            <div className="col-xl-12 col-md-12">
              <div className="single-resume">
                <h2>Experience</h2>
                <div className="experience-list">
                  {/* START SINGLE RESUME DESIGN AREA */}
                  {error && <p>{error}</p>}
                  {experience.map((exp) => (
                    <div
                      key={exp.id}
                      className="resume-item wow fadeInUp delay-0-3s position-relative d-flex align-items-center justify-content-between"
                    >
                      <Image
                        src={exp.companyLogoUrl}
                        alt={exp.companyName}
                        fill
                        className="company-logo d-block position-relative w-15 h-auto"
                      />
                      <div className="content w-75">
                        <span className="years">{exp.jobDuration}</span>
                        <h4>{exp.jobTitle}</h4>
                        <a href={exp.companyLogoUrl} className="company">
                          {exp.companyName}
                        </a>
                        <div>
                          {exp.jobDiscription
                            ? documentToReactComponents(exp.jobDiscription)
                            : "No description available"}
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* / END SINGLE RESUME DESIGN AREA */}
                </div>
              </div>
            </div>
            {/* // END EXPERIENCE RESUME DESIGN AREA */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
