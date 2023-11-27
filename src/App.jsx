import "./App.css";
import Calculadora from "./components/Calculadora";
import Themes from "./components/themes/Themes";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="h-screen w-full max-w-xs mx-auto">
      <Themes />
      <Calculadora />
      <Footer />
    </main>
  );
}

export default App;
