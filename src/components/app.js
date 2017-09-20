import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Menu, Layout, Icon } from 'antd'
const { Header, Content, Footer, Sider } = Layout;
let json = [
  { name: '测试1', id: 'aaaa' },
  { name: '测试2', id: 'bbbb'}
]
export default class APP extends Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <BrowserRouter basename="">
        <Layout>
          <Sider breakpoint="lg" collapsedWidth="0" >
            <div className="logo" />
            <Menu theme="dark" mode="inline">
            {
              json.map(item => (
                <Menu.Item key={item.id}>
                  <Link className="nav-text" to={`/${item.id}`}>{item.name}</Link>
                </Menu.Item>
              ))
            }
            </Menu>
          </Sider>
          <Layout className="berton-container">
            <Content style={{ margin: '24px 16px 0', background: '#fff'}}>
              <Route exact path="/:key" render={({match}) => {
                  return (
                    <div>{match.params.key}</div>
                  )
                }}
              />
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2016 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </BrowserRouter>
    )
  }
}
