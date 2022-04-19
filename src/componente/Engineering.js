import React, { useState,Component } from 'react';
import "../asste/css/Engineering.css"
import {LeftOutlined ,RightOutlined} from '@ant-design/icons';
import BannerAnim from 'rc-banner-anim';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import {DeploymentUnitOutlined} from '@ant-design/icons';
import { Divider } from 'antd';
import { Image ,List, Avatar,Pagination } from 'antd';
import PropTypes from 'prop-types';
const Element = BannerAnim.Element;
var TweenOneGroup = TweenOne.TweenOneGroup;

const data = [
  {
    title: '天津丹阳车圈有限公司',
    description:'3万风量 催化燃烧',
  },
  {
    title: '天津冀津嘉利塑料制品有限公司 ',
    description:'水喷淋+UV 光养+ 活性炭吸附',
  },
  {
    title: '天津市千佰億家具有限公司',
    description:'3万风量 催化燃烧',
  },
  {
    title: '天津市艾维金属制品有限公司 ',
    description:'水喷淋+UV 光养+ 活性炭吸附',
  },
  {
    title: '天津市艾维金属制品有限公司 ',
    description:'水喷淋+UV 光养+ 活性炭吸附',
  },
];
const textData = {
  content: 'Taiwan called motorcycle, motor bike [1] or a motorcycle,' +
  ' the motorcycle referred to in the mainland, ' +
  'Hong Kong and Southeast Asia known as motorcycles [2], ' +
  'is a driven by the engine, ' +
  'operated by a hand or two directions three-wheeled vehicles, is a means of transport. ' +
  'In some military or police applications, will add a side compartment and a secondary wheel, ' +
  'become a special three-wheeled motorcycle, mobility Zheyi common plug-in auxiliary wheels.',
  title: 'Motorcycle',
};

let dataArray = [
  {
    pic: 'https://zos.alipayobjects.com/rmsportal/ogXcvssYXpECqKG.png',
    map: 'https://zos.alipayobjects.com/rmsportal/HfBaRfhTkeXFwHJ.png',
    color: '#FFF43D',
    background: '#F6B429',
  },
  {
    pic: 'https://zos.alipayobjects.com/rmsportal/iCVhrDRFOAJnJgy.png',
    map: 'https://zos.alipayobjects.com/rmsportal/XRfQxYENhzbfZXt.png',
    color: '#FF4058',
    background: '#FC1E4F',
  },
  {
    pic: 'https://zos.alipayobjects.com/rmsportal/zMswSbPBiQKvARY.png',
    map: 'https://zos.alipayobjects.com/rmsportal/syuaaBOvttVcNks.png',
    color: '#9FDA7F',
    background: '#64D487',
  },
];
dataArray = dataArray.map(item => ({ ...item, ...textData }));


class Engineering extends Component {

    static propTypes = {
        className: PropTypes.string,
      };
    
      static defaultProps = {
        className: 'details-switch-demo',
      };
    constructor(props) {
        super(props);
        this.state = { 
            showInt: 0,
            delay: 0,
            imgAnim: [
              { translateX: [0, 300], opacity: [1, 0] },
              { translateX: [0, -300], opacity: [1, 0] },
            ],
         };
         this.oneEnter = false;
    }

    

    onChange = () => {
        if (!this.oneEnter) {
          this.setState({ delay: 300 });
          this.oneEnter = true;
        }
      }
    
      onLeft = () => {
        let showInt = this.state.showInt;
        showInt -= 1;
        const imgAnim = [
          { translateX: [0, -300], opacity: [1, 0] },
          { translateX: [0, 300], opacity: [1, 0] },
        ];
        if (showInt <= 0) {
          showInt = 0;
        }
        this.setState({ showInt, imgAnim });
        this.bannerImg.prev();
        this.bannerText.prev();
      };
    
      onRight = () => {
        let showInt = this.state.showInt;
        const imgAnim = [
          { translateX: [0, 300], opacity: [1, 0] },
          { translateX: [0, -300], opacity: [1, 0] },
        ];
        showInt += 1;
        if (showInt > dataArray.length - 1) {
          showInt = dataArray.length - 1;
        }
        this.setState({ showInt, imgAnim });
        this.bannerImg.next();
        this.bannerText.next();
      };
    
      getDuration = (e) => {
        if (e.key === 'map') {
          return 800;
        }
        return 1000;
      };
    
      
      
    render() {
    
  
        
        const imgChildren = dataArray.map((item, i) => (
            <Element key={i}   style={{ background: item.color,height: '100%',}}  leaveChildHide >
              <QueueAnim
                animConfig={this.state.imgAnim}
                duration={this.getDuration}
                delay={[!i ? this.state.delay : 300, 0]}
                ease={['easeOutCubic', 'easeInQuad']}
                key="img-wrapper"
              >
                <div className={`${this.props.className}-map map${i}`} key="map">
                  <img src={item.map} width="100%" />
                </div>
                <div className={`${this.props.className}-pic pic${i}`} key="pic">
                  <img src={item.pic} width="100%" />
                </div>
              </QueueAnim>
            </Element>));
          const textChildren = dataArray.map((item, i) => {
            const { title, content, background } = item;
            return (<Element key={i}>
              <QueueAnim type="bottom" duration={1000} delay={[!i ? this.state.delay + 500 : 800, 0]}>
                <h1 key="h1">{title}</h1>
                <em key="em" style={{ background }} />
                <p key="p">{content}</p>
              </QueueAnim>
            </Element>);
          });

          

        return (
            <div>
            <div
            className={`${this.props.className}-wrapper`}
            style={{ background: dataArray[this.state.showInt].background }}
          >
            <div className={this.props.className}>
              <BannerAnim
                prefixCls={`${this.props.className}-img-wrapper`}
                sync
                type="across"
                duration={1000}
                ease="easeInOutExpo"
                arrow={false}
                thumb={false}
                ref={(c) => { this.bannerImg = c; }}
                onChange={this.onChange}
                dragPlay={false}
              >
                {imgChildren}
              </BannerAnim>
              <BannerAnim
                prefixCls={`${this.props.className}-text-wrapper`}
                sync
                type="across"
                duration={1000}
                arrow={false}
                thumb={false}
                ease="easeInOutExpo"
                ref={(c) => { this.bannerText = c; }}
                dragPlay={false}
              >
                {textChildren}
              </BannerAnim>
              <TweenOneGroup enter={{ opacity: 2, type: 'from' }} leave={{ opacity: 0 }}>
             
                {this.state.showInt &&  <LeftOutlined type="left" key="left" onClick={this.onLeft} />}
                {this.state.showInt < dataArray.length - 1 &&  <RightOutlined  type="right" key="right" onClick={this.onRight} />}
              </TweenOneGroup>
            </div>
          </div>
                    <div className="Engineerings-div">
                        <div className="Engineerings-div-fq">
                            <div className="Engineerings-div-fq-wz" >
                                <p>《中华人民共和国环境保护法》中第四十一条规定：建设项目中防治污染的设施，应当与主体工程同时设计、同时施工、同时投产使用。防治污染的设施应当符合经批准的环境影响评价文件的要求，不得擅自拆除或者闲置。第四十二条规定：排放污染物的企业事业单位和其他生产经营者，应当采取措施，防治在生产建设或者其他活动中产生的废气、废水、废渣、医疗废物、粉尘、恶臭气体、放射性物质以及噪声、振动、光辐射、电磁辐射等对环境的污染和危害。
盛博瑞环保在废气治理方面有多年工程经验，在印刷、医药、化工、注塑、金属加工、餐饮等行业拥有众多工程案例。采用过“吸附脱附+热力燃烧”、“喷淋塔+活性炭吸附”、“喷淋塔+低温等离子体废气治理”、“压缩深度冷凝”等技术，并在这些技术上取得成功的工程实践，并在实践中不断改进。</p>

                            </div>
                            <div  className="Engineerings-div-fq-img">
                                <img width="500px" height="382px" src={require("../asste/images/huiyi.png").default} ></img>
                            </div>

                        </div>
                        <div className="Engineerings-div-fc">
                            <div className="home-left-account" >
                            <DeploymentUnitOutlined />
                                  <div className="span"><h2>工况用电  Industrial Electricity  </h2></div>
                                  <Divider orientation="right">天津盛博瑞环保科技有限公司</Divider>
                             </div>

                            <div className="Engineerings-div-fc-img">
                                <img src={require("../asste/images/tu.png").default}></img>
                            </div>
                            <div  className="Engineerings-div-fc-top">
                               <div className="Engineerings-div-fc-top-wz"> <p>工况用电监测系统(PEMS)，是监控、反映污染源生产设施、固定污染物治理设施的运行状态的电气参数的所有设备和信息的统称。例如：电压、功率、电量、电流等。
工况用电监测系统(PEMS)大多数情况用于掌控生产、治理设施的运气状况，污染物的排放、治理状况、污染源停限产等信息，它也是污染源自动监测系统的组成部分。</p><h3   style={{textAlign:'center' }}>案例</h3><ol >
    <li>天津新伟祥工业有限公司</li> <li>那美钢（天津）汽配有限公司</li><li>天津丹阳车圈有限公司</li><li>天津市风易日用品有限公司</li><li>天津冀津嘉利塑料制品有限公司</li><li>天津金恒碧股份有限公司</li> <li>天津市千佰億家具有限公司</li>  <li>天津沃恒圣金属制品有限公司</li>  <li>天津市艾维金属制品有限公司</li></ol></div>
                               <div className="Engineerings-div-fc-top-img">
                                    <App />
                                </div>
                            </div>
                        </div>

                        <div className="Engineerings-div-fqzl">
                            <div className="home-left-account" >
                                <DeploymentUnitOutlined />
                                      <div className="span"><h2>废气治理  waste gas treatment  </h2></div>
                                      <Divider orientation="right">天津盛博瑞环保科技有限公司</Divider>
                            </div>
                            <div  className="Engineerings-div-fqzl-img">

                              <IM />
                            </div>

                              <div className="Engineerings-div-fqzl-wz-img" >
                              <img src ={require("../asste/images/fangan.jpg").default}></img>
                              </div>
                              <div className="Engineerings-div-fqzl-wz-list" >
                              <List  
                              pagination={{position:'both'},{pageSize:4}}
                              itemLayout="horizontal"  dataSource={data}  renderItem={item => (
                                        <List.Item>  <List.Item.Meta
                                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title={<a href="https://ant.design">{item.title}</a>}
                                            description={item.description}
                                          />
                                        </List.Item>  )} />
                              </div>
                        </div>

                    </div> 
                      





          </div>
          
          
          );
    }
}

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Image
        preview={{ visible: false }}
        width={480}
        src={require("../asste/images/dianbiao.jpg").default}
        onClick={() => setVisible(true)}
      />
      <div style={{ display: 'none' }}>
        <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
          <Image src={require("../asste/images/dianbiao.jpg").default} />
          <Image  src={require("../asste/images/dianbiao2.jpg").default} />
          <Image src={require("../asste/images/diaobiao3.jpg").default} />
        </Image.PreviewGroup>
      </div>
    </>
  );
};


const IM = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Image
        preview={{ visible: false }}
        width={500}
        src={require("../asste/images/feiqi1.jpg").default}
        onClick={() => setVisible(true)}
      />
      <div style={{ display: 'none' }}>
        <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
          <Image src={require("../asste/images/feiqi1.jpg").default} />
          <Image  src={require("../asste/images/feiqi2.jpg").default} />
          <Image src={require("../asste/images/feiqi3.jpg").default} />
        </Image.PreviewGroup>
      </div>
    </>
  );
};




export default Engineering;