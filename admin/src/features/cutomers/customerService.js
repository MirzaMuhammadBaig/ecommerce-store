import axios from "axios";
import { base_url } from "../../utils/baseUrl";

const getUsers = async () => {
  // try {
  const response = await axios.get(`${base_url}user/all-users`
    // {
    //   headers:{
    // Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTc3YTczZGYxZWM1MzZhZDU1OWJmYiIsImlhdCI6MTY3NjEyMTMzOSwiZXhwIjoxNjc2NjM5NzM5fQ" 
    // }
// withCredentials:true,
    // }
    );
    console.log(response, "respose");

    return response.data;
  // } catch (error) {
  //   console.log(error);
  // }
};

const customerService = {
  getUsers,
};

export default customerService;
