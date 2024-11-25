import sharetribeClient from "./sharetribeService";

export const fetchListings = async (page = 1, perPage = 10): Promise<any[]> => {
  const response = await sharetribeClient.get("/listings/query", {
    params: { page, per_page: perPage },
  });

  return response.data.data.map((item: any) => ({
    id: item.id,
    title: item.attributes.title || "N/A",
    description: item.attributes.description || "No description available",
    state: item.attributes.state || "unknown",
    price: item.attributes.price
      ? `${item.attributes.price.amount} ${item.attributes.price.currency}`
      : "No price",
    location: item.attributes.publicData?.location?.address || "No location",
    createdAt: item.attributes.createdAt,
  }));
};
