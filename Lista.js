const listaDeContactos = [{}, {}, {}];

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

const añadirContacto = function agregar() {
  listaDeContactos.push({
    telefono: "telefono",
    ubicaciones: {
      ciudad: "ciudad",
      direccion: "direccion",
    },
  });

  console.log;
  return listaDeContactos;
};

function sacar() {
  listaDeContactos.pop = listaDeContactos.length(9);
  console.log;
}

function imprimir() {
  return listaDeContactos;
  console.log;
}

console.log(listaDeContactos);
