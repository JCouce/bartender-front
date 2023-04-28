export type DrinkType = "BEER" | "DRINK";

export interface Order {
  userId: string;
  drinkType: DrinkType;
}

export interface Data {
  servedDrinks: Order[];
  servedCustomers: string[];
}

export interface Config {
  prepareTime: number;
  maxElementos: number;
}