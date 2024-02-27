import { FaPlus } from 'react-icons/fa';
import { Form, useLoaderData } from 'react-router-dom';
import { ResponseTransactionLoaderInterface } from '../types/types';
import CategoryModal from './category-modal';
import { useState } from 'react';

const TransactionForm = (): JSX.Element => {
  const { categories } = useLoaderData() as ResponseTransactionLoaderInterface;
  const [visibleModal, setVisibleModal] = useState<boolean>(false);

  return (
    <div className='rounded-md bg-slate-800 p-4'>
      <Form
        className='grid gap-2'
        method='post'
        action='/transactions'
      >
        <label
          className='grid'
          htmlFor='title'
        >
          <span>Title</span>
          <input
            type='text'
            className='input border-slate-700'
            name='title'
            id='title'
            placeholder='Title...'
            required
          />
        </label>
        <label
          className='grid'
          htmlFor='amount'
        >
          <span>Amount</span>
          <input
            type='number'
            className='input border-slate-700'
            name='amount'
            id='amount'
            placeholder='Amount...'
            required
          />
        </label>

        {categories.length ? (
          <label
            htmlFor='category'
            className='grid'
          >
            <span>Category</span>
            <select
              name='category'
              className='input border-slate-700'
              id='category'
              required
            >
              {categories.map((category) => (
                <option
                  value={category.id}
                  className='bg-slate-800'
                  key={category.id}
                >
                  {category.title}
                </option>
              ))}
            </select>
          </label>
        ) : (
          <h1 className='mt-1 text-red-300'>To continue create a category first</h1>
        )}

        <button
          className='mt-2 flex max-w-fit items-center gap-2 text-white/50 hover:text-white'
          onClick={() => setVisibleModal(true)}
        >
          <FaPlus />
          <span>Manage Categories</span>
        </button>

        <div className='flex items-center gap-4'>
          <label className='flex cursor-pointer items-center gap-2'>
            <input
              type='radio'
              name='type'
              value={'income'}
              className='form-radio text-blue-600'
            />
            <span>Income</span>
          </label>
          <label className='flex cursor-pointer items-center gap-2'>
            <input
              type='radio'
              name='type'
              value={'expense'}
              className='form-radio text-blue-600'
            />
            <span>Expense</span>
          </label>
        </div>

        <button
          type='submit'
          className='btn btn-green mt-2 max-w-fit'
        >
          Submit
        </button>
      </Form>

      {visibleModal && (
        <CategoryModal
          type='post'
          setVisibleModal={setVisibleModal}
        />
      )}
    </div>
  );
};

export default TransactionForm;
