import Main from './Pages/Main';
import { Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import Works from './Pages/Works';

function App() {
	return (
		<Layout>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/works' element={<Works />} />
			</Routes>
		</Layout>
	);
}

export default App;
