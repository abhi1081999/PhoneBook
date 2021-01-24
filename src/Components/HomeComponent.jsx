import React,{useState,useEffect} from 'react'
import axios from 'axios';

export const HomeComponent = () => {
    const [name,setName] = useState('')
    const [phoneno,setPhone] = useState(0)
    const [email,setEmail] = useState('')
    const [list1,setList] = useState([]);

    
        useEffect(()=>{
            async function getdata(){   
            const rs =   await axios.get('http://localhost:5000/contacts')
                     
                      setList(rs.data);
                   
            }
            getdata();
            

});

       
            
                    // result.data.map((i)=>{
                    //     list.concat(result.data[i]);
                    //     setList(list);
                    // }) 
                    
                    //  result.data.map(i=>{
                    //     // setEmail(result.data[0].email)
                    //     // setPhone(result.data[0].phoneno)
                    //     setName(result.data[i].name);
                    //     setPhone(result.data[i].phoneno);
                    //     setEmail(result.data[i].email);
                    //     setList((i)=>{
                    //         return([...result.data[i],{name,
                    //         phoneno,
                    //         email,
                    //     }])
                    // })
                    // });
                     
             


    return (
        <ul>
            Add contact is working fine using Mongodb and React
      </ul>
    )
}

