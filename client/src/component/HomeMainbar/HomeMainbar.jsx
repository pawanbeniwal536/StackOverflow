import React from 'react'
import {useLocation,useNavigate}from 'react-router-dom';
import "./HomeMainbar.css";
import QuestionsList from './QuestionsList';
import { useSelector } from 'react-redux';
const HomeMainbar = () => {
  const location=useLocation()
  const user=1;
  var navigate=useNavigate();


  const questionsList = useSelector(state=>state.questionsReducer)

console.log('it is homeMainbar')
const checkAuth=()=>{
  if (user===null){
    alert('Login or signup to ask a question ');
    navigate('/Auth');
  }
  else{
    navigate('/AskQuestions') 
  }
}
  return (
   <div className='main-bar'>
    <div className='main-bar-header'>
{
  location.pathname==='/'?<h1>Top Questions</h1>:<h1>All Questions</h1>
}
    <button onClick={checkAuth}className='ask-btn'>Ask Qustions</button>
    </div>
    <div className='Question-padding'>
      {
        questionsList.data==='null'?
        <h1>Loading...</h1>:
        <>
        <p>{questionsList?.data?.length} Questions </p>
        <QuestionsList questionsList={questionsList.data}/>
        </>
      }
    </div>
   </div>
  )
}

export default HomeMainbar
