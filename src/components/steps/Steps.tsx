import { useMemo, useState } from "react";
import UserHeightStep from "./UserHeightStep";
import UserWeightStep from "./UserWeightStep";

// type stepsT = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
const Steps = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const ActiveComponent = useMemo(() => {
    switch (activeStep) {
      case 1:
        return UserHeightStep;
      case 2:
        return UserWeightStep;
      default:
        return UserHeightStep;
    }
  }, [activeStep]);

  return (
    <>
      <ActiveComponent
        onNext={() => {
          setActiveStep((cur) => cur + 1);
        }}
        onBack={() => {
          setActiveStep((cur) => cur - 1);
        }}
      />
    </>
  );
};

export default Steps;
