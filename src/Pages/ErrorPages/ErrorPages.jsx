
import { Link, useRouteError } from 'react-router-dom';


const ErrorPages = () => {
    const error = useRouteError();
    return (
        <div className='text-center mt-5'>
            <img className='w-screen' src="https://img.freepik.com/free-vector/404-error-with-person-looking-concept-illustration_114360-7912.jpg?w=900&t=st=1684402964~exp=1684403564~hmac=9f9074f04a211486e9f88d3c530abc831ab64ba0f1c0349b3c4d0afd31dff3f5" alt="" />
            <h1>404</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p className='text-danger'>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to="/"> <button className='btn-primary btn p-2 rounded'>Back to Home page</button></Link>
        </div>
    );
};

export default ErrorPages;