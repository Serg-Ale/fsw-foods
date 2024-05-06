import { HeartIcon } from "lucide-react";
import { Button } from "./ui/button"; // Substitua pelo caminho real do seu componente Button

interface HeartButtonProps {
  position: string;
  size: string;
  iconSize: number;
}

const HeartButton = ({ position, size, iconSize }: HeartButtonProps) => {
  return (
    <Button
      size="icon"
      className={`absolute ${position} h-${size} w-${size} rounded-full bg-muted-foreground`}
    >
      <HeartIcon size={iconSize} className="fill-white" />
    </Button>
  );
};

export default HeartButton;
