export interface MenuProps {
  dishId: number;
  dishName: string;
  description: string;
  image: string;
  region: string;
  price: number;
  chefsChoice: boolean;
}

export interface Menu{
    menu: MenuProps[];
}