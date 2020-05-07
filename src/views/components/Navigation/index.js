import React from 'react';
import { Link } from 'react-router-dom';
import motionLogo from 'images/motion_logo.png';

const Navigation = () => {
  return (
    <div className="navigator">
      <Link to="/home" style={{ display: 'inline-block' }}>
        <img
          src={motionLogo}
          style={{ width: '75px', height: '100%' }}
          alt="motion_logo"
        ></img>
      </Link>
      <nav id={'navigation'} style={{ display: 'inline-block' }}>
        <div id="menuContainer" className="horizontal">
          <ul className="nav navbar-nav navbar-right menu-top">
            <li className="navi_item">
              <Link to="/home">Home</Link>
            </li>
            <li className="navi_item">
              <Link to="/notices/1/15">공지사항 </Link>
            </li>
            <li className="navi_item">
              <Link to="/boards">게시판</Link>
            </li>
            <li className="navi_item">
              <Link to="/calendar">일정</Link>
            </li>
            <li className="navi_item">
              <Link to="/edu/1/15">교육</Link>
            </li>
            <li className="navi_item">
              <Link to="/exams">기출문제</Link>
            </li>
            <li className="navi_item">
              <Link to="/equipments">물품대여</Link>
            </li>
            <li className="navi_item">
              <Link to="/gallery">사진첩</Link>
            </li>
            {/* <li className = { "navMenu" } >
                                    { this.state.userRoll ? (<Link className="menuText" onClick={() => {this.logout()}}>로그아웃</Link>) : (<Link className="login menuText" href="/login">로그인</Link>)}
                                </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
