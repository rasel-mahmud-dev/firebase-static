
import { db } from "./firebase/index"

import {addDoc, collection, getDocs, doc, deleteDoc} from "firebase/firestore"
import {useState, useEffect} from "preact/compat"

export function App() {

  const [users, setUsers] = useState()

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  })

  const userCollectionRef = collection(db, "users")


  function handleChange(e){
    setUserData({...userData, [e.target.name]: e.target.value})
  }

  useEffect(()=>{
    (async function(){
      console.time()
      try{
        const data  = await getDocs(userCollectionRef)
        console.timeEnd()
        setUsers(data.docs.map(docs=> ({ ...docs.data(), id: docs.id }) ));
        } catch(ex){
          console.log(ex);
        }
    }())
  }, [])


  
  
  function save(e){
    e.preventDefault()
    let isComplete = true
    for (const key in userData) {
      let value = userData[key]        
      if(!value){
        isComplete = false
      }
    }

    if(!isComplete){
      return alert("please fil all fields")
    }


    addDoc(userCollectionRef, userData).then(res=>{
      console.log(res);

      setUsers([
        ...users,
        userData
      ])
      
    }).catch(ex=>{
      console.log(ex);
    })
  }


  const addUserForm = ()=>{
    return (
      <form onSubmit={save}>
        <input 
        onChange={handleChange} 
          value={userData.username}
          type="text" 
          placeholder="enter username"
          name="username"/>

        <input 
        onChange={handleChange} 
          value={userData.email}
          type="email" 
          placeholder="enter email"
          name="email"/>

        <input
          onChange={handleChange} 
          value={userData.password}
          type="password" 
          placeholder="enter password"
          name="password"/>

      <button type='submit'>Save</button>

      </form>
    )

  }
  

  async function handleDelete(id){
    try{
      deleteDoc(doc(db, "users", id));
      setUsers(users.filter(user=>user.id !== id))
    } catch(ex){
      console.log(ex);
    }
  }


  return (
    <div>

      <h1 class='title'>FireStore Crud</h1>
 
        {addUserForm()}

        <br/>

      { users && users.map(user=>(
        <div style={{background: "#dbdbdb", padding: "20px", margin: "10px"}}>
          <h3>{user.username}</h3>
          <h4>{user.email}</h4>
          <button onClick={()=>handleDelete(user.id)}>Delete</button>
        </div>
      )) }

    </div>   
  )
}
