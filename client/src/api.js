import axios from "axios";

export const getData = async () => {
    return await axios.get('http://localhost:4000/')
}