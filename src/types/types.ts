export interface UserInterface {
  id: number;
  email: string;
  token: string;
}

export interface UserDataInterface {
  email: string;
  password: string;
}

export interface ResponseUserInterface {
  email: string;
  password: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface ResponseUserDataInterface {
  user: ResponseUserInterface;
  token: string;
}

export interface CategoryInterface {
  title: string;
  id: number;
  createdAt: string;
  updatedAt: string;
  transactions?: [];
}

export interface TransactionInterface {
  amount: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  type: string;
  id: number;
  category: CategoryInterface;
}

export interface ResponseTransactionLoaderInterface {
  categories: CategoryInterface[];
  transactions: TransactionInterface[];
}
