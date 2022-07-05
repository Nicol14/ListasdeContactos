let listaDeContactos = [{}, {}, {}];

listaDeContactos = [
  { id: 1, nombres: "Nicol Dayana", apellidos: "Munevar Trujillo" },
  { id: 2, nombres: "Claudia Patricia", apellidos: "Trujillo Gualteros" },
  { id: 3, nombres: "Miguel Ricardo", apellidos: "Leon Trujillo" },
  { id: 4, nombres: "Angel German", apellidos: "Torres Velez" },
  { id: 5, nombres: "Karen Natalia", apellidos: "Guzman Munevar" },
  { id: 6, nombres: "Anyul Sofia", apellidos: "Carrillo Morales" },
  { id: 7, nombres: "Lian David", apellidos: "Muñoz Carrillo" },
  { id: 8, nombres: "Maria Jose", apellidos: "Molano Aragon" },
  { id: 9, nombres: "Yimmy Alfredo", apellidos: "Munevar Rivera" },
  { id: 10, nombres: "Emmily Fernanda", apellidos: "Torres Velez" },
];

window.alert("Añadir nuevo contacto");

const añadirContacto = function agregar() {
  listaDeContactos.push(window.prompt("ingrese un nuevo contacto"))({
    telefono: "telefono",
    ubicaciones: {
      ciudad: "ciudad",
      direccion: "direccion",
    },
  });

  console.log;
  return listaDeContactos;
};

const nuevoContacto = {
  nombres: window.prompt("Introducir sus dos nombres"),
  apellidos: window.prompt("Introducir sus dos apellidos"),
  telefono: window.prompt("Introducir su telefono celular"),
  ciudad: window.prompt("Introducir su ciudad de residencia"),
  direccion: window.prompt("Introducir direccion de su casa"),
};

listaDeContactos.splice(1, 1);

function sacar() {
  listaDeContactos.pop = listaDeContactos.length(9);
  console.log;
}

listaDeContactos;

function imprimir() {
  return listaDeContactos;
  console.log;
}

console.log(listaDeContactos);

const actualizarContacto = console.log(
  (listaDeContactos) => listaDeContactos.reload
);
