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
    event.target.value = ""
  };

  const descHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setDesc(event.target.value);
    event.target.value = ""
  };

  const addJobHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newJob = { id: uuidv4(), title, desc, status };
    setJobs((prevJobs) => [...prevJobs, newJob]);
    console.log(newJob);
  };

  return (
    <form
      className="w-2/3 mx-auto mt-3 shadow-2xl p-3 rounded-xl"
      onSubmit={addJobHandler}
    >
      <h2 className="text-center mb-4">اضافه کردن تسک</h2>
      <div className="flex flex-col">
        <div className="flex justify-around mb-3">
          <div>
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
          <div>
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
          className="w-1/3 mx-auto my-3 bg-green-800 p-1 rounded text-sm align-center text-center text-white"
        >
          اضافه کردن
        </button>
      </div>
    </form>
  );
}

export default AddJob;