import React, {useState} from "react";
import "./page.scss";
import Menu from '../menu/Menu';

const Page = () => {

 const [showMenu, setShowMenu] = useState(false)

  const handleClick = () => {
    setShowMenu(showMenu ? false : true);
  }
//т.к. не осталось времени - сделал заготовку - выпадающее меню, но по заданию правильнее сделать чтоб sidebar как плавно увеличивался в размере и это реально реализовать...

  return (
      <div className='page'>
        <div className='page__container'>
            <div className="page__container_header">
               {showMenu ? <Menu /> : null}
                <div className="page__container_header-loopicon">
                    <i className='fa fa-search' ></i>
                </div>
                <div className="page__container_header-icon1">
                <i className="fa fa-calendar" aria-hidden="true"></i>
                </div>
                <div className="page__container_header-icon2">
                <i className="fa fa-bell" aria-hidden="true"></i>
                </div>
                <div className="page__container_header-usericon">
                    <i className="fa fa-user" ></i>
                </div>
            </div>
            <div className="page__sidebar">
                <div className="page__sidebar_logo">
                    <img className="page__sidebar_logo-img" src="logo1.png" alt="logo1" onClick={handleClick}></img>
                </div>
                <div className="page__sidebar_itemcontainer">
                    <div className="page__sidebar_itemcontainer-item"></div>
                </div>
                <div className="page__sidebar_itemcontainer">
                    <div className="page__sidebar_itemcontainer-item"></div>
                </div>
                <div className="page__sidebar_itemcontainer">
                    <div className="page__sidebar_itemcontainer-item"></div>
                </div>
                <div className="page__sidebar_itemcontainer">
                    <div className="page__sidebar_itemcontainer-item"></div>
                </div>
                <div className="page__sidebar_itemcontainer">
                    <div className="page__sidebar_itemcontainer-item"></div>
                </div>
                <div className="page__sidebar_itemcontainer">
                    <div className="page__sidebar_itemcontainer-item"></div>
                </div>
                <div className="page__sidebar_itemcontainer">
                    <div className="page__sidebar_itemcontainer-item"></div>
                </div>
            </div>
            <div className="page__container_block1"></div>
            <div className="page__container_gridcontainer">
                <div className="page__container_gridcontainer-block1"></div>
                <div className="page__container_gridcontainer-block2"></div>
                
            </div>

        </div>
      </div>
  )
}

export default Page;