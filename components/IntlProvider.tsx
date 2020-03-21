import React from 'react';
import intl from 'react-intl-universal';
import { Spin } from 'antd';

import * as ZHCN from '../locales/zh-CN';
import * as ENUS from '../locales/en-US';

// locale data
const locales = {
	'zh-CN': ZHCN,
	'en-US': ENUS
};

interface IState {
	loadingLocales: boolean;
}

interface IProps {}

export default class IntlProvider extends React.Component<IProps, IState> {
	state = {
		loadingLocales: false
	};
	componentDidMount() {
		this.setState({
			loadingLocales: true
		});
		this.loadLocales();
	}

	loadLocales() {
		intl.init({
			currentLocale: 'zh-CN',
			locales
		}).then(() => {
			this.setState({
				loadingLocales: false
			});
		});
	}

	render() {
		const { children } = this.props;
		const { loadingLocales } = this.state;
		if (loadingLocales) {
			return <Spin spinning={true} />;
		}
		return <>{children}</>;
	}
}
