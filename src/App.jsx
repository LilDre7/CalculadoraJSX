import "./App.css";
import Calculadora from "./components/Calculadora";
import Themes from "./components/themes/themes";

function App() {
  return (
    <main className="h-screen w-full max-w-xs mx-auto">
      <Themes />
      <Calculadora />
    </main>
  );
}

export default App;
