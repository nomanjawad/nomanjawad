const Service = () => {
  return (
    <section id="service" className="services-area innerpage-single-area">
      <div className="container">
        <div className="container-inner">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title text-center wow fadeInUp delay-0-2s">
                <p>Services</p>
                <h2>Quality Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {/* START SINGLE SERVICE DESIGN AREA */}
            <div className="col-lg-4 col-md-6">
              <div className="service-item wow fadeInUp delay-0-2s">
                <i className="ri-global-fill"></i>
                <h4>Brand Identity Design</h4>
                <p>
                  Dorbesh gives you the blocks & kits you need to create a true
                  website within minutes.
                </p>
              </div>
            </div>
            {/* / END SINGLE SERVICE DESIGN AREA */}
            {/* START SINGLE SERVICE DESIGN AREA */}
            <div className="col-lg-4 col-md-6">
              <div className="service-item wow fadeInUp delay-0-4s">
                <i className="ri-quill-pen-line"></i>
                <h4>Website Design</h4>
                <p>
                  Dorbesh gives you the blocks & kits you need to create a true
                  website within minutes.
                </p>
              </div>
            </div>
            {/* / END SINGLE SERVICE DESIGN AREA */}
            {/* START SINGLE SERVICE DESIGN AREA */}
            <div className="col-lg-4 col-md-6">
              <div className="service-item wow fadeInUp delay-0-6s">
                <i className="ri-pantone-fill"></i>
                <h4>Application Design</h4>
                <p>
                  Dorbesh gives you the blocks & kits you need to create a true
                  website within minutes.
                </p>
              </div>
            </div>
            {/* / END SINGLE SERVICE DESIGN AREA */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
