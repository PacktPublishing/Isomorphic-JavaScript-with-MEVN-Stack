/**
 * Performs common operations for strings, such as checking
 * if the string is empty or null
 */
export class StringUtil {
    static isEmpty(value) {
        return !value || !value.trim();
    }

    static capitalize(word) {
        return word.charAt(0).toUpperCase();
    }
}