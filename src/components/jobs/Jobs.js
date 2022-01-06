import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getJobs, jobsList } from "../../redux/jobs/jobs";
import Job from '/Job';

const Jobs = () => {
  const jobs = useSelector((state) => state.jobs);
  const dispatch = useDispatch();

  useEffect(() => {
    jobsList().then((data) => dispatch(getJobs(data)));
  });

  return (
    <div>
      {
        jobs.map((job) => (
          <Job
            key={jobs.id}
            data={job}
          />
        ))
      }
    </div>
  )
}

export default Jobs;
