import SectionContainer from "../section-container";
import Cards from "./cards";
import SelectBtns from "./select-btns";

const Testimonials = () => {
  return (
    <SectionContainer
      id="testimonials"
      className="bg-white py-24 px-4 lg:px-8 grid items-center grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 overflow-hidden"
    >
      <div className="p-4">
        <h3 className="text-5xl font-semibold">What our customers think</h3>
        <p className="text-slate-500 my-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
          commodi sint, similique cupiditate possimus suscipit delectus illum
          eos iure magnam!
        </p>
        <SelectBtns />
      </div>
      <Cards />
    </SectionContainer>
  );
};

export default Testimonials;
