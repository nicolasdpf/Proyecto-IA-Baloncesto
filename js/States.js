var ataques = [
    {
        nombre: "ataque1",
        probabilidades: [
            {v: 0.70, f: 0.30}, //Defensa 1
            {v: 0.40, f: 0.60}, //Defensa 2
            {v: 0.65, f: 0.35}, //Defensa 3
            {v: 0.25, f: 0.75}  //Defensa 4
        ]
    },
    {
        nombre: "ataque2",
        probabilidades: [
            {v: 0.25, f: 0.75}, //Defensa 1
            {v: 0.65, f: 0.35}, //Defensa 2
            {v: 0.45, f: 0.55}, //Defensa 3
            {v: 0.80, f: 0.20}  //Defensa 4
        ]
    },
    {   
        nombre: "ataque3",
        probabilidades: [
            {v: 0.60, f: 0.40}, //Defensa 1
            {v: 0.40, f: 0.60}, //Defensa 2
            {v: 0.90, f: 0.10}, //Defensa 3
            {v: 0.25, f: 0.75}  //Defensa 4
        ]
    },
    {
        nombre: "ataque4",
        probabilidades: [
            {v: 0.49, f: 0.51}, //Defensa 1
            {v: 0.80, f: 0.20}, //Defensa 2
            {v: 0.60, f: 0.40}, //Defensa 3
            {v: 0.45, f: 0.55}  //Defensa 4
        ]
    }
];

var defensas = [
    //0 Defensa1
    {
        nombre: "defensa1",
        //0= A1, 1 = A2, 2 = A3, 3 = A4
        probabilidades: [0.55, 0.17, 0.7, 0.11],
        ataques: [{a: 0}, {a: 1}, {a: 2}, {a: 3}]
    },
    //1 Defensa2
    {
        nombre: "defensa2",
        //0= J1, 1 = J2, 2 = J3, 3 = J4
        probabilidades: [0.27, 0.11, 0.16, 0.62],
        ataques: [{a: 0}, {a: 1}, {a: 2}, {a: 3}]
    },
    //2 Defensa3
    {
        nombre: "defensa3",
        //0= J1, 1 = J2, 2 = J3, 3 = J4
        probabilidades: [0.13, 0.12, 0.66, 0.10],
        ataques: [{a: 0}, {a: 1}, {a: 2}, {a: 3}]
    },
    //3 Defensa4
    {
        nombre: "defensa4",
        //0= J1, 1 = J2, 2 = J3, 3 = J4
        probabilidades: [0.05, 0.60, 0.11, 0.17],
        ataques: [{a: 0}, {a: 1}, {a: 2}, {a: 3}]
    }
];

/* 
font-family: 'Roboto', sans-serif;
font-family: 'Prompt', sans-serif;
font-family: 'Fredoka One', cursive; */