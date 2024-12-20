import {
  RiNextjsFill,
  RiReactjsFill,
  RiTailwindCssFill,
  RiWordpressFill,
} from "react-icons/ri";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { FaWebflow } from "react-icons/fa6";

const Skills = () => {
  return (
    <section id="skills" className="skill-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12 col-lg-12">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              <p>Pro Skills</p>
              <h2>Let’s Explore My Skills</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="skill-items-wrap">
              <div className="row">
                <div className="col-lg-3 col-sm-6 col-xs-12">
                  <div className="skill-item wow fadeInUp delay-0-2s">
                    <RiReactjsFill fontSize={27} color="var(--primary-color)" />
                    <h5>React</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12">
                  <div className="skill-item wow fadeInUp delay-0-3s">
                    <RiTailwindCssFill
                      fontSize={27}
                      color="var(--primary-color)"
                    />
                    <h5>Tailwand</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12">
                  <div className="skill-item wow fadeInUp delay-0-4s">
                    <SiTypescript fontSize={27} color="var(--primary-color)" />
                    <h5>Typescript</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12">
                  <div className="skill-item wow fadeInUp delay-0-5s">
                    <RiWordpressFill
                      fontSize={27}
                      color="var(--primary-color)"
                    />
                    <h5>WordPress</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12">
                  <div className="skill-item wow fadeInUp delay-0-2s">
                    <TbBrandThreejs
                      fontSize={27}
                      color="var(--primary-color)"
                    />
                    <h5>ThreeJs</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12">
                  <div className="skill-item wow fadeInUp delay-0-3s">
                    <FaWebflow fontSize={27} color="var(--primary-color)" />
                    <h5>Webflow</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12">
                  <div className="skill-item wow fadeInUp delay-0-4s">
                    <SiJavascript fontSize={27} color="var(--primary-color)" />
                    <h5>Javascript</h5>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-12">
                  <div className="skill-item wow fadeInUp delay-0-5s">
                    <RiNextjsFill fontSize={27} color="var(--primary-color)" />
                    <h5>NextJs</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
