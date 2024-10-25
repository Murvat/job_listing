import { FilterPanel } from 'components/FilterPanel';
import { JobList } from 'components/JobList';
import { TheHeader } from 'components/TheHeader';

import { useEffect } from 'react';
import { addPosiitons } from 'store/positions/positionActions';
import { useDispatch } from 'react-redux';
import data from './mock/data.json'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addPosiitons(data))
  },[])
  return (
    <>
     <TheHeader />
     <div className='container'>
      <FilterPanel />
      <JobList />
     </div>
    </>
  );
}

export default App;
