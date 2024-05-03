import { create } from "zustand";

type SectionStore = {
  activeSection: string;
  setActiveSection: (activeSection: string) => void;
};

export const useSectionStore = create<SectionStore>((set) => ({
  activeSection: "home",
  setActiveSection: (activeSection) => set({ activeSection }),
}));
