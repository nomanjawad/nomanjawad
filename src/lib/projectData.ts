import { createClient } from "contentful";

// Create the client instance
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
});

export async function fetchProjects() {
  try {
    const response = await client.getEntries({
      content_type: "projects",
    });

    return response.items.map((item) => ({
      id: item.fields.id,
      title: item.fields.title,
      featureImage: item.fields.featureImage,
      websiteurl: item.fields.websiteurl || "",
    }));
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw new Error("Failed to fetch projects from Contentful");
  }
}
