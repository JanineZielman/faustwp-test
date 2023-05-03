import Link from 'next/link';

export default function NavigationMenu({ menuItems, className }) {
  if (!menuItems) {
    return null;
  }

  return (
    <nav
      className={className}
      role="navigation"
      aria-label={`${menuItems[0]?.menu?.node?.name} menu`}>
      <ul className='menu'>
        {menuItems.map((item) => {
          const { id, url, label } = item;

          if (!item.hasOwnProperty('__typename')) {
            return null;
          }

          return (
            <li key={id} className='menu-link'>
              <Link href={url.replace('https://apria.artez.nl', '') ?? ''}>{label ?? ''}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
