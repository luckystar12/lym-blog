import { Row, Col } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom'

export default class HomeHeader extends React.Component {
  render() {
    return (
      <div className="home-content">
        <Row>
          <Col span={9} offset={1} className="home-content-item home-content-item-1"><Link to="/blog">blog</Link></Col>
          <Col span={9} offset={4} className="home-content-item">col-10</Col>
        </Row>
        <br/><br/>
        <Row>
          <Col span={9} offset={1} className="home-content-item">col-10</Col>
          <Col span={9} offset={4} className="home-content-item">col-10</Col>
        </Row>
      </div>
    )
  }
}