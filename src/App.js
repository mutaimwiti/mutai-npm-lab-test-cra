import * as Car from 'mutai-npm-lab/Car';
import * as Foo from 'mutai-npm-lab/Foo';
import * as Person from 'mutai-npm-lab/Person';

import './App.css';

const npmLab = require('mutai-npm-lab');

console.log('root exports', Object.keys(npmLab));
console.log('Car exports', Car);
console.log('Foo exports', Foo);
console.log('Person exports', Person);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
