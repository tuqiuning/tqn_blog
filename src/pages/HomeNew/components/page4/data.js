import xietong from '@/assets/img/协同+cover.png';
import xietong_mobile from '@/assets/img/协同+mobile.png';
import penmamaImg1 from '@/assets/img/penmamaImg1.png';
import penmamaImg2 from '@/assets/img/penmamaImg2.png';
import health_mobile from '@/assets/img/之见健康mobile.png';
import health_pc from '@/assets/img/health_pc.jpg';
import pit_img from '@/assets/img/基坑cover.png';
import book_img from '@/assets/img/书书友.png';
export const title = {
    "zh-CN": '项目经验',
    "en-US": 'Project Experience'
}
export const projectList = {
    "zh-CN": [
        {
            name: '盆妈妈',
            img: [penmamaImg1,penmamaImg2],
            overview: '本项目是提供女性健康全品类服务和产品的平台，聚集了女性用户、到家健康师、女性健康门店，将线下的消费场景与线上的平台有机结合。平台共有三个端，分别为用户端、商家端和管理端。',
            skills: ['uniapp','uView','Element-UI'],
            content: [
                '用户端购买项目、商品全流程，包括领取优惠券、收藏、加入购物车、拼团、下单、服务预约、商品物流查询、到店项目核销、评价。',
                '用户端热门活动的开发，包括抽奖、签到、秒杀、许愿墙、砸金蛋等。',
                '用户端分享功能开发，分享项目、商品、门店给好友，赚取佣金。',
                '商家端健康师、门店入驻流程，包括填写资料、签署协议、缴费，选择服务时间和服务区域。',
                '商家端健康师、门店添加项目、优惠券、秒杀项目。',
                '负责项目的微信小程序、抖音小程序的提审、发布，H5的打包、部署。'
            ]
        },
        {
            name: '中信集团协同+',
            img: [xietong,xietong_mobile],
            overview: '本项目是中信集团用于集团内部开展协同业务及协同管理工作的平台。支持子公司、区域分会提升协同质效，加强内部合作，服务外部客户。该项目 包含企业微信端和网页端，主要模块有：客户拜访、协同需求、协同活动、分会管理等。',
            skills: ['React','Ant Design','Taro','NutUI','WebSocket'],
            content: [
                '开发及维护系统核心模块-客户拜访，完成发起人、参与人、审批人在各种审批状态下的页面展示、逻辑处理。',
                '完成消息、待办功能，使用WebSocket实时获取数据，点击消息跳转到相应模块页面。',
                '完成用户使用时长的埋点，利用Vuex和localStorage保存菜单名和后端返回的页面id。',
                '完成通知公告的开发，根据部门和部门职位展示对应的表单内容、发送范围和审批人，到达发送时间接收人账号弹出通知公告内容。',
                '完成订阅推荐，用户根据喜好设置感兴趣的标签，通过计算高度实现分类和各分类下的标签双向联动。',
                '编写多个公共组件、公共函数，表单创建组件、判断当前用户是否是集团员工的函数、用户操作时的积分获取函数、用于搜索框的防抖函数等。'
            ]
        },
        {
            name: '基坑降排水智能监测控制系统',
            img: [pit_img],
            overview: '本项目是一个对施工现场地下水状况进行监测和预警，避免地下水积水外溢给施工安全生产带来风险的系统。根据智能液位变送器等设备提供的状态信息，完成数据浏览、采集分析、数据处理、预警提醒、事件管理、生成报告等主要功能。 ',
            skills: ['React','Ant Design','Ant Design Charts'],
            content: [
                '使用Ant Design Charts 图表库完成首页监测总览，展示各基坑点位的近30天排水量走势图，各基坑点位的实时液位，点击地图上的基坑点位图标弹出对应的详情弹窗',
                '使用Ant Design框架完成预警管理，针对不同类型基坑设置不同的触发条件、报警方式、报警联系人。',
                '使用Ant Design框架完成设备管理的增删改查，点击地图的基坑点位添加对应的设备。',
                '对Ant Design进行二次封装，封装模糊搜索、列表、分页组件，提高开发效率、提升代码的复用性和可维护性。'
            ]
        },
        {
            name: ' 之见荐康',
            img: [health_mobile,health_pc],
            overview: '本项目是一个为病友提供精准就医推荐、快速预约三甲医院专家面诊、专业就医陪诊、住院手术检查加急等全方位医疗健康服务平台。主要模块有：数据看板、供应链管理、客户管理、会员等级、优惠券管理、订单管理、绩效评分。 ',
            skills: ['Vue','uniapp','Element-UI','Avue,Echarts'],
            content: [
                '封装axios，配置请求拦截器和响应拦截器，配置config.js文件。',
                '完成登录页面的开发，可使用账号密码登录和手机验证码登录。',
                '根据登录者身份动态渲染左侧导航栏，利用Vue指令实现按钮级权限控制。',
                '通过Echarts完成首页数据看板，直观展示用户数、订单数、交易额的同比、环比增长量/率。',
                '使用Avue完成会员等级的CRUD和流程开发，用于管理员对各会员等级设置相应的权益。',
                '使用Avue完成优惠券的CRUD和流程开发，用于管理员对优惠券设置金额和领取条件。',
                '制作消息模板，需要创建消息时可以选择相应的模板，快速创建消息。 '
            ]
        },
    ],
    'en-US': [
        {
            name: 'PENMAMA',
            img: [penmamaImg1,penmamaImg2],
            overview: "This project is a platform to provide a full range of women's health services and products, gathering female users, home health professionals, women's health stores, and organically combining offline consumption scenes with online platforms. The platform has three terminals, namely the client side, the merchant side and the management side.",
            skills: ['uniapp','uView','Element-UI'],
            content: [
                'The whole process of purchasing items and goods at the client end, including receiving coupons, collecting, adding to shopping cart, grouping, placing orders, service reservation, commodity logistics inquiry, in-store project write-off and evaluation.',
                'Development of popular activities on the client side, including sweepstakes, sign-in, instant kill, wishing wall, smashing golden eggs, etc.',
                'Client share function development, share projects, goods, stores to friends, earn commission.',
                "Complete the development of notification and announcement. According to the department, the corresponding form items, sending scope and approver are displayed, and the announcement content is displayed on the recipient's account at the arrival time.",
                'Merchant side health professionals, store entry process, including filling in information, signing agreements, payment, selection of service hours and service areas.',
                "Responsible for the interrogation and release of the project's wechat mini program and Tiktok mini program, and the packaging and deployment of H5."
            ]
        },
        {
            name: 'Citic Group Synergy +',
            img: [xietong,xietong_mobile],
            overview: 'This project is a platform for CITIC Group to carry out collaborative business and collaborative management work within the group. Strengthen internal cooperation and serve external customers. The project includes enterprise wechat terminal and web terminal, and the main modules are: customer visit, collaborative needs, collaborative activities, etc.',
            skills: ['React','Ant Design','Taro','NutUI','WebSocket'],
            content: [
                'Develop and maintain the core modules of the system - customer visits, complete the page display and logical processing under various approval states.',
                'Complete the message and to-do function, use WebSocket to get data in real time, click the message to jump to the corresponding module page.',
                'Complete the user usage time buried, using Vuex and localStorage to save the menu name and the back end returned page id.',
                "Complete the development of notification and announcement. According to the department, the corresponding form items, sending scope and approver are displayed, and the announcement content is displayed on the recipient's account at the arrival time.",
                'After the subscription recommendation is completed, the user sets the labels he is interested in according to his preferences, and realizes the bidirectional linkage between the categories and labels under each category by calculating the height.',
                'Write a number of public components, public functions, form creation components, functions to judge the current user position, user operations to obtain credits function, for search box anti-shake function.'
            ]
        },
        {
            name: 'Pit Drainage Intelligent Monitoring And Control System',
            img: [pit_img],
            overview: 'This project is a system for monitoring and early warning of groundwater condition on construction site to avoid the risk of groundwater overflow to construction safety production. According to the status information provided by the intelligent liquid level transmitter and other devices, complete the main functions of data browsing, collection and analysis, data processing, early warning reminder, event management, report generation and so on. ',
            skills: ['React','Ant Design','Ant Design Charts'],
            content: [
                'Use Ant Design Charts to complete the monitoring overview of the home page, showing the water displacement chart of each foundation pit point in the past 30 days and the real-time liquid level of each foundation pit point. Click the foundation pit point icon on the map to pop up the corresponding details pop-up window.',
                'Use Ant Design framework to complete the early warning management, and set different trigger conditions, alarm methods and alarm contacts for different types of foundation pits.',
                'Use Ant Design framework to complete the addition, deletion, correction and check of equipment management, click the foundation pit point on the map to add the corresponding equipment.',
                'Secondary encapsulation of Ant Design, packaging fuzzy search, list, paging components, improve development efficiency, improve code reusability and maintainability.'
            ]
        },
        {
            name: 'View Health',
            img: [health_mobile,health_pc],
            overview: 'This project is a comprehensive medical and health service platform to provide patients with accurate medical recommendation, rapid appointment of expert face-to-face consultation, professional consultation, and urgent hospitalization examination. The main modules are: data Kanban, supply chain management, customer management, membership level, coupon management, order management, performance scoring.',
            skills: ['Vue','uniapp','Element-UI','Avue,Echarts'],
            content: [
                'Wrap axios, configure the request and response blocker, and configure the config.js file.',
                'To complete the development of the login page, you can log in with the account password and mobile verification code.',
                'The left navigation bar is dynamically rendered according to the identity of the logon, and the button level permission control is realized by using Vue instruction.',
                'Through Echarts to complete the home page data Kanban, visually display the number of users, the number of orders, the volume of year-on-year and sequential growth/rate.',
                'Complete CRUD and process development of member levels with Avue, which is used by administrators to set the corresponding rights and interests for each member level.',
                'Use Avue to complete the CRUD and process development of coupons for administrators to set the amount and claim conditions for coupons.',
                'Create a message template. If you need to create a message, you can select a template to quickly create a message.'
            ]
        },
    ]
}