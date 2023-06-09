import { Link } from "react-router-dom";
import { useAxios } from "../../hooks/useAxios";

export default function Home() {
  const { response, error, isLoading } = useAxios({
    method: 'GET',
    url: '/aves'
  });

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <>
      {response.map((ave) =>
        <Link to={`/aves/${ave.id}`}>Ave: {ave.id}</Link>)
      }
    </>
  );
} 

