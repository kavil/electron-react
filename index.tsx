import dva from 'dva';
import 'antd/dist/antd.css';
import router from './router';
import models from './models';

// 1. Initialize
const app = dva({
	onError: (err) => {
		console.error(err);
	}
});

// 2. Plugins
// app.use({});

// 3. Model
models.forEach((model) => app.model(model as never));

// 4. Router
app.router(router as never);

// 5. Start
app.start('#root');
