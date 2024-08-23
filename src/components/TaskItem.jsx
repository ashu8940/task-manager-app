// src/components/TaskItem.jsx
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeTask } from '../redux/tasksSlice';
import styled from 'styled-components';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeTask(task.id));
  };

  return (
    <ListItem>
      <TaskText>{task.text}</TaskText>
      <RemoveButton onClick={handleRemove}>Remove</RemoveButton>
    </ListItem>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired, // Prop validation for task object
};

export default TaskItem;

// Styled components
const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const TaskText = styled.span`
  flex-grow: 1;
`;

const RemoveButton = styled.button`
  border: none;
  background-color: transparent;
  color: #ff0000;
  cursor: pointer;

  &:hover {
    color: #cc0000;
  }
`;
