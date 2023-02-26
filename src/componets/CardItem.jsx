export default function CardItem(props) {
  return (
    <div
      className={"card_task"}
      style={{
        backgroundColor: props.tasks.isCheck ? "#8d99ae" : "white",
        textDecoration: props.tasks.isCheck ? "line-through" : "none",
      }}
    >
      <p>{props.tasks.title} </p>

      <input
        type="checkbox"
        className="input_check_task"
        onChange={props.updateChecked(props.index)}
      />
    </div>
  );
}
