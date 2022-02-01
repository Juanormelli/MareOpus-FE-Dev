import Layout from '@/src/components/Layout';
import styles from '../../styles/Terms.module.scss';
import Link from 'next/link';

import { useTranslation, withTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ParsedUrlQuery } from 'querystring';
import { GetServerSidePropsResult, PreviewData } from 'next';
import { IncomingMessage, ServerResponse } from 'http';
import { NextApiRequestCookies } from 'next/dist/server/api-utils';

type CustomGetServerSideProps<
  P extends { [key: string]: any } = { [key: string]: any },
  Q extends ParsedUrlQuery = ParsedUrlQuery
> = (
  context: GetServerSidePropsContext<Q>
) => Promise<GetServerSidePropsResult<P>>;

type GetServerSidePropsContext<Q extends ParsedUrlQuery = ParsedUrlQuery> = {
  req: IncomingMessage & {
    cookies: NextApiRequestCookies;
  };
  res: ServerResponse;
  params?: Q;
  query: ParsedUrlQuery;
  preview?: boolean;
  previewData?: PreviewData;
  resolvedUrl: string;
  locale: string; // This is where the magic happens.
  locales?: string[];
  defaultLocale?: string;
};

function Privacy() {
  const { t } = useTranslation('privacy');
  return (
    <Layout pageTitle="Termos">
      <section className={styles.SectionContainer}>
        <div className={styles.Container}>
          <h1 className={styles.Title}>{t('privacys')}</h1>
          <div className={styles.Content}>
            <p>
              {t('firstA')} <Link href={'/'}> https://mereopus.com</Link>,{' '}
              {t('firstB')}
            </p>
            <ol>
              <li>
                <span>{t('definitions')}</span>
                <ol>
                  <li>{t('11definit')}</li>
                </ol>
                <ul>
                  <li>{t('12definit')}</li>
                  <li>{t('13definit')}</li>
                  <li>{t('14definit')}</li>
                  <li>{t('15definit')}</li>
                  <li>{t('16definit')}</li>
                  <li>{t('17definit')}</li>
                  <li>{t('18definit')}</li>
                </ul>
              </li>
              <li>
                <span>{t('object')}</span>
                <ol>
                  <li>{t('21object')}</li>
                </ol>
              </li>
              <li>
                <span>{t('acceptance')}</span>
                <ol>
                  <li>{t('31accept')}</li>
                  <li>{t('32accept')}</li>
                  <li>
                    {t('33Aaccept')}{' '}
                    <Link href={'/privacy'}>{t('privacy')}</Link>{' '}
                    {t('33Baccept')}
                    <Link href={'/copyright'}>{t('copyright')}</Link>,
                    {t('33Caccept')}
                  </li>
                  <li>
                    {t('34Aaccept')}
                    <Link href={'/privacy'}>{t('privacy')}</Link>{' '}
                    {t('34Baccept')}
                    <Link href={'/copyright'}>{t('copyright')}</Link>.
                  </li>
                </ol>
              </li>
              <li>
                <span>{t('accessplat')}</span>
                <ol>
                  <li>{t('41accessplat')}</li>
                  <li>{t('42accessplat')}</li>
                  <li>{t('43accessplat')}</li>
                  <li>{t('44accessplat')}</li>
                  <li>{t('45accessplat')}</li>
                  <li>{t('46accessplat')}</li>
                  <li>{t('47accessplat')}</li>
                  <li>
                    {t('48Aaccessplat')}
                    <Link href={'/privacy'}>{t('privacy')}</Link>{' '}
                    {t('34Baccept')}
                    <Link href={'/copyright'}>{t('copyright')}</Link>,
                    {t('48Baccessplat')}
                  </li>
                  <li>{t('49accessplat')}</li>
                  <li>{t('410accessplat')}</li>
                  <li>{t('411accessplat')}</li>
                  <li>{t('412accessplat')}</li>
                  <li>{t('413accessplat')}</li>
                  <li>{t('414accessplat')}</li>
                  <li>{t('415accessplat')}</li>
                  <li style={{ listStyle: 'none' }}>
                    {t('416accessplat')}
                    <ol className={styles.letra}>
                      <li> {t('416Aaccessplat')}</li>
                      <li> {t('416Baccessplat')}</li>
                      <li> {t('416Caccessplat')}</li>
                    </ol>
                  </li>
                </ol>
              </li>
              <li>
                <span>{t('rules')}</span>
                <ol>
                  <li>
                    {t('51rules')}
                    <Link href={'/privacy'}>{t('privacy')}</Link>,{' '}
                    {t('33Baccept')}
                    <Link href={'/copyright'}>{t('copyright')}</Link>.
                  </li>

                  <li>{t('52rules')}</li>
                  <li>{t('53rules')}</li>
                  <li>{t('54rules')}</li>
                  <li>{t('55rules')}</li>
                  <li>
                    {t('56rules')}
                    <Link href={'/privacy'}>{t('privacy')}</Link>.
                  </li>
                  <li>
                    {t('57Arules')}
                    <Link href={'/privacy'}>{t('privacy')}</Link>,
                    <Link href={'/copyright'}>{t('copyright')}</Link>
                    {t('57Brules')}
                  </li>
                  <li>{t('58rules')}</li>
                  <li>{t('59rules')}</li>
                </ol>
              </li>
              <li>
                <span>{t('abuse')}</span>
                <ol>
                  <li>
                    {t('61Aabuse')}
                    <Link href={'/'}> https://mareo.com/denuncias</Link>,{' '}
                    {t('61Babuse')}
                    <Link href={'/'}> contato@mareo.com</Link>
                    {t('61Cabuse')}
                  </li>
                  <li> {t('62abuse')}</li>
                  <li>{t('63abuse')}</li>
                </ol>
              </li>
              <li>
                <span>{t('duration')}</span>
                <ol>
                  <li>{t('71duration')}</li>
                  <li>
                    {t('72Aduration')}{' '}
                    <Link href={'/privacy'}>{t('privacy')}</Link>,{' '}
                    {t('33Baccept')}
                    <Link href={'/copyright'}>{t('copyright')}</Link>{' '}
                    {t('72Bduration')}
                  </li>
                  <li>{t('73duration')}</li>
                  <li>{t('74duration')}</li>
                </ol>
              </li>
              <li>
                <span>{t('exclusion')}</span>
                <ol>
                  <li>{t('81exclusion')}</li>
                  <li>{t('82exclusion')}</li>
                  <li>{t('83exclusion')}</li>
                  <li>{t('84exclusion')}</li>
                  <li>{t('85exclusion')}</li>
                  <li>{t('86exclusion')}</li>
                </ol>
              </li>
              <li>
                <span>{t('talk')}</span>
                <ol>
                  <li>
                    {t('91talk')} <Link href={'/privacy'}>{t('privacy')}</Link>,{' '}
                    {t('34Baccept')}
                    <Link href={'/copyright'}>{t('copyright')}</Link>.
                  </li>
                  <li>
                    {t('92Atalk')}{' '}
                    <Link href={'/'}>https://mareo.com/denuncias</Link>,{' '}
                    {t('92Btalk')}
                    <Link href={'/'}>contato@mareo.com</Link>.
                  </li>
                </ol>
              </li>
              <li>
                <span>{t('forum')}</span>
                <ol>
                  <li>{t('101forum')}</li>
                </ol>
              </li>
              <li>
                <span>{t('final')}</span>
                <ol>
                  <li>{t('111final')}</li>
                  <li>{t('112final')}</li>
                  <li>
                    {t('113Afinal')} {t('privacy')} {t('113Afinal')}{' '}
                    {t('copyright')} {t('113Bfinal')}
                  </li>
                </ol>
              </li>
            </ol>
            <div className={styles.bemvindo}>
              <h2 className={styles.subtitle}>{t('welcome')}</h2>
              <span>{t('data')}</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getServerSideProps: CustomGetServerSideProps = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      'privacy',
      'menu',
      'footer',
      'common',
      'popups',
      '404',
      '500',
    ])),
  },
});

export default withTranslation([
  'privacy',
  'menu',
  'footer',
  'common',
  'popups',
  '404',
  '500',
])(Privacy);
