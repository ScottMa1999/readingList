import BookContextProvider from "./context/bookContext";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import AddForm from "./components/AddForm";


function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <AddForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
