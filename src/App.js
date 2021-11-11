import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SingleBook from './Components/SingleBook';
import booksdata from './Data/SciFi.json'
import BookList from './Components/Booklist';
import CommentArea from './Components/CommentArea';
function App() {
  return (<>
   <div className='container'>
   <SingleBook book={booksdata[4]} />
   <CommentArea />
   <BookList books={booksdata} />
   </div>
  </>)
}

export default App;
