import React from 'react'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import loadable from 'react-loadable'
import Layout from './shared/components/Layout'

function Router() {
  return (
    <HashRouter>
      <Layout>
        <Switch>
          <Route exact path='/' render={() => <Redirect to='home' />} />
          <Route path='/home' component={
            loadable({
              loader: () => System.import('./home/App'),
              LoadingComponent: () => null
            })
          } />
          <Route path='/explore' component={
            loadable({
              loader: () => System.import('./explore/App'),
              LoadingComponent: () => null
            })
          } />
          <Route path='/about' component={
            loadable({
              loader: () => System.import('./about/App'),
              LoadingComponent: () => null
            })
          } />
        </Switch>
      </Layout>
    </HashRouter>
  )
}

export default Router
