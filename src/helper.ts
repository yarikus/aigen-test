import { IFilters } from "./interfaces";

export function getId(): string {
    return Math.random().toString(36).substring(7);
}

export function getRandomString(): string {
    return Math.random().toString(36).substring(2, 15);
}

export function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function getRandomDate(): Date {
    const currentYear: number = (new Date()).getFullYear();
    return new Date(
        getRandomInt(currentYear - 10, currentYear + 1),
        getRandomInt(0, 11)
    );
}

export function filterArray<TInput = any>(array: TInput[], filters: IFilters): TInput[] {
    const filterKeys = Object.keys(filters);
    return array.filter((item: any) => {
        return filterKeys.every(key => {
            if (typeof filters[key] !== 'function') return true;
            return filters[key](item[key]);
        });
    });
}

export function compareBy(name: string): (a: any, b: any) => number {
    return (a, b) => {
        if (a[name] > b[name]) {
            return 1;
        } else if (a[name] < b[name]) {
            return -1;
        }
        return 0;
    }
}
