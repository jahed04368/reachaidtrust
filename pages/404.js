import { Fragment } from 'react';
import ErrorAlert from '../components/ui/error-alert';
import Button from '../components/ui/button';

const ErrorPage = () => {
  return (
    <Fragment>
      <ErrorAlert>
        <h1 className="center">☹️ Page cannot be found!</h1>
      </ErrorAlert>
      <div className="center">
        <Button link="/">Go to Homepage</Button>
      </div>
    </Fragment>
  );
};
export default ErrorPage;
