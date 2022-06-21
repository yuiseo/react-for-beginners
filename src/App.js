import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from"./routes/Home";
import Detail from"./routes/Detail";
function App() {
  return(
  <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path={`${process.env.PUBLIC_URL}/movie/:id`} element={<Detail/>}/>
      <Route path={`${process.env.PUBLIC_URL}`} element={<Home />}/>
    </Routes>
  </Router>
) 
}

export default App;
