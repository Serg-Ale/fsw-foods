import { BikeIcon, TimerIcon } from "lucide-react";
import React from "react";
import { formatCurrency } from "../_helpers/price";
import { Card } from "./ui/card";

interface CardEntregaProps {
  deliveryFee: number;
  deliveryTimeMinutes: number;
}

const CardEntrega = ({
  deliveryFee,
  deliveryTimeMinutes,
}: CardEntregaProps) => {
  return (
    <Card className="mt-6 flex justify-around rounded-3xl py-3">
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-1 text-muted-foreground">
          <span className="text-xs">Entrega</span>
          <BikeIcon size={14} />
        </div>
        {Number(deliveryFee) > 0 ? (
          <p className="text-sm font-semibold">
            {formatCurrency(Number(deliveryFee))}
          </p>
        ) : (
          <p className="text-xs font-semibold">Grátis</p>
        )}
      </div>

      <div className="flex flex-col items-center">
        <div className="flex items-center gap-1 text-muted-foreground">
          <span className="text-xs">Tempo</span>
          <TimerIcon size={14} />
        </div>
        {Number(deliveryFee) > 0 ? (
          <p className="text-sm font-semibold">{deliveryTimeMinutes} min</p>
        ) : (
          <p className="text-xs font-semibold">Grátis</p>
        )}
      </div>
    </Card>
  );
};

export default CardEntrega;
