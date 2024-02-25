/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import { StaticImage } from 'gatsby-plugin-image';

const Bio = () => {
    const data = useStaticQuery(graphql`
        query BioQuery {
            site {
                siteMetadata {
                    author {
                        name
                    }
                }
            }
        }
    `);

    const author = data.site.siteMetadata?.author;

    return (
        <div className='bio'>
            {author?.name && (
                <p>
                    Site développé par <strong>{author.name}</strong>{' '}
                </p>
            )}
        </div>
    );
};

export default Bio;
