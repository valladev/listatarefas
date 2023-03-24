import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import "./TaskDetails.css";
import Button from './Button';

const TaskDetails = () => {
   const params = useParams();
   const history = useHistory();

   const handleBackButtonClick = () => {
      history.goBack();
   } 

   console.log(params);

      return ( 
      <>
         <div className="back-button-container">
            <Button onClick={handleBackButtonClick}>Voltar</Button>
         </div>
         <div className="task-details-container">
            <h2>{params.TaskDetails}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsam perspiciatis officia voluptatum nemo, ipsa maxime deserunt debitis eaque quo provident, non amet sint, commodi tempore quas ullam et quasi.</p>
         </div>
      </>
    );
};
 
export default TaskDetails;
