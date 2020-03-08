import React from 'react';
import { Layout } from 'antd';
import { withRouter } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

class MainLayout extends React.Component {
    render(){
        return(
            <div>
                <Layout>
                    <Header style={{background: 'orange'}}>
                        <div style={{fontSize: 35, padding:3, color:'white', fontWeight:'bold'}}>
                            Bitcoin ML
                        </div>
                        <div style={{fontSize: 20, padding:3, color:'white'}}>
                            Build your own machine learning model to predict bitcoin prices
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