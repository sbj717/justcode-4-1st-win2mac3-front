import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretDown,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="header">
      <p className="header-logo">
        <Link to="/main">
          <img src="./images/wecoview.svg" alt="logo" />
        </Link>
      </p>
      <ul className="user-service">
        <li className="user-cart">
          <Link to="#">
            <FontAwesomeIcon icon={faShoppingBasket} />
          </Link>
        </li>
        <li>
          <Link to="/signup">회원가입</Link>
        </li>
        <li>
          <Link to="/login">로그인</Link>
        </li>
        <li>
          <Link to="#">
            고객센터 <FontAwesomeIcon icon={faCaretDown} />
          </Link>
        </li>
      </ul>
    </div>
  );
};
export { Header };
