import { WithProtection } from 'shared/store/HOCs/WithProtection.tsx';
import { SignInForm } from 'widgets/SignInForm';

export const SignInPage = WithProtection(() => {
	return <SignInForm />;
});
