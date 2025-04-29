import axios from 'axios';

export const predictPrice = async (formData) => {
    const response = await axios.post('http://localhost:5000/predict', formData);
    return response.data;
};
