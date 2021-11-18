export const validate = (values) => {
    const errors = {};

    if (!values.nickname) {
        errors.nickname = 'Required';
    } else if (values.nickname.length < 3) {
        errors.nickname = 'Must be 3 characters or more';
    } else if (values.nickname.length > 35) {
        errors.nickname = 'Must be 35 characters or less';
    }

    if (values.phone[0] !== '+') {
        errors.phone = 'Must be with plus in the start';
    } else if (values.phone.search(' ') !== -1) {
        errors.phone = 'Must be without spaces';
    } else if (values.phone.search(/[A-Za-zА-Яа-я_]/) !== -1) {
        errors.phone = 'Must be without letters';
    }

    return errors;
};
