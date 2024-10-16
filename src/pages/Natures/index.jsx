import { Typography } from "antd";
import { Card, Divider, List } from "antd";
import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
import {
  EditOutlined,
  DeleteOutlined,
  CheckCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { getData } from "../../utils/api";
import { Skeleton } from "antd";
import Input from "antd/es/transfer/search";
// import { formatDateIndonesia } from "../../utils/ui";

const { Title } = Typography;

const Natures = () => {
  // const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const lastSegment = pathSegments[pathSegments.length - 1];

  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

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

  let dataSourceFiltered = dataSource.filter((item) => {
    return (
      item?.name_natures.toLowerCase().includes(searchText) ||
      item?.description.toLowerCase().includes(searchText)
    );
  });
  return (
    <>
      <Title>Nature {lastSegment}</Title>

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
                  description={`${item?.description}`}
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
