import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Formulario = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const resetForm = () => {
    reset();
    Swal.fire({
      title: "Datos ingresados correctamente!",
      icon: "success",
    });
  };

  return (
    <section className="row justify-content-center mt-5">
      <div className="bg-light shadow p-3 shadow rounded w-75">
        <Form onSubmit={handleSubmit(resetForm)}>
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
                    "El nombre debe contener unicamente caracteres alfabeticos, mayusculas o minusculas",
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
                required: "El apellido es un dato obligatorio",
                minLength: {
                  value: 3,
                  message: "El apellido debe tener 3 caracteres como minimo",
                },
                maxLength: {
                  value: 50,
                  message: "El apellido debe tener 50 caracteres como minimo",
                },
                pattern: {
                  value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                  message:
                    "El apellido debe contener unicamente caracteres alfabeticos, mayusculas o minusculas",
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
            <Form.Control
              type="number"
              placeholder="Ej: 41256987"
              {...register("inputDni", {
                required: "El DNI es un dato obligatorio",
                minLength: {
                  value: 7,
                  message: "El DNI debe tener 7 caracteres como minimo",
                },
                maxLength: {
                  value: 8,
                  message: "El DNI debe tener 8 caracteres como minimo",
                },
                pattern: {
                  value: /^\d{7,8}$/,
                  message:
                    "El DNI debe contener unicamente caracteres numericos y estar escrito sin puntos",
                },
              })}
              maxLength={15}
            />
          </Form.Group>
          <Form.Text className="text-danger">
            {errors.inputDni?.message}
          </Form.Text>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ej: Juanperez@mail.com"
              {...register("inputEmail", {
                required: "El correo electrónico es un dato obligatorio",
                minLength: {
                  value: 3,
                  message:
                    "El correo electrónico debe tener 3 caracteres como minimo",
                },
                maxLength: {
                  value: 50,
                  message:
                    "El correo electrónico debe tener 50 caracteres como minimo",
                },
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Debes ingresar un correo electrónico válido",
                },
              })}
              maxLength={60}
            />
          </Form.Group>
          <Form.Text className="text-danger">
            {errors.inputEmail?.message}
          </Form.Text>
          <div className="my-3">
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default Formulario;
