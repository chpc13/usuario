import React from "react";
import "./Tarjetatour.css";

const Tarjetatour = () => {
  return (

    <div className="Tours-tittle">
      <section className="graffitour">
        <i class="ph-code-simple-fill"></i>
        <div>
          <img className="casakolacho1"
            src="https://www.2020noticias.com/wp-content/uploads/2020/12/Graffitour-2.jpg"
            alt="esta es una imagen de casa kolacho-graffitour"/>
        </div>
        <h2>GRAFFITOUR</h2>
        <p>CASA KOLACHO</p>
      </section>
      <br />
      <section className="afrotour">
        <i class="ph-code-simple-fill"></i>
        <div>
          <img
            className="sonbata1"
            src="https://cloudfront-us-east-1.images.arcpublishing.com/semana/3GF3E3LIKBHXJABFAFHKY72CZQ.jpg"
            alt="esta es una imagen de sonbatá-afrotour"
          />
        </div>
        <h2>AFROTOUR</h2>
        <p>SONBATÁ</p>
      </section>
      <br />
      <section className="ecoparque">
        <i class="ph-code-simple-fill"></i>
        <div>
          <img
            className="ecoparque1"
            src="https://www.elcolombiano.com/binrepository/998x666/0c0/998d562/none/11101/HKSR/mecoparque-17_37319700_20210309155547.jpg"
            alt="esta es una imagen del ecoparque comuna 13"
          />
        </div>
        <h2>ECOPARQUE</h2>
        <p>CONCEJAL</p>
      </section>
    </div>
  );
};


export default Tarjetatour;
