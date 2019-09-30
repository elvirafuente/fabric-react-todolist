import React, { useContext } from 'react';
import { ToDoContext } from '../context/ToDoContext';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';


export default function FilterList() {
  const {filter, setFilter} = useContext(ToDoContext)
  const handleFilter = event =>{
    const target = event.props.headerText
    setFilter(target)
    console.log(filter)
  }

  return (
    <div>
        <Pivot onLinkClick={handleFilter}>
          <PivotItem headerText="All" />
          <PivotItem headerText="Active" />
          <PivotItem headerText="Completed" />
        </Pivot>
      </div>
  );
}
