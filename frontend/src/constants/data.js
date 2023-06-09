
import images from "./images"

const plants = [
    {
        name: 'Tomato',
        image: images.tomato,
        planting_date: '2022-05-01',
        location: 'Bamenda',
        id:1
    },
    {
        name: 'Lettuce',
        image: images.lettuce,
        planting_date: '2022-04-15',
        location: 'Douala',
        id:2
    },
    {
        name: 'Carrot',
        image: images.carrot,
        planting_date: '2022-05-10',
        location: 'Buea',
        id:3
    },
    {
        name: 'Broccoli',
        image: images.broccoli,
        planting_date: '2022-04-30',
        location: 'Buea',
        id:4
    },
    {
        name: 'Pepper',
        image: images.pepper,
        planting_date: '2022-05-15',
        location: 'Yaounde',
        id:5
    },
    {
        name: 'Cucumber',
        'image': images.cuccumber,
        'location': 'Edea',
        id:6
    },
    {
        name: 'Tomato',
        image: images.tomato,
        planting_date: '2022-05-01',
        location: 'Limbe',
        id:7
    },
    {
        name: 'Banana',
        image: images.banana,
        planting_date: '2023-04-15',
        location: 'Edea',
        id:8
    },
    {
        name: 'Carrot',
        image: images.carrot,
        planting_date: '2022-07-10',
        location: 'Garoua',
        id:9
    },
    {
        name: 'Potato',
        image: images.potato,
        planting_date: '2022-04-30',
        location: 'Mamfe',
        id:10
    },
    {
        name: 'Pepper',
        image: images.pepper,
        planting_date: '2022-05-15',
        location: 'Yaounde',
        id:11
    },
    {
        name: 'Cucumber',
        'image': images.cuccumber,
        'planting_date': '2022-05-05',
        'location': 'Baffoussam',
        id:12
    },
    {
        name: 'Kale',
        'image': images.kale,
        'planting_date': '2022-05-05',
        'location': 'Limbe',
        id:13
    },
    
]

const diseases = [
  {
    id: 1,
    name: "Fusarium wilt",
    plants: ["Tomatoes", "Cucumbers", "Watermelons"],
    treatment: "Crop rotation and soil fumigation",
    image: "/images/fusarium-wilt.jpg",
  },
  {
    id: 2,
    name: "Powdery mildew",
    plants: ["Grapes", "Squash", "Pumpkins"],
    treatment: "Fungicides and pruning",
    image: "/images/powdery-mildew.jpg",
  },
  {
    id: 3,
    name: "Apple scab",
    plants: ["Apples", "Pears", "Crabapples"],
    treatment: "Fungicides and removing infected leaves",
    image: "/images/apple-scab.jpg",
  },
  {
    id: 4,
    name: "Late blight",
    plants: ["Potatoes", "Tomatoes"],
    treatment: "Fungicides and removing infected plants",
    image: "/images/late-blight.jpg",
  },
  {
    id: 5,
    name: "Black spot",
    plants: ["Roses"],
    treatment: "Fungicides and removing infected leaves",
    image: "/images/black-spot.jpg",
  },
  {
    id: 6,
    name: "Downy mildew",
    plants: ["Grapes", "Cucumbers", "Lettuce"],
    treatment: "Fungicides and proper plant spacing",
    image: "/images/downy-mildew.jpg",
  },
  {
    id: 7,
    name: "Anthracnose",
    plants: ["Beans", "Peppers", "Tomatoes"],
    treatment: "Fungicides and proper plant spacing",
    image: "/images/anthracnose.jpg",
  },
];

const data = {plants,diseases}

export default data