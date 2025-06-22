import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>
      <main className="container my-4">
        <h1 className="text-center text-light">Formulario Simple</h1>
        <Formulario/>
      </main>
      <footer className="bg-light text-dark text-center py-3">
        <p>&copy;Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
