// eslint-disable-next-line import/prefer-default-export
export type Drop<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
