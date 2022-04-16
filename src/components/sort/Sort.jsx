import React from 'react'
import { ACTION } from '../../action';
import { useFilter } from '../../context/FilterContext'


function Sort() {
    const {filterState,filterDispatch}=useFilter();
    return (
        <div className='sort-cont'>
        <label htmlFor="sort">
            SORT BY:
            <select name="sort" id="sort" value={filterState.sortBy} onChange={(e)=>filterDispatch({type:ACTION.SORT,payload:e.target.value})}>
                <option value="new_to_old">Newest First</option>
                <option value="old_to_new">Oldest First</option>
                <option value="A_Z">A-Z</option>
                <option value="Z_A">Z-A</option>
            </select>
        </label>
        </div>
    )
}

export default Sort
