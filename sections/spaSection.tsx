/*
* Created by cesarmarcial on 05/03/22
*/

// imports

// interface

// Beginning of component: spaSection
import SectionHeader from "../components/sectionHeader";
import ArticleReasonHeader from "../components/articleReasonHeader";
import React, {FC} from "react";

const SpaSection: FC = () => {
    return (
        <section>
            <article>
                <SectionHeader text={'SPA - FLEX STRIP'} date={'March 5, 2022'}/>
                <ArticleReasonHeader text="Why I did this"/>
                <p>The main objective of this project is to create a template for small businesses with a small catalog of products. I used the concept of a store called "FLEX STRIP" that sells PVC plastic rolls, with 3 basic pages: Home, Products and Contact.</p>
                <p>I liked the page transitions implemented, it makes a very small application feel fluid and interactive.</p>
                <p>Some tailwindcss doesn't work (as usual), I will fix it tomorrow.</p>
                <p>Here's the <a href={'https://flexstrip.vercel.app'} className="text-orange-500">link</a> to the
                    website, and here's the <a href={'https://github.com/mar-cial/flexstrip'} className="text-orange-500">repo.</a> </p>


            </article>
        </section>
    )
}

export default SpaSection
