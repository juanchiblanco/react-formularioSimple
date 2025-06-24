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
        <Form onSubmit={handleSubmit()}>
          <h5 className="text-center lead border border-dark py-3 rounded">
            Ingresa tus datos
          </h5>
          <Form.Group className="mb-3" controlId="nombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="name"
              placeholder="Ej: Juan"
              {...register("inputNombre", {
                required: "El nombre es un dato obligatorio",
                minLength: {
                  value: 3,
                  message: "El nombre debe tener 3 caracteres como minimo",
                },
                maxLength: {
                  value: 50,
                  message: "El nombre debe tener 50 caracteres como minimo",
                },
                pattern: {
                  value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                  message:
                    "El nombre debe contener caracteres alfabeticos, mayusculas o minusculas",
                },
              })}
              maxLength={60}
            />
          </Form.Group>
          <Form.Text className="text-danger">
            {errors.inputNombre?.message}
          </Form.Text>
          <Form.Group className="mb-3" controlId="apellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="name"
              placeholder="Ej: Perez"
              {...register("inputApellido", {
                required: "El apelido es un dato obligatorio",
                minLength: {
                  value: 3,
                  message: "El apelido debe tener 3 caracteres como minimo",
                },
                maxLength: {
                  value: 50,
                  message: "El apelido debe tener 50 caracteres como minimo",
                },
                pattern: {
                  value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                  message:
                    "El apellido debe contener caracteres alfabeticos, mayusculas o minusculas",
                },
              })}
              maxLength={60}
            />
          </Form.Group>
          <Form.Text className="text-danger">
            {errors.inputApellido?.message}
          </Form.Text>
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
