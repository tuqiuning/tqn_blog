import React, { memo, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Drawer } from 'antd'
import { MenuOutlined, CloseOutlined, SearchOutlined } from '@ant-design/icons';
import { Container } from './styled';
import languageCode from '@/utils/language';
import store from '@/store';
import { changeLanguage } from '@/store/features/counter';

export default memo(({ activeNavIndex, clickNav }) => {
    const { language } = useSelector((state) => {
        return state.counter
    })
    const dispatch = useDispatch();

    store.getState().counter.language;
    const tabs = [
        languageCode.HOME,
        languageCode.FORME,
        // languageCode.WORK,
        languageCode.FRONT,
        // languageCode.END,
        languageCode.LANG,
    ]
    const [excessPhone, setExcessPhone] = useState(innerWidth >= 750); //是否大于750
    const [isOpen, setIsOpen] = useState(false); //是否打开菜单弹窗
    const [showSearchBox, setShowSearchBox] = useState(false); //是否显示搜索框
    const [searchValue, setSearchValue] = useState(''); //搜索
    const navigate = useNavigate();
    useEffect(() => {
        // 监听屏幕宽度
        window.addEventListener('resize', function () {
            setExcessPhone(innerWidth >= 750)

        })
        // 点击其它区域，关闭tabs弹窗
        // const modalEl = document.getElementsByClassName('mask');
        // modalEl[0].addEventListener('click',(e)=>{
        //     console.log(e);
        //     setIsOpen(false)
        //     document.body.style.overflow = 'auto'
        // })
    }, [])
    const showModal = () => {
        setIsOpen(!isOpen)
        // document.body.style.overflow = `${isOpen ? 'auto':'hidden'}`
    }
    // 切换tab
    const changeTab = (path, index) => {
        console.log(path);
        if (!path) {
            dispatch(changeLanguage(language === 'zh-CN' ? 'en-US' : 'zh-CN'))
            return
        }
        navigate(path)
        clickNav(index);
        // 将当前激活的Nav保存到sessionStroage,解决刷新后Nav的激活回到首页的问题
        sessionStorage.setItem('activeNav', index)
    }
    const goSearch = () => {
        console.log(searchValue);
        if (searchValue === '') {
            return
        }
        const apiURL = `https://cn.bing.com/search?q=涂邱宁 ${searchValue}`
        window.open(apiURL)

    }
    // 打开搜索框
    const openSearch = () => {
        setShowSearchBox(true)
        NavTranslate('-30px')
    }
    // 关闭搜索框
    const closeSearch = () => {
        setShowSearchBox(false)
        NavTranslate('0px')
    }
    const NavTranslate = (val) => {
        const rotateBox = document.getElementsByClassName('rotateBox');
        rotateBox[0].style.transform = `translate(0,${val})`
        rotateBox[0].style.transition = 'transform 0.5s ease-out'
    }
    return (
        <Container>
            {/* <div className='searchBox'>
            <input type="text" value={searchValue} onChange={(e)=>{setSearchValue(e.target.value)}}/>
            <SearchOutlined onClick={goSearch}/>
            </div> */}

            {
                excessPhone ?
                    <div className='rotateContainer'>
                        <div className='rotateBox'>
                            <ul className='tabs' id='tabs'>
                                {tabs.map((item, index) => {
                                    return <li key={index} className={activeNavIndex === index ? 'active' : 'null'} onClick={() => { changeTab(item.path, index) }}>{item.name[language]}</li>
                                })}
                            </ul>
                            <div className="searchBox">
                                <input type="text" value={searchValue} onChange={e => { setSearchValue(e.target.value) }} />
                                <SearchOutlined onClick={goSearch} />
                            </div>
                        </div>

                    </div>

                    :
                    <div onClick={showModal} className='icon'>
                        <MenuOutlined />
                    </div>
            }
            {
                excessPhone && <div className='searchIcon'>
                    {showSearchBox ? <CloseOutlined onClick={closeSearch} /> : <SearchOutlined onClick={openSearch} />}
                </div>
            }
            <Drawer
                closable={false}
                placement="right"
                width={200}
                onClose={() => setIsOpen(false)}
                open={isOpen}
            >
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
                    <CloseOutlined onClick={() => setIsOpen(false)} />
                </div>
                <ul className='tabs-modal' style={{ listStyle: 'none' }}>
                    {tabs.map((item, index) => {
                        return <li
                            key={index}
                            style={{ marginBottom: '16px', cursor: 'pointer', color: `${activeNavIndex === index ? '#1677ff' : '#000'}` }}
                            onClick={() => { changeTab(item.path, index) }}
                        >
                            {item.name[language]}
                        </li>
                    })}
                </ul>
            </Drawer>
            {/* <div className='modal' style={{ display:`${excessPhone ? 'none':'block'}`}}>
                    <ul className='tabs-modal'>
                    {tabs.map((item,index) =>{
                        return <li key={index} className={activeNavIndex === index ? 'active':'null'} onClick={()=>{changeTab(item.path,index)}}>{item.name[language]}</li>
                    })}
                    </ul>

                <div className='mask'></div>
            </div> */}

        </Container>
    )

})
