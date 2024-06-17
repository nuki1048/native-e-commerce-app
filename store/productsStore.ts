import { Tag } from '@/app/(tabs)/home/categoryDetail';
import { Tables } from '@/types/supabase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { supabase } from '@/utils/supabase';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface ProductsStore {
  categories: Tables<'categories'>[];
  products: Tables<'products'>[];
  tags: Tag[];
  loading: boolean;
  error: any;
  setCategories: (categories: Tables<'categories'>[]) => void;
  setProducts: (products: Tables<'products'>[]) => void;
  setTags: (tags: Tag[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: any) => void;
  fetchCategories: () => Promise<void>;
  fetchProductsByCategoryId: (id: number) => Promise<void>;
  fetchSingleProduct: (id: number) => Promise<void>;
}

export const useProductsStore = create<ProductsStore>()(
  persist(
    (set) => ({
      categories: [],
      products: [],
      setCategories: (categories: Tables<'categories'>[]) =>
        set({ categories }),
      setProducts: (products: Tables<'products'>[]) => set({ products }),
      setTags: (tags: Tag[]) => set({ tags }),
      tags: [],
      loading: false,
      error: null,
      setError: (error: any) => set({ error }),
      setLoading: (loading: boolean) => set({ loading }),
      fetchCategories: async () => {
        set({ loading: true });
        const { data, error } = await supabase
          .from('categories')
          .select('*')
          .returns<Tables<'categories'>[]>();

        if (error) {
          set({ error });
          return;
        }

        set({ loading: false, categories: data });
      },
      fetchProductsByCategoryId: async (id: number) => {
        set({ loading: true });
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('category_id', id)
          .returns<Tables<'products'>[]>();

        if (error) {
          set({ error });
          return;
        }

        set({ loading: false, products: data });
      },
      fetchSingleProduct: async (id: number) => {
        set({ loading: true });
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('id', id)
          .returns<Tables<'products'>[]>();

        if (error) {
          set({ error });
          return;
        }

        set({ loading: false, products: data });
      },
    }),
    {
      name: 'products-store',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
