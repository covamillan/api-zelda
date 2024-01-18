import './App.css';
import { AppRoutes } from './components/app.routes/app.routes';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';

function App() {
  return (
    <>
      <Header />
      <AppRoutes></AppRoutes>
      <Footer />
    </>
  );
}

export default App;
