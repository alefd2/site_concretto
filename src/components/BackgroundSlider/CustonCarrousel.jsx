import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./custon_carrousel.module.css";

export const CustonCarrousel = ({ data, isMobile }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const autoSlide = useRef(null);

  useEffect(() => {
    setAutoPlay(!data.length > 1 || data[0].isVideo ? true : false);

    if (autoPlay) {
      const interval = setInterval(() => {
        nextSlide();
      }, 13000);

      autoSlide.current = interval;
    }

    return () => {
      if (autoSlide.current) {
        clearInterval(autoSlide.current);
      }
    };
  }, [currentSlide, autoPlay]);

  // Função que faz o slide passar com o toque da tela
  // precisa corrigir detalhes, mas funciona
  // se houver mais de um banner.
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    if (data.length > 1 || data[0].isVideo) return;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (data.length > 1 || data[0].isVideo) return;
    touchEndX.current = e.touches[0].clientX;
  };

  //#endregion

  const nextSlide = () => {
    if (!data.length > 1 || data[0].isVideo) return;
    setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
  };

  const prevSlide = () => {
    if (!data.length > 1 || data[0].isVideo) return;
    setCurrentSlide((prevSlide) => (prevSlide - 1 + data.length) % data.length);
  };

  const handleTouchEnd = () => {
    if (!data.length > 1 || data[0].isVideo) return;
    const deltaX = touchEndX.current - touchStartX.current;
    if (deltaX > 50) {
      prevSlide();
    } else if (deltaX < -50) {
      nextSlide();
    }
  };

  return (
    <div
      className={styles.carrousel_container}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={styles.carrousel_wrapper}
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: "transform 0.3s ease",
        }}
      >
        {data.map((item, i) => (
          <CustomCarrouselItem
            key={i}
            data={item}
            isMobile={isMobile}
            isActive={i === currentSlide}
          />
        ))}
      </div>

      {data.length > 1 || !data[0].isVideo ? (
        <div className={styles.carrousel_buttons}>
          <button onClick={prevSlide}>&#8249;</button>
          <button onClick={nextSlide}>&#8250;</button>
          <div className={styles.carrousel_dots}>
            {data.map((item, i) => (
              <div
                key={i}
                className={`${styles.dot} ${
                  i === currentSlide ? styles.activeDot : ""
                }`}
                onClick={() => setCurrentSlide(i)}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

const CustomCarrouselItem = ({ data, isMobile, isActive }) => {
  return (
    <div
      className={`${styles.carrousel_item} ${
        isActive ? styles.active : styles.inactive
      }`}
    >
      {data.isVideo ? (
        <div className={styles.wrapper_video}>
          <video loop muted playsInline autoPlay>
            <source src={`${data.srcVideo}`} type="video/mp4" />
          </video>
        </div>
      ) : (
        <img
          src={isMobile ? data.imgUrlmobile : data.imgWeb}
          alt={data.title}
        />
      )}

      <div className={styles.carrousel_caption}>
        <div className={styles.carrousel_caption_wrapper}>
          <h1 dangerouslySetInnerHTML={{ __html: data.title }} />
          <p dangerouslySetInnerHTML={{ __html: data.subtitle }} />

          <Link href={data.url} className={styles.buttonWrapper}>
            <div>{data.buttonText}</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
