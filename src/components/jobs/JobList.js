import React, { useState, useEffect } from 'react';
import SearchForm from '../common/SearchForm';
import JobCardList from './JobCardList';
import JoblyApi from '../../api/api';

function JobList() {
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    search();
  }, []);

  async function search(title) {
    let jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
  }

  if (!jobs) return <p>Loading &hellip;</p>;

  return (
    <div className="JobList col-md-8 offset-md-2">
      <SearchForm searchFor={search} />
      {jobs.length
        ? <JobCardList jobs={jobs} />
        : <p className="lead">Sorry, no results were found!</p>
      }
    </div>
  );
}

export default JobList;