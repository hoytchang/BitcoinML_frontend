import React from 'react';
import { Layout } from 'antd';
import { withRouter } from 'react-router-dom';
import 'antd/dist/antd.css';

const { Header, Content, Footer, Sider } = Layout;

class MainLayout extends React.Component {
    render(){
        return(
            <div>
                <Layout>
                    <Header style={{background: 'orange', textAlign: "left"}}>
                        <div>
                            <span style={{fontSize: 35, padding:0, color:'white', fontWeight:'bold'}}>
                                Bitcoin ML
                            </span>
                            <span style={{fontSize: 20, padding:30, color:'white'}}>
                                Build your own machine learning model to predict bitcoin prices
                            </span>
                        </div>
                    </Header>
                    <Content>
                        {this.props.children}
                    </Content>
                    <Footer style={{background: 'orange'}}>
                        <div style={{height:"20px"}}></div>
                    </Footer>

                </Layout>
                
            </div>
        )
    }
}

export default withRouter(MainLayout);