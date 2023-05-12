import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import FormInput from '../../components/FormInput';
import Spinner from '../../components/Spinner';
import { AppDomainList } from '../../helpers';

const MyMuiAlert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AppAccess = (props): React$Element<React$FragmentType> => {
    const navigate = useNavigate(); //用于页面跳转
    const [domains, setDomains] = useState([]); // 定义域名数组
    const [refreshDisable, setRefreshDisable] = useState(false);//用于刷新按钮禁用

    const [showAlert, setShowAlert] = useState(false); //用于是否显示错误提示
    const [alertMessage, setAlertMessage] = useState("");  //用于显示错误提示消息
    const [alertType, setAlertType] = useState("");  //用于确定弹窗的类型：error\success

    const getDomains = async () => {
        try {
            const response = await AppDomainList({ app_id: props.data.app_id });
            if (response.data.Error) {
                setShowAlert(true);
                setAlertType("error")
                setAlertMessage(response.data.Error.Message);
            }
            else {
                let responseData = response.data.ResponseData;
                let resturnDomains = responseData.map(domain => {
                    return {
                        domainValue: domain,
                        isEditable: false
                    };
                });
                setDomains(resturnDomains);
            }
        }
        catch (error) {
            navigate("/error-500");
        }
    }

    useEffect(() => {
        getDomains();
    }, []);

    function addRow() {
        if (domains.length < 10) {
            // 限制最多只能有10个domain
            setDomains([
                ...domains,
                {
                    domainValue: "", // 搜索框的值，默认为空
                    isEditable: true, // 搜索框是否可编辑，默认为否
                },
            ]);
        }
    }

    function deleteRow(index) {
        const newRows = [...domains]; // 复制状态数组
        newRows.splice(index, 1); // 删除指定索引的对象
        setDomains(newRows); // 更新状态数组
    }

    function editRow(index) {
        const newRows = [...domains]; // 复制状态数组
        newRows[index].isEditable = !newRows[index].isEditable; // 切换isEditable属性
        setDomains(newRows); // 更新状态数组
    }

    function saveRow(index) {
        const input = document.getElementsByName(`domain-${index}`)[0]; // 获取搜索框元素
        const value = input.value; // 获取搜索框的值
        const regex = /^(?!https?:\/\/)([\da-z\.-]+\.)*([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/; // 定义一个正则表达式，用来验证域名的格式
        if (value) {
            // 如果搜索框的值不为空
            if (regex.test(value)) {
                // 如果搜索框的值符合域名的格式
                const newRows = [...domains]; // 复制状态数组
                newRows[index].domainValue = value; // 修改inputValue属性
                newRows[index].isEditable = !newRows[index].isEditable;
                setDomains(newRows); // 更新状态数组
            } else {
                setShowAlert(true);
                setAlertType("error")
                setAlertMessage("请输入正确的域名,并且不能以http或者https开始！");
            }
        }
        else {
            // 如果搜索框的值为空
            setShowAlert(true);
            setAlertType("error")
            setAlertMessage("域名不能为空");
        }
    }

    function handleChange(index, e) {
        const newRows = [...domains]; // 复制状态数组
        newRows[index].domainValue = e.target.value; // 修改inputValue属性
        setDomains(newRows); // 更新状态数组
    }

    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setShowAlert(false);
        setAlertMessage("");
    };

    return (
        <>
            <Card>
                <Card.Header>
                    <Row className="mb-2 align-items-center">
                        <Col xs={12} md={9}>
                            <label className="me-2 fs-5">域名绑定</label>
                        </Col>
                        <Col xs={12} md={3}>
                            <Button variant="primary" size="sm" className="me-2" onClick={() => addRow()}>添加</Button>
                            {/* <Button variant="primary" size="sm" className="me-2" onClick={() => getDomains()}>刷新</Button> */}
                            <Button disabled={refreshDisable} size="sm" className="me-2" variant="primary"
                                onClick={async () => { setRefreshDisable(true); await getDomains(); setRefreshDisable(false) }} >
                                {refreshDisable && <Spinner className="spinner-border-sm me-1" tag="span" color="white" />} 刷新
                            </Button>
                            <a href="/nginx" target="_parent">
                                <Button variant="primary" size="sm">更多</Button>
                            </a>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    {domains.map((row, index) => (
                        <Row className="mb-2" key={index}>
                            <Col xs={12} md={9}>
                                <Col xs="auto">
                                    <FormInput className="mb-2 mb-md-0" type="text"
                                        name={`domain-${index}`}
                                        value={row.domainValue}
                                        disabled={!row.isEditable}
                                        onChange={(e) => handleChange(index, e)} />
                                </Col>
                            </Col>
                            <Col xs={12} md={3}>
                                <Button variant="link text-danger" onClick={() => deleteRow(index)}>删除</Button>
                                {row.isEditable ? (
                                    // 如果isEditable为true，就渲染保存按钮
                                    <Button variant="link text-success" onClick={() => saveRow(index)}>
                                        保存
                                    </Button>
                                ) : (
                                    // 否则就渲染编辑按钮
                                    <>
                                        <Button variant="link text-primary" onClick={() => editRow(index)}>
                                            编辑
                                        </Button>
                                        <a href={'http://' + row.domainValue} target="_blank">
                                            <Button variant="link text-info">访问</Button>
                                        </a>
                                    </>
                                )}
                            </Col>
                        </Row>
                    ))}
                </Card.Body>
            </Card >
            {
                showAlert &&
                <Snackbar open={showAlert} autoHideDuration={5000} onClose={handleAlertClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                    <MyMuiAlert onClose={handleAlertClose} severity={alertType} sx={{ width: '100%' }}>
                        {alertMessage}
                    </MyMuiAlert>
                </Snackbar>
            }
        </>
    );
}

export default AppAccess;