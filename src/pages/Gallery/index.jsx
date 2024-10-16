import { Typography } from "antd";
import { Card, Divider, List } from "antd";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  EditOutlined,
  DeleteOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { getData } from "../../utils/api";
import { formatDateIndonesia } from "../../utils/ui";

const { Title } = Typography;

const Gallery = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const lastSegment = pathSegments[pathSegments.length - 1];

  const [dataSource, setDataSource] = useState([]);
  const [loading, ] = useState(true);

  useEffect(() => {
    getDataGallery();
  }, []);

  const getDataGallery = () => {
    getData("/nature")
      .then((resp) => {
        if (resp) {
          setDataSource(resp);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {/* <Row gutter={[24, 0]}>
        <Col xs={22} className="mb-24">
          <Card bordered={false} className="criclebox h-full w-full">
            <Title>{lastSegment}</Title>
            <Text style={{ fontSize: "12pt" }}>Add content here</Text>
          </Card>
        </Col>
      </Row> */}
      <Title>Nature {lastSegment}</Title>

      <Divider />
      
      {dataSource?.length > 0 ? <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 3,
        }}
        dataSource={dataSource}
        renderItem={(item) => (
          <List.Item>
            <Card 
              cover={<img src={`${item?.photo}`} alt="categories-image" />}
              actions={[
                <EditOutlined key="edit" />,
                <DeleteOutlined key="delete" type="danger" />,
              ]}
            >
              <Card.Meta
                avatar={<CheckCircleOutlined />}
                title={item.name}
                description={`Posted: ${formatDateIndonesia(
                  item?.description
                )}`}
              />
            </Card>
          </List.Item>
        )}/> : <Card
          loading={loading}>
        </Card> }
    </>
  );
};

export default Gallery;
