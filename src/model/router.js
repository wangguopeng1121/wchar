

import Home from '../componente/Home';
import AirY from '../componente/AirY';
import AirZ from '../componente/AirZ';
import WaterY from '../componente/WaterY';
import WaterZ from '../componente/WaterZ';
import SafetyZ from '../componente/SafetyZ';
import Software from '../componente/Software';
let routes = [
    {
      path: "/",
      component: Home,
      exact:true
    },
    // {
    //   path: "/consult",
    //   component: Consult,
    //   routes:[   
    //     /*嵌套路由*/
    //     {
    //       path: "/consult/",
    //       component: Huanping,
    //     },
    //         {
    //           path: "/consult/yingji",
    //           component: Yingji
    //         },
    //         {
    //           path: "/consult/paiwu",
    //           component: Paiwu,
    //         },
    //         {
    //           path: "/consult/yanshou",
    //           component: Yanshou,
    //         },
    //         {
    //           path: "/consult/changdiao",
    //           component: Changdiao,
    //         }
    //       ]

    // },
    {
      path: "/airz",
      component: AirZ,
    },
    {
      path: "/airy",
      component: AirY,
    },
   
    {
      path: "/watery",
      component: WaterY,
    },
    {
      path: "/waterz",
      component: WaterZ,
    },


    {
      path: "/software",
      component: Software,
    },
    {
      path: "/safetyz",
      component: SafetyZ,
    },
];

export default routes;