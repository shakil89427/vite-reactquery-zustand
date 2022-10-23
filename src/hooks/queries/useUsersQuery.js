import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getUsers = async (options) => {
  const queryKey = options.queryKey[1];
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${queryKey}`
  );
  return data;
};

const useUsersQuery = (id) => {
  return useQuery(["users", id], getUsers);
};

export default useUsersQuery;
