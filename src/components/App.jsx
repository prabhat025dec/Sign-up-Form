import React from "react";
import ReactDOM from "react-dom";
import {useState} from 'react';





function App(){

        const  [fName, setfName] =  useState('');
        const  [lName, setlName] =  useState('');
        const  [email, setEmail] =  useState('');
        const  [password, setPassword] =  useState('');
        const [msg1, setMsg1]=useState('');
        const [msg2, setMsg2]=useState('');
        const [msg3, setMsg3]=useState('');
        const [msg4, setMsg4]=useState('');
        
        const  handlefName = (event) => {
                
                setfName(event.target.value);
                console.log(fName);
                setMsg1('');
                document.querySelector("#fname").classList.remove("invalid");
              
        };
        const  handlelName = (event) => {
                setlName(event.target.value);
                setMsg2('');
                document.querySelector("#lname").classList.remove("invalid");
        };
        
        
        const handleEmail=(event)=>{
                setEmail(event.target.value);
                setMsg3('');
                document.querySelector("#email").classList.remove("invalid");
        }
        
        const handlePassword=(event)=>{
                setPassword(event.target.value);
                setMsg4('');
                document.querySelector("#pwd").classList.remove("invalid");
        }
        function handleSubmit(event){
                event.preventDefault();
                 if(fName===''){

                        setMsg1('First Name cannot be empty');
                        document.querySelector("#fname").classList.add("invalid");
                 }
                 else{
                        setMsg1('');  
                 }
                 if(lName===''){
                        setMsg2('Last Name cannot be empty');
                        document.querySelector("#lname").classList.add("invalid");
                 }
                 else{
                        setMsg2('');  
                 }
                 if(email===''){
                        setMsg3('Email cannot be empty');
                        document.querySelector("#email").classList.add("invalid");
                 }
                 else{
                        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                        if (!email.match(validRegex)) {
                                setMsg3('Looks like this is not an email');
                                document.querySelector("#email").classList.add("invalid"); 
                        }
                        else{
                                setMsg3(''); 
                        }      
                 }
                 if(password===''){
                        setMsg4('Password cannot be empty');
                        document.querySelector("#pwd").classList.add("invalid");
                 }
                 else{
                        setMsg4('');
                 }
                
                 
        }


   return (<div className="flex-container">
               <div className="card card1">
               <h1 class="Learn">Learn to code by watching others</h1>
               <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
               

               </div>
               <div className="card card2">
               <button type="button" className="try">Try it free 7 days then $20/mo. thereafter</button>
                <div className="form-container">
                        <form >
                            
                             <input type="text" className="first-input " onChange={handlefName} value={fName} placeholder="First Name" name="fname" id="fname"/><br/>
                               <p className="error-message">{msg1}</p> 
                             <input type="text" className="" onChange={handlelName}  value={lName} placeholder="Last Name" name="lname" id="lname"/><br/>
                             <p className="error-message">{msg2}</p>
                             <input type="email" className="" onChange={handleEmail} value={email} placeholder="Email Address" name="email" id="email"/><br/>
                             <p className="error-message">{msg3}</p>
                             <input type="password" className="" onChange={handlePassword} value={password} placeholder="Password"  name="pwd" id="pwd"></input><br/>
                             <p className="error-message">{msg4}</p>
                             
                             <input type="submit" onClick={handleSubmit} value="CLAIM YOUR FREE TRIAL" className="submit-button"></input>
                             
                        </form>
                        <p class="below-form">By clicking the button, you are agreeing to our <a className="terms">Terms and Services</a></p>
                </div>
               

            </div>
           


   </div>);
}




export default App;
