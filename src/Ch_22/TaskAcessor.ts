class TaskAccessor {
    //存储容器，相当于数据库功能
    tasks: Task[] = [{
        id: 1,
        name: "完成报告",
        description: "完成上个月的工作报告",
        isDone: false
    }];
    taskIdIndex = 1;

    //添加任务，在容器添加后返回
    addTask(task: Task): Task {
        let newTask = {
            id: ++this.taskIdIndex,
            name: task.name,
            description: task.description,
            isDone: false
        };
        this.tasks.push(newTask);
        return newTask;
    }

    //删除任务 如果不存在对应的任务id，就返回false
    deleteTask(taskId: number): boolean {
        let index = this.tasks.findIndex(p => p.id == taskId);
        if (index < 0) {
            return false;
        } 
        this.tasks.splice(index, 1);
        return true;
    }

    //完成任务 将对应id的任务完成状态设为true
    setTaskDone(taskId: number): boolean {
        let index = this.tasks.findIndex(p => p.id == taskId);
        if (index < 0) {
            return false;
        }
        this.tasks[index].isDone = true;
        return true;
    }
}

//对外抛出
export const taskAccessor = new TaskAccessor();