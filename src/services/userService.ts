import sharetribeClient from "./sharetribeService";

export const fetchUsers = async (page = 1, perPage = 10): Promise<any[]> => {
  const response = await sharetribeClient.get("/users/query", {
    params: { page, per_page: perPage },
  });

  return response.data.data.map((item: any) => ({
    id: item.id,
    name: item.attributes.profile.displayName || "N/A",
    email: item.attributes.email || "N/A",
    registrationDate: item.attributes.createdAt,
    userType: item.attributes.profile.publicData.userType || "unknown",
  }));
};

export const fetchUsersByIds = async (userIds: string[]): Promise<any[]> => {
  try {
    const response = await sharetribeClient.get("/users/query", {
      params: { ids: userIds },
    });

    return response.data.data.map((user: any) => ({
      id: user.id,
      name: user.attributes.profile.displayName || "N/A",
      email: user.attributes.email || "N/A",
      userType: user.attributes.profile.publicData.userType || "unknown",
      registrationDate: user.attributes.createdAt,
    }));
  } catch (error) {
    console.error("Error al obtener usuarios por IDs:", error);
    throw error;
  }
};
