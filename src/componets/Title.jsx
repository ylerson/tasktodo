export default function Title({task}) {
  return (
    <>
      <h1>What is your Next task today</h1>
      <h2>{[...task].pop()?.title}</h2>
    </>
  );
}
