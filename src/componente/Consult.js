import React ,{Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu} from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import { Divider ,Table, Tag, Space} from 'antd';
import "../asste/css/Consult.css"
import {FormOutlined} from '@ant-design/icons';
import routes from '../model/router.js';
class Consult extends Component {
    constructor(props) {
        super(props);
        this.state = { 

      
         };
         
      
         
    }
    onChange = page => {
        console.log(page);
        this.setState({
          current: page,
        });
      };
    render() {
               


        return (
            <div>
                <div className="Consult-div">
                            <div className="home-left-account"  ><FormOutlined /><div className="span"><h2>环境影响评价 Company profile</h2></div>
                                  <Divider orientation="right">天津盛博瑞环保科技有限公司</Divider>
                            </div> 
                    <div className="Consult-div-left">
                    <Menu>
                        <MenuItem><Link to="/consult/">环境影响评价 </Link></MenuItem>
                        <MenuItem><Link to="/consult/yanshou">环保竣工验收 </Link></MenuItem>
                        <MenuItem><Link to="/consult/yingji">突发环境风险应急预案 </Link></MenuItem>
                        <MenuItem><Link to="/consult/paiwu">排污许可证 </Link></MenuItem>
                        <MenuItem><Link to="/consult/changdiao">场地调查 </Link></MenuItem>
                    </Menu> 
                    </div> 
                   
                    <div className="Consult-div-right">
                         {
                            this.props.routes.map((route,key)=>{
                                return <Route key={key}  exact path={route.path} component={route.component} />
                            })
                         }
                    </div>
                    
                </div>
                
            </div>
        );
    }
}

export default Consult;