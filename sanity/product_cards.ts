const product_cards = {
  name: "product_cards",
  title: "Product Cards",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Product Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
    },
    {
      name: "catagory",
      title: "Catagory",
      type: "string",
    },
    {
      name: "avaliability",
      title: "Avaliability",
      type: "boolean",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default product_cards;
