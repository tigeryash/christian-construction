import { create } from "zustand";

type TestimonialStore = {
  selected: number; // Change the type from 0 to number
  setSelected: (selected: number) => void;
};

export const useTestimonialStore = create<TestimonialStore>((set) => ({
  selected: 0,
  setSelected: (selected) => set({ selected }),
}));
