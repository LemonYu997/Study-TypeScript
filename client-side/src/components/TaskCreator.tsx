import React, {useState} from "react";

type Props = {
    addTask: (e: React.FormEvent, formData: Task | any) => void;
}

const TaskCreator: React.FC<Props> = ({addTask}) => {
    const [formData, setFormData] = useState<Task | {}> ();

    const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.currentTarget.id]: e.currentTarget.value,
        })
    }

    return (
        <form className="Form" onSubmit={(e) => addTask(e, formData)}>
            <div>
                <div>
                    <label htmlFor="name">任务名称</label>
                    <input onChange={handleForm} type="text" id="name" />
                </div>
                <div>
                    <label htmlFor="descriptiopn">任务描述</label>
                    <input onChange={handleForm} type="text" id="description" />
                </div>
            </div>
            <button disabled={formData === undefined ? true : false}>添加任务</button>
        </form>
    )
}

export default TaskCreator;