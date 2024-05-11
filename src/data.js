const tours = new Map();
tours.set("arbat", {
    name: "Арбатская",
    excurtions: [
        {
            name: "Экскурсия 1",
            free: true,
            slug: 'exc1',
            text: [
                "Пример текста",
                "Пример текста 2",
                "Пример текста 3"
            ]
        },
        {
            name: "Экскурсия 2",
            free: false,
            slug: 'exc2',
            text: [
                "Пример текста",
                "Пример текста 2",
                "Пример текста 3"
            ]
        },
        {
            name: "Экскурсия 3",
            free: false,
            slug: 'exc3',
            text: [
                "Пример текста",
                "Пример текста 2",
                "Пример текста 3"
            ]
        },
    ],
})
tours.set("china-city", {
    name: "Китай-город",
    excurtions: [
        {
            name: "Экскурсия 1",
            free: true,
            slug: 'exc1',
            text: [
                "Пример текста",
                "Пример текста 2",
                "Пример текста 3"
            ]
        },
        {
            name: "Экскурсия 2",
            free: false,
            slug: 'exc2',
            text: [
                "Пример текста",
                "Пример текста 2",
                "Пример текста 3"
            ]
        },
        {
            name: "Экскурсия 3",
            free: false,
            slug: 'exc3',
            text: [
                "Пример текста",
                "Пример текста 2",
                "Пример текста 3"
            ]
        },
    ],
})
tours.set("kuznetsky", {
    name: "Кузнецкий мост",
    excurtions: [
        {
            name: "Экскурсия 1",
            free: true,
            slug: 'exc1',
            text: [
                "Пример текста",
                "Пример текста 2",
                "Пример текста 3"
            ]
        },
        {
            name: "Экскурсия 2",
            free: false,
            slug: 'exc2',
            text: [
                "Пример текста",
                "Пример текста 2",
                "Пример текста 3"
            ]
        },
        {
            name: "Экскурсия 3",
            free: false,
            slug: 'exc3',
            text: [
                "Пример текста",
                "Пример текста 2",
                "Пример текста 3"
            ]
        },
    ],
})

export default tours;