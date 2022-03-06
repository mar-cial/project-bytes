import PageTitle from '../components/pageTitle';
import CounterSection from '../sections/counterSection';
import SharedLayoutSection from '../sections/sharedLayoutSection';
import NetworkingSection from '../sections/networkingSection';
import {motion} from 'framer-motion';
import {FC} from 'react';
import CartSection from '../sections/cartSection';
import SpaSection from "../sections/spaSection";

const Home: FC = () => {
    return (
        <motion.main className="grid gap-6" layout>
            <PageTitle title="Home"/>

            {/* Counter section */}
            <CounterSection/>

            {/* Shared layout section */}
            <SharedLayoutSection/>

            {/* Networking section */}
            <NetworkingSection/>

            {/* Typescript cart section */}
            <CartSection/>

            {/* SPA */}
            <SpaSection />
        </motion.main>
    );
};

export default Home;
