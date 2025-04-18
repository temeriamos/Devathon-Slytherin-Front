export interface House {
  id: number;
  name: string;
}

export interface User {
  id: number;
  name: string;
  price_galeon: number;
  price_sickle: number;
  price_knut: number;
  house: House;
  image_url: string;
}

export interface CreateUser {
  name: string;
  price_galeon: number;
  price_sickle: number;
  price_knut: number;
  house_id: number;
}
