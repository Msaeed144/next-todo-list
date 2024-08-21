'use client';
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface Jobs {
  id: string;
  title: string;
  desc: string;
  status: boolean;
}

function AddJob() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [status, setStatus] = useState(false);
  const [jobs, setJobs] = useState<Jobs[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem('jobs') || '[]');
    setJobs(savedJobs);
  }, []);

  useEffect(() => {
    if (jobs.length > 0) {
      localStorage.setItem('jobs', JSON.stringify(jobs));
    }
  }, [jobs]);

  const titleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const descHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setDesc(event.target.value);
  };

  const addJobHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError(null);
    
    if (title.trim() === '' || desc.trim() === '') {
      setError('عنوان و توضیحات باید پر شوند!');
      setTimeout(() => setError(null), 2000);
      return;
    }

    const newJob = { id: uuidv4(), title, desc, status };
    setJobs((prevJobs) => [...prevJobs, newJob]);
    setTitle('');
    setDesc('');
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <div className="relative">
      <form
        className=" w-11/12 mx-auto mt-3 shadow-2xl p-3 rounded-xl"
        onSubmit={addJobHandler}
      >
        <h2 className="text-center mb-4">اضافه کردن تسک</h2>
        <div className="flex flex-col">
          <div className="flex sm:flex-row flex-col justify-around mb-3">
            <div className='flex sm:flex-row flex-col'>
              <label htmlFor="title">عنوان:</label>
              <input
                className="bg-gray-400 rounded p-1 focus:border-none mr-2 placeholder:text-slate-700"
                placeholder="عنوان کار را وارد کنید"
                type="text"
                name="title"
                id="title"
                onChange={titleHandler}
                value={title}
              />
            </div>
            <div className='flex sm:flex-row flex-col'>
              <label htmlFor="desc">توضیحات:</label>
              <input
                className="bg-gray-400 rounded p-1 focus:border-none mr-2 placeholder:text-slate-700"
                placeholder="جزئیات کار را وارد کنید"
                type="text"
                name="desc"
                id="desc"
                onChange={descHandler}
                value={desc}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-2/3 mx-auto my-3 bg-green-800 p-1 rounded text-sm align-center text-center text-white"
          >
            اضافه کردن
          </button>
        </div>
      </form>
      {showPopup && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-4 rounded-lg shadow-lg text-center">
            <p className="text-lg font-semibold text-green-600">تسک جدید با موفقیت اضافه شد!</p>
          </div>
        </div>
      )}
      {error && (
        <div className="absolute top-0 left-0 w-full flex items-center justify-center bg-red-800 bg-opacity-75">
          <div className="bg-white p-4 rounded-lg shadow-lg text-center">
            <p className="text-lg font-semibold text-red-600">{error}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddJob;
