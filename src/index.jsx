import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import './index.css';
import Store from "./store/store.jsx";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById('root')).render(<Provider store={Store}><App /></Provider>);