import React from 'react';
import styles from './App.scss';

class App extends React.Component {

  handleClick() {
    console.log(this)
  }
 render() {
  return (
    <div>
      <h1 className={styles.title} onClick={this.handleClick}>React Power</h1>
    </div>
   );
  }
}

export default App;
