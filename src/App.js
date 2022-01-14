import Main from './Pages/Main';
import { Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import Works from './Pages/Works';
import Policy from './Pages/Policy'

function App() {
	return (
		<Layout>
			<Routes>
				<Route path='/works' element={<Works />} />
				<Route path='/policy' element={<Policy />} />
				<Route path='/' element={<Main />} />
			</Routes>
		</Layout>
	);
}

export default App;
