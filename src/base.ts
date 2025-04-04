import type { Configuration } from './configuration.js'
import type { AxiosInstance, RawAxiosRequestConfig } from 'axios'
import globalAxios from 'axios'

export const BASE_PATH = 'https://api.quantum-computing.ibm.com/runtime'.replace(/\/+$/, '')

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
  csv: ',',
  ssv: ' ',
  tsv: '\t',
  pipes: '|',
}

/**
 *
 * @export
 * @interface RequestArgs
 */
export interface RequestArgs {
  url: string
  options: RawAxiosRequestConfig
}

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
  protected configuration: Configuration | undefined

  constructor(
    configuration?: Configuration,
    protected basePath: string = BASE_PATH,
    protected axios: AxiosInstance = globalAxios
  ) {
    if (configuration) {
      this.configuration = configuration
      this.basePath = configuration.basePath ?? basePath
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
  constructor(
    public field: string,
    msg?: string
  ) {
    super(msg)
    this.name = 'RequiredError'
  }
}

interface ServerMap {
  [key: string]: {
    url: string
    description: string
  }[]
}

/**
 *
 * @export
 */
export const operationServerMap: ServerMap = {}
