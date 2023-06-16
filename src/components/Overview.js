import React from 'react';

const Overview = ({ tasks }) => {
  const listOfTasks = tasks.map((task, idx) => {
    return <li key={idx}>{task}</li>;
  });
  return (
    <div>
      <ul id="list-tasks">{listOfTasks}</ul>
    </div>
  );
}

export default Overview;