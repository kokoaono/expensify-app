import React from 'react';

const EditExpensePage = (props) => {
  console.log(props);
  return (
   <div>
    This is from EditExpense Page component id of {props.match.params.id}
  </div>
  );
};

export default EditExpensePage;