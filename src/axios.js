import axios from  "axios";

const instance = axios.create({
    baseURL:'https://us-central1-clone-f141f.cloudfunctions.net/api'
    // baseURL: 'http://localhost:5001/clone-f141f/us-central1/api'
});

export default instance;