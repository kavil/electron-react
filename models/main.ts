// import { remote } from 'electron';
import { Effect } from 'dva';
import { Reducer } from 'redux';
// const eubCtrl = remote.require('./main').controller;
import * as MainCtrl from '../../../main/controller';

// const mid = {};
// for (const key in eubCtrl) {
// 	if (eubCtrl.hasOwnProperty(key)) {
// 		mid[key] = eubCtrl[key];
// 	}
// }

export interface ModelType {
	namespace: string;
	state: StateType;
	effects: {
		add: Effect;
	};
	reducers: {
		save: Reducer;
	};
}

export interface StateType {
	// eubCtrl: EubCtrl;
}

export interface EubCtrl {
	Base: MainCtrl.Base;
	Common: MainCtrl.Common;
	File: MainCtrl.File;
	Tester: MainCtrl.Tester;
	Login: MainCtrl.WorkerLogin;
	UnattendMain: MainCtrl.UnattendMainController;
}

export interface IntlType {
	get: Function;
	getHTML: Function;
	getInitOptions: Function;
	formatHTMLMessage: Function;
	formatMessage: Function;
	load: Function;
	determineLocale: Function;
	init: Function;
}

const Model: ModelType = {
	namespace: 'main',
	state: {
		// eubCtrl: mid as EubCtrl,
	},
	effects: {
		*add({ payload }, { put }) {
			yield put({
				type: 'save',
				payload
			});
		}
	},
	reducers: {
		save(state, { payload }) {
			return {
				...state,
				...payload
			};
		}
	}
};
export default Model;
