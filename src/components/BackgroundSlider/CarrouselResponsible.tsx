import { CustonCarrousel } from "./CustonCarrousel";

function CarrouselResponsible({ data }: any) {
  return (
    <>
      <div className="carrouselNormal">
        <CustonCarrousel data={data} isMobile={false} />
      </div>
      <div className="carrouselMobile">
        <CustonCarrousel data={data} isMobile={true} />
      </div>
    </>
  );
}

export default CarrouselResponsible;
