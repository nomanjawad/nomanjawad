import { createClient } from "contentful";

// Create the client instance
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
});

export async function fetchExperience() {
  try {
    const response = await client.getEntries({
      content_type: "experience",
    });

    return response.items.map((item) => ({
      id: item.fields.id,
      jobTitle: item.fields.jobTitle,
      companyName: item.fields.companyName,
      jobDuration: item.fields.jobDuration,
      jobDiscription: item.fields.jobDiscription,
      companyLogoUrl: item.fields.companyLogoUrl,
    }));
  } catch (error) {
    console.error("Error fetching experience:", error);
    throw new Error("Failed to fetch experience from Contentful");
  }
}
