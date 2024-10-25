import data from '../mock/data.json';
import { JobPosition } from './JobPosition';
import { useSelector } from 'react-redux';
import { selectAllPoisitions } from 'store/positions/positionSelectors';

const JobList = () => {

  const positions = useSelector(selectAllPoisitions);
  

  return (
    <div className='job-list'>
      {data.map(item => (
        <JobPosition key={item.id} {...item} />
      ))}
    </div>
  )
}

export {JobList};