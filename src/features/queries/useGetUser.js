import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const getUser = async ({ queryKey }) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${queryKey[1]}`
  );
  return data;
};

const useGetUser = (id) => {
  return useQuery(["users", id], getUser);
};

export default useGetUser;
