import App from "./App";
export default function Root(props) {
  return (
    <div>
      <section>{props.name} is mounted!</section>
      <App />
    </div>
  );
}
