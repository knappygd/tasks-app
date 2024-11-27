import { axiosInstance } from './instance';

export const getTasks = async () => {
    try {
        const response = await axiosInstance.get("https://test.gmnlab.com/api/tasks");

        if (response.data && Array.isArray(response.data.response))
            return response.data.response;
        else
            return [];
    } catch (error) {
        if (error.response) {
            console.error(error.response.data);
            console.error(error.response.status);
        } else if (error.request)
            console.error(error.request);
        else
            console.error(error.message);
        return [];
    }
};


export const addTask = async (task) => {
    try {
        const response = await axiosInstance.post('/tasks', task);
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error(error.response.status);
            console.error(error.response.data);
        } else if (error.request)
            console.error(error.request);
        else
            console.error(error.message);
        throw error;
    }
};


export const updateTask = async (id, updatedTask) => {
    try {
        const response = await axiosInstance.put(`/tasks/${id}`, updatedTask);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};


export const deleteTask = async (id) => {
    try {
        const response = await axiosInstance.delete(`/tasks/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
