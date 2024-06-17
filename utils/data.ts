import { Tables } from '@/types/supabase';
import { supabase } from './supabase';
import { Tag } from '@/app/(tabs)/home/categoryDetail';
import { unionBy } from 'lodash';

export const fetchProducts = async (id: number) => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('category_id', id)
    .returns<Tables<'products'>[]>();

  if (error) {
    console.error('Error fetching products:', error.message, error.code);
    return;
  }

  return data;
};
export const fetchProduct = async (id: number) => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .returns<Tables<'products'>[]>();

  if (error) {
    console.error('Error fetching products:', error.message, error.code);
    return;
  }

  return data;
};

export const fetchCategories = async () => {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .returns<Tables<'categories'>[]>();

  if (error) {
    console.error('Error fetching categories:', error.message, error.code);
    return;
  }

  return data;
};

export const transformTags = (data: Tables<'products'>[] | null) => {
  return unionBy(
    data
      ?.map((product: Tables<'products'>) => {
        return product?.tags?.map((tag) => ({
          name: tag,
          checked: false,
          idProduct: product.id,
        }));
      })
      .flat()
      .filter(Boolean) as Tag[],
    'name'
  );
};
