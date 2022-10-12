import React ,{Component} from 'react';
import '../asste/css/AirZ.css'
import { Divider,Button } from 'antd';
const data = [
    {ul: require("../asste/images/WaterY/product1.jpg").default,
        texth1:"MiniStation-2100小型水质自动监测系统",
        textp2:"",
        texta:"了解更多",
        hrefa:""
     },
     {ul: require("../asste/images/WaterY/product2.jpg").default,
     texth1:"MiniStation-3100微型水质自动监测系统",
     textp2:"",
     texta:"了解更多",
     hrefa:""
     },
    {ul: require("../asste/images/WaterY/product3.jpg").default,
    texth1:"MBoat-3000浮船式水质自动监测系统",
    textp2:"",
    texta:"了解更多",
    hrefa:""
    },
    {ul: require("../asste/images/WaterY/product4.jpg").default,
    texth1:"WCS-3000水质五参数自动监测仪",
    textp2:"",
    texta:"了解更多",
    hrefa:""
    },
    {ul: require("../asste/images/WaterY/product5.jpg").default,
    texth1:"COD-2000型COD在线分析仪",
    textp2:"",
    texta:"了解更多",
    hrefa:""
     },
    {ul: require("../asste/images/WaterY/product6.jpg").default,
    texth1:"VOC-3000 型水中挥发性有机物在线分析仪",
    textp2:"",
    texta:"了解更多",
    hrefa:""
    },
    ]
class WaterY extends Component {
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
                    <img src={require("../asste/images/AirZ/AirZ-b.png").default} ></img>
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
                                            <p style={{ fontSize: 14 ,whiteSpace:"pre-wrap"}}>{item.texth1}</p>
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

export default WaterY;