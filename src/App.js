import React,{useState,useEffect} from 'react';
import {FormControl,Input,IconButton} from '@material-ui/core'
import Message from './components/Message'
import './App.css';
import db from './firebase'
import firebase from 'firebase';
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send';
function App() {
  const [input,setInput] = useState('')
  const [messages,setMessages] = useState([])
  const [userName,setUserName] = useState('')


  useEffect(()=>{
    db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setMessages(snapshot.docs.map(doc => ({id:doc.id,message:doc.data()})))
    })
  },[])
  useEffect(()=>{
    setUserName(prompt("enter your username"))
  },[])
  const setMessageHandler = (event)=>{
    event.preventDefault()
    db.collection('messages').add({
      message:input,
      userName:userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }
  console.log(messages)
  return (
    <div className="App">
      <h2>Messenger clone</h2>
      <h3>welcome {userName}</h3>
      <form className="app__form">
      <FormControl className="app__formControl">
        <Input className="app__input" placeholder="enter message" value={input} onChange={event => setInput(event.target.value)}/>
        <IconButton
        className="icon__Button"
        disabled={!input}
        variant='contained'
        color='primary'
        type='submit'
        onClick={setMessageHandler} 
        >
          <SendIcon />
        </IconButton>
      </FormControl>
      </form>
      <FlipMove>
        {messages.map(({message,id})=>(
          <Message key={id} message={message} userName={userName}/>
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
