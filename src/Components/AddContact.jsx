import {React , useState} from 'react' 
import axios from 'axios';
export const AddContact = () => {


    const [name,setName] = useState('')
    const [phoneno,setPhone] = useState(0)
    const [email,setEmail] = useState('')

    const btn = (e)=>{

        e.preventDefault()
        const contact = {
            name : name,
            phno : phoneno,
            emailadd : email,

        }
        axios.post('http://localhost:5000/contacts/add',contact)
        .then(doc =>console.log(doc));


    }
    const namefn = (e)=> setName(e.target.value)
    const phonenofn = (e)=> setPhone(e.target.value)
    const emailfn = (e)=> setEmail(e.target.value)


    return (
        <div>


            <p> Add New Contact </p>
            <form  onSubmit={btn}>
        <div className="form-group"> 
          <label>Username: </label>
          <input type="userInput"
              required
              className="form-control"
              
              onChange={(e)=> namefn(e) }/> 
         
        </div>
        <div className="form-group"> 
          <label>Phone No: </label>
          <input  type="text"
              required
              className="form-control"
              
              onChange={(e)=> phonenofn(e) }
              />
        </div>
        <div className="form-group"> 
          <label>Email Address: </label>
          <input  type="text"
              required
              className="form-control"
              
              onChange={(e)=> emailfn(e) }
              />
        </div>
        
                <div className="form-group">
          <input type="submit" value="Create Contact Log" className="btn btn-primary" />
        </div>
      </form>


        </div>
    )
}
