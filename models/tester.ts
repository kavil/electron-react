import { fetchInit, getUserList2 } from '../service/api';

const Model = {
	namespace: 'tester',
	state: {
		count: 1,
		list: [],
		content: null
	},
	subscriptions: {
		Init(Subscriptions) {
			const { dispatch, history } = Subscriptions;
			history.listen((location: any) => {});
		}
	},

	effects: {
		*fetchInit(Action, Effects) {
			const { type, payload } = Action;
			const { call, put, select } = Effects;
			const dataBack = yield call(fetchInit, { a: 1 });
			const dataBack2 = yield call(getUserList2, { a: 1 });
			yield put({
				type: 'loadList',
				payload: {
					list: dataBack.data.result,
					content: dataBack2.data.result.content
				}
			});
		}
	},

	reducers: {
		add(state, action) {
			const count = state.get('count');
			const newState = state.set('count', count + 1);
			return newState;
		},
		loadList(state, action) {
			const {
				payload: { list, content }
			} = action;
			const count = state.get('count');
			const newState = state.set('list', list).set('content', content);
			return newState;
		}
	}
};
export default Model;
