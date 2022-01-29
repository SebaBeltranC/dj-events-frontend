import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Layout.module.css';

interface Props {
  title?: string;
  keywords?: string;
  description?: string;
  children: React.ReactElement;
}
const Layout: React.FC<Props> = ({
  title,
  keywords,
  description,
  children,
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: 'DJ Events | Find parties',
  description: 'Find the latest DJ and other musical events',
  keywords: 'DJ, music, events',
};

export default Layout;
