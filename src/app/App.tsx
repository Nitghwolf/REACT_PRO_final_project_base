import './styles/normalize.css';
import './styles/styles.css';
import { Outlet } from 'react-router-dom';
import { Header } from 'widgets/Header';
import { Sort } from 'features/Sort';
import { Footer } from 'widgets/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppSelector } from '../shared/store/utils';
import { userSelectors } from '../shared/store/slices/user';

export const App = () => {
	const accessToken = useAppSelector(userSelectors.getAccessToken);

	return (
		<>
			<Header />
			{accessToken && <Sort />}
			<Outlet />
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				pauseOnHover
				theme='colored'
			/>
			<Footer />
		</>
	);
};
