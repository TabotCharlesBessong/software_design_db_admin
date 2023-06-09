
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

const treatment_cell = [
  {
    id:'name',
    label:'Disease Name'
  },
  {
    id:'treatment',
    label:'Treatment'
  },
  {
    id:'affected',
    label:'Crop affected'
  },
  {
    id:'time',
    label:'Duration'
  }
]

const treatment =  [
  {
    id: 1,
    disease_name: "Powdery mildew",
    treatment: "Apply a fungicide containing potassium bicarbonate or sulfur. Remove infected leaves, and avoid overhead watering. Improve air circulation around plants.",
    crop_affected: "Grapes, apples, strawberries, cucumbers, zucchini, roses, and many other plants.",
    duration: "Treatment should be repeated every 7-14 days until the disease is under control."
  },
  {
    id: 2,
    disease_name: "Black spot",
    treatment: "Apply a fungicide containing chlorothalonil or copper. Remove infected leaves, and avoid overhead watering. Improve air circulation around plants.",
    crop_affected: "Roses, apples, pears, and other plants.",
    duration: "Treatment should be repeated every 7-14 days until the disease is under control."
  },
  {
    id: 3,
    disease_name: "Anthracnose",
    treatment: "Apply a fungicide containing chlorothalonil or copper. Remove infected leaves, and avoid overhead watering. Improve air circulation around plants.",
    crop_affected: "Beans, cucumbers, tomatoes, peppers, and other plants.",
    duration: "Treatment should be repeated every 7-14 days until the disease is under control."
  },
  {
    id: 4,
    disease_name: "Fusarium wilt",
    treatment: "Remove infected plants. Rotate crops. Use disease-free seeds or transplants.",
    crop_affected: "Tomatoes, potatoes, peppers, and other plants.",
    duration: "No treatment is available. Prevention is the best solution."
  },
  {
    id: 5,
    disease_name: "Verticillium wilt",
    treatment: "Remove infected plants. Rotate crops. Use disease-free seeds or transplants.",
    crop_affected: "Tomatoes, potatoes, peppers, and other plants.",
    duration: "No treatment is available. Prevention is the best solution."
  },
  {
    id: 6,
    disease_name: "Downy mildew",
    treatment: "Apply a fungicide containing copper or mancozeb. Remove infected leaves, and avoid overhead watering. Improve air circulation around plants.",
    crop_affected: "Cucumbers, grapes, lettuce, spinach, and other plants.",
    duration: "Treatment should be repeated every 7-14 days until the disease is under control."
  },
  {
    id: 7,
    disease_name: "Late blight",
    treatment: "Apply a fungicide containing chlorothalonil or copper. Remove infected leaves, and avoid overhead watering. Improve air circulation around plants.",
    crop_affected: "Tomatoes, potatoes, and other plants.",
    duration: "Treatment should be repeated every 7-14 days until the disease is under control."
  },
  {
    id: 8,
    disease_name: "Early blight",
    treatment: "Apply a fungicide containing chlorothalonil or copper. Remove infected leaves, and avoid overhead watering. Improve air circulation around plants.",
    crop_affected: "Tomatoes, potatoes, and other plants.",
    duration: "Treatment should be repeated every 7-14 days until the disease is under control."
  },
  {
    id: 9,
    disease_name: "Septoria leaf spot",
    treatment: "Apply a fungicide containing chlorothalonil or copper. Remove infected leaves, and avoid overhead watering. Improve air circulation around plants.",
    crop_affected: "Tomatoes and other plants.",
    duration: "Treatment should be repeated every 7-14 days until the disease is under control."
  },
  {
    id: 10,
    disease_name: "Blossom end rot",
    treatment: "Apply calcium to the soil before planting. Water deeply and regularly. Avoid over-fertilizing with nitrogen.",
    crop_affected: "Tomatoes, peppers, and other plants.",
    duration: "Treatment should be continued throughout the growing season."
  },
  {
    id: 11,
    disease_name: "Leaf curl",
    treatment: "Remove infected leaves. Apply a fungicide containing copper or sulfur. Improve air circulation around plants.",
    crop_affected: "Tomatoes, peppers, and other plants.",
    duration: "Treatment should be repeated every 7-14 days until the disease is under control."
  },
  {
    id: 12,
    disease_name: "Root rot",
    treatment: "Remove infected plants. Improve soil drainage. Apply a fungicide containing mefenoxam or metalaxyl.",
    crop_affected: "Beans, tomatoes, peppers, and other plants.",
    duration: "Treatment should be repeated every 7-14 days until the disease is under control."
  },
  {
    id: 13,
    disease_name: "Clubroot",
    treatment: "Remove infected plants. Improve soil drainage. Rotate crops. Apply a fungicide containing mefenoxam or metalaxyl.",
    crop_affected: "Cabbage, broccoli, cauliflower, and other plants in the brassica family.",
    duration: "Treatment should be repeated every 7-14 days until the disease is under control."
  },
  {
    id: 14,
    disease_name: "Rust",
    treatment: "Apply a fungicide containing copper or sulfur. Remove infected leaves. Improve air circulation around plants.",
    crop_affected: "Beans, tomatoes, roses, and other plants.",
    duration: "Treatment should be repeated every 7-14 days until the disease is under control."
  },
  {
    id: 15,
    disease_name: "Sooty mold",
    treatment: "Remove infected leaves. Control the insects that cause the honeydew that the mold grows on.",
    crop_affected: "Citrus trees, gardenias, and other plants.",
    duration: "Treatment should be repeated every 7-14 days until the disease is under control."
  },
  {
    id: 16,
    disease_name: "Phytophthora blight",
    treatment: "Remove infected plants. Rotate crops. Use disease-free seeds or transplants. Apply a fungicide containing mefenoxam or metalaxyl.",
    crop_affected: "Cucurbits, peppers, tomatoes, and other plants.",
    duration: "Treatment should be repeated every 7-14 days until the disease is under control."
  },
  {
    id: 17,
    disease_name: "Cedar apple rust",
    treatment: "Remove infected leaves. Control the cedar trees that harbor the fungus.",
    crop_affected: "Apples, crabapples, and other plants.",
    duration: "Treatment should be repeated every 7-14 days until the disease is under control."
  },
  {
    id: 18,
    disease_name: "Scab",
    treatment: "Apply a fungicide containing chlorothalonil or copper. Remove infected leaves. Improve air circulation around plants.",
    crop_affected: "Apples, pears, and other plants.",
    duration: "Treatment should be repeated every 7-14 days until the disease is under control."
  },
  {
    id: 19,
    disease_name: "Fire blight",
    treatment: "Remove infected branches. Apply a bactericide containing streptomycin or oxytetracycline.",
    crop_affected: "Apples, pears, and other plants.",
    duration: "Treatment should be repeated every 7-14 days until the disease is under control."
  },
  {
    id: 20,
    disease_name: "Brown rot",
    treatment: "Remove infected fruit. Apply a fungicide containing captan or myclobutanil.",
    crop_affected: "Peaches, cherries, and other stone fruit.",
    duration: "Treatment should be repeated every 7-14 days until the disease is under control."
  },
  {
    id: 21,
    disease_name: "Powdery scab",
    treatment: "Remove infected plants. Improve soil drainage.",
    crop_affected: "Potatoes and other plants in the nightshade family.",
    duration: "No treatment is available. Prevention is the best solution."
  },
  {
    id: 22,
    disease_name: "Bacterial wilt",
    treatment: "Remove infected plants. Control the insects that spread the bacteria.",
    crop_affected: "Cucurbits, tomatoes, and other plants.",
    duration: "No treatment is available. Prevention is the best solution."
  },
  {
    id: 23,
    disease_name: "Bacterial spot",
    treatment: "Apply a bactericide containing copper. Remove infected leaves. Improve air circulation around plants.",
    crop_affected: "Tomatoes, peppers, and other plants.",
    duration: "Treatment should be repeated every 7-14 days until the disease is under"
  }
]

const data = {plants,diseases,treatment,treatment_cell}

export default data