import { render } from '@testing-library/react';
import './App.css';

function App() {
  return (
    <div>
      <header>
      <h3>AstroMatch 💕</h3>
      </header>
    
    </div>
  );

}

render(
  <header>
  <h2>AstroMatch 💕</h2>
  <button>Ver para perfis</button>
  <hr color='red'></hr>
  <h3>Matches</h3>
  </header>
  )
export default App;
