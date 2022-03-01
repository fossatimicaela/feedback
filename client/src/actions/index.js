import axios from 'axios';

export default function addFeedback(feedback){
    return async function(){
        const response = await axios.post('http://localhost:3001/feedback', feedback);
        return response;
    }
}