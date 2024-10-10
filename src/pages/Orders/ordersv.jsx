// import React from 'react'
import { Col, Row, Card, Typography, Table } from "antd";
// import { useLocation } from "react-router-dom";
const { Title } = Typography;

const columns = [
  {
    title: 'Product',
    dataIndex: 'product',
    width: 250
  },
  {
    title: 'Qty',
    dataIndex: 'qty',
    width: 100
  },
  {
    title: 'Total',
    dataIndex: 'total',
  },
];
const annualData = [
  {
    key: '1',
    product: 'Bag',
    qty: 1200,
    total: 1200000,
  },
  {
    key: '2',
    product: 'Shoes',
    qty: 2400,
    total: 2400000,
  }, 
];
const monthlyData = [
  {
    key: '1',
    product: 'Bag',
    qty: 100,
    total: 100000,
  },
  {
    key: '2',
    product: 'Shoes',
    qty: 200,
    total: 200000,
  }, 
];

const ordersv = () => {
  return (
    <>
    <div className="layout-content">
      <Row gutter={[24, 0]}>
        <Col xs={24} md={12} sm={24} lg={12} xl={12} className="mb-24">
          <Card bordered={false} className="criclebox h-full">
          <Title level={3}>Annual Orders</Title>
          <p>Data Orders in annual..</p>
          {/* <Divider>Small size table</Divider> */}
          <Table columns={columns} dataSource={annualData} size="small" />
          </Card>
        </Col>
        <Col xs={24} md={12} sm={24} lg={12} xl={12} className="mb-24">
          <Card bordered={false} className="criclebox h-full">
          <Title level={3}>Monthly Orders</Title>
          <p>Data Orders in monthly..</p>
          {/* <Divider>Small size table</Divider> */}
          <Table columns={columns} dataSource={monthlyData} size="small" />
          </Card>
        </Col>



      </Row>
    </div>
    </>
    
  )
}

export default ordersv