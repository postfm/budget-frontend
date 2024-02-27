import { useLoaderData } from 'react-router-dom';
import TransactionForm from '../components/transaction-form';
import TransactionTable from '../components/transaction-table';
import { ResponseTransactionLoaderInterface } from '../types/types';
import { formatToUSD } from '../helpers/currency.helper';
import Chart from '../components/chart';

const TransactionsPage = (): JSX.Element => {
  const { totalIncome, totalExpense } = useLoaderData() as ResponseTransactionLoaderInterface;
  return (
    <>
      <div className='mt-4 grid grid-cols-3 items-start gap-4'>
        <div className='col-span-2 grid'>
          <TransactionForm />{' '}
        </div>

        <div className='rounded-md bg-slate-800 p-3'>
          <div className='grid grid-cols-2 gap-3'>
            <div>
              <p className='text-md text-center font-bold uppercase'>Total Income</p>
              <p className='mt-2 rounded-sm bg-green-600 p-1 text-center'>
                {formatToUSD.format(totalIncome)}
              </p>
            </div>
            <div>
              <p className='text-md text-center font-bold uppercase'>Total Expense</p>
              <p className='mt-2 rounded-sm bg-red-500 p-1 text-center'>
                {formatToUSD.format(totalExpense)}
              </p>
            </div>
          </div>

          <Chart
            totalIncome={totalIncome}
            totalExpense={totalExpense}
          />
        </div>
      </div>

      <TransactionTable limit={5} />
    </>
  );
};

export default TransactionsPage;
