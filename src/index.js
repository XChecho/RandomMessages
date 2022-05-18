const messages = [
    "Sergio",
    "Manuela",
    "Angela",
    "Gloria",
    "German",
    "Lina",
    "Salome",
    "Jhon",
    "Daniel",
    "Gustavo",
    "Geraldine",
    "Mateo",
    "Julian",
    "Carolina",
    "Paola"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() *messages.length)];
    console.log(message);
};

module.exports = { randomMsg };
