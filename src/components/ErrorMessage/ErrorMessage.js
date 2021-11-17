
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


export const ErrorMessage = ({ errorText = 'Something go wrong' }) => {
    const notify = (errorText) => toast.error(errorText, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark'
    });
    notify(errorText)

    return (
        <ToastContainer limit={1} />
    );
}
