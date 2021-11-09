import React, { Component } from 'react';
import styles from './meuestilo.module.css';
class App extends Component{
  render() {
    return (
      <div>
        <h1 className={styles.bigblue}>
        Eae, como você está?</h1>
        <h1>Estou bem e você?</h1>
        <h1 className={styles.legal}>Otimo!</h1>
      </div>
      
    )
  }
}


export default App;