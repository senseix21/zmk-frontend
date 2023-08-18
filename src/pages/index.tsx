import Image from 'next/image'
import { Inter } from 'next/font/google'
import RootLayout from '@/components/layouts/RootLayout'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import FeaturedService from '@/components/FeaturedService'
import { data } from 'autoprefixer'
import ElectricalServicePricingSection from '@/components/ServicePricing'
import Projects from '@/components/Projects'
import ContactSection from '@/components/ContactSection'

interface HomeProps {
  data: any
}


type HomeType = React.FC<HomeProps> & {
  getLayout: (children: React.ReactNode) => React.ReactNode;
};


const Home: HomeType = ({ data }) => {
  return (
    <main>
      <Hero />
      <Stats />
      <div className='bg-secondary'>
        <FeaturedService data={data} />
      </div>
      <ElectricalServicePricingSection />
      <div className='bg-secondary'>
        <Projects />
      </div>
      <ContactSection />
    </main>
  )
}

export default Home;


Home.getLayout = function (children: any) {
  return (
    <RootLayout>{children}</RootLayout>
  )
}

export const getStaticProps = async () => {
  try {
    const res = await fetch('https://zmk-electrical-backend.vercel.app/services');
    const data = await res.json();

    // Return the fetched data as props
    return {
      props: {
        data, // Make sure to use the correct key for your data
      },
    };

  } catch (error) {
    // Handle any errors that might occur during the data fetching process
    console.error('Error fetching data:', error);
    return {
      props: {
        data: [], // Return an empty array or default value to avoid errors
      },
    };
  }
};
