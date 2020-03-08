import React from 'react';
import { Layout } from 'antd';
import { withRouter } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

class DashboardSider extends React.Component {
    render(){
        return(
            <div>
            <h1>sider here</h1>
            <Content>
                {this.props.children}
            </Content>
            </div>
        )
    }
}

export default withRouter(DashboardSider);