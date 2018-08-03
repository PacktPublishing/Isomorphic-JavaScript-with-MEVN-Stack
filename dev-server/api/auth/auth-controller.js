import { StringUtil } from '../../utilities/string-util';

export function index(req, res) {
    const validation = validateIndex(req.body);
    if (!validation.isValid) {
        return res.json({ message: validation.message });
    }
    return res.json();
}

function validateIndex(body) {
    let errors = '';

    if (StringUtil.isEmpty(body.username)) {
        errors += 'Username is required. ';
    }

    if (StringUtil.isEmpty(body.password)) {
        errors += 'Password is required. ';
    }

    return {
        isValid: StringUtil.isEmpty(errors),
        message: errors
    }
}