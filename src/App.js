// import SignAppForm from './components/SignAppForm/SignAppForm';
import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import ContactForm from "./components/ContactForm/ContactForm";
import TaskList from "./components/TaskList/TaskList";
import Filter from "./components/Filter";

import { v4 as uuidv4 } from "uuid";

export default class App extends Component {
  state = {
    tasks: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  changeFilter = (filter) => {
    console.log(filter);
    this.setState({ filter });
  };

  addtask = (task) => {
    const semName = this.state.tasks.map(task=>task.name).includes(task.name)
if(semName){
  alert(`${task.name} is already in contacts`)
}else{
 
  const contact = {
    id: uuidv4(),
    ...task,
  }; 

  this.setState((prevstate) => {
    return {
      tasks: [...prevstate.tasks, contact],
    };
  });
};
}
    
   


    

  removeTask = (taskId) => {
    this.setState((prevState) => {
      return {
        tasks: prevState.tasks.filter(({ id }) => id !== taskId),
      };
    });
  };



  getVisibleTasks = () => {
    const { tasks, filter } = this.state;

    return tasks.filter((tasks) =>
      tasks.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;

    const visibleTasks = this.getVisibleTasks();
    console.log("visibletasc", visibleTasks);
    return (
      <Layout>
         <h1>Phonebook</h1>
        <ContactForm onAddTask={this.addtask} />

        <h2>Contacts</h2>

        {visibleTasks.length > 1 && (
          <Filter value={filter} onChangeFilter={this.changeFilter} />
        )}

        {visibleTasks.length > 0 && (
          <TaskList tasks={visibleTasks} onRemoveTask={this.removeTask} />
        )}
      </Layout>
    );
  }
}

