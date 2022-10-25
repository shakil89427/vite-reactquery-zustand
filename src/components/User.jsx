import useGetUser from "../features/queries/useGetUser";
import useCounter from "../features/stores/useCounter";

const User = () => {
  const { value } = useCounter();
  const { data, isLoading, isError } = useGetUser(value);

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Something went wrong</p>;

  return (
    <div>
      <p>Id: {data?.id}</p>
      <p>Name: {data.name}</p>
      <p>Username: {data?.username}</p>
      <p>email: {data?.email}</p>
      <p>Phone: {data?.phone}</p>
      <p>Website: {data?.website}</p>
    </div>
  );
};

export default User;
