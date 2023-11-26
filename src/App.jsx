import "./App.css";
import Title from "./components/Title";
import Calculadora from "./components/calculadora";

function App() {
  return (
    <main className="h-screen w-full max-w-xs mx-auto">
      <Title />
      <Calculadora />
    </main>
  );
}

export default App;
