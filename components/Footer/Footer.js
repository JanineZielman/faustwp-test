import { Container, NavigationMenu } from '../../components';


export default function Footer({ title, menuItems }) {
  return (
    <footer className="footer">
      <Container>
        {menuItems.map((item, i) => {
          return(
            <div dangerouslySetInnerHTML={{ __html: item.text ?? '' }} />
          )
        })}
      </Container>
    </footer>
  );
}
