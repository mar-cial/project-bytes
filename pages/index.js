import PageTitle from '../components/pageTitle';
import CounterSection from '../sections/counterSection';
import SharedLayoutSection from '../sections/sharedLayoutSection';
import NetworkingSection from '../sections/networkingSection';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.main layout>
      <PageTitle title="Home" />

      {/* Counter section */}
      <CounterSection />

      {/* Shared layout section */}
      <SharedLayoutSection />

      {/* Networking section */}
      <NetworkingSection />
    </motion.main>
  );
};

export default Home;
