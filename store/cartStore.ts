import { Tables } from '@/types/supabase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface CartStore {
  cart: Tables<'products'>[];
  setCart: (cart: CartItem[]) => void;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
}

export interface CartItem extends Tables<'products'> {
  quantity: number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],
      setCart: (cart: CartItem[]) => set({ cart }),
      addToCart: (item: CartItem) =>
        set((state) => ({ cart: [...state.cart, item] })),
      removeFromCart: (id: number) =>
        set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
