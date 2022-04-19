import React, { Component } from 'react';
import '../asste/css/AirZ.css'
import { Divider,Button } from 'antd';
const data = [
    {
        ul: require("../asste/images/AirZ/air1.jpg").default,
        texth1: "EXPEC 2000 环境空气挥发性有机物自动监测系统",
        textp2: "",
        texta: "了解更多",
        hrefa: ""
    },
    {
        ul: require("../asste/images/AirZ/air2.jpg").default,
        texth1: "EXPEC 2000 环境空气非甲烷总烃自动监测系统",
        textp2: "",
        texta: "了解更多",
        hrefa: ""
    },
    {
        ul: require("../asste/images/AirZ/air3.jpg").default,
        texth1: "EXPEC 2000 环境空气高低碳自动监测系统",
        textp2: "",
        texta: "了解更多",
        hrefa: ""
    },
    {
        ul: require("../asste/images/AirZ/air4.jpg").default,
        texth1: "SUPEC 7030 大气颗粒物无机元素在线监测系统 (在线ICP-MS)",
        textp2: "",
        texta: "了解更多",
        hrefa: ""
    },
    {
        ul: require("../asste/images/AirZ/air5.jpg").default,
        texth1: "EXPEC 1900 傅里叶红外气体遥测仪",
        textp2: "",
        texta: "了解更多",
        hrefa: ""
    },
    {
        ul: require("../asste/images/AirZ/air6.jpg").default,
        texth1: "AQMS-1000常规空气站",
        textp2: "",
        texta: "了解更多",
        hrefa: ""
    },
    {
        ul: require("../asste/images/AirZ/air7.jpg").default,
        texth1: "AQMS-400 一氧化碳分析仪",
        textp2: "",
        texta: "了解更多",
        hrefa: ""
    },
    {
        ul: require("../asste/images/AirZ/air7.jpg").default,
        texth1: "AQMS-500 二氧化硫分析仪",
        textp2: "",
        texta: "了解更多",
        hrefa: ""
    },
    {
        ul: require("../asste/images/AirZ/air7.jpg").default,
        texth1: "AQMS-200动态校准仪",
        textp2: "",
        texta: "了解更多",
        hrefa: ""
    },
    {
        ul: require("../asste/images/AirZ/air8.jpg").default,
        texth1: "PMS-200A自动换膜颗粒物采样器",
        textp2: "",
        texta: "了解更多",
        hrefa: ""
    },
    {
        ul: require("../asste/images/AirZ/air9.jpg").default,
        texth1: "GC-TOFMS-100 VOCs在线监测质谱系统",
        textp2: "",
        texta: "了解更多",
        hrefa: ""
    },
]
class AirZ extends Component {
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

            </div>
        );
    }
}

export default AirZ;