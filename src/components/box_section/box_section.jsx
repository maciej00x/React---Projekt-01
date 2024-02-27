import React from "react";
import "./box_section.css";

const BoxSection = () => {
  return (
    <section className="section box-section-style">
      <div className="container our-services-content">
        <h3 className="box-header-style">Czym zajmuje się nasz firma?</h3>
        <div className="box-style">
          <div className="box new-service">
            Usługa 1 <span className="new-product-style">(nowość)</span>
            <div className="new-service-dot"></div>
          </div>
          <div className="box">Usługa 2</div>
          <div className="box">Usługa 3</div>
          <div className="box">Usługa 4</div>
          <div className="box">Usługa 5</div>
          <div className="box">Usługa 6</div>
        </div>
      </div>
    </section>
  );
};

export default BoxSection;
