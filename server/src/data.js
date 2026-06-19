export const products = [
  {
    id: 1,
    serialNumber: 1234,
    isNew: 1,
    photo:
      "https://res.cloudinary.com/ddln4hnns/image/upload/v1766694209/tool-next-app/tools/ge33u4voeqqmrssgopem.jpg",
    title:
      "Product 1 Product 1 Product 1 Product 1 Product 1 Product 1 Product 1 Product 1 Product 1 Product 1 Product 1 Product 1 ",
    type: "Monitors",
    specification: "Specification 1",
    guarantee: {
      start: "2017-06-29 ",
      end: "2017-06-29 ",
    },
    price: [
      { value: 100, symbol: "USD", isDefault: 0 },
      { value: 2600, symbol: "UAH", isDefault: 1 },
    ],
    order: 1,
    date: "2017-06-29 12:09:33",
  },
  {
    id: 2,
    serialNumber: 1234,
    isNew: 1,
    photo:
      "https://res.cloudinary.com/ddln4hnns/image/upload/v1766694209/tool-next-app/tools/ge33u4voeqqmrssgopem.jpg",
    title: "Product 2",
    type: "Monitors",
    specification: "Specification 1",
    guarantee: {
      start: "2017-06-29 ",
      end: "2017-06-29 ",
    },
    price: [
      { value: 100, symbol: "USD", isDefault: 0 },
      { value: 2600, symbol: "UAH", isDefault: 1 },
    ],
    order: 2,
    date: "2017-06-29 12:09:33",
  },
  {
    id: 3,
    serialNumber: 1234,
    isNew: 1,
    photo:
      "https://res.cloudinary.com/ddln4hnns/image/upload/v1766694209/tool-next-app/tools/ge33u4voeqqmrssgopem.jpg",
    title: "Product 3",
    type: "Monitors",
    specification: "Specification 1",
    guarantee: {
      start: "2017-06-29",
      end: "2017-06-29",
    },
    price: [
      { value: 150, symbol: "USD", isDefault: 0 },
      { value: 3000, symbol: "UAH", isDefault: 1 },
    ],
    order: 1,
    date: "2017-06-29 12:09:33",
  },
  {
    id: 4,
    serialNumber: 4533,
    isNew: 0,
    photo:
      "https://res.cloudinary.com/ddln4hnns/image/upload/v1766694209/tool-next-app/tools/ge33u4voeqqmrssgopem.jpg",
    title: "Product 4 Product 4 Product 4  ",
    type: "Computers",
    specification: "Specification 2",
    guarantee: {
      start: "2017-06-29",
      end: "2017-06-29",
    },
    price: [
      { value: 100, symbol: "USD", isDefault: 0 },
      { value: 2600, symbol: "UAH", isDefault: 1 },
    ],
    order: 3,
    date: "2017-06-29 12:09:33",
  },
];

export const orders = [
  {
    id: 1,
    title:
      "Order 1 Order 1 Order 1 Order 1 Order 1 Order 1 Order 1 Order 1 Order 1 Order 1 Order 1 ",
    date: "2017-06-29 12:09:33",
    description: "desc",
    products: products.filter((p) => p.order === 1),
  },
  {
    id: 2,
    title: "Order 2",
    date: "2017-06-29 12:09:33",
    description: "desc",
    products: products.filter((p) => p.order === 2),
  },
  {
    id: 3,
    title: "Order 3",
    date: "2017-06-29 12:09:33",
    description: "desc",
    products: products.filter((p) => p.order === 3),
  },
];
