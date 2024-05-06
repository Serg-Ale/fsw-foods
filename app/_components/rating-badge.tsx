import { StarIcon } from "lucide-react";
import React from "react";
interface RatingBadgeProps {
  backgroundColor: string;
  textColor: string;
  fillColor: string;
}

const RatingBadge = ({
  backgroundColor,
  textColor,
  fillColor,
}: RatingBadgeProps) => {
  return (
    <div
      className={`flex items-center gap-[2px] rounded-full bg-${backgroundColor} px-2 py-[2px] text-${textColor}`}
    >
      <StarIcon size={12} className={`fill-${fillColor} text-${fillColor}`} />
      <span className="text-xs font-semibold">5.0</span>
    </div>
  );
};

export default RatingBadge;
