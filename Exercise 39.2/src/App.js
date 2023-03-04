import React, { useState, useEffect } from 'react';  
  
const useDocumentTitle = title => {  
  useEffect(() => {  
    document.title = title;  
  }, [title])  
}  
  
function App() {  
  const [count, setCount] = useState(0);  
  const incrementCount = () => setCount(count + 1);  
  useDocumentTitle(`You clicked the button ${count} times`);  
  // useEffect(() => {  
  //   document.title = `You clicked ${count} times`  
  // });  
  
  return (  
    <div>  
      <center>
        <h3>The Click Counter Game:</h3>
        <p>Do you like Codeyoung?<br/>
        If yes then click the button for sharing your likes, that can be counted</p>
      <p>You clicked the Like button {count} times</p>  
      <button onClick={incrementCount}>Like</button>  
      <h2>I Love my Codeyoung</h2>

      </center>
    </div>  
  )  
}  
export default App; 