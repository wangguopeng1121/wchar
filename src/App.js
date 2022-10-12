import './asste/css/App.css';
import routes from './model/router.js';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import logo1 from './asste/images/picture.jpg'
import Home from './componente/Home';
// 引入antd
import { Layout, Menu } from 'antd';
const { Header} = Layout;
function App() {
  return (
    <div>
    <Router>
           <Layout  >
           <Header className="header"  style={{  background: 'white' }}  > 
                  <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}  style={{fontSize:20}}  > 
                    <Menu.Item key="1" ><Link to="/"> </Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/airz"></Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/airy"></Link></Menu.Item>
                    <Menu.Item key="4"><Link to="/waterz"></Link></Menu.Item>
                    <Menu.Item key="5"><Link to="/watery"></Link></Menu.Item>
                    <Menu.Item key="6"><Link to="/software"></Link></Menu.Item>
                    <Menu.Item key="7"><Link to="/safetyz"></Link></Menu.Item>
                    <Menu.Item key="8"><Link to="/recruit"></Link></Menu.Item>
                  </Menu>
                  </Header>
             </Layout>
          {
              routes.map((value,key)=>{
                  if(value.exact){
                    return <Route key={key} exact path={value.path}                     
                    // route.component     value.component   <User  {...props}  routes={route.routes} />
                    render={props => (
                      // pass the sub-routes down to keep nesting
                      <value.component {...props} routes={value.routes} />
                    )}
                    />
                  }else{
                    return <Route  key={key}  path={value.path} 
                    render={props => (
                      // pass the sub-routes down to keep nesting
                      <value.component {...props} routes={value.routes} />
                    )}
                    />
                  }
              })
            }            
           </Router>
  </div>
  );
}
export default App;
