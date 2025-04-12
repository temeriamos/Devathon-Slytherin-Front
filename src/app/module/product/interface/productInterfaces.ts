export interface DataMagicObject {
  magic_objects: MagicObject[];
  page: number;
  size: number;
}

export interface MagicObject {
  id: number;
  name: string;
  short_description: string;
  long_description: string;
  category: Category;
  rarity: Category;
  price_galeon: number;
  price_sickle: number;
  price_knut: number;
  url_image: string;
  purchased: boolean;
}

export interface Category {
  id: number;
  name: string;
}
