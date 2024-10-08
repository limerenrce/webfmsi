import { useState } from 'react';
import { Input, Space } from 'antd';
import { Table } from 'antd'; 
import { Typography } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, message } from 'antd';

const { Title } = Typography;
const { Search } = Input; 

const handleMenuClick = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};
const items = [
  {
    label: '1st menu item',
    key: '1',
    icon: <UserOutlined />,
  },
  {
    label: '2nd menu item',
    key: '2',
    icon: <UserOutlined />,
  },
  {
    label: '3rd menu item',
    key: '3',
    icon: <UserOutlined />,
    danger: true,
  },
  {
    label: '4rd menu item',
    key: '4',
    icon: <UserOutlined />,
    danger: true,
    disabled: true,
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    sorter: (a, b) => a.email.length - b.email.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Status',
    dataIndex: 'status', 
    sorter: {
      compare: (a, b) => a.status - b.status,
      multiple: 1,
    },
  }, 
  {
    title: 'Date',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: 'Checked In',
    dataIndex: 'checkedIn',
  }
];

const initialData = [
  {
    key: '1',
    name: 'Jim Green',
    email: 'ba@mail.com',
    status: 'Going',
    createdAt: '2014-12-20 23:12:00',
    checkedIn: 'Yes',
  },
  {
    key: '2',
    name: 'John Brown',
    email: 'a@mail.com', 
    status: 'Invited',
    createdAt: '2014-12-24 23:12:00',
    checkedIn: 'No',
  },
  {
    key: '3',
    name: 'Jim Red',
    email: 'da@mail.com',
    status: 'Pending',
    createdAt: '2014-12-24 23:16:00',
    checkedIn: 'No',
  },
  {
    key: '4',
    name: 'Joe Black',
    email: 'ca@mail.com',
    status: 'Not Going',
    createdAt: '2014-12-22 23:12:00',
    checkedIn: 'No',
  },
  {
    key: '5',
    name: 'Joe Black',
    email: 'ca@mail.com',
    status: 'Not Going',
    createdAt: '2014-12-22 23:12:00',
    checkedIn: 'No',
  },
  {
    key: '6',
    name: 'Joe Black',
    email: 'ca@mail.com',
    status: 'Not Going',
    createdAt: '2014-12-22 23:12:00',
    checkedIn: 'No',
  },
  {
    key: '7',
    name: 'Joe Black',
    email: 'ca@mail.com',
    status: 'Not Going',
    createdAt: '2014-12-22 23:12:00',
    checkedIn: 'No',
  },
  {
    key: '8',
    name: 'Joe Black',
    email: 'ca@mail.com',
    status: 'Not Going',
    createdAt: '2014-12-22 23:12:00',
    checkedIn: 'No',
  },
  {
    key: '9',
    name: 'Joe Black',
    email: 'ca@mail.com',
    status: 'Not Going',
    createdAt: '2014-12-22 23:12:00',
    checkedIn: 'No',
  },
  {
    key: '10',
    name: 'Joe Black',
    email: 'ca@mail.com',
    status: 'Not Going',
    createdAt: '2014-12-22 23:12:00',
    checkedIn: 'No',
  },
  {
    key: '11',
    name: 'Joe Black',
    email: 'ca@mail.com',
    status: 'Not Going',
    createdAt: '2014-12-22 23:12:00',
    checkedIn: 'No',
  },
];

const Orders = () => {
  const [dataSource, setDataSource] = useState(initialData);  // State for table data

  const onSearch = (value) => {
    const filteredData = initialData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setDataSource(filteredData);  // Update the table data with the filtered result
  };

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <>
    <Title level={3}>Guest List</Title>
    
    <Space direction="vertical">  
      <Search 
        placeholder="Search by Name" 
        allowClear
        onSearch={onSearch}  // Connect search to the filtering logic
        size='large'
        enterButton
        style={{ width: 1200}}
      /> 

      {/* Flexbox container to align dropdowns */}
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Dropdown menu={menuProps}>
            <Button>
              <Space>
                Start Dropdown
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>

          <Dropdown menu={menuProps}>
            <Button>
              <Space>
                End Dropdown
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </div>

      <Table 
        columns={columns} 
        dataSource={dataSource}  // Use the filtered data as the data source
        onChange={onChange} 
        size='middle'
        pagination={{ pageSize: 5 }}  // Pagination with 5 rows per page
      />
    </Space>
    </>
    )
}

export default Orders;
