import { useEffect, useState } from "react";
import Layout from "./Layout";
import User from "./User";
import Admin from "./Admin";
import axios from "axios";

const Home = () => {
  const [display, setDisplay] = useState();
  const [topic, setTopic] = useState("React - Assessment");
  const [reload, setReload] = useState(false);
  const [data, setData] = useState([]);
  const [id, setId] = useState(0);

  useEffect(()=>{
    const getData = async () =>{
      const response = await axios.get("https://jsd5-mock-backend.onrender.com/members")
      setData(response.data)
    }
    getData()
  },[reload])

  const updateData = async (fName,lName,position) => {
    // e.preventDefault();
    const response = await axios.put("https://jsd5-mock-backend.onrender.com/members",
      {
        id: id,
        name: fName,
        lastname: lName,
        position: position,
      }
    )
    setId(Number(id)+1)
    setReload(!reload)
  };

  const removeHandle = async (id) => {
    const response = await axios.delete(`https://jsd5-mock-backend.onrender.com/member/${id}`,{
      id:id
    })
    setReload(!reload)
};

  return (
    <Layout>
      <h1>
        Generation Thailand
        <br />
        {topic}
      </h1>
      <button className="btnDisplay" onClick={() => {setDisplay("user");setTopic("Home - User Sector");}}>
        User Home Sector
      </button>
      <button className="btnDisplay" onClick={() => {setDisplay("admin");setTopic("Home - Admin Sector");}}>
        Admin Home Sector
      </button>
      {display == "user" && (
        <User isAdmin={false} data={data} removeHandle={removeHandle} />
      )}
      {display == "admin" && (
        <Admin isAdmin={true} data={data} updateData={updateData} removeHandle={removeHandle}/>
      )}
    </Layout>
  );
};

export default Home;
