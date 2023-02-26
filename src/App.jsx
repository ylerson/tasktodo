import "./App.css";
import Card from "./componets/Card";
import Title from "./componets/Title";
import useTask from "./hooks/useTask";
import FormCard from "./componets/FormCard";

//
function App() {
  const { updateChecked, handleAddNewTask, task } = useTask();
  return (
    <main>
      <header>
        <Title task={task} />
      </header>
      <section className="main_section">
        <FormCard handleAddNewTask={handleAddNewTask} />
        <Card task={task} updateChecked={updateChecked} />
      </section>
    </main>
  );
}

export default App;
