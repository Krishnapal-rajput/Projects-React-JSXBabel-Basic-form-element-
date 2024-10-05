// const root = document.querySelector("#root");
// const h2 = React.createElement("h2", {}, "JSX x Babel!");
// ReactDOM.createRoot(root).render(h2);

const root = document.querySelector("#root");

const userName = "Krishnapal Rajput";
const form = (
  <form>
    <label htmlFor="name">Username: </label>
    <input autoComplete="off" type="text" id="name" />
    <button>Greet User</button>
  </form>
);

ReactDOM.createRoot(root).render(form);
