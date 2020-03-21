import React, { PureComponent } from 'react';
import { connect } from 'dva';
import './Index.scss';
import { Tag } from 'antd';
import { ConnectState, ConnectProps } from '../../models/connect';
import { StateType } from '../../models/main';
import intl from 'react-intl-universal';

type IndexProps = StateType & ConnectProps;

class Index extends PureComponent<IndexProps> {
	componentDidMount() {
		console.log('main-render1', this.props);
	}

	render() {
		return (
			<div className="page">
				<h1 className="title">ts-react-dva脚手架</h1>
				<div className="tag">
					<Tag color="volcano">typescript</Tag>
					<Tag color="magenta">react</Tag>
					<Tag color="red">dva2.6</Tag>
					<Tag color="orange">webpack4</Tag>
					<Tag color="gold">antd</Tag>
					<Tag color="lime">scss</Tag>
					<Tag color="green">fetch</Tag>
					<Tag color="green">{intl.get('main.hello')}</Tag>
				</div>
			</div>
		);
	}
}

export default connect(({ main }: ConnectState) => ({
	...main
}))(Index);
