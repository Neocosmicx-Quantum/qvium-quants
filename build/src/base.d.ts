import type { Configuration } from './configuration.js';
import type { AxiosInstance, RawAxiosRequestConfig } from 'axios';
export declare const BASE_PATH: string;
/**
 *
 * @export
 */
export declare const COLLECTION_FORMATS: {
    csv: string;
    ssv: string;
    tsv: string;
    pipes: string;
};
/**
 *
 * @export
 * @interface RequestArgs
 */
export interface RequestArgs {
    url: string;
    options: RawAxiosRequestConfig;
}
/**
 *
 * @export
 * @class BaseAPI
 */
export declare class BaseAPI {
    protected basePath: string;
    protected axios: AxiosInstance;
    protected configuration: Configuration | undefined;
    constructor(configuration?: Configuration, basePath?: string, axios?: AxiosInstance);
}
/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export declare class RequiredError extends Error {
    field: string;
    constructor(field: string, msg?: string);
}
interface ServerMap {
    [key: string]: {
        url: string;
        description: string;
    }[];
}
/**
 *
 * @export
 */
export declare const operationServerMap: ServerMap;
export {};
