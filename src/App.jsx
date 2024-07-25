import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage/MainPage"
import LogInPage from "./pages/LogInPage/LogInPage"

function App() {


  return (
    <Router>
        <Routes>
          <Route exact path ="/" element= {<LogInPage/>}/>
          <Route exact path = "/mainpage" element = {<MainPage/>}/>
        </Routes>
    </Router>
  )
}

export default App
