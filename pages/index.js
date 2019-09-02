import Link from 'next/link';
import HeadTitle from './headtitle.js';

const PostLink = props => (
  <Link href={`/${props.link}`}>
    <li style={props.style}>
    </li>
  </Link>
);

const styles = {
  header: {
    textAlign: 'center'
  },
  proton: {
    listStyleType: 'none',
    'padding': '60px',
    'margin': '20px',
    'border': '5px solid #111111',
    boxSizing: 'border-box',
    backgroundImage: `url('https://upload.wikimedia.org/wikipedia/en/thumb/4/49/PROTON_logo_2016.svg/1200px-PROTON_logo_2016.svg.png')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  },
  perodua: {
    listStyleType: 'none',
    'padding': '60px',
    'margin': '20px',
    'border': '5px solid #111111',
    boxSizing: 'border-box',
    backgroundImage: `url('https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Perodua_logo_2008.svg/1200px-Perodua_logo_2008.svg.png')`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  },
  footer: {
    'position': 'fixed',
    'left': 0,
    'bottom': 0,
    'width': '100%',
    textAlign: 'center',
  }
}

const Index = () => (
    <div>
      <HeadTitle title='malaysiacarswiki'></HeadTitle>
      
      <h1 style={styles.header}> Malaysia Cars WIKI </h1>
      
      <PostLink link='proton' title='Proton' style={styles.proton}> </PostLink>
      <PostLink link='perodua' title='Perodua' style={styles.perodua}> </PostLink>

      <p style={styles.footer}> Copyright © 2019 Cheng Chris. All rights reserved.</p>
    </div>
);
  
export default Index;