import { FC } from "react";

const IconArrowRight: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20 12.9999L20 10.9999L8 10.9999L13.5 5.49992L12.08 4.07992L4.16 11.9999L12.08 19.9199L13.5 18.4999L8 12.9999L20 12.9999Z"
        fill="#363C4F"
      />
    </svg>
  );
};

export default IconArrowRight;
