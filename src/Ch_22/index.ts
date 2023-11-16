import express from 'express';
import cors from 'cors';
import { taskAccessor } from './TaskAcessor';

const app = express();
const port = 8000;

//各个路由的请求中涉及Json对象转换，引入json中间件
app.use(express.json);
//涉及跨域，引入cors
app.use(cors);

//基础接口案例
app.get("/hello", (req, res) => {
    res.send("hello world!");
    //访问 http://localhost:8000/hello
    //显示 hello world!
});

//获取任务列表接口
app.get("/tasks", (req, res) => {
    res.send(taskAccessor.tasks);
})

//添加任务接口
app.post("/task", (req, res) => {
    const {name, description} = req.body;
    if (!name?.trim() || !description?.trim()) {
        return res.status(400).send("Name or description is null.");
    }
    let newTask = taskAccessor.addTask(req.body);
    res.status(200).send(newTask);
})

//删除任务接口
app.delete("/task/:id", (req, res) => {
    let deleteSuccess = taskAccessor.deleteTask(Number(req.params.id));
    if (!deleteSuccess) {
        return res.status(400).send("Task does not exist.");
    }
    res.status(200).send(deleteSuccess);
})

//完成任务接口
app.put("/task/:id", (req, res) => {
    let setSucess = taskAccessor.setTaskDone(Number(req.params.id));
    if (!setSucess) {
        return res.status(400).send("Task does not exist.");
    }
    res.status(200).send(setSucess);
});


//启动服务监听
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
    //Express is listening at http://localhost:8000
})

