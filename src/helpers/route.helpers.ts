import { toast } from 'react-toastify';
import { instance } from '../api/axios.api';
import { CategoryInterface, TransactionInterface } from '../types/types';

export const categoriesAction = async ({ request }: any) => {
  switch (request.method) {
    case 'POST': {
      const formData = await request.formData();
      const title = {
        title: formData.get('title'),
      };
      await instance.post('/categories', title);
      return null;
    }
    case 'PATCH': {
      const formData = await request.formData();
      const category = {
        id: formData.get('id'),
        title: formData.get('title'),
      };
      await instance.patch(`/categories/category/${category.id}`, category);
      return null;
    }
    case 'DELETE': {
      const formData = await request.formData();
      const categoryId = formData.get('id');
      await instance.delete(`/categories/category/${categoryId}`);
      return null;
    }
  }
};

export const categoriesLoader = async (): Promise<CategoryInterface[]> => {
  const { data } = await instance.get<CategoryInterface[]>('/categories');
  return data;
};

export const transactionsAction = async ({ request }: any) => {
  switch (request.method) {
    case 'POST': {
      const formData = await request.formData();
      const newTransaction = {
        title: formData.get('title'),
        amount: +formData.get('amount'),
        category: { id: formData.get('category') },
        type: formData.get('type'),
      };

      await instance.post('/transactions', newTransaction);
      toast.success('Transaction added.');
      return null;
    }
    case 'DELETE': {
      const formData = await request.formData();
      const transactionId = formData.get('id');
      await instance.delete(`transactions/transaction/${transactionId}`);
      toast.success('Transaction is deleted');
      return null;
    }
  }
};

export const transactionsLoader = async () => {
  const categories = await instance.get<CategoryInterface[]>('/categories');
  const transactions = await instance.get<TransactionInterface[]>('/transactions');
  const totalIncome = await instance.get<number>('/transactions/income/find');
  const totalExpense = await instance.get<number>('/transactions/expense/find');

  const data = {
    categories: categories.data,
    transactions: transactions.data,
    totalIncome: totalIncome.data,
    totalExpense: totalExpense.data,
  };
  return data;
};
