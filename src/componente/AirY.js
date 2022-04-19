import React ,{Component} from 'react';
import '../asste/css/AirY.css';
import { Divider,Button } from 'antd';
const data = [
    {ul: require("../asste/images/AirY/product1.jpg").default,
        texth1:"CEMS-2000烟气连续在线监测系统",
        textp2:"",
        texta:"了解更多",
        hrefa:""
     },
     {ul: require("../asste/images/AirY/product2.jpg").default,
     texth1:"CEMS-2000 D 烟气超低排放在线监测系统",
     textp2:"",
     texta:"了解更多",
     hrefa:""
     },
    {ul: require("../asste/images/AirY/product3.jpg").default,
    texth1:"CEMS-2000 B 烟气超低排放在线监测系统",
    textp2:"",
    texta:"了解更多",
    hrefa:""
  },
    {ul: require("../asste/images/AirY/product4.jpg").default,
    texth1:"CEMS-2000 VOC挥发性有机物在线监测系统",
    textp2:"",
    texta:"了解更多",
    hrefa:""
    },
    {ul: require("../asste/images/AirY/product5.jpg").default,
    texth1:"CEMS-4000 VOC挥发性有机物在线监测系统",
    textp2:"",
    texta:"了解更多",
    hrefa:""
},
{ul: require("../asste/images/AirY/product6.jpg").default,
texth1:"FEMS-1000 VOC 无组织排放VOC监测系统",
textp2:"",
texta:"了解更多",
hrefa:""
},
{ul: require("../asste/images/AirY/product7.jpg").default,
texth1:"ETMS-200无组织排放在线监测系统",
textp2:"",
texta:"了解更多",
hrefa:""
},
{ul: require("../asste/images/AirY/product8.jpg").default,
texth1:"Synspec PM 1.0超低颗粒物在线监测系统 ",
textp2:"",
texta:"了解更多",
hrefa:""
},
{ul: require("../asste/images/AirY/product9.jpg").default,
texth1:"BPM-200大气颗粒物监测仪",
textp2:"",
texta:"了解更多",
hrefa:""
},
    ]
class AirY extends Component {
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
           <div className="AirY-div">
              <div className="AirY-div-img" >
                    <img src={require("../asste/images/AirZ/AirZ-b.png").default}></img>
              </div>
              <div className="AirY-div-list" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                        {
                            this.state.dataList.map((item, key) => {
                                if (item.texth1.indexOf(this.state.search) > -1) {
                                    return (
                                        <div className="AirY-div-list-info" style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center' }}>
                                            <img style={{ width: '70%' }} src={item.ul} />
                                            <br></br>
                                            <p style={{ fontSize: '4' },{whiteSpace:"pre-wrap"}}>{item.texth1}</p>
                                            <Button type="primary" size="middle" >{item.texta} </Button>
                                        </div>
                                    )
                                }

                            })
                        }
                        <div className='foot'>  <span>Copyright  津ICP备17003569号</span> </div>
                    </div>

           </div> 
        );
    }
}

export default AirY;