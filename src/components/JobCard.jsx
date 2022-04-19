import { useEffect, useState } from 'react'
import data from '../data.json'

const JobCard = () => {
  const [jobs, setJobs] = useState([])
  const [filteredJobs, setFilteredJobs] = useState('')

  useEffect(() => {
    setJobs(data)
  }, [])

  return (
    <div className='job-cards'>
      <div className='search-form'>
      <form action="submit">
        <input type="text" placeholder='Search...' onChange={(e) => setFilteredJobs(e.target.value)} />
      </form>
    </div>
      {jobs.filter(job => {
        const includesTitle= job.position.toLowerCase().includes(filteredJobs.toLowerCase());
        const includesLevel = job.level.toLowerCase().includes(filteredJobs.toLowerCase());

        if (filteredJobs === '') {
          return job
        }
        if (includesLevel || includesTitle) {
          return job
        }
      })
      .map((job, id) => {
        return (
          <div className='job' key={id}>
            <img className='logo' src={job.logo} alt="" />
            <div className='job-center'>
              <div className='job-top-description'>
                <p>{job.company}</p>
                <p className='new'>{job.new ? 'NEW' : null}</p>
                <p className='featured'>{job.featured ? 'FEATURED' : null}</p>
              </div>
              <h1>{job.position}</h1>
              <div className='job-bottom-description'>
                <p>{job.postedAt}</p>
                <p>•</p>
                <p>{job.contract}</p>
                <p>•</p>
                <p>{job.location}</p>
              </div>
            </div>
            <div className='tags'>
              <p>{job.role}</p>
              <p>{job.level}</p>
              {job.languages.map((tag, index) => <p key={index}>{tag}</p>)}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default JobCard