import Navbar from '@/scenes/navbar'
import Hero from '@/scenes/hero'
import Benefits from '@/scenes/benefits'
import NewCeramics from '@/scenes/newCeramics'
import PopularProducts from '@/scenes/popularProducts'
import SignUp from '@/scenes/signup'
import Features from '@/scenes/features'
import Footer from '@/scenes/footer'
import ScrollToTop from 'react-scroll-to-top'
import { ArrowUpIcon } from "@heroicons/react/24/solid"

const Home = () => {
  return (
    <div className="app container bg-white">
        <Navbar />
        <ScrollToTop className='flex justify-center items-center' smooth component={<ArrowUpIcon className='h-6 w-6 text-dark-primary' />}/>
        <Hero /> 
        <Benefits />
        <NewCeramics heading={'New ceramics'}/>
        <PopularProducts />
        <SignUp />
        <Features isPictureRight={true}/>
        <Footer />
      </div>
  )
}

export default Home