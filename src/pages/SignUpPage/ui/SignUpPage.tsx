import { WithProtection } from 'shared/store/HOCs/WithProtection.tsx';
import { SignUpForm } from 'widgets/SignUpForm';

export const SignUpPage = WithProtection(() => {
	return <SignUpForm />;
});
