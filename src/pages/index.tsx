import * as React from 'react';

import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import Seo from '../components/seo';

const Index = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`;

    return (
        <Layout location={location} title={siteTitle}>
            <Bio />
            <ol style={{ listStyle: `none` }}>
                <h3>Excalibur games</h3>
                <li>
                    <Link to='space-duel'>Space Duel</Link>
                </li>

                <h3>B2B Websites</h3>
                <li>
                    <a href='https://www.mlemieux.qc.ca/'>MLemieux</a>
                </li>

                <h3>B2C Websites</h3>
                <li>
                    <a href='https://www.century-heating.com/'>
                        Century-Heating
                    </a>
                    <a href='https://www.occanada.com/'>OCC</a>
                    <a href='https://www.drolet.ca/'>Drolet</a>
                    <a href='https://www.englander-stoves.com/'>Enlander</a>
                    <a href='https://www.myfireplaceproducts.com/'>MFP</a>
                </li>
            </ol>
        </Layout>
    );
};

export default Index;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title='Home page' />;

export const pageQuery = graphql`
    {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
