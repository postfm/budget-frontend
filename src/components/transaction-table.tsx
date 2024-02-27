import { FaTrash } from 'react-icons/fa';
import { Form, useLoaderData } from 'react-router-dom';
import { ResponseTransactionLoaderInterface } from '../types/types';
import { formatDate } from '../helpers/date.helper';
import { formatToUSD } from '../helpers/currency.helper';

const TransactionTable = (): JSX.Element => {
  const { transactions } = useLoaderData() as ResponseTransactionLoaderInterface;

  return (
    <>
      <div className='mt-4 rounded-md bg-slate-800 px-4 py-3'>
        <table className='w-full'>
          <thead>
            <tr>
              <td className='font-bold'>№</td>
              <td className='font-bold'>Title</td>
              <td className='font-bold'>Amount($)</td>
              <td className='font-bold'>Category</td>
              <td className='font-bold'>Date</td>
              <td className='text-right'>Action</td>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, idx) => (
              <tr key={transaction.id}>
                <td>{idx + 1}</td>
                <td>{transaction.title}</td>
                <td className={transaction.type === 'income' ? 'text-green-500' : 'text-red-500'}>
                  {transaction.type === 'income'
                    ? `+ ${formatToUSD.format(transaction.amount)}`
                    : `- ${formatToUSD.format(transaction.amount)}`}
                </td>
                <td>{transaction.category?.title || 'Other'}</td>
                <td>{formatDate(transaction.createdAt)}</td>
                <td>
                  <Form
                    method='delete'
                    action='/transactions'
                  >
                    <input
                      type='hidden'
                      name='id'
                      value={transaction.id}
                    />
                    <button className='btn hover:btn-red ml-auto'>
                      <FaTrash />
                    </button>
                  </Form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TransactionTable;
