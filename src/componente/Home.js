import React, { Component } from 'react';
import "../asste/css/Home.css"
import company from '../asste/images/company.jpg'
import { Divider, Button, Pagination } from 'antd';
import { LoadingOutlined, SmallDashOutlined } from '@ant-design/icons';
const data = [
  {
    ul: require('../asste/images/home/yangchen.jpg').default,
    pust: "",
    text: "环境空气在线监测设备",
    text1: "常规环境空气质量自动监测",
    text2: "环境空气质量网格化监测",
    text3: "大气颗粒物在线/快速源解析",
    text4: "大气光化学污染监测",
    text5: "大气环境立体监测",
    text6: ""
  },
  {
    ul: require('../asste/images/home/cems.jpg').default,
    pust: "",
    text: "气污染源在线监测设备",
    text1: "常规排放监测系统",
    text2: "超低排放监测系统",
    text3: "挥发性气体监测系统",
    text4: "颗粒物排放监测系统",
    text5: "烟气重金属监测系统",
    text6: ""
  },
  {
    ul: require("../asste/images/home/waterE.png").default,
    pust: "",
    text: "水环境质量在线监测设备",
    text1: "水质在线分析仪",
    text2: "水质在线监测辅助设备",
    text3: "水质在线监测集成系统",
    text4: "",
    text5: "",
    text6: ""
  },
  {
    ul: require("../asste/images/home/ruanjian.png").default,
    pust: "",
    text: "环境大数据平台",
    text1: "环境空气管控系统",
    text2: "污染源在线监测系统",
    text3: "污染源排查管控平台",
    text4: "",
    text5: "",
    text6: ""
  },
  {
    ul: require("../asste/images/home/water.jpg").default,
    pust: "",
    text: "水污染源在线监测设备",
    text1: "水质在线分析仪",
    text2: "水质在线监测辅助设备",
    text3: "",
    text4: "",
    text5: "",
    text6: ""
  },


  {
    ul: require("../asste/images/home/anfang.jpg").default,
    pust: "",
    text: "安全系统监控服务",
    text1: "网络与信息安全软件开发",
    text2: "信息技术咨询服务",
    text3: "",
    text4: "",
    text5: "",
    text6: "",
  },
]

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      pageCount: 6,
      dataList: [],
      search: '',
    };
  }

  /**
* 改变分页
*/
  onChangePage(pageNumber, pageSize) {
    const { currentPage, pageCount } = this.state
    const page = pageNumber - 1
    let tempList = []
    data.forEach((item, index) => {
      if (index >= page * pageCount && index < pageNumber * pageCount) {
        tempList.push(item)
      }
    })
    this.setState({ dataList: tempList, currentPage: pageNumber })
  }

  onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
  }

  componentDidMount() {
    const { currentPage, pageCount } = this.state
    const page = currentPage - 1
    let tempList = []
    data.forEach((item, index) => {
      if (index >= page * pageCount && index < currentPage * pageCount) {
        tempList.push(item)
      }
    })
    this.setState({ dataList: tempList })
  }
  render() {
    return (

      <div className="Home-div">
        <br></br>
        {/* 简介 头*/}
        <div className="Home-div-account" >
          <div className="span"><h2>公司简介 Company profile</h2></div>
          <Divider >天津仁和嘉镜科技有限公司</Divider>
        </div>
        <div className="home-left-contact">
          <img src={company} ></img>
        </div>
        <br />   <br />
        <div className="home-left-info">
          <span><p class="company_info_p">天津仁和嘉境科技有限公司成立于2016年，地址位于天津市东丽区，公司以空气站和污染源在线监测仪器、环境物联网系统解决方案为基础，专业从事大气环境污染防治服务、协同软件开发、设备仪器的研发、销售等业务，为客户提优质特色的“一站式”环境管理咨询服务。</p>
            <p class="company_info_p">公司汇集各领域专家型人才，与中国环境科学规划院；天津市环境科学院、以及南开大学、天津大学等高校和研究院所单位实行战略合作，并在此基础上建立了专家智库，储备了涵盖众多领域的资深专家。公司本着为客户创造价值的宗旨，坚持经济与生态环境可持续发展，追求专业与精益求精，为企事业单位、政府部门、提供管家式环境与资源领域的管理与技术咨询服务。</p>
            <p ><strong>...</strong></p>
          </span>
        </div>
        <br />
        <div className="home-left-account" >
          <LoadingOutlined />
          <div className="span"><h2>产品介紹  Product Center  </h2></div>
          <Divider>天津仁和嘉境科技有限公司</Divider>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          {
            this.state.dataList.map((item, key) => {
              if (item.text.indexOf(this.state.search) > -1) {
                return (
                  <div className="home-left-account-list"  style={{ display: 'flex', flexDirection: 'column', width: '50%', alignItems: 'center' }}>
                    <h3 style={{color:'rgb(129, 72, 72)'}}>{item.text}</h3>
                    <img style={{ height: '45%',width:'45%' }} src={item.ul} />
                    <p >{item.text1}</p>
                    <p>{item.text2}</p>
                    <p>{item.text3}</p>
                    <p>{item.text4}</p>
                    <p>{item.text5}</p>
                  </div>
                )
              }
            })
          }
        
        </div>
        <div className='foot'>  <span>Copyright  津ICP备17003569号</span> </div>
      </div>
    );
  }
}

export default Home;