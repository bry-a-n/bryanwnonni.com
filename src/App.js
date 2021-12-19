import React from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'

function App() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div style={{padding: 0}} id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
					<Timeline></Timeline>
          	</div>
      	</div>
      </div>
    );
}

export default App;
