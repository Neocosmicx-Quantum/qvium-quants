import globalAxios from 'axios';
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, } from './common.js';
import { BASE_PATH, BaseAPI, operationServerMap } from './base.js';
export const AdminJobResponseStatusEnum = {
    Creating: 'CREATING',
    Created: 'CREATED',
    ErrorCreatingJob: 'ERROR_CREATING_JOB',
    Validating: 'VALIDATING',
    Validated: 'VALIDATED',
    ErrorValidatingJob: 'ERROR_VALIDATING_JOB',
    Transpiling: 'TRANSPILING',
    Transpiled: 'TRANSPILED',
    ErrorTranspilingJob: 'ERROR_TRANSPILING_JOB',
    Queued: 'QUEUED',
    Queued2: 'Queued',
    Running: 'RUNNING',
    Running2: 'Running',
    Completed: 'COMPLETED',
    Completed2: 'Completed',
    ErrorRunningJob: 'ERROR_RUNNING_JOB',
    Cancelled: 'CANCELLED',
    Cancelled2: 'Cancelled',
    Failed: 'FAILED',
    Failed2: 'Failed',
};
export const AdminJobResponseTypeEnum = {
    Iqx: 'IQX',
    Runtime: 'RUNTIME',
};
export const AdminJobResponseRunModeEnum = {
    Fairshare: 'fairshare',
    Dedicated: 'dedicated',
    Priority: 'priority',
    Session: 'session',
};
export const CreateJobRequestLogLevelEnum = {
    Critical: 'critical',
    Error: 'error',
    Warning: 'warning',
    Info: 'info',
    Debug: 'debug',
};
export const CreateSessionRequestModeEnum = {
    Batch: 'batch',
    Dedicated: 'dedicated',
};
export const EstimatorV2InputResilienceLevelEnum = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
};
export const EstimatorV2InputVersionEnum = {
    NUMBER_2: 2,
};
export const EstimatorV2InputOptionsDynamicalDecouplingSequenceTypeEnum = {
    Xx: 'XX',
    XpXm: 'XpXm',
    Xy4: 'XY4',
};
export const EstimatorV2InputOptionsDynamicalDecouplingExtraSlackDistributionEnum = {
    Middle: 'middle',
    Edges: 'edges',
};
export const EstimatorV2InputOptionsDynamicalDecouplingSchedulingMethodEnum = {
    Alap: 'alap',
    Asap: 'asap',
};
export const EstimatorV2InputOptionsTranspilationOptimizationLevelEnum = {
    NUMBER_0: 0,
    NUMBER_1: 1,
};
export const EstimatorV2InputOptionsTwirlingStrategyEnum = {
    Active: 'active',
    ActiveCircuit: 'active-circuit',
    ActiveAccum: 'active-accum',
    All: 'all',
};
export const FindInstancesInstanceResponsePlanEnum = {
    Premium: 'premium',
    Open: 'open',
    Internal: 'internal',
};
export const GetInstanceSharesResponseItemProviderClassEnum = {
    Internal: 'Internal',
    Premium: 'Premium',
    Community: 'Community',
    CommunityStartup: 'Community-Startup',
    Open: 'Open',
    UnclassifiedHub: 'Unclassified Hub',
};
export const GetJobTypeResponseTypeEnum = {
    Runtime: 'RUNTIME',
    Iqx: 'IQX',
};
export const GetSessionDetailsExtendedResponseStatusEnum = {
    Completed: 'completed',
    Canceled: 'canceled',
    Failed: 'failed',
    Pending: 'pending',
    InProgress: 'in_progress',
    Unknown: 'unknown',
};
export const GetSessionDetailsExtendedResponseModeEnum = {
    Batch: 'batch',
    Dedicated: 'dedicated',
};
export const GetSessionDetailsResponseStateEnum = {
    Canceled: 'canceled',
    Closed: 'closed',
    Open: 'open',
    Active: 'active',
    Inactive: 'inactive',
};
export const GetSessionDetailsResponseModeEnum = {
    Batch: 'batch',
    Dedicated: 'dedicated',
};
export const JobResponseStatusEnum = {
    Completed: 'Completed',
    Cancelled: 'Cancelled',
    Failed: 'Failed',
    Queued: 'Queued',
    Running: 'Running',
};
export const JobResponse1StatusEnum = {
    Queued: 'Queued',
    Running: 'Running',
    Completed: 'Completed',
    Cancelled: 'Cancelled',
    CancelledRanTooLong: 'Cancelled - Ran too long',
    Failed: 'Failed',
};
export const JobStateStatusEnum = {
    Queued: 'Queued',
    Running: 'Running',
    Completed: 'Completed',
    Cancelled: 'Cancelled',
    Failed: 'Failed',
};
export const JobState1StatusEnum = {
    Creating: 'CREATING',
    Created: 'CREATED',
    ErrorCreatingJob: 'ERROR_CREATING_JOB',
    Validating: 'VALIDATING',
    Validated: 'VALIDATED',
    ErrorValidatingJob: 'ERROR_VALIDATING_JOB',
    Transpiling: 'TRANSPILING',
    Transpiled: 'TRANSPILED',
    ErrorTranspilingJob: 'ERROR_TRANSPILING_JOB',
    Queued: 'QUEUED',
    Queued2: 'Queued',
    Running: 'RUNNING',
    Running2: 'Running',
    Completed: 'COMPLETED',
    Completed2: 'Completed',
    ErrorRunningJob: 'ERROR_RUNNING_JOB',
    Cancelled: 'CANCELLED',
    Cancelled2: 'Cancelled',
    Failed: 'FAILED',
    Failed2: 'Failed',
};
export const JobStateResponseStatusEnum = {
    Completed: 'Completed',
    Cancelled: 'Cancelled',
    Failed: 'Failed',
    Queued: 'Queued',
    Running: 'Running',
};
export const SamplerV2InputVersionEnum = {
    NUMBER_2: 2,
};
export const SamplerV2InputOptionsDynamicalDecouplingSequenceTypeEnum = {
    Xx: 'XX',
    XpXm: 'XpXm',
    Xy4: 'XY4',
};
export const SamplerV2InputOptionsDynamicalDecouplingExtraSlackDistributionEnum = {
    Middle: 'middle',
    Edges: 'edges',
};
export const SamplerV2InputOptionsDynamicalDecouplingSchedulingMethodEnum = {
    Alap: 'alap',
    Asap: 'asap',
};
export const SamplerV2InputOptionsExecutionMeasTypeEnum = {
    Classified: 'classified',
    Kerneled: 'kerneled',
    AvgKerneled: 'avg_kerneled',
};
export const TimeStampStatusEnum = {
    Completed: 'completed',
    Canceled: 'canceled',
    Failed: 'failed',
    Pending: 'pending',
    InProgress: 'in_progress',
    Unknown: 'unknown',
};
export const UserJobResponseStatusEnum = {
    Creating: 'CREATING',
    Created: 'CREATED',
    ErrorCreatingJob: 'ERROR_CREATING_JOB',
    Validating: 'VALIDATING',
    Validated: 'VALIDATED',
    ErrorValidatingJob: 'ERROR_VALIDATING_JOB',
    Transpiling: 'TRANSPILING',
    Transpiled: 'TRANSPILED',
    ErrorTranspilingJob: 'ERROR_TRANSPILING_JOB',
    Queued: 'QUEUED',
    Queued2: 'Queued',
    Running: 'RUNNING',
    Running2: 'Running',
    Completed: 'COMPLETED',
    Completed2: 'Completed',
    ErrorRunningJob: 'ERROR_RUNNING_JOB',
    Cancelled: 'CANCELLED',
    Cancelled2: 'Cancelled',
    Failed: 'FAILED',
    Failed2: 'Failed',
};
export const UserJobResponseTypeEnum = {
    Iqx: 'IQX',
    Runtime: 'RUNTIME',
};
export const UserJobResponseRunModeEnum = {
    Fairshare: 'fairshare',
    Dedicated: 'dedicated',
    Priority: 'priority',
    Session: 'session',
};
export const WorkloadResponseModeEnum = {
    Job: 'job',
    Session: 'session',
    Batch: 'batch',
};
export const WorkloadResponseStatusEnum = {
    Completed: 'completed',
    Canceled: 'canceled',
    Failed: 'failed',
    Pending: 'pending',
    InProgress: 'in_progress',
    Unknown: 'unknown',
};
/**
 * AdminApi - axios parameter creator
 * @export
 */
export const AdminApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Block users by Domain
         * @summary Block users by domain
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        blockUsersByDomainControllerCloseSession: async (options = {}) => {
            const localVarPath = `/admin/block-users-by-domain`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Count jobs in an instance hierarchy
         * @summary Count jobs in an instance hierarchy
         * @param {string} hub Hub name
         * @param {string} [group] Group name
         * @param {string} [project] Project name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        countProviderJobs: async (hub, group, project, options = {}) => {
            // verify required parameter 'hub' is not null or undefined
            assertParamExists('countProviderJobs', 'hub', hub);
            const localVarPath = `/facade/v1/admin/jobs/count`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            if (hub !== undefined) {
                localVarQueryParameter['hub'] = hub;
            }
            if (group !== undefined) {
                localVarQueryParameter['group'] = group;
            }
            if (project !== undefined) {
                localVarQueryParameter['project'] = project;
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create a refund
         * @summary Create a refund
         * @param {CreateRefundRequest} createRefundRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRefundControllerCreateRefund: async (createRefundRequest, options = {}) => {
            // verify required parameter 'createRefundRequest' is not null or undefined
            assertParamExists('createRefundControllerCreateRefund', 'createRefundRequest', createRefundRequest);
            const localVarPath = `/refunds`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            localVarHeaderParameter['Content-Type'] = 'application/json';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            localVarRequestOptions.data = serializeDataIfNeeded(createRefundRequest, localVarRequestOptions, configuration);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List admin refunds
         * @summary List all active refunds
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAdminRefundsControllerFindAdminRefunds: async (options = {}) => {
            const localVarPath = `/admin/refunds`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List jobs in an instance hierarchy
         * @summary List jobs in an instance hierarchy
         * @param {string} hub Hub name
         * @param {string} [group] Group name
         * @param {string} [project] Project name
         * @param {boolean} [pending] Filters only pending or non pending jobs
         * @param {string} [backend] Comma separated systems to filter jobs
         * @param {string} [userId] User Id to filter jobs
         * @param {string} [country] Country to filter jobs
         * @param {ListProviderJobsSortEnum} [sort] Sort jobs by created time
         * @param {number} [limit] Number of results to return at a time
         * @param {number} [offset] Number of results to offset when retrieving the list of jobs
         * @param {string} [createdAfter] Job created after filter
         * @param {string} [createdBefore] Job created before filter
         * @param {string} [search] Searches for jobs containing the specified keyword in their id, name or tags
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listProviderJobs: async (hub, group, project, pending, backend, userId, country, sort, limit, offset, createdAfter, createdBefore, search, options = {}) => {
            // verify required parameter 'hub' is not null or undefined
            assertParamExists('listProviderJobs', 'hub', hub);
            const localVarPath = `/facade/v1/admin/jobs`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            if (hub !== undefined) {
                localVarQueryParameter['hub'] = hub;
            }
            if (group !== undefined) {
                localVarQueryParameter['group'] = group;
            }
            if (project !== undefined) {
                localVarQueryParameter['project'] = project;
            }
            if (pending !== undefined) {
                localVarQueryParameter['pending'] = pending;
            }
            if (backend !== undefined) {
                localVarQueryParameter['backend'] = backend;
            }
            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }
            if (country !== undefined) {
                localVarQueryParameter['country'] = country;
            }
            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (createdAfter !== undefined) {
                localVarQueryParameter['createdAfter'] =
                    createdAfter instanceof Date ? createdAfter.toISOString() : createdAfter;
            }
            if (createdBefore !== undefined) {
                localVarQueryParameter['createdBefore'] =
                    createdBefore instanceof Date
                        ? createdBefore.toISOString()
                        : createdBefore;
            }
            if (search !== undefined) {
                localVarQueryParameter['search'] = search;
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
/**
 * AdminApi - functional programming interface
 * @export
 */
export const AdminApiFp = function (configuration) {
    const localVarAxiosParamCreator = AdminApiAxiosParamCreator(configuration);
    return {
        /**
         * Block users by Domain
         * @summary Block users by domain
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async blockUsersByDomainControllerCloseSession(options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.blockUsersByDomainControllerCloseSession(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AdminApi.blockUsersByDomainControllerCloseSession']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Count jobs in an instance hierarchy
         * @summary Count jobs in an instance hierarchy
         * @param {string} hub Hub name
         * @param {string} [group] Group name
         * @param {string} [project] Project name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async countProviderJobs(hub, group, project, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.countProviderJobs(hub, group, project, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AdminApi.countProviderJobs']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Create a refund
         * @summary Create a refund
         * @param {CreateRefundRequest} createRefundRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createRefundControllerCreateRefund(createRefundRequest, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createRefundControllerCreateRefund(createRefundRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AdminApi.createRefundControllerCreateRefund']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List admin refunds
         * @summary List all active refunds
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findAdminRefundsControllerFindAdminRefunds(options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findAdminRefundsControllerFindAdminRefunds(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AdminApi.findAdminRefundsControllerFindAdminRefunds']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List jobs in an instance hierarchy
         * @summary List jobs in an instance hierarchy
         * @param {string} hub Hub name
         * @param {string} [group] Group name
         * @param {string} [project] Project name
         * @param {boolean} [pending] Filters only pending or non pending jobs
         * @param {string} [backend] Comma separated systems to filter jobs
         * @param {string} [userId] User Id to filter jobs
         * @param {string} [country] Country to filter jobs
         * @param {ListProviderJobsSortEnum} [sort] Sort jobs by created time
         * @param {number} [limit] Number of results to return at a time
         * @param {number} [offset] Number of results to offset when retrieving the list of jobs
         * @param {string} [createdAfter] Job created after filter
         * @param {string} [createdBefore] Job created before filter
         * @param {string} [search] Searches for jobs containing the specified keyword in their id, name or tags
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listProviderJobs(hub, group, project, pending, backend, userId, country, sort, limit, offset, createdAfter, createdBefore, search, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listProviderJobs(hub, group, project, pending, backend, userId, country, sort, limit, offset, createdAfter, createdBefore, search, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AdminApi.listProviderJobs']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    };
};
/**
 * AdminApi - factory interface
 * @export
 */
export const AdminApiFactory = function (configuration, basePath, axios) {
    const localVarFp = AdminApiFp(configuration);
    return {
        /**
         * Block users by Domain
         * @summary Block users by domain
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        blockUsersByDomainControllerCloseSession(options) {
            return localVarFp
                .blockUsersByDomainControllerCloseSession(options)
                .then((request) => request(axios, basePath));
        },
        /**
         * Count jobs in an instance hierarchy
         * @summary Count jobs in an instance hierarchy
         * @param {string} hub Hub name
         * @param {string} [group] Group name
         * @param {string} [project] Project name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        countProviderJobs(hub, group, project, options) {
            return localVarFp
                .countProviderJobs(hub, group, project, options)
                .then((request) => request(axios, basePath));
        },
        /**
         * Create a refund
         * @summary Create a refund
         * @param {CreateRefundRequest} createRefundRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRefundControllerCreateRefund(createRefundRequest, options) {
            return localVarFp
                .createRefundControllerCreateRefund(createRefundRequest, options)
                .then((request) => request(axios, basePath));
        },
        /**
         * List admin refunds
         * @summary List all active refunds
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAdminRefundsControllerFindAdminRefunds(options) {
            return localVarFp
                .findAdminRefundsControllerFindAdminRefunds(options)
                .then((request) => request(axios, basePath));
        },
        /**
         * List jobs in an instance hierarchy
         * @summary List jobs in an instance hierarchy
         * @param {string} hub Hub name
         * @param {string} [group] Group name
         * @param {string} [project] Project name
         * @param {boolean} [pending] Filters only pending or non pending jobs
         * @param {string} [backend] Comma separated systems to filter jobs
         * @param {string} [userId] User Id to filter jobs
         * @param {string} [country] Country to filter jobs
         * @param {ListProviderJobsSortEnum} [sort] Sort jobs by created time
         * @param {number} [limit] Number of results to return at a time
         * @param {number} [offset] Number of results to offset when retrieving the list of jobs
         * @param {string} [createdAfter] Job created after filter
         * @param {string} [createdBefore] Job created before filter
         * @param {string} [search] Searches for jobs containing the specified keyword in their id, name or tags
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listProviderJobs(hub, group, project, pending, backend, userId, country, sort, limit, offset, createdAfter, createdBefore, search, options) {
            return localVarFp
                .listProviderJobs(hub, group, project, pending, backend, userId, country, sort, limit, offset, createdAfter, createdBefore, search, options)
                .then((request) => request(axios, basePath));
        },
    };
};
/**
 * AdminApi - object-oriented interface
 * @export
 * @class AdminApi
 * @extends {BaseAPI}
 */
export class AdminApi extends BaseAPI {
    /**
     * Block users by Domain
     * @summary Block users by domain
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminApi
     */
    blockUsersByDomainControllerCloseSession(options) {
        return AdminApiFp(this.configuration)
            .blockUsersByDomainControllerCloseSession(options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * Count jobs in an instance hierarchy
     * @summary Count jobs in an instance hierarchy
     * @param {string} hub Hub name
     * @param {string} [group] Group name
     * @param {string} [project] Project name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminApi
     */
    countProviderJobs(hub, group, project, options) {
        return AdminApiFp(this.configuration)
            .countProviderJobs(hub, group, project, options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * Create a refund
     * @summary Create a refund
     * @param {CreateRefundRequest} createRefundRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminApi
     */
    createRefundControllerCreateRefund(createRefundRequest, options) {
        return AdminApiFp(this.configuration)
            .createRefundControllerCreateRefund(createRefundRequest, options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * List admin refunds
     * @summary List all active refunds
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminApi
     */
    findAdminRefundsControllerFindAdminRefunds(options) {
        return AdminApiFp(this.configuration)
            .findAdminRefundsControllerFindAdminRefunds(options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * List jobs in an instance hierarchy
     * @summary List jobs in an instance hierarchy
     * @param {string} hub Hub name
     * @param {string} [group] Group name
     * @param {string} [project] Project name
     * @param {boolean} [pending] Filters only pending or non pending jobs
     * @param {string} [backend] Comma separated systems to filter jobs
     * @param {string} [userId] User Id to filter jobs
     * @param {string} [country] Country to filter jobs
     * @param {ListProviderJobsSortEnum} [sort] Sort jobs by created time
     * @param {number} [limit] Number of results to return at a time
     * @param {number} [offset] Number of results to offset when retrieving the list of jobs
     * @param {string} [createdAfter] Job created after filter
     * @param {string} [createdBefore] Job created before filter
     * @param {string} [search] Searches for jobs containing the specified keyword in their id, name or tags
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminApi
     */
    listProviderJobs(hub, group, project, pending, backend, userId, country, sort, limit, offset, createdAfter, createdBefore, search, options) {
        return AdminApiFp(this.configuration)
            .listProviderJobs(hub, group, project, pending, backend, userId, country, sort, limit, offset, createdAfter, createdBefore, search, options)
            .then((request) => request(this.axios, this.basePath));
    }
}
/**
 * @export
 */
export const ListProviderJobsSortEnum = {
    Asc: 'ASC',
    Desc: 'DESC',
};
/**
 * AnalyticsApi - axios parameter creator
 * @export
 */
export const AnalyticsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Get analytics filters
         * @summary Get analytics filters
         * @param {Array<string>} instance Instance to get filters for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAnalyticsFiltersControllerAnalyticsFilters: async (instance, options = {}) => {
            // verify required parameter 'instance' is not null or undefined
            assertParamExists('getAnalyticsFiltersControllerAnalyticsFilters', 'instance', instance);
            const localVarPath = `/analytics/filters`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            if (instance) {
                localVarQueryParameter['instance'] = instance;
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get usage analytics
         * @summary Get usage analytics
         * @param {string} instance
         * @param {string} [intervalStart]
         * @param {string} [intervalEnd]
         * @param {Array<string>} [backend]
         * @param {Array<string>} [userId]
         * @param {Array<string>} [country]
         * @param {boolean} [simulators] Include simulators
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAnalyticsUsageControllerAnalyticsUsage: async (instance, intervalStart, intervalEnd, backend, userId, country, simulators, options = {}) => {
            // verify required parameter 'instance' is not null or undefined
            assertParamExists('getAnalyticsUsageControllerAnalyticsUsage', 'instance', instance);
            const localVarPath = `/analytics/usage`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            if (instance !== undefined) {
                localVarQueryParameter['instance'] = instance;
            }
            if (intervalStart !== undefined) {
                localVarQueryParameter['intervalStart'] =
                    intervalStart instanceof Date
                        ? intervalStart.toISOString()
                        : intervalStart;
            }
            if (intervalEnd !== undefined) {
                localVarQueryParameter['intervalEnd'] =
                    intervalEnd instanceof Date ? intervalEnd.toISOString() : intervalEnd;
            }
            if (backend) {
                localVarQueryParameter['backend'] = backend;
            }
            if (userId) {
                localVarQueryParameter['userId'] = userId;
            }
            if (country) {
                localVarQueryParameter['country'] = country;
            }
            if (simulators !== undefined) {
                localVarQueryParameter['simulators'] = simulators;
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get usage analytics grouped by date
         * @summary Get usage analytics grouped by date
         * @param {string} instance
         * @param {GetAnalyticsUsageGroupedByDateControllerAnalyticsUsageGroupByEnum} groupBy
         * @param {string} [intervalStart]
         * @param {string} [intervalEnd]
         * @param {Array<string>} [backend]
         * @param {Array<string>} [userId]
         * @param {Array<string>} [country]
         * @param {boolean} [simulators] Include simulators
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAnalyticsUsageGroupedByDateControllerAnalyticsUsage: async (instance, groupBy, intervalStart, intervalEnd, backend, userId, country, simulators, options = {}) => {
            // verify required parameter 'instance' is not null or undefined
            assertParamExists('getAnalyticsUsageGroupedByDateControllerAnalyticsUsage', 'instance', instance);
            // verify required parameter 'groupBy' is not null or undefined
            assertParamExists('getAnalyticsUsageGroupedByDateControllerAnalyticsUsage', 'groupBy', groupBy);
            const localVarPath = `/analytics/usage-grouped-by-date`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            if (instance !== undefined) {
                localVarQueryParameter['instance'] = instance;
            }
            if (groupBy !== undefined) {
                localVarQueryParameter['groupBy'] = groupBy;
            }
            if (intervalStart !== undefined) {
                localVarQueryParameter['intervalStart'] =
                    intervalStart instanceof Date
                        ? intervalStart.toISOString()
                        : intervalStart;
            }
            if (intervalEnd !== undefined) {
                localVarQueryParameter['intervalEnd'] =
                    intervalEnd instanceof Date ? intervalEnd.toISOString() : intervalEnd;
            }
            if (backend) {
                localVarQueryParameter['backend'] = backend;
            }
            if (userId) {
                localVarQueryParameter['userId'] = userId;
            }
            if (country) {
                localVarQueryParameter['country'] = country;
            }
            if (simulators !== undefined) {
                localVarQueryParameter['simulators'] = simulators;
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get usage analytics grouped
         * @summary Get usage analytics grouped
         * @param {GetAnalyticsUsageGroupedControllerAnalyticsGroupedUsageGroupByEnum} groupBy key to to group usage by
         * @param {string} instance instance to get analytics for. could be a hub, hub/group or hub/group/project
         * @param {string} [intervalStart] start date
         * @param {string} [intervalEnd] end date
         * @param {Array<string>} [backend] backend to filter by
         * @param {Array<string>} [userId] userId to filter by
         * @param {Array<string>} [country] country to filter by
         * @param {boolean} [simulators] Include simulators
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAnalyticsUsageGroupedControllerAnalyticsGroupedUsage: async (groupBy, instance, intervalStart, intervalEnd, backend, userId, country, simulators, options = {}) => {
            // verify required parameter 'groupBy' is not null or undefined
            assertParamExists('getAnalyticsUsageGroupedControllerAnalyticsGroupedUsage', 'groupBy', groupBy);
            // verify required parameter 'instance' is not null or undefined
            assertParamExists('getAnalyticsUsageGroupedControllerAnalyticsGroupedUsage', 'instance', instance);
            const localVarPath = `/analytics/usage-grouped`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            if (groupBy !== undefined) {
                localVarQueryParameter['groupBy'] = groupBy;
            }
            if (instance !== undefined) {
                localVarQueryParameter['instance'] = instance;
            }
            if (intervalStart !== undefined) {
                localVarQueryParameter['intervalStart'] =
                    intervalStart instanceof Date
                        ? intervalStart.toISOString()
                        : intervalStart;
            }
            if (intervalEnd !== undefined) {
                localVarQueryParameter['intervalEnd'] =
                    intervalEnd instanceof Date ? intervalEnd.toISOString() : intervalEnd;
            }
            if (backend) {
                localVarQueryParameter['backend'] = backend;
            }
            if (userId) {
                localVarQueryParameter['userId'] = userId;
            }
            if (country) {
                localVarQueryParameter['country'] = country;
            }
            if (simulators !== undefined) {
                localVarQueryParameter['simulators'] = simulators;
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
/**
 * AnalyticsApi - functional programming interface
 * @export
 */
export const AnalyticsApiFp = function (configuration) {
    const localVarAxiosParamCreator = AnalyticsApiAxiosParamCreator(configuration);
    return {
        /**
         * Get analytics filters
         * @summary Get analytics filters
         * @param {Array<string>} instance Instance to get filters for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAnalyticsFiltersControllerAnalyticsFilters(instance, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAnalyticsFiltersControllerAnalyticsFilters(instance, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AnalyticsApi.getAnalyticsFiltersControllerAnalyticsFilters']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get usage analytics
         * @summary Get usage analytics
         * @param {string} instance
         * @param {string} [intervalStart]
         * @param {string} [intervalEnd]
         * @param {Array<string>} [backend]
         * @param {Array<string>} [userId]
         * @param {Array<string>} [country]
         * @param {boolean} [simulators] Include simulators
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAnalyticsUsageControllerAnalyticsUsage(instance, intervalStart, intervalEnd, backend, userId, country, simulators, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAnalyticsUsageControllerAnalyticsUsage(instance, intervalStart, intervalEnd, backend, userId, country, simulators, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AnalyticsApi.getAnalyticsUsageControllerAnalyticsUsage']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get usage analytics grouped by date
         * @summary Get usage analytics grouped by date
         * @param {string} instance
         * @param {GetAnalyticsUsageGroupedByDateControllerAnalyticsUsageGroupByEnum} groupBy
         * @param {string} [intervalStart]
         * @param {string} [intervalEnd]
         * @param {Array<string>} [backend]
         * @param {Array<string>} [userId]
         * @param {Array<string>} [country]
         * @param {boolean} [simulators] Include simulators
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAnalyticsUsageGroupedByDateControllerAnalyticsUsage(instance, groupBy, intervalStart, intervalEnd, backend, userId, country, simulators, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAnalyticsUsageGroupedByDateControllerAnalyticsUsage(instance, groupBy, intervalStart, intervalEnd, backend, userId, country, simulators, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AnalyticsApi.getAnalyticsUsageGroupedByDateControllerAnalyticsUsage']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get usage analytics grouped
         * @summary Get usage analytics grouped
         * @param {GetAnalyticsUsageGroupedControllerAnalyticsGroupedUsageGroupByEnum} groupBy key to to group usage by
         * @param {string} instance instance to get analytics for. could be a hub, hub/group or hub/group/project
         * @param {string} [intervalStart] start date
         * @param {string} [intervalEnd] end date
         * @param {Array<string>} [backend] backend to filter by
         * @param {Array<string>} [userId] userId to filter by
         * @param {Array<string>} [country] country to filter by
         * @param {boolean} [simulators] Include simulators
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAnalyticsUsageGroupedControllerAnalyticsGroupedUsage(groupBy, instance, intervalStart, intervalEnd, backend, userId, country, simulators, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAnalyticsUsageGroupedControllerAnalyticsGroupedUsage(groupBy, instance, intervalStart, intervalEnd, backend, userId, country, simulators, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AnalyticsApi.getAnalyticsUsageGroupedControllerAnalyticsGroupedUsage']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    };
};
/**
 * AnalyticsApi - factory interface
 * @export
 */
export const AnalyticsApiFactory = function (configuration, basePath, axios) {
    const localVarFp = AnalyticsApiFp(configuration);
    return {
        /**
         * Get analytics filters
         * @summary Get analytics filters
         * @param {Array<string>} instance Instance to get filters for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAnalyticsFiltersControllerAnalyticsFilters(instance, options) {
            return localVarFp
                .getAnalyticsFiltersControllerAnalyticsFilters(instance, options)
                .then((request) => request(axios, basePath));
        },
        /**
         * Get usage analytics
         * @summary Get usage analytics
         * @param {string} instance
         * @param {string} [intervalStart]
         * @param {string} [intervalEnd]
         * @param {Array<string>} [backend]
         * @param {Array<string>} [userId]
         * @param {Array<string>} [country]
         * @param {boolean} [simulators] Include simulators
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAnalyticsUsageControllerAnalyticsUsage(instance, intervalStart, intervalEnd, backend, userId, country, simulators, options) {
            return localVarFp
                .getAnalyticsUsageControllerAnalyticsUsage(instance, intervalStart, intervalEnd, backend, userId, country, simulators, options)
                .then((request) => request(axios, basePath));
        },
        /**
         * Get usage analytics grouped by date
         * @summary Get usage analytics grouped by date
         * @param {string} instance
         * @param {GetAnalyticsUsageGroupedByDateControllerAnalyticsUsageGroupByEnum} groupBy
         * @param {string} [intervalStart]
         * @param {string} [intervalEnd]
         * @param {Array<string>} [backend]
         * @param {Array<string>} [userId]
         * @param {Array<string>} [country]
         * @param {boolean} [simulators] Include simulators
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAnalyticsUsageGroupedByDateControllerAnalyticsUsage(instance, groupBy, intervalStart, intervalEnd, backend, userId, country, simulators, options) {
            return localVarFp
                .getAnalyticsUsageGroupedByDateControllerAnalyticsUsage(instance, groupBy, intervalStart, intervalEnd, backend, userId, country, simulators, options)
                .then((request) => request(axios, basePath));
        },
        /**
         * Get usage analytics grouped
         * @summary Get usage analytics grouped
         * @param {GetAnalyticsUsageGroupedControllerAnalyticsGroupedUsageGroupByEnum} groupBy key to to group usage by
         * @param {string} instance instance to get analytics for. could be a hub, hub/group or hub/group/project
         * @param {string} [intervalStart] start date
         * @param {string} [intervalEnd] end date
         * @param {Array<string>} [backend] backend to filter by
         * @param {Array<string>} [userId] userId to filter by
         * @param {Array<string>} [country] country to filter by
         * @param {boolean} [simulators] Include simulators
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAnalyticsUsageGroupedControllerAnalyticsGroupedUsage(groupBy, instance, intervalStart, intervalEnd, backend, userId, country, simulators, options) {
            return localVarFp
                .getAnalyticsUsageGroupedControllerAnalyticsGroupedUsage(groupBy, instance, intervalStart, intervalEnd, backend, userId, country, simulators, options)
                .then((request) => request(axios, basePath));
        },
    };
};
/**
 * AnalyticsApi - object-oriented interface
 * @export
 * @class AnalyticsApi
 * @extends {BaseAPI}
 */
export class AnalyticsApi extends BaseAPI {
    /**
     * Get analytics filters
     * @summary Get analytics filters
     * @param {Array<string>} instance Instance to get filters for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AnalyticsApi
     */
    getAnalyticsFiltersControllerAnalyticsFilters(instance, options) {
        return AnalyticsApiFp(this.configuration)
            .getAnalyticsFiltersControllerAnalyticsFilters(instance, options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get usage analytics
     * @summary Get usage analytics
     * @param {string} instance
     * @param {string} [intervalStart]
     * @param {string} [intervalEnd]
     * @param {Array<string>} [backend]
     * @param {Array<string>} [userId]
     * @param {Array<string>} [country]
     * @param {boolean} [simulators] Include simulators
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AnalyticsApi
     */
    getAnalyticsUsageControllerAnalyticsUsage(instance, intervalStart, intervalEnd, backend, userId, country, simulators, options) {
        return AnalyticsApiFp(this.configuration)
            .getAnalyticsUsageControllerAnalyticsUsage(instance, intervalStart, intervalEnd, backend, userId, country, simulators, options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get usage analytics grouped by date
     * @summary Get usage analytics grouped by date
     * @param {string} instance
     * @param {GetAnalyticsUsageGroupedByDateControllerAnalyticsUsageGroupByEnum} groupBy
     * @param {string} [intervalStart]
     * @param {string} [intervalEnd]
     * @param {Array<string>} [backend]
     * @param {Array<string>} [userId]
     * @param {Array<string>} [country]
     * @param {boolean} [simulators] Include simulators
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AnalyticsApi
     */
    getAnalyticsUsageGroupedByDateControllerAnalyticsUsage(instance, groupBy, intervalStart, intervalEnd, backend, userId, country, simulators, options) {
        return AnalyticsApiFp(this.configuration)
            .getAnalyticsUsageGroupedByDateControllerAnalyticsUsage(instance, groupBy, intervalStart, intervalEnd, backend, userId, country, simulators, options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get usage analytics grouped
     * @summary Get usage analytics grouped
     * @param {GetAnalyticsUsageGroupedControllerAnalyticsGroupedUsageGroupByEnum} groupBy key to to group usage by
     * @param {string} instance instance to get analytics for. could be a hub, hub/group or hub/group/project
     * @param {string} [intervalStart] start date
     * @param {string} [intervalEnd] end date
     * @param {Array<string>} [backend] backend to filter by
     * @param {Array<string>} [userId] userId to filter by
     * @param {Array<string>} [country] country to filter by
     * @param {boolean} [simulators] Include simulators
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AnalyticsApi
     */
    getAnalyticsUsageGroupedControllerAnalyticsGroupedUsage(groupBy, instance, intervalStart, intervalEnd, backend, userId, country, simulators, options) {
        return AnalyticsApiFp(this.configuration)
            .getAnalyticsUsageGroupedControllerAnalyticsGroupedUsage(groupBy, instance, intervalStart, intervalEnd, backend, userId, country, simulators, options)
            .then((request) => request(this.axios, this.basePath));
    }
}
/**
 * @export
 */
export const GetAnalyticsUsageGroupedByDateControllerAnalyticsUsageGroupByEnum = {
    Instance: 'instance',
};
/**
 * @export
 */
export const GetAnalyticsUsageGroupedControllerAnalyticsGroupedUsageGroupByEnum = {
    Instance: 'instance',
    Backend: 'backend',
    UserId: 'userId',
    Country: 'country',
};
/**
 * AuthApi - axios parameter creator
 * @export
 */
export const AuthApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Clear the authorization cache for the specified user.  This is useful if a user\'s role changes.
         * @summary Clear a user\'s authorization cache
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        logout: async (options = {}) => {
            const localVarPath = `/logout`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Get JWT token
         * @param {string} userAuthorization
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateTokenControllerValidateToken: async (userAuthorization, options = {}) => {
            // verify required parameter 'userAuthorization' is not null or undefined
            assertParamExists('validateTokenControllerValidateToken', 'userAuthorization', userAuthorization);
            const localVarPath = `/auth/validate`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (userAuthorization !== null) {
                localVarHeaderParameter['User-Authorization'] = String(userAuthorization);
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
/**
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function (configuration) {
    const localVarAxiosParamCreator = AuthApiAxiosParamCreator(configuration);
    return {
        /**
         * Clear the authorization cache for the specified user.  This is useful if a user\'s role changes.
         * @summary Clear a user\'s authorization cache
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async logout(options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.logout(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthApi.logout']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         *
         * @summary Get JWT token
         * @param {string} userAuthorization
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async validateTokenControllerValidateToken(userAuthorization, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.validateTokenControllerValidateToken(userAuthorization, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthApi.validateTokenControllerValidateToken']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    };
};
/**
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (configuration, basePath, axios) {
    const localVarFp = AuthApiFp(configuration);
    return {
        /**
         * Clear the authorization cache for the specified user.  This is useful if a user\'s role changes.
         * @summary Clear a user\'s authorization cache
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        logout(options) {
            return localVarFp.logout(options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get JWT token
         * @param {string} userAuthorization
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateTokenControllerValidateToken(userAuthorization, options) {
            return localVarFp
                .validateTokenControllerValidateToken(userAuthorization, options)
                .then((request) => request(axios, basePath));
        },
    };
};
/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export class AuthApi extends BaseAPI {
    /**
     * Clear the authorization cache for the specified user.  This is useful if a user\'s role changes.
     * @summary Clear a user\'s authorization cache
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    logout(options) {
        return AuthApiFp(this.configuration)
            .logout(options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get JWT token
     * @param {string} userAuthorization
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    validateTokenControllerValidateToken(userAuthorization, options) {
        return AuthApiFp(this.configuration)
            .validateTokenControllerValidateToken(userAuthorization, options)
            .then((request) => request(this.axios, this.basePath));
    }
}
/**
 * InstancesApi - axios parameter creator
 * @export
 */
export const InstancesApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Get user instances
         * @summary Get instances
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findInstancesControllerFindInstances: async (options = {}) => {
            const localVarPath = `/instances`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
/**
 * InstancesApi - functional programming interface
 * @export
 */
export const InstancesApiFp = function (configuration) {
    const localVarAxiosParamCreator = InstancesApiAxiosParamCreator(configuration);
    return {
        /**
         * Get user instances
         * @summary Get instances
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findInstancesControllerFindInstances(options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findInstancesControllerFindInstances(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['InstancesApi.findInstancesControllerFindInstances']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    };
};
/**
 * InstancesApi - factory interface
 * @export
 */
export const InstancesApiFactory = function (configuration, basePath, axios) {
    const localVarFp = InstancesApiFp(configuration);
    return {
        /**
         * Get user instances
         * @summary Get instances
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findInstancesControllerFindInstances(options) {
            return localVarFp
                .findInstancesControllerFindInstances(options)
                .then((request) => request(axios, basePath));
        },
    };
};
/**
 * InstancesApi - object-oriented interface
 * @export
 * @class InstancesApi
 * @extends {BaseAPI}
 */
export class InstancesApi extends BaseAPI {
    /**
     * Get user instances
     * @summary Get instances
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InstancesApi
     */
    findInstancesControllerFindInstances(options) {
        return InstancesApiFp(this.configuration)
            .findInstancesControllerFindInstances(options)
            .then((request) => request(this.axios, this.basePath));
    }
}
/**
 * InternalApi - axios parameter creator
 * @export
 */
export const InternalApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Block users by Domain
         * @summary Block users by domain
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        blockUsersByDomainControllerCloseSession: async (options = {}) => {
            const localVarPath = `/admin/block-users-by-domain`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Count jobs in an instance hierarchy
         * @summary Count jobs in an instance hierarchy
         * @param {string} hub Hub name
         * @param {string} [group] Group name
         * @param {string} [project] Project name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        countProviderJobs: async (hub, group, project, options = {}) => {
            // verify required parameter 'hub' is not null or undefined
            assertParamExists('countProviderJobs', 'hub', hub);
            const localVarPath = `/facade/v1/admin/jobs/count`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            if (hub !== undefined) {
                localVarQueryParameter['hub'] = hub;
            }
            if (group !== undefined) {
                localVarQueryParameter['group'] = group;
            }
            if (project !== undefined) {
                localVarQueryParameter['project'] = project;
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create a refund
         * @summary Create a refund
         * @param {CreateRefundRequest} createRefundRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRefundControllerCreateRefund: async (createRefundRequest, options = {}) => {
            // verify required parameter 'createRefundRequest' is not null or undefined
            assertParamExists('createRefundControllerCreateRefund', 'createRefundRequest', createRefundRequest);
            const localVarPath = `/refunds`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            localVarHeaderParameter['Content-Type'] = 'application/json';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            localVarRequestOptions.data = serializeDataIfNeeded(createRefundRequest, localVarRequestOptions, configuration);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List admin refunds
         * @summary List all active refunds
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAdminRefundsControllerFindAdminRefunds: async (options = {}) => {
            const localVarPath = `/admin/refunds`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get instance shares
         * @summary Get instance shares
         * @param {Array<string>} [instance]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInstanceSharesControllerGetInstanceShares: async (instance, options = {}) => {
            const localVarPath = `/instance-shares`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (instance) {
                localVarQueryParameter['instance'] = instance;
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get the application health
         * @summary Health
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        healthControllerReadiness: async (options = {}) => {
            const localVarPath = `/health`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List jobs in an instance hierarchy
         * @summary List jobs in an instance hierarchy
         * @param {string} hub Hub name
         * @param {string} [group] Group name
         * @param {string} [project] Project name
         * @param {boolean} [pending] Filters only pending or non pending jobs
         * @param {string} [backend] Comma separated systems to filter jobs
         * @param {string} [userId] User Id to filter jobs
         * @param {string} [country] Country to filter jobs
         * @param {ListProviderJobsSortEnum} [sort] Sort jobs by created time
         * @param {number} [limit] Number of results to return at a time
         * @param {number} [offset] Number of results to offset when retrieving the list of jobs
         * @param {string} [createdAfter] Job created after filter
         * @param {string} [createdBefore] Job created before filter
         * @param {string} [search] Searches for jobs containing the specified keyword in their id, name or tags
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listProviderJobs: async (hub, group, project, pending, backend, userId, country, sort, limit, offset, createdAfter, createdBefore, search, options = {}) => {
            // verify required parameter 'hub' is not null or undefined
            assertParamExists('listProviderJobs', 'hub', hub);
            const localVarPath = `/facade/v1/admin/jobs`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            if (hub !== undefined) {
                localVarQueryParameter['hub'] = hub;
            }
            if (group !== undefined) {
                localVarQueryParameter['group'] = group;
            }
            if (project !== undefined) {
                localVarQueryParameter['project'] = project;
            }
            if (pending !== undefined) {
                localVarQueryParameter['pending'] = pending;
            }
            if (backend !== undefined) {
                localVarQueryParameter['backend'] = backend;
            }
            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }
            if (country !== undefined) {
                localVarQueryParameter['country'] = country;
            }
            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (createdAfter !== undefined) {
                localVarQueryParameter['createdAfter'] =
                    createdAfter instanceof Date ? createdAfter.toISOString() : createdAfter;
            }
            if (createdBefore !== undefined) {
                localVarQueryParameter['createdBefore'] =
                    createdBefore instanceof Date
                        ? createdBefore.toISOString()
                        : createdBefore;
            }
            if (search !== undefined) {
                localVarQueryParameter['search'] = search;
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Clear the authorization cache for the specified user.  This is useful if a user\'s role changes.
         * @summary Clear a user\'s authorization cache
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        logout: async (options = {}) => {
            const localVarPath = `/logout`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Sync usage analytics
         * @summary Sync usage analytics
         * @param {boolean} incremental
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        syncAnalyticsUsageControllerSyncAnalyticsUsage: async (incremental, options = {}) => {
            // verify required parameter 'incremental' is not null or undefined
            assertParamExists('syncAnalyticsUsageControllerSyncAnalyticsUsage', 'incremental', incremental);
            const localVarPath = `/crons/sync-analytics-usage`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            if (incremental !== undefined) {
                localVarQueryParameter['incremental'] = incremental;
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         *
         * @summary Get JWT token
         * @param {string} userAuthorization
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateTokenControllerValidateToken: async (userAuthorization, options = {}) => {
            // verify required parameter 'userAuthorization' is not null or undefined
            assertParamExists('validateTokenControllerValidateToken', 'userAuthorization', userAuthorization);
            const localVarPath = `/auth/validate`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (userAuthorization !== null) {
                localVarHeaderParameter['User-Authorization'] = String(userAuthorization);
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get the application version
         * @summary Version
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        versionControllerGetVersion: async (options = {}) => {
            const localVarPath = `/version`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
/**
 * InternalApi - functional programming interface
 * @export
 */
export const InternalApiFp = function (configuration) {
    const localVarAxiosParamCreator = InternalApiAxiosParamCreator(configuration);
    return {
        /**
         * Block users by Domain
         * @summary Block users by domain
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async blockUsersByDomainControllerCloseSession(options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.blockUsersByDomainControllerCloseSession(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['InternalApi.blockUsersByDomainControllerCloseSession']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Count jobs in an instance hierarchy
         * @summary Count jobs in an instance hierarchy
         * @param {string} hub Hub name
         * @param {string} [group] Group name
         * @param {string} [project] Project name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async countProviderJobs(hub, group, project, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.countProviderJobs(hub, group, project, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['InternalApi.countProviderJobs']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Create a refund
         * @summary Create a refund
         * @param {CreateRefundRequest} createRefundRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createRefundControllerCreateRefund(createRefundRequest, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createRefundControllerCreateRefund(createRefundRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['InternalApi.createRefundControllerCreateRefund']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List admin refunds
         * @summary List all active refunds
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findAdminRefundsControllerFindAdminRefunds(options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findAdminRefundsControllerFindAdminRefunds(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['InternalApi.findAdminRefundsControllerFindAdminRefunds']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get instance shares
         * @summary Get instance shares
         * @param {Array<string>} [instance]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getInstanceSharesControllerGetInstanceShares(instance, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getInstanceSharesControllerGetInstanceShares(instance, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['InternalApi.getInstanceSharesControllerGetInstanceShares']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get the application health
         * @summary Health
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async healthControllerReadiness(options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.healthControllerReadiness(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['InternalApi.healthControllerReadiness']?.[localVarOperationServerIndex]
                ?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List jobs in an instance hierarchy
         * @summary List jobs in an instance hierarchy
         * @param {string} hub Hub name
         * @param {string} [group] Group name
         * @param {string} [project] Project name
         * @param {boolean} [pending] Filters only pending or non pending jobs
         * @param {string} [backend] Comma separated systems to filter jobs
         * @param {string} [userId] User Id to filter jobs
         * @param {string} [country] Country to filter jobs
         * @param {ListProviderJobsSortEnum} [sort] Sort jobs by created time
         * @param {number} [limit] Number of results to return at a time
         * @param {number} [offset] Number of results to offset when retrieving the list of jobs
         * @param {string} [createdAfter] Job created after filter
         * @param {string} [createdBefore] Job created before filter
         * @param {string} [search] Searches for jobs containing the specified keyword in their id, name or tags
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listProviderJobs(hub, group, project, pending, backend, userId, country, sort, limit, offset, createdAfter, createdBefore, search, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listProviderJobs(hub, group, project, pending, backend, userId, country, sort, limit, offset, createdAfter, createdBefore, search, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['InternalApi.listProviderJobs']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Clear the authorization cache for the specified user.  This is useful if a user\'s role changes.
         * @summary Clear a user\'s authorization cache
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async logout(options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.logout(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['InternalApi.logout']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Sync usage analytics
         * @summary Sync usage analytics
         * @param {boolean} incremental
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async syncAnalyticsUsageControllerSyncAnalyticsUsage(incremental, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.syncAnalyticsUsageControllerSyncAnalyticsUsage(incremental, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['InternalApi.syncAnalyticsUsageControllerSyncAnalyticsUsage']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         *
         * @summary Get JWT token
         * @param {string} userAuthorization
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async validateTokenControllerValidateToken(userAuthorization, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.validateTokenControllerValidateToken(userAuthorization, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['InternalApi.validateTokenControllerValidateToken']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get the application version
         * @summary Version
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async versionControllerGetVersion(options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.versionControllerGetVersion(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['InternalApi.versionControllerGetVersion']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    };
};
/**
 * InternalApi - factory interface
 * @export
 */
export const InternalApiFactory = function (configuration, basePath, axios) {
    const localVarFp = InternalApiFp(configuration);
    return {
        /**
         * Block users by Domain
         * @summary Block users by domain
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        blockUsersByDomainControllerCloseSession(options) {
            return localVarFp
                .blockUsersByDomainControllerCloseSession(options)
                .then((request) => request(axios, basePath));
        },
        /**
         * Count jobs in an instance hierarchy
         * @summary Count jobs in an instance hierarchy
         * @param {string} hub Hub name
         * @param {string} [group] Group name
         * @param {string} [project] Project name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        countProviderJobs(hub, group, project, options) {
            return localVarFp
                .countProviderJobs(hub, group, project, options)
                .then((request) => request(axios, basePath));
        },
        /**
         * Create a refund
         * @summary Create a refund
         * @param {CreateRefundRequest} createRefundRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRefundControllerCreateRefund(createRefundRequest, options) {
            return localVarFp
                .createRefundControllerCreateRefund(createRefundRequest, options)
                .then((request) => request(axios, basePath));
        },
        /**
         * List admin refunds
         * @summary List all active refunds
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAdminRefundsControllerFindAdminRefunds(options) {
            return localVarFp
                .findAdminRefundsControllerFindAdminRefunds(options)
                .then((request) => request(axios, basePath));
        },
        /**
         * Get instance shares
         * @summary Get instance shares
         * @param {Array<string>} [instance]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInstanceSharesControllerGetInstanceShares(instance, options) {
            return localVarFp
                .getInstanceSharesControllerGetInstanceShares(instance, options)
                .then((request) => request(axios, basePath));
        },
        /**
         * Get the application health
         * @summary Health
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        healthControllerReadiness(options) {
            return localVarFp
                .healthControllerReadiness(options)
                .then((request) => request(axios, basePath));
        },
        /**
         * List jobs in an instance hierarchy
         * @summary List jobs in an instance hierarchy
         * @param {string} hub Hub name
         * @param {string} [group] Group name
         * @param {string} [project] Project name
         * @param {boolean} [pending] Filters only pending or non pending jobs
         * @param {string} [backend] Comma separated systems to filter jobs
         * @param {string} [userId] User Id to filter jobs
         * @param {string} [country] Country to filter jobs
         * @param {ListProviderJobsSortEnum} [sort] Sort jobs by created time
         * @param {number} [limit] Number of results to return at a time
         * @param {number} [offset] Number of results to offset when retrieving the list of jobs
         * @param {string} [createdAfter] Job created after filter
         * @param {string} [createdBefore] Job created before filter
         * @param {string} [search] Searches for jobs containing the specified keyword in their id, name or tags
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listProviderJobs(hub, group, project, pending, backend, userId, country, sort, limit, offset, createdAfter, createdBefore, search, options) {
            return localVarFp
                .listProviderJobs(hub, group, project, pending, backend, userId, country, sort, limit, offset, createdAfter, createdBefore, search, options)
                .then((request) => request(axios, basePath));
        },
        /**
         * Clear the authorization cache for the specified user.  This is useful if a user\'s role changes.
         * @summary Clear a user\'s authorization cache
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        logout(options) {
            return localVarFp.logout(options).then((request) => request(axios, basePath));
        },
        /**
         * Sync usage analytics
         * @summary Sync usage analytics
         * @param {boolean} incremental
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        syncAnalyticsUsageControllerSyncAnalyticsUsage(incremental, options) {
            return localVarFp
                .syncAnalyticsUsageControllerSyncAnalyticsUsage(incremental, options)
                .then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get JWT token
         * @param {string} userAuthorization
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        validateTokenControllerValidateToken(userAuthorization, options) {
            return localVarFp
                .validateTokenControllerValidateToken(userAuthorization, options)
                .then((request) => request(axios, basePath));
        },
        /**
         * Get the application version
         * @summary Version
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        versionControllerGetVersion(options) {
            return localVarFp
                .versionControllerGetVersion(options)
                .then((request) => request(axios, basePath));
        },
    };
};
/**
 * InternalApi - object-oriented interface
 * @export
 * @class InternalApi
 * @extends {BaseAPI}
 */
export class InternalApi extends BaseAPI {
    /**
     * Block users by Domain
     * @summary Block users by domain
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InternalApi
     */
    blockUsersByDomainControllerCloseSession(options) {
        return InternalApiFp(this.configuration)
            .blockUsersByDomainControllerCloseSession(options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * Count jobs in an instance hierarchy
     * @summary Count jobs in an instance hierarchy
     * @param {string} hub Hub name
     * @param {string} [group] Group name
     * @param {string} [project] Project name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InternalApi
     */
    countProviderJobs(hub, group, project, options) {
        return InternalApiFp(this.configuration)
            .countProviderJobs(hub, group, project, options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * Create a refund
     * @summary Create a refund
     * @param {CreateRefundRequest} createRefundRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InternalApi
     */
    createRefundControllerCreateRefund(createRefundRequest, options) {
        return InternalApiFp(this.configuration)
            .createRefundControllerCreateRefund(createRefundRequest, options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * List admin refunds
     * @summary List all active refunds
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InternalApi
     */
    findAdminRefundsControllerFindAdminRefunds(options) {
        return InternalApiFp(this.configuration)
            .findAdminRefundsControllerFindAdminRefunds(options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get instance shares
     * @summary Get instance shares
     * @param {Array<string>} [instance]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InternalApi
     */
    getInstanceSharesControllerGetInstanceShares(instance, options) {
        return InternalApiFp(this.configuration)
            .getInstanceSharesControllerGetInstanceShares(instance, options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get the application health
     * @summary Health
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InternalApi
     */
    healthControllerReadiness(options) {
        return InternalApiFp(this.configuration)
            .healthControllerReadiness(options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * List jobs in an instance hierarchy
     * @summary List jobs in an instance hierarchy
     * @param {string} hub Hub name
     * @param {string} [group] Group name
     * @param {string} [project] Project name
     * @param {boolean} [pending] Filters only pending or non pending jobs
     * @param {string} [backend] Comma separated systems to filter jobs
     * @param {string} [userId] User Id to filter jobs
     * @param {string} [country] Country to filter jobs
     * @param {ListProviderJobsSortEnum} [sort] Sort jobs by created time
     * @param {number} [limit] Number of results to return at a time
     * @param {number} [offset] Number of results to offset when retrieving the list of jobs
     * @param {string} [createdAfter] Job created after filter
     * @param {string} [createdBefore] Job created before filter
     * @param {string} [search] Searches for jobs containing the specified keyword in their id, name or tags
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InternalApi
     */
    listProviderJobs(hub, group, project, pending, backend, userId, country, sort, limit, offset, createdAfter, createdBefore, search, options) {
        return InternalApiFp(this.configuration)
            .listProviderJobs(hub, group, project, pending, backend, userId, country, sort, limit, offset, createdAfter, createdBefore, search, options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * Clear the authorization cache for the specified user.  This is useful if a user\'s role changes.
     * @summary Clear a user\'s authorization cache
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InternalApi
     */
    logout(options) {
        return InternalApiFp(this.configuration)
            .logout(options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * Sync usage analytics
     * @summary Sync usage analytics
     * @param {boolean} incremental
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InternalApi
     */
    syncAnalyticsUsageControllerSyncAnalyticsUsage(incremental, options) {
        return InternalApiFp(this.configuration)
            .syncAnalyticsUsageControllerSyncAnalyticsUsage(incremental, options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get JWT token
     * @param {string} userAuthorization
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InternalApi
     */
    validateTokenControllerValidateToken(userAuthorization, options) {
        return InternalApiFp(this.configuration)
            .validateTokenControllerValidateToken(userAuthorization, options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get the application version
     * @summary Version
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InternalApi
     */
    versionControllerGetVersion(options) {
        return InternalApiFp(this.configuration)
            .versionControllerGetVersion(options)
            .then((request) => request(this.axios, this.basePath));
    }
}
// export const ListProviderJobsSortEnum = {
//   Asc: 'ASC',
//   Desc: 'DESC',
// } as const
// export type ListProviderJobsSortEnum =
//   (typeof ListProviderJobsSortEnum)[keyof typeof ListProviderJobsSortEnum]
/**
 * JobsApi - axios parameter creator
 * @export
 */
export const JobsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Cancels the specified job.
         * @summary Cancel a job
         * @param {string} id Identifier of an existing job
         * @param {string} [parentJobId] Parent Identifier of an existing job
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cancelJobJid: async (id, parentJobId, options = {}) => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('cancelJobJid', 'id', id);
            const localVarPath = `/jobs/{id}/cancel`.replace(`{${'id'}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            if (parentJobId !== null) {
                localVarHeaderParameter['parent-job-id'] = String(parentJobId);
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Invoke a Qiskit Runtime primitive. Note the returned job ID. You will use it to check the job\'s status and review results.
         * @summary Run a job
         * @param {CreateJobRequest} createJobRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createJobControllerCreateJob: async (createJobRequest, options = {}) => {
            // verify required parameter 'createJobRequest' is not null or undefined
            assertParamExists('createJobControllerCreateJob', 'createJobRequest', createJobRequest);
            const localVarPath = `/jobs`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            localVarHeaderParameter['Content-Type'] = 'application/json';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            localVarRequestOptions.data = serializeDataIfNeeded(createJobRequest, localVarRequestOptions, configuration);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete the specified job.
         * @summary Delete a job
         * @param {string} id Identifier of an existing job
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteJobJid: async (id, options = {}) => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteJobJid', 'id', id);
            const localVarPath = `/jobs/{id}`.replace(`{${'id'}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Return the final result from this job.
         * @summary Get job results
         * @param {string} id Identifier of an existing job
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findJobResultsControllerFindJobResult: async (id, options = {}) => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('findJobResultsControllerFindJobResult', 'id', id);
            const localVarPath = `/jobs/{id}/results`.replace(`{${'id'}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get job metrics as an admin
         * @summary Gets metrics of specified job
         * @param {string} id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAdminJobMetricsControllerFindWorkloadsAdmin: async (id, options = {}) => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getAdminJobMetricsControllerFindWorkloadsAdmin', 'id', id);
            const localVarPath = `/admin/jobs/{id}/metrics`.replace(`{${'id'}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Return the interim results from this job. Interim results are kept two days after the job has finished running.
         * @summary List job interim results
         * @param {string} id Identifier of an existing job
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInterimResultsJid: async (id, options = {}) => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getInterimResultsJid', 'id', id);
            const localVarPath = `/jobs/{id}/interim_results`.replace(`{${'id'}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get the details about the specified quantum job
         * @summary Get job
         * @param {string} id Identifier of an existing job
         * @param {boolean} [excludeParams] Exclude job params from the response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJobByIdControllerGetJobById: async (id, excludeParams, options = {}) => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getJobByIdControllerGetJobById', 'id', id);
            const localVarPath = `/jobs/{id}`.replace(`{${'id'}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            if (excludeParams !== undefined) {
                localVarQueryParameter['exclude_params'] = excludeParams;
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets metrics of specified job
         * @summary Get job metrics
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJobMetricsJid: async (id, options = {}) => {
            assertParamExists('getJobMetricsJid', 'id', id);
            const localVarPath = `/jobs/{id}/metrics`.replace(`{${'id'}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get the type about the specified quantum job
         * @summary Get job type
         * @param {string} id Identifier of an existing job
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJobTypeControllerGetUserJobTypeById: async (id, options = {}) => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getJobTypeControllerGetUserJobTypeById', 'id', id);
            const localVarPath = `/facade/v1/jobs/{id}/type`.replace(`{${'id'}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List all job logs for the specified job.
         * @summary List job logs
         * @param {string} id Identifier of an existing job
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJogLogsJid: async (id, options = {}) => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getJogLogsJid', 'id', id);
            const localVarPath = `/jobs/{id}/logs`.replace(`{${'id'}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a result stream as the job runs.
         * @summary Get the job results stream
         * @param {string} id Identifier of an existing job
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        getStreamJobLogsJid: async (id, options = {}) => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getStreamJobLogsJid', 'id', id);
            const localVarPath = `/stream/jobs/{id}`.replace(`{${'id'}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get jobs state updates
         * @summary Get jobs state updates
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        getStreamJobsStateUpdates: async (options = {}) => {
            const localVarPath = `/stream/jobs`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Return a presigned download URL for the transpiled circuits. Currently supported only for the sampler primitive.
         * @summary Get job transpiled circuits
         * @param {string} id Identifier of an existing job
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTranspiledCircuitsJid: async (id, options = {}) => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getTranspiledCircuitsJid', 'id', id);
            const localVarPath = `/jobs/{id}/transpiled_circuits`.replace(`{${'id'}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List the quantum jobs you have run.
         * @summary List jobs
         * @param {number} [limit] Number of results to return at a time
         * @param {number} [offset] Number of results to offset when retrieving the list of jobs
         * @param {boolean} [pending] Returns \&#39;Queued\&#39; and \&#39;Running\&#39; jobs if true.  Returns \&#39;Completed\&#39;, \&#39;Cancelled\&#39;, and \&#39;Failed\&#39; jobs if false.
         * @param {string} [provider] Instance to filter jobs. Should be in the following format {hub}/{group}/{project}
         * @param {string} [program] Program ID to filter jobs
         * @param {string} [backend] System to filter jobs
         * @param {string} [createdAfter] Job created after filter
         * @param {string} [createdBefore] Job created before filter
         * @param {string} [sort] Sort jobs by created time ASC or DESC (default)
         * @param {Array<string>} [tags] Tags to filter jobs
         * @param {string} [sessionId] Session ID to filter jobs
         * @param {boolean} [excludeParams] Exclude job params from the response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listJobs: async (limit, offset, pending, provider, program, backend, createdAfter, createdBefore, sort, tags, sessionId, excludeParams, options = {}) => {
            const localVarPath = `/jobs`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (pending !== undefined) {
                localVarQueryParameter['pending'] = pending;
            }
            if (provider !== undefined) {
                localVarQueryParameter['provider'] = provider;
            }
            if (program !== undefined) {
                localVarQueryParameter['program'] = program;
            }
            if (backend !== undefined) {
                localVarQueryParameter['backend'] = backend;
            }
            if (createdAfter !== undefined) {
                localVarQueryParameter['created_after'] =
                    createdAfter instanceof Date ? createdAfter.toISOString() : createdAfter;
            }
            if (createdBefore !== undefined) {
                localVarQueryParameter['created_before'] =
                    createdBefore instanceof Date
                        ? createdBefore.toISOString()
                        : createdBefore;
            }
            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }
            if (tags) {
                localVarQueryParameter['tags'] = tags;
            }
            if (sessionId !== undefined) {
                localVarQueryParameter['session_id'] = sessionId;
            }
            if (excludeParams !== undefined) {
                localVarQueryParameter['exclude_params'] = excludeParams;
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List user jobs
         * @summary List user jobs
         * @param {string} [provider] Instance to filter jobs. Should be in the following format {hub}/{group}/{project}
         * @param {boolean} [pending] Filters only pending or non pending jobs
         * @param {string} [backend] Comma separated systems to filter jobs
         * @param {ListUserJobsSortEnum} [sort] Sort jobs by created time
         * @param {number} [limit] Number of results to return at a time
         * @param {number} [offset] Number of results to offset when retrieving the list of jobs
         * @param {string} [createdAfter] Job created after filter
         * @param {string} [createdBefore] Job created before filter
         * @param {Array<string>} [tags] Tags to filter jobs
         * @param {string} [program] Program ID to filter jobs
         * @param {string} [sessionId] Session ID to filter jobs
         * @param {boolean} [composerOnly] Returns composer jobs only
         * @param {string} [composerFile] Composer file name to filter jobs
         * @param {string} [search] Searches for jobs containing the specified keyword in their id, name or tags
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listUserJobs: async (provider, pending, backend, sort, limit, offset, createdAfter, createdBefore, tags, program, sessionId, composerOnly, composerFile, search, options = {}) => {
            const localVarPath = `/facade/v1/jobs`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            if (provider !== undefined) {
                localVarQueryParameter['provider'] = provider;
            }
            if (pending !== undefined) {
                localVarQueryParameter['pending'] = pending;
            }
            if (backend !== undefined) {
                localVarQueryParameter['backend'] = backend;
            }
            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (createdAfter !== undefined) {
                localVarQueryParameter['createdAfter'] =
                    createdAfter instanceof Date ? createdAfter.toISOString() : createdAfter;
            }
            if (createdBefore !== undefined) {
                localVarQueryParameter['createdBefore'] =
                    createdBefore instanceof Date
                        ? createdBefore.toISOString()
                        : createdBefore;
            }
            if (tags) {
                localVarQueryParameter['tags'] = tags;
            }
            if (program !== undefined) {
                localVarQueryParameter['program'] = program;
            }
            if (sessionId !== undefined) {
                localVarQueryParameter['sessionId'] = sessionId;
            }
            if (composerOnly !== undefined) {
                localVarQueryParameter['composerOnly'] = composerOnly;
            }
            if (composerFile !== undefined) {
                localVarQueryParameter['composerFile'] = composerFile;
            }
            if (search !== undefined) {
                localVarQueryParameter['search'] = search;
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List tags containing the search keyword from all the user jobs
         * @summary List tags
         * @param {string} search Lists job tags containing the keyword
         * @param {number} [limit] Number of results to return at a time
         * @param {number} [offset] Number of results to offset when retrieving the list of jobs
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listUserJobsTags: async (search, limit, offset, options = {}) => {
            // verify required parameter 'search' is not null or undefined
            assertParamExists('listUserJobsTags', 'search', search);
            const localVarPath = `/facade/v1/jobs/tags`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            if (search !== undefined) {
                localVarQueryParameter['search'] = search;
            }
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Replace job tags
         * @summary Replace job tags
         * @param {string} id Identifier of an existing job
         * @param {ReplaceJobTagsRequest} [replaceJobTagsRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        replaceJobTags: async (id, replaceJobTagsRequest, options = {}) => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('replaceJobTags', 'id', id);
            const localVarPath = `/jobs/{id}/tags`.replace(`{${'id'}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            localVarHeaderParameter['Content-Type'] = 'application/json';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            localVarRequestOptions.data = serializeDataIfNeeded(replaceJobTagsRequest, localVarRequestOptions, configuration);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
/**
 * JobsApi - functional programming interface
 * @export
 */
export const JobsApiFp = function (configuration) {
    const localVarAxiosParamCreator = JobsApiAxiosParamCreator(configuration);
    return {
        /**
         * Cancels the specified job.
         * @summary Cancel a job
         * @param {string} id Identifier of an existing job
         * @param {string} [parentJobId] Parent Identifier of an existing job
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cancelJobJid(id, parentJobId, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cancelJobJid(id, parentJobId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['JobsApi.cancelJobJid']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Invoke a Qiskit Runtime primitive. Note the returned job ID. You will use it to check the job\'s status and review results.
         * @summary Run a job
         * @param {CreateJobRequest} createJobRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createJobControllerCreateJob(createJobRequest, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createJobControllerCreateJob(createJobRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['JobsApi.createJobControllerCreateJob']?.[localVarOperationServerIndex]
                ?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Delete the specified job.
         * @summary Delete a job
         * @param {string} id Identifier of an existing job
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteJobJid(id, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteJobJid(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['JobsApi.deleteJobJid']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Return the final result from this job.
         * @summary Get job results
         * @param {string} id Identifier of an existing job
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findJobResultsControllerFindJobResult(id, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findJobResultsControllerFindJobResult(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['JobsApi.findJobResultsControllerFindJobResult']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get job metrics as an admin
         * @summary Gets metrics of specified job
         * @param {string} id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAdminJobMetricsControllerFindWorkloadsAdmin(id, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAdminJobMetricsControllerFindWorkloadsAdmin(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['JobsApi.getAdminJobMetricsControllerFindWorkloadsAdmin']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Return the interim results from this job. Interim results are kept two days after the job has finished running.
         * @summary List job interim results
         * @param {string} id Identifier of an existing job
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getInterimResultsJid(id, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getInterimResultsJid(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['JobsApi.getInterimResultsJid']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get the details about the specified quantum job
         * @summary Get job
         * @param {string} id Identifier of an existing job
         * @param {boolean} [excludeParams] Exclude job params from the response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getJobByIdControllerGetJobById(id, excludeParams, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getJobByIdControllerGetJobById(id, excludeParams, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['JobsApi.getJobByIdControllerGetJobById']?.[localVarOperationServerIndex]
                ?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Gets metrics of specified job
         * @summary Get job metrics
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getJobMetricsJid(id, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getJobMetricsJid(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['JobsApi.getJobMetricsJid']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get the type about the specified quantum job
         * @summary Get job type
         * @param {string} id Identifier of an existing job
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getJobTypeControllerGetUserJobTypeById(id, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getJobTypeControllerGetUserJobTypeById(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['JobsApi.getJobTypeControllerGetUserJobTypeById']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List all job logs for the specified job.
         * @summary List job logs
         * @param {string} id Identifier of an existing job
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getJogLogsJid(id, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getJogLogsJid(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['JobsApi.getJogLogsJid']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get a result stream as the job runs.
         * @summary Get the job results stream
         * @param {string} id Identifier of an existing job
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        async getStreamJobLogsJid(id, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getStreamJobLogsJid(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['JobsApi.getStreamJobLogsJid']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get jobs state updates
         * @summary Get jobs state updates
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        async getStreamJobsStateUpdates(options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getStreamJobsStateUpdates(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['JobsApi.getStreamJobsStateUpdates']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Return a presigned download URL for the transpiled circuits. Currently supported only for the sampler primitive.
         * @summary Get job transpiled circuits
         * @param {string} id Identifier of an existing job
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTranspiledCircuitsJid(id, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTranspiledCircuitsJid(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['JobsApi.getTranspiledCircuitsJid']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List the quantum jobs you have run.
         * @summary List jobs
         * @param {number} [limit] Number of results to return at a time
         * @param {number} [offset] Number of results to offset when retrieving the list of jobs
         * @param {boolean} [pending] Returns \&#39;Queued\&#39; and \&#39;Running\&#39; jobs if true.  Returns \&#39;Completed\&#39;, \&#39;Cancelled\&#39;, and \&#39;Failed\&#39; jobs if false.
         * @param {string} [provider] Instance to filter jobs. Should be in the following format {hub}/{group}/{project}
         * @param {string} [program] Program ID to filter jobs
         * @param {string} [backend] System to filter jobs
         * @param {string} [createdAfter] Job created after filter
         * @param {string} [createdBefore] Job created before filter
         * @param {string} [sort] Sort jobs by created time ASC or DESC (default)
         * @param {Array<string>} [tags] Tags to filter jobs
         * @param {string} [sessionId] Session ID to filter jobs
         * @param {boolean} [excludeParams] Exclude job params from the response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listJobs(limit, offset, pending, provider, program, backend, createdAfter, createdBefore, sort, tags, sessionId, excludeParams, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listJobs(limit, offset, pending, provider, program, backend, createdAfter, createdBefore, sort, tags, sessionId, excludeParams, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['JobsApi.listJobs']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List user jobs
         * @summary List user jobs
         * @param {string} [provider] Instance to filter jobs. Should be in the following format {hub}/{group}/{project}
         * @param {boolean} [pending] Filters only pending or non pending jobs
         * @param {string} [backend] Comma separated systems to filter jobs
         * @param {ListUserJobsSortEnum} [sort] Sort jobs by created time
         * @param {number} [limit] Number of results to return at a time
         * @param {number} [offset] Number of results to offset when retrieving the list of jobs
         * @param {string} [createdAfter] Job created after filter
         * @param {string} [createdBefore] Job created before filter
         * @param {Array<string>} [tags] Tags to filter jobs
         * @param {string} [program] Program ID to filter jobs
         * @param {string} [sessionId] Session ID to filter jobs
         * @param {boolean} [composerOnly] Returns composer jobs only
         * @param {string} [composerFile] Composer file name to filter jobs
         * @param {string} [search] Searches for jobs containing the specified keyword in their id, name or tags
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listUserJobs(provider, pending, backend, sort, limit, offset, createdAfter, createdBefore, tags, program, sessionId, composerOnly, composerFile, search, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listUserJobs(provider, pending, backend, sort, limit, offset, createdAfter, createdBefore, tags, program, sessionId, composerOnly, composerFile, search, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['JobsApi.listUserJobs']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List tags containing the search keyword from all the user jobs
         * @summary List tags
         * @param {string} search Lists job tags containing the keyword
         * @param {number} [limit] Number of results to return at a time
         * @param {number} [offset] Number of results to offset when retrieving the list of jobs
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listUserJobsTags(search, limit, offset, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listUserJobsTags(search, limit, offset, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['JobsApi.listUserJobsTags']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Replace job tags
         * @summary Replace job tags
         * @param {string} id Identifier of an existing job
         * @param {ReplaceJobTagsRequest} [replaceJobTagsRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async replaceJobTags(id, replaceJobTagsRequest, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.replaceJobTags(id, replaceJobTagsRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['JobsApi.replaceJobTags']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    };
};
/**
 * JobsApi - factory interface
 * @export
 */
export const JobsApiFactory = function (configuration, basePath, axios) {
    const localVarFp = JobsApiFp(configuration);
    return {
        /**
         * Cancels the specified job.
         * @summary Cancel a job
         * @param {string} id Identifier of an existing job
         * @param {string} [parentJobId] Parent Identifier of an existing job
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cancelJobJid(id, parentJobId, options) {
            return localVarFp
                .cancelJobJid(id, parentJobId, options)
                .then((request) => request(axios, basePath));
        },
        /**
         * Invoke a Qiskit Runtime primitive. Note the returned job ID. You will use it to check the job\'s status and review results.
         * @summary Run a job
         * @param {CreateJobRequest} createJobRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createJobControllerCreateJob(createJobRequest, options) {
            return localVarFp
                .createJobControllerCreateJob(createJobRequest, options)
                .then((request) => request(axios, basePath));
        },
        /**
         * Delete the specified job.
         * @summary Delete a job
         * @param {string} id Identifier of an existing job
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteJobJid(id, options) {
            return localVarFp.deleteJobJid(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Return the final result from this job.
         * @summary Get job results
         * @param {string} id Identifier of an existing job
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findJobResultsControllerFindJobResult(id, options) {
            return localVarFp
                .findJobResultsControllerFindJobResult(id, options)
                .then((request) => request(axios, basePath));
        },
        /**
         * Get job metrics as an admin
         * @summary Gets metrics of specified job
         * @param {string} id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAdminJobMetricsControllerFindWorkloadsAdmin(id, options) {
            return localVarFp
                .getAdminJobMetricsControllerFindWorkloadsAdmin(id, options)
                .then((request) => request(axios, basePath));
        },
        /**
         * Return the interim results from this job. Interim results are kept two days after the job has finished running.
         * @summary List job interim results
         * @param {string} id Identifier of an existing job
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInterimResultsJid(id, options) {
            return localVarFp
                .getInterimResultsJid(id, options)
                .then((request) => request(axios, basePath));
        },
        /**
         * Get the details about the specified quantum job
         * @summary Get job
         * @param {string} id Identifier of an existing job
         * @param {boolean} [excludeParams] Exclude job params from the response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJobByIdControllerGetJobById(id, excludeParams, options) {
            return localVarFp
                .getJobByIdControllerGetJobById(id, excludeParams, options)
                .then((request) => request(axios, basePath));
        },
        /**
         * Gets metrics of specified job
         * @summary Get job metrics
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJobMetricsJid(id, options) {
            return localVarFp.getJobMetricsJid(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Get the type about the specified quantum job
         * @summary Get job type
         * @param {string} id Identifier of an existing job
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJobTypeControllerGetUserJobTypeById(id, options) {
            return localVarFp
                .getJobTypeControllerGetUserJobTypeById(id, options)
                .then((request) => request(axios, basePath));
        },
        /**
         * List all job logs for the specified job.
         * @summary List job logs
         * @param {string} id Identifier of an existing job
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJogLogsJid(id, options) {
            return localVarFp.getJogLogsJid(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a result stream as the job runs.
         * @summary Get the job results stream
         * @param {string} id Identifier of an existing job
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        getStreamJobLogsJid(id, options) {
            return localVarFp.getStreamJobLogsJid(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Get jobs state updates
         * @summary Get jobs state updates
         * @param {*} [options] Override http request option.
         * @deprecated
         * @throws {RequiredError}
         */
        getStreamJobsStateUpdates(options) {
            return localVarFp
                .getStreamJobsStateUpdates(options)
                .then((request) => request(axios, basePath));
        },
        /**
         * Return a presigned download URL for the transpiled circuits. Currently supported only for the sampler primitive.
         * @summary Get job transpiled circuits
         * @param {string} id Identifier of an existing job
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTranspiledCircuitsJid(id, options) {
            return localVarFp
                .getTranspiledCircuitsJid(id, options)
                .then((request) => request(axios, basePath));
        },
        /**
         * List the quantum jobs you have run.
         * @summary List jobs
         * @param {number} [limit] Number of results to return at a time
         * @param {number} [offset] Number of results to offset when retrieving the list of jobs
         * @param {boolean} [pending] Returns \&#39;Queued\&#39; and \&#39;Running\&#39; jobs if true.  Returns \&#39;Completed\&#39;, \&#39;Cancelled\&#39;, and \&#39;Failed\&#39; jobs if false.
         * @param {string} [provider] Instance to filter jobs. Should be in the following format {hub}/{group}/{project}
         * @param {string} [program] Program ID to filter jobs
         * @param {string} [backend] System to filter jobs
         * @param {string} [createdAfter] Job created after filter
         * @param {string} [createdBefore] Job created before filter
         * @param {string} [sort] Sort jobs by created time ASC or DESC (default)
         * @param {Array<string>} [tags] Tags to filter jobs
         * @param {string} [sessionId] Session ID to filter jobs
         * @param {boolean} [excludeParams] Exclude job params from the response
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listJobs(limit, offset, pending, provider, program, backend, createdAfter, createdBefore, sort, tags, sessionId, excludeParams, options) {
            return localVarFp
                .listJobs(limit, offset, pending, provider, program, backend, createdAfter, createdBefore, sort, tags, sessionId, excludeParams, options)
                .then((request) => request(axios, basePath));
        },
        /**
         * List user jobs
         * @summary List user jobs
         * @param {string} [provider] Instance to filter jobs. Should be in the following format {hub}/{group}/{project}
         * @param {boolean} [pending] Filters only pending or non pending jobs
         * @param {string} [backend] Comma separated systems to filter jobs
         * @param {ListUserJobsSortEnum} [sort] Sort jobs by created time
         * @param {number} [limit] Number of results to return at a time
         * @param {number} [offset] Number of results to offset when retrieving the list of jobs
         * @param {string} [createdAfter] Job created after filter
         * @param {string} [createdBefore] Job created before filter
         * @param {Array<string>} [tags] Tags to filter jobs
         * @param {string} [program] Program ID to filter jobs
         * @param {string} [sessionId] Session ID to filter jobs
         * @param {boolean} [composerOnly] Returns composer jobs only
         * @param {string} [composerFile] Composer file name to filter jobs
         * @param {string} [search] Searches for jobs containing the specified keyword in their id, name or tags
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listUserJobs(provider, pending, backend, sort, limit, offset, createdAfter, createdBefore, tags, program, sessionId, composerOnly, composerFile, search, options) {
            return localVarFp
                .listUserJobs(provider, pending, backend, sort, limit, offset, createdAfter, createdBefore, tags, program, sessionId, composerOnly, composerFile, search, options)
                .then((request) => request(axios, basePath));
        },
        /**
         * List tags containing the search keyword from all the user jobs
         * @summary List tags
         * @param {string} search Lists job tags containing the keyword
         * @param {number} [limit] Number of results to return at a time
         * @param {number} [offset] Number of results to offset when retrieving the list of jobs
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listUserJobsTags(search, limit, offset, options) {
            return localVarFp
                .listUserJobsTags(search, limit, offset, options)
                .then((request) => request(axios, basePath));
        },
        /**
         * Replace job tags
         * @summary Replace job tags
         * @param {string} id Identifier of an existing job
         * @param {ReplaceJobTagsRequest} [replaceJobTagsRequest]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        replaceJobTags(id, replaceJobTagsRequest, options) {
            return localVarFp
                .replaceJobTags(id, replaceJobTagsRequest, options)
                .then((request) => request(axios, basePath));
        },
    };
};
/**
 * JobsApi - object-oriented interface
 * @export
 * @class JobsApi
 * @extends {BaseAPI}
 */
export class JobsApi extends BaseAPI {
    /**
     * Cancels the specified job.
     * @summary Cancel a job
     * @param {string} id Identifier of an existing job
     * @param {string} [parentJobId] Parent Identifier of an existing job
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApi
     */
    cancelJobJid(id, parentJobId, options) {
        return JobsApiFp(this.configuration)
            .cancelJobJid(id, parentJobId, options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * Invoke a Qiskit Runtime primitive. Note the returned job ID. You will use it to check the job\'s status and review results.
     * @summary Run a job
     * @param {CreateJobRequest} createJobRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApi
     */
    createJobControllerCreateJob(createJobRequest, options) {
        return JobsApiFp(this.configuration)
            .createJobControllerCreateJob(createJobRequest, options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * Delete the specified job.
     * @summary Delete a job
     * @param {string} id Identifier of an existing job
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApi
     */
    deleteJobJid(id, options) {
        return JobsApiFp(this.configuration)
            .deleteJobJid(id, options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * Return the final result from this job.
     * @summary Get job results
     * @param {string} id Identifier of an existing job
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApi
     */
    findJobResultsControllerFindJobResult(id, options) {
        return JobsApiFp(this.configuration)
            .findJobResultsControllerFindJobResult(id, options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get job metrics as an admin
     * @summary Gets metrics of specified job
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApi
     */
    getAdminJobMetricsControllerFindWorkloadsAdmin(id, options) {
        return JobsApiFp(this.configuration)
            .getAdminJobMetricsControllerFindWorkloadsAdmin(id, options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * Return the interim results from this job. Interim results are kept two days after the job has finished running.
     * @summary List job interim results
     * @param {string} id Identifier of an existing job
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApi
     */
    getInterimResultsJid(id, options) {
        return JobsApiFp(this.configuration)
            .getInterimResultsJid(id, options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get the details about the specified quantum job
     * @summary Get job
     * @param {string} id Identifier of an existing job
     * @param {boolean} [excludeParams] Exclude job params from the response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApi
     */
    getJobByIdControllerGetJobById(id, excludeParams, options) {
        return JobsApiFp(this.configuration)
            .getJobByIdControllerGetJobById(id, excludeParams, options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * Gets metrics of specified job
     * @summary Get job metrics
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApi
     */
    getJobMetricsJid(id, options) {
        return JobsApiFp(this.configuration)
            .getJobMetricsJid(id, options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get the type about the specified quantum job
     * @summary Get job type
     * @param {string} id Identifier of an existing job
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApi
     */
    getJobTypeControllerGetUserJobTypeById(id, options) {
        return JobsApiFp(this.configuration)
            .getJobTypeControllerGetUserJobTypeById(id, options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * List all job logs for the specified job.
     * @summary List job logs
     * @param {string} id Identifier of an existing job
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApi
     */
    getJogLogsJid(id, options) {
        return JobsApiFp(this.configuration)
            .getJogLogsJid(id, options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get a result stream as the job runs.
     * @summary Get the job results stream
     * @param {string} id Identifier of an existing job
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     * @memberof JobsApi
     */
    getStreamJobLogsJid(id, options) {
        return JobsApiFp(this.configuration)
            .getStreamJobLogsJid(id, options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get jobs state updates
     * @summary Get jobs state updates
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     * @memberof JobsApi
     */
    getStreamJobsStateUpdates(options) {
        return JobsApiFp(this.configuration)
            .getStreamJobsStateUpdates(options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * Return a presigned download URL for the transpiled circuits. Currently supported only for the sampler primitive.
     * @summary Get job transpiled circuits
     * @param {string} id Identifier of an existing job
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApi
     */
    getTranspiledCircuitsJid(id, options) {
        return JobsApiFp(this.configuration)
            .getTranspiledCircuitsJid(id, options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * List the quantum jobs you have run.
     * @summary List jobs
     * @param {number} [limit] Number of results to return at a time
     * @param {number} [offset] Number of results to offset when retrieving the list of jobs
     * @param {boolean} [pending] Returns \&#39;Queued\&#39; and \&#39;Running\&#39; jobs if true.  Returns \&#39;Completed\&#39;, \&#39;Cancelled\&#39;, and \&#39;Failed\&#39; jobs if false.
     * @param {string} [provider] Instance to filter jobs. Should be in the following format {hub}/{group}/{project}
     * @param {string} [program] Program ID to filter jobs
     * @param {string} [backend] System to filter jobs
     * @param {string} [createdAfter] Job created after filter
     * @param {string} [createdBefore] Job created before filter
     * @param {string} [sort] Sort jobs by created time ASC or DESC (default)
     * @param {Array<string>} [tags] Tags to filter jobs
     * @param {string} [sessionId] Session ID to filter jobs
     * @param {boolean} [excludeParams] Exclude job params from the response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApi
     */
    listJobs(limit, offset, pending, provider, program, backend, createdAfter, createdBefore, sort, tags, sessionId, excludeParams, options) {
        return JobsApiFp(this.configuration)
            .listJobs(limit, offset, pending, provider, program, backend, createdAfter, createdBefore, sort, tags, sessionId, excludeParams, options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * List user jobs
     * @summary List user jobs
     * @param {string} [provider] Instance to filter jobs. Should be in the following format {hub}/{group}/{project}
     * @param {boolean} [pending] Filters only pending or non pending jobs
     * @param {string} [backend] Comma separated systems to filter jobs
     * @param {ListUserJobsSortEnum} [sort] Sort jobs by created time
     * @param {number} [limit] Number of results to return at a time
     * @param {number} [offset] Number of results to offset when retrieving the list of jobs
     * @param {string} [createdAfter] Job created after filter
     * @param {string} [createdBefore] Job created before filter
     * @param {Array<string>} [tags] Tags to filter jobs
     * @param {string} [program] Program ID to filter jobs
     * @param {string} [sessionId] Session ID to filter jobs
     * @param {boolean} [composerOnly] Returns composer jobs only
     * @param {string} [composerFile] Composer file name to filter jobs
     * @param {string} [search] Searches for jobs containing the specified keyword in their id, name or tags
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApi
     */
    listUserJobs(provider, pending, backend, sort, limit, offset, createdAfter, createdBefore, tags, program, sessionId, composerOnly, composerFile, search, options) {
        return JobsApiFp(this.configuration)
            .listUserJobs(provider, pending, backend, sort, limit, offset, createdAfter, createdBefore, tags, program, sessionId, composerOnly, composerFile, search, options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * List tags containing the search keyword from all the user jobs
     * @summary List tags
     * @param {string} search Lists job tags containing the keyword
     * @param {number} [limit] Number of results to return at a time
     * @param {number} [offset] Number of results to offset when retrieving the list of jobs
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApi
     */
    listUserJobsTags(search, limit, offset, options) {
        return JobsApiFp(this.configuration)
            .listUserJobsTags(search, limit, offset, options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * Replace job tags
     * @summary Replace job tags
     * @param {string} id Identifier of an existing job
     * @param {ReplaceJobTagsRequest} [replaceJobTagsRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApi
     */
    replaceJobTags(id, replaceJobTagsRequest, options) {
        return JobsApiFp(this.configuration)
            .replaceJobTags(id, replaceJobTagsRequest, options)
            .then((request) => request(this.axios, this.basePath));
    }
}
/**
 * @export
 */
export const ListUserJobsSortEnum = {
    Asc: 'ASC',
    Desc: 'DESC',
};
/**
 * MetricsApi - axios parameter creator
 * @export
 */
export const MetricsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Get job metrics as an admin
         * @summary Gets metrics of specified job
         * @param {string} id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAdminJobMetricsControllerFindWorkloadsAdmin: async (id, options = {}) => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getAdminJobMetricsControllerFindWorkloadsAdmin', 'id', id);
            const localVarPath = `/admin/jobs/{id}/metrics`.replace(`{${'id'}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
/**
 * MetricsApi - functional programming interface
 * @export
 */
export const MetricsApiFp = function (configuration) {
    const localVarAxiosParamCreator = MetricsApiAxiosParamCreator(configuration);
    return {
        /**
         * Get job metrics as an admin
         * @summary Gets metrics of specified job
         * @param {string} id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAdminJobMetricsControllerFindWorkloadsAdmin(id, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAdminJobMetricsControllerFindWorkloadsAdmin(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MetricsApi.getAdminJobMetricsControllerFindWorkloadsAdmin']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    };
};
/**
 * MetricsApi - factory interface
 * @export
 */
export const MetricsApiFactory = function (configuration, basePath, axios) {
    const localVarFp = MetricsApiFp(configuration);
    return {
        /**
         * Get job metrics as an admin
         * @summary Gets metrics of specified job
         * @param {string} id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAdminJobMetricsControllerFindWorkloadsAdmin(id, options) {
            return localVarFp
                .getAdminJobMetricsControllerFindWorkloadsAdmin(id, options)
                .then((request) => request(axios, basePath));
        },
    };
};
/**
 * MetricsApi - object-oriented interface
 * @export
 * @class MetricsApi
 * @extends {BaseAPI}
 */
export class MetricsApi extends BaseAPI {
    /**
     * Get job metrics as an admin
     * @summary Gets metrics of specified job
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MetricsApi
     */
    getAdminJobMetricsControllerFindWorkloadsAdmin(id, options) {
        return MetricsApiFp(this.configuration)
            .getAdminJobMetricsControllerFindWorkloadsAdmin(id, options)
            .then((request) => request(this.axios, this.basePath));
    }
}
/**
 * SessionsApi - axios parameter creator
 * @export
 */
export const SessionsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Closes the runtime session
         * @summary Close session
         * @param {string} id Session Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        closeSession: async (id, options = {}) => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('closeSession', 'id', id);
            const localVarPath = `/sessions/{id}/close`.replace(`{${'id'}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Create a runtime session
         * @summary Create session
         * @param {CreateSessionRequest} createSessionRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSessionControllerCreateSession: async (createSessionRequest, options = {}) => {
            // verify required parameter 'createSessionRequest' is not null or undefined
            assertParamExists('createSessionControllerCreateSession', 'createSessionRequest', createSessionRequest);
            const localVarPath = `/sessions`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            localVarHeaderParameter['Content-Type'] = 'application/json';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            localVarRequestOptions.data = serializeDataIfNeeded(createSessionRequest, localVarRequestOptions, configuration);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a runtime session details
         * @summary Get session
         * @param {string} id Identifier of an existing runtime session
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSessionDetailsControllerGetSessionDetails: async (id, options = {}) => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getSessionDetailsControllerGetSessionDetails', 'id', id);
            const localVarPath = `/sessions/{id}`.replace(`{${'id'}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a runtime session details
         * @summary Get session
         * @param {string} id Identifier of an existing runtime session
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSessionDetailsExtendedControllerGetSessionDetails: async (id, options = {}) => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getSessionDetailsExtendedControllerGetSessionDetails', 'id', id);
            const localVarPath = `/sessions/{id}/extended`.replace(`{${'id'}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get all jobs from a session id
         * @summary Get session jobs
         * @param {string} id
         * @param {number} [offset] Number of jobs to skip when retrieving the list of jobs
         * @param {number} [limit] Number of jobs to return at a time
         * @param {GetSessionJobsControllerGetSessionJobsSortEnum} [sort] Order to sort the workloads by
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSessionJobsControllerGetSessionJobs: async (id, offset, limit, sort, options = {}) => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getSessionJobsControllerGetSessionJobs', 'id', id);
            const localVarPath = `/sessions/{id}/jobs`.replace(`{${'id'}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update a session
         * @summary Update session
         * @param {string} id Identifier of an existing runtime session
         * @param {UpdateSessionRequest} updateSessionRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSessionControllerUpdateSession: async (id, updateSessionRequest, options = {}) => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateSessionControllerUpdateSession', 'id', id);
            // verify required parameter 'updateSessionRequest' is not null or undefined
            assertParamExists('updateSessionControllerUpdateSession', 'updateSessionRequest', updateSessionRequest);
            const localVarPath = `/sessions/{id}`.replace(`{${'id'}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            localVarHeaderParameter['Content-Type'] = 'application/json';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            localVarRequestOptions.data = serializeDataIfNeeded(updateSessionRequest, localVarRequestOptions, configuration);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
/**
 * SessionsApi - functional programming interface
 * @export
 */
export const SessionsApiFp = function (configuration) {
    const localVarAxiosParamCreator = SessionsApiAxiosParamCreator(configuration);
    return {
        /**
         * Closes the runtime session
         * @summary Close session
         * @param {string} id Session Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async closeSession(id, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.closeSession(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SessionsApi.closeSession']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Create a runtime session
         * @summary Create session
         * @param {CreateSessionRequest} createSessionRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createSessionControllerCreateSession(createSessionRequest, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createSessionControllerCreateSession(createSessionRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SessionsApi.createSessionControllerCreateSession']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get a runtime session details
         * @summary Get session
         * @param {string} id Identifier of an existing runtime session
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSessionDetailsControllerGetSessionDetails(id, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSessionDetailsControllerGetSessionDetails(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SessionsApi.getSessionDetailsControllerGetSessionDetails']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get a runtime session details
         * @summary Get session
         * @param {string} id Identifier of an existing runtime session
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSessionDetailsExtendedControllerGetSessionDetails(id, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSessionDetailsExtendedControllerGetSessionDetails(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SessionsApi.getSessionDetailsExtendedControllerGetSessionDetails']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get all jobs from a session id
         * @summary Get session jobs
         * @param {string} id
         * @param {number} [offset] Number of jobs to skip when retrieving the list of jobs
         * @param {number} [limit] Number of jobs to return at a time
         * @param {GetSessionJobsControllerGetSessionJobsSortEnum} [sort] Order to sort the workloads by
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSessionJobsControllerGetSessionJobs(id, offset, limit, sort, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSessionJobsControllerGetSessionJobs(id, offset, limit, sort, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SessionsApi.getSessionJobsControllerGetSessionJobs']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Update a session
         * @summary Update session
         * @param {string} id Identifier of an existing runtime session
         * @param {UpdateSessionRequest} updateSessionRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateSessionControllerUpdateSession(id, updateSessionRequest, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateSessionControllerUpdateSession(id, updateSessionRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SessionsApi.updateSessionControllerUpdateSession']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    };
};
/**
 * SessionsApi - factory interface
 * @export
 */
export const SessionsApiFactory = function (configuration, basePath, axios) {
    const localVarFp = SessionsApiFp(configuration);
    return {
        /**
         * Closes the runtime session
         * @summary Close session
         * @param {string} id Session Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        closeSession(id, options) {
            return localVarFp.closeSession(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Create a runtime session
         * @summary Create session
         * @param {CreateSessionRequest} createSessionRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSessionControllerCreateSession(createSessionRequest, options) {
            return localVarFp
                .createSessionControllerCreateSession(createSessionRequest, options)
                .then((request) => request(axios, basePath));
        },
        /**
         * Get a runtime session details
         * @summary Get session
         * @param {string} id Identifier of an existing runtime session
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSessionDetailsControllerGetSessionDetails(id, options) {
            return localVarFp
                .getSessionDetailsControllerGetSessionDetails(id, options)
                .then((request) => request(axios, basePath));
        },
        /**
         * Get a runtime session details
         * @summary Get session
         * @param {string} id Identifier of an existing runtime session
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSessionDetailsExtendedControllerGetSessionDetails(id, options) {
            return localVarFp
                .getSessionDetailsExtendedControllerGetSessionDetails(id, options)
                .then((request) => request(axios, basePath));
        },
        /**
         * Get all jobs from a session id
         * @summary Get session jobs
         * @param {string} id
         * @param {number} [offset] Number of jobs to skip when retrieving the list of jobs
         * @param {number} [limit] Number of jobs to return at a time
         * @param {GetSessionJobsControllerGetSessionJobsSortEnum} [sort] Order to sort the workloads by
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSessionJobsControllerGetSessionJobs(id, offset, limit, sort, options) {
            return localVarFp
                .getSessionJobsControllerGetSessionJobs(id, offset, limit, sort, options)
                .then((request) => request(axios, basePath));
        },
        /**
         * Update a session
         * @summary Update session
         * @param {string} id Identifier of an existing runtime session
         * @param {UpdateSessionRequest} updateSessionRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSessionControllerUpdateSession(id, updateSessionRequest, options) {
            return localVarFp
                .updateSessionControllerUpdateSession(id, updateSessionRequest, options)
                .then((request) => request(axios, basePath));
        },
    };
};
/**
 * SessionsApi - object-oriented interface
 * @export
 * @class SessionsApi
 * @extends {BaseAPI}
 */
export class SessionsApi extends BaseAPI {
    /**
     * Closes the runtime session
     * @summary Close session
     * @param {string} id Session Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SessionsApi
     */
    closeSession(id, options) {
        return SessionsApiFp(this.configuration)
            .closeSession(id, options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * Create a runtime session
     * @summary Create session
     * @param {CreateSessionRequest} createSessionRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SessionsApi
     */
    createSessionControllerCreateSession(createSessionRequest, options) {
        return SessionsApiFp(this.configuration)
            .createSessionControllerCreateSession(createSessionRequest, options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get a runtime session details
     * @summary Get session
     * @param {string} id Identifier of an existing runtime session
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SessionsApi
     */
    getSessionDetailsControllerGetSessionDetails(id, options) {
        return SessionsApiFp(this.configuration)
            .getSessionDetailsControllerGetSessionDetails(id, options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get a runtime session details
     * @summary Get session
     * @param {string} id Identifier of an existing runtime session
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SessionsApi
     */
    getSessionDetailsExtendedControllerGetSessionDetails(id, options) {
        return SessionsApiFp(this.configuration)
            .getSessionDetailsExtendedControllerGetSessionDetails(id, options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get all jobs from a session id
     * @summary Get session jobs
     * @param {string} id
     * @param {number} [offset] Number of jobs to skip when retrieving the list of jobs
     * @param {number} [limit] Number of jobs to return at a time
     * @param {GetSessionJobsControllerGetSessionJobsSortEnum} [sort] Order to sort the workloads by
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SessionsApi
     */
    getSessionJobsControllerGetSessionJobs(id, offset, limit, sort, options) {
        return SessionsApiFp(this.configuration)
            .getSessionJobsControllerGetSessionJobs(id, offset, limit, sort, options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * Update a session
     * @summary Update session
     * @param {string} id Identifier of an existing runtime session
     * @param {UpdateSessionRequest} updateSessionRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SessionsApi
     */
    updateSessionControllerUpdateSession(id, updateSessionRequest, options) {
        return SessionsApiFp(this.configuration)
            .updateSessionControllerUpdateSession(id, updateSessionRequest, options)
            .then((request) => request(this.axios, this.basePath));
    }
}
/**
 * @export
 */
export const GetSessionJobsControllerGetSessionJobsSortEnum = {
    Asc: 'asc',
    Desc: 'desc',
    Asc2: 'ASC',
    Desc2: 'DESC',
};
/**
 * SystemsApi - axios parameter creator
 * @export
 */
export const SystemsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Get system configuration
         * @summary Get system configuration
         * @param {string} name  Name of an available system
         * @param {string} [xQxClientApplication] Specify qiskit client application and its attributes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBackendConfigurationControllerGetBackendConfiguration: async (name, xQxClientApplication, options = {}) => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getBackendConfigurationControllerGetBackendConfiguration', 'name', name);
            const localVarPath = `/backends/{name}/configuration`.replace(`{${'name'}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            if (xQxClientApplication !== null) {
                localVarHeaderParameter['x-qx-client-application'] = String(xQxClientApplication);
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get system defaults
         * @summary Get system defaults
         * @param {string} name  Name of an available system
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBackendDefaultsControllerGetBackendDefaults: async (name, options = {}) => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getBackendDefaultsControllerGetBackendDefaults', 'name', name);
            const localVarPath = `/backends/{name}/defaults`.replace(`{${'name'}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get system properties
         * @summary Get system properties
         * @param {string} name  Name of an available system
         * @param {string} [updatedBefore]
         * @param {string} [xQxClientApplication] Specify qiskit client application and its attributes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBackendPropertiesControllerGetBackendProperties: async (name, updatedBefore, xQxClientApplication, options = {}) => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getBackendPropertiesControllerGetBackendProperties', 'name', name);
            const localVarPath = `/backends/{name}/properties`.replace(`{${'name'}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            if (updatedBefore !== undefined) {
                localVarQueryParameter['updated_before'] =
                    updatedBefore instanceof Date
                        ? updatedBefore.toISOString()
                        : updatedBefore;
            }
            if (xQxClientApplication !== null) {
                localVarHeaderParameter['x-qx-client-application'] = String(xQxClientApplication);
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the status for the specified system name.
         * @summary Get system status
         * @param {string} id Name of an available system
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBackendStatus: async (id, options = {}) => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getBackendStatus', 'id', id);
            const localVarPath = `/backends/{id}/status`.replace(`{${'id'}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of all the systems your instance has access to.
         * @summary List your systems
         * @param {string} [provider] Instance to filter systems. Should be in the following format {hub}/{group}/{project}
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listBackends: async (provider, options = {}) => {
            const localVarPath = `/backends`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            if (provider !== undefined) {
                localVarQueryParameter['provider'] = provider;
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
/**
 * SystemsApi - functional programming interface
 * @export
 */
export const SystemsApiFp = function (configuration) {
    const localVarAxiosParamCreator = SystemsApiAxiosParamCreator(configuration);
    return {
        /**
         * Get system configuration
         * @summary Get system configuration
         * @param {string} name  Name of an available system
         * @param {string} [xQxClientApplication] Specify qiskit client application and its attributes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBackendConfigurationControllerGetBackendConfiguration(name, xQxClientApplication, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBackendConfigurationControllerGetBackendConfiguration(name, xQxClientApplication, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SystemsApi.getBackendConfigurationControllerGetBackendConfiguration']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get system defaults
         * @summary Get system defaults
         * @param {string} name  Name of an available system
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBackendDefaultsControllerGetBackendDefaults(name, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBackendDefaultsControllerGetBackendDefaults(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SystemsApi.getBackendDefaultsControllerGetBackendDefaults']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get system properties
         * @summary Get system properties
         * @param {string} name  Name of an available system
         * @param {string} [updatedBefore]
         * @param {string} [xQxClientApplication] Specify qiskit client application and its attributes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBackendPropertiesControllerGetBackendProperties(name, updatedBefore, xQxClientApplication, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBackendPropertiesControllerGetBackendProperties(name, updatedBefore, xQxClientApplication, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SystemsApi.getBackendPropertiesControllerGetBackendProperties']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns the status for the specified system name.
         * @summary Get system status
         * @param {string} id Name of an available system
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBackendStatus(id, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBackendStatus(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SystemsApi.getBackendStatus']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Returns a list of all the systems your instance has access to.
         * @summary List your systems
         * @param {string} [provider] Instance to filter systems. Should be in the following format {hub}/{group}/{project}
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listBackends(provider, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listBackends(provider, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SystemsApi.listBackends']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    };
};
/**
 * SystemsApi - factory interface
 * @export
 */
export const SystemsApiFactory = function (configuration, basePath, axios) {
    const localVarFp = SystemsApiFp(configuration);
    return {
        /**
         * Get system configuration
         * @summary Get system configuration
         * @param {string} name  Name of an available system
         * @param {string} [xQxClientApplication] Specify qiskit client application and its attributes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBackendConfigurationControllerGetBackendConfiguration(name, xQxClientApplication, options) {
            return localVarFp
                .getBackendConfigurationControllerGetBackendConfiguration(name, xQxClientApplication, options)
                .then((request) => request(axios, basePath));
        },
        /**
         * Get system defaults
         * @summary Get system defaults
         * @param {string} name  Name of an available system
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBackendDefaultsControllerGetBackendDefaults(name, options) {
            return localVarFp
                .getBackendDefaultsControllerGetBackendDefaults(name, options)
                .then((request) => request(axios, basePath));
        },
        /**
         * Get system properties
         * @summary Get system properties
         * @param {string} name  Name of an available system
         * @param {string} [updatedBefore]
         * @param {string} [xQxClientApplication] Specify qiskit client application and its attributes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBackendPropertiesControllerGetBackendProperties(name, updatedBefore, xQxClientApplication, options) {
            return localVarFp
                .getBackendPropertiesControllerGetBackendProperties(name, updatedBefore, xQxClientApplication, options)
                .then((request) => request(axios, basePath));
        },
        /**
         * Returns the status for the specified system name.
         * @summary Get system status
         * @param {string} id Name of an available system
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBackendStatus(id, options) {
            return localVarFp.getBackendStatus(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all the systems your instance has access to.
         * @summary List your systems
         * @param {string} [provider] Instance to filter systems. Should be in the following format {hub}/{group}/{project}
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listBackends(provider, options) {
            return localVarFp.listBackends(provider, options).then((request) => request(axios, basePath));
        },
    };
};
/**
 * SystemsApi - object-oriented interface
 * @export
 * @class SystemsApi
 * @extends {BaseAPI}
 */
export class SystemsApi extends BaseAPI {
    /**
     * Get system configuration
     * @summary Get system configuration
     * @param {string} name  Name of an available system
     * @param {string} [xQxClientApplication] Specify qiskit client application and its attributes
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemsApi
     */
    getBackendConfigurationControllerGetBackendConfiguration(name, xQxClientApplication, options) {
        return SystemsApiFp(this.configuration)
            .getBackendConfigurationControllerGetBackendConfiguration(name, xQxClientApplication, options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get system defaults
     * @summary Get system defaults
     * @param {string} name  Name of an available system
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemsApi
     */
    getBackendDefaultsControllerGetBackendDefaults(name, options) {
        return SystemsApiFp(this.configuration)
            .getBackendDefaultsControllerGetBackendDefaults(name, options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get system properties
     * @summary Get system properties
     * @param {string} name  Name of an available system
     * @param {string} [updatedBefore]
     * @param {string} [xQxClientApplication] Specify qiskit client application and its attributes
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemsApi
     */
    getBackendPropertiesControllerGetBackendProperties(name, updatedBefore, xQxClientApplication, options) {
        return SystemsApiFp(this.configuration)
            .getBackendPropertiesControllerGetBackendProperties(name, updatedBefore, xQxClientApplication, options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * Returns the status for the specified system name.
     * @summary Get system status
     * @param {string} id Name of an available system
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemsApi
     */
    getBackendStatus(id, options) {
        return SystemsApiFp(this.configuration)
            .getBackendStatus(id, options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * Returns a list of all the systems your instance has access to.
     * @summary List your systems
     * @param {string} [provider] Instance to filter systems. Should be in the following format {hub}/{group}/{project}
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SystemsApi
     */
    listBackends(provider, options) {
        return SystemsApiFp(this.configuration)
            .listBackends(provider, options)
            .then((request) => request(this.axios, this.basePath));
    }
}
/**
 * TagsApi - axios parameter creator
 * @export
 */
export const TagsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Search and list the tags of jobs.
         * @summary List tags
         * @param {TagsGetTypeEnum} type Searches for tags in the specified type.
         * @param {string} search Used for searching tags.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tagsGet: async (type, search, options = {}) => {
            // verify required parameter 'type' is not null or undefined
            assertParamExists('tagsGet', 'type', type);
            // verify required parameter 'search' is not null or undefined
            assertParamExists('tagsGet', 'search', search);
            const localVarPath = `/tags`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (search !== undefined) {
                localVarQueryParameter['search'] = search;
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
/**
 * TagsApi - functional programming interface
 * @export
 */
export const TagsApiFp = function (configuration) {
    const localVarAxiosParamCreator = TagsApiAxiosParamCreator(configuration);
    return {
        /**
         * Search and list the tags of jobs.
         * @summary List tags
         * @param {TagsGetTypeEnum} type Searches for tags in the specified type.
         * @param {string} search Used for searching tags.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tagsGet(type, search, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tagsGet(type, search, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['TagsApi.tagsGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    };
};
/**
 * TagsApi - factory interface
 * @export
 */
export const TagsApiFactory = function (configuration, basePath, axios) {
    const localVarFp = TagsApiFp(configuration);
    return {
        /**
         * Search and list the tags of jobs.
         * @summary List tags
         * @param {TagsGetTypeEnum} type Searches for tags in the specified type.
         * @param {string} search Used for searching tags.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tagsGet(type, search, options) {
            return localVarFp.tagsGet(type, search, options).then((request) => request(axios, basePath));
        },
    };
};
/**
 * TagsApi - object-oriented interface
 * @export
 * @class TagsApi
 * @extends {BaseAPI}
 */
export class TagsApi extends BaseAPI {
    /**
     * Search and list the tags of jobs.
     * @summary List tags
     * @param {TagsGetTypeEnum} type Searches for tags in the specified type.
     * @param {string} search Used for searching tags.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagsApi
     */
    tagsGet(type, search, options) {
        return TagsApiFp(this.configuration)
            .tagsGet(type, search, options)
            .then((request) => request(this.axios, this.basePath));
    }
}
/**
 * @export
 */
export const TagsGetTypeEnum = {
    Job: 'job',
};
/**
 * UsageApi - axios parameter creator
 * @export
 */
export const UsageApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Get usage by instance
         * @summary Get usage
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCurrentMonthlyUsageControllerGetUsageStats: async (options = {}) => {
            const localVarPath = `/usage`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
/**
 * UsageApi - functional programming interface
 * @export
 */
export const UsageApiFp = function (configuration) {
    const localVarAxiosParamCreator = UsageApiAxiosParamCreator(configuration);
    return {
        /**
         * Get usage by instance
         * @summary Get usage
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCurrentMonthlyUsageControllerGetUsageStats(options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCurrentMonthlyUsageControllerGetUsageStats(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UsageApi.getCurrentMonthlyUsageControllerGetUsageStats']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    };
};
/**
 * UsageApi - factory interface
 * @export
 */
export const UsageApiFactory = function (configuration, basePath, axios) {
    const localVarFp = UsageApiFp(configuration);
    return {
        /**
         * Get usage by instance
         * @summary Get usage
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCurrentMonthlyUsageControllerGetUsageStats(options) {
            return localVarFp
                .getCurrentMonthlyUsageControllerGetUsageStats(options)
                .then((request) => request(axios, basePath));
        },
    };
};
/**
 * UsageApi - object-oriented interface
 * @export
 * @class UsageApi
 * @extends {BaseAPI}
 */
export class UsageApi extends BaseAPI {
    /**
     * Get usage by instance
     * @summary Get usage
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsageApi
     */
    getCurrentMonthlyUsageControllerGetUsageStats(options) {
        return UsageApiFp(this.configuration)
            .getCurrentMonthlyUsageControllerGetUsageStats(options)
            .then((request) => request(this.axios, this.basePath));
    }
}
/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Get the authenticated user
         * @summary Get user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserMeControllerGetMyUser: async (options = {}) => {
            const localVarPath = `/users/me`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function (configuration) {
    const localVarAxiosParamCreator = UsersApiAxiosParamCreator(configuration);
    return {
        /**
         * Get the authenticated user
         * @summary Get user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserMeControllerGetMyUser(options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserMeControllerGetMyUser(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UsersApi.getUserMeControllerGetMyUser']?.[localVarOperationServerIndex]
                ?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    };
};
/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (configuration, basePath, axios) {
    const localVarFp = UsersApiFp(configuration);
    return {
        /**
         * Get the authenticated user
         * @summary Get user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserMeControllerGetMyUser(options) {
            return localVarFp
                .getUserMeControllerGetMyUser(options)
                .then((request) => request(axios, basePath));
        },
    };
};
/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
    /**
     * Get the authenticated user
     * @summary Get user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    getUserMeControllerGetMyUser(options) {
        return UsersApiFp(this.configuration)
            .getUserMeControllerGetMyUser(options)
            .then((request) => request(this.axios, this.basePath));
    }
}
/**
 * WorkloadsApi - axios parameter creator
 * @export
 */
export const WorkloadsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * List hub workloads
         * @summary List hub workloads
         * @param {string} instance Instance of jobs and sessions. It can be a hub, a hub/group or a hub/group/project. Mandatory.
         * @param {FindWorkloadsAdminControllerFindWorkloadsAdminSortEnum} [sort] Field to sort the workloads by
         * @param {FindWorkloadsAdminControllerFindWorkloadsAdminOrderEnum} [order] Order to sort the workloads by
         * @param {number} [limit] Number of workloads to return at a time
         * @param {string} [previous] Cursor to previous workloads result page
         * @param {string} [next] Cursor to next workloads result page
         * @param {string} [backend] Backend name
         * @param {string} [search] Optional search string, used to filter workloads by id or tags
         * @param {Array<FindWorkloadsAdminControllerFindWorkloadsAdminStatusEnum>} [status] Status type to filter workloads by. It can be pending, in_progress, failed, completed or canceled.
         * @param {string} [mode] Workload mode: job, session or batch
         * @param {string} [createdAfter] Filter jobs and session created after this date
         * @param {string} [createdBefore] Filter jobs and session created before this date
         * @param {Array<string>} [tags] Optional array of tags for the workloads
         * @param {string} [userId] User id to filter workloads by user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findWorkloadsAdminControllerFindWorkloadsAdmin: async (instance, sort, order, limit, previous, next, backend, search, status, mode, createdAfter, createdBefore, tags, userId, options = {}) => {
            // verify required parameter 'instance' is not null or undefined
            assertParamExists('findWorkloadsAdminControllerFindWorkloadsAdmin', 'instance', instance);
            const localVarPath = `/workloads/admin`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }
            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (previous !== undefined) {
                localVarQueryParameter['previous'] = previous;
            }
            if (next !== undefined) {
                localVarQueryParameter['next'] = next;
            }
            if (instance !== undefined) {
                localVarQueryParameter['instance'] = instance;
            }
            if (backend !== undefined) {
                localVarQueryParameter['backend'] = backend;
            }
            if (search !== undefined) {
                localVarQueryParameter['search'] = search;
            }
            if (status) {
                localVarQueryParameter['status'] = status;
            }
            if (mode !== undefined) {
                localVarQueryParameter['mode'] = mode;
            }
            if (createdAfter !== undefined) {
                localVarQueryParameter['createdAfter'] =
                    createdAfter instanceof Date ? createdAfter.toISOString() : createdAfter;
            }
            if (createdBefore !== undefined) {
                localVarQueryParameter['createdBefore'] =
                    createdBefore instanceof Date
                        ? createdBefore.toISOString()
                        : createdBefore;
            }
            if (tags) {
                localVarQueryParameter['tags'] = tags;
            }
            if (userId !== undefined) {
                localVarQueryParameter['userId'] = userId;
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List user workloads
         * @summary List user workloads
         * @param {FindWorkloadsMeControllerFindUserWorkloadsSortEnum} [sort] Field to sort the workloads by
         * @param {FindWorkloadsMeControllerFindUserWorkloadsOrderEnum} [order] Order to sort the workloads by
         * @param {number} [limit] Number of workloads to return at a time
         * @param {string} [previous] Cursor to previous workloads result page
         * @param {string} [next] Cursor to next workloads result page
         * @param {string} [instance] Instance of jobs and sessions. It must be a hub/group/project and the user must be collaborator.
         * @param {string} [backend] Backend name
         * @param {string} [search] Optional search string, used to filter workloads by id or tags
         * @param {Array<FindWorkloadsMeControllerFindUserWorkloadsStatusEnum>} [status] Status type to filter workloads by. It can be pending, in_progress, failed, completed or canceled.
         * @param {string} [mode] Workload mode: job, session or batch
         * @param {string} [createdAfter] Filter jobs and session created after this date
         * @param {string} [createdBefore] Filter jobs and session created before this date
         * @param {Array<string>} [tags] Optional array of tags for the workloads
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findWorkloadsMeControllerFindUserWorkloads: async (sort, order, limit, previous, next, instance, backend, search, status, mode, createdAfter, createdBefore, tags, options = {}) => {
            const localVarPath = `/workloads/me`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication user-accesstoken required
            await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration);
            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }
            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (previous !== undefined) {
                localVarQueryParameter['previous'] = previous;
            }
            if (next !== undefined) {
                localVarQueryParameter['next'] = next;
            }
            if (instance !== undefined) {
                localVarQueryParameter['instance'] = instance;
            }
            if (backend !== undefined) {
                localVarQueryParameter['backend'] = backend;
            }
            if (search !== undefined) {
                localVarQueryParameter['search'] = search;
            }
            if (status) {
                localVarQueryParameter['status'] = status;
            }
            if (mode !== undefined) {
                localVarQueryParameter['mode'] = mode;
            }
            if (createdAfter !== undefined) {
                localVarQueryParameter['createdAfter'] =
                    createdAfter instanceof Date ? createdAfter.toISOString() : createdAfter;
            }
            if (createdBefore !== undefined) {
                localVarQueryParameter['createdBefore'] =
                    createdBefore instanceof Date
                        ? createdBefore.toISOString()
                        : createdBefore;
            }
            if (tags) {
                localVarQueryParameter['tags'] = tags;
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {
                ...localVarHeaderParameter,
                ...headersFromBaseOptions,
                ...options.headers,
            };
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
/**
 * WorkloadsApi - functional programming interface
 * @export
 */
export const WorkloadsApiFp = function (configuration) {
    const localVarAxiosParamCreator = WorkloadsApiAxiosParamCreator(configuration);
    return {
        /**
         * List hub workloads
         * @summary List hub workloads
         * @param {string} instance Instance of jobs and sessions. It can be a hub, a hub/group or a hub/group/project. Mandatory.
         * @param {FindWorkloadsAdminControllerFindWorkloadsAdminSortEnum} [sort] Field to sort the workloads by
         * @param {FindWorkloadsAdminControllerFindWorkloadsAdminOrderEnum} [order] Order to sort the workloads by
         * @param {number} [limit] Number of workloads to return at a time
         * @param {string} [previous] Cursor to previous workloads result page
         * @param {string} [next] Cursor to next workloads result page
         * @param {string} [backend] Backend name
         * @param {string} [search] Optional search string, used to filter workloads by id or tags
         * @param {Array<FindWorkloadsAdminControllerFindWorkloadsAdminStatusEnum>} [status] Status type to filter workloads by. It can be pending, in_progress, failed, completed or canceled.
         * @param {string} [mode] Workload mode: job, session or batch
         * @param {string} [createdAfter] Filter jobs and session created after this date
         * @param {string} [createdBefore] Filter jobs and session created before this date
         * @param {Array<string>} [tags] Optional array of tags for the workloads
         * @param {string} [userId] User id to filter workloads by user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findWorkloadsAdminControllerFindWorkloadsAdmin(instance, sort, order, limit, previous, next, backend, search, status, mode, createdAfter, createdBefore, tags, userId, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findWorkloadsAdminControllerFindWorkloadsAdmin(instance, sort, order, limit, previous, next, backend, search, status, mode, createdAfter, createdBefore, tags, userId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WorkloadsApi.findWorkloadsAdminControllerFindWorkloadsAdmin']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List user workloads
         * @summary List user workloads
         * @param {FindWorkloadsMeControllerFindUserWorkloadsSortEnum} [sort] Field to sort the workloads by
         * @param {FindWorkloadsMeControllerFindUserWorkloadsOrderEnum} [order] Order to sort the workloads by
         * @param {number} [limit] Number of workloads to return at a time
         * @param {string} [previous] Cursor to previous workloads result page
         * @param {string} [next] Cursor to next workloads result page
         * @param {string} [instance] Instance of jobs and sessions. It must be a hub/group/project and the user must be collaborator.
         * @param {string} [backend] Backend name
         * @param {string} [search] Optional search string, used to filter workloads by id or tags
         * @param {Array<FindWorkloadsMeControllerFindUserWorkloadsStatusEnum>} [status] Status type to filter workloads by. It can be pending, in_progress, failed, completed or canceled.
         * @param {string} [mode] Workload mode: job, session or batch
         * @param {string} [createdAfter] Filter jobs and session created after this date
         * @param {string} [createdBefore] Filter jobs and session created before this date
         * @param {Array<string>} [tags] Optional array of tags for the workloads
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findWorkloadsMeControllerFindUserWorkloads(sort, order, limit, previous, next, instance, backend, search, status, mode, createdAfter, createdBefore, tags, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findWorkloadsMeControllerFindUserWorkloads(sort, order, limit, previous, next, instance, backend, search, status, mode, createdAfter, createdBefore, tags, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WorkloadsApi.findWorkloadsMeControllerFindUserWorkloads']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    };
};
/**
 * WorkloadsApi - factory interface
 * @export
 */
export const WorkloadsApiFactory = function (configuration, basePath, axios) {
    const localVarFp = WorkloadsApiFp(configuration);
    return {
        /**
         * List hub workloads
         * @summary List hub workloads
         * @param {string} instance Instance of jobs and sessions. It can be a hub, a hub/group or a hub/group/project. Mandatory.
         * @param {FindWorkloadsAdminControllerFindWorkloadsAdminSortEnum} [sort] Field to sort the workloads by
         * @param {FindWorkloadsAdminControllerFindWorkloadsAdminOrderEnum} [order] Order to sort the workloads by
         * @param {number} [limit] Number of workloads to return at a time
         * @param {string} [previous] Cursor to previous workloads result page
         * @param {string} [next] Cursor to next workloads result page
         * @param {string} [backend] Backend name
         * @param {string} [search] Optional search string, used to filter workloads by id or tags
         * @param {Array<FindWorkloadsAdminControllerFindWorkloadsAdminStatusEnum>} [status] Status type to filter workloads by. It can be pending, in_progress, failed, completed or canceled.
         * @param {string} [mode] Workload mode: job, session or batch
         * @param {string} [createdAfter] Filter jobs and session created after this date
         * @param {string} [createdBefore] Filter jobs and session created before this date
         * @param {Array<string>} [tags] Optional array of tags for the workloads
         * @param {string} [userId] User id to filter workloads by user.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findWorkloadsAdminControllerFindWorkloadsAdmin(instance, sort, order, limit, previous, next, backend, search, status, mode, createdAfter, createdBefore, tags, userId, options) {
            return localVarFp
                .findWorkloadsAdminControllerFindWorkloadsAdmin(instance, sort, order, limit, previous, next, backend, search, status, mode, createdAfter, createdBefore, tags, userId, options)
                .then((request) => request(axios, basePath));
        },
        /**
         * List user workloads
         * @summary List user workloads
         * @param {FindWorkloadsMeControllerFindUserWorkloadsSortEnum} [sort] Field to sort the workloads by
         * @param {FindWorkloadsMeControllerFindUserWorkloadsOrderEnum} [order] Order to sort the workloads by
         * @param {number} [limit] Number of workloads to return at a time
         * @param {string} [previous] Cursor to previous workloads result page
         * @param {string} [next] Cursor to next workloads result page
         * @param {string} [instance] Instance of jobs and sessions. It must be a hub/group/project and the user must be collaborator.
         * @param {string} [backend] Backend name
         * @param {string} [search] Optional search string, used to filter workloads by id or tags
         * @param {Array<FindWorkloadsMeControllerFindUserWorkloadsStatusEnum>} [status] Status type to filter workloads by. It can be pending, in_progress, failed, completed or canceled.
         * @param {string} [mode] Workload mode: job, session or batch
         * @param {string} [createdAfter] Filter jobs and session created after this date
         * @param {string} [createdBefore] Filter jobs and session created before this date
         * @param {Array<string>} [tags] Optional array of tags for the workloads
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findWorkloadsMeControllerFindUserWorkloads(sort, order, limit, previous, next, instance, backend, search, status, mode, createdAfter, createdBefore, tags, options) {
            return localVarFp
                .findWorkloadsMeControllerFindUserWorkloads(sort, order, limit, previous, next, instance, backend, search, status, mode, createdAfter, createdBefore, tags, options)
                .then((request) => request(axios, basePath));
        },
    };
};
/**
 * WorkloadsApi - object-oriented interface
 * @export
 * @class WorkloadsApi
 * @extends {BaseAPI}
 */
export class WorkloadsApi extends BaseAPI {
    /**
     * List hub workloads
     * @summary List hub workloads
     * @param {string} instance Instance of jobs and sessions. It can be a hub, a hub/group or a hub/group/project. Mandatory.
     * @param {FindWorkloadsAdminControllerFindWorkloadsAdminSortEnum} [sort] Field to sort the workloads by
     * @param {FindWorkloadsAdminControllerFindWorkloadsAdminOrderEnum} [order] Order to sort the workloads by
     * @param {number} [limit] Number of workloads to return at a time
     * @param {string} [previous] Cursor to previous workloads result page
     * @param {string} [next] Cursor to next workloads result page
     * @param {string} [backend] Backend name
     * @param {string} [search] Optional search string, used to filter workloads by id or tags
     * @param {Array<FindWorkloadsAdminControllerFindWorkloadsAdminStatusEnum>} [status] Status type to filter workloads by. It can be pending, in_progress, failed, completed or canceled.
     * @param {string} [mode] Workload mode: job, session or batch
     * @param {string} [createdAfter] Filter jobs and session created after this date
     * @param {string} [createdBefore] Filter jobs and session created before this date
     * @param {Array<string>} [tags] Optional array of tags for the workloads
     * @param {string} [userId] User id to filter workloads by user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkloadsApi
     */
    findWorkloadsAdminControllerFindWorkloadsAdmin(instance, sort, order, limit, previous, next, backend, search, status, mode, createdAfter, createdBefore, tags, userId, options) {
        return WorkloadsApiFp(this.configuration)
            .findWorkloadsAdminControllerFindWorkloadsAdmin(instance, sort, order, limit, previous, next, backend, search, status, mode, createdAfter, createdBefore, tags, userId, options)
            .then((request) => request(this.axios, this.basePath));
    }
    /**
     * List user workloads
     * @summary List user workloads
     * @param {FindWorkloadsMeControllerFindUserWorkloadsSortEnum} [sort] Field to sort the workloads by
     * @param {FindWorkloadsMeControllerFindUserWorkloadsOrderEnum} [order] Order to sort the workloads by
     * @param {number} [limit] Number of workloads to return at a time
     * @param {string} [previous] Cursor to previous workloads result page
     * @param {string} [next] Cursor to next workloads result page
     * @param {string} [instance] Instance of jobs and sessions. It must be a hub/group/project and the user must be collaborator.
     * @param {string} [backend] Backend name
     * @param {string} [search] Optional search string, used to filter workloads by id or tags
     * @param {Array<FindWorkloadsMeControllerFindUserWorkloadsStatusEnum>} [status] Status type to filter workloads by. It can be pending, in_progress, failed, completed or canceled.
     * @param {string} [mode] Workload mode: job, session or batch
     * @param {string} [createdAfter] Filter jobs and session created after this date
     * @param {string} [createdBefore] Filter jobs and session created before this date
     * @param {Array<string>} [tags] Optional array of tags for the workloads
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkloadsApi
     */
    findWorkloadsMeControllerFindUserWorkloads(sort, order, limit, previous, next, instance, backend, search, status, mode, createdAfter, createdBefore, tags, options) {
        return WorkloadsApiFp(this.configuration)
            .findWorkloadsMeControllerFindUserWorkloads(sort, order, limit, previous, next, instance, backend, search, status, mode, createdAfter, createdBefore, tags, options)
            .then((request) => request(this.axios, this.basePath));
    }
}
/**
 * @export
 */
export const FindWorkloadsAdminControllerFindWorkloadsAdminSortEnum = {
    CreatedAt: 'createdAt',
};
/**
 * @export
 */
export const FindWorkloadsAdminControllerFindWorkloadsAdminOrderEnum = {
    Asc: 'asc',
    Desc: 'desc',
};
/**
 * @export
 */
export const FindWorkloadsAdminControllerFindWorkloadsAdminStatusEnum = {
    Completed: 'completed',
    Canceled: 'canceled',
    Failed: 'failed',
    Pending: 'pending',
    InProgress: 'in_progress',
    Unknown: 'unknown',
};
/**
 * @export
 */
export const FindWorkloadsMeControllerFindUserWorkloadsSortEnum = {
    CreatedAt: 'createdAt',
};
/**
 * @export
 */
export const FindWorkloadsMeControllerFindUserWorkloadsOrderEnum = {
    Asc: 'asc',
    Desc: 'desc',
};
/**
 * @export
 */
export const FindWorkloadsMeControllerFindUserWorkloadsStatusEnum = {
    Completed: 'completed',
    Canceled: 'canceled',
    Failed: 'failed',
    Pending: 'pending',
    InProgress: 'in_progress',
    Unknown: 'unknown',
};
