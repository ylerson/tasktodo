export default function Form(props) {
  return (
    <form onSubmit={props.handleAddNewTask} className="input_header">
      <input
        name="title"
        placeholder="What is your next task?"
        className="input_add_task"
      />
      {/* */}
    </form>
  );
}
