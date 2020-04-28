import React from 'react';
import { Link } from 'react-router-dom';

const Navigator = () => {
  return (
    <div className="navigator">
      <nav id={'navigation'}>
        {/* <LogoContainer/> */}
        <div id="menuContainer" className={'horizontal'}>
          <ul className="nav navbar-nav navbar-right menu-top">
            <li className="navi_item">
              <Link href="/home">Home</Link>
            </li>
            <li className="navi_item">
              <Link href="/notices/1/15">공지사항 </Link>
            </li>
            <li className="navi_item">
              <Link href="/boards">게시판</Link>
            </li>
            <li className="navi_item">
              <Link href="/calendar">일정</Link>
            </li>
            <li className="navi_item">
              <Link href="/edu/1/15">교육</Link>
            </li>
            <li className="navi_item">
              <Link href="/exams">기출문제</Link>
            </li>
            <li className="navi_item">
              <Link href="/equipments">물품대여</Link>
            </li>
            <li className="navi_item">
              <Link href="/gallery">사진첩</Link>
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

export default Navigator;
