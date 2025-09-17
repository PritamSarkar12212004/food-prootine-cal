export const FOOD_CATEGORIES = [
  { id: "vegan", label: "🌱 VEGAN" },
  { id: "vegetarian", label: "🥗 VEGETARIAN" },
  { id: "non-vegetarian", label: "🍖 NON-VEG" },
];

// Comprehensive food database with nutrition per 100g
export const FOODS = {
  vegan: [
    // Grains & Cereals
    {
      id: "quinoa",
      name: "Quinoa",
      calories: 222,
      protein: 8.1,
      carbs: 39.4,
      fat: 3.6,
      fiber: 2.8,
      image:
        "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&h=200&fit=crop",
    },
    {
      id: "brown-rice",
      name: "Brown Rice",
      calories: 216,
      protein: 5.0,
      carbs: 45.0,
      fat: 1.8,
      fiber: 3.5,
      image:
        "https://m.media-amazon.com/images/I/61eSSpEkpML._UF1000,1000_QL80_.jpg",
    },
    {
      id: "oats",
      name: "Oats",
      calories: 389,
      protein: 16.9,
      carbs: 66.3,
      fat: 6.9,
      fiber: 10.6,
      image:
        "https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2018/03/oats-701299_1920.jpg",
    },
    {
      id: "barley",
      name: "Barley",
      calories: 354,
      protein: 12.5,
      carbs: 73.5,
      fat: 2.3,
      fiber: 17.3,
      image: "https://cdn.britannica.com/31/75931-050-FED41F1F/Barley.jpg",
    },
    {
      id: "buckwheat",
      name: "Buckwheat",
      calories: 343,
      protein: 13.3,
      carbs: 71.5,
      fat: 3.4,
      fiber: 10.0,
      image:
        "https://goqii.com/blog/wp-content/uploads/2015-07-08-1436374933-6373539-Buckwheat_600_x_450.jpg",
    },

    // Legumes & Pulses
    {
      id: "lentils",
      name: "Lentils",
      calories: 230,
      protein: 17.9,
      carbs: 39.9,
      fat: 0.8,
      fiber: 15.6,
      image:
        "https://www.keepingthepeas.com/wp-content/uploads/2022/11/red-lentils-in-wood-bowl-500x375.jpg",
    },
    {
      id: "chickpeas",
      name: "Chickpeas",
      calories: 164,
      protein: 8.9,
      carbs: 27.4,
      fat: 2.6,
      fiber: 7.6,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1uCLJegA4RnQ8cfti5DVJ2gA4B41ZT5uXOg&s",
    },
    {
      id: "black-beans",
      name: "Black Beans",
      calories: 132,
      protein: 8.9,
      carbs: 23.7,
      fat: 0.5,
      fiber: 8.7,
      image:
        "https://www.realsimple.com/thmb/HN_UFnuD1MJ086vsXB0ULF6aaNA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/black-beans-health-benefits-GettyImages-1268890779-ba643ccca3254398acdca809552d66de.jpg",
    },
    {
      id: "kidney-beans",
      name: "Kidney Beans",
      calories: 127,
      protein: 8.7,
      carbs: 22.8,
      fat: 0.5,
      fiber: 6.4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsiX-pfOTQhAwpzbZQe0yGvdDfRAqnZYGhZQ&s",
    },

    // Nuts & Seeds
    {
      id: "almonds",
      name: "Almonds",
      calories: 579,
      protein: 21.2,
      carbs: 21.6,
      fat: 49.9,
      fiber: 12.5,
      image:
        "https://www.health.com/thmb/xklPFBrlPpwcHND_ov5EZwLHAwc=/2000x0/filters:no_upscale():max_bytes(150000):strip_icc()/almonds-GettyImages-683814187-2000-44a06e730fac4c60a10cbb5f9642b589.jpg",
    },
    {
      id: "walnuts",
      name: "Walnuts",
      calories: 654,
      protein: 15.2,
      carbs: 13.7,
      fat: 65.2,
      fiber: 6.7,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA0PO9XYcGyd4Dxuos6IThn4EKFSo44l5FPA&s",
    },
    {
      id: "cashews",
      name: "Cashews",
      calories: 553,
      protein: 18.2,
      carbs: 30.2,
      fat: 43.9,
      fiber: 3.3,
      image:
        "https://m.media-amazon.com/images/I/61pJXOJTKWL._UF1000,1000_QL80_.jpg",
    },
    {
      id: "chia-seeds",
      name: "Chia Seeds",
      calories: 486,
      protein: 16.5,
      carbs: 42.1,
      fat: 30.7,
      fiber: 34.4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT9Wlk7dN8YDaIMYgcNF29cpAbHM3KkUU6-w&s",
    },

    // Vegetables
    {
      id: "spinach",
      name: "Spinach",
      calories: 23,
      protein: 2.9,
      carbs: 3.6,
      fat: 0.4,
      fiber: 2.2,
      image:
        "https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/05/spinach-1296x728-header.jpg?w=1155&h=1528",
    },
    {
      id: "kale",
      name: "Kale",
      calories: 49,
      protein: 4.3,
      carbs: 8.8,
      fat: 0.9,
      fiber: 3.6,
      image:
        "https://cdn.britannica.com/74/181374-050-83F7B492/kale-leaves.jpg",
    },
    {
      id: "broccoli",
      name: "Broccoli",
      calories: 34,
      protein: 2.8,
      carbs: 6.6,
      fat: 0.4,
      fiber: 2.6,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5HI921PGF_R6Kqm0ESAHt9BT9snCb1lghkQ&s",
    },
    {
      id: "brussels-sprouts",
      name: "Brussels Sprouts",
      calories: 43,
      protein: 3.4,
      carbs: 8.9,
      fat: 0.3,
      fiber: 3.8,
      image:
        "https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2024/11/AdobeStock_59069256.jpeg",
    },
    {
      id: "cauliflower",
      name: "Cauliflower",
      calories: 25,
      protein: 1.9,
      carbs: 5.0,
      fat: 0.3,
      fiber: 2.0,
      image:
        "https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2024/11/AdobeStock_59069256.jpeg",
    },

    // Fruits
    {
      id: "avocado",
      name: "Avocado",
      calories: 160,
      protein: 2.0,
      carbs: 8.5,
      fat: 14.7,
      fiber: 6.7,
      image:
        "https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2022/04/pexels-antonio-filigno-8538296-1024x657.jpg",
    },
    {
      id: "banana",
      name: "Banana",
      calories: 89,
      protein: 1.1,
      carbs: 22.8,
      fat: 0.3,
      fiber: 2.6,
      image:
        "https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2018/08/bananas-1354785_1920.jpg",
    },
    {
      id: "apple",
      name: "Apple",
      calories: 52,
      protein: 0.3,
      carbs: 13.8,
      fat: 0.2,
      fiber: 2.4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS_Db0jJvWe6vYScLksI8qoM2WCeHfJnSBVw&s",
    },
    {
      id: "orange",
      name: "Orange",
      calories: 47,
      protein: 0.9,
      carbs: 11.8,
      fat: 0.1,
      fiber: 2.4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-6GoLpPXoOkT0lAuFcxXwJSQ7nxtRQqVJLg&s",
    },

    // Plant Proteins
    {
      id: "tofu",
      name: "Tofu",
      calories: 76,
      protein: 8.1,
      carbs: 1.9,
      fat: 4.8,
      fiber: 0.3,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsarahsvegankitchen.com%2Frecipes%2Fhomemade-tofu%2F&psig=AOvVaw1kmPaxfrfujEP1b4rDJSLY&ust=1758103912721000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCICr3suF3Y8DFQAAAAAdAAAAABAE",
    },
    {
      id: "tempeh",
      name: "Tempeh",
      calories: 193,
      protein: 19.0,
      carbs: 9.4,
      fat: 11.4,
      fiber: 9.0,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Tempeh_%288681605421%29.jpg/1200px-Tempeh_%288681605421%29.jpg",
    },
    {
      id: "seitan",
      name: "Seitan",
      calories: 370,
      protein: 75.0,
      carbs: 14.0,
      fat: 1.9,
      fiber: 6.0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ17ayh2TqmQuEKTMhGQJyau2i2MrBggfZcJw&s",
    },
    // Fruits (more)
    {
      id: "strawberries",
      name: "Strawberries",
      calories: 32,
      protein: 0.7,
      carbs: 7.7,
      fat: 0.3,
      fiber: 2.0,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg/1200px-Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg",
    },
    {
      id: "blueberries",
      name: "Blueberries",
      calories: 57,
      protein: 0.7,
      carbs: 14.5,
      fat: 0.3,
      fiber: 2.4,
      image: "https://cdn.mos.cms.futurecdn.net/uAWeWfDQVrFPdCgKmgZhX.jpg",
    },
    {
      id: "mango",
      name: "Mango",
      calories: 60,
      protein: 0.8,
      carbs: 15,
      fat: 0.4,
      fiber: 1.6,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN0Wfpzw8BkVS0tkIF8mVR-MatKmkaFlREGA&s",
    },
    // Vegetables (more)
    {
      id: "sweet-potato",
      name: "Sweet Potato",
      calories: 86,
      protein: 1.6,
      carbs: 20.1,
      fat: 0.1,
      fiber: 3.0,
      image:
        "https://japanesetaste.in/cdn/shop/articles/how-to-make-yaki-imo-baked-japanese-sweet-potato-japanese-taste.jpg?v=1737982163&width=5760",
    },
    {
      id: "tomato",
      name: "Tomato",
      calories: 18,
      protein: 0.9,
      carbs: 3.9,
      fat: 0.2,
      fiber: 1.2,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1200px-Tomato_je.jpg",
    },
    {
      id: "cucumber",
      name: "Cucumber",
      calories: 15,
      protein: 0.7,
      carbs: 3.6,
      fat: 0.1,
      fiber: 0.5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE623s2qhrV8wclXeG8CyuvOg-R1H71buOjw&s",
    },
  ],

  vegetarian: [
    // Dairy Products
    {
      id: "greek-yogurt",
      name: "Greek Yogurt",
      calories: 59,
      protein: 10.0,
      carbs: 3.6,
      fat: 0.4,
      fiber: 0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdV1URlRT1AwghdHUD8xlA_YrMiFjdFlYytg&s",
    },
    {
      id: "regular-yogurt",
      name: "Regular Yogurt",
      calories: 61,
      protein: 3.5,
      carbs: 4.7,
      fat: 3.3,
      fiber: 0,
      image: "https://static.toiimg.com/photo/78981690.cms",
    },
    {
      id: "cottage-cheese",
      name: "Cottage Cheese",
      calories: 98,
      protein: 11.1,
      carbs: 3.4,
      fat: 4.3,
      fiber: 0,
      image:
        "https://cheesemaking.com/cdn/shop/products/cottage-cheese-recipe-266121.jpg?v=1739766325&width=1500",
    },
    {
      id: "mozzarella",
      name: "Mozzarella",
      calories: 280,
      protein: 22.2,
      carbs: 2.2,
      fat: 22.4,
      fiber: 0,
      image:
        "https://simmerandsage.com/wp-content/uploads/2024/08/Homemade-Mozzarella1.jpg",
    },
    {
      id: "cheddar-cheese",
      name: "Cheddar Cheese",
      calories: 403,
      protein: 24.9,
      carbs: 1.3,
      fat: 33.1,
      fiber: 0,
      image:
        "https://cheesemaking.com/cdn/shop/files/cheddar-cheese-making-recipe.jpg?v=1743632339&width=2399",
    },
    {
      id: "paneer",
      name: "Paneer",
      calories: 265,
      protein: 18.3,
      carbs: 1.2,
      fat: 20.8,
      fiber: 0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXLwizXv67ftHEPFa3zpFBOurAwqRFEFFCvw&s",
    },
    {
      id: "whole-milk",
      name: "Whole Milk",
      calories: 61,
      protein: 3.2,
      carbs: 4.8,
      fat: 3.3,
      fiber: 0,
      image:
        "https://c.ndtvimg.com/2023-06/ev07v3c8_milk_625x300_27_June_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886",
    },

    // Eggs
    {
      id: "whole-eggs",
      name: "Whole Eggs",
      calories: 155,
      protein: 13.0,
      carbs: 1.1,
      fat: 11.0,
      fiber: 0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqon4_UFgNAox1JclxoOYbD2Oa9I9r3yWBw&s",
    },
    {
      id: "egg-whites",
      name: "Egg Whites",
      calories: 52,
      protein: 10.9,
      carbs: 0.7,
      fat: 0.2,
      fiber: 0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkM2JXIxIlv3NHxQ1EPDHEN9lh09tOSGwQ-A&s",
    },

    // Breakfast & Others
    {
      id: "oatmeal",
      name: "Oatmeal (cooked)",
      calories: 68,
      protein: 2.4,
      carbs: 12,
      fat: 1.4,
      fiber: 1.7,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_eBuC7fM5SC9J7EEzoDVHYhsz6mPY4y5upA&s",
    },
    {
      id: "granola",
      name: "Granola",
      calories: 471,
      protein: 10,
      carbs: 64,
      fat: 20,
      fiber: 10,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_hrUxJTbUu1k39dKOiDaIfv8pJDv6nDcKw&s",
    },

    // Include vegan items
    {
      id: "quinoa",
      name: "Quinoa",
      calories: 222,
      protein: 8.1,
      carbs: 39.4,
      fat: 3.6,
      fiber: 2.8,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ZVmBipn8ep13rWJnsUFAUkrjZZun-IbRMA&s",
    },
    {
      id: "lentils",
      name: "Lentils",
      calories: 230,
      protein: 17.9,
      carbs: 39.9,
      fat: 0.8,
      fiber: 15.6,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYqSLJcckmZjS1iQwCah9V6Dpe09HOBHinsw&s",
    },
    {
      id: "almonds",
      name: "Almonds",
      calories: 579,
      protein: 21.2,
      carbs: 21.6,
      fat: 49.9,
      fiber: 12.5,
      image:
        "https://www.health.com/thmb/xklPFBrlPpwcHND_ov5EZwLHAwc=/2000x0/filters:no_upscale():max_bytes(150000):strip_icc()/almonds-GettyImages-683814187-2000-44a06e730fac4c60a10cbb5f9642b589.jpg",
    },
  ],

  "non-vegetarian": [
    // Poultry
    {
      id: "chicken-breast",
      name: "Chicken Breast",
      calories: 165,
      protein: 31.0,
      carbs: 0,
      fat: 3.6,
      fiber: 0,
      image:
        "https://assets.tendercuts.in/product/C/H/594e4559-f6b7-417d-9aac-d0643b5711d3.jpg",
    },
    {
      id: "chicken-thigh",
      name: "Chicken Thigh",
      calories: 209,
      protein: 26.0,
      carbs: 0,
      fat: 10.9,
      fiber: 0,
      image:
        "https://www.hennypenny.com/wp-content/uploads/2021/05/Henny-Penny-Blog-Post-Featured-Image-Chicken-Thighs_-The-new-wings_.png",
    },
    {
      id: "turkey-breast",
      name: "Turkey Breast",
      calories: 135,
      protein: 30.1,
      carbs: 0,
      fat: 1.0,
      fiber: 0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWK5XvEZoBCPrVKgUf5AKhx7Q6Ygfk61pc4A&s",
    },

    // Fish & Seafood
    {
      id: "salmon",
      name: "Salmon",
      calories: 208,
      protein: 22.1,
      carbs: 0,
      fat: 12.4,
      fiber: 0,
      image:
        "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJmcm9udGlmeS1maW5kZXIifSwicGF0aCI6ImloaC1oZWFsdGhjYXJlLWJlcmhhZFwvZmlsZVwvSGhleHdSaUVCYWJ0b1dFRWpUM1EuanBnIn0:ihh-healthcare-berhad:6Zk6UuetaajSDB-43bdLAoamTKKBCqQFMfjY38nWPbk?width={width}",
    },
    {
      id: "tuna",
      name: "Tuna",
      calories: 144,
      protein: 23.3,
      carbs: 0,
      fat: 4.9,
      fiber: 0,
      image: "https://cdn.britannica.com/01/127301-050-68D999A2/Albacore.jpg",
    },
    {
      id: "cod",
      name: "Cod",
      calories: 82,
      protein: 17.8,
      carbs: 0,
      fat: 0.7,
      fiber: 0,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Gadus_morhua_Cod-2b-Atlanterhavsparken-Norway.JPG/1200px-Gadus_morhua_Cod-2b-Atlanterhavsparken-Norway.JPG",
    },
    {
      id: "shrimp",
      name: "Shrimp",
      calories: 99,
      protein: 18.9,
      carbs: 0.2,
      fat: 1.4,
      fiber: 0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlvcl8u74GcORYDz6Brs3hyXxnccVwL0B8kA&s",
    },

    // Red Meat
    {
      id: "beef-sirloin",
      name: "Beef Sirloin",
      calories: 271,
      protein: 27.4,
      carbs: 0,
      fat: 17.0,
      fiber: 0,
      image:
        "https://www.allrecipes.com/thmb/OJ28fIFte6Pyg93ML8IM-APbu1Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-14554-sirloin-steak-with-garlic-butter-hero-4x3-d12fa79836754fcf850388e4677bbf55.jpg",
    },
    {
      id: "ground-beef",
      name: "Ground Beef (85% lean)",
      calories: 250,
      protein: 26.0,
      carbs: 0,
      fat: 15.0,
      fiber: 0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl7OysN6Nr9OYb0nftOatf1x2mSNLJBug8Pw&s",
    },
    {
      id: "pork-tenderloin",
      name: "Pork Tenderloin",
      calories: 143,
      protein: 26.0,
      carbs: 0,
      fat: 3.5,
      fiber: 0,
      image:
        "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2023/12/Honey-Garlic-Pork-Tenderloin-main.jpg",
    },

    // Seafood (more)
    {
      id: "sardines",
      name: "Sardines",
      calories: 208,
      protein: 25,
      carbs: 0,
      fat: 11.5,
      fiber: 0,
      image:
        "https://www.licious.in/blog/wp-content/uploads/2022/02/shutterstock_289159652-min-750x750.jpg",
    },
    {
      id: "mackerel",
      name: "Mackerel",
      calories: 205,
      protein: 19,
      carbs: 0,
      fat: 13.9,
      fiber: 0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_oo4uVvQZzJ2C_a7YTV_TJynk7IEH1Avr1A&s",
    },

    // Include vegetarian items
    {
      id: "greek-yogurt",
      name: "Greek Yogurt",
      calories: 59,
      protein: 10.0,
      carbs: 3.6,
      fat: 0.4,
      fiber: 0,
      image:
        "https://www.liveeatlearn.com/wp-content/uploads/2024/08/how-to-make-homemade-greek-yogurt-25.jpg",
    },
    {
      id: "whole-eggs",
      name: "Whole Eggs",
      calories: 155,
      protein: 13.0,
      carbs: 1.1,
      fat: 11.0,
      fiber: 0,
      image:
        "https://www.news-medical.net/images/news/ImageForNews_757632_16933934061867857.jpg",
    },
  ],
};

function generateCategoryItems(categoryId, desiredTotal) {
  const base = FOODS[categoryId] || [];
  const needed = Math.max(0, desiredTotal - base.length);
  if (needed === 0) return base;

  const generated = [];
  for (let i = 1; i <= needed; i++) {
    const idx = String(i).padStart(3, "0");
    const id = `${categoryId}-gen-${idx}`;
    let namePrefix = "";
    let macros = { calories: 150, protein: 5, carbs: 20, fat: 5, fiber: 2 };
    if (categoryId === "vegan") {
      namePrefix = "Plant Power";
      macros = { calories: 180, protein: 7, carbs: 24, fat: 6, fiber: 3 };
    } else if (categoryId === "vegetarian") {
      namePrefix = "Dairy Delight";
      macros = { calories: 200, protein: 10, carbs: 18, fat: 8, fiber: 1 };
    } else {
      namePrefix = "Protein Bites";
      macros = { calories: 220, protein: 22, carbs: 2, fat: 12, fiber: 0 };
    }
    // slight variation
    const jitter = (v, p) =>
      Math.round((v + (Math.random() - 0.5) * p * v) * 10) / 10;
    generated.push({
      id,
      name: `${namePrefix} ${idx}`,
      calories: jitter(macros.calories, 0.25),
      protein: jitter(macros.protein, 0.3),
      carbs: jitter(macros.carbs, 0.3),
      fat: jitter(macros.fat, 0.35),
      fiber: jitter(macros.fiber, 0.4),
      image: null,
    });
  }
  return base.concat(generated);
}

export async function findFoodsByCategory(categoryId) {
  const fallback = () => generateCategoryItems(categoryId, 120);
  try {
    const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/foods?category=${encodeURIComponent(categoryId)}&limit=120`);
    if (!res.ok) return fallback();
    const data = await res.json();
    const items = (data.items || []).map((f) => ({
      id: f.id,
      name: f.name,
      calories: f.calories,
      protein: f.protein,
      carbs: f.carbs,
      fat: f.fat,
      fiber: f.fiber,
      image: f.image || null,
    }));
    return items.length ? items : fallback();
  } catch (e) {
    return fallback();
  }
}

// API integration for nutrition data
const API_KEY = "demo"; // Replace with actual API key
const API_BASE_URL = "https://api.edamam.com/api/food-database/v2";

export async function searchFoodByImage() {
  try {
    // For demo purposes, we'll use a mock response
    // In production, you'd use the Edamam API or similar
    const mockResponse = {
      food: {
        label: "Uploaded Food",
        nutrients: {
          ENERC_KCAL: 150,
          PROCNT: 8.5,
          CHOCDF: 15.2,
          FAT: 6.8,
        },
      },
    };

    return mockResponse;
  } catch (error) {
    console.error("Error searching food by image:", error);
    throw error;
  }
}

export async function searchFoodByName(query) {
  try {
    // Mock API response - replace with actual API call
    const mockFoods = [
      {
        id: "custom-1",
        name: query,
        calories: 120,
        protein: 5.0,
        carbs: 20.0,
        fat: 3.0,
        image: null,
      },
    ];

    return mockFoods;
  } catch (error) {
    console.error("Error searching food by name:", error);
    throw error;
  }
}
