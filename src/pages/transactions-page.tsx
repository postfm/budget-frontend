import TransactionForm from '../components/transaction-form';
import TransactionTable from '../components/transaction-table';

const TransactionsPage = (): JSX.Element => {
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
              <p className='mt-2 rounded-sm bg-green-600 p-1 text-center'>1000$</p>
            </div>
            <div>
              <p className='text-md text-center font-bold uppercase'>Total Expense</p>
              <p className='mt-2 rounded-sm bg-red-500 p-1 text-center'>1000$</p>
            </div>
          </div>
          <div>Chart</div>
        </div>
      </div>

      <TransactionTable limit={5} />
    </>
  );
};

export default TransactionsPage;
