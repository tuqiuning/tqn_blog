import React, { memo, useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { MenuOutlined,CloseOutlined,SearchOutlined } from '@ant-design/icons';
import { Container } from './styled';
import languageCode from '@/utils/language';
import store from '@/store';
import { changeLanguage } from '@/store/features/counter';
 
export default memo((props) => {
    const {language} = useSelector((state)=>{
        return state.counter
    })
    const dispatch = useDispatch();
    
    store.getState().counter.language;
    const tabs = [
        languageCode.HOME,
        languageCode.FORME,
        languageCode.WORK,
        languageCode.FRONT,
        languageCode.END,
        languageCode.LANG,
    ]
    const [excessPhone, setExcessPhone] = useState(innerWidth >= 750); //是否大于750
    const [currentIndex,setCurrentIndex] = useState(0); //tabs下标
    const [isOpen, setIsOpen] = useState(false); //是否打开菜单弹窗
    const [searchValue,setSearchValue] = useState(''); //搜索
    const navigate = useNavigate();
    useEffect(() => {
        // 监听屏幕宽度
        window.addEventListener('resize',function(){
                setExcessPhone(innerWidth >= 750)
           
        })
        // 点击其它区域，关闭tabs弹窗
        const modalEl = document.getElementsByClassName('mask');
        modalEl[0].addEventListener('click',(e)=>{
            console.log(e);
            setIsOpen(false)
            document.body.style.overflow = 'auto'
        })
    }, [])
    const showModal = () => {
        setIsOpen(!isOpen)
        document.body.style.overflow = `${isOpen ? 'auto':'hidden'}`
    }
    // 切换tab
    const changeTab = (path,index) => {
        console.log(path);
        if(index === 5){
            dispatch(changeLanguage(language === 'zh-CN'?'en-US':'zh-CN'))
            return
        }
        navigate(path)
        setCurrentIndex(index)
    }
    const goSearch = () => {
        console.log(searchValue);
        if(searchValue === ''){
            return
        }
        const apiURL = `https://cn.bing.com/search?q=涂邱宁 ${searchValue}`
        window.open(apiURL)

    }
    return (
        <Container isOpen={isOpen} currentIndex={currentIndex}>
            {/* <div className='searchBox'>
            <input type="text" value={searchValue} onChange={(e)=>{setSearchValue(e.target.value)}}/>
            <SearchOutlined onClick={goSearch}/>
            </div> */}
            
            {
                excessPhone ? <ul className='tabs'>
                    {tabs.map((item,index) =>{
                        return <li key={index} className={currentIndex === index ? 'active':'null'} onClick={()=>{changeTab(item.path,index)}}>{item.name[language]}</li>
                    })}
                </ul> : <div onClick={showModal} className='icon'>
                    {
                        isOpen ? <CloseOutlined /> : <MenuOutlined />
                    }
                </div>
            }
            <div className='modal' style={{ display:`${excessPhone ? 'none':'block'}`}}>
                    <ul className='tabs-modal'>
                    {tabs.map((item,index) =>{
                        return <li key={index} className={currentIndex === index ? 'active':'null'} onClick={()=>{changeTab(item.path,index)}}>{item.name[language]}</li>
                    })}
                    </ul>

                <div className='mask'></div>
            </div>

        </Container>
    )
   
})
