import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';

import { useSelector,useDispatch } from 'react-redux';
import { clearFilter, removeFilter } from 'store/filters/filters-actions';
import { selectFilters } from 'store/filters/filters-selector';


const FilterPanel = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters)
  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilters.map(filter => (
            <Badge
              onClear={()=>dispatch(removeFilter(filter))}
              key={filter}
              variant="clearable">{filter}</Badge>

          ))
  
          }
        </Stack>

        <button
        onClick={()=>dispatch(clearFilter)}
          className='link'>Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};