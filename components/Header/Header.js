import { useState } from 'react';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { Container, NavigationMenu } from '../../components';
import styles from './Header.module.scss';

let cx = classNames.bind(styles);

export default function Header({
  title,
  description,
  menuItems
}) {
  const [isNavShown, setIsNavShown] = useState(false);

  return (
    <header className={cx('component')}>
      <Container>
        <div className='background-animation'>
          <div className="bg-blob1"></div>
          <div className="bg-blob2"></div>
          <div className="bg-blob3"></div>
        </div>
        {/* <div className={cx('navbar')}>
          <div className={cx('brand')}>
            <Link href="/">
              <a className={cx('title')}>{title}</a>
            </Link>
            {description && <p className={cx('description')}>{description}</p>}
          </div>
          <button
            type="button"
            className={cx('nav-toggle')}
            onClick={() => setIsNavShown(!isNavShown)}
            aria-label="Toggle navigation"
            aria-controls={cx('primary-navigation')}
            aria-expanded={isNavShown}
          >
            ☰
          </button>
          <NavigationMenu
            className={cx(['primary-navigation', isNavShown ? 'show' : undefined])}
            menuItems={menuItems}
          />
        </div> */}
      </Container>
    </header>
  );
}
