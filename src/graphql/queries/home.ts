import { gql } from '@apollo/client'

//# Nota de utilização
//Após criar uma nova query, é preciso gerar/atualizar os schemas e types novos
//## Passos para atualizar
//no terminal execute:
//yarn schema:download
//yarn type:generate
export const QUERY_HOME = gql`
  query QueryHome {
    banners {
      data {
        attributes {
          image {
            data {
              attributes {
                url
              }
            }
          }
          title
          subtitle
          button {
            label
            link
          }
          ribbon {
            label
            color
            size
          }
        }
      }
    }
  }
`
