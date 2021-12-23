import styles from '../../styles/Planos.module.scss';
import '../../../i18n';
import { useTranslation } from 'react-i18next';
import { availableLanguages } from '../../../i18n';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
export default function Planos() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Header></Header>
      <main className={styles.pageConteiner}>
        <h1>{t('crie')}</h1>
      </main>
      <Footer></Footer>
    </>
  );
}
