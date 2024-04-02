import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { LoadingIcon, ClearIcon, SearchIcon } from '~/components/Icons';

console.log('images:', images.logo);

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok Logo" />
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" />
                    <span className={cx('loading')}>
                        <LoadingIcon />
                    </span>
                    <span className={cx('clear')}>
                        <ClearIcon />
                    </span>
                    <button className={cx('search-btn')}>
                        <SearchIcon />
                    </button>
                </div>
                <div className={cx('action')}>Action</div>
            </div>
        </div>
    );
}

export default Header;
