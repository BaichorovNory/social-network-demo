export const requiredField = value => {
    if (value) return undefined;
    return 'Обязательное поле!';
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) return `Максимальная длина ${maxLength} символа(ов)!`;
    return undefined;
}