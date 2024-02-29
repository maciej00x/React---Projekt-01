import "./BoxSection.css";

const BoxSection = ({ offers }) => {
  return (
    <section className="box-section-style">
      <div className="our-services-content">
        <h3 className="box-header-style">Czym zajmuje się nasza firma?</h3>
        <div className="box-style">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`box ${offer.isNew ? "new-service" : "0"}`}
            >
              {offer.name}
              {offer.isNew(<span className="new-product-style">(nowość)</span>)}
              {offer.isNew && <div className="new-service-dot"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoxSection;