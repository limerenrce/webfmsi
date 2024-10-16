import { useState } from "react";
import {
  Input,
  Space,
  Table,
  Typography,
  Button,
  Dropdown,
  message,
} from "antd";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";

const { Title } = Typography;

const items = [
  { label: "All Guests", key: "all" },
  { label: "Going", key: "going" },
  { label: "Invited", key: "invited" },
  { label: "Pending", key: "pending" },
  { label: "Not Going", key: "not-going" },
  { label: "Checked In", key: "checked-in" },
];

const sortOptions = [
  { label: "Name", key: "name" },
  { label: "Email", key: "email" },
  { label: "Approval Status", key: "status" },
  { label: "Register Time", key: "createdAt" },
];

const columns = [
  { title: "Name", dataIndex: "name", width: 250 },
  { title: "Email", dataIndex: "email", width: 200 },
  { title: "Status", dataIndex: "status", width: 100 },
  { title: "Date", dataIndex: "createdAt", width: 150 },
  { title: "Checked In", dataIndex: "checkedIn", width: 100 },
];

const initialData = [
  {
    key: "1",
    name: "Jim Green",
    email: "jim.green@mail.com",
    status: "Going",
    createdAt: "2014-12-20 23:12:00",
    checkedIn: "Yes",
  },
  {
    key: "2",
    name: "Alice Brown",
    email: "alice.brown@mail.com",
    status: "Not Going",
    createdAt: "2015-01-15 10:30:00",
    checkedIn: "No",
  },
  {
    key: "3",
    name: "Bob Smith",
    email: "bob.smith@mail.com",
    status: "Going",
    createdAt: "2016-02-12 14:45:00",
    checkedIn: "Yes",
  },
  {
    key: "4",
    name: "Eve White",
    email: "eve.white@mail.com",
    status: "Pending",
    createdAt: "2017-03-18 08:20:00",
    checkedIn: "No",
  },
  {
    key: "5",
    name: "Charlie Johnson",
    email: "charlie.j@mail.com",
    status: "Invited",
    createdAt: "2018-04-25 16:10:00",
    checkedIn: "No",
  },
  {
    key: "6",
    name: "David Lee",
    email: "david.lee@mail.com",
    status: "Invited",
    createdAt: "2019-05-30 12:15:00",
    checkedIn: "No",
  },
  {
    key: "7",
    name: "Grace Wilson",
    email: "grace.w@mail.com",
    status: "Going",
    createdAt: "2020-06-14 09:00:00",
    checkedIn: "Yes",
  },
  {
    key: "8",
    name: "Henry Adams",
    email: "henry.adams@mail.com",
    status: "Pending",
    createdAt: "2021-07-22 11:50:00",
    checkedIn: "No",
  },
  {
    key: "9",
    name: "Isabella Thomas",
    email: "isabella.t@mail.com",
    status: "Going",
    createdAt: "2022-08-29 18:30:00",
    checkedIn: "Yes",
  },
  {
    key: "10",
    name: "James Brown",
    email: "james.brown@mail.com",
    status: "Not Going",
    createdAt: "2023-09-30 13:40:00",
    checkedIn: "No",
  },
  {
    key: "11",
    name: "Liam Davis",
    email: "liam.davis@mail.com",
    status: "Going",
    createdAt: "2014-12-21 15:12:00",
    checkedIn: "Yes",
  },
  {
    key: "12",
    name: "Mia Martin",
    email: "mia.martin@mail.com",
    status: "Pending",
    createdAt: "2015-01-16 10:30:00",
    checkedIn: "No",
  },
  {
    key: "13",
    name: "Noah Hernandez",
    email: "noah.hernandez@mail.com",
    status: "Going",
    createdAt: "2016-02-13 14:45:00",
    checkedIn: "Yes",
  },
  {
    key: "14",
    name: "Olivia Garcia",
    email: "olivia.garcia@mail.com",
    status: "Not Going",
    createdAt: "2017-03-19 08:20:00",
    checkedIn: "No",
  },
  {
    key: "15",
    name: "Sophia Lopez",
    email: "sophia.lopez@mail.com",
    status: "Pending",
    createdAt: "2018-04-26 16:10:00",
    checkedIn: "No",
  },
  {
    key: "16",
    name: "Ethan Martinez",
    email: "ethan.martinez@mail.com",
    status: "Pending",
    createdAt: "2019-05-31 12:15:00",
    checkedIn: "No",
  },
  {
    key: "17",
    name: "Ava Clark",
    email: "ava.clark@mail.com",
    status: "Pending",
    createdAt: "2020-06-15 09:00:00",
    checkedIn: "No",
  },
  {
    key: "18",
    name: "Lucas Rodriguez",
    email: "lucas.rodriguez@mail.com",
    status: "Pending",
    createdAt: "2021-07-23 11:50:00",
    checkedIn: "No",
  },
  {
    key: "19",
    name: "Mason Lewis",
    email: "mason.lewis@mail.com",
    status: "Pending",
    createdAt: "2022-08-30 18:30:00",
    checkedIn: "No",
  },
  {
    key: "20",
    name: "Emily Walker",
    email: "emily.walker@mail.com",
    status: "Not Pending",
    createdAt: "2023-09-01 13:40:00",
    checkedIn: "No",
  },
  {
    key: "21",
    name: "Aiden Hall",
    email: "aiden.hall@mail.com",
    status: "Going",
    createdAt: "2014-12-22 15:12:00",
    checkedIn: "Yes",
  },
  {
    key: "22",
    name: "Chloe Allen",
    email: "chloe.allen@mail.com",
    status: "Pending",
    createdAt: "2015-01-17 10:30:00",
    checkedIn: "No",
  },
  {
    key: "23",
    name: "Jackson Young",
    email: "jackson.young@mail.com",
    status: "Going",
    createdAt: "2016-02-14 14:45:00",
    checkedIn: "Yes",
  },
  {
    key: "24",
    name: "Scarlett King",
    email: "scarlett.king@mail.com",
    status: "Not Going",
    createdAt: "2017-03-20 08:20:00",
    checkedIn: "No",
  },
  {
    key: "25",
    name: "Logan Wright",
    email: "logan.wright@mail.com",
    status: "Going",
    createdAt: "2018-04-27 16:10:00",
    checkedIn: "Yes",
  },
  {
    key: "26",
    name: "Mila Scott",
    email: "mila.scott@mail.com",
    status: "Pending",
    createdAt: "2019-06-01 12:15:00",
    checkedIn: "No",
  },
  {
    key: "27",
    name: "Oliver Green",
    email: "oliver.green@mail.com",
    status: "Going",
    createdAt: "2020-06-16 09:00:00",
    checkedIn: "Yes",
  },
  {
    key: "28",
    name: "Aria Adams",
    email: "aria.adams@mail.com",
    status: "Pending",
    createdAt: "2021-07-24 11:50:00",
    checkedIn: "No",
  },
  {
    key: "29",
    name: "Elijah Nelson",
    email: "elijah.nelson@mail.com",
    status: "Going",
    createdAt: "2022-08-31 18:30:00",
    checkedIn: "Yes",
  },
  {
    key: "30",
    name: "Hannah Carter",
    email: "hannah.carter@mail.com",
    status: "Not Going",
    createdAt: "2023-09-02 13:40:00",
    checkedIn: "No",
  },
  {
    key: "31",
    name: "Sebastian Perez",
    email: "sebastian.perez@mail.com",
    status: "Going",
    createdAt: "2014-12-23 15:12:00",
    checkedIn: "Yes",
  },
  {
    key: "32",
    name: "Zoe Ramirez",
    email: "zoe.ramirez@mail.com",
    status: "Pending",
    createdAt: "2015-01-18 10:30:00",
    checkedIn: "No",
  },
  {
    key: "33",
    name: "Jacob Torres",
    email: "jacob.torres@mail.com",
    status: "Going",
    createdAt: "2016-02-15 14:45:00",
    checkedIn: "Yes",
  },
];

const Orders = () => {
  const [dataSource, setDataSource] = useState(
    initialData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  );
  const [filterKey, setFilterKey] = useState("all");
  const [sortKey, setSortKey] = useState("createdAt"); // Track the current sort key
  const [searchText, setSearchText] = useState("");

  const onSearch = (value) => {
    setSearchText(value.toLowerCase());
    const filteredData = initialData.filter(
      (item) =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.email.toLowerCase().includes(value.toLowerCase())
    );
    const finalData = filterData(filteredData);
    setDataSource(finalData);
  };

  const handleFilterClick = (e) => {
    const key = e.key;
    setFilterKey(key);

    const selectedItem = items.find((item) => item.key === key);
    if (selectedItem) {
      const filteredData = filterData(initialData, key);
      setDataSource(filteredData);
      message.info(`Filtered by ${selectedItem.label}.`);
    }
  };

  const handleSortClick = (e) => {
    const key = e.key;
    setSortKey(key); // Update current sort key

    const sortedData = [...dataSource].sort((a, b) => {
      if (key === "createdAt") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });
    setDataSource(sortedData);
    message.info(`Sorted by ${key.charAt(0).toUpperCase() + key.slice(1)}.`);
  };

  const filterData = (data, key = filterKey) => {
    if (key === "all") return data;

    if (key === "checked-in") {
      return data.filter((item) => item.checkedIn.toLowerCase() === "yes");
    }

    return data.filter(
      (item) => item.status.toLowerCase().replace(/\s+/g, "-") === key
    );
  };

  const filterMenuProps = {
    items,
    onClick: handleFilterClick,
  };

  const sortMenuProps = {
    items: sortOptions,
    onClick: handleSortClick,
  };

  const currentFilterLabel =
    items.find((item) => item.key === filterKey)?.label || "All Guests";
  const currentSortLabel =
    sortOptions.find((option) => option.key === sortKey)?.label ||
    "Sort by Registration Time";

  let dataSourceFiltered = initialData.filter((item) => {
    return (
      item?.name.toLowerCase().includes(searchText) ||
      item?.email.toLowerCase().includes(searchText)
    );
  });
  return (
    <>
      <Title level={3}>Guest List</Title>
      <Space direction="vertical">
        <Input
          prefix={<SearchOutlined />}
          placeholder="Search"
          className="header-search"
          allowClear
          size="medium"
          style={{ width: 1200}}
          onChange={(e) => onSearch(e.target.value)}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Dropdown menu={filterMenuProps}>
            <Button>
              <Space>
                {currentFilterLabel} <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
          <Dropdown menu={sortMenuProps}>
            <Button>
              <Space>
                {currentSortLabel} <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </div>
        <Table
          columns={columns}
          dataSource={dataSourceFiltered ? dataSourceFiltered : []}
          size="small"
          pagination={{ pageSize: 8 }}
        />
      </Space>
    </>
  );
};

export default Orders;
