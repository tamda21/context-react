import BookContextProvider from './Context/BookContext';
import BookList from './Component/BookList';
import Navbar from './Component/Navbar';
import BookForm from './Component/BookForm';
function App() {
  return (
    <BookContextProvider>
       <Navbar />
       <BookList />
       <BookForm />
    </BookContextProvider>
    );
}

export default App;
