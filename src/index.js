import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './context/context';
import App from './App'
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="3b73f25a-d928-4517-b3ef-24b778018e70" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    
     document.getElementById('root')
    );