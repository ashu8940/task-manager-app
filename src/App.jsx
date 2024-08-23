// src/App.jsx
// import React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import styled from 'styled-components';

const App = () => {
  return (
    <AppWrapper>
      <AppContainer>
        <Title>Task Manager</Title>
        <TaskForm />
        <TaskList />
      </AppContainer>
    </AppWrapper>
  );
};

export default App;

// Styled components
const AppWrapper = styled.div`
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  height: 100vh; /* Full viewport height */
`;

const AppContainer = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;
