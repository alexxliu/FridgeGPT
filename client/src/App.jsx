import styles from './index.module.css'
import robotImg from './assets/robot.jpg'

import { useState } from 'react'

function App() {
  const [thoughtDescription, setThoughtDescription] = useState("")

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted: ", thoughtDescription)
  }

  return (
    <main className={styles.main}>
      <img src={robotImg} alt="" className={styles.icon}/>
      <h3>Personality Advice and Therapy Bot</h3>

      <form onSubmit={onSubmit}>
        <textarea 
          cols="30" 
          rows="5"
          type="text" 
          name="help-description"
          placeholder="Describe your personality/MBTI and your thoughts"
          onChange = {(e) => setThoughtDescription(e.target.value)}></textarea>
        <input type="submit" value="Get Insight"/>
      </form>
    </main>
  )
}

export default App
