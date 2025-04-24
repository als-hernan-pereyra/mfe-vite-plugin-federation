import React, { Suspense, useState } from 'react';

const RemoteButton = React.lazy(() => import('remote/RemoteButton'));

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Host App</h1>
      <p>Contador: {count}</p>
      <Suspense fallback={<div>Cargando botón remoto...</div>}>
        <RemoteButton
          text="Sumar"
          onClick={() => setCount(count + 1)}
        />
      </Suspense>
    </div>
  );
}

export default App;
