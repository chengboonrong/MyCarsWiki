import Link from 'next/link';
import HeadTitle from './headtitle.js';

const PostLink = props => (
  <li>
    <Link href={`/${props.link}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Index = () => (
    <div>
      <HeadTitle title='malaysiacarswiki'></HeadTitle>
      <h1> Malaysia Cars WIKI </h1>
      <PostLink link='proton' title='Proton'> </PostLink>
      <PostLink link='perodua' title='Perodua'> </PostLink>
    </div>
);
  
export default Index;