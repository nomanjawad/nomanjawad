const Project = () => {
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
                  with love and dedication, each one reflecting the passion and
                  soul I poured into every detail.
                </p>
              </div>
            </div>
          </div>
          <div className="row project-masonry-active">
            {/* START SINGLE PORTFOLIO DESIGN AREA */}
            <div className="col-lg-4 col-md-6 item design marketing graphics">
              <div className="project-item style-two wow fadeInUp delay-0-8s">
                <div className="project-image">
                  <img src="assets/images/projects/work6.jpg" alt="Project" />
                  <a
                    href="https://www.youtube.com/watch?v=qZEPs3vmYB4"
                    className="details-btn popup-youtube"
                  >
                    <i className="ri-arrow-right-up-line"></i>
                  </a>
                </div>
                <div className="project-content">
                  <span className="sub-title">Design</span>
                  <h3>Website Development</h3>
                </div>
              </div>
            </div>
            {/* / END SINGLE PORTFOLIO DESIGN AREA */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
