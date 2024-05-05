import { testimonials } from "@/lib/data";
import Card from "./card";

const Cards = () => {
  return (
    <div className="p-4 relative h-[450px] lg:h-[500px] shadow-xl">
      {testimonials.map((t, i) => {
        return <Card {...t} key={i} position={i} />;
      })}
    </div>
  );
};

export default Cards;
