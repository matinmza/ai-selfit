import { FC, useState } from "react";
import IconLogo from "../icons/IconLogo";
import SHARED_STRING from "../../constants/strings/shared.string";
import IconArrowRight from "../icons/IconArrowRight";
import IconArrowGreen from "../icons/IconArrowGreen";
import classNames from "classnames";
import SliderHeight from "../sliders/SliderHeight";

const UserHeightStep: FC<{
  onBack: () => void;
  onNext: (height: number) => void;
}> = ({ onNext }) => {
  const [active, setActive] = useState(180);
  return (
    <div className="container mx-auto h-full min-h-screen flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-center">
          <IconLogo />
        </div>
        <div className="w-full h-1 bg-gray-300 rounded-full overflow-hidden relative">
          <div className="bg-green-400 w-48 h-full"></div>
        </div>
        <div className="flex justify-between mt-[10px]">
          <div className="font-normal font-vazir">1/24</div>
          <div>
            <IconArrowRight />
          </div>
        </div>
        <div className="flex justify-between gap-5 mt-12 mb-16 items-center">
          <div className="font-iranSans  text-gray-200">
            {SHARED_STRING.PAGE_WEIGHT__WHAT_IS_YOUR_HIGHT}
          </div>
          <div className="font-iranSans  flex gap-2 items-center">
            <span className="font-normal">Cm</span>
            <span className="font-bold text-[28px]">{active}</span>
          </div>
        </div>

        <div className="flex  gap-1">
          <div className="h-[400px]">
            <SliderHeight active={active} onChange={(i) => setActive(i)} />
          </div>
          <div className="h-[375px] border-r-2 border-gray-300 flex items-center  justify-center ">
            <IconArrowGreen />
            <div className="font-iranSans  flex gap-2 items-center">
              <span className="font-normal">Cm</span>
              <span className="font-bold text-[28px]">{active}</span>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img
              src="/images/height-person.png"
              className={classNames([
                active < 100 && "scale-50",
                active < 120 && "scale-75",
                active < 130 && "scale-90",
                active < 150 && "scale-95",
                active > 180 && "scale-110",
                active > 200 && "scale-125",
                "transition-all duration-1000",
              ])}
              alt="person"
            />
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          onNext(active);
        }}
        className="w-full bg-primary-100 text-white  rounded-xl py-2 mb-7 "
      >
        {SHARED_STRING.SHARED_SUBMIT_AND_NEXT_STEP}
      </button>
    </div>
  );
};

export default UserHeightStep;
