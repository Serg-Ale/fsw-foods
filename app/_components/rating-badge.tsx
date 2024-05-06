import { StarIcon } from "lucide-react";
interface RatingBadgeProps {
  backgroundColor: string;
  textColor: string;
  position: string;
}

const RatingBadge = ({
  backgroundColor,
  textColor,
  position,
}: RatingBadgeProps) => {
  return (
    <div
      className={`flex ${position} items-center gap-[3px] rounded-full bg-${backgroundColor} px-2 py-[3px] text-${textColor}`}
    >
      <StarIcon size={12} className="fill-yellow-400 text-yellow-400" />
      <span className="text-xs font-semibold">5.0</span>
    </div>
  );
};

export default RatingBadge;
