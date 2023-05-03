import { useState } from 'react';
import Link from 'next/link';
import { Container, NavigationMenu } from '../../components';

export default function Header({
  title,
  description,
  menuItems
}) {
  const [isNavShown, setIsNavShown] = useState(false);

  return (
    <header>
      <Container>
        <div className='background-animation'>
          <div className="bg-blob1"></div>
          <div className="bg-blob2"></div>
          <div className="bg-blob3"></div>
        </div>
        <div className={'navbar'}>
          <div
            type="button"
            className={`nav-toggle ${isNavShown ? 'active' : ''} `}
            onClick={() => setIsNavShown(!isNavShown)}
            aria-label="Toggle navigation"
            aria-controls={'primary-navigation'}
            aria-expanded={isNavShown}
          >
           {isNavShown ? '✕' : '☰'} 
          </div>
          <NavigationMenu
            className={`primary-navigation ${isNavShown ? 'show' : ''}`}
            menuItems={menuItems}
          />
        </div>
      </Container>
    </header>
  );
}
