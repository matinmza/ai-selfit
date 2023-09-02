import { FC, useState } from "react";
import IconLogo from "../icons/IconLogo";
import SHARED_STRING from "../../constants/strings/shared.string";
import IconArrowRight from "../icons/IconArrowRight";

import classNames from "classnames";

import SliderWeight from "../sliders/SliderWeight";

const UserWeightStep: FC<{
  onBack: () => void;
  onNext: (weight: number) => void;
}> = ({ onBack, onNext }) => {
  const [active, setActive] = useState(60);
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
          <div onClick={() => onBack()}>
            <IconArrowRight />
          </div>
        </div>
        <div className="flex justify-between gap-5 mt-12 mb-16 items-center">
          <div className="font-iranSans  text-gray-200">
            {SHARED_STRING.PAGE_WEIGHT__WHAT_IS_YOUR_WEIGHT}
          </div>
          <div className="font-iranSans  flex gap-2 items-center">
            <span className="font-normal">Cm</span>
            <span className="font-bold text-[28px]">{active}</span>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-center">
            <img
              src="/images/height-person.png"
              className={classNames([
                active < 30 && "scale-x-[0.5]",
                active < 40 && "scale-x-50",

                active < 50 && "scale-x-75",
                active < 60 && "scale-x-90",
                active > 80 && "scale-x-105",
                active > 85 && "scale-x-110",
                active > 90 && "scale-x-125",
                active > 130 && "scale-x-150",
                active > 160 && "scale-x-[1.8]",
                "transition-all duration-1000",
              ])}
              alt="person"
            />
          </div>

          <div className="w-full">
            <SliderWeight active={active} onChange={(i) => setActive(i)} />
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

export default UserWeightStep;
