import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { routes } from '../../routes/config'
import { Header } from 'components/Header/Header'
import './style.css'

export const App = () => {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <Header />

                <Switch>
                    {routes.map((route: any, index: any) =>
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.component}
                        />
                    )}
                </Switch>
            </BrowserRouter>
        </div>
    )
}