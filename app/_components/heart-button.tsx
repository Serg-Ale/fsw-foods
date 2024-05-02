import { HeartIcon } from "lucide-react";
import { Button } from "./ui/button";

const HeartButton = () => {
  return (
    <Button
      size={"icon"}
      className="absolute right-2 top-2 h-7 w-7 rounded-full bg-muted-foreground"
    >
      <HeartIcon size={16} className="fill-white" />
    </Button>
  );
};

export default HeartButton;
