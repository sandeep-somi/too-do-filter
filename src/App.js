import React from 'react'
import { Provider, Subscribe } from 'unstated'
import styled from 'styled-components'
import TodosContainer from './store'
import { TodoList, AddTodo } from './components';
import { Checkbox } from './components/common';


function App () {
  return (
    <Provider>
      <Wrapper>
        <Subscribe to={[TodosContainer]}>
          {todos => {
            const list = todos.getList();
            console.log(todos, 'todos');
            
            return (
              <TodosWrapper>
                <AddTodo onAddTodo={todos.createTodo} />
                <FilterWrapper>
                  <Checkbox name="All" value="" />
                  <Checkbox name="Active" value="ACTIVE" />
                  <Checkbox name="Completed" value="COMPLETED" />
                </FilterWrapper>
                <TodoList items={list} toggleComplete={todos.toggleComplete} />
              </TodosWrapper>
            )
          }}
        </Subscribe>
        <Subscribe to={[TodosContainer]}>
          {todos => {
            const list = todos.getList();
            console.log(todos, 'todos');

            return (
              <TodosWrapper>
                <AddTodo onAddTodo={todos.createTodo} />
                <FilterWrapper>
                  <Checkbox name="All" value="" />
                  <Checkbox name="Active" value="ACTIVE" />
                  <Checkbox name="Completed" value="COMPLETED" />
                </FilterWrapper>
                <TodoList items={list} toggleComplete={todos.toggleComplete} />
              </TodosWrapper>
            )
          }}
        </Subscribe>
      </Wrapper>
    </Provider>
  )
}

const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

const Wrapper = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
`

const TodosWrapper = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
`

export default App
