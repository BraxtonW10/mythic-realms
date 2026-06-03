const WORLD = {

    towns: [

        {
            name: "Evergreen Town",
            x: 8,
            y: 8
        },

        {
            name: "Stonehaven City",
            x: 35,
            y: 10
        },

        {
            name: "Crystal Port",
            x: 65,
            y: 18
        },

        {
            name: "Shadow Ridge",
            x: 95,
            y: 30
        }

    ],

    buildings: [

        {
            type: "lab",
            x: 8,
            y: 7,
            name: "Professor Lab"
        },

        {
            type: "shop",
            x: 11,
            y: 8,
            name: "Item Shop"
        },

        {
            type: "gym",
            x: 35,
            y: 9,
            name: "Stone Gym",
            badge: "Stone Badge"
        },

        {
            type: "gym",
            x: 65,
            y: 17,
            name: "Crystal Gym",
            badge: "Crystal Badge"
        },

        {
            type: "gym",
            x: 95,
            y: 29,
            name: "Shadow Gym",
            badge: "Shadow Badge"
        },

        {
            type: "quest",
            x: 37,
            y: 12,
            name: "Quest Hall"
        }

    ],

    npcs: [

        {
            x: 9,
            y: 10,
            name: "Professor Oaken",
            message:
                "Explore the routes and capture creatures."
        },

        {
            x: 36,
            y: 12,
            name: "Guard",
            message:
                "The Stone Gym Leader is very strong."
        },

        {
            x: 66,
            y: 20,
            name: "Captain",
            message:
                "Crystal Port is home to water creatures."
        }

    ],

    routes: [

        {
            name: "Route 1",
            x1: 12,
            y1: 10,
            x2: 35,
            y2: 10
        },

        {
            name: "Route 2",
            x1: 38,
            y1: 10,
            x2: 65,
            y2: 18
        },

        {
            name: "Route 3",
            x1: 68,
            y1: 18,
            x2: 95,
            y2: 30
        }

    ]

};