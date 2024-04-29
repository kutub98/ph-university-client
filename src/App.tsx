import MainLayout from './Components/Layouts/MainLayout';
import ProtectedLayout from './Components/Layouts/ProtectedLayout';

function App() {
  return (
    <ProtectedLayout>
      <MainLayout />
    </ProtectedLayout>
  );
}

export default App;
