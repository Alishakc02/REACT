
import './App.css';
import App3 from './pages/App3';

function App(){
  // const[books,setbooks]=useState([]);
  // const[loading, setLoading]=useState(true);
  // useEffect(() => {
  //   axios.get("https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=oZ0RJr1hqmfXJtCBIb1aQG8GBIRuqS0I").then(res=>{
  //   console.log(res.data);
  // setbooks(res.data.results.lists)
  // setLoading(false)
  // }).catch(err=>console.log(err))
  // },[])
  
  return (
    // <div className="container">
    //  <h1>Book Listing App</h1>
    //  {loading ? "loading...":""}
    //  {books.map((books,key)=>
    //  <div className='row'>
    //   <h3>{books.display_name}</h3>
    //   <div className='row' >
    //     {books.books.map((_book,key)=>{
    //         return <div key={key} className='col-md-4' >
    //           <img src={_book.book_image} alt={_book.title} />
    //           <h3>title:{_book.title}</h3>
    //           <h3>author:{_book.author}</h3>
    //           <h3>publisher:{_book.publisher}</h3>

    //           </div>
     
    //  })}
    //     </div>
     
    //  </div>
    //  )}
    // </div>
    <App3/>
  );
}

export default App;
