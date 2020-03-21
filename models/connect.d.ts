import { AnyAction } from 'redux';
import { Dispatch } from 'dva';
import { Route } from 'react-router-dom';
import { RouteComponentProps as BasicRouteProps, RouteProps, match } from 'react-router-dom';
type IncludeRoute = 'component' | 'exact' | 'path';
type RouteType = Pick<RouteProps, IncludeRoute>;
// eslint-disable-next-line @typescript-eslint/ban-types
interface RouterTypes<T extends Object = {}, P = {}> extends BasicRouteProps {
	computedMatch?: match<P>;
	route?: RouteType & T;
}

import { StateType as MainStateType } from './main';

export interface Loading {
	global: boolean;
	effects: { [key: string]: boolean | undefined };
	models: {
		main?: boolean;
		tester?: boolean;
	};
}

export interface ConnectState {
	loading: Loading;
	main: MainStateType;
}

/**
 * @type T: Params matched in dynamic routing
 */
export interface ConnectProps<T = {}> extends Partial<RouterTypes<Route, T>> {
	dispatch?: Dispatch<AnyAction>;
}
