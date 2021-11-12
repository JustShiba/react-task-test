export const validate = values => {

    const errors = {} 
    if (!values.title) {
        errors.title = 'Required' 
    } else if (values.title.length < 3) {
        errors.title = 'Must be 3 characters or more' 
    } else if (values.title.length > 41) {
        errors.title = 'Must be 41 characters or less' 
    }

    if (!values.body) {
        errors.body = 'Required' 
    } else if (values.body.length < 10) {
        errors.body = 'Must be 10 characters or more' 
    } else if (values.body.length > 201) {
        errors.body = 'Must be 200 characters or less' 
    }

    return errors 
} 