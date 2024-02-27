import { Form } from 'react-router-dom';

interface CategoryModalProps {
  type: 'post' | 'patch';
  id?: number;
  setVisibleModal: (visible: boolean) => void;
}

const CategoryModal = ({ type, id, setVisibleModal }: CategoryModalProps): JSX.Element => {
  return (
    <div className='fixed bottom-0 left-0 right-0 top-0 flex h-full w-full items-center justify-center bg-black/50'>
      <Form
        className='grid w-[300px] gap-2 rounded-md bg-slate-900 p-5'
        method={type}
        action='/categories'
        onSubmit={() => setVisibleModal(false)}
      >
        <label htmlFor='title'>
          <small>Category Title</small>
          <input
            id='title'
            className='input w-full'
            type='text'
            name='title'
            placeholder='Title...'
          />
          <input
            type='hidden'
            name='id'
            value={id}
          />
        </label>

        <div className='flex items-center gap-2'>
          <button
            className='btn btn-green'
            type='submit'
          >
            {type === 'patch' ? 'Save' : 'Create'}
          </button>
          <button
            className='btn btn-red'
            type='button'
            onClick={() => setVisibleModal(false)}
          >
            Close
          </button>
        </div>
      </Form>
    </div>
  );
};

export default CategoryModal;
