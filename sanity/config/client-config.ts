const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-06-03",
  token: process.env.SANITY_ACCESS_TOKEN,
};

export default config;
