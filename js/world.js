const WORLD = {

    tileSize: 64,

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
            y: 20
        }

    ],

    buildings: [

        // Evergreen

        {
            type: "lab",
            x: 10,
            y: 8
        },

        {
            type: "shop",
            x: 13,
            y: 8
        },

        {
            type: "quest",
            x: 16,
            y: 8
        },

        {
            type: "house",
            x: 8,
            y: 11
        },

        {
            type: "house",
            x: 12,
            y: 11
        },

        // Stonehaven

        {
            type: "gym",
            x: 38,
            y: 10
        },

        {
            type: "shop",
            x: 34,
            y: 13
        },

        {
            type: "house",
            x: 41,
            y: 13
        },

        // Crystal Port

        {
            type: "gym",
            x: 67,
            y: 20
        },

        {
            type: "shop",
            x: 62,
            y: 23
        }

    ],

    npcs: [

        {
            name: "Professor Alder",
            x: 11,
            y: 8,
            message:
                "Welcome to Mythic Realms."
        },

        {
            name: "Guard",
            x: 35,
            y: 10,
            message:
                "The Gym Leader awaits."
        }

    ],

    quests: [

        {
            title: "Choose Your First Creature",
            reward: 100
        },

        {
            title: "Reach Stonehaven",
            reward: 250
        },

        {
            title: "Earn Your First Badge",
            reward: 500
        }

    ]

};