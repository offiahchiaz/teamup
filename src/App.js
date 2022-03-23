import { useAuthContext } from './hooks/useAuthContext';

import './App.css';

function App() {
  const { authIsReady } = useAuthContext()

  return (
    <div className="App">
      { authIsReady && (
        <h1>lol</h1>
      )}
    </div>
  );
}

export default App;
