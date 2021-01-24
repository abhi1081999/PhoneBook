import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router,Route} from 'react-router-dom'
import {Navbar} from './Components/Navbar'
import {SearchContact} from './Components/SearchContact'
import {AddContact} from './Components/AddContact'
import {UpdateContact} from './Components/UpdateContact'
import {HomeComponent} from './Components/HomeComponent'


function App() {
  return (
    <Router>

      <Navbar/>
      <br/>
      <Route path = '/contacts' component = {HomeComponent}/>
      <Route path = '/contacts/add' component = {AddContact}/>
      <Route path = '/contacts/:id' component = {SearchContact}/>
      <Route path = '/contacts/update/:id' component = {UpdateContact} />
    </Router>
  );
}

export default App;
