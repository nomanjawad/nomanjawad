const Experience = () => {
  return (
    <section id="resume" className="resume-area">
      <div className="container">
        <div className="resume-items">
          <div className="row">
            {/* START EXPERIENCE RESUME DESIGN AREA */}
            <div className="col-xl-12 col-md-12">
              <div className="single-resume">
                <h2>Experience</h2>
                <div className="experience-list">
                  {/* START SINGLE RESUME DESIGN AREA */}
                  <div className="resume-item wow fadeInUp delay-0-3s">
                    <div className="icon">
                      <i className="ri-book-line"></i>
                    </div>
                    <div className="content">
                      <span className="years">2021 - Present</span>
                      <h4>Themeforest Market</h4>
                      <span className="company"> Web Designer </span>
                    </div>
                  </div>
                  {/* / END SINGLE RESUME DESIGN AREA */}
                  {/* START SINGLE RESUME DESIGN AREA */}
                  <div className="resume-item wow fadeInUp delay-0-3s">
                    <div className="icon">
                      <i className="ri-book-line"></i>
                    </div>
                    <div className="content">
                      <span className="years">2021 - 2023</span>
                      <h4>Envato Theme Developer</h4>
                      <span className="company">Web Development</span>
                    </div>
                  </div>
                  {/* / END SINGLE RESUME DESIGN AREA */}
                  {/* START SINGLE RESUME DESIGN AREA */}
                  <div className="resume-item wow fadeInUp delay-0-3s">
                    <div className="icon">
                      <i className="ri-book-line"></i>
                    </div>
                    <div className="content">
                      <span className="years">2021 - 2022</span>
                      <h4> Marketing Expert GRP</h4>
                      <span className="company">
                        Web Developer & Business Partner
                      </span>
                    </div>
                  </div>
                  {/* / END SINGLE RESUME DESIGN AREA */}
                </div>
              </div>
            </div>
            {/* // END EXPERIENCE RESUME DESIGN AREA */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
