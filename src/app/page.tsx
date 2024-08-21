'use client';
import { useEffect, useState } from 'react';
import { Jobs } from './add-job/page';
import Link from 'next/link';

export default function Home() {
  const [jobs, setJobs] = useState<Jobs[]>([]);

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem('jobs') || '[]');
    setJobs(savedJobs);
  }, []);

  const handleCheckboxChange = (index: number) => {
    const updatedJobs = jobs.map((job, i) => {
      if (i === index) {
        return { ...job, status: !job.status };
      }
      return job;
    });

    setJobs(updatedJobs);
    localStorage.setItem('jobs', JSON.stringify(updatedJobs));
  };

  const handleDelete = (index: number) => {
    const updatedJobs = jobs.filter((_, i) => i !== index); // حذف آیتم با استفاده از index
    setJobs(updatedJobs);
    localStorage.setItem('jobs', JSON.stringify(updatedJobs));
  };

  return (
    <main className="w-1/2 mx-auto mt-2 flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-2xl mb-2 text-slate-800">صفحه ی داشبورد شخصی</h1>
        <h2 className="text-xl mt-1 text-slate-800">مدیریت برنامه‌ها</h2>
        <p className="text-xs">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
          استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است
        </p>
      </div>
      <div className="mt-3 w-full bg-gray-300 shadow-md border-1 border-gray-400 rounded-lg">
        <h1 className="text-center">لیست کار ها</h1>
        <ul className="list-none">
          {jobs &&
            jobs.map((job, index) => (
              <li
                className={`m-2 flex items-center justify-between ${
                  job.status ? 'line-through' : ''
                }`}
                key={job.id}
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="me-3"
                    checked={job.status}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <Link href={`/${job.id}`}>
                  
                    <p className="text-purple-700 p-1 rounded-lg hover:text-purple-500 hover:bg-purple-100">
                      {job.title}
                    </p>
                  </Link>
                </div>
                <div className=' flex flex-row-reverse items-center'>
                  <svg onClick={() => handleDelete(index)} className=" mx-1 hover:cursor-pointer hover:fill-purple-400" fill="#7e22ce"height="20px"width="20px"version="1.1"id="Layer_1"xmlns="http://www.w3.org/2000/svg"viewBox="0 0 330 330"stroke="#7e22ce"><g id="SVGRepo_bgCarrier" stroke-width="0" /><g id="SVGRepo_tracerCarrier"stroke-linecap="round"stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"><g id="XMLID_6_"><g id="XMLID_11_"><path d="M240,121.076H30V275c0,8.284,6.716,15,15,15h60h37.596c19.246,24.348,49.031,40,82.404,40c57.897,0,105-47.103,105-105 C330,172.195,290.816,128.377,240,121.076z M225,300c-41.355,0-75-33.645-75-75s33.645-75,75-75s75,33.645,75,75 S266.355,300,225,300z" /></g><g id="XMLID_18_"><path d="M240,90h15c8.284,0,15-6.716,15-15s-6.716-15-15-15h-30h-15V15c0-8.284-6.716-15-15-15H75c-8.284,0-15,6.716-15,15v45H45 H15C6.716,60,0,66.716,0,75s6.716,15,15,15h15H240z M90,30h90v30h-15h-60H90V30z" /></g><g id="XMLID_23_"><path d="M256.819,193.181c-5.857-5.858-15.355-5.858-21.213,0L225,203.787l-10.606-10.606c-5.857-5.858-15.355-5.858-21.213,0 c-5.858,5.858-5.858,15.355,0,21.213L203.787,225l-10.606,10.606c-5.858,5.858-5.858,15.355,0,21.213 c2.929,2.929,6.768,4.394,10.606,4.394c3.839,0,7.678-1.465,10.607-4.394L225,246.213l10.606,10.606 c2.929,2.929,6.768,4.394,10.607,4.394c3.839,0,7.678-1.465,10.606-4.394c5.858-5.858,5.858-15.355,0-21.213L246.213,225 l10.606-10.606C262.678,208.535,262.678,199.039,256.819,193.181z" /></g></g></g></svg>
                  {/* edit */}
                  <svg width="26px" height="26px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7 5.12758L19.266 6.37458C19.4172 6.51691 19.5025 6.71571 19.5013 6.92339C19.5002 7.13106 19.4128 7.32892 19.26 7.46958L18.07 8.89358L14.021 13.7226C13.9501 13.8037 13.8558 13.8607 13.751 13.8856L11.651 14.3616C11.3755 14.3754 11.1356 14.1751 11.1 13.9016V11.7436C11.1071 11.6395 11.149 11.5409 11.219 11.4636L15.193 6.97058L16.557 5.34158C16.8268 4.98786 17.3204 4.89545 17.7 5.12758Z" stroke="#7e22ce" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.033 7.61865C12.4472 7.61865 12.783 7.28287 12.783 6.86865C12.783 6.45444 12.4472 6.11865 12.033 6.11865V7.61865ZM9.23301 6.86865V6.11865L9.23121 6.11865L9.23301 6.86865ZM5.50001 10.6187H6.25001L6.25001 10.617L5.50001 10.6187ZM5.50001 16.2437L6.25001 16.2453V16.2437H5.50001ZM9.23301 19.9937L9.23121 20.7437H9.23301V19.9937ZM14.833 19.9937V20.7437L14.8348 20.7437L14.833 19.9937ZM18.566 16.2437H17.816L17.816 16.2453L18.566 16.2437ZM19.316 12.4937C19.316 12.0794 18.9802 11.7437 18.566 11.7437C18.1518 11.7437 17.816 12.0794 17.816 12.4937H19.316ZM15.8863 6.68446C15.7282 6.30159 15.2897 6.11934 14.9068 6.2774C14.5239 6.43546 14.3417 6.87397 14.4998 7.25684L15.8863 6.68446ZM18.2319 9.62197C18.6363 9.53257 18.8917 9.13222 18.8023 8.72777C18.7129 8.32332 18.3126 8.06792 17.9081 8.15733L18.2319 9.62197ZM8.30001 16.4317C7.8858 16.4317 7.55001 16.7674 7.55001 17.1817C7.55001 17.5959 7.8858 17.9317 8.30001 17.9317V16.4317ZM15.767 17.9317C16.1812 17.9317 16.517 17.5959 16.517 17.1817C16.517 16.7674 16.1812 16.4317 15.767 16.4317V17.9317ZM12.033 6.11865H9.23301V7.61865H12.033V6.11865ZM9.23121 6.11865C6.75081 6.12461 4.7447 8.13986 4.75001 10.6203L6.25001 10.617C6.24647 8.96492 7.58269 7.62262 9.23481 7.61865L9.23121 6.11865ZM4.75001 10.6187V16.2437H6.25001V10.6187H4.75001ZM4.75001 16.242C4.7447 18.7224 6.75081 20.7377 9.23121 20.7437L9.23481 19.2437C7.58269 19.2397 6.24647 17.8974 6.25001 16.2453L4.75001 16.242ZM9.23301 20.7437H14.833V19.2437H9.23301V20.7437ZM14.8348 20.7437C17.3152 20.7377 19.3213 18.7224 19.316 16.242L17.816 16.2453C17.8195 17.8974 16.4833 19.2397 14.8312 19.2437L14.8348 20.7437ZM19.316 16.2437V12.4937H17.816V16.2437H19.316ZM14.4998 7.25684C14.6947 7.72897 15.0923 8.39815 15.6866 8.91521C16.2944 9.44412 17.1679 9.85718 18.2319 9.62197L17.9081 8.15733C17.4431 8.26012 17.0391 8.10369 16.6712 7.7836C16.2897 7.45165 16.0134 6.99233 15.8863 6.68446L14.4998 7.25684ZM8.30001 17.9317H15.767V16.4317H8.30001V17.9317Z" fill="#7e22ce"></path> </g></svg>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </main>
  );
}
