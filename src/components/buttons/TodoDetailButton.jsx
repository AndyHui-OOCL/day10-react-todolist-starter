import {Button} from "antd";
import {InfoCircleOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

function TodoDetailButton(props) {
    const navigate = useNavigate();

    const goToDetail = () => {
        navigate(`/todos/${props.id}`);
    };

    return (
        <Button
            icon={<InfoCircleOutlined/>}
            onClick={goToDetail}
        />
    );
}

export default TodoDetailButton;