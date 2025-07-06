import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

function App() {
  return (
    <div className="bg-gray-100 font-sans">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;