//入口启动文件
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'conponents/App';

//检测不必要的重新渲染 
if (__DEV__ && __WHY_DID_YOU_UPDATE__){
	const { whyDidYouUpdate } = require('why-did-you-update');
	whyDidYouUpdate(React);
}

//将根组件挂载到 DOM,启动
ReactDOM.render(
	<App />,
	document.getElementById('app')
)