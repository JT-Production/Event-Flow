import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type FavouriteStore = {
  favourites: EventType[];
  addToFavorite: (item: EventType) => void;
};

export const useFavouriteStore = create<FavouriteStore>()(
  persist(
    (set) => ({
      favourites: [] as EventType[],
      addToFavorite: (item) =>
        set((state) => ({ favourites: [...state.favourites, item] })),
      removeFavourite: (id: string) =>
        set((state) => ({
          favourites: state.favourites.filter(
            (favourite) => favourite.event_id !== id
          ),
        })),
    }),
    {
      name: "favourite",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
