const page = {
  name: "page",
  title: "Page",
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
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default page;
