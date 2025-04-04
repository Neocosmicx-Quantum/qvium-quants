import globalAxios from 'axios';
export const BASE_PATH = 'https://api.quantum-computing.ibm.com/runtime'.replace(/\/+$/, '');
/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ',',
    ssv: ' ',
    tsv: '\t',
    pipes: '|',
};
/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    basePath;
    axios;
    configuration;
    constructor(configuration, basePath = BASE_PATH, axios = globalAxios) {
        this.basePath = basePath;
        this.axios = axios;
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath ?? basePath;
        }
    }
}
/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    field;
    constructor(field, msg) {
        super(msg);
        this.field = field;
        this.name = 'RequiredError';
    }
}
/**
 *
 * @export
 */
export const operationServerMap = {};
