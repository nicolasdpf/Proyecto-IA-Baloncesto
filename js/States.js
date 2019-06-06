var states = [
    //0 Ataque1
    {
        nombre: "ataque1",
        probabilidades: [
            {v: 0.70, f: 0.30}, //Defensa 1
            {v: 0.40, f: 0.60}, //Defensa 2
            {v: 0.65, f: 0.35}, //Defensa 3
            {v: 0.25, f: 0.75}  //Defensa 4
        ]
    },
    //1 Ataque2
    {
        nombre: "ataque2",
        probabilidades: [
            {v: 0.25, f: 0.75}, //Defensa 1
            {v: 0.65, f: 0.35}, //Defensa 2
            {v: 0.45, f: 0.55}, //Defensa 3
            {v: 0.80, f: 0.20}  //Defensa 4
        ]
    },
    //2 Ataque3
    {
        nombre: "ataque3",
        probabilidades: [
            {v: 0.60, f: 0.40}, //Defensa 1
            {v: 0.40, f: 0.60}, //Defensa 2
            {v: 0.90, f: 0.10}, //Defensa 3
            {v: 0.25, f: 0.75}  //Defensa 4
        ]
    },
    //3 Ataque4
    {
        nombre: "ataque4",
        probabilidades: [
            {v: 0.49, f: 0.51}, //Defensa 1
            {v: 0.80, f: 0.20}, //Defensa 2
            {v: 0.60, f: 0.40}, //Defensa 3
            {v: 0.45, f: 0.55}  //Defensa 4
        ]
    },
    //4 Defensa1
    {
        nombre: "Defensa1",
        //0= J1, 1 = J2, 2 = J3, 3 = J4
        probabilidades: [0.50, 0.15, 0.10, 0.10],
        ataques: [{a: 0}, {a: 1}, {a: 2}, {a: 3}]
    },
    //5 Defensa2
    {
        nombre: "Defensa2",
        //0= J1, 1 = J2, 2 = J3, 3 = J4
        probabilidades: [0.20, 0.15, 0.10, 0.70],
        ataques: [{a: 0}, {a: 1}, {a: 2}, {a: 3}]
    },
    //6 Defensa3
    {
        nombre: "Defensa3",
        //0= J1, 1 = J2, 2 = J3, 3 = J4
        probabilidades: [0.20, 0.10, 0.60, 0.10],
        ataques: [{a: 0}, {a: 1}, {a: 2}, {a: 3}]
    },
    //7 Defensa4
    {
        nombre: "Defensa4",
        //0= J1, 1 = J2, 2 = J3, 3 = J4
        probabilidades: [0.10, 0.60, 0.20, 0.10],
        ataques: [{a: 0}, {a: 1}, {a: 2}, {a: 3}]
    }
];

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
        nombre: "Defensa1",
        //0= J1, 1 = J2, 2 = J3, 3 = J4
        probabilidades: [0.50, 0.15, 0.10, 0.10],
        ataques: [{a: 0}, {a: 1}, {a: 2}, {a: 3}]
    },
    //1 Defensa2
    {
        nombre: "Defensa2",
        //0= J1, 1 = J2, 2 = J3, 3 = J4
        probabilidades: [0.20, 0.15, 0.10, 0.70],
        ataques: [{a: 0}, {a: 1}, {a: 2}, {a: 3}]
    },
    //2 Defensa3
    {
        nombre: "Defensa3",
        //0= J1, 1 = J2, 2 = J3, 3 = J4
        probabilidades: [0.20, 0.10, 0.60, 0.10],
        ataques: [{a: 0}, {a: 1}, {a: 2}, {a: 3}]
    },
    //3 Defensa4
    {
        nombre: "Defensa4",
        //0= J1, 1 = J2, 2 = J3, 3 = J4
        probabilidades: [0.10, 0.60, 0.20, 0.10],
        ataques: [{a: 0}, {a: 1}, {a: 2}, {a: 3}]
    }
];