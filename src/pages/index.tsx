import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { Header, Hero, Modal, Row, SubscriptionPlan } from 'src/components'
import { IMovie } from 'src/components/interfaces/app.interface';
import { API_REQUEST } from 'src/services/api.service';
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import { useInfoStore } from '../store/index';

export default function Home({ trending, topRated, tvTop_rated, popular, discover, documentary, comedy, family, history }: HomeProps): JSX.Element {
  const { isLoading } = useContext(AuthContext)
  const { setModal, modal } = useInfoStore()
  const subscription = false;


  if (isLoading) return <>{null}</>
  if (!subscription) return <SubscriptionPlan />

  return (
    <>
      <div className="relativ min-h-screen" >
        <Head>
          <title>Movie - HOME</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/logo.svg" />
        </Head>
        <Header />
        <main className='relative pb-24 lg:space-y-24 '>
          <div className='pl-4 lg:pl-16'>
            <Hero trending={trending} />
          </div>
          <section>
            <Row title='Top Rated' movies={topRated} />
            <Row title='TV Shows' movies={tvTop_rated} isBig={true} />
            <Row title='Popular Movies' movies={popular} />
            <Row title='Discover Movies' movies={discover} isBig={true} />
            <Row title='Documentary' movies={documentary} />
            <Row title='Comedy' movies={comedy} isBig={true} />
            <Row title='Family' movies={family} />
            <Row title='History' movies={history} isBig={true} />
          </section>
        </main>
        {modal && <Modal />}
      </div>
    </>
  )
}



export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const [trending, topRated, tvTop_rated, popular, discover, documentary, comedy, family, history] = await Promise.all([
    fetch(API_REQUEST.trending).then(res => res.json()),
    fetch(API_REQUEST.top_rated).then(res => res.json()),
    fetch(API_REQUEST.tv_top_rated).then(res => res.json()),
    fetch(API_REQUEST.popular).then(res => res.json()),
    fetch(API_REQUEST.discover).then(res => res.json()),
    fetch(API_REQUEST.documentary).then(res => res.json()),
    fetch(API_REQUEST.comedy).then(res => res.json()),
    fetch(API_REQUEST.family).then(res => res.json()),
    fetch(API_REQUEST.history).then(res => res.json())
  ])

  return {
    props: {
      trending: trending.results,
      topRated: topRated.results,
      tvTop_rated: tvTop_rated.results,
      popular: popular.results,
      discover: discover.results,
      documentary: documentary.results,
      comedy: comedy.results,
      family: family.results,
      history: history.results,
    },
  };
};

interface HomeProps {
  trending: IMovie[];
  topRated: IMovie[];
  tvTop_rated: IMovie[];
  popular: IMovie[];
  discover: IMovie[];
  documentary: IMovie[];
  comedy: IMovie[];
  family: IMovie[];
  history: IMovie[];
}