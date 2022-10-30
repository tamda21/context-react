import {BookContext} from '../Context/BookContext';
import {useContext} from 'react';

const Navbar = ()=>{
  const {books} = useContext(BookContext);
  return (
  <div className="container">
      <div className="card purple lighten-1"> <div className="card-content white-text ">
        <span className="card-title center">Tamda Books Lists</span>
        <p className="center">Currently You Have {books.length} To Geth Through ...</p>
        </div>
     </div>
   </div>
    
    )
}
export default Navbar 