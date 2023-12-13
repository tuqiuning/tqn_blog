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
        geo: {
          map:'china'
        }
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
