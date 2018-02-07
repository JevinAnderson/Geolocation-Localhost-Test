import React from 'react';
import { render } from 'react-dom';

import './index.scss';
import './index.less';
import Application from './components/application';

const node = document.getElementById('main-application-node');

render(<Application />, node);
