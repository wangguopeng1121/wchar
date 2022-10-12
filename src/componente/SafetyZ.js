import React ,{Component} from 'react';
import '../asste/css/AirZ.css'
import { Divider,Button } from 'antd';

const data = [
    {ul: require("../asste/images/SafetyZ/product1.jpg").default,
        texth1:"短信电话报警主机ROC-K6-4G",
        textp2:"",
        texta:"了解更多",
        hrefa:"",
     },
     {ul: require("../asste/images/SafetyZ/product2.jpg").default,
     texth1:"智能声光报警器ROC-M10",
     textp2:"",
     texta:"了解更多",
     hrefa:"",
  },
  {ul: require("../asste/images/SafetyZ/product3.jpg").default,
  texth1:"嵌入式动力环境监控主机ROC-T系列",
  textp2:"",
  texta:"了解更多",
  hrefa:"",
},
{ul: require("../asste/images/SafetyZ/product4.jpg").default,
texth1:"指纹密码刷卡门禁一体机ROC-F12",
textp2:"",
texta:"了解更多",
hrefa:"",
},
{ul: require("../asste/images/SafetyZ/product5.jpg").default,
texth1:"ETC智能机柜",
textp2:"",
texta:"了解更多",
hrefa:"",
},
{ul: require("../asste/images/SafetyZ/product6.jpg").default,
texth1:"门禁密码刷卡读卡器ROC-ACC-A104",
textp2:"",
texta:"了解更多",
hrefa:"",
},
{ul: require("../asste/images/SafetyZ/product7.jpg").default,
texth1:"防爆摄像头",
textp2:"",
texta:"了解更多",
hrefa:"",
},
{ul: require("../asste/images/SafetyZ/product8.jpg").default,
texth1:"防爆摄像头",
textp2:"",
texta:"了解更多",
hrefa:"",
},
    ]

class SafetyZ extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            search: '',
            currentPage: 1,
            pageCount: 50,
            dataList: [],
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
            <div className="AirZ-div">
                <div className="AirZ-div-img">
                    <img  src={require("../asste/images/AirZ/AirZ-b.png").default} ></img>
                </div>
                <div>
                    <div className="AirZ-div-list" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                        {
                            this.state.dataList.map((item, key) => {
                                if (item.texth1.indexOf(this.state.search) > -1) {
                                    return (
                                        <div className="AirZ-div-list-info" style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>
                                            <img style={{ width: '70%' }} src={item.ul} />
                                            <br></br>
                                            <p style={{ fontSize: 15 ,whiteSpace:"pre-wrap"}}>{item.texth1}</p>
                                            <Button type="primary" size="middle" >{item.texta} </Button>
                                        </div>
                                    )
                                }

                            })
                        }
                        <div className='foot'>  <span>Copyright  津ICP备17003569号</span> </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default SafetyZ;