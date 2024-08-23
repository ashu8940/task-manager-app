// src/components/TaskList.jsx
import PropTypes from 'prop-types';
import TaskItem from './TaskItem';
import styled from 'styled-components';

const TaskList = ({ tasks }) => {
  return (
    <List>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </List>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired, // Prop validation for tasks array
};

export default TaskList;

// Styled components
const List = styled.ul`
  list-style: none;
  padding: 0;
`;
