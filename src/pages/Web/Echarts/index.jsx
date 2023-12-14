import React, { memo, useEffect,useState } from 'react';
import * as echarts from 'echarts';
import { China_geojson } from '@/utils/china.js';
import { EchartsWrapper } from './style';
import axios from 'axios';

export default memo(() => {
    useEffect(()=>{
      echarts.registerMap('china', China_geojson);
      let maChart = echarts.init(document.getElementById('main'));
      let option = {
        tooltip:{
          aaa:'4444'
        },
        series:[
          {
            name:'中国地图',
            type:'map',
            map:'china',
            roam:'true',
            itemStyle: {
              areaColor:'#0000ff',
              borderColor:'#000',
            },
            emphasis: {
              itemStyle: {
                areaColor:'#ff0000',
              },
              label: {
                color:'#fff'
              }
            },
            data:[
              {
                name:'重庆市',
                value:'599'
              }
            ],
            
          },
          
        ],
        visualMap:[
          {
            left:'20%',
            seriesIndex:[0],
            inRange:{
              color:['#ff0000','#00ff00']
            }
          }
        ]
      }
      maChart.setOption(option);
      maChart.on("click",function(params){
        console.log(params)
        setRegionName(params.name)
        axios.get(`http://t.weather.itboy.net/api/weather/city/100100`).then(res=>{
          console.log(res);
        })
      })
    },[])
    const [regionName,setRegionName] = useState('')
  return (
    <EchartsWrapper>
      <div id='main' style={{width:'600px',height:'600px'}}></div>
      <div className='weather'>
        <div>
          <input type="text" value={regionName} onChange={e=>{setRegionName(e.target.value)}}/>
        </div>
      </div>
    </EchartsWrapper>
  )
})
