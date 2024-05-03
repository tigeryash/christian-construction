import { create } from "zustand";

type MenuStore = {
  scrolled: boolean;
  setScrolled: (scrolled: boolean) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  timeOfLastClick: number;
  setTimeOfLastClick: (time: number) => void;
};

export const useMenuStore = create<MenuStore>((set) => ({
  scrolled: false,
  setScrolled: (scrolled) => set({ scrolled }),
  open: false,
  setOpen: (open) => set({ open }),
  timeOfLastClick: 0,
  setTimeOfLastClick: (timeOfLastClick) => set({ timeOfLastClick }),
}));
