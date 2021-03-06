import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Demo = lazy(() => import('../pages/Demo'))
const Test = lazy(() => import('../pages/Test'))

class routes extends React.Component{
	render() {	
		return (<>
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path="/" component={Demo}></Route>
                        <Route path="/test" component={Test}></Route>
                    </Switch>
                </Suspense>
            </Router>
        </>)
	}
}

export default routes;