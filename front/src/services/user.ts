import axios from "axios";

const defaultUrl = "/user";
export const userService = {
  getUser: async () => {
    try {
      const { data } = await axios.get(defaultUrl);

      return data;
    } catch (e: any) {
      throw new Error(e.message || "Произошла ошибка");
    }
  },
};
