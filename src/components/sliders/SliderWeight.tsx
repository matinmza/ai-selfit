import { SwiperSlide, Swiper } from "swiper/react";
import classNames from "classnames";
import "swiper/css";
import "swiper/css/virtual";
import { FC, useMemo } from "react";
import IconArrowGreen from "../icons/IconArrowGreen";

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

const SliderWeight: FC<{
  onChange: (newVal: number) => void;
  active: number;
}> = ({ active, onChange }) => {
  const weightList = useMemo(() => {
    return [...Array(300)]
      .map((_i, index) => ({
        weight: index + 1,
        uiType: createValue(index + 1),
      }))
      .reverse();
  }, []);

  return (
    <div className="ltr">
      <div className="w-full border-b border-gray-100 flex justify-center ">
        <IconArrowGreen className="rotate-90 mr-3" />
      </div>

      <Swiper
        slidesPerView={50}
        spaceBetween={4}
        centeredSlides={true}
        className="w-full select-none  "
        onActiveIndexChange={(s) => {
          onChange(300 - s.activeIndex);
        }}
        initialSlide={300 - active}
      >
        {weightList.map((i) => (
          <SwiperSlide
            className={classNames(["flex flex-col justify-center h-20"])}
            key={i.weight}
          >
            {i.uiType === "round10" && (
              <div className="relative h-10 w-14 ">
                <div className="bg-[#474747] h-6  w-0.5 absolute -top-4"></div>
                <div className=" absolute flex w-10 justify-center bottom-0 -left-4  ">
                  {i.weight}
                </div>
              </div>
            )}
            {i.uiType === "round5" && (
              <div className="bg-[#e0e0e0] absolute top-1 h-4 w-0.5"></div>
            )}
            {i.uiType === "notRound" && (
              <div className="bg-[#e0e0e0] absolute top-1 h-2 w-0.5"></div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderWeight;
