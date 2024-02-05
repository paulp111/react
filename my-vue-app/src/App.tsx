import MovieList from "./components/MovieList.container"
import AlertButton from "./components/alertbutton";


function App() {
  return (
    <>
      <div>
        <h1>Movie List</h1>
        <MovieList />
      </div>
      <div>
        <h1>My React App</h1>
        <ul className="nav-menu">
          <li>Home</li>
          <li>Contact</li>
          <li>About Us</li>
        </ul>
        <svg>
          <circle cx="25" cy="75" r="20" stroke="red" strokeWidth="3" />
        </svg>
        <form>
          <input type="text" />
        </form>
        <AlertButton text="click me" />
      </div>
    </>
  );
}

export default App;
