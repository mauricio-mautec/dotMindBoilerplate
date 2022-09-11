import { gql } from '@apollo/client'

export const QUERY_GAMES = gql`
  query QueryGames($limit: Int!) {
    games(pagination: { limit: $limit }) {
      data {
        id
        attributes {
          name
          slug
          cover {
            ... on UploadFileEntityResponse {
              data {
                id
                attributes {
                  url
                }
              }
            }
          }
          developers {
            ... on DeveloperRelationResponseCollection {
              data {
                attributes {
                  name
                }
              }
            }
          }
          price
        }
      }
    }
  }
`
export const QUERY_GAME_BY_SLUG = gql`
  query QueryGameBySlug($slug: String!) {
    games(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          name
          short_description
          description
          price
          rating
          release_date
          galery {
            data {
              attributes {
                src: url
                label: alternativeText
              }
            }
          }
          cover {
            data {
              attributes {
                src: url
              }
            }
          }
          developers {
            data {
              attributes {
                name
              }
            }
          }
          publisher {
            data {
              attributes {
                name
              }
            }
          }
          categories {
            data {
              attributes {
                name
              }
            }
          }
          platforms {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`
