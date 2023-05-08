import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_ID,
  dataset: "production",
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: "2023-04-24", // use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.REACT_APP_SANITY_TOKEN, // Only if you want to update
});

export const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};
