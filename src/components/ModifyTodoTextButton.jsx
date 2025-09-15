import {Button} from "antd";
import {EditOutlined} from "@ant-design/icons";

function ModifyTodoTextButton() {
    return (<>
        <Button icon={<EditOutlined />}></Button>
    </>)
}

export default ModifyTodoTextButton;