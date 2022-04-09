import ServiceClient from "../services/serviceClient";

export const getCategories = async () => {
  const response = await ServiceClient.get("/categories");
  return response.data;
};
