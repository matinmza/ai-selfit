import { SwiperSlide, Swiper } from "swiper/react";
import classNames from "classnames";
import "swiper/css";
import "swiper/css/virtual";
import { FC, useMemo } from "react";

type round = "round10" | "round5" | "notRound";

const createValue = (index: number): round => {
  const round10 = index % 10 === 0;
  const round5 = index % 5 === 0;
  if (round10) {
    return "round10";
  }
  if (round5) {
    return "round5";
  }
  return "notRound";
};

const SliderHeight: FC<{
  onChange: (newVal: number) => void;
  active: number;
}> = ({ active, onChange }) => {
  const tall = useMemo(() => {
    return [...Array(300)]
      .map((_i, index) => ({
        height: index + 1,
        uiType: createValue(index + 1),
      }))
      .reverse();
  }, []);
  return (
    <div className="h-[375px] ltr">
      <Swiper
        slidesPerView={60}
        spaceBetween={1}
        centeredSlides={true}
        className="h-[375px]  select-none "
        onActiveIndexChange={(s) => {
          onChange(300 - s.activeIndex);
        }}
        direction="vertical"
        initialSlide={300 - active}
      >
        {tall.map((i) => (
          <SwiperSlide
            className={classNames([
              "flex flex-col justify-center",
              // active === i.height && "text-yellow-300",
            ])}
            key={i.height}
          >
            {i.uiType === "round10" && (
              <div className="relative h-10 w-14">
                <div className="bg-[#474747] h-0.5 w-6"></div>
                <div className="-rotate-90 absolute flex flex-col justify-center -top-3 right-0">
                  {i.height}
                </div>
              </div>
            )}
            {i.uiType === "round5" && (
              <div className="bg-[#ABABAB] h-0.5 w-4"></div>
            )}
            {i.uiType === "notRound" && (
              <div className="bg-[#e0e0e0] h-0.5 w-2"></div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderHeight;
