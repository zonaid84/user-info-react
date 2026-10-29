import { useEffect, useState } from "react";


function userInfo(user){
    const [data, setData] = useState({});
    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((res) => setData(res[user]))
    }, [user])

    console.log(data);
    return data
    
}


export default userInfo;