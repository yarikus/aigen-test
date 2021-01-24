export function getId() {
    return Math.random().toString(36).substring(7);
}

export function getRandomString() {
    return Math.random().toString(36).substring(2, 15);
}

export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function getRandomDate() {
    const currentYear = (new Date).getFullYear();
    return new Date(
        getRandomInt(currentYear - 10, currentYear + 1),
        getRandomInt(0, 11)
    );
}

export function filterArray(array, filters) {
    const filterKeys = Object.keys(filters);
    return array.filter(item => {
        return filterKeys.every(key => {
            if (typeof filters[key] !== 'function') return true;
            return filters[key](item[key]);
        });
    });
}

export function compareBy(name) {
    return (a, b) => {
        if (a[name] > b[name]) {
            return 1;
        } else if (a[name] < b[name]) {
            return -1;
        }
        return 0;
    }
}
