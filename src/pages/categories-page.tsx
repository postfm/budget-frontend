import { AiFillCloseCircle, AiFillEdit } from 'react-icons/ai';
import { FaPlus } from 'react-icons/fa';
import { Form, useLoaderData } from 'react-router-dom';
import CategoryModal from '../components/category-modal';
import { useState } from 'react';
import { CategoryInterface } from '../types/types';

const CategoriesPage = (): JSX.Element => {
  const categories = useLoaderData() as CategoryInterface[];
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [categoryId, setCategoryId] = useState<number>(0);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  return (
    <>
      <div className='mt-10 p-4 rounded-md bg-slate-800'>
        <h1>Your category list:</h1>
        <div className='mt-2 flex flex-wrap items-center gap-2'>
          {categories.map((category) => (
            <div
              className='group relative flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2'
              key={category.id}
            >
              {category.title}
              <div className='absolute  bottom-0 left-0 right-0 top-0 hidden items-center justify-between rounded-lg bg-black/90 px-3 group-hover:flex'>
                <button
                  onClick={() => {
                    setVisibleModal(true);
                    setCategoryId(category.id);
                    setIsEdit(true);
                  }}
                >
                  <AiFillEdit />
                </button>
                <Form
                  className='flex'
                  method='delete'
                  action='/categories'
                >
                  <input
                    type='hidden'
                    name='id'
                    value={category.id}
                  />
                  <button type='submit'>
                    <AiFillCloseCircle />
                  </button>
                </Form>
              </div>
            </div>
          ))}
        </div>

        <button
          className='mt-5 flex max-w-fit items-center gap-2 text-white/50 hover:text-white'
          onClick={() => setVisibleModal(true)}
        >
          <FaPlus />
          <span>Create a new category</span>
        </button>
      </div>

      {visibleModal && (
        <CategoryModal
          type='post'
          setVisibleModal={setVisibleModal}
        />
      )}

      {visibleModal && isEdit && (
        <CategoryModal
          type='patch'
          id={categoryId}
          setVisibleModal={setVisibleModal}
        />
      )}
    </>
  );
};

export default CategoriesPage;
