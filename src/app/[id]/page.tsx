'use client'
import { useEffect, useState } from "react"
import { Jobs } from "../add-job/page";

function JobDetails( { params }:{
  params: {id:string}
}) 
{
  const [job, setJob] = useState<Jobs | null>(null);
  useEffect(()=>{
    
    const savedJobs: Jobs[] = JSON.parse(localStorage.getItem('jobs') || '[]');
    const foundJob = savedJobs.find((job) => job.id == params.id);
    setJob(foundJob || null);
  },[params.id])
  if (!job) {
    return <p>صفحه مورد نظر یافت نشد</p>;
  }
  return (
    <div className="w-2/3 mx-auto mt-3 shadow-2xl p-3 rounded-xl">
      <div>
        <h2 className=" text-center text-2xl mb-2">{job.title}</h2>
        <div className=" flex mb-2">
        <p className=" me-3">توضیحات:</p>
        <p>{job.desc}</p>
        </div>
        <div className=" flex">
          <p className=" me-3">وضعیت انجام کار:</p>
        {
          job.status ?
          <p className="text-green-700">انجام شده</p>
          :
          <p className="text-red-700">انجام شده</p>
        }
         </div>
      </div>
    </div>
  )
}

export default JobDetails