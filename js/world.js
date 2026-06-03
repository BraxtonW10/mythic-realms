const WORLD = {
    tileSize: 64,

    towns: [
        {
            name: "Evergreen Town",
            x: 10,
            y: 10
        },
        {
            name: "Stonehaven City",
            x: 40,
            y: 10
        }
    ],

    npcs: [
        {
            name: "Professor Alder",
            x: 11,
            y: 12,
            quest: "Choose your first creature."
        },
        {
            name: "Guard",
            x: 35,
            y: 10,
            quest: "Defeat the Stonehaven Gym."
        }
    ],

    gyms: [
        {
            name: "Stonehaven Gym",
            x: 45,
            y: 10,
            badge: "Stone Badge"
        }
    ],

    buildings: [

        // Evergreen Town
        { type: "lab", x: 10, y: 12 },
        { type: "house", x: 8, y: 8 },
        { type: "house", x: 12, y: 8 },
        { type: "shop", x: 14, y: 12 },
        { type: "quest", x: 10, y: 15 },

        // Stonehaven
        { type: "gym", x: 45, y: 10 },
        { type: "house", x: 42, y: 8 },
        { type: "house", x: 48, y: 8 },
        { type: "shop", x: 44, y: 14 }
    ],

    quests: [
        {
            title: "First Steps",
            reward: 100
        },
        {
            title: "Reach Stonehaven",
            reward: 250
        },
        {
            title: "Earn the Stone Badge",
            reward: 500
        }
    ]
};