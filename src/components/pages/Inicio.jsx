import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../pages/css/Style.css'

const Inicio = () => {
  return (
    <div>
      <section>
        <article className="">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block imagen"
                src="https://www.nintendo.com/eu/media/images/10_share_images/portals_3/2x1_Hub_TheLegendOfZelda_ToTK.jpg"
                alt="The Legend of Zelda: Tears of the Kingdom"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block imagen"
                src="https://i.blogs.es/5fe30d/fifa-21-intros_1/1366_2000.jpeg"
                alt="Fifa 2021"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block imagen"
                src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/02/guia-trucos-witcher-3-wild-hunt.jpg?tf=3840x"
                alt="witcher 3"
              />
            </Carousel.Item>
          </Carousel>
        </article>
      </section>
    </div>
  );
};

export default Inicio;
