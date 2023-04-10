import { useEffect, useState } from "react";
import api from "../../api";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    async function getData(){
      const data = await api.get('/ave');
      console.log(data);
      setData(data);
    }
    getData();
  },[]);
  
  return (
  <>
    {data.map((ave) => <a>`Ave: ${ave.id}`</a>)}
  </>
  );
}