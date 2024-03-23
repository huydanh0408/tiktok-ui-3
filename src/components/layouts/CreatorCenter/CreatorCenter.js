import classNames from 'classnames/bind';

import styles from './CreatorCenter.module.scss';
import { Header, Sidebar } from './';

const cx = classNames.bind(styles);

function CreatorCenter({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default CreatorCenter;
