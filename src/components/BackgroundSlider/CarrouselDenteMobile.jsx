import Carousel from "react-bootstrap/Carousel";
import Link from "next/link";
import styles from "./carrousel.module.css";

export const CarouselDenteMobile = ({
  title,
  subtitle,
  buttonText,
  url,
  imgUrl,
}) => {
  return (
    <Carousel indicators={false} fade style={{ marginTop: "24px" }}>
      <Carousel.Item>
        <div className={styles.wrapper}>
          <img
            className="d-block"
            src={imgUrl}
            alt="slide"
            height="100%"
            width="100%"
          />
          <Carousel.Caption>
            <Link href="meuplano/" className={styles.buttonWrapperMobile}>
              <div>{buttonText}</div>
            </Link>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};
