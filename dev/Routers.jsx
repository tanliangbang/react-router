import React, {Component, PropTypes} from 'react';
import { Router, Route, IndexRoute} from 'react-router' // 路由
//首页
import Index from './Pages/Index/Index';

//开始
import Start from './Pages/Start/Index';

import htmlRes  from './Pages/htmlRes/Index';
import Detail   from './Pages/htmlRes/Detail';
import Register   from './Pages/User/Register';
//redux案例展示
import ReduxDom   from './Pages/ReduxDom/ReduxDom';

//组件
import Components from './Pages/Components/Index';
import Htmls      from './Pages/Components/Htmls';
import Icons      from './Pages/Components/Icons';
import Language      from './Pages/Components/Language';
import HtmlsBtn   from './Pages/Components/HtmlsBtn';
import HtmlsTable from './Pages/Components/HtmlsTable';
import Forms      from './Pages/Components/Forms';
import Plus       from './Pages/Components/Plus';

//帮助
import Help from './Pages/Help/Index';

//App为入口
import App from './Pages/App';



export const routes = {
	path: '/',
	component: App,
	indexRoute: {component: Index},
	childRoutes: [{
		path: '/index',
		component: Index,
	}, {
		path: '/htmlRes',
		component: htmlRes
	}, {
		path: 'htmlResDetail/:id',
		component: Detail
	},
	{
		path: 'register',
		component: Register
	},
	{
			path: '/components',
			component: Components,
			childRoutes: [{
				path: 'plus',
				component: Plus,
			}]
	}
	]
}

class Routers extends Component {

	render() {
		return (
			<Router history={this.props.history} routes={routes}>

			</Router>
		);
	}
}

export default Routers;


/* <Route path={HOME_PATH+"/"} component={App}>
 <IndexRoute component={Index} />
 <Route path="index" component={Index}/>
 <Route path="start" component={Start}/>
 <Route path="test" component={htmlRes}/>
 <Route path="detail/:id" component={Detail}/>

 <Route path="components" component={Components}>
 <Route path="htmls" component={Htmls}>
 <Route path="btn" component={HtmlsBtn}/>
 <Route path="table" component={HtmlsTable}/>
 </Route>
 <Route path="forms" component={Forms}/>
 <Route path="plus" component={Plus}/>
 <Route path="icons" component={Icons}/>
 <Route path="language" component={Language}/>
 </Route>
 <Route path="help" component={Help}/>
 <Route path="reduxdom" component={ReduxDom}/>
 </Route>*/