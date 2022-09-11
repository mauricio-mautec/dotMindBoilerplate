import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'
import { useMemo } from 'react'

// apolloClient é do tipo ApolloClient e pode receber dados em acordo com NormalizedCacheObject
let apolloClient: ApolloClient<NormalizedCacheObject>

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined', // servidor? -> true
    // o link permite trabalhar com links isomórficos (schemas no servidor e api client no client)
    link: new HttpLink({
      uri: 'http://localhost:1337/graphql'
    }), // processa no SSR, guarda no cache e se o client precisar envia a partir do cache
    cache: new InMemoryCache()
  })
}

// Evita nova inicialização do ApolloClient e aproveita os dados
export function initializeApollo(initialState = {}) {
  // verificar se já existe a instancia: se já existir apolloClient, use-o, senão createApolloClient
  const apolloClientGlobal = apolloClient ?? createApolloClient()

  // recuperar o cache caso exista estado inicial
  // hydrate occurs here
  if (initialState) {
    apolloClientGlobal.cache.restore(initialState)
  }
  // caso SSR, retorna direto o apolloClientGlobal
  // sempre inicializando no SSR com cache limpo
  if (typeof window === 'undefined') return apolloClientGlobal

  apolloClient = apolloClient ?? apolloClientGlobal

  return apolloClient
}

// Caso os dados não mudem, não inicializa um novo apolloClient
export function useApollo(initialState = {}) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
