
import swapi from './axiosInstance'

const getAllItems = async(category)  => {
    return (await swapi.get(`${category}`))
};

const addItem = async(category,data)  => {
    return (await swapi.post(`${category}/add`,data))
};

const editItem = async(category,id,data)  => {
    return (await swapi.put(`${category}/update/${id}`,data))
};

const deleteItem = async (category,id)  => {
    return (await swapi.delete(`${category}/delete/${id}`))
};


export { getAllItems, deleteItem, editItem, addItem };
