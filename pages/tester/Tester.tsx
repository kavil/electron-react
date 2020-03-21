import * as React from 'react';
import { connect } from 'dva';
import './Tester.scss';
import { Tag } from 'antd';

interface IProps {
	main: any;
}
interface IState {
	// some: number,
}
class Tester extends React.Component<IProps, IState> {
	componentDidMount() {}

	render() {
		console.log('main-render', this.props);
		let { main } = this.props;

		return (
			<div className="page">
				<h1 className="title">ts-react-dva脚手架</h1>
				<div className="tag">
					<Tag color="volcano">typescript</Tag>
					<Tag color="magenta">react16.7全家桶</Tag>
					<Tag color="red">dva2.4</Tag>
					<Tag color="orange">webpack4</Tag>
					<Tag color="gold">antd</Tag>
					<Tag color="lime">scss</Tag>
					<Tag color="green">fetch</Tag>
				</div>
			</div>
		);
	}
}
function mapStateToProps(state: any, ownProps: any) {
	return {
		main: state.main
	};
}
export default connect(mapStateToProps)(Tester);
