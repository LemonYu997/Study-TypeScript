import axios, { AxiosResponse } from "axios";

const baseUrl: string = "http://localhost:8000"

export const getTaskList = async (): Promise<AxiosResponse<Task[]>> => {
    const tasks: AxiosResponse<Task[]> = await axios.get (
        baseUrl + "/tasks"
    )
    return tasks;
}

export const addTask = async (task: Task): Promise<AxiosResponse<Task>> => {
    const newTask: AxiosResponse<Task> = await axios.post(
        baseUrl + "/task", task
    );
    return newTask;
}

export const deleteTask = async (taskId: number): Promise<AxiosResponse<boolean>> => {
    const res: AxiosResponse<boolean> = await axios.delete(
        baseUrl + "/task/" + taskId
    );
    return res;
}

export const setTaskDone = async (taskId: number): Promise<AxiosResponse<boolean>> => {
    const res: AxiosResponse<boolean> = await axios.put(
        baseUrl + "/task/" + taskId
    );
    return res;
}