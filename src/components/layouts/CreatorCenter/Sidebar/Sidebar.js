import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>SidebarContent CreatorCenter</div>
        </div>
    );
}

export default Sidebar;
