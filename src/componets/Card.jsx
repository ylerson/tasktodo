import CardItem from "./CardItem";

export default function Card(props) {
  return (
    <section className="show_task">
      {props.task.length <= 0 ? (
        <div className="any_task">
          <p>No task added</p>
        </div>
      ) : (
        props.task.map((tasks, index) => {
          return (
            <CardItem
              key={index}
              tasks={tasks}
              index={index}
              updateChecked={props.updateChecked}
            />
          );
        })
      )}
    </section>
  );
}
