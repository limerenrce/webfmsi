import { Drawer, Typography } from "antd";
import { Card, Divider, List, Form, Button, Input, notification } from "antd";
import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
import {
  EditOutlined,
  DeleteOutlined,
  CheckCircleOutlined,
  SearchOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { getData, sendData } from "../../utils/api";
import { Skeleton, FloatButton } from "antd";
import { ellipsisGenerator } from "../../utils/ui";
const { Text, } = Typography;

// import { formatDateIndonesia } from "../../utils/ui";

const { Title } = Typography;
const { TextArea } = Input;

const Natures = () => {
  // const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const lastSegment = pathSegments[pathSegments.length - 1];

  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isDrawer, setIsDrawer] = useState(false);
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    getDataNatures();
  }, []);

  const getDataNatures = () => {
    setLoading(true);
    getData("/api/natures")
      .then((resp) => {
        if (resp) {
          setDataSource(resp);
          setLoading(false);
        }
      })
      .catch((err) => console.log(err));
  };
  const onSearch = (value) => {
    setSearchText(value.toLowerCase());
  };

  const showAlert = (status, title, description) => {
    api[status]({
      message: title,
      description: description,
    });
  };

  const handleDrawer = () => {
    setIsDrawer(true);
  };
  const onCloseDrawer = () => {
    setIsDrawer(false);
  };

  const handleFormSubmit = () => {
    let nameOfNatures = form.getFieldValue("name_natures");
    let descriptionOfNatures = form.getFieldValue("description");

    let formData = new FormData()
    formData.append("name_natures", nameOfNatures)
    formData.append("description", descriptionOfNatures)

    sendData("/api/natures", formData).then(resp => {
      if(resp?.message === "OK"){
        showAlert("success", "Success", "Datasent");
        form.resetFields()
        setIsDrawer(false)
        getDataNatures()
      }else{
        showAlert("error", "Failed to send data", "Cant send data");
        
      }
    }).catch(err => {
      showAlert("error", "Failed to send data", err.toSting());

    })

    
    console.log(nameOfNatures, descriptionOfNatures);
  };

  const drawerSection = () => {
    return (
      <Drawer
        title="Add Gallery"
        onClose={onCloseDrawer}
        open={isDrawer}
        extra={
          <Button type="primary" onClick={() => handleFormSubmit()}>
            Submit
          </Button>
        }
      >
        <Form layout="vertical" name="natures_form" form={form}>
          <Form.Item label="Nature Name" name="name_natures" required>
            <Input placeholder="eg. River" />
          </Form.Item>
          <Form.Item label="Description" name="description" required>
           
            <TextArea rows={4} placeholder="eg. Near west coast" />
          </Form.Item>
        </Form>
      </Drawer>
    );
  };

  let dataSourceFiltered = dataSource.filter((item) => {
    return (
      item?.name_natures.toLowerCase().includes(searchText) ||
      item?.description.toLowerCase().includes(searchText)
    );
  });
  return (
    <>
      <Title>Nature {lastSegment}</Title>
      {contextHolder}
      <FloatButton
        type="primary"
        tooltip={<div>Add gallery</div>}
        icon={<PlusCircleOutlined />}
        onClick={() => {
          handleDrawer();
        }}
      />
      {drawerSection()}

      <Divider />
      <Input
        prefix={<SearchOutlined />}
        placeholder="input search text"
        className="header-search"
        allowClear
        size="large"
        onChange={(e) => onSearch(e.target.value)}
      />
      <Divider />
      {dataSource?.length > 0 && !loading ? (
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 3,
          }}
          dataSource={dataSourceFiltered ? dataSourceFiltered : []}
          renderItem={(item) => (
            <List.Item>
              <Card
                cover={<img src={`${item.url_photo}`} alt="categories-image" />}
                actions={[
                  <EditOutlined key="edit" />,
                  <DeleteOutlined key="delete" type="danger" />,
                ]}
              >
                <Card.Meta
                  avatar={<CheckCircleOutlined />}
                  title={item.name_natures}
                  description={
                    <Text
                      ellipsis={ellipsisGenerator(item?.description)}
                       >
                        {item?.description}
                    </Text>
                    }
                />
              </Card>
            </List.Item>
          )}
        />
      ) : loading ? (
        <Skeleton active />
      ) : (
        []
      )}
    </>
  );
};

export default Natures;
