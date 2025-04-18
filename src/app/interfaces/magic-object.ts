export interface Category {
  id: number;
  name: string;
}

export interface Rarity {
  id: number;
  name: string;
}

export interface MagicObject {
  id: number;
  name: string;
  short_description: string;
  long_description: string;
  category: Category;
  rarity: Rarity;
  price_galeon: number;
  price_sickle: number;
  price_knut: number;
  url_image: string;
  purchased: boolean;
}

export interface MagicObjectResponse {
  magic_objects: MagicObject[];
  page: number;
  size: number;
}

export interface MagicObjectCreate {
  name: string;
  short_description: string;
  long_description: string;
  price_galeon: number;
  price_sickle: number;
  price_knut: number;
  url_image: string;
  purchased: boolean;
  category_id: number;
  rarity_id: number;
}
