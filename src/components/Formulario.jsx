import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

const Formulario = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <section className="row justify-content-center mt-5">
      <div className="bg-light shadow p-3 shadow rounded w-75">
        <Form onSubmit={handleSubmit(reset())}>
          <h5 className="text-center lead border border-dark py-3 rounded">Ingresa tus datos</h5>
          <Form.Group className="mb-3" controlId="nombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="name" placeholder="Ej: Juan" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="apellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="name" placeholder="Ej: Perez" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="dni">
            <Form.Label>DNI</Form.Label>
            <Form.Control type="number" placeholder="Ej: 41256987" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ej: Juanperez@mail.com"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default Formulario;
