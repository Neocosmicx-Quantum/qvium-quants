import type { Configuration } from './configuration.js'
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios'
import globalAxios from 'axios'
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBearerAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from './common.js'
import type { RequestArgs } from './base.js'
import { BASE_PATH, BaseAPI, operationServerMap } from './base.js'

/**
 *
 * @export
 * @interface AdminJobMetricsResponse
 */
export interface AdminJobMetricsResponse {
  /**
   * Contains information about billing metrics
   * @type {Bss}
   * @memberof AdminJobMetricsResponse
   */
  bss?: Bss
  /**
   * Contains information about job usage metrics
   * @type {Usage}
   * @memberof AdminJobMetricsResponse
   */
  usage?: Usage
  /**
   * A map of status transitions to timestamps
   * @type {Timestamps}
   * @memberof AdminJobMetricsResponse
   */
  timestamps: Timestamps
  /**
   * Number of executions during job
   * @type {number}
   * @memberof AdminJobMetricsResponse
   */
  executions?: number
  /**
   * Number of circuits executed on quantum backend
   * @type {number}
   * @memberof AdminJobMetricsResponse
   */
  num_circuits?: number
  /**
   * Number of qubits on quantum backend
   * @type {Array<string>}
   * @memberof AdminJobMetricsResponse
   */
  num_qubits?: Array<string>
  /**
   * An array of circuit depths
   * @type {Array<string>}
   * @memberof AdminJobMetricsResponse
   */
  circuit_depths?: Array<string>
  /**
   * Qiskit version used during execution of the job
   * @type {string}
   * @memberof AdminJobMetricsResponse
   */
  qiskit_version?: string
  /**
   * UTC timestamp for when the job will start
   * @type {string}
   * @memberof AdminJobMetricsResponse
   */
  estimated_start_time?: string
  /**
   * UTC timestamp for when the job will complete
   * @type {string}
   * @memberof AdminJobMetricsResponse
   */
  estimated_completion_time?: string
  /**
   * Current position of job in queue
   * @type {number}
   * @memberof AdminJobMetricsResponse
   */
  position_in_queue?: number
  /**
   * Current position of job in provider
   * @type {number}
   * @memberof AdminJobMetricsResponse
   */
  position_in_provider?: number
}
/**
 *
 * @export
 * @interface AdminJobResponse
 */
export interface AdminJobResponse {
  /**
   * Identifier assigned to the job
   * @type {string}
   * @memberof AdminJobResponse
   */
  id: string
  /**
   * Name of the hub of the instance in which the job is being executed
   * @type {string}
   * @memberof AdminJobResponse
   */
  hub: string
  /**
   * Name of the group of the instance in which the job is being executed
   * @type {string}
   * @memberof AdminJobResponse
   */
  group: string
  /**
   * Name of the project of the instance in which the job is being executed
   * @type {string}
   * @memberof AdminJobResponse
   */
  project: string
  /**
   * The system on which to run the program.  If no system is specified, the job is sent to the system with the shortest queue that you have access to.
   * @type {string}
   * @memberof AdminJobResponse
   */
  backend: string
  /**
   * Current status of the job
   * @type {string}
   * @memberof AdminJobResponse
   */
  status: AdminJobResponseStatusEnum
  /**
   * UTC timestamp for when the job was created
   * @type {string}
   * @memberof AdminJobResponse
   */
  created: string
  /**
   * Job type
   * @type {string}
   * @memberof AdminJobResponse
   */
  type: AdminJobResponseTypeEnum
  /**
   * Tags associated with the job
   * @type {Array<string>}
   * @memberof AdminJobResponse
   */
  tags: Array<string>
  /**
   * Job name
   * @type {string}
   * @memberof AdminJobResponse
   */
  name: string
  /**
   * Job run mode
   * @type {string}
   * @memberof AdminJobResponse
   */
  runMode: AdminJobResponseRunModeEnum
  /**
   * Job ran in private mode
   * @type {boolean}
   * @memberof AdminJobResponse
   */
  private: boolean
  /**
   * UTC timestamp for when the job finished running
   * @type {string}
   * @memberof AdminJobResponse
   */
  endTime?: string
  /**
   * estimated running time of the job
   * @type {number}
   * @memberof AdminJobResponse
   */
  estimated_running_time_seconds?: number
  /**
   * estimated max running time of the job
   * @type {number}
   * @memberof AdminJobResponse
   */
  estimated_max_running_time_seconds?: number
  /**
   *
   * @type {JobQueueInfo}
   * @memberof AdminJobResponse
   */
  queueInfo?: JobQueueInfo
  /**
   * User identifier
   * @type {string}
   * @memberof AdminJobResponse
   */
  userId: string
}

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
} as const

export type AdminJobResponseStatusEnum =
  (typeof AdminJobResponseStatusEnum)[keyof typeof AdminJobResponseStatusEnum]
export const AdminJobResponseTypeEnum = {
  Iqx: 'IQX',
  Runtime: 'RUNTIME',
} as const

export type AdminJobResponseTypeEnum =
  (typeof AdminJobResponseTypeEnum)[keyof typeof AdminJobResponseTypeEnum]
export const AdminJobResponseRunModeEnum = {
  Fairshare: 'fairshare',
  Dedicated: 'dedicated',
  Priority: 'priority',
  Session: 'session',
} as const

export type AdminJobResponseRunModeEnum =
  (typeof AdminJobResponseRunModeEnum)[keyof typeof AdminJobResponseRunModeEnum]

/**
 * Jobs collection response
 * @export
 * @interface AdminJobsResponse
 */
export interface AdminJobsResponse {
  /**
   * Total number of results
   * @type {number}
   * @memberof AdminJobsResponse
   */
  count: number
  /**
   * Offset at which paginated results are returned
   * @type {number}
   * @memberof AdminJobsResponse
   */
  offset: number
  /**
   * Maximum number of results returned in the paginated response
   * @type {number}
   * @memberof AdminJobsResponse
   */
  limit: number
  /**
   * A list of jobs
   * @type {Array<AdminJobResponse>}
   * @memberof AdminJobsResponse
   */
  jobs: Array<AdminJobResponse>
}
/**
 *
 * @export
 * @interface AdminRefundResponse
 */
export interface AdminRefundResponse {
  /**
   * Refund id
   * @type {number}
   * @memberof AdminRefundResponse
   */
  id: number
  /**
   * Date when the refund was created
   * @type {string}
   * @memberof AdminRefundResponse
   */
  createdAt: string
  /**
   * User who created the refund
   * @type {AdminRefundUserResponse}
   * @memberof AdminRefundResponse
   */
  createdBy: AdminRefundUserResponse
  /**
   * Time to refund (in seconds)
   * @type {number}
   * @memberof AdminRefundResponse
   */
  refundTime: number
  /**
   * Date the incident happened
   * @type {string}
   * @memberof AdminRefundResponse
   */
  incidentOccurredAt: string
  /**
   * Date the refund will expires
   * @type {string}
   * @memberof AdminRefundResponse
   */
  expiresAt: string
  /**
   * The reason of the refund
   * @type {string}
   * @memberof AdminRefundResponse
   */
  reason: string
  /**
   * The instance were the refund will be applied
   * @type {string}
   * @memberof AdminRefundResponse
   */
  instance: string
}
/**
 *
 * @export
 * @interface AdminRefundUserResponse
 */
export interface AdminRefundUserResponse {
  /**
   * User id
   * @type {string}
   * @memberof AdminRefundUserResponse
   */
  id: string
  /**
   * User email
   * @type {string}
   * @memberof AdminRefundUserResponse
   */
  email: string
  /**
   * User first name
   * @type {string}
   * @memberof AdminRefundUserResponse
   */
  firstName: string
  /**
   * User last name
   * @type {string}
   * @memberof AdminRefundUserResponse
   */
  lastName: string
}
/**
 *
 * @export
 * @interface BackendFilter
 */
export interface BackendFilter {
  /**
   *
   * @type {string}
   * @memberof BackendFilter
   */
  name: string
  /**
   *
   * @type {boolean}
   * @memberof BackendFilter
   */
  deleted: boolean
}
/**
 * Systems status response
 * @export
 * @interface BackendStatusResponse
 */
export interface BackendStatusResponse {
  [key: string]: any

  /**
   * State of the system
   * @type {boolean}
   * @memberof BackendStatusResponse
   */
  state?: boolean
  /**
   * Status of the system
   * @type {string}
   * @memberof BackendStatusResponse
   */
  status?: string
  /**
   * Description of the system state
   * @type {string}
   * @memberof BackendStatusResponse
   */
  message?: string
  /**
   * Length of the queue for the system
   * @type {number}
   * @memberof BackendStatusResponse
   */
  length_queue?: number
  /**
   * System version
   * @type {string}
   * @memberof BackendStatusResponse
   */
  backend_version?: string
}
/**
 * Systems response
 * @export
 * @interface BackendsResponse
 */
export interface BackendsResponse {
  /**
   * A list of system names
   * @type {Array<string>}
   * @memberof BackendsResponse
   */
  devices?: Array<string>
}
/**
 *
 * @export
 * @interface BlockUsersByDomainResponse
 */
export interface BlockUsersByDomainResponse {
  /**
   *
   * @type {number}
   * @memberof BlockUsersByDomainResponse
   */
  blockedUsersCount: number
  /**
   *
   * @type {number}
   * @memberof BlockUsersByDomainResponse
   */
  deletedAccessTokens: number
  /**
   *
   * @type {number}
   * @memberof BlockUsersByDomainResponse
   */
  dplUserReportsUpdated: number
  /**
   *
   * @type {number}
   * @memberof BlockUsersByDomainResponse
   */
  dplUserReportsCreated: number
}
/**
 *
 * @export
 * @interface Bss
 */
export interface Bss {
  /**
   * Total billed time for the job - quantum seconds only.
   * @type {number}
   * @memberof Bss
   */
  seconds?: number
}
/**
 *
 * @export
 * @interface CountryFilter
 */
export interface CountryFilter {
  /**
   * Country name
   * @type {string}
   * @memberof CountryFilter
   */
  label: string
  /**
   * ISO 3166-1 Alpha-2. XX for unknown
   * @type {string}
   * @memberof CountryFilter
   */
  code: string
}
/**
 *
 * @export
 * @interface CreateJobRequest
 */
export interface CreateJobRequest {
  /**
   * ID of the primitive to be executed
   * @type {string}
   * @memberof CreateJobRequest
   */
  program_id: string
  /**
   * The hub of the instance
   * @type {string}
   * @memberof CreateJobRequest
   */
  hub: string
  /**
   * The group of the instance
   * @type {string}
   * @memberof CreateJobRequest
   */
  group: string
  /**
   * The project of the instance
   * @type {string}
   * @memberof CreateJobRequest
   */
  project: string
  /**
   * Name that identifies the system on which to run the job
   * @type {string}
   * @memberof CreateJobRequest
   */
  backend: string
  /**
   *
   * @type {CreateJobRequestParams}
   * @memberof CreateJobRequest
   */
  params?: CreateJobRequestParams
  /**
   * Logging level of the job
   * @type {string}
   * @memberof CreateJobRequest
   */
  log_level?: CreateJobRequestLogLevelEnum
  /**
   * Identifier of the session that the job is a part of
   * @type {string}
   * @memberof CreateJobRequest
   */
  session_id?: string
  /**
   * List of job tags
   * @type {Array<string>}
   * @memberof CreateJobRequest
   */
  tags?: Array<string>
  /**
   * Cost of the job as the estimated time it should take to complete (in seconds). Should not exceed the cost of the primitive
   * @type {number}
   * @memberof CreateJobRequest
   */
  cost?: number
  /**
   * Indicates if job to create will be private or not
   * @type {boolean}
   * @memberof CreateJobRequest
   */
  private?: boolean
}

export const CreateJobRequestLogLevelEnum = {
  Critical: 'critical',
  Error: 'error',
  Warning: 'warning',
  Info: 'info',
  Debug: 'debug',
} as const

export type CreateJobRequestLogLevelEnum =
  (typeof CreateJobRequestLogLevelEnum)[keyof typeof CreateJobRequestLogLevelEnum]

/**
 * @type CreateJobRequestParams
 * Parameters to inject into the primitive as key-value pairs
 * @export
 */
export type CreateJobRequestParams = EstimatorV2Input | SamplerV2Input

/**
 *
 * @export
 * @interface CreateJobResponse
 */
export interface CreateJobResponse {
  /**
   *
   * @type {string}
   * @memberof CreateJobResponse
   */
  id: string
  /**
   *
   * @type {string}
   * @memberof CreateJobResponse
   */
  backend: string
  /**
   *
   * @type {string}
   * @memberof CreateJobResponse
   */
  session_id: string
  /**
   *
   * @type {Array<string>}
   * @memberof CreateJobResponse
   */
  messages: Array<string>
}
/**
 *
 * @export
 * @interface CreateRefundRequest
 */
export interface CreateRefundRequest {
  /**
   * Time to refund (in seconds)
   * @type {number}
   * @memberof CreateRefundRequest
   */
  refundTime: number
  /**
   * Date the incident happened
   * @type {string}
   * @memberof CreateRefundRequest
   */
  incidentOccurredAt: string
  /**
   * Date the refund will expires
   * @type {string}
   * @memberof CreateRefundRequest
   */
  expiresAt: string
  /**
   * The reason of the refund
   * @type {string}
   * @memberof CreateRefundRequest
   */
  reason: string
  /**
   * The instance were the refund will be applied
   * @type {string}
   * @memberof CreateRefundRequest
   */
  instance: string
}
/**
 *
 * @export
 * @interface CreateSessionRequest
 */
export interface CreateSessionRequest {
  /**
   * Name that identifies the system on which to run the job
   * @type {string}
   * @memberof CreateSessionRequest
   */
  backend: string
  /**
   * The instance were session will be created
   * @type {string}
   * @memberof CreateSessionRequest
   */
  instance: string
  /**
   * Max allowed time for session to run in seconds.
   * @type {number}
   * @memberof CreateSessionRequest
   */
  max_session_ttl?: number
  /**
   * The session mode
   * @type {string}
   * @memberof CreateSessionRequest
   */
  mode?: CreateSessionRequestModeEnum
}

export const CreateSessionRequestModeEnum = {
  Batch: 'batch',
  Dedicated: 'dedicated',
} as const

export type CreateSessionRequestModeEnum =
  (typeof CreateSessionRequestModeEnum)[keyof typeof CreateSessionRequestModeEnum]

/**
 *
 * @export
 * @interface CreateSessionResponse
 */
export interface CreateSessionResponse {
  /**
   *
   * @type {string}
   * @memberof CreateSessionResponse
   */
  id: string
  /**
   *
   * @type {Array<string>}
   * @memberof CreateSessionResponse
   */
  messages?: Array<string>
}
/**
 * The input for an EstimatorV2 API call
 * @export
 * @interface EstimatorV2Input
 */
export interface EstimatorV2Input {
  /**
   * Primitive Unit Blocs of data. Each PUB is of the form (Circuit, Observables, Parameters, Precision) where the circuit and observables are required, parameters should be passed only for parametrized circuits, and precision is optional
   * @type {Array<Array<any>>}
   * @memberof EstimatorV2Input
   */
  pubs: Array<Array<any>>
  /**
   *
   * @type {EstimatorV2InputOptions}
   * @memberof EstimatorV2Input
   */
  options?: EstimatorV2InputOptions
  /**
   * How much resilience to build against errors
   * @type {number}
   * @memberof EstimatorV2Input
   */
  resilience_level?: EstimatorV2InputResilienceLevelEnum
  /**
   * Default precision level which applies to all pubs without precision
   * @type {number}
   * @memberof EstimatorV2Input
   */
  precision?: number
  /**
   * If True, returns a qiskit-style output, meant to be parsed using the runtime result decoder, or resort to returning pure JSON results (resulting in larger objects)
   * @type {boolean}
   * @memberof EstimatorV2Input
   */
  support_qiskit?: boolean
  /**
   * For EstimatorV2, version should always be 2
   * @type {number}
   * @memberof EstimatorV2Input
   */
  version?: EstimatorV2InputVersionEnum
}

export const EstimatorV2InputResilienceLevelEnum = {
  NUMBER_0: 0,
  NUMBER_1: 1,
  NUMBER_2: 2,
} as const

export type EstimatorV2InputResilienceLevelEnum =
  (typeof EstimatorV2InputResilienceLevelEnum)[keyof typeof EstimatorV2InputResilienceLevelEnum]
export const EstimatorV2InputVersionEnum = {
  NUMBER_2: 2,
} as const

export type EstimatorV2InputVersionEnum =
  (typeof EstimatorV2InputVersionEnum)[keyof typeof EstimatorV2InputVersionEnum]

/**
 * Options for V2 Estimator
 * @export
 * @interface EstimatorV2InputOptions
 */
export interface EstimatorV2InputOptions {
  /**
   * Seed used to control sampling
   * @type {number}
   * @memberof EstimatorV2InputOptions
   */
  seed_estimator?: number
  /**
   * The default precision to use for any PUB that does not specify one
   * @type {number}
   * @memberof EstimatorV2InputOptions
   */
  default_precision?: number
  /**
   * The total number of shots to use per circuit per configuration. If set, this value overrides default_precision.
   * @type {number}
   * @memberof EstimatorV2InputOptions
   */
  default_shots?: number
  /**
   *
   * @type {EstimatorV2InputOptionsDynamicalDecoupling}
   * @memberof EstimatorV2InputOptions
   */
  dynamical_decoupling?: EstimatorV2InputOptionsDynamicalDecoupling
  /**
   *
   * @type {EstimatorV2InputOptionsTranspilation}
   * @memberof EstimatorV2InputOptions
   */
  transpilation?: EstimatorV2InputOptionsTranspilation
  /**
   *
   * @type {object}
   * @memberof EstimatorV2InputOptions
   */
  resilience?: object
  /**
   *
   * @type {EstimatorV2InputOptionsExecution}
   * @memberof EstimatorV2InputOptions
   */
  execution?: EstimatorV2InputOptionsExecution
  /**
   *
   * @type {EstimatorV2InputOptionsTwirling}
   * @memberof EstimatorV2InputOptions
   */
  twirling?: EstimatorV2InputOptionsTwirling
}
/**
 * Suboptions for dynamical decoupling
 * @export
 * @interface EstimatorV2InputOptionsDynamicalDecoupling
 */
export interface EstimatorV2InputOptionsDynamicalDecoupling {
  /**
   * Whether to enable dynamical decoupling.
   * @type {boolean}
   * @memberof EstimatorV2InputOptionsDynamicalDecoupling
   */
  enable?: boolean
  /**
   * Which dynamical decoupling sequence to use
   * @type {string}
   * @memberof EstimatorV2InputOptionsDynamicalDecoupling
   */
  sequence_type?: EstimatorV2InputOptionsDynamicalDecouplingSequenceTypeEnum
  /**
   * Where to put extra timing delays due to rounding issues
   * @type {string}
   * @memberof EstimatorV2InputOptionsDynamicalDecoupling
   */
  extra_slack_distribution?: EstimatorV2InputOptionsDynamicalDecouplingExtraSlackDistributionEnum
  /**
   * Whether to schedule gates as soon as (\'asap\') or as late as (\'alap\') possible
   * @type {string}
   * @memberof EstimatorV2InputOptionsDynamicalDecoupling
   */
  scheduling_method?: EstimatorV2InputOptionsDynamicalDecouplingSchedulingMethodEnum
}

export const EstimatorV2InputOptionsDynamicalDecouplingSequenceTypeEnum = {
  Xx: 'XX',
  XpXm: 'XpXm',
  Xy4: 'XY4',
} as const

export type EstimatorV2InputOptionsDynamicalDecouplingSequenceTypeEnum =
  (typeof EstimatorV2InputOptionsDynamicalDecouplingSequenceTypeEnum)[keyof typeof EstimatorV2InputOptionsDynamicalDecouplingSequenceTypeEnum]
export const EstimatorV2InputOptionsDynamicalDecouplingExtraSlackDistributionEnum = {
  Middle: 'middle',
  Edges: 'edges',
} as const

export type EstimatorV2InputOptionsDynamicalDecouplingExtraSlackDistributionEnum =
  (typeof EstimatorV2InputOptionsDynamicalDecouplingExtraSlackDistributionEnum)[keyof typeof EstimatorV2InputOptionsDynamicalDecouplingExtraSlackDistributionEnum]
export const EstimatorV2InputOptionsDynamicalDecouplingSchedulingMethodEnum = {
  Alap: 'alap',
  Asap: 'asap',
} as const

export type EstimatorV2InputOptionsDynamicalDecouplingSchedulingMethodEnum =
  (typeof EstimatorV2InputOptionsDynamicalDecouplingSchedulingMethodEnum)[keyof typeof EstimatorV2InputOptionsDynamicalDecouplingSchedulingMethodEnum]

/**
 * Execution options
 * @export
 * @interface EstimatorV2InputOptionsExecution
 */
export interface EstimatorV2InputOptionsExecution {
  /**
   * Whether to reset the qubits to the ground state for each shot
   * @type {boolean}
   * @memberof EstimatorV2InputOptionsExecution
   */
  init_qubits?: boolean
  /**
   * The delay between a measurement and the subsequent quantum circuit
   * @type {number}
   * @memberof EstimatorV2InputOptionsExecution
   */
  rep_delay?: number
}
/**
 *
 * @export
 * @interface EstimatorV2InputOptionsResilienceAllOfNot
 */
export interface EstimatorV2InputOptionsResilienceAllOfNot {
  /**
   *
   * @type {any}
   * @memberof EstimatorV2InputOptionsResilienceAllOfNot
   */
  zne_mitigation: any
  /**
   *
   * @type {any}
   * @memberof EstimatorV2InputOptionsResilienceAllOfNot
   */
  pec_mitigation: any
}
/**
 * Layer noise learning options
 * @export
 * @interface EstimatorV2InputOptionsResilienceLayerNoiseLearning
 */
export interface EstimatorV2InputOptionsResilienceLayerNoiseLearning {
  /**
   * The max number of unique layers to learn
   * @type {number}
   * @memberof EstimatorV2InputOptionsResilienceLayerNoiseLearning
   */
  max_layers_to_learn?: number
  /**
   * The total number of shots to use per random learning circuit
   * @type {number}
   * @memberof EstimatorV2InputOptionsResilienceLayerNoiseLearning
   */
  shots_per_randomization?: number
  /**
   * The number of random circuits to use per learning circuit configuration
   * @type {number}
   * @memberof EstimatorV2InputOptionsResilienceLayerNoiseLearning
   */
  num_randomizations?: number
  /**
   * The circuit depths (measured in number of pairs) to use in learning experiments
   * @type {Array<number>}
   * @memberof EstimatorV2InputOptionsResilienceLayerNoiseLearning
   */
  layer_pair_depths?: Array<number>
}
/**
 * Additional measurement noise learning options
 * @export
 * @interface EstimatorV2InputOptionsResilienceMeasureNoiseLearning
 */
export interface EstimatorV2InputOptionsResilienceMeasureNoiseLearning {
  /**
   * The number of random circuits to draw for the measurement learning experiment
   * @type {number}
   * @memberof EstimatorV2InputOptionsResilienceMeasureNoiseLearning
   */
  num_randomizations?: number
  /**
   *
   * @type {EstimatorV2InputOptionsResilienceMeasureNoiseLearningShotsPerRandomization}
   * @memberof EstimatorV2InputOptionsResilienceMeasureNoiseLearning
   */
  shots_per_randomization?: EstimatorV2InputOptionsResilienceMeasureNoiseLearningShotsPerRandomization
}
/**
 * @type EstimatorV2InputOptionsResilienceMeasureNoiseLearningShotsPerRandomization
 * The number of shots to use for the learning experiment per random circuit.
 * @export
 */
export type EstimatorV2InputOptionsResilienceMeasureNoiseLearningShotsPerRandomization =
  | number
  | string

/**
 * Additional probabilistic error cancellation mitigation options
 * @export
 * @interface EstimatorV2InputOptionsResiliencePec
 */
export interface EstimatorV2InputOptionsResiliencePec {
  /**
   *
   * @type {EstimatorV2InputOptionsResiliencePecMaxOverhead}
   * @memberof EstimatorV2InputOptionsResiliencePec
   */
  max_overhead?: EstimatorV2InputOptionsResiliencePecMaxOverhead
  /**
   *
   * @type {EstimatorV2InputOptionsResiliencePecNoiseGain}
   * @memberof EstimatorV2InputOptionsResiliencePec
   */
  noise_gain?: EstimatorV2InputOptionsResiliencePecNoiseGain
}
/**
 * @type EstimatorV2InputOptionsResiliencePecMaxOverhead
 * The maximum circuit sampling overhead allowed
 * @export
 */
export type EstimatorV2InputOptionsResiliencePecMaxOverhead = null | number

/**
 * @type EstimatorV2InputOptionsResiliencePecNoiseGain
 * The amount by which to scale the noise
 * @export
 */
export type EstimatorV2InputOptionsResiliencePecNoiseGain = number | string

/**
 * Additional zero noise extrapolation mitigation options
 * @export
 * @interface EstimatorV2InputOptionsResilienceZne
 */
export interface EstimatorV2InputOptionsResilienceZne {
  /**
   * Noise factors to use for noise amplification
   * @type {Array<number>}
   * @memberof EstimatorV2InputOptionsResilienceZne
   */
  noise_factors?: Array<number>
  /**
   *
   * @type {EstimatorV2InputOptionsResilienceZneExtrapolator}
   * @memberof EstimatorV2InputOptionsResilienceZne
   */
  extrapolator?: EstimatorV2InputOptionsResilienceZneExtrapolator
}
/**
 * @type EstimatorV2InputOptionsResilienceZneExtrapolator
 * Extrapolator(s) to try (in order) for extrapolating to zero noise
 * @export
 */
export type EstimatorV2InputOptionsResilienceZneExtrapolator = Array<string> | string

/**
 * Transpilation settings
 * @export
 * @interface EstimatorV2InputOptionsTranspilation
 */
export interface EstimatorV2InputOptionsTranspilation {
  /**
   * How much optimization to perform on the circuits
   * @type {number}
   * @memberof EstimatorV2InputOptionsTranspilation
   */
  optimization_level?: EstimatorV2InputOptionsTranspilationOptimizationLevelEnum
}

export const EstimatorV2InputOptionsTranspilationOptimizationLevelEnum = {
  NUMBER_0: 0,
  NUMBER_1: 1,
} as const

export type EstimatorV2InputOptionsTranspilationOptimizationLevelEnum =
  (typeof EstimatorV2InputOptionsTranspilationOptimizationLevelEnum)[keyof typeof EstimatorV2InputOptionsTranspilationOptimizationLevelEnum]

/**
 * Twirling options
 * @export
 * @interface EstimatorV2InputOptionsTwirling
 */
export interface EstimatorV2InputOptionsTwirling {
  /**
   * Whether to apply 2-qubit gate twirling
   * @type {boolean}
   * @memberof EstimatorV2InputOptionsTwirling
   */
  enable_gates?: boolean
  /**
   * Whether to apply measurement twirling
   * @type {boolean}
   * @memberof EstimatorV2InputOptionsTwirling
   */
  enable_measure?: boolean
  /**
   *
   * @type {EstimatorV2InputOptionsTwirlingNumRandomizations}
   * @memberof EstimatorV2InputOptionsTwirling
   */
  num_randomizations?: EstimatorV2InputOptionsTwirlingNumRandomizations
  /**
   *
   * @type {EstimatorV2InputOptionsTwirlingShotsPerRandomization}
   * @memberof EstimatorV2InputOptionsTwirling
   */
  shots_per_randomization?: EstimatorV2InputOptionsTwirlingShotsPerRandomization
  /**
   * The strategy of twirling qubits in identified layers of 2-qubit twirled gates
   * @type {string}
   * @memberof EstimatorV2InputOptionsTwirling
   */
  strategy?: EstimatorV2InputOptionsTwirlingStrategyEnum
}

export const EstimatorV2InputOptionsTwirlingStrategyEnum = {
  Active: 'active',
  ActiveCircuit: 'active-circuit',
  ActiveAccum: 'active-accum',
  All: 'all',
} as const

export type EstimatorV2InputOptionsTwirlingStrategyEnum =
  (typeof EstimatorV2InputOptionsTwirlingStrategyEnum)[keyof typeof EstimatorV2InputOptionsTwirlingStrategyEnum]

/**
 * @type EstimatorV2InputOptionsTwirlingNumRandomizations
 * The number of random samples to use when twirling or performing sampled mitigation
 * @export
 */
export type EstimatorV2InputOptionsTwirlingNumRandomizations = number | string

/**
 * @type EstimatorV2InputOptionsTwirlingShotsPerRandomization
 * The number of shots to run for each random sample
 * @export
 */
export type EstimatorV2InputOptionsTwirlingShotsPerRandomization = number | string

/**
 * The result for an EstimatorV2 API call
 * @export
 * @interface EstimatorV2JobResult
 */
export interface EstimatorV2JobResult {
  /**
   * Array of results, one for each PUB in the original job
   * @type {Array<EstimatorV2JobResultResultsInner>}
   * @memberof EstimatorV2JobResult
   */
  results: Array<EstimatorV2JobResultResultsInner>
  /**
   * Metadata for the job
   * @type {object}
   * @memberof EstimatorV2JobResult
   */
  metadata: object
}
/**
 * A single PUB result, containing result data and metadata
 * @export
 * @interface EstimatorV2JobResultResultsInner
 */
export interface EstimatorV2JobResultResultsInner {
  /**
   *
   * @type {EstimatorV2JobResultResultsInnerData}
   * @memberof EstimatorV2JobResultResultsInner
   */
  data: EstimatorV2JobResultResultsInnerData
  /**
   * PUB-specific metadata
   * @type {object}
   * @memberof EstimatorV2JobResultResultsInner
   */
  metadata: object
}
/**
 * PUB results for estimator include expectation values and standard errors, which can be either numbers or multidimensional arrays of numbers, depending on the shape of the observables and parameters in the original PUB
 * @export
 * @interface EstimatorV2JobResultResultsInnerData
 */
export interface EstimatorV2JobResultResultsInnerData {
  /**
   *
   * @type {EstimatorV2JobResultResultsInnerDataEvs}
   * @memberof EstimatorV2JobResultResultsInnerData
   */
  evs: EstimatorV2JobResultResultsInnerDataEvs
  /**
   *
   * @type {EstimatorV2JobResultResultsInnerDataEvs}
   * @memberof EstimatorV2JobResultResultsInnerData
   */
  stds: EstimatorV2JobResultResultsInnerDataEvs
  /**
   *
   * @type {EstimatorV2JobResultResultsInnerDataEvs}
   * @memberof EstimatorV2JobResultResultsInnerData
   */
  ensamble_standard_error?: EstimatorV2JobResultResultsInnerDataEvs
}
/**
 *
 * @export
 * @interface EstimatorV2JobResultResultsInnerDataEvs
 */
export interface EstimatorV2JobResultResultsInnerDataEvs {}
/**
 *
 * @export
 * @interface FindAdminRefundsResponse
 */
export interface FindAdminRefundsResponse {
  /**
   *
   * @type {Array<AdminRefundResponse>}
   * @memberof FindAdminRefundsResponse
   */
  refunds: Array<AdminRefundResponse>
}
/**
 *
 * @export
 * @interface FindInstancesInstanceResponse
 */
export interface FindInstancesInstanceResponse {
  /**
   *
   * @type {string}
   * @memberof FindInstancesInstanceResponse
   */
  name: string
  /**
   *
   * @type {string}
   * @memberof FindInstancesInstanceResponse
   */
  plan: FindInstancesInstanceResponsePlanEnum
}

export const FindInstancesInstanceResponsePlanEnum = {
  Premium: 'premium',
  Open: 'open',
  Internal: 'internal',
} as const

export type FindInstancesInstanceResponsePlanEnum =
  (typeof FindInstancesInstanceResponsePlanEnum)[keyof typeof FindInstancesInstanceResponsePlanEnum]

/**
 *
 * @export
 * @interface FindInstancesResponse
 */
export interface FindInstancesResponse {
  /**
   *
   * @type {Array<FindInstancesInstanceResponse>}
   * @memberof FindInstancesResponse
   */
  instances: Array<FindInstancesInstanceResponse>
}
/**
 * @type FindJobResultsControllerFindJobResult200Response
 * @export
 */
export type FindJobResultsControllerFindJobResult200Response =
  | EstimatorV2JobResult
  | SamplerV2JobResult

/**
 *
 * @export
 * @interface GenericError
 */
export interface GenericError {
  /**
   *
   * @type {number}
   * @memberof GenericError
   */
  code: number
  /**
   *
   * @type {string}
   * @memberof GenericError
   */
  message: string
  /**
   *
   * @type {string}
   * @memberof GenericError
   */
  solution: string
  /**
   *
   * @type {string}
   * @memberof GenericError
   */
  more_info: string
}
/**
 *
 * @export
 * @interface GenericErrorDto
 */
export interface GenericErrorDto {
  /**
   *
   * @type {Array<GenericError>}
   * @memberof GenericErrorDto
   */
  errors: Array<GenericError>
}
/**
 *
 * @export
 * @interface GetAnalyticsFiltersResponse
 */
export interface GetAnalyticsFiltersResponse {
  /**
   *
   * @type {Array<BackendFilter>}
   * @memberof GetAnalyticsFiltersResponse
   */
  backends: Array<BackendFilter>
  /**
   *
   * @type {Array<UserFilter>}
   * @memberof GetAnalyticsFiltersResponse
   */
  users?: Array<UserFilter>
  /**
   *
   * @type {Array<CountryFilter>}
   * @memberof GetAnalyticsFiltersResponse
   */
  countries: Array<CountryFilter>
  /**
   *
   * @type {Array<InstanceFilter>}
   * @memberof GetAnalyticsFiltersResponse
   */
  instances: Array<InstanceFilter>
}
/**
 *
 * @export
 * @interface GetAnalyticsUsageGroupedByDateResponse
 */
export interface GetAnalyticsUsageGroupedByDateResponse {
  /**
   * Interval start
   * @type {string}
   * @memberof GetAnalyticsUsageGroupedByDateResponse
   */
  intervalStart: string
  /**
   * Interval end
   * @type {string}
   * @memberof GetAnalyticsUsageGroupedByDateResponse
   */
  intervalEnd: string
  /**
   * Results
   * @type {Array<GetAnalyticsUsageGroupedByDateResponseData>}
   * @memberof GetAnalyticsUsageGroupedByDateResponse
   */
  data: Array<GetAnalyticsUsageGroupedByDateResponseData>
}
/**
 *
 * @export
 * @interface GetAnalyticsUsageGroupedByDateResponseData
 */
export interface GetAnalyticsUsageGroupedByDateResponseData {
  /**
   * Group key. Depends on the groupBy query params.
   * @type {string}
   * @memberof GetAnalyticsUsageGroupedByDateResponseData
   */
  key: string
  /**
   * Interval start
   * @type {string}
   * @memberof GetAnalyticsUsageGroupedByDateResponseData
   */
  intervalStart: string
  /**
   * Interval end
   * @type {string}
   * @memberof GetAnalyticsUsageGroupedByDateResponseData
   */
  intervalEnd: string
  /**
   * Total usage (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedByDateResponseData
   */
  usage: number
  /**
   * Total number of jobs
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedByDateResponseData
   */
  jobs: number
  /**
   * Total number of sessions
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedByDateResponseData
   */
  sessions: number
  /**
   * Total sessions usage (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedByDateResponseData
   */
  sessionsUsage: number
  /**
   * Average sessions usage (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedByDateResponseData
   */
  avgSessionsUsage: number
  /**
   * Max sessions usage (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedByDateResponseData
   */
  maxSessionsUsage: number
  /**
   * Total number of batch sessions
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedByDateResponseData
   */
  batchSessions: number
  /**
   * Total batch sessions usage (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedByDateResponseData
   */
  batchSessionsUsage: number
  /**
   * Average batch sessions usage (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedByDateResponseData
   */
  avgBatchSessionsUsage: number
  /**
   * Max batch sessions usage (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedByDateResponseData
   */
  maxBatchSessionsUsage: number
  /**
   * Total number of dedicated sessions
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedByDateResponseData
   */
  dedicatedSessions: number
  /**
   * Total dedicated sessions usage (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedByDateResponseData
   */
  dedicatedSessionsUsage: number
  /**
   * Average dedicated sessions usage (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedByDateResponseData
   */
  avgDedicatedSessionsUsage: number
  /**
   * Max dedicated sessions usage (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedByDateResponseData
   */
  maxDedicatedSessionsUsage: number
  /**
   * Total number of individual jobs
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedByDateResponseData
   */
  individualJobs: number
  /**
   * Total individual jobs usage  (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedByDateResponseData
   */
  individualJobsUsage: number
  /**
   * Average individual jobs usage  (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedByDateResponseData
   */
  avgIndividualJobsUsage: number
  /**
   * Average individual jobs usage (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedByDateResponseData
   */
  maxIndividualJobsUsage: number
  /**
   * Total queue time (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedByDateResponseData
   */
  queueTime: number
  /**
   * Average queue time (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedByDateResponseData
   */
  avgQueueTime: number
  /**
   * Max queue time  (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedByDateResponseData
   */
  maxQueueTime: number
}
/**
 *
 * @export
 * @interface GetAnalyticsUsageGroupedResponse
 */
export interface GetAnalyticsUsageGroupedResponse {
  /**
   * Data
   * @type {Array<GetAnalyticsUsageGroupedResponseData>}
   * @memberof GetAnalyticsUsageGroupedResponse
   */
  data: Array<GetAnalyticsUsageGroupedResponseData>
}
/**
 *
 * @export
 * @interface GetAnalyticsUsageGroupedResponseData
 */
export interface GetAnalyticsUsageGroupedResponseData {
  /**
   * Grouping key
   * @type {string}
   * @memberof GetAnalyticsUsageGroupedResponseData
   */
  key: string
  /**
   * Total usage (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedResponseData
   */
  usage: number
  /**
   * Total number of jobs
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedResponseData
   */
  jobs: number
  /**
   * Total number of sessions
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedResponseData
   */
  sessions: number
  /**
   * Total sessions usage (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedResponseData
   */
  sessionsUsage: number
  /**
   * Average sessions usage (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedResponseData
   */
  avgSessionsUsage: number
  /**
   * Max sessions usage (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedResponseData
   */
  maxSessionsUsage: number
  /**
   * Total number of batch sessions
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedResponseData
   */
  batchSessions: number
  /**
   * Total batch sessions usage (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedResponseData
   */
  batchSessionsUsage: number
  /**
   * Average batch sessions usage (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedResponseData
   */
  avgBatchSessionsUsage: number
  /**
   * Max batch sessions usage (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedResponseData
   */
  maxBatchSessionsUsage: number
  /**
   * Total number of dedicated sessions
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedResponseData
   */
  dedicatedSessions: number
  /**
   * Total dedicated sessions usage (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedResponseData
   */
  dedicatedSessionsUsage: number
  /**
   * Average dedicated sessions usage (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedResponseData
   */
  avgDedicatedSessionsUsage: number
  /**
   * Max dedicated sessions usage (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedResponseData
   */
  maxDedicatedSessionsUsage: number
  /**
   * Total number of individual jobs
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedResponseData
   */
  individualJobs: number
  /**
   * Total individual jobs usage  (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedResponseData
   */
  individualJobsUsage: number
  /**
   * Average individual jobs usage  (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedResponseData
   */
  avgIndividualJobsUsage: number
  /**
   * Average individual jobs usage (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedResponseData
   */
  maxIndividualJobsUsage: number
  /**
   * Total queue time (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedResponseData
   */
  queueTime: number
  /**
   * Average queue time (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedResponseData
   */
  avgQueueTime: number
  /**
   * Max queue time  (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageGroupedResponseData
   */
  maxQueueTime: number
}
/**
 *
 * @export
 * @interface GetAnalyticsUsageResponse
 */
export interface GetAnalyticsUsageResponse {
  /**
   * Total usage (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageResponse
   */
  usage: number
  /**
   * Total number of jobs
   * @type {number}
   * @memberof GetAnalyticsUsageResponse
   */
  jobs: number
  /**
   * Total number of sessions
   * @type {number}
   * @memberof GetAnalyticsUsageResponse
   */
  sessions: number
  /**
   * Total sessions usage (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageResponse
   */
  sessionsUsage: number
  /**
   * Average sessions usage (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageResponse
   */
  avgSessionsUsage: number
  /**
   * Max sessions usage (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageResponse
   */
  maxSessionsUsage: number
  /**
   * Total number of batch sessions
   * @type {number}
   * @memberof GetAnalyticsUsageResponse
   */
  batchSessions: number
  /**
   * Total batch sessions usage (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageResponse
   */
  batchSessionsUsage: number
  /**
   * Average batch sessions usage (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageResponse
   */
  avgBatchSessionsUsage: number
  /**
   * Max batch sessions usage (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageResponse
   */
  maxBatchSessionsUsage: number
  /**
   * Total number of dedicated sessions
   * @type {number}
   * @memberof GetAnalyticsUsageResponse
   */
  dedicatedSessions: number
  /**
   * Total dedicated sessions usage (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageResponse
   */
  dedicatedSessionsUsage: number
  /**
   * Average dedicated sessions usage (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageResponse
   */
  avgDedicatedSessionsUsage: number
  /**
   * Max dedicated sessions usage (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageResponse
   */
  maxDedicatedSessionsUsage: number
  /**
   * Total number of individual jobs
   * @type {number}
   * @memberof GetAnalyticsUsageResponse
   */
  individualJobs: number
  /**
   * Total individual jobs usage  (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageResponse
   */
  individualJobsUsage: number
  /**
   * Average individual jobs usage  (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageResponse
   */
  avgIndividualJobsUsage: number
  /**
   * Average individual jobs usage (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageResponse
   */
  maxIndividualJobsUsage: number
  /**
   * Total queue time (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageResponse
   */
  queueTime: number
  /**
   * Average queue time (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageResponse
   */
  avgQueueTime: number
  /**
   * Max queue time  (in milliseconds)
   * @type {number}
   * @memberof GetAnalyticsUsageResponse
   */
  maxQueueTime: number
}
/**
 *
 * @export
 * @interface GetBackendStatusResponse
 */
export interface GetBackendStatusResponse {
  /**
   *
   * @type {boolean}
   * @memberof GetBackendStatusResponse
   */
  state: boolean
  /**
   *
   * @type {string}
   * @memberof GetBackendStatusResponse
   */
  status: string
  /**
   *
   * @type {string}
   * @memberof GetBackendStatusResponse
   */
  message: string
  /**
   *
   * @type {number}
   * @memberof GetBackendStatusResponse
   */
  length_queue: number
  /**
   *
   * @type {string}
   * @memberof GetBackendStatusResponse
   */
  backend_version: string
}
/**
 *
 * @export
 * @interface GetInstanceSharesResponse
 */
export interface GetInstanceSharesResponse {
  /**
   * Shares
   * @type {Array<GetInstanceSharesResponseItem>}
   * @memberof GetInstanceSharesResponse
   */
  shares: Array<GetInstanceSharesResponseItem>
}
/**
 *
 * @export
 * @interface GetInstanceSharesResponseItem
 */
export interface GetInstanceSharesResponseItem {
  /**
   * Provider class
   * @type {string}
   * @memberof GetInstanceSharesResponseItem
   */
  providerClass: GetInstanceSharesResponseItemProviderClassEnum
  /**
   * Hub
   * @type {string}
   * @memberof GetInstanceSharesResponseItem
   */
  hubId: string
  /**
   * Group
   * @type {string}
   * @memberof GetInstanceSharesResponseItem
   */
  groupId: string
  /**
   * Project
   * @type {string}
   * @memberof GetInstanceSharesResponseItem
   */
  projectId: string
  /**
   * Hub share
   * @type {number}
   * @memberof GetInstanceSharesResponseItem
   */
  hubShare: number
  /**
   * Group share
   * @type {number}
   * @memberof GetInstanceSharesResponseItem
   */
  groupShare: number
  /**
   * Project share
   * @type {number}
   * @memberof GetInstanceSharesResponseItem
   */
  projectShare: number
  /**
   * Hub capacity limit (in seconds)
   * @type {object}
   * @memberof GetInstanceSharesResponseItem
   */
  hubCapacityLimit: object
  /**
   * Group capacity limit (in seconds)
   * @type {object}
   * @memberof GetInstanceSharesResponseItem
   */
  groupCapacityLimit: object
  /**
   * Project capacity limit (in seconds)
   * @type {object}
   * @memberof GetInstanceSharesResponseItem
   */
  projectCapacityLimit: object
  /**
   * Group reserved capacity (in seconds)
   * @type {object}
   * @memberof GetInstanceSharesResponseItem
   */
  groupCapacityReserved: object
  /**
   * Project reserved capacity (in seconds)
   * @type {object}
   * @memberof GetInstanceSharesResponseItem
   */
  projectCapacityReserved: object
}

export const GetInstanceSharesResponseItemProviderClassEnum = {
  Internal: 'Internal',
  Premium: 'Premium',
  Community: 'Community',
  CommunityStartup: 'Community-Startup',
  Open: 'Open',
  UnclassifiedHub: 'Unclassified Hub',
} as const

export type GetInstanceSharesResponseItemProviderClassEnum =
  (typeof GetInstanceSharesResponseItemProviderClassEnum)[keyof typeof GetInstanceSharesResponseItemProviderClassEnum]

/**
 *
 * @export
 * @interface GetJobTypeResponse
 */
export interface GetJobTypeResponse {
  /**
   *
   * @type {string}
   * @memberof GetJobTypeResponse
   */
  id: string
  /**
   *
   * @type {string}
   * @memberof GetJobTypeResponse
   */
  type: GetJobTypeResponseTypeEnum
}

export const GetJobTypeResponseTypeEnum = {
  Runtime: 'RUNTIME',
  Iqx: 'IQX',
} as const

export type GetJobTypeResponseTypeEnum =
  (typeof GetJobTypeResponseTypeEnum)[keyof typeof GetJobTypeResponseTypeEnum]

/**
 *
 * @export
 * @interface GetSessionDetailsExtendedResponse
 */
export interface GetSessionDetailsExtendedResponse {
  /**
   *
   * @type {string}
   * @memberof GetSessionDetailsExtendedResponse
   */
  id: string
  /**
   *
   * @type {string}
   * @memberof GetSessionDetailsExtendedResponse
   */
  user_id: string
  /**
   *
   * @type {string}
   * @memberof GetSessionDetailsExtendedResponse
   */
  backend_name: string
  /**
   *
   * @type {string}
   * @memberof GetSessionDetailsExtendedResponse
   */
  instance: string
  /**
   * The timestamp when the first job of the session started (activated the first time)
   * @type {string}
   * @memberof GetSessionDetailsExtendedResponse
   */
  started_at?: string
  /**
   * The timestamp when the session was created
   * @type {string}
   * @memberof GetSessionDetailsExtendedResponse
   */
  created_at?: string
  /**
   * The timestamp when the session started was activated
   * @type {string}
   * @memberof GetSessionDetailsExtendedResponse
   */
  activated_at?: string
  /**
   * The timestamp when the session was closed
   * @type {string}
   * @memberof GetSessionDetailsExtendedResponse
   */
  closed_at?: string
  /**
   *
   * @type {string}
   * @memberof GetSessionDetailsExtendedResponse
   */
  last_job_started?: string
  /**
   *
   * @type {string}
   * @memberof GetSessionDetailsExtendedResponse
   */
  last_job_completed?: string
  /**
   *
   * @type {number}
   * @memberof GetSessionDetailsExtendedResponse
   */
  interactive_ttl: number
  /**
   *
   * @type {number}
   * @memberof GetSessionDetailsExtendedResponse
   */
  max_ttl: number
  /**
   *
   * @type {number}
   * @memberof GetSessionDetailsExtendedResponse
   */
  active_ttl: number
  /**
   * The status of the session
   * @type {string}
   * @memberof GetSessionDetailsExtendedResponse
   */
  status: GetSessionDetailsExtendedResponseStatusEnum
  /**
   * The status cause of the current.
   * @type {string}
   * @memberof GetSessionDetailsExtendedResponse
   */
  status_reason?: string
  /**
   * If true, the session is actively accepting new jobs to be queued. If false, jobs will be rejected on create and the session will be immediately closed when there are no more jobs to run in the session.
   * @type {boolean}
   * @memberof GetSessionDetailsExtendedResponse
   */
  accepting_jobs: boolean
  /**
   * The session mode
   * @type {string}
   * @memberof GetSessionDetailsExtendedResponse
   */
  mode?: GetSessionDetailsExtendedResponseModeEnum
  /**
   * The session usage time in seconds
   * @type {number}
   * @memberof GetSessionDetailsExtendedResponse
   */
  elapsed_time?: number
  /**
   * The session remaining time in seconds
   * @type {number}
   * @memberof GetSessionDetailsExtendedResponse
   */
  session_remaining_time_seconds?: number
  /**
   * The session events
   * @type {Array<TimeStamp>}
   * @memberof GetSessionDetailsExtendedResponse
   */
  timestamps?: Array<TimeStamp>
}

export const GetSessionDetailsExtendedResponseStatusEnum = {
  Completed: 'completed',
  Canceled: 'canceled',
  Failed: 'failed',
  Pending: 'pending',
  InProgress: 'in_progress',
  Unknown: 'unknown',
} as const

export type GetSessionDetailsExtendedResponseStatusEnum =
  (typeof GetSessionDetailsExtendedResponseStatusEnum)[keyof typeof GetSessionDetailsExtendedResponseStatusEnum]
export const GetSessionDetailsExtendedResponseModeEnum = {
  Batch: 'batch',
  Dedicated: 'dedicated',
} as const

export type GetSessionDetailsExtendedResponseModeEnum =
  (typeof GetSessionDetailsExtendedResponseModeEnum)[keyof typeof GetSessionDetailsExtendedResponseModeEnum]

/**
 *
 * @export
 * @interface GetSessionDetailsResponse
 */
export interface GetSessionDetailsResponse {
  /**
   *
   * @type {string}
   * @memberof GetSessionDetailsResponse
   */
  id: string
  /**
   *
   * @type {string}
   * @memberof GetSessionDetailsResponse
   */
  backend_name: string
  /**
   * The timestamp when the first job of the session started (activated the first time)
   * @type {string}
   * @memberof GetSessionDetailsResponse
   */
  started_at?: string
  /**
   * The timestamp when the session was created
   * @type {string}
   * @memberof GetSessionDetailsResponse
   */
  created_at?: string
  /**
   * The timestamp when the session started was activated
   * @type {string}
   * @memberof GetSessionDetailsResponse
   */
  activated_at?: string
  /**
   * The timestamp when the session was closed
   * @type {string}
   * @memberof GetSessionDetailsResponse
   */
  closed_at?: string
  /**
   *
   * @type {string}
   * @memberof GetSessionDetailsResponse
   */
  last_job_started?: string
  /**
   *
   * @type {string}
   * @memberof GetSessionDetailsResponse
   */
  last_job_completed?: string
  /**
   *
   * @type {number}
   * @memberof GetSessionDetailsResponse
   */
  interactive_ttl: number
  /**
   *
   * @type {number}
   * @memberof GetSessionDetailsResponse
   */
  max_ttl: number
  /**
   *
   * @type {number}
   * @memberof GetSessionDetailsResponse
   */
  active_ttl: number
  /**
   * The state of the session. - **open**: The session has been created but no jobs have been dequeued in it. - **active**: Jobs are being dequeued for the session. - **inactive**: The interactiveSessionTTL expired before more jobs were available. - **closed**: The maxSessionTTL expired or the session was explicitly closed. - **canceled**: The session was canceled by some reason.
   * @type {string}
   * @memberof GetSessionDetailsResponse
   */
  state: GetSessionDetailsResponseStateEnum
  /**
   * If true, the session is actively accepting new jobs to be queued. If false, jobs will be rejected on create and the session will be immediately closed when there are no more jobs to run in the session.
   * @type {boolean}
   * @memberof GetSessionDetailsResponse
   */
  accepting_jobs: boolean
  /**
   * The session mode
   * @type {string}
   * @memberof GetSessionDetailsResponse
   */
  mode?: GetSessionDetailsResponseModeEnum
  /**
   * The session usage time in seconds
   * @type {number}
   * @memberof GetSessionDetailsResponse
   */
  elapsed_time?: number
}

export const GetSessionDetailsResponseStateEnum = {
  Canceled: 'canceled',
  Closed: 'closed',
  Open: 'open',
  Active: 'active',
  Inactive: 'inactive',
} as const

export type GetSessionDetailsResponseStateEnum =
  (typeof GetSessionDetailsResponseStateEnum)[keyof typeof GetSessionDetailsResponseStateEnum]
export const GetSessionDetailsResponseModeEnum = {
  Batch: 'batch',
  Dedicated: 'dedicated',
} as const

export type GetSessionDetailsResponseModeEnum =
  (typeof GetSessionDetailsResponseModeEnum)[keyof typeof GetSessionDetailsResponseModeEnum]

/**
 * Job state update event
 * @export
 * @interface GetStreamJobsStateUpdates200Response
 */
export interface GetStreamJobsStateUpdates200Response {
  /**
   * Identifier of an existing job
   * @type {string}
   * @memberof GetStreamJobsStateUpdates200Response
   */
  id: string
  /**
   * Job status
   * @type {string}
   * @memberof GetStreamJobsStateUpdates200Response
   */
  status: string
  /**
   * Job status reason
   * @type {string}
   * @memberof GetStreamJobsStateUpdates200Response
   */
  reason?: string
  /**
   * Job status reason code
   * @type {number}
   * @memberof GetStreamJobsStateUpdates200Response
   */
  reason_code?: number
  /**
   * Next steps user can take in case of failure
   * @type {string}
   * @memberof GetStreamJobsStateUpdates200Response
   */
  reason_solution?: string
  /**
   * Job system
   * @type {string}
   * @memberof GetStreamJobsStateUpdates200Response
   */
  backend?: string
  /**
   * Job status update timestamp
   * @type {string}
   * @memberof GetStreamJobsStateUpdates200Response
   */
  timestamp?: string
}
/**
 *
 * @export
 * @interface GetUserMeResponse
 */
export interface GetUserMeResponse {
  /**
   *
   * @type {string}
   * @memberof GetUserMeResponse
   */
  email: string
  /**
   *
   * @type {Array<Instance>}
   * @memberof GetUserMeResponse
   */
  instances: Array<Instance>
}
/**
 *
 * @export
 * @interface HealthControllerReadiness200Response
 */
export interface HealthControllerReadiness200Response {
  /**
   *
   * @type {string}
   * @memberof HealthControllerReadiness200Response
   */
  status?: string
  /**
   *
   * @type {{ [key: string]: HealthControllerReadiness200ResponseInfoValue; }}
   * @memberof HealthControllerReadiness200Response
   */
  info?: { [key: string]: HealthControllerReadiness200ResponseInfoValue }
  /**
   *
   * @type {{ [key: string]: HealthControllerReadiness200ResponseErrorValue; }}
   * @memberof HealthControllerReadiness200Response
   */
  error?: { [key: string]: HealthControllerReadiness200ResponseErrorValue }
  /**
   *
   * @type {{ [key: string]: HealthControllerReadiness200ResponseErrorValue; }}
   * @memberof HealthControllerReadiness200Response
   */
  details?: { [key: string]: HealthControllerReadiness200ResponseErrorValue }
}
/**
 *
 * @export
 * @interface HealthControllerReadiness200ResponseErrorValue
 */
export interface HealthControllerReadiness200ResponseErrorValue {
  [key: string]: string | any

  /**
   *
   * @type {string}
   * @memberof HealthControllerReadiness200ResponseErrorValue
   */
  status?: string
}
/**
 *
 * @export
 * @interface HealthControllerReadiness200ResponseInfoValue
 */
export interface HealthControllerReadiness200ResponseInfoValue {
  [key: string]: string | any

  /**
   *
   * @type {string}
   * @memberof HealthControllerReadiness200ResponseInfoValue
   */
  status?: string
}
/**
 *
 * @export
 * @interface HealthControllerReadiness503Response
 */
export interface HealthControllerReadiness503Response {
  /**
   *
   * @type {string}
   * @memberof HealthControllerReadiness503Response
   */
  status?: string
  /**
   *
   * @type {{ [key: string]: HealthControllerReadiness200ResponseErrorValue; }}
   * @memberof HealthControllerReadiness503Response
   */
  info?: { [key: string]: HealthControllerReadiness200ResponseErrorValue }
  /**
   *
   * @type {{ [key: string]: HealthControllerReadiness200ResponseErrorValue; }}
   * @memberof HealthControllerReadiness503Response
   */
  error?: { [key: string]: HealthControllerReadiness200ResponseErrorValue }
  /**
   *
   * @type {{ [key: string]: HealthControllerReadiness200ResponseErrorValue; }}
   * @memberof HealthControllerReadiness503Response
   */
  details?: { [key: string]: HealthControllerReadiness200ResponseErrorValue }
}
/**
 *
 * @export
 * @interface HubUsageStatsDto
 */
export interface HubUsageStatsDto {
  /**
   *
   * @type {string}
   * @memberof HubUsageStatsDto
   */
  instance: string
  /**
   *
   * @type {number}
   * @memberof HubUsageStatsDto
   */
  quota: number
  /**
   *
   * @type {number}
   * @memberof HubUsageStatsDto
   */
  usage: number
  /**
   *
   * @type {number}
   * @memberof HubUsageStatsDto
   */
  pendingJobs: number
  /**
   *
   * @type {number}
   * @memberof HubUsageStatsDto
   */
  maxPendingJobs: number
}
/**
 *
 * @export
 * @interface Instance
 */
export interface Instance {
  /**
   *
   * @type {string}
   * @memberof Instance
   */
  name: string
  /**
   *
   * @type {string}
   * @memberof Instance
   */
  plan: string
}
/**
 *
 * @export
 * @interface InstanceFilter
 */
export interface InstanceFilter {
  /**
   *
   * @type {string}
   * @memberof InstanceFilter
   */
  id: string
  /**
   *
   * @type {boolean}
   * @memberof InstanceFilter
   */
  deleted: boolean
}
/**
 * Various metrics about the execution of a job
 * @export
 * @interface JobMetrics
 */
export interface JobMetrics {
  /**
   *
   * @type {JobMetricsTimestamps}
   * @memberof JobMetrics
   */
  timestamps?: JobMetricsTimestamps
  /**
   *
   * @type {JobMetricsBss}
   * @memberof JobMetrics
   */
  bss?: JobMetricsBss
  /**
   *
   * @type {JobMetricsUsage}
   * @memberof JobMetrics
   */
  usage?: JobMetricsUsage
  /**
   * Number of executions during job
   * @type {number}
   * @memberof JobMetrics
   */
  executions?: number
  /**
   * Number of circuits executed on quantum system
   * @type {number}
   * @memberof JobMetrics
   */
  num_circuits?: number
  /**
   * Number of qubits on quantum system
   * @type {Array<number>}
   * @memberof JobMetrics
   */
  num_qubits?: Array<number>
  /**
   * An array of circuit depths
   * @type {Array<number>}
   * @memberof JobMetrics
   */
  circuit_depths?: Array<number>
  /**
   * Qiskit version used during execution of the job
   * @type {string}
   * @memberof JobMetrics
   */
  qiskit_version?: string
  /**
   * UTC timestamp for when the job will start
   * @type {string}
   * @memberof JobMetrics
   */
  estimated_start_time?: string
  /**
   * UTC timestamp for when the job will complete
   * @type {string}
   * @memberof JobMetrics
   */
  estimated_completion_time?: string
  /**
   * Current position of job in queue
   * @type {number}
   * @memberof JobMetrics
   */
  position_in_queue?: number
  /**
   * Current position of job in instance
   * @type {number}
   * @memberof JobMetrics
   */
  position_in_provider?: number
}
/**
 * Contains information about job usage metrics
 * @export
 * @interface JobMetricsBss
 */
export interface JobMetricsBss {
  /**
   * Total billed time for the job - quantum seconds only.
   * @type {number}
   * @memberof JobMetricsBss
   */
  seconds?: number
}
/**
 * A map of status transitions to timestamps
 * @export
 * @interface JobMetricsTimestamps
 */
export interface JobMetricsTimestamps {
  /**
   * Timestamp of when the job create request was received
   * @type {string}
   * @memberof JobMetricsTimestamps
   */
  created?: string
  /**
   * Timestamp of when the job finished
   * @type {string}
   * @memberof JobMetricsTimestamps
   */
  finished?: string
  /**
   * Timestamp of when the job started running
   * @type {string}
   * @memberof JobMetricsTimestamps
   */
  running?: string
}
/**
 * Contains information about job usage metrics
 * @export
 * @interface JobMetricsUsage
 */
export interface JobMetricsUsage {
  /**
   * Total quantum seconds used by the job
   * @type {number}
   * @memberof JobMetricsUsage
   */
  quantum_seconds?: number
  /**
   * Total billed time for the job - quantum seconds only.
   * @type {number}
   * @memberof JobMetricsUsage
   */
  seconds?: number
}
/**
 * Information about the job queue position
 * @export
 * @interface JobQueueInfo
 */
export interface JobQueueInfo {
  /**
   * Job position in the queue
   * @type {number}
   * @memberof JobQueueInfo
   */
  position: number
  /**
   * Job position in the queue for the job\'s instance
   * @type {number}
   * @memberof JobQueueInfo
   */
  providerPosition: number
  /**
   * Estimated job execution start time
   * @type {string}
   * @memberof JobQueueInfo
   */
  estimatedStartTime: string
  /**
   * Estimated job execution completion time
   * @type {string}
   * @memberof JobQueueInfo
   */
  estimatedCompletionTime: string
}
/**
 *
 * @export
 * @interface JobResponse
 */
export interface JobResponse {
  /**
   *
   * @type {string}
   * @memberof JobResponse
   */
  id: string
  /**
   *
   * @type {string}
   * @memberof JobResponse
   */
  hub: string
  /**
   *
   * @type {string}
   * @memberof JobResponse
   */
  group: string
  /**
   *
   * @type {string}
   * @memberof JobResponse
   */
  project: string
  /**
   *
   * @type {string}
   * @memberof JobResponse
   */
  backend: string
  /**
   *
   * @type {JobStateResponse}
   * @memberof JobResponse
   */
  state: JobStateResponse
  /**
   * Job status, if cancelled, the reason is included in the status field like \"Cancelled - Ran too long\"
   * @type {string}
   * @memberof JobResponse
   */
  status: JobResponseStatusEnum
  /**
   *
   * @type {object}
   * @memberof JobResponse
   */
  params: object
  /**
   *
   * @type {object}
   * @memberof JobResponse
   */
  program: object
  /**
   *
   * @type {string}
   * @memberof JobResponse
   */
  created: string
  /**
   *
   * @type {string}
   * @memberof JobResponse
   */
  ended: string
  /**
   *
   * @type {string}
   * @memberof JobResponse
   */
  runtime: string
  /**
   *
   * @type {number}
   * @memberof JobResponse
   */
  cost: number
  /**
   *
   * @type {Array<string>}
   * @memberof JobResponse
   */
  tags: Array<string>
  /**
   *
   * @type {string}
   * @memberof JobResponse
   */
  session_id: string
  /**
   *
   * @type {object}
   * @memberof JobResponse
   */
  usage: object
  /**
   *
   * @type {number}
   * @memberof JobResponse
   */
  estimated_running_time_seconds: number
  /**
   *
   * @type {number}
   * @memberof JobResponse
   */
  estimated_max_running_time_seconds: number
  /**
   *
   * @type {boolean}
   * @memberof JobResponse
   */
  private: boolean
  /**
   *
   * @type {string}
   * @memberof JobResponse
   */
  user_id: string
}

export const JobResponseStatusEnum = {
  Completed: 'Completed',
  Cancelled: 'Cancelled',
  Failed: 'Failed',
  Queued: 'Queued',
  Running: 'Running',
} as const

export type JobResponseStatusEnum =
  (typeof JobResponseStatusEnum)[keyof typeof JobResponseStatusEnum]

/**
 * A job
 * @export
 * @interface JobResponse1
 */
export interface JobResponse1 {
  /**
   * Identifier assigned to the job
   * @type {string}
   * @memberof JobResponse1
   */
  id: string
  /**
   * Name of the hub of the instance in which the job is being executed
   * @type {string}
   * @memberof JobResponse1
   */
  hub?: string
  /**
   * Name of the group of the instance in which the job is being executed
   * @type {string}
   * @memberof JobResponse1
   */
  group?: string
  /**
   * Name of the project of the instance in which the job is being executed
   * @type {string}
   * @memberof JobResponse1
   */
  project?: string
  /**
   * The system on which to run the job.  If no system is specified, the job is sent to the system with the shortest queue that you have access to.
   * @type {string}
   * @memberof JobResponse1
   */
  backend?: string
  /**
   *
   * @type {JobState}
   * @memberof JobResponse1
   */
  state: JobState
  /**
   * Current status of the job
   * @type {string}
   * @memberof JobResponse1
   */
  status: JobResponse1StatusEnum
  /**
   * Parameters used to execute the job
   * @type {{ [key: string]: any; }}
   * @memberof JobResponse1
   */
  params?: { [key: string]: any }
  /**
   *
   * @type {JobResponse1Program}
   * @memberof JobResponse1
   */
  program: JobResponse1Program
  /**
   * UTC timestamp for when the job was created
   * @type {string}
   * @memberof JobResponse1
   */
  created: string
  /**
   * UTC timestamp for when the job has ended
   * @type {string}
   * @memberof JobResponse1
   */
  ended?: string
  /**
   * Name and tag of the image to use when running a program
   * @type {string}
   * @memberof JobResponse1
   */
  runtime?: string
  /**
   * Cost of the job
   * @type {number}
   * @memberof JobResponse1
   */
  cost: number
  /**
   * List of job or program tags
   * @type {Array<string>}
   * @memberof JobResponse1
   */
  tags?: Array<string>
  /**
   * Identifier of the session that the job is a part of
   * @type {string}
   * @memberof JobResponse1
   */
  session_id?: string
  /**
   *
   * @type {Usage1}
   * @memberof JobResponse1
   */
  usage?: Usage1
  /**
   * The estimated running time of the job (in seconds)
   * @type {number}
   * @memberof JobResponse1
   */
  estimated_running_time_seconds?: number
  /**
   * The estimated upper-bound running time of the job (in seconds)
   * @type {number}
   * @memberof JobResponse1
   */
  estimated_max_running_time_seconds?: number
  /**
   * User identifier from the job owner
   * @type {string}
   * @memberof JobResponse1
   */
  user_id?: string
}

export const JobResponse1StatusEnum = {
  Queued: 'Queued',
  Running: 'Running',
  Completed: 'Completed',
  Cancelled: 'Cancelled',
  CancelledRanTooLong: 'Cancelled - Ran too long',
  Failed: 'Failed',
} as const

export type JobResponse1StatusEnum =
  (typeof JobResponse1StatusEnum)[keyof typeof JobResponse1StatusEnum]

/**
 * Primitive associated with the job
 * @export
 * @interface JobResponse1Program
 */
export interface JobResponse1Program {
  /**
   * Identifier of the executed primitive
   * @type {string}
   * @memberof JobResponse1Program
   */
  id: string
}
/**
 * Current state of the job
 * @export
 * @interface JobState
 */
export interface JobState {
  /**
   * Current status of the job
   * @type {string}
   * @memberof JobState
   */
  status: JobStateStatusEnum
  /**
   * Reason for the current status
   * @type {string}
   * @memberof JobState
   */
  reason?: string
  /**
   * Reason code for the current status
   * @type {number}
   * @memberof JobState
   */
  reason_code?: number
  /**
   * Next steps user can take in case of failure
   * @type {string}
   * @memberof JobState
   */
  reason_solution?: string
}

export const JobStateStatusEnum = {
  Queued: 'Queued',
  Running: 'Running',
  Completed: 'Completed',
  Cancelled: 'Cancelled',
  Failed: 'Failed',
} as const

export type JobStateStatusEnum = (typeof JobStateStatusEnum)[keyof typeof JobStateStatusEnum]

/**
 * Current state of the job
 * @export
 * @interface JobState1
 */
export interface JobState1 {
  /**
   * Current status of the job
   * @type {string}
   * @memberof JobState1
   */
  status: JobState1StatusEnum
  /**
   * Reason for the current status
   * @type {string}
   * @memberof JobState1
   */
  reason: string
  /**
   * Reason code for the current status
   * @type {number}
   * @memberof JobState1
   */
  reason_code?: number
}

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
} as const

export type JobState1StatusEnum = (typeof JobState1StatusEnum)[keyof typeof JobState1StatusEnum]

/**
 *
 * @export
 * @interface JobStateResponse
 */
export interface JobStateResponse {
  /**
   *
   * @type {string}
   * @memberof JobStateResponse
   */
  status: JobStateResponseStatusEnum
  /**
   *
   * @type {string}
   * @memberof JobStateResponse
   */
  reason?: string
  /**
   *
   * @type {number}
   * @memberof JobStateResponse
   */
  reason_code?: number
}

export const JobStateResponseStatusEnum = {
  Completed: 'Completed',
  Cancelled: 'Cancelled',
  Failed: 'Failed',
  Queued: 'Queued',
  Running: 'Running',
} as const

export type JobStateResponseStatusEnum =
  (typeof JobStateResponseStatusEnum)[keyof typeof JobStateResponseStatusEnum]

/**
 * Number of jobs
 * @export
 * @interface JobsCountResponse
 */
export interface JobsCountResponse {
  /**
   * Number of jobs
   * @type {number}
   * @memberof JobsCountResponse
   */
  count: number
}
/**
 * Jobs collection response
 * @export
 * @interface JobsResponse
 */
export interface JobsResponse {
  /**
   * A list of jobs
   * @type {Array<JobResponse1>}
   * @memberof JobsResponse
   */
  jobs?: Array<JobResponse1>
  /**
   * Total number of jobs for the user
   * @type {number}
   * @memberof JobsResponse
   */
  count?: number
  /**
   * Offset at which paginated results are returned
   * @type {number}
   * @memberof JobsResponse
   */
  offset: number
  /**
   * Maximum number of results returned in the paginated response
   * @type {number}
   * @memberof JobsResponse
   */
  limit: number
}
/**
 * Jobs Transpiled Circuits presigned URL to download
 * @export
 * @interface JobsTranspiledCircuitsResponse
 */
export interface JobsTranspiledCircuitsResponse {
  /**
   * URL to download the transpiled circuits
   * @type {string}
   * @memberof JobsTranspiledCircuitsResponse
   */
  url: string
}
/**
 * Error response
 * @export
 * @interface ListJobs400Response
 */
export interface ListJobs400Response {
  /**
   * A request identifier
   * @type {string}
   * @memberof ListJobs400Response
   */
  trace?: string
  /**
   * A list of errors
   * @type {Array<ListJobs400ResponseErrorsInner>}
   * @memberof ListJobs400Response
   */
  errors?: Array<ListJobs400ResponseErrorsInner>
}
/**
 *
 * @export
 * @interface ListJobs400ResponseErrorsInner
 */
export interface ListJobs400ResponseErrorsInner {
  /**
   * Error type identifier
   * @type {string}
   * @memberof ListJobs400ResponseErrorsInner
   */
  code?: string
  /**
   * Explanation of the problem
   * @type {string}
   * @memberof ListJobs400ResponseErrorsInner
   */
  message?: string
  /**
   * URL where information about the error can be read in a web browser
   * @type {string}
   * @memberof ListJobs400ResponseErrorsInner
   */
  more_info?: string
}
/**
 *
 * @export
 * @interface PaginationRuntimeJobResponse
 */
export interface PaginationRuntimeJobResponse {
  /**
   *
   * @type {Array<JobResponse>}
   * @memberof PaginationRuntimeJobResponse
   */
  jobs: Array<JobResponse>
  /**
   *
   * @type {number}
   * @memberof PaginationRuntimeJobResponse
   */
  count: number
  /**
   *
   * @type {number}
   * @memberof PaginationRuntimeJobResponse
   */
  limit: number
  /**
   *
   * @type {number}
   * @memberof PaginationRuntimeJobResponse
   */
  offset: number
}
/**
 *
 * @export
 * @interface PaginationWorkloadsResponse
 */
export interface PaginationWorkloadsResponse {
  /**
   *
   * @type {Array<WorkloadResponse>}
   * @memberof PaginationWorkloadsResponse
   */
  workloads: Array<WorkloadResponse>
  /**
   *
   * @type {number}
   * @memberof PaginationWorkloadsResponse
   */
  count: number
  /**
   *
   * @type {number}
   * @memberof PaginationWorkloadsResponse
   */
  limit: number
  /**
   *
   * @type {string}
   * @memberof PaginationWorkloadsResponse
   */
  previous?: string
  /**
   *
   * @type {string}
   * @memberof PaginationWorkloadsResponse
   */
  next?: string
}
/**
 * A program
 * @export
 * @interface Program
 */
export interface Program {
  /**
   * Program ID
   * @type {string}
   * @memberof Program
   */
  id: string
}
/**
 * Replace job tags request
 * @export
 * @interface ReplaceJobTagsRequest
 */
export interface ReplaceJobTagsRequest {
  /**
   * List of job or program tags
   * @type {Array<string>}
   * @memberof ReplaceJobTagsRequest
   */
  tags: Array<string>
}
/**
 * The input for an SamplerV2 API call
 * @export
 * @interface SamplerV2Input
 */
export interface SamplerV2Input {
  /**
   * Primitive Unit Blocs of data. Each PUB is of the form (Circuit, Parameters, Shots) where the circuit is required, parameters should be passed only for parametrized circuits, and shots is optional
   * @type {Array<Array<any>>}
   * @memberof SamplerV2Input
   */
  pubs: Array<Array<any>>
  /**
   *
   * @type {SamplerV2InputOptions}
   * @memberof SamplerV2Input
   */
  options?: SamplerV2InputOptions
  /**
   * Default number of shots which applies to all pubs without shots
   * @type {number}
   * @memberof SamplerV2Input
   */
  shots?: number
  /**
   * If True, returns a qiskit-style output, meant to be parsed using the runtime result decoder, or resort to returning pure JSON results (resulting in larger objects)
   * @type {boolean}
   * @memberof SamplerV2Input
   */
  support_qiskit?: boolean
  /**
   * For SamplerV2, version should always be 2
   * @type {number}
   * @memberof SamplerV2Input
   */
  version?: SamplerV2InputVersionEnum
}

export const SamplerV2InputVersionEnum = {
  NUMBER_2: 2,
} as const

export type SamplerV2InputVersionEnum =
  (typeof SamplerV2InputVersionEnum)[keyof typeof SamplerV2InputVersionEnum]

/**
 * Options for V2 Sampler
 * @export
 * @interface SamplerV2InputOptions
 */
export interface SamplerV2InputOptions {
  /**
   * The default number of shots to use if none are specified in the PUBs
   * @type {number}
   * @memberof SamplerV2InputOptions
   */
  default_shots?: number
  /**
   *
   * @type {SamplerV2InputOptionsDynamicalDecoupling}
   * @memberof SamplerV2InputOptions
   */
  dynamical_decoupling?: SamplerV2InputOptionsDynamicalDecoupling
  /**
   *
   * @type {SamplerV2InputOptionsExecution}
   * @memberof SamplerV2InputOptions
   */
  execution?: SamplerV2InputOptionsExecution
}
/**
 * Suboptions for dynamical decoupling
 * @export
 * @interface SamplerV2InputOptionsDynamicalDecoupling
 */
export interface SamplerV2InputOptionsDynamicalDecoupling {
  /**
   * Whether to enable DD as specified by the other options in this class
   * @type {boolean}
   * @memberof SamplerV2InputOptionsDynamicalDecoupling
   */
  enable?: boolean
  /**
   * Which dynamical decoupling sequence to use
   * @type {string}
   * @memberof SamplerV2InputOptionsDynamicalDecoupling
   */
  sequence_type?: SamplerV2InputOptionsDynamicalDecouplingSequenceTypeEnum
  /**
   * Where to put extra timing delays due to rounding issues
   * @type {string}
   * @memberof SamplerV2InputOptionsDynamicalDecoupling
   */
  extra_slack_distribution?: SamplerV2InputOptionsDynamicalDecouplingExtraSlackDistributionEnum
  /**
   * Whether to schedule gates as soon as (\'asap\') or as late as (\'alap\') possible
   * @type {string}
   * @memberof SamplerV2InputOptionsDynamicalDecoupling
   */
  scheduling_method?: SamplerV2InputOptionsDynamicalDecouplingSchedulingMethodEnum
}

export const SamplerV2InputOptionsDynamicalDecouplingSequenceTypeEnum = {
  Xx: 'XX',
  XpXm: 'XpXm',
  Xy4: 'XY4',
} as const

export type SamplerV2InputOptionsDynamicalDecouplingSequenceTypeEnum =
  (typeof SamplerV2InputOptionsDynamicalDecouplingSequenceTypeEnum)[keyof typeof SamplerV2InputOptionsDynamicalDecouplingSequenceTypeEnum]
export const SamplerV2InputOptionsDynamicalDecouplingExtraSlackDistributionEnum = {
  Middle: 'middle',
  Edges: 'edges',
} as const

export type SamplerV2InputOptionsDynamicalDecouplingExtraSlackDistributionEnum =
  (typeof SamplerV2InputOptionsDynamicalDecouplingExtraSlackDistributionEnum)[keyof typeof SamplerV2InputOptionsDynamicalDecouplingExtraSlackDistributionEnum]
export const SamplerV2InputOptionsDynamicalDecouplingSchedulingMethodEnum = {
  Alap: 'alap',
  Asap: 'asap',
} as const

export type SamplerV2InputOptionsDynamicalDecouplingSchedulingMethodEnum =
  (typeof SamplerV2InputOptionsDynamicalDecouplingSchedulingMethodEnum)[keyof typeof SamplerV2InputOptionsDynamicalDecouplingSchedulingMethodEnum]

/**
 * Execution options
 * @export
 * @interface SamplerV2InputOptionsExecution
 */
export interface SamplerV2InputOptionsExecution {
  /**
   * Whether to reset the qubits to the ground state for each shot
   * @type {boolean}
   * @memberof SamplerV2InputOptionsExecution
   */
  init_qubits?: boolean
  /**
   * The delay between a measurement and the subsequent quantum circuit
   * @type {number}
   * @memberof SamplerV2InputOptionsExecution
   */
  rep_delay?: number
  /**
   * How to process and return measurement results
   * @type {string}
   * @memberof SamplerV2InputOptionsExecution
   */
  meas_type?: SamplerV2InputOptionsExecutionMeasTypeEnum
}

export const SamplerV2InputOptionsExecutionMeasTypeEnum = {
  Classified: 'classified',
  Kerneled: 'kerneled',
  AvgKerneled: 'avg_kerneled',
} as const

export type SamplerV2InputOptionsExecutionMeasTypeEnum =
  (typeof SamplerV2InputOptionsExecutionMeasTypeEnum)[keyof typeof SamplerV2InputOptionsExecutionMeasTypeEnum]

/**
 * The result for an SamplerV2 API call
 * @export
 * @interface SamplerV2JobResult
 */
export interface SamplerV2JobResult {
  /**
   * Array of results, one for each PUB in the original job
   * @type {Array<SamplerV2JobResultResultsInner>}
   * @memberof SamplerV2JobResult
   */
  results: Array<SamplerV2JobResultResultsInner>
  /**
   * Metadata for the job
   * @type {object}
   * @memberof SamplerV2JobResult
   */
  metadata: object
}
/**
 * A single PUB result, containing result data and metadata
 * @export
 * @interface SamplerV2JobResultResultsInner
 */
export interface SamplerV2JobResultResultsInner {
  /**
   * PUB results for sampler are split according to the classical bits register names. For each register, an array of samples (in hexadecimal string format) is returned
   * @type {{ [key: string]: SamplerV2JobResultResultsInnerDataValue; }}
   * @memberof SamplerV2JobResultResultsInner
   */
  data: { [key: string]: SamplerV2JobResultResultsInnerDataValue }
  /**
   * PUB-specific metadata
   * @type {object}
   * @memberof SamplerV2JobResultResultsInner
   */
  metadata: object
}
/**
 * The data corresponding to a specific measurement
 * @export
 * @interface SamplerV2JobResultResultsInnerDataValue
 */
export interface SamplerV2JobResultResultsInnerDataValue {
  /**
   * An array of samples (given as hexadecimal strings)
   * @type {Array<string>}
   * @memberof SamplerV2JobResultResultsInnerDataValue
   */
  samples?: Array<string>
  /**
   * The number of measured bits
   * @type {number}
   * @memberof SamplerV2JobResultResultsInnerDataValue
   */
  num_bits?: number
}
/**
 *
 * @export
 * @interface TagsGet200Response
 */
export interface TagsGet200Response {
  /**
   * List of job or program tags
   * @type {Array<string>}
   * @memberof TagsGet200Response
   */
  tags?: Array<string>
}
/**
 *
 * @export
 * @interface TagsResponse
 */
export interface TagsResponse {
  /**
   * Total number of results
   * @type {number}
   * @memberof TagsResponse
   */
  count: number
  /**
   * Offset at which paginated results are returned
   * @type {number}
   * @memberof TagsResponse
   */
  offset: number
  /**
   * Maximum number of results returned in the paginated response
   * @type {number}
   * @memberof TagsResponse
   */
  limit: number
  /**
   * Tags sorted ASC
   * @type {Array<string>}
   * @memberof TagsResponse
   */
  tags: Array<string>
}
/**
 *
 * @export
 * @interface TimeStamp
 */
export interface TimeStamp {
  /**
   * The status of the session in this timestamps
   * @type {string}
   * @memberof TimeStamp
   */
  status: TimeStampStatusEnum
  /**
   * The moment when the session has changed
   * @type {string}
   * @memberof TimeStamp
   */
  date: string
}

export const TimeStampStatusEnum = {
  Completed: 'completed',
  Canceled: 'canceled',
  Failed: 'failed',
  Pending: 'pending',
  InProgress: 'in_progress',
  Unknown: 'unknown',
} as const

export type TimeStampStatusEnum = (typeof TimeStampStatusEnum)[keyof typeof TimeStampStatusEnum]

/**
 *
 * @export
 * @interface Timestamps
 */
export interface Timestamps {
  /**
   * Timestamp of when the job create request was received
   * @type {string}
   * @memberof Timestamps
   */
  created?: string
  /**
   * Timestamp of when the job finished
   * @type {string}
   * @memberof Timestamps
   */
  finished?: string
  /**
   * Timestamp of when the job started running
   * @type {string}
   * @memberof Timestamps
   */
  running?: string
}
/**
 *
 * @export
 * @interface UpdateSessionRequest
 */
export interface UpdateSessionRequest {
  /**
   * Whether the session accepts new jobs or not
   * @type {boolean}
   * @memberof UpdateSessionRequest
   */
  accepting_jobs: boolean
}
/**
 *
 * @export
 * @interface UpdateTagsRequest
 */
export interface UpdateTagsRequest {
  /**
   *
   * @type {Array<string>}
   * @memberof UpdateTagsRequest
   */
  tags: Array<string>
}
/**
 *
 * @export
 * @interface Usage
 */
export interface Usage {
  /**
   * Total quantum seconds used by the instance
   * @type {number}
   * @memberof Usage
   */
  quantum_seconds?: number
  /**
   * Total billed time for the job - quantum seconds only.
   * @type {number}
   * @memberof Usage
   */
  seconds?: number
}
/**
 * usage metrics
 * @export
 * @interface Usage1
 */
export interface Usage1 {
  /**
   * Number of seconds of Qiskit Runtime usage including quantum compute and near-time classical pre- and post-processing
   * @type {number}
   * @memberof Usage1
   */
  seconds: number
}
/**
 *
 * @export
 * @interface UsageStatsDto
 */
export interface UsageStatsDto {
  /**
   *
   * @type {object}
   * @memberof UsageStatsDto
   */
  period: object
  /**
   *
   * @type {Array<HubUsageStatsDto>}
   * @memberof UsageStatsDto
   */
  byInstance: Array<HubUsageStatsDto>
}
/**
 *
 * @export
 * @interface UserFilter
 */
export interface UserFilter {
  /**
   *
   * @type {string}
   * @memberof UserFilter
   */
  id: string
  /**
   *
   * @type {string}
   * @memberof UserFilter
   */
  firstName: string
  /**
   *
   * @type {string}
   * @memberof UserFilter
   */
  lastName: string
  /**
   *
   * @type {string}
   * @memberof UserFilter
   */
  email: string
  /**
   *
   * @type {boolean}
   * @memberof UserFilter
   */
  deleted: boolean
}
/**
 *
 * @export
 * @interface UserJobResponse
 */
export interface UserJobResponse {
  /**
   * Identifier assigned to the job
   * @type {string}
   * @memberof UserJobResponse
   */
  id: string
  /**
   * Name of the hub of the instance in which the job is being executed
   * @type {string}
   * @memberof UserJobResponse
   */
  hub: string
  /**
   * Name of the group of the instance in which the job is being executed
   * @type {string}
   * @memberof UserJobResponse
   */
  group: string
  /**
   * Name of the project of the instance in which the job is being executed
   * @type {string}
   * @memberof UserJobResponse
   */
  project: string
  /**
   * The system on which to run the program.  If no system is specified, the job is sent to the system with the shortest queue that you have access to.
   * @type {string}
   * @memberof UserJobResponse
   */
  backend: string
  /**
   * Current status of the job
   * @type {string}
   * @memberof UserJobResponse
   */
  status: UserJobResponseStatusEnum
  /**
   * UTC timestamp for when the job was created
   * @type {string}
   * @memberof UserJobResponse
   */
  created: string
  /**
   * Job type
   * @type {string}
   * @memberof UserJobResponse
   */
  type: UserJobResponseTypeEnum
  /**
   * Tags associated with the job
   * @type {Array<string>}
   * @memberof UserJobResponse
   */
  tags: Array<string>
  /**
   * Job name
   * @type {string}
   * @memberof UserJobResponse
   */
  name: string
  /**
   * Job run mode
   * @type {string}
   * @memberof UserJobResponse
   */
  runMode: UserJobResponseRunModeEnum
  /**
   * Job ran in private mode
   * @type {boolean}
   * @memberof UserJobResponse
   */
  private: boolean
  /**
   * UTC timestamp for when the job finished running
   * @type {string}
   * @memberof UserJobResponse
   */
  endTime?: string
  /**
   * estimated running time of the job
   * @type {number}
   * @memberof UserJobResponse
   */
  estimated_running_time_seconds?: number
  /**
   * estimated max running time of the job
   * @type {number}
   * @memberof UserJobResponse
   */
  estimated_max_running_time_seconds?: number
  /**
   *
   * @type {Program}
   * @memberof UserJobResponse
   */
  program?: Program
  /**
   * Name and tag of the image to use when running a program
   * @type {string}
   * @memberof UserJobResponse
   */
  runtime: string
  /**
   * Identifier of the session that the job is a part of
   * @type {string}
   * @memberof UserJobResponse
   */
  sessionId: string
  /**
   *
   * @type {JobState1}
   * @memberof UserJobResponse
   */
  state: JobState1
}

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
} as const

export type UserJobResponseStatusEnum =
  (typeof UserJobResponseStatusEnum)[keyof typeof UserJobResponseStatusEnum]
export const UserJobResponseTypeEnum = {
  Iqx: 'IQX',
  Runtime: 'RUNTIME',
} as const

export type UserJobResponseTypeEnum =
  (typeof UserJobResponseTypeEnum)[keyof typeof UserJobResponseTypeEnum]
export const UserJobResponseRunModeEnum = {
  Fairshare: 'fairshare',
  Dedicated: 'dedicated',
  Priority: 'priority',
  Session: 'session',
} as const

export type UserJobResponseRunModeEnum =
  (typeof UserJobResponseRunModeEnum)[keyof typeof UserJobResponseRunModeEnum]

/**
 * Jobs collection response
 * @export
 * @interface UserJobsResponse
 */
export interface UserJobsResponse {
  /**
   * Total number of results
   * @type {number}
   * @memberof UserJobsResponse
   */
  count: number
  /**
   * Offset at which paginated results are returned
   * @type {number}
   * @memberof UserJobsResponse
   */
  offset: number
  /**
   * Maximum number of results returned in the paginated response
   * @type {number}
   * @memberof UserJobsResponse
   */
  limit: number
  /**
   * A list of jobs
   * @type {Array<UserJobResponse>}
   * @memberof UserJobsResponse
   */
  jobs: Array<UserJobResponse>
}
/**
 *
 * @export
 * @interface VersionResponse
 */
export interface VersionResponse {
  /**
   *
   * @type {string}
   * @memberof VersionResponse
   */
  version: string
}
/**
 *
 * @export
 * @interface WorkloadResponse
 */
export interface WorkloadResponse {
  /**
   * Workload id (job and session id)
   * @type {string}
   * @memberof WorkloadResponse
   */
  id: string
  /**
   * Creation date
   * @type {string}
   * @memberof WorkloadResponse
   */
  created: string
  /**
   * End date
   * @type {string}
   * @memberof WorkloadResponse
   */
  ended?: string
  /**
   * Backend name
   * @type {string}
   * @memberof WorkloadResponse
   */
  backend: string
  /**
   * Instance as hub/group/project
   * @type {string}
   * @memberof WorkloadResponse
   */
  instance: string
  /**
   * User id
   * @type {string}
   * @memberof WorkloadResponse
   */
  user_id: string
  /**
   * true if the session accepts jobs, false otherwise. Only for sessions, null for jobs
   * @type {number}
   * @memberof WorkloadResponse
   */
  accepting_jobs?: number
  /**
   * Workload mode: job, session or batch
   * @type {string}
   * @memberof WorkloadResponse
   */
  mode: WorkloadResponseModeEnum
  /**
   * State for the workload.
   * @type {string}
   * @memberof WorkloadResponse
   */
  status: WorkloadResponseStatusEnum
  /**
   * Jobs only, status reason for the job
   * @type {string}
   * @memberof WorkloadResponse
   */
  status_reason?: string
  /**
   * Tags for the jobs
   * @type {Array<string>}
   * @memberof WorkloadResponse
   */
  tags?: Array<string>
  /**
   * Usage in seconds. Can be null for ongoing workloads.
   * @type {number}
   * @memberof WorkloadResponse
   */
  usage_seconds?: number
  /**
   * Estimated running time in seconds. Only for jobs, null for sessions
   * @type {number}
   * @memberof WorkloadResponse
   */
  estimated_running_time_seconds?: number
  /**
   * Estimated start time in seconds. Only for jobs, null for sessions
   * @type {number}
   * @memberof WorkloadResponse
   */
  estimated_start_time_seconds?: number
}

export const WorkloadResponseModeEnum = {
  Job: 'job',
  Session: 'session',
  Batch: 'batch',
} as const

export type WorkloadResponseModeEnum =
  (typeof WorkloadResponseModeEnum)[keyof typeof WorkloadResponseModeEnum]
export const WorkloadResponseStatusEnum = {
  Completed: 'completed',
  Canceled: 'canceled',
  Failed: 'failed',
  Pending: 'pending',
  InProgress: 'in_progress',
  Unknown: 'unknown',
} as const

export type WorkloadResponseStatusEnum =
  (typeof WorkloadResponseStatusEnum)[keyof typeof WorkloadResponseStatusEnum]

/**
 * AdminApi - axios parameter creator
 * @export
 */
export const AdminApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Block users by Domain
     * @summary Block users by domain
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    blockUsersByDomainControllerCloseSession: async (
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/admin/block-users-by-domain`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
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
    countProviderJobs: async (
      hub: string,
      group?: string,
      project?: string,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'hub' is not null or undefined
      assertParamExists('countProviderJobs', 'hub', hub)
      const localVarPath = `/facade/v1/admin/jobs/count`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      if (hub !== undefined) {
        localVarQueryParameter['hub'] = hub
      }

      if (group !== undefined) {
        localVarQueryParameter['group'] = group
      }

      if (project !== undefined) {
        localVarQueryParameter['project'] = project
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Create a refund
     * @summary Create a refund
     * @param {CreateRefundRequest} createRefundRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRefundControllerCreateRefund: async (
      createRefundRequest: CreateRefundRequest,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'createRefundRequest' is not null or undefined
      assertParamExists(
        'createRefundControllerCreateRefund',
        'createRefundRequest',
        createRefundRequest
      )
      const localVarPath = `/refunds`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      localVarRequestOptions.data = serializeDataIfNeeded(
        createRefundRequest,
        localVarRequestOptions,
        configuration
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * List admin refunds
     * @summary List all active refunds
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    findAdminRefundsControllerFindAdminRefunds: async (
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/admin/refunds`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
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
    listProviderJobs: async (
      hub: string,
      group?: string,
      project?: string,
      pending?: boolean,
      backend?: string,
      userId?: string,
      country?: string,
      sort?: ListProviderJobsSortEnum,
      limit?: number,
      offset?: number,
      createdAfter?: string,
      createdBefore?: string,
      search?: string,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'hub' is not null or undefined
      assertParamExists('listProviderJobs', 'hub', hub)
      const localVarPath = `/facade/v1/admin/jobs`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      if (hub !== undefined) {
        localVarQueryParameter['hub'] = hub
      }

      if (group !== undefined) {
        localVarQueryParameter['group'] = group
      }

      if (project !== undefined) {
        localVarQueryParameter['project'] = project
      }

      if (pending !== undefined) {
        localVarQueryParameter['pending'] = pending
      }

      if (backend !== undefined) {
        localVarQueryParameter['backend'] = backend
      }

      if (userId !== undefined) {
        localVarQueryParameter['userId'] = userId
      }

      if (country !== undefined) {
        localVarQueryParameter['country'] = country
      }

      if (sort !== undefined) {
        localVarQueryParameter['sort'] = sort
      }

      if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit
      }

      if (offset !== undefined) {
        localVarQueryParameter['offset'] = offset
      }

      if (createdAfter !== undefined) {
        localVarQueryParameter['createdAfter'] =
          (createdAfter as any) instanceof Date ? (createdAfter as any).toISOString() : createdAfter
      }

      if (createdBefore !== undefined) {
        localVarQueryParameter['createdBefore'] =
          (createdBefore as any) instanceof Date
            ? (createdBefore as any).toISOString()
            : createdBefore
      }

      if (search !== undefined) {
        localVarQueryParameter['search'] = search
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * AdminApi - functional programming interface
 * @export
 */
export const AdminApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = AdminApiAxiosParamCreator(configuration)
  return {
    /**
     * Block users by Domain
     * @summary Block users by domain
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async blockUsersByDomainControllerCloseSession(
      options?: RawAxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<BlockUsersByDomainResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.blockUsersByDomainControllerCloseSession(options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['AdminApi.blockUsersByDomainControllerCloseSession']?.[
          localVarOperationServerIndex
        ]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
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
    async countProviderJobs(
      hub: string,
      group?: string,
      project?: string,
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JobsCountResponse>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.countProviderJobs(
        hub,
        group,
        project,
        options
      )
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['AdminApi.countProviderJobs']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Create a refund
     * @summary Create a refund
     * @param {CreateRefundRequest} createRefundRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createRefundControllerCreateRefund(
      createRefundRequest: CreateRefundRequest,
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AdminRefundResponse>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createRefundControllerCreateRefund(
        createRefundRequest,
        options
      )
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['AdminApi.createRefundControllerCreateRefund']?.[
          localVarOperationServerIndex
        ]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * List admin refunds
     * @summary List all active refunds
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async findAdminRefundsControllerFindAdminRefunds(
      options?: RawAxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<FindAdminRefundsResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.findAdminRefundsControllerFindAdminRefunds(options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['AdminApi.findAdminRefundsControllerFindAdminRefunds']?.[
          localVarOperationServerIndex
        ]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
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
    async listProviderJobs(
      hub: string,
      group?: string,
      project?: string,
      pending?: boolean,
      backend?: string,
      userId?: string,
      country?: string,
      sort?: ListProviderJobsSortEnum,
      limit?: number,
      offset?: number,
      createdAfter?: string,
      createdBefore?: string,
      search?: string,
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AdminJobsResponse>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listProviderJobs(
        hub,
        group,
        project,
        pending,
        backend,
        userId,
        country,
        sort,
        limit,
        offset,
        createdAfter,
        createdBefore,
        search,
        options
      )
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['AdminApi.listProviderJobs']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
  }
}

/**
 * AdminApi - factory interface
 * @export
 */
export const AdminApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = AdminApiFp(configuration)
  return {
    /**
     * Block users by Domain
     * @summary Block users by domain
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    blockUsersByDomainControllerCloseSession(
      options?: RawAxiosRequestConfig
    ): AxiosPromise<BlockUsersByDomainResponse> {
      return localVarFp
        .blockUsersByDomainControllerCloseSession(options)
        .then((request) => request(axios, basePath))
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
    countProviderJobs(
      hub: string,
      group?: string,
      project?: string,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<JobsCountResponse> {
      return localVarFp
        .countProviderJobs(hub, group, project, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * Create a refund
     * @summary Create a refund
     * @param {CreateRefundRequest} createRefundRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRefundControllerCreateRefund(
      createRefundRequest: CreateRefundRequest,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<AdminRefundResponse> {
      return localVarFp
        .createRefundControllerCreateRefund(createRefundRequest, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * List admin refunds
     * @summary List all active refunds
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    findAdminRefundsControllerFindAdminRefunds(
      options?: RawAxiosRequestConfig
    ): AxiosPromise<FindAdminRefundsResponse> {
      return localVarFp
        .findAdminRefundsControllerFindAdminRefunds(options)
        .then((request) => request(axios, basePath))
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
    listProviderJobs(
      hub: string,
      group?: string,
      project?: string,
      pending?: boolean,
      backend?: string,
      userId?: string,
      country?: string,
      sort?: ListProviderJobsSortEnum,
      limit?: number,
      offset?: number,
      createdAfter?: string,
      createdBefore?: string,
      search?: string,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<AdminJobsResponse> {
      return localVarFp
        .listProviderJobs(
          hub,
          group,
          project,
          pending,
          backend,
          userId,
          country,
          sort,
          limit,
          offset,
          createdAfter,
          createdBefore,
          search,
          options
        )
        .then((request) => request(axios, basePath))
    },
  }
}

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
  public blockUsersByDomainControllerCloseSession(options?: RawAxiosRequestConfig) {
    return AdminApiFp(this.configuration)
      .blockUsersByDomainControllerCloseSession(options)
      .then((request) => request(this.axios, this.basePath))
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
  public countProviderJobs(
    hub: string,
    group?: string,
    project?: string,
    options?: RawAxiosRequestConfig
  ) {
    return AdminApiFp(this.configuration)
      .countProviderJobs(hub, group, project, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Create a refund
   * @summary Create a refund
   * @param {CreateRefundRequest} createRefundRequest
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AdminApi
   */
  public createRefundControllerCreateRefund(
    createRefundRequest: CreateRefundRequest,
    options?: RawAxiosRequestConfig
  ) {
    return AdminApiFp(this.configuration)
      .createRefundControllerCreateRefund(createRefundRequest, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * List admin refunds
   * @summary List all active refunds
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AdminApi
   */
  public findAdminRefundsControllerFindAdminRefunds(options?: RawAxiosRequestConfig) {
    return AdminApiFp(this.configuration)
      .findAdminRefundsControllerFindAdminRefunds(options)
      .then((request) => request(this.axios, this.basePath))
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
  public listProviderJobs(
    hub: string,
    group?: string,
    project?: string,
    pending?: boolean,
    backend?: string,
    userId?: string,
    country?: string,
    sort?: ListProviderJobsSortEnum,
    limit?: number,
    offset?: number,
    createdAfter?: string,
    createdBefore?: string,
    search?: string,
    options?: RawAxiosRequestConfig
  ) {
    return AdminApiFp(this.configuration)
      .listProviderJobs(
        hub,
        group,
        project,
        pending,
        backend,
        userId,
        country,
        sort,
        limit,
        offset,
        createdAfter,
        createdBefore,
        search,
        options
      )
      .then((request) => request(this.axios, this.basePath))
  }
}

/**
 * @export
 */
export const ListProviderJobsSortEnum = {
  Asc: 'ASC',
  Desc: 'DESC',
} as const
export type ListProviderJobsSortEnum =
  (typeof ListProviderJobsSortEnum)[keyof typeof ListProviderJobsSortEnum]

/**
 * AnalyticsApi - axios parameter creator
 * @export
 */
export const AnalyticsApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Get analytics filters
     * @summary Get analytics filters
     * @param {Array<string>} instance Instance to get filters for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAnalyticsFiltersControllerAnalyticsFilters: async (
      instance: Array<string>,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'instance' is not null or undefined
      assertParamExists('getAnalyticsFiltersControllerAnalyticsFilters', 'instance', instance)
      const localVarPath = `/analytics/filters`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      if (instance) {
        localVarQueryParameter['instance'] = instance
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
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
    getAnalyticsUsageControllerAnalyticsUsage: async (
      instance: string,
      intervalStart?: string,
      intervalEnd?: string,
      backend?: Array<string>,
      userId?: Array<string>,
      country?: Array<string>,
      simulators?: boolean,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'instance' is not null or undefined
      assertParamExists('getAnalyticsUsageControllerAnalyticsUsage', 'instance', instance)
      const localVarPath = `/analytics/usage`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      if (instance !== undefined) {
        localVarQueryParameter['instance'] = instance
      }

      if (intervalStart !== undefined) {
        localVarQueryParameter['intervalStart'] =
          (intervalStart as any) instanceof Date
            ? (intervalStart as any).toISOString()
            : intervalStart
      }

      if (intervalEnd !== undefined) {
        localVarQueryParameter['intervalEnd'] =
          (intervalEnd as any) instanceof Date ? (intervalEnd as any).toISOString() : intervalEnd
      }

      if (backend) {
        localVarQueryParameter['backend'] = backend
      }

      if (userId) {
        localVarQueryParameter['userId'] = userId
      }

      if (country) {
        localVarQueryParameter['country'] = country
      }

      if (simulators !== undefined) {
        localVarQueryParameter['simulators'] = simulators
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
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
    getAnalyticsUsageGroupedByDateControllerAnalyticsUsage: async (
      instance: string,
      groupBy: GetAnalyticsUsageGroupedByDateControllerAnalyticsUsageGroupByEnum,
      intervalStart?: string,
      intervalEnd?: string,
      backend?: Array<string>,
      userId?: Array<string>,
      country?: Array<string>,
      simulators?: boolean,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'instance' is not null or undefined
      assertParamExists(
        'getAnalyticsUsageGroupedByDateControllerAnalyticsUsage',
        'instance',
        instance
      )
      // verify required parameter 'groupBy' is not null or undefined
      assertParamExists(
        'getAnalyticsUsageGroupedByDateControllerAnalyticsUsage',
        'groupBy',
        groupBy
      )
      const localVarPath = `/analytics/usage-grouped-by-date`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      if (instance !== undefined) {
        localVarQueryParameter['instance'] = instance
      }

      if (groupBy !== undefined) {
        localVarQueryParameter['groupBy'] = groupBy
      }

      if (intervalStart !== undefined) {
        localVarQueryParameter['intervalStart'] =
          (intervalStart as any) instanceof Date
            ? (intervalStart as any).toISOString()
            : intervalStart
      }

      if (intervalEnd !== undefined) {
        localVarQueryParameter['intervalEnd'] =
          (intervalEnd as any) instanceof Date ? (intervalEnd as any).toISOString() : intervalEnd
      }

      if (backend) {
        localVarQueryParameter['backend'] = backend
      }

      if (userId) {
        localVarQueryParameter['userId'] = userId
      }

      if (country) {
        localVarQueryParameter['country'] = country
      }

      if (simulators !== undefined) {
        localVarQueryParameter['simulators'] = simulators
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
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
    getAnalyticsUsageGroupedControllerAnalyticsGroupedUsage: async (
      groupBy: GetAnalyticsUsageGroupedControllerAnalyticsGroupedUsageGroupByEnum,
      instance: string,
      intervalStart?: string,
      intervalEnd?: string,
      backend?: Array<string>,
      userId?: Array<string>,
      country?: Array<string>,
      simulators?: boolean,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'groupBy' is not null or undefined
      assertParamExists(
        'getAnalyticsUsageGroupedControllerAnalyticsGroupedUsage',
        'groupBy',
        groupBy
      )
      // verify required parameter 'instance' is not null or undefined
      assertParamExists(
        'getAnalyticsUsageGroupedControllerAnalyticsGroupedUsage',
        'instance',
        instance
      )
      const localVarPath = `/analytics/usage-grouped`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      if (groupBy !== undefined) {
        localVarQueryParameter['groupBy'] = groupBy
      }

      if (instance !== undefined) {
        localVarQueryParameter['instance'] = instance
      }

      if (intervalStart !== undefined) {
        localVarQueryParameter['intervalStart'] =
          (intervalStart as any) instanceof Date
            ? (intervalStart as any).toISOString()
            : intervalStart
      }

      if (intervalEnd !== undefined) {
        localVarQueryParameter['intervalEnd'] =
          (intervalEnd as any) instanceof Date ? (intervalEnd as any).toISOString() : intervalEnd
      }

      if (backend) {
        localVarQueryParameter['backend'] = backend
      }

      if (userId) {
        localVarQueryParameter['userId'] = userId
      }

      if (country) {
        localVarQueryParameter['country'] = country
      }

      if (simulators !== undefined) {
        localVarQueryParameter['simulators'] = simulators
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * AnalyticsApi - functional programming interface
 * @export
 */
export const AnalyticsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = AnalyticsApiAxiosParamCreator(configuration)
  return {
    /**
     * Get analytics filters
     * @summary Get analytics filters
     * @param {Array<string>} instance Instance to get filters for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAnalyticsFiltersControllerAnalyticsFilters(
      instance: Array<string>,
      options?: RawAxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetAnalyticsFiltersResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getAnalyticsFiltersControllerAnalyticsFilters(
          instance,
          options
        )
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['AnalyticsApi.getAnalyticsFiltersControllerAnalyticsFilters']?.[
          localVarOperationServerIndex
        ]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
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
    async getAnalyticsUsageControllerAnalyticsUsage(
      instance: string,
      intervalStart?: string,
      intervalEnd?: string,
      backend?: Array<string>,
      userId?: Array<string>,
      country?: Array<string>,
      simulators?: boolean,
      options?: RawAxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetAnalyticsUsageResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getAnalyticsUsageControllerAnalyticsUsage(
          instance,
          intervalStart,
          intervalEnd,
          backend,
          userId,
          country,
          simulators,
          options
        )
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['AnalyticsApi.getAnalyticsUsageControllerAnalyticsUsage']?.[
          localVarOperationServerIndex
        ]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
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
    async getAnalyticsUsageGroupedByDateControllerAnalyticsUsage(
      instance: string,
      groupBy: GetAnalyticsUsageGroupedByDateControllerAnalyticsUsageGroupByEnum,
      intervalStart?: string,
      intervalEnd?: string,
      backend?: Array<string>,
      userId?: Array<string>,
      country?: Array<string>,
      simulators?: boolean,
      options?: RawAxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<GetAnalyticsUsageGroupedByDateResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getAnalyticsUsageGroupedByDateControllerAnalyticsUsage(
          instance,
          groupBy,
          intervalStart,
          intervalEnd,
          backend,
          userId,
          country,
          simulators,
          options
        )
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['AnalyticsApi.getAnalyticsUsageGroupedByDateControllerAnalyticsUsage']?.[
          localVarOperationServerIndex
        ]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
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
    async getAnalyticsUsageGroupedControllerAnalyticsGroupedUsage(
      groupBy: GetAnalyticsUsageGroupedControllerAnalyticsGroupedUsageGroupByEnum,
      instance: string,
      intervalStart?: string,
      intervalEnd?: string,
      backend?: Array<string>,
      userId?: Array<string>,
      country?: Array<string>,
      simulators?: boolean,
      options?: RawAxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetAnalyticsUsageGroupedResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getAnalyticsUsageGroupedControllerAnalyticsGroupedUsage(
          groupBy,
          instance,
          intervalStart,
          intervalEnd,
          backend,
          userId,
          country,
          simulators,
          options
        )
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap[
          'AnalyticsApi.getAnalyticsUsageGroupedControllerAnalyticsGroupedUsage'
        ]?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
  }
}

/**
 * AnalyticsApi - factory interface
 * @export
 */
export const AnalyticsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = AnalyticsApiFp(configuration)
  return {
    /**
     * Get analytics filters
     * @summary Get analytics filters
     * @param {Array<string>} instance Instance to get filters for
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAnalyticsFiltersControllerAnalyticsFilters(
      instance: Array<string>,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<GetAnalyticsFiltersResponse> {
      return localVarFp
        .getAnalyticsFiltersControllerAnalyticsFilters(instance, options)
        .then((request) => request(axios, basePath))
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
    getAnalyticsUsageControllerAnalyticsUsage(
      instance: string,
      intervalStart?: string,
      intervalEnd?: string,
      backend?: Array<string>,
      userId?: Array<string>,
      country?: Array<string>,
      simulators?: boolean,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<GetAnalyticsUsageResponse> {
      return localVarFp
        .getAnalyticsUsageControllerAnalyticsUsage(
          instance,
          intervalStart,
          intervalEnd,
          backend,
          userId,
          country,
          simulators,
          options
        )
        .then((request) => request(axios, basePath))
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
    getAnalyticsUsageGroupedByDateControllerAnalyticsUsage(
      instance: string,
      groupBy: GetAnalyticsUsageGroupedByDateControllerAnalyticsUsageGroupByEnum,
      intervalStart?: string,
      intervalEnd?: string,
      backend?: Array<string>,
      userId?: Array<string>,
      country?: Array<string>,
      simulators?: boolean,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<GetAnalyticsUsageGroupedByDateResponse> {
      return localVarFp
        .getAnalyticsUsageGroupedByDateControllerAnalyticsUsage(
          instance,
          groupBy,
          intervalStart,
          intervalEnd,
          backend,
          userId,
          country,
          simulators,
          options
        )
        .then((request) => request(axios, basePath))
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
    getAnalyticsUsageGroupedControllerAnalyticsGroupedUsage(
      groupBy: GetAnalyticsUsageGroupedControllerAnalyticsGroupedUsageGroupByEnum,
      instance: string,
      intervalStart?: string,
      intervalEnd?: string,
      backend?: Array<string>,
      userId?: Array<string>,
      country?: Array<string>,
      simulators?: boolean,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<GetAnalyticsUsageGroupedResponse> {
      return localVarFp
        .getAnalyticsUsageGroupedControllerAnalyticsGroupedUsage(
          groupBy,
          instance,
          intervalStart,
          intervalEnd,
          backend,
          userId,
          country,
          simulators,
          options
        )
        .then((request) => request(axios, basePath))
    },
  }
}

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
  public getAnalyticsFiltersControllerAnalyticsFilters(
    instance: Array<string>,
    options?: RawAxiosRequestConfig
  ) {
    return AnalyticsApiFp(this.configuration)
      .getAnalyticsFiltersControllerAnalyticsFilters(instance, options)
      .then((request) => request(this.axios, this.basePath))
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
  public getAnalyticsUsageControllerAnalyticsUsage(
    instance: string,
    intervalStart?: string,
    intervalEnd?: string,
    backend?: Array<string>,
    userId?: Array<string>,
    country?: Array<string>,
    simulators?: boolean,
    options?: RawAxiosRequestConfig
  ) {
    return AnalyticsApiFp(this.configuration)
      .getAnalyticsUsageControllerAnalyticsUsage(
        instance,
        intervalStart,
        intervalEnd,
        backend,
        userId,
        country,
        simulators,
        options
      )
      .then((request) => request(this.axios, this.basePath))
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
  public getAnalyticsUsageGroupedByDateControllerAnalyticsUsage(
    instance: string,
    groupBy: GetAnalyticsUsageGroupedByDateControllerAnalyticsUsageGroupByEnum,
    intervalStart?: string,
    intervalEnd?: string,
    backend?: Array<string>,
    userId?: Array<string>,
    country?: Array<string>,
    simulators?: boolean,
    options?: RawAxiosRequestConfig
  ) {
    return AnalyticsApiFp(this.configuration)
      .getAnalyticsUsageGroupedByDateControllerAnalyticsUsage(
        instance,
        groupBy,
        intervalStart,
        intervalEnd,
        backend,
        userId,
        country,
        simulators,
        options
      )
      .then((request) => request(this.axios, this.basePath))
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
  public getAnalyticsUsageGroupedControllerAnalyticsGroupedUsage(
    groupBy: GetAnalyticsUsageGroupedControllerAnalyticsGroupedUsageGroupByEnum,
    instance: string,
    intervalStart?: string,
    intervalEnd?: string,
    backend?: Array<string>,
    userId?: Array<string>,
    country?: Array<string>,
    simulators?: boolean,
    options?: RawAxiosRequestConfig
  ) {
    return AnalyticsApiFp(this.configuration)
      .getAnalyticsUsageGroupedControllerAnalyticsGroupedUsage(
        groupBy,
        instance,
        intervalStart,
        intervalEnd,
        backend,
        userId,
        country,
        simulators,
        options
      )
      .then((request) => request(this.axios, this.basePath))
  }
}

/**
 * @export
 */
export const GetAnalyticsUsageGroupedByDateControllerAnalyticsUsageGroupByEnum = {
  Instance: 'instance',
} as const
export type GetAnalyticsUsageGroupedByDateControllerAnalyticsUsageGroupByEnum =
  (typeof GetAnalyticsUsageGroupedByDateControllerAnalyticsUsageGroupByEnum)[keyof typeof GetAnalyticsUsageGroupedByDateControllerAnalyticsUsageGroupByEnum]
/**
 * @export
 */
export const GetAnalyticsUsageGroupedControllerAnalyticsGroupedUsageGroupByEnum = {
  Instance: 'instance',
  Backend: 'backend',
  UserId: 'userId',
  Country: 'country',
} as const
export type GetAnalyticsUsageGroupedControllerAnalyticsGroupedUsageGroupByEnum =
  (typeof GetAnalyticsUsageGroupedControllerAnalyticsGroupedUsageGroupByEnum)[keyof typeof GetAnalyticsUsageGroupedControllerAnalyticsGroupedUsageGroupByEnum]

/**
 * AuthApi - axios parameter creator
 * @export
 */
export const AuthApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Clear the authorization cache for the specified user.  This is useful if a user\'s role changes.
     * @summary Clear a user\'s authorization cache
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    logout: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
      const localVarPath = `/logout`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary Get JWT token
     * @param {string} userAuthorization
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    validateTokenControllerValidateToken: async (
      userAuthorization: string,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'userAuthorization' is not null or undefined
      assertParamExists(
        'validateTokenControllerValidateToken',
        'userAuthorization',
        userAuthorization
      )
      const localVarPath = `/auth/validate`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (userAuthorization !== null) {
        localVarHeaderParameter['User-Authorization'] = String(userAuthorization)
      }
      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = AuthApiAxiosParamCreator(configuration)
  return {
    /**
     * Clear the authorization cache for the specified user.  This is useful if a user\'s role changes.
     * @summary Clear a user\'s authorization cache
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async logout(
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.logout(options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['AuthApi.logout']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     *
     * @summary Get JWT token
     * @param {string} userAuthorization
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async validateTokenControllerValidateToken(
      userAuthorization: string,
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.validateTokenControllerValidateToken(
          userAuthorization,
          options
        )
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['AuthApi.validateTokenControllerValidateToken']?.[
          localVarOperationServerIndex
        ]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
  }
}

/**
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = AuthApiFp(configuration)
  return {
    /**
     * Clear the authorization cache for the specified user.  This is useful if a user\'s role changes.
     * @summary Clear a user\'s authorization cache
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    logout(options?: RawAxiosRequestConfig): AxiosPromise<void> {
      return localVarFp.logout(options).then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Get JWT token
     * @param {string} userAuthorization
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    validateTokenControllerValidateToken(
      userAuthorization: string,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<void> {
      return localVarFp
        .validateTokenControllerValidateToken(userAuthorization, options)
        .then((request) => request(axios, basePath))
    },
  }
}

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
  public logout(options?: RawAxiosRequestConfig) {
    return AuthApiFp(this.configuration)
      .logout(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Get JWT token
   * @param {string} userAuthorization
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthApi
   */
  public validateTokenControllerValidateToken(
    userAuthorization: string,
    options?: RawAxiosRequestConfig
  ) {
    return AuthApiFp(this.configuration)
      .validateTokenControllerValidateToken(userAuthorization, options)
      .then((request) => request(this.axios, this.basePath))
  }
}

/**
 * InstancesApi - axios parameter creator
 * @export
 */
export const InstancesApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Get user instances
     * @summary Get instances
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    findInstancesControllerFindInstances: async (
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/instances`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * InstancesApi - functional programming interface
 * @export
 */
export const InstancesApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = InstancesApiAxiosParamCreator(configuration)
  return {
    /**
     * Get user instances
     * @summary Get instances
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async findInstancesControllerFindInstances(
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FindInstancesResponse>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.findInstancesControllerFindInstances(options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['InstancesApi.findInstancesControllerFindInstances']?.[
          localVarOperationServerIndex
        ]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
  }
}

/**
 * InstancesApi - factory interface
 * @export
 */
export const InstancesApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = InstancesApiFp(configuration)
  return {
    /**
     * Get user instances
     * @summary Get instances
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    findInstancesControllerFindInstances(
      options?: RawAxiosRequestConfig
    ): AxiosPromise<FindInstancesResponse> {
      return localVarFp
        .findInstancesControllerFindInstances(options)
        .then((request) => request(axios, basePath))
    },
  }
}

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
  public findInstancesControllerFindInstances(options?: RawAxiosRequestConfig) {
    return InstancesApiFp(this.configuration)
      .findInstancesControllerFindInstances(options)
      .then((request) => request(this.axios, this.basePath))
  }
}

/**
 * InternalApi - axios parameter creator
 * @export
 */
export const InternalApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Block users by Domain
     * @summary Block users by domain
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    blockUsersByDomainControllerCloseSession: async (
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/admin/block-users-by-domain`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
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
    countProviderJobs: async (
      hub: string,
      group?: string,
      project?: string,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'hub' is not null or undefined
      assertParamExists('countProviderJobs', 'hub', hub)
      const localVarPath = `/facade/v1/admin/jobs/count`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      if (hub !== undefined) {
        localVarQueryParameter['hub'] = hub
      }

      if (group !== undefined) {
        localVarQueryParameter['group'] = group
      }

      if (project !== undefined) {
        localVarQueryParameter['project'] = project
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Create a refund
     * @summary Create a refund
     * @param {CreateRefundRequest} createRefundRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRefundControllerCreateRefund: async (
      createRefundRequest: CreateRefundRequest,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'createRefundRequest' is not null or undefined
      assertParamExists(
        'createRefundControllerCreateRefund',
        'createRefundRequest',
        createRefundRequest
      )
      const localVarPath = `/refunds`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      localVarRequestOptions.data = serializeDataIfNeeded(
        createRefundRequest,
        localVarRequestOptions,
        configuration
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * List admin refunds
     * @summary List all active refunds
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    findAdminRefundsControllerFindAdminRefunds: async (
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/admin/refunds`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Get instance shares
     * @summary Get instance shares
     * @param {Array<string>} [instance]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getInstanceSharesControllerGetInstanceShares: async (
      instance?: Array<string>,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/instance-shares`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (instance) {
        localVarQueryParameter['instance'] = instance
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Get the application health
     * @summary Health
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    healthControllerReadiness: async (
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/health`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
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
    listProviderJobs: async (
      hub: string,
      group?: string,
      project?: string,
      pending?: boolean,
      backend?: string,
      userId?: string,
      country?: string,
      sort?: ListProviderJobsSortEnum,
      limit?: number,
      offset?: number,
      createdAfter?: string,
      createdBefore?: string,
      search?: string,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'hub' is not null or undefined
      assertParamExists('listProviderJobs', 'hub', hub)
      const localVarPath = `/facade/v1/admin/jobs`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      if (hub !== undefined) {
        localVarQueryParameter['hub'] = hub
      }

      if (group !== undefined) {
        localVarQueryParameter['group'] = group
      }

      if (project !== undefined) {
        localVarQueryParameter['project'] = project
      }

      if (pending !== undefined) {
        localVarQueryParameter['pending'] = pending
      }

      if (backend !== undefined) {
        localVarQueryParameter['backend'] = backend
      }

      if (userId !== undefined) {
        localVarQueryParameter['userId'] = userId
      }

      if (country !== undefined) {
        localVarQueryParameter['country'] = country
      }

      if (sort !== undefined) {
        localVarQueryParameter['sort'] = sort
      }

      if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit
      }

      if (offset !== undefined) {
        localVarQueryParameter['offset'] = offset
      }

      if (createdAfter !== undefined) {
        localVarQueryParameter['createdAfter'] =
          (createdAfter as any) instanceof Date ? (createdAfter as any).toISOString() : createdAfter
      }

      if (createdBefore !== undefined) {
        localVarQueryParameter['createdBefore'] =
          (createdBefore as any) instanceof Date
            ? (createdBefore as any).toISOString()
            : createdBefore
      }

      if (search !== undefined) {
        localVarQueryParameter['search'] = search
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Clear the authorization cache for the specified user.  This is useful if a user\'s role changes.
     * @summary Clear a user\'s authorization cache
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    logout: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
      const localVarPath = `/logout`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Sync usage analytics
     * @summary Sync usage analytics
     * @param {boolean} incremental
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    syncAnalyticsUsageControllerSyncAnalyticsUsage: async (
      incremental: boolean,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'incremental' is not null or undefined
      assertParamExists(
        'syncAnalyticsUsageControllerSyncAnalyticsUsage',
        'incremental',
        incremental
      )
      const localVarPath = `/crons/sync-analytics-usage`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      if (incremental !== undefined) {
        localVarQueryParameter['incremental'] = incremental
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     *
     * @summary Get JWT token
     * @param {string} userAuthorization
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    validateTokenControllerValidateToken: async (
      userAuthorization: string,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'userAuthorization' is not null or undefined
      assertParamExists(
        'validateTokenControllerValidateToken',
        'userAuthorization',
        userAuthorization
      )
      const localVarPath = `/auth/validate`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      if (userAuthorization !== null) {
        localVarHeaderParameter['User-Authorization'] = String(userAuthorization)
      }
      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Get the application version
     * @summary Version
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    versionControllerGetVersion: async (
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/version`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * InternalApi - functional programming interface
 * @export
 */
export const InternalApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = InternalApiAxiosParamCreator(configuration)
  return {
    /**
     * Block users by Domain
     * @summary Block users by domain
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async blockUsersByDomainControllerCloseSession(
      options?: RawAxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<BlockUsersByDomainResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.blockUsersByDomainControllerCloseSession(options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['InternalApi.blockUsersByDomainControllerCloseSession']?.[
          localVarOperationServerIndex
        ]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
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
    async countProviderJobs(
      hub: string,
      group?: string,
      project?: string,
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JobsCountResponse>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.countProviderJobs(
        hub,
        group,
        project,
        options
      )
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['InternalApi.countProviderJobs']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Create a refund
     * @summary Create a refund
     * @param {CreateRefundRequest} createRefundRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createRefundControllerCreateRefund(
      createRefundRequest: CreateRefundRequest,
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AdminRefundResponse>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createRefundControllerCreateRefund(
        createRefundRequest,
        options
      )
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['InternalApi.createRefundControllerCreateRefund']?.[
          localVarOperationServerIndex
        ]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * List admin refunds
     * @summary List all active refunds
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async findAdminRefundsControllerFindAdminRefunds(
      options?: RawAxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<FindAdminRefundsResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.findAdminRefundsControllerFindAdminRefunds(options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['InternalApi.findAdminRefundsControllerFindAdminRefunds']?.[
          localVarOperationServerIndex
        ]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Get instance shares
     * @summary Get instance shares
     * @param {Array<string>} [instance]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getInstanceSharesControllerGetInstanceShares(
      instance?: Array<string>,
      options?: RawAxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetInstanceSharesResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getInstanceSharesControllerGetInstanceShares(
          instance,
          options
        )
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['InternalApi.getInstanceSharesControllerGetInstanceShares']?.[
          localVarOperationServerIndex
        ]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Get the application health
     * @summary Health
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async healthControllerReadiness(
      options?: RawAxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<HealthControllerReadiness200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.healthControllerReadiness(options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['InternalApi.healthControllerReadiness']?.[localVarOperationServerIndex]
          ?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
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
    async listProviderJobs(
      hub: string,
      group?: string,
      project?: string,
      pending?: boolean,
      backend?: string,
      userId?: string,
      country?: string,
      sort?: ListProviderJobsSortEnum,
      limit?: number,
      offset?: number,
      createdAfter?: string,
      createdBefore?: string,
      search?: string,
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AdminJobsResponse>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listProviderJobs(
        hub,
        group,
        project,
        pending,
        backend,
        userId,
        country,
        sort,
        limit,
        offset,
        createdAfter,
        createdBefore,
        search,
        options
      )
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['InternalApi.listProviderJobs']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Clear the authorization cache for the specified user.  This is useful if a user\'s role changes.
     * @summary Clear a user\'s authorization cache
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async logout(
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.logout(options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['InternalApi.logout']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Sync usage analytics
     * @summary Sync usage analytics
     * @param {boolean} incremental
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async syncAnalyticsUsageControllerSyncAnalyticsUsage(
      incremental: boolean,
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.syncAnalyticsUsageControllerSyncAnalyticsUsage(
          incremental,
          options
        )
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['InternalApi.syncAnalyticsUsageControllerSyncAnalyticsUsage']?.[
          localVarOperationServerIndex
        ]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     *
     * @summary Get JWT token
     * @param {string} userAuthorization
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async validateTokenControllerValidateToken(
      userAuthorization: string,
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.validateTokenControllerValidateToken(
          userAuthorization,
          options
        )
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['InternalApi.validateTokenControllerValidateToken']?.[
          localVarOperationServerIndex
        ]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Get the application version
     * @summary Version
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async versionControllerGetVersion(
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<VersionResponse>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.versionControllerGetVersion(options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['InternalApi.versionControllerGetVersion']?.[
          localVarOperationServerIndex
        ]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
  }
}

/**
 * InternalApi - factory interface
 * @export
 */
export const InternalApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = InternalApiFp(configuration)
  return {
    /**
     * Block users by Domain
     * @summary Block users by domain
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    blockUsersByDomainControllerCloseSession(
      options?: RawAxiosRequestConfig
    ): AxiosPromise<BlockUsersByDomainResponse> {
      return localVarFp
        .blockUsersByDomainControllerCloseSession(options)
        .then((request) => request(axios, basePath))
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
    countProviderJobs(
      hub: string,
      group?: string,
      project?: string,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<JobsCountResponse> {
      return localVarFp
        .countProviderJobs(hub, group, project, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * Create a refund
     * @summary Create a refund
     * @param {CreateRefundRequest} createRefundRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createRefundControllerCreateRefund(
      createRefundRequest: CreateRefundRequest,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<AdminRefundResponse> {
      return localVarFp
        .createRefundControllerCreateRefund(createRefundRequest, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * List admin refunds
     * @summary List all active refunds
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    findAdminRefundsControllerFindAdminRefunds(
      options?: RawAxiosRequestConfig
    ): AxiosPromise<FindAdminRefundsResponse> {
      return localVarFp
        .findAdminRefundsControllerFindAdminRefunds(options)
        .then((request) => request(axios, basePath))
    },
    /**
     * Get instance shares
     * @summary Get instance shares
     * @param {Array<string>} [instance]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getInstanceSharesControllerGetInstanceShares(
      instance?: Array<string>,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<GetInstanceSharesResponse> {
      return localVarFp
        .getInstanceSharesControllerGetInstanceShares(instance, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * Get the application health
     * @summary Health
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    healthControllerReadiness(
      options?: RawAxiosRequestConfig
    ): AxiosPromise<HealthControllerReadiness200Response> {
      return localVarFp
        .healthControllerReadiness(options)
        .then((request) => request(axios, basePath))
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
    listProviderJobs(
      hub: string,
      group?: string,
      project?: string,
      pending?: boolean,
      backend?: string,
      userId?: string,
      country?: string,
      sort?: ListProviderJobsSortEnum,
      limit?: number,
      offset?: number,
      createdAfter?: string,
      createdBefore?: string,
      search?: string,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<AdminJobsResponse> {
      return localVarFp
        .listProviderJobs(
          hub,
          group,
          project,
          pending,
          backend,
          userId,
          country,
          sort,
          limit,
          offset,
          createdAfter,
          createdBefore,
          search,
          options
        )
        .then((request) => request(axios, basePath))
    },
    /**
     * Clear the authorization cache for the specified user.  This is useful if a user\'s role changes.
     * @summary Clear a user\'s authorization cache
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    logout(options?: RawAxiosRequestConfig): AxiosPromise<void> {
      return localVarFp.logout(options).then((request) => request(axios, basePath))
    },
    /**
     * Sync usage analytics
     * @summary Sync usage analytics
     * @param {boolean} incremental
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    syncAnalyticsUsageControllerSyncAnalyticsUsage(
      incremental: boolean,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<void> {
      return localVarFp
        .syncAnalyticsUsageControllerSyncAnalyticsUsage(incremental, options)
        .then((request) => request(axios, basePath))
    },
    /**
     *
     * @summary Get JWT token
     * @param {string} userAuthorization
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    validateTokenControllerValidateToken(
      userAuthorization: string,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<void> {
      return localVarFp
        .validateTokenControllerValidateToken(userAuthorization, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * Get the application version
     * @summary Version
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    versionControllerGetVersion(options?: RawAxiosRequestConfig): AxiosPromise<VersionResponse> {
      return localVarFp
        .versionControllerGetVersion(options)
        .then((request) => request(axios, basePath))
    },
  }
}

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
  public blockUsersByDomainControllerCloseSession(options?: RawAxiosRequestConfig) {
    return InternalApiFp(this.configuration)
      .blockUsersByDomainControllerCloseSession(options)
      .then((request) => request(this.axios, this.basePath))
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
  public countProviderJobs(
    hub: string,
    group?: string,
    project?: string,
    options?: RawAxiosRequestConfig
  ) {
    return InternalApiFp(this.configuration)
      .countProviderJobs(hub, group, project, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Create a refund
   * @summary Create a refund
   * @param {CreateRefundRequest} createRefundRequest
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof InternalApi
   */
  public createRefundControllerCreateRefund(
    createRefundRequest: CreateRefundRequest,
    options?: RawAxiosRequestConfig
  ) {
    return InternalApiFp(this.configuration)
      .createRefundControllerCreateRefund(createRefundRequest, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * List admin refunds
   * @summary List all active refunds
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof InternalApi
   */
  public findAdminRefundsControllerFindAdminRefunds(options?: RawAxiosRequestConfig) {
    return InternalApiFp(this.configuration)
      .findAdminRefundsControllerFindAdminRefunds(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Get instance shares
   * @summary Get instance shares
   * @param {Array<string>} [instance]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof InternalApi
   */
  public getInstanceSharesControllerGetInstanceShares(
    instance?: Array<string>,
    options?: RawAxiosRequestConfig
  ) {
    return InternalApiFp(this.configuration)
      .getInstanceSharesControllerGetInstanceShares(instance, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Get the application health
   * @summary Health
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof InternalApi
   */
  public healthControllerReadiness(options?: RawAxiosRequestConfig) {
    return InternalApiFp(this.configuration)
      .healthControllerReadiness(options)
      .then((request) => request(this.axios, this.basePath))
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
  public listProviderJobs(
    hub: string,
    group?: string,
    project?: string,
    pending?: boolean,
    backend?: string,
    userId?: string,
    country?: string,
    sort?: ListProviderJobsSortEnum,
    limit?: number,
    offset?: number,
    createdAfter?: string,
    createdBefore?: string,
    search?: string,
    options?: RawAxiosRequestConfig
  ) {
    return InternalApiFp(this.configuration)
      .listProviderJobs(
        hub,
        group,
        project,
        pending,
        backend,
        userId,
        country,
        sort,
        limit,
        offset,
        createdAfter,
        createdBefore,
        search,
        options
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Clear the authorization cache for the specified user.  This is useful if a user\'s role changes.
   * @summary Clear a user\'s authorization cache
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof InternalApi
   */
  public logout(options?: RawAxiosRequestConfig) {
    return InternalApiFp(this.configuration)
      .logout(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Sync usage analytics
   * @summary Sync usage analytics
   * @param {boolean} incremental
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof InternalApi
   */
  public syncAnalyticsUsageControllerSyncAnalyticsUsage(
    incremental: boolean,
    options?: RawAxiosRequestConfig
  ) {
    return InternalApiFp(this.configuration)
      .syncAnalyticsUsageControllerSyncAnalyticsUsage(incremental, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   *
   * @summary Get JWT token
   * @param {string} userAuthorization
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof InternalApi
   */
  public validateTokenControllerValidateToken(
    userAuthorization: string,
    options?: RawAxiosRequestConfig
  ) {
    return InternalApiFp(this.configuration)
      .validateTokenControllerValidateToken(userAuthorization, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Get the application version
   * @summary Version
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof InternalApi
   */
  public versionControllerGetVersion(options?: RawAxiosRequestConfig) {
    return InternalApiFp(this.configuration)
      .versionControllerGetVersion(options)
      .then((request) => request(this.axios, this.basePath))
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
export const JobsApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Cancels the specified job.
     * @summary Cancel a job
     * @param {string} id Identifier of an existing job
     * @param {string} [parentJobId] Parent Identifier of an existing job
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cancelJobJid: async (
      id: string,
      parentJobId?: string,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('cancelJobJid', 'id', id)
      const localVarPath = `/jobs/{id}/cancel`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      if (parentJobId !== null) {
        localVarHeaderParameter['parent-job-id'] = String(parentJobId)
      }
      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Invoke a Qiskit Runtime primitive. Note the returned job ID. You will use it to check the job\'s status and review results.
     * @summary Run a job
     * @param {CreateJobRequest} createJobRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createJobControllerCreateJob: async (
      createJobRequest: CreateJobRequest,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'createJobRequest' is not null or undefined
      assertParamExists('createJobControllerCreateJob', 'createJobRequest', createJobRequest)
      const localVarPath = `/jobs`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      localVarRequestOptions.data = serializeDataIfNeeded(
        createJobRequest,
        localVarRequestOptions,
        configuration
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Delete the specified job.
     * @summary Delete a job
     * @param {string} id Identifier of an existing job
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteJobJid: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('deleteJobJid', 'id', id)
      const localVarPath = `/jobs/{id}`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Return the final result from this job.
     * @summary Get job results
     * @param {string} id Identifier of an existing job
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    findJobResultsControllerFindJobResult: async (
      id: string,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('findJobResultsControllerFindJobResult', 'id', id)
      const localVarPath = `/jobs/{id}/results`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Get job metrics as an admin
     * @summary Gets metrics of specified job
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAdminJobMetricsControllerFindWorkloadsAdmin: async (
      id: string,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('getAdminJobMetricsControllerFindWorkloadsAdmin', 'id', id)
      const localVarPath = `/admin/jobs/{id}/metrics`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id))
      )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Return the interim results from this job. Interim results are kept two days after the job has finished running.
     * @summary List job interim results
     * @param {string} id Identifier of an existing job
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getInterimResultsJid: async (
      id: string,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('getInterimResultsJid', 'id', id)
      const localVarPath = `/jobs/{id}/interim_results`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id))
      )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Get the details about the specified quantum job
     * @summary Get job
     * @param {string} id Identifier of an existing job
     * @param {boolean} [excludeParams] Exclude job params from the response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getJobByIdControllerGetJobById: async (
      id: string,
      excludeParams?: boolean,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('getJobByIdControllerGetJobById', 'id', id)
      const localVarPath = `/jobs/{id}`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      if (excludeParams !== undefined) {
        localVarQueryParameter['exclude_params'] = excludeParams
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Gets metrics of specified job
     * @summary Get job metrics
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getJobMetricsJid: async (
      id: string,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      assertParamExists('getJobMetricsJid', 'id', id)

      const localVarPath = `/jobs/{id}/metrics`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Get the type about the specified quantum job
     * @summary Get job type
     * @param {string} id Identifier of an existing job
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getJobTypeControllerGetUserJobTypeById: async (
      id: string,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('getJobTypeControllerGetUserJobTypeById', 'id', id)
      const localVarPath = `/facade/v1/jobs/{id}/type`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id))
      )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * List all job logs for the specified job.
     * @summary List job logs
     * @param {string} id Identifier of an existing job
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getJogLogsJid: async (
      id: string,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('getJogLogsJid', 'id', id)
      const localVarPath = `/jobs/{id}/logs`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Get a result stream as the job runs.
     * @summary Get the job results stream
     * @param {string} id Identifier of an existing job
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     */
    getStreamJobLogsJid: async (
      id: string,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('getStreamJobLogsJid', 'id', id)
      const localVarPath = `/stream/jobs/{id}`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Get jobs state updates
     * @summary Get jobs state updates
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     */
    getStreamJobsStateUpdates: async (
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/stream/jobs`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Return a presigned download URL for the transpiled circuits. Currently supported only for the sampler primitive.
     * @summary Get job transpiled circuits
     * @param {string} id Identifier of an existing job
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTranspiledCircuitsJid: async (
      id: string,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('getTranspiledCircuitsJid', 'id', id)
      const localVarPath = `/jobs/{id}/transpiled_circuits`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id))
      )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
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
    listJobs: async (
      limit?: number,
      offset?: number,
      pending?: boolean,
      provider?: string,
      program?: string,
      backend?: string,
      createdAfter?: string,
      createdBefore?: string,
      sort?: string,
      tags?: Array<string>,
      sessionId?: string,
      excludeParams?: boolean,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/jobs`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit
      }

      if (offset !== undefined) {
        localVarQueryParameter['offset'] = offset
      }

      if (pending !== undefined) {
        localVarQueryParameter['pending'] = pending
      }

      if (provider !== undefined) {
        localVarQueryParameter['provider'] = provider
      }

      if (program !== undefined) {
        localVarQueryParameter['program'] = program
      }

      if (backend !== undefined) {
        localVarQueryParameter['backend'] = backend
      }

      if (createdAfter !== undefined) {
        localVarQueryParameter['created_after'] =
          (createdAfter as any) instanceof Date ? (createdAfter as any).toISOString() : createdAfter
      }

      if (createdBefore !== undefined) {
        localVarQueryParameter['created_before'] =
          (createdBefore as any) instanceof Date
            ? (createdBefore as any).toISOString()
            : createdBefore
      }

      if (sort !== undefined) {
        localVarQueryParameter['sort'] = sort
      }

      if (tags) {
        localVarQueryParameter['tags'] = tags
      }

      if (sessionId !== undefined) {
        localVarQueryParameter['session_id'] = sessionId
      }

      if (excludeParams !== undefined) {
        localVarQueryParameter['exclude_params'] = excludeParams
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
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
    listUserJobs: async (
      provider?: string,
      pending?: boolean,
      backend?: string,
      sort?: ListUserJobsSortEnum,
      limit?: number,
      offset?: number,
      createdAfter?: string,
      createdBefore?: string,
      tags?: Array<string>,
      program?: string,
      sessionId?: string,
      composerOnly?: boolean,
      composerFile?: string,
      search?: string,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/facade/v1/jobs`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      if (provider !== undefined) {
        localVarQueryParameter['provider'] = provider
      }

      if (pending !== undefined) {
        localVarQueryParameter['pending'] = pending
      }

      if (backend !== undefined) {
        localVarQueryParameter['backend'] = backend
      }

      if (sort !== undefined) {
        localVarQueryParameter['sort'] = sort
      }

      if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit
      }

      if (offset !== undefined) {
        localVarQueryParameter['offset'] = offset
      }

      if (createdAfter !== undefined) {
        localVarQueryParameter['createdAfter'] =
          (createdAfter as any) instanceof Date ? (createdAfter as any).toISOString() : createdAfter
      }

      if (createdBefore !== undefined) {
        localVarQueryParameter['createdBefore'] =
          (createdBefore as any) instanceof Date
            ? (createdBefore as any).toISOString()
            : createdBefore
      }

      if (tags) {
        localVarQueryParameter['tags'] = tags
      }

      if (program !== undefined) {
        localVarQueryParameter['program'] = program
      }

      if (sessionId !== undefined) {
        localVarQueryParameter['sessionId'] = sessionId
      }

      if (composerOnly !== undefined) {
        localVarQueryParameter['composerOnly'] = composerOnly
      }

      if (composerFile !== undefined) {
        localVarQueryParameter['composerFile'] = composerFile
      }

      if (search !== undefined) {
        localVarQueryParameter['search'] = search
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
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
    listUserJobsTags: async (
      search: string,
      limit?: number,
      offset?: number,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'search' is not null or undefined
      assertParamExists('listUserJobsTags', 'search', search)
      const localVarPath = `/facade/v1/jobs/tags`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      if (search !== undefined) {
        localVarQueryParameter['search'] = search
      }

      if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit
      }

      if (offset !== undefined) {
        localVarQueryParameter['offset'] = offset
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Replace job tags
     * @summary Replace job tags
     * @param {string} id Identifier of an existing job
     * @param {ReplaceJobTagsRequest} [replaceJobTagsRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    replaceJobTags: async (
      id: string,
      replaceJobTagsRequest?: ReplaceJobTagsRequest,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('replaceJobTags', 'id', id)
      const localVarPath = `/jobs/{id}/tags`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      localVarRequestOptions.data = serializeDataIfNeeded(
        replaceJobTagsRequest,
        localVarRequestOptions,
        configuration
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * JobsApi - functional programming interface
 * @export
 */
export const JobsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = JobsApiAxiosParamCreator(configuration)
  return {
    /**
     * Cancels the specified job.
     * @summary Cancel a job
     * @param {string} id Identifier of an existing job
     * @param {string} [parentJobId] Parent Identifier of an existing job
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async cancelJobJid(
      id: string,
      parentJobId?: string,
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.cancelJobJid(
        id,
        parentJobId,
        options
      )
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['JobsApi.cancelJobJid']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Invoke a Qiskit Runtime primitive. Note the returned job ID. You will use it to check the job\'s status and review results.
     * @summary Run a job
     * @param {CreateJobRequest} createJobRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createJobControllerCreateJob(
      createJobRequest: CreateJobRequest,
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateJobResponse>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.createJobControllerCreateJob(
        createJobRequest,
        options
      )
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['JobsApi.createJobControllerCreateJob']?.[localVarOperationServerIndex]
          ?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Delete the specified job.
     * @summary Delete a job
     * @param {string} id Identifier of an existing job
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteJobJid(
      id: string,
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.deleteJobJid(id, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['JobsApi.deleteJobJid']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Return the final result from this job.
     * @summary Get job results
     * @param {string} id Identifier of an existing job
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async findJobResultsControllerFindJobResult(
      id: string,
      options?: RawAxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<FindJobResultsControllerFindJobResult200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.findJobResultsControllerFindJobResult(id, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['JobsApi.findJobResultsControllerFindJobResult']?.[
          localVarOperationServerIndex
        ]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Get job metrics as an admin
     * @summary Gets metrics of specified job
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAdminJobMetricsControllerFindWorkloadsAdmin(
      id: string,
      options?: RawAxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<AdminJobMetricsResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getAdminJobMetricsControllerFindWorkloadsAdmin(id, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['JobsApi.getAdminJobMetricsControllerFindWorkloadsAdmin']?.[
          localVarOperationServerIndex
        ]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Return the interim results from this job. Interim results are kept two days after the job has finished running.
     * @summary List job interim results
     * @param {string} id Identifier of an existing job
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getInterimResultsJid(
      id: string,
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getInterimResultsJid(id, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['JobsApi.getInterimResultsJid']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Get the details about the specified quantum job
     * @summary Get job
     * @param {string} id Identifier of an existing job
     * @param {boolean} [excludeParams] Exclude job params from the response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getJobByIdControllerGetJobById(
      id: string,
      excludeParams?: boolean,
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JobResponse>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getJobByIdControllerGetJobById(
        id,
        excludeParams,
        options
      )
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['JobsApi.getJobByIdControllerGetJobById']?.[localVarOperationServerIndex]
          ?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Gets metrics of specified job
     * @summary Get job metrics
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getJobMetricsJid(
      id: string,
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JobMetrics>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getJobMetricsJid(id, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['JobsApi.getJobMetricsJid']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Get the type about the specified quantum job
     * @summary Get job type
     * @param {string} id Identifier of an existing job
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getJobTypeControllerGetUserJobTypeById(
      id: string,
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetJobTypeResponse>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getJobTypeControllerGetUserJobTypeById(id, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['JobsApi.getJobTypeControllerGetUserJobTypeById']?.[
          localVarOperationServerIndex
        ]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * List all job logs for the specified job.
     * @summary List job logs
     * @param {string} id Identifier of an existing job
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getJogLogsJid(
      id: string,
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getJogLogsJid(id, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['JobsApi.getJogLogsJid']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Get a result stream as the job runs.
     * @summary Get the job results stream
     * @param {string} id Identifier of an existing job
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     */
    async getStreamJobLogsJid(
      id: string,
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getStreamJobLogsJid(id, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['JobsApi.getStreamJobLogsJid']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Get jobs state updates
     * @summary Get jobs state updates
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     */
    async getStreamJobsStateUpdates(
      options?: RawAxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<GetStreamJobsStateUpdates200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getStreamJobsStateUpdates(options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['JobsApi.getStreamJobsStateUpdates']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Return a presigned download URL for the transpiled circuits. Currently supported only for the sampler primitive.
     * @summary Get job transpiled circuits
     * @param {string} id Identifier of an existing job
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getTranspiledCircuitsJid(
      id: string,
      options?: RawAxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<JobsTranspiledCircuitsResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getTranspiledCircuitsJid(
        id,
        options
      )
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['JobsApi.getTranspiledCircuitsJid']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
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
    async listJobs(
      limit?: number,
      offset?: number,
      pending?: boolean,
      provider?: string,
      program?: string,
      backend?: string,
      createdAfter?: string,
      createdBefore?: string,
      sort?: string,
      tags?: Array<string>,
      sessionId?: string,
      excludeParams?: boolean,
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JobsResponse>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listJobs(
        limit,
        offset,
        pending,
        provider,
        program,
        backend,
        createdAfter,
        createdBefore,
        sort,
        tags,
        sessionId,
        excludeParams,
        options
      )
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['JobsApi.listJobs']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
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
    async listUserJobs(
      provider?: string,
      pending?: boolean,
      backend?: string,
      sort?: ListUserJobsSortEnum,
      limit?: number,
      offset?: number,
      createdAfter?: string,
      createdBefore?: string,
      tags?: Array<string>,
      program?: string,
      sessionId?: string,
      composerOnly?: boolean,
      composerFile?: string,
      search?: string,
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserJobsResponse>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listUserJobs(
        provider,
        pending,
        backend,
        sort,
        limit,
        offset,
        createdAfter,
        createdBefore,
        tags,
        program,
        sessionId,
        composerOnly,
        composerFile,
        search,
        options
      )
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['JobsApi.listUserJobs']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
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
    async listUserJobsTags(
      search: string,
      limit?: number,
      offset?: number,
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TagsResponse>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listUserJobsTags(
        search,
        limit,
        offset,
        options
      )
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['JobsApi.listUserJobsTags']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Replace job tags
     * @summary Replace job tags
     * @param {string} id Identifier of an existing job
     * @param {ReplaceJobTagsRequest} [replaceJobTagsRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async replaceJobTags(
      id: string,
      replaceJobTagsRequest?: ReplaceJobTagsRequest,
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.replaceJobTags(
        id,
        replaceJobTagsRequest,
        options
      )
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['JobsApi.replaceJobTags']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
  }
}

/**
 * JobsApi - factory interface
 * @export
 */
export const JobsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = JobsApiFp(configuration)
  return {
    /**
     * Cancels the specified job.
     * @summary Cancel a job
     * @param {string} id Identifier of an existing job
     * @param {string} [parentJobId] Parent Identifier of an existing job
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cancelJobJid(
      id: string,
      parentJobId?: string,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<void> {
      return localVarFp
        .cancelJobJid(id, parentJobId, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * Invoke a Qiskit Runtime primitive. Note the returned job ID. You will use it to check the job\'s status and review results.
     * @summary Run a job
     * @param {CreateJobRequest} createJobRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createJobControllerCreateJob(
      createJobRequest: CreateJobRequest,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<CreateJobResponse> {
      return localVarFp
        .createJobControllerCreateJob(createJobRequest, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * Delete the specified job.
     * @summary Delete a job
     * @param {string} id Identifier of an existing job
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteJobJid(id: string, options?: RawAxiosRequestConfig): AxiosPromise<void> {
      return localVarFp.deleteJobJid(id, options).then((request) => request(axios, basePath))
    },
    /**
     * Return the final result from this job.
     * @summary Get job results
     * @param {string} id Identifier of an existing job
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    findJobResultsControllerFindJobResult(
      id: string,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<FindJobResultsControllerFindJobResult200Response> {
      return localVarFp
        .findJobResultsControllerFindJobResult(id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * Get job metrics as an admin
     * @summary Gets metrics of specified job
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAdminJobMetricsControllerFindWorkloadsAdmin(
      id: string,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<AdminJobMetricsResponse> {
      return localVarFp
        .getAdminJobMetricsControllerFindWorkloadsAdmin(id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * Return the interim results from this job. Interim results are kept two days after the job has finished running.
     * @summary List job interim results
     * @param {string} id Identifier of an existing job
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getInterimResultsJid(id: string, options?: RawAxiosRequestConfig): AxiosPromise<string> {
      return localVarFp
        .getInterimResultsJid(id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * Get the details about the specified quantum job
     * @summary Get job
     * @param {string} id Identifier of an existing job
     * @param {boolean} [excludeParams] Exclude job params from the response
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getJobByIdControllerGetJobById(
      id: string,
      excludeParams?: boolean,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<JobResponse> {
      return localVarFp
        .getJobByIdControllerGetJobById(id, excludeParams, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * Gets metrics of specified job
     * @summary Get job metrics
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getJobMetricsJid(id: string, options?: RawAxiosRequestConfig): AxiosPromise<JobMetrics> {
      return localVarFp.getJobMetricsJid(id, options).then((request) => request(axios, basePath))
    },
    /**
     * Get the type about the specified quantum job
     * @summary Get job type
     * @param {string} id Identifier of an existing job
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getJobTypeControllerGetUserJobTypeById(
      id: string,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<GetJobTypeResponse> {
      return localVarFp
        .getJobTypeControllerGetUserJobTypeById(id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * List all job logs for the specified job.
     * @summary List job logs
     * @param {string} id Identifier of an existing job
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getJogLogsJid(id: string, options?: RawAxiosRequestConfig): AxiosPromise<string> {
      return localVarFp.getJogLogsJid(id, options).then((request) => request(axios, basePath))
    },
    /**
     * Get a result stream as the job runs.
     * @summary Get the job results stream
     * @param {string} id Identifier of an existing job
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     */
    getStreamJobLogsJid(id: string, options?: RawAxiosRequestConfig): AxiosPromise<string> {
      return localVarFp.getStreamJobLogsJid(id, options).then((request) => request(axios, basePath))
    },
    /**
     * Get jobs state updates
     * @summary Get jobs state updates
     * @param {*} [options] Override http request option.
     * @deprecated
     * @throws {RequiredError}
     */
    getStreamJobsStateUpdates(
      options?: RawAxiosRequestConfig
    ): AxiosPromise<GetStreamJobsStateUpdates200Response> {
      return localVarFp
        .getStreamJobsStateUpdates(options)
        .then((request) => request(axios, basePath))
    },
    /**
     * Return a presigned download URL for the transpiled circuits. Currently supported only for the sampler primitive.
     * @summary Get job transpiled circuits
     * @param {string} id Identifier of an existing job
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getTranspiledCircuitsJid(
      id: string,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<JobsTranspiledCircuitsResponse> {
      return localVarFp
        .getTranspiledCircuitsJid(id, options)
        .then((request) => request(axios, basePath))
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
    listJobs(
      limit?: number,
      offset?: number,
      pending?: boolean,
      provider?: string,
      program?: string,
      backend?: string,
      createdAfter?: string,
      createdBefore?: string,
      sort?: string,
      tags?: Array<string>,
      sessionId?: string,
      excludeParams?: boolean,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<JobsResponse> {
      return localVarFp
        .listJobs(
          limit,
          offset,
          pending,
          provider,
          program,
          backend,
          createdAfter,
          createdBefore,
          sort,
          tags,
          sessionId,
          excludeParams,
          options
        )
        .then((request) => request(axios, basePath))
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
    listUserJobs(
      provider?: string,
      pending?: boolean,
      backend?: string,
      sort?: ListUserJobsSortEnum,
      limit?: number,
      offset?: number,
      createdAfter?: string,
      createdBefore?: string,
      tags?: Array<string>,
      program?: string,
      sessionId?: string,
      composerOnly?: boolean,
      composerFile?: string,
      search?: string,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<UserJobsResponse> {
      return localVarFp
        .listUserJobs(
          provider,
          pending,
          backend,
          sort,
          limit,
          offset,
          createdAfter,
          createdBefore,
          tags,
          program,
          sessionId,
          composerOnly,
          composerFile,
          search,
          options
        )
        .then((request) => request(axios, basePath))
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
    listUserJobsTags(
      search: string,
      limit?: number,
      offset?: number,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<TagsResponse> {
      return localVarFp
        .listUserJobsTags(search, limit, offset, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * Replace job tags
     * @summary Replace job tags
     * @param {string} id Identifier of an existing job
     * @param {ReplaceJobTagsRequest} [replaceJobTagsRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    replaceJobTags(
      id: string,
      replaceJobTagsRequest?: ReplaceJobTagsRequest,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<void> {
      return localVarFp
        .replaceJobTags(id, replaceJobTagsRequest, options)
        .then((request) => request(axios, basePath))
    },
  }
}

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
  public cancelJobJid(id: string, parentJobId?: string, options?: RawAxiosRequestConfig) {
    return JobsApiFp(this.configuration)
      .cancelJobJid(id, parentJobId, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Invoke a Qiskit Runtime primitive. Note the returned job ID. You will use it to check the job\'s status and review results.
   * @summary Run a job
   * @param {CreateJobRequest} createJobRequest
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof JobsApi
   */
  public createJobControllerCreateJob(
    createJobRequest: CreateJobRequest,
    options?: RawAxiosRequestConfig
  ) {
    return JobsApiFp(this.configuration)
      .createJobControllerCreateJob(createJobRequest, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Delete the specified job.
   * @summary Delete a job
   * @param {string} id Identifier of an existing job
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof JobsApi
   */
  public deleteJobJid(id: string, options?: RawAxiosRequestConfig) {
    return JobsApiFp(this.configuration)
      .deleteJobJid(id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Return the final result from this job.
   * @summary Get job results
   * @param {string} id Identifier of an existing job
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof JobsApi
   */
  public findJobResultsControllerFindJobResult(id: string, options?: RawAxiosRequestConfig) {
    return JobsApiFp(this.configuration)
      .findJobResultsControllerFindJobResult(id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Get job metrics as an admin
   * @summary Gets metrics of specified job
   * @param {string} id
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof JobsApi
   */
  public getAdminJobMetricsControllerFindWorkloadsAdmin(
    id: string,
    options?: RawAxiosRequestConfig
  ) {
    return JobsApiFp(this.configuration)
      .getAdminJobMetricsControllerFindWorkloadsAdmin(id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Return the interim results from this job. Interim results are kept two days after the job has finished running.
   * @summary List job interim results
   * @param {string} id Identifier of an existing job
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof JobsApi
   */
  public getInterimResultsJid(id: string, options?: RawAxiosRequestConfig) {
    return JobsApiFp(this.configuration)
      .getInterimResultsJid(id, options)
      .then((request) => request(this.axios, this.basePath))
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
  public getJobByIdControllerGetJobById(
    id: string,
    excludeParams?: boolean,
    options?: RawAxiosRequestConfig
  ) {
    return JobsApiFp(this.configuration)
      .getJobByIdControllerGetJobById(id, excludeParams, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Gets metrics of specified job
   * @summary Get job metrics
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof JobsApi
   */
  public getJobMetricsJid(id: string, options?: RawAxiosRequestConfig) {
    return JobsApiFp(this.configuration)
      .getJobMetricsJid(id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Get the type about the specified quantum job
   * @summary Get job type
   * @param {string} id Identifier of an existing job
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof JobsApi
   */
  public getJobTypeControllerGetUserJobTypeById(id: string, options?: RawAxiosRequestConfig) {
    return JobsApiFp(this.configuration)
      .getJobTypeControllerGetUserJobTypeById(id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * List all job logs for the specified job.
   * @summary List job logs
   * @param {string} id Identifier of an existing job
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof JobsApi
   */
  public getJogLogsJid(id: string, options?: RawAxiosRequestConfig) {
    return JobsApiFp(this.configuration)
      .getJogLogsJid(id, options)
      .then((request) => request(this.axios, this.basePath))
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
  public getStreamJobLogsJid(id: string, options?: RawAxiosRequestConfig) {
    return JobsApiFp(this.configuration)
      .getStreamJobLogsJid(id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Get jobs state updates
   * @summary Get jobs state updates
   * @param {*} [options] Override http request option.
   * @deprecated
   * @throws {RequiredError}
   * @memberof JobsApi
   */
  public getStreamJobsStateUpdates(options?: RawAxiosRequestConfig) {
    return JobsApiFp(this.configuration)
      .getStreamJobsStateUpdates(options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Return a presigned download URL for the transpiled circuits. Currently supported only for the sampler primitive.
   * @summary Get job transpiled circuits
   * @param {string} id Identifier of an existing job
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof JobsApi
   */
  public getTranspiledCircuitsJid(id: string, options?: RawAxiosRequestConfig) {
    return JobsApiFp(this.configuration)
      .getTranspiledCircuitsJid(id, options)
      .then((request) => request(this.axios, this.basePath))
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
  public listJobs(
    limit?: number,
    offset?: number,
    pending?: boolean,
    provider?: string,
    program?: string,
    backend?: string,
    createdAfter?: string,
    createdBefore?: string,
    sort?: string,
    tags?: Array<string>,
    sessionId?: string,
    excludeParams?: boolean,
    options?: RawAxiosRequestConfig
  ) {
    return JobsApiFp(this.configuration)
      .listJobs(
        limit,
        offset,
        pending,
        provider,
        program,
        backend,
        createdAfter,
        createdBefore,
        sort,
        tags,
        sessionId,
        excludeParams,
        options
      )
      .then((request) => request(this.axios, this.basePath))
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
  public listUserJobs(
    provider?: string,
    pending?: boolean,
    backend?: string,
    sort?: ListUserJobsSortEnum,
    limit?: number,
    offset?: number,
    createdAfter?: string,
    createdBefore?: string,
    tags?: Array<string>,
    program?: string,
    sessionId?: string,
    composerOnly?: boolean,
    composerFile?: string,
    search?: string,
    options?: RawAxiosRequestConfig
  ) {
    return JobsApiFp(this.configuration)
      .listUserJobs(
        provider,
        pending,
        backend,
        sort,
        limit,
        offset,
        createdAfter,
        createdBefore,
        tags,
        program,
        sessionId,
        composerOnly,
        composerFile,
        search,
        options
      )
      .then((request) => request(this.axios, this.basePath))
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
  public listUserJobsTags(
    search: string,
    limit?: number,
    offset?: number,
    options?: RawAxiosRequestConfig
  ) {
    return JobsApiFp(this.configuration)
      .listUserJobsTags(search, limit, offset, options)
      .then((request) => request(this.axios, this.basePath))
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
  public replaceJobTags(
    id: string,
    replaceJobTagsRequest?: ReplaceJobTagsRequest,
    options?: RawAxiosRequestConfig
  ) {
    return JobsApiFp(this.configuration)
      .replaceJobTags(id, replaceJobTagsRequest, options)
      .then((request) => request(this.axios, this.basePath))
  }
}

/**
 * @export
 */
export const ListUserJobsSortEnum = {
  Asc: 'ASC',
  Desc: 'DESC',
} as const
export type ListUserJobsSortEnum = (typeof ListUserJobsSortEnum)[keyof typeof ListUserJobsSortEnum]

/**
 * MetricsApi - axios parameter creator
 * @export
 */
export const MetricsApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Get job metrics as an admin
     * @summary Gets metrics of specified job
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAdminJobMetricsControllerFindWorkloadsAdmin: async (
      id: string,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('getAdminJobMetricsControllerFindWorkloadsAdmin', 'id', id)
      const localVarPath = `/admin/jobs/{id}/metrics`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id))
      )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * MetricsApi - functional programming interface
 * @export
 */
export const MetricsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = MetricsApiAxiosParamCreator(configuration)
  return {
    /**
     * Get job metrics as an admin
     * @summary Gets metrics of specified job
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getAdminJobMetricsControllerFindWorkloadsAdmin(
      id: string,
      options?: RawAxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<AdminJobMetricsResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getAdminJobMetricsControllerFindWorkloadsAdmin(id, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['MetricsApi.getAdminJobMetricsControllerFindWorkloadsAdmin']?.[
          localVarOperationServerIndex
        ]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
  }
}

/**
 * MetricsApi - factory interface
 * @export
 */
export const MetricsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = MetricsApiFp(configuration)
  return {
    /**
     * Get job metrics as an admin
     * @summary Gets metrics of specified job
     * @param {string} id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAdminJobMetricsControllerFindWorkloadsAdmin(
      id: string,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<AdminJobMetricsResponse> {
      return localVarFp
        .getAdminJobMetricsControllerFindWorkloadsAdmin(id, options)
        .then((request) => request(axios, basePath))
    },
  }
}

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
  public getAdminJobMetricsControllerFindWorkloadsAdmin(
    id: string,
    options?: RawAxiosRequestConfig
  ) {
    return MetricsApiFp(this.configuration)
      .getAdminJobMetricsControllerFindWorkloadsAdmin(id, options)
      .then((request) => request(this.axios, this.basePath))
  }
}

/**
 * SessionsApi - axios parameter creator
 * @export
 */
export const SessionsApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Closes the runtime session
     * @summary Close session
     * @param {string} id Session Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    closeSession: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('closeSession', 'id', id)
      const localVarPath = `/sessions/{id}/close`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id))
      )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Create a runtime session
     * @summary Create session
     * @param {CreateSessionRequest} createSessionRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSessionControllerCreateSession: async (
      createSessionRequest: CreateSessionRequest,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'createSessionRequest' is not null or undefined
      assertParamExists(
        'createSessionControllerCreateSession',
        'createSessionRequest',
        createSessionRequest
      )
      const localVarPath = `/sessions`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      localVarRequestOptions.data = serializeDataIfNeeded(
        createSessionRequest,
        localVarRequestOptions,
        configuration
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Get a runtime session details
     * @summary Get session
     * @param {string} id Identifier of an existing runtime session
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSessionDetailsControllerGetSessionDetails: async (
      id: string,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('getSessionDetailsControllerGetSessionDetails', 'id', id)
      const localVarPath = `/sessions/{id}`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Get a runtime session details
     * @summary Get session
     * @param {string} id Identifier of an existing runtime session
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSessionDetailsExtendedControllerGetSessionDetails: async (
      id: string,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('getSessionDetailsExtendedControllerGetSessionDetails', 'id', id)
      const localVarPath = `/sessions/{id}/extended`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id))
      )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
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
    getSessionJobsControllerGetSessionJobs: async (
      id: string,
      offset?: number,
      limit?: number,
      sort?: GetSessionJobsControllerGetSessionJobsSortEnum,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('getSessionJobsControllerGetSessionJobs', 'id', id)
      const localVarPath = `/sessions/{id}/jobs`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id))
      )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      if (offset !== undefined) {
        localVarQueryParameter['offset'] = offset
      }

      if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit
      }

      if (sort !== undefined) {
        localVarQueryParameter['sort'] = sort
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Update a session
     * @summary Update session
     * @param {string} id Identifier of an existing runtime session
     * @param {UpdateSessionRequest} updateSessionRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSessionControllerUpdateSession: async (
      id: string,
      updateSessionRequest: UpdateSessionRequest,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('updateSessionControllerUpdateSession', 'id', id)
      // verify required parameter 'updateSessionRequest' is not null or undefined
      assertParamExists(
        'updateSessionControllerUpdateSession',
        'updateSessionRequest',
        updateSessionRequest
      )
      const localVarPath = `/sessions/{id}`.replace(`{${'id'}}`, encodeURIComponent(String(id)))
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      localVarHeaderParameter['Content-Type'] = 'application/json'

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }
      localVarRequestOptions.data = serializeDataIfNeeded(
        updateSessionRequest,
        localVarRequestOptions,
        configuration
      )

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * SessionsApi - functional programming interface
 * @export
 */
export const SessionsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = SessionsApiAxiosParamCreator(configuration)
  return {
    /**
     * Closes the runtime session
     * @summary Close session
     * @param {string} id Session Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async closeSession(
      id: string,
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.closeSession(id, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['SessionsApi.closeSession']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Create a runtime session
     * @summary Create session
     * @param {CreateSessionRequest} createSessionRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createSessionControllerCreateSession(
      createSessionRequest: CreateSessionRequest,
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateSessionResponse>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createSessionControllerCreateSession(
          createSessionRequest,
          options
        )
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['SessionsApi.createSessionControllerCreateSession']?.[
          localVarOperationServerIndex
        ]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Get a runtime session details
     * @summary Get session
     * @param {string} id Identifier of an existing runtime session
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getSessionDetailsControllerGetSessionDetails(
      id: string,
      options?: RawAxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetSessionDetailsResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getSessionDetailsControllerGetSessionDetails(id, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['SessionsApi.getSessionDetailsControllerGetSessionDetails']?.[
          localVarOperationServerIndex
        ]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Get a runtime session details
     * @summary Get session
     * @param {string} id Identifier of an existing runtime session
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getSessionDetailsExtendedControllerGetSessionDetails(
      id: string,
      options?: RawAxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetSessionDetailsExtendedResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getSessionDetailsExtendedControllerGetSessionDetails(
          id,
          options
        )
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['SessionsApi.getSessionDetailsExtendedControllerGetSessionDetails']?.[
          localVarOperationServerIndex
        ]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
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
    async getSessionJobsControllerGetSessionJobs(
      id: string,
      offset?: number,
      limit?: number,
      sort?: GetSessionJobsControllerGetSessionJobsSortEnum,
      options?: RawAxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaginationRuntimeJobResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getSessionJobsControllerGetSessionJobs(
          id,
          offset,
          limit,
          sort,
          options
        )
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['SessionsApi.getSessionJobsControllerGetSessionJobs']?.[
          localVarOperationServerIndex
        ]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Update a session
     * @summary Update session
     * @param {string} id Identifier of an existing runtime session
     * @param {UpdateSessionRequest} updateSessionRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateSessionControllerUpdateSession(
      id: string,
      updateSessionRequest: UpdateSessionRequest,
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updateSessionControllerUpdateSession(
          id,
          updateSessionRequest,
          options
        )
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['SessionsApi.updateSessionControllerUpdateSession']?.[
          localVarOperationServerIndex
        ]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
  }
}

/**
 * SessionsApi - factory interface
 * @export
 */
export const SessionsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = SessionsApiFp(configuration)
  return {
    /**
     * Closes the runtime session
     * @summary Close session
     * @param {string} id Session Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    closeSession(id: string, options?: RawAxiosRequestConfig): AxiosPromise<void> {
      return localVarFp.closeSession(id, options).then((request) => request(axios, basePath))
    },
    /**
     * Create a runtime session
     * @summary Create session
     * @param {CreateSessionRequest} createSessionRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSessionControllerCreateSession(
      createSessionRequest: CreateSessionRequest,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<CreateSessionResponse> {
      return localVarFp
        .createSessionControllerCreateSession(createSessionRequest, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * Get a runtime session details
     * @summary Get session
     * @param {string} id Identifier of an existing runtime session
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSessionDetailsControllerGetSessionDetails(
      id: string,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<GetSessionDetailsResponse> {
      return localVarFp
        .getSessionDetailsControllerGetSessionDetails(id, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * Get a runtime session details
     * @summary Get session
     * @param {string} id Identifier of an existing runtime session
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSessionDetailsExtendedControllerGetSessionDetails(
      id: string,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<GetSessionDetailsExtendedResponse> {
      return localVarFp
        .getSessionDetailsExtendedControllerGetSessionDetails(id, options)
        .then((request) => request(axios, basePath))
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
    getSessionJobsControllerGetSessionJobs(
      id: string,
      offset?: number,
      limit?: number,
      sort?: GetSessionJobsControllerGetSessionJobsSortEnum,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<PaginationRuntimeJobResponse> {
      return localVarFp
        .getSessionJobsControllerGetSessionJobs(id, offset, limit, sort, options)
        .then((request) => request(axios, basePath))
    },
    /**
     * Update a session
     * @summary Update session
     * @param {string} id Identifier of an existing runtime session
     * @param {UpdateSessionRequest} updateSessionRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSessionControllerUpdateSession(
      id: string,
      updateSessionRequest: UpdateSessionRequest,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<void> {
      return localVarFp
        .updateSessionControllerUpdateSession(id, updateSessionRequest, options)
        .then((request) => request(axios, basePath))
    },
  }
}

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
  public closeSession(id: string, options?: RawAxiosRequestConfig) {
    return SessionsApiFp(this.configuration)
      .closeSession(id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Create a runtime session
   * @summary Create session
   * @param {CreateSessionRequest} createSessionRequest
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SessionsApi
   */
  public createSessionControllerCreateSession(
    createSessionRequest: CreateSessionRequest,
    options?: RawAxiosRequestConfig
  ) {
    return SessionsApiFp(this.configuration)
      .createSessionControllerCreateSession(createSessionRequest, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Get a runtime session details
   * @summary Get session
   * @param {string} id Identifier of an existing runtime session
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SessionsApi
   */
  public getSessionDetailsControllerGetSessionDetails(id: string, options?: RawAxiosRequestConfig) {
    return SessionsApiFp(this.configuration)
      .getSessionDetailsControllerGetSessionDetails(id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Get a runtime session details
   * @summary Get session
   * @param {string} id Identifier of an existing runtime session
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SessionsApi
   */
  public getSessionDetailsExtendedControllerGetSessionDetails(
    id: string,
    options?: RawAxiosRequestConfig
  ) {
    return SessionsApiFp(this.configuration)
      .getSessionDetailsExtendedControllerGetSessionDetails(id, options)
      .then((request) => request(this.axios, this.basePath))
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
  public getSessionJobsControllerGetSessionJobs(
    id: string,
    offset?: number,
    limit?: number,
    sort?: GetSessionJobsControllerGetSessionJobsSortEnum,
    options?: RawAxiosRequestConfig
  ) {
    return SessionsApiFp(this.configuration)
      .getSessionJobsControllerGetSessionJobs(id, offset, limit, sort, options)
      .then((request) => request(this.axios, this.basePath))
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
  public updateSessionControllerUpdateSession(
    id: string,
    updateSessionRequest: UpdateSessionRequest,
    options?: RawAxiosRequestConfig
  ) {
    return SessionsApiFp(this.configuration)
      .updateSessionControllerUpdateSession(id, updateSessionRequest, options)
      .then((request) => request(this.axios, this.basePath))
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
} as const
export type GetSessionJobsControllerGetSessionJobsSortEnum =
  (typeof GetSessionJobsControllerGetSessionJobsSortEnum)[keyof typeof GetSessionJobsControllerGetSessionJobsSortEnum]

/**
 * SystemsApi - axios parameter creator
 * @export
 */
export const SystemsApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Get system configuration
     * @summary Get system configuration
     * @param {string} name  Name of an available system
     * @param {string} [xQxClientApplication] Specify qiskit client application and its attributes
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBackendConfigurationControllerGetBackendConfiguration: async (
      name: string,
      xQxClientApplication?: string,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists('getBackendConfigurationControllerGetBackendConfiguration', 'name', name)
      const localVarPath = `/backends/{name}/configuration`.replace(
        `{${'name'}}`,
        encodeURIComponent(String(name))
      )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      if (xQxClientApplication !== null) {
        localVarHeaderParameter['x-qx-client-application'] = String(xQxClientApplication)
      }
      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Get system defaults
     * @summary Get system defaults
     * @param {string} name  Name of an available system
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBackendDefaultsControllerGetBackendDefaults: async (
      name: string,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists('getBackendDefaultsControllerGetBackendDefaults', 'name', name)
      const localVarPath = `/backends/{name}/defaults`.replace(
        `{${'name'}}`,
        encodeURIComponent(String(name))
      )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
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
    getBackendPropertiesControllerGetBackendProperties: async (
      name: string,
      updatedBefore?: string,
      xQxClientApplication?: string,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists('getBackendPropertiesControllerGetBackendProperties', 'name', name)
      const localVarPath = `/backends/{name}/properties`.replace(
        `{${'name'}}`,
        encodeURIComponent(String(name))
      )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      if (updatedBefore !== undefined) {
        localVarQueryParameter['updated_before'] =
          (updatedBefore as any) instanceof Date
            ? (updatedBefore as any).toISOString()
            : updatedBefore
      }

      if (xQxClientApplication !== null) {
        localVarHeaderParameter['x-qx-client-application'] = String(xQxClientApplication)
      }
      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Returns the status for the specified system name.
     * @summary Get system status
     * @param {string} id Name of an available system
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBackendStatus: async (
      id: string,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists('getBackendStatus', 'id', id)
      const localVarPath = `/backends/{id}/status`.replace(
        `{${'id'}}`,
        encodeURIComponent(String(id))
      )
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
    /**
     * Returns a list of all the systems your instance has access to.
     * @summary List your systems
     * @param {string} [provider] Instance to filter systems. Should be in the following format {hub}/{group}/{project}
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listBackends: async (
      provider?: string,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/backends`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      if (provider !== undefined) {
        localVarQueryParameter['provider'] = provider
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * SystemsApi - functional programming interface
 * @export
 */
export const SystemsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = SystemsApiAxiosParamCreator(configuration)
  return {
    /**
     * Get system configuration
     * @summary Get system configuration
     * @param {string} name  Name of an available system
     * @param {string} [xQxClientApplication] Specify qiskit client application and its attributes
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getBackendConfigurationControllerGetBackendConfiguration(
      name: string,
      xQxClientApplication?: string,
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getBackendConfigurationControllerGetBackendConfiguration(
          name,
          xQxClientApplication,
          options
        )
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['SystemsApi.getBackendConfigurationControllerGetBackendConfiguration']?.[
          localVarOperationServerIndex
        ]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Get system defaults
     * @summary Get system defaults
     * @param {string} name  Name of an available system
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getBackendDefaultsControllerGetBackendDefaults(
      name: string,
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getBackendDefaultsControllerGetBackendDefaults(
          name,
          options
        )
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['SystemsApi.getBackendDefaultsControllerGetBackendDefaults']?.[
          localVarOperationServerIndex
        ]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
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
    async getBackendPropertiesControllerGetBackendProperties(
      name: string,
      updatedBefore?: string,
      xQxClientApplication?: string,
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getBackendPropertiesControllerGetBackendProperties(
          name,
          updatedBefore,
          xQxClientApplication,
          options
        )
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['SystemsApi.getBackendPropertiesControllerGetBackendProperties']?.[
          localVarOperationServerIndex
        ]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Returns the status for the specified system name.
     * @summary Get system status
     * @param {string} id Name of an available system
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getBackendStatus(
      id: string,
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BackendStatusResponse>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getBackendStatus(id, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['SystemsApi.getBackendStatus']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
    /**
     * Returns a list of all the systems your instance has access to.
     * @summary List your systems
     * @param {string} [provider] Instance to filter systems. Should be in the following format {hub}/{group}/{project}
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listBackends(
      provider?: string,
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BackendsResponse>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listBackends(provider, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['SystemsApi.listBackends']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
  }
}

/**
 * SystemsApi - factory interface
 * @export
 */
export const SystemsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = SystemsApiFp(configuration)
  return {
    /**
     * Get system configuration
     * @summary Get system configuration
     * @param {string} name  Name of an available system
     * @param {string} [xQxClientApplication] Specify qiskit client application and its attributes
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBackendConfigurationControllerGetBackendConfiguration(
      name: string,
      xQxClientApplication?: string,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<object> {
      return localVarFp
        .getBackendConfigurationControllerGetBackendConfiguration(
          name,
          xQxClientApplication,
          options
        )
        .then((request) => request(axios, basePath))
    },
    /**
     * Get system defaults
     * @summary Get system defaults
     * @param {string} name  Name of an available system
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBackendDefaultsControllerGetBackendDefaults(
      name: string,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<object> {
      return localVarFp
        .getBackendDefaultsControllerGetBackendDefaults(name, options)
        .then((request) => request(axios, basePath))
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
    getBackendPropertiesControllerGetBackendProperties(
      name: string,
      updatedBefore?: string,
      xQxClientApplication?: string,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<object> {
      return localVarFp
        .getBackendPropertiesControllerGetBackendProperties(
          name,
          updatedBefore,
          xQxClientApplication,
          options
        )
        .then((request) => request(axios, basePath))
    },
    /**
     * Returns the status for the specified system name.
     * @summary Get system status
     * @param {string} id Name of an available system
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBackendStatus(
      id: string,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<BackendStatusResponse> {
      return localVarFp.getBackendStatus(id, options).then((request) => request(axios, basePath))
    },
    /**
     * Returns a list of all the systems your instance has access to.
     * @summary List your systems
     * @param {string} [provider] Instance to filter systems. Should be in the following format {hub}/{group}/{project}
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listBackends(
      provider?: string,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<BackendsResponse> {
      return localVarFp.listBackends(provider, options).then((request) => request(axios, basePath))
    },
  }
}

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
  public getBackendConfigurationControllerGetBackendConfiguration(
    name: string,
    xQxClientApplication?: string,
    options?: RawAxiosRequestConfig
  ) {
    return SystemsApiFp(this.configuration)
      .getBackendConfigurationControllerGetBackendConfiguration(name, xQxClientApplication, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Get system defaults
   * @summary Get system defaults
   * @param {string} name  Name of an available system
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SystemsApi
   */
  public getBackendDefaultsControllerGetBackendDefaults(
    name: string,
    options?: RawAxiosRequestConfig
  ) {
    return SystemsApiFp(this.configuration)
      .getBackendDefaultsControllerGetBackendDefaults(name, options)
      .then((request) => request(this.axios, this.basePath))
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
  public getBackendPropertiesControllerGetBackendProperties(
    name: string,
    updatedBefore?: string,
    xQxClientApplication?: string,
    options?: RawAxiosRequestConfig
  ) {
    return SystemsApiFp(this.configuration)
      .getBackendPropertiesControllerGetBackendProperties(
        name,
        updatedBefore,
        xQxClientApplication,
        options
      )
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Returns the status for the specified system name.
   * @summary Get system status
   * @param {string} id Name of an available system
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SystemsApi
   */
  public getBackendStatus(id: string, options?: RawAxiosRequestConfig) {
    return SystemsApiFp(this.configuration)
      .getBackendStatus(id, options)
      .then((request) => request(this.axios, this.basePath))
  }

  /**
   * Returns a list of all the systems your instance has access to.
   * @summary List your systems
   * @param {string} [provider] Instance to filter systems. Should be in the following format {hub}/{group}/{project}
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SystemsApi
   */
  public listBackends(provider?: string, options?: RawAxiosRequestConfig) {
    return SystemsApiFp(this.configuration)
      .listBackends(provider, options)
      .then((request) => request(this.axios, this.basePath))
  }
}

/**
 * TagsApi - axios parameter creator
 * @export
 */
export const TagsApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Search and list the tags of jobs.
     * @summary List tags
     * @param {TagsGetTypeEnum} type Searches for tags in the specified type.
     * @param {string} search Used for searching tags.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    tagsGet: async (
      type: TagsGetTypeEnum,
      search: string,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'type' is not null or undefined
      assertParamExists('tagsGet', 'type', type)
      // verify required parameter 'search' is not null or undefined
      assertParamExists('tagsGet', 'search', search)
      const localVarPath = `/tags`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      if (type !== undefined) {
        localVarQueryParameter['type'] = type
      }

      if (search !== undefined) {
        localVarQueryParameter['search'] = search
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * TagsApi - functional programming interface
 * @export
 */
export const TagsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = TagsApiAxiosParamCreator(configuration)
  return {
    /**
     * Search and list the tags of jobs.
     * @summary List tags
     * @param {TagsGetTypeEnum} type Searches for tags in the specified type.
     * @param {string} search Used for searching tags.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async tagsGet(
      type: TagsGetTypeEnum,
      search: string,
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TagsGet200Response>> {
      const localVarAxiosArgs = await localVarAxiosParamCreator.tagsGet(type, search, options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['TagsApi.tagsGet']?.[localVarOperationServerIndex]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
  }
}

/**
 * TagsApi - factory interface
 * @export
 */
export const TagsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = TagsApiFp(configuration)
  return {
    /**
     * Search and list the tags of jobs.
     * @summary List tags
     * @param {TagsGetTypeEnum} type Searches for tags in the specified type.
     * @param {string} search Used for searching tags.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    tagsGet(
      type: TagsGetTypeEnum,
      search: string,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<TagsGet200Response> {
      return localVarFp.tagsGet(type, search, options).then((request) => request(axios, basePath))
    },
  }
}

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
  public tagsGet(type: TagsGetTypeEnum, search: string, options?: RawAxiosRequestConfig) {
    return TagsApiFp(this.configuration)
      .tagsGet(type, search, options)
      .then((request) => request(this.axios, this.basePath))
  }
}

/**
 * @export
 */
export const TagsGetTypeEnum = {
  Job: 'job',
} as const
export type TagsGetTypeEnum = (typeof TagsGetTypeEnum)[keyof typeof TagsGetTypeEnum]

/**
 * UsageApi - axios parameter creator
 * @export
 */
export const UsageApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Get usage by instance
     * @summary Get usage
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCurrentMonthlyUsageControllerGetUsageStats: async (
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/usage`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * UsageApi - functional programming interface
 * @export
 */
export const UsageApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = UsageApiAxiosParamCreator(configuration)
  return {
    /**
     * Get usage by instance
     * @summary Get usage
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getCurrentMonthlyUsageControllerGetUsageStats(
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UsageStatsDto>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getCurrentMonthlyUsageControllerGetUsageStats(options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['UsageApi.getCurrentMonthlyUsageControllerGetUsageStats']?.[
          localVarOperationServerIndex
        ]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
  }
}

/**
 * UsageApi - factory interface
 * @export
 */
export const UsageApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = UsageApiFp(configuration)
  return {
    /**
     * Get usage by instance
     * @summary Get usage
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCurrentMonthlyUsageControllerGetUsageStats(
      options?: RawAxiosRequestConfig
    ): AxiosPromise<UsageStatsDto> {
      return localVarFp
        .getCurrentMonthlyUsageControllerGetUsageStats(options)
        .then((request) => request(axios, basePath))
    },
  }
}

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
  public getCurrentMonthlyUsageControllerGetUsageStats(options?: RawAxiosRequestConfig) {
    return UsageApiFp(this.configuration)
      .getCurrentMonthlyUsageControllerGetUsageStats(options)
      .then((request) => request(this.axios, this.basePath))
  }
}

/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Get the authenticated user
     * @summary Get user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserMeControllerGetMyUser: async (
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/users/me`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = UsersApiAxiosParamCreator(configuration)
  return {
    /**
     * Get the authenticated user
     * @summary Get user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getUserMeControllerGetMyUser(
      options?: RawAxiosRequestConfig
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetUserMeResponse>> {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getUserMeControllerGetMyUser(options)
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['UsersApi.getUserMeControllerGetMyUser']?.[localVarOperationServerIndex]
          ?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
  }
}

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = UsersApiFp(configuration)
  return {
    /**
     * Get the authenticated user
     * @summary Get user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserMeControllerGetMyUser(options?: RawAxiosRequestConfig): AxiosPromise<GetUserMeResponse> {
      return localVarFp
        .getUserMeControllerGetMyUser(options)
        .then((request) => request(axios, basePath))
    },
  }
}

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
  public getUserMeControllerGetMyUser(options?: RawAxiosRequestConfig) {
    return UsersApiFp(this.configuration)
      .getUserMeControllerGetMyUser(options)
      .then((request) => request(this.axios, this.basePath))
  }
}

/**
 * WorkloadsApi - axios parameter creator
 * @export
 */
export const WorkloadsApiAxiosParamCreator = function (configuration?: Configuration) {
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
    findWorkloadsAdminControllerFindWorkloadsAdmin: async (
      instance: string,
      sort?: FindWorkloadsAdminControllerFindWorkloadsAdminSortEnum,
      order?: FindWorkloadsAdminControllerFindWorkloadsAdminOrderEnum,
      limit?: number,
      previous?: string,
      next?: string,
      backend?: string,
      search?: string,
      status?: Array<FindWorkloadsAdminControllerFindWorkloadsAdminStatusEnum>,
      mode?: string,
      createdAfter?: string,
      createdBefore?: string,
      tags?: Array<string>,
      userId?: string,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'instance' is not null or undefined
      assertParamExists('findWorkloadsAdminControllerFindWorkloadsAdmin', 'instance', instance)
      const localVarPath = `/workloads/admin`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      if (sort !== undefined) {
        localVarQueryParameter['sort'] = sort
      }

      if (order !== undefined) {
        localVarQueryParameter['order'] = order
      }

      if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit
      }

      if (previous !== undefined) {
        localVarQueryParameter['previous'] = previous
      }

      if (next !== undefined) {
        localVarQueryParameter['next'] = next
      }

      if (instance !== undefined) {
        localVarQueryParameter['instance'] = instance
      }

      if (backend !== undefined) {
        localVarQueryParameter['backend'] = backend
      }

      if (search !== undefined) {
        localVarQueryParameter['search'] = search
      }

      if (status) {
        localVarQueryParameter['status'] = status
      }

      if (mode !== undefined) {
        localVarQueryParameter['mode'] = mode
      }

      if (createdAfter !== undefined) {
        localVarQueryParameter['createdAfter'] =
          (createdAfter as any) instanceof Date ? (createdAfter as any).toISOString() : createdAfter
      }

      if (createdBefore !== undefined) {
        localVarQueryParameter['createdBefore'] =
          (createdBefore as any) instanceof Date
            ? (createdBefore as any).toISOString()
            : createdBefore
      }

      if (tags) {
        localVarQueryParameter['tags'] = tags
      }

      if (userId !== undefined) {
        localVarQueryParameter['userId'] = userId
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
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
    findWorkloadsMeControllerFindUserWorkloads: async (
      sort?: FindWorkloadsMeControllerFindUserWorkloadsSortEnum,
      order?: FindWorkloadsMeControllerFindUserWorkloadsOrderEnum,
      limit?: number,
      previous?: string,
      next?: string,
      instance?: string,
      backend?: string,
      search?: string,
      status?: Array<FindWorkloadsMeControllerFindUserWorkloadsStatusEnum>,
      mode?: string,
      createdAfter?: string,
      createdBefore?: string,
      tags?: Array<string>,
      options: RawAxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/workloads/me`
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL)
      let baseOptions
      if (configuration) {
        baseOptions = configuration.baseOptions
      }

      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options }
      const localVarHeaderParameter = {} as any
      const localVarQueryParameter = {} as any

      // authentication user-accesstoken required
      await setApiKeyToObject(localVarHeaderParameter, 'X-Access-Token', configuration)

      // authentication bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration)

      if (sort !== undefined) {
        localVarQueryParameter['sort'] = sort
      }

      if (order !== undefined) {
        localVarQueryParameter['order'] = order
      }

      if (limit !== undefined) {
        localVarQueryParameter['limit'] = limit
      }

      if (previous !== undefined) {
        localVarQueryParameter['previous'] = previous
      }

      if (next !== undefined) {
        localVarQueryParameter['next'] = next
      }

      if (instance !== undefined) {
        localVarQueryParameter['instance'] = instance
      }

      if (backend !== undefined) {
        localVarQueryParameter['backend'] = backend
      }

      if (search !== undefined) {
        localVarQueryParameter['search'] = search
      }

      if (status) {
        localVarQueryParameter['status'] = status
      }

      if (mode !== undefined) {
        localVarQueryParameter['mode'] = mode
      }

      if (createdAfter !== undefined) {
        localVarQueryParameter['createdAfter'] =
          (createdAfter as any) instanceof Date ? (createdAfter as any).toISOString() : createdAfter
      }

      if (createdBefore !== undefined) {
        localVarQueryParameter['createdBefore'] =
          (createdBefore as any) instanceof Date
            ? (createdBefore as any).toISOString()
            : createdBefore
      }

      if (tags) {
        localVarQueryParameter['tags'] = tags
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter)
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {}
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      }

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      }
    },
  }
}

/**
 * WorkloadsApi - functional programming interface
 * @export
 */
export const WorkloadsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = WorkloadsApiAxiosParamCreator(configuration)
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
    async findWorkloadsAdminControllerFindWorkloadsAdmin(
      instance: string,
      sort?: FindWorkloadsAdminControllerFindWorkloadsAdminSortEnum,
      order?: FindWorkloadsAdminControllerFindWorkloadsAdminOrderEnum,
      limit?: number,
      previous?: string,
      next?: string,
      backend?: string,
      search?: string,
      status?: Array<FindWorkloadsAdminControllerFindWorkloadsAdminStatusEnum>,
      mode?: string,
      createdAfter?: string,
      createdBefore?: string,
      tags?: Array<string>,
      userId?: string,
      options?: RawAxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaginationWorkloadsResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.findWorkloadsAdminControllerFindWorkloadsAdmin(
          instance,
          sort,
          order,
          limit,
          previous,
          next,
          backend,
          search,
          status,
          mode,
          createdAfter,
          createdBefore,
          tags,
          userId,
          options
        )
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['WorkloadsApi.findWorkloadsAdminControllerFindWorkloadsAdmin']?.[
          localVarOperationServerIndex
        ]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
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
    async findWorkloadsMeControllerFindUserWorkloads(
      sort?: FindWorkloadsMeControllerFindUserWorkloadsSortEnum,
      order?: FindWorkloadsMeControllerFindUserWorkloadsOrderEnum,
      limit?: number,
      previous?: string,
      next?: string,
      instance?: string,
      backend?: string,
      search?: string,
      status?: Array<FindWorkloadsMeControllerFindUserWorkloadsStatusEnum>,
      mode?: string,
      createdAfter?: string,
      createdBefore?: string,
      tags?: Array<string>,
      options?: RawAxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaginationWorkloadsResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.findWorkloadsMeControllerFindUserWorkloads(
          sort,
          order,
          limit,
          previous,
          next,
          instance,
          backend,
          search,
          status,
          mode,
          createdAfter,
          createdBefore,
          tags,
          options
        )
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0
      const localVarOperationServerBasePath =
        operationServerMap['WorkloadsApi.findWorkloadsMeControllerFindUserWorkloads']?.[
          localVarOperationServerIndex
        ]?.url
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration
        )(axios, localVarOperationServerBasePath || basePath)
    },
  }
}

/**
 * WorkloadsApi - factory interface
 * @export
 */
export const WorkloadsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = WorkloadsApiFp(configuration)
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
    findWorkloadsAdminControllerFindWorkloadsAdmin(
      instance: string,
      sort?: FindWorkloadsAdminControllerFindWorkloadsAdminSortEnum,
      order?: FindWorkloadsAdminControllerFindWorkloadsAdminOrderEnum,
      limit?: number,
      previous?: string,
      next?: string,
      backend?: string,
      search?: string,
      status?: Array<FindWorkloadsAdminControllerFindWorkloadsAdminStatusEnum>,
      mode?: string,
      createdAfter?: string,
      createdBefore?: string,
      tags?: Array<string>,
      userId?: string,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<PaginationWorkloadsResponse> {
      return localVarFp
        .findWorkloadsAdminControllerFindWorkloadsAdmin(
          instance,
          sort,
          order,
          limit,
          previous,
          next,
          backend,
          search,
          status,
          mode,
          createdAfter,
          createdBefore,
          tags,
          userId,
          options
        )
        .then((request) => request(axios, basePath))
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
    findWorkloadsMeControllerFindUserWorkloads(
      sort?: FindWorkloadsMeControllerFindUserWorkloadsSortEnum,
      order?: FindWorkloadsMeControllerFindUserWorkloadsOrderEnum,
      limit?: number,
      previous?: string,
      next?: string,
      instance?: string,
      backend?: string,
      search?: string,
      status?: Array<FindWorkloadsMeControllerFindUserWorkloadsStatusEnum>,
      mode?: string,
      createdAfter?: string,
      createdBefore?: string,
      tags?: Array<string>,
      options?: RawAxiosRequestConfig
    ): AxiosPromise<PaginationWorkloadsResponse> {
      return localVarFp
        .findWorkloadsMeControllerFindUserWorkloads(
          sort,
          order,
          limit,
          previous,
          next,
          instance,
          backend,
          search,
          status,
          mode,
          createdAfter,
          createdBefore,
          tags,
          options
        )
        .then((request) => request(axios, basePath))
    },
  }
}

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
  public findWorkloadsAdminControllerFindWorkloadsAdmin(
    instance: string,
    sort?: FindWorkloadsAdminControllerFindWorkloadsAdminSortEnum,
    order?: FindWorkloadsAdminControllerFindWorkloadsAdminOrderEnum,
    limit?: number,
    previous?: string,
    next?: string,
    backend?: string,
    search?: string,
    status?: Array<FindWorkloadsAdminControllerFindWorkloadsAdminStatusEnum>,
    mode?: string,
    createdAfter?: string,
    createdBefore?: string,
    tags?: Array<string>,
    userId?: string,
    options?: RawAxiosRequestConfig
  ) {
    return WorkloadsApiFp(this.configuration)
      .findWorkloadsAdminControllerFindWorkloadsAdmin(
        instance,
        sort,
        order,
        limit,
        previous,
        next,
        backend,
        search,
        status,
        mode,
        createdAfter,
        createdBefore,
        tags,
        userId,
        options
      )
      .then((request) => request(this.axios, this.basePath))
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
  public findWorkloadsMeControllerFindUserWorkloads(
    sort?: FindWorkloadsMeControllerFindUserWorkloadsSortEnum,
    order?: FindWorkloadsMeControllerFindUserWorkloadsOrderEnum,
    limit?: number,
    previous?: string,
    next?: string,
    instance?: string,
    backend?: string,
    search?: string,
    status?: Array<FindWorkloadsMeControllerFindUserWorkloadsStatusEnum>,
    mode?: string,
    createdAfter?: string,
    createdBefore?: string,
    tags?: Array<string>,
    options?: RawAxiosRequestConfig
  ) {
    return WorkloadsApiFp(this.configuration)
      .findWorkloadsMeControllerFindUserWorkloads(
        sort,
        order,
        limit,
        previous,
        next,
        instance,
        backend,
        search,
        status,
        mode,
        createdAfter,
        createdBefore,
        tags,
        options
      )
      .then((request) => request(this.axios, this.basePath))
  }
}

/**
 * @export
 */
export const FindWorkloadsAdminControllerFindWorkloadsAdminSortEnum = {
  CreatedAt: 'createdAt',
} as const
export type FindWorkloadsAdminControllerFindWorkloadsAdminSortEnum =
  (typeof FindWorkloadsAdminControllerFindWorkloadsAdminSortEnum)[keyof typeof FindWorkloadsAdminControllerFindWorkloadsAdminSortEnum]
/**
 * @export
 */
export const FindWorkloadsAdminControllerFindWorkloadsAdminOrderEnum = {
  Asc: 'asc',
  Desc: 'desc',
} as const
export type FindWorkloadsAdminControllerFindWorkloadsAdminOrderEnum =
  (typeof FindWorkloadsAdminControllerFindWorkloadsAdminOrderEnum)[keyof typeof FindWorkloadsAdminControllerFindWorkloadsAdminOrderEnum]
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
} as const
export type FindWorkloadsAdminControllerFindWorkloadsAdminStatusEnum =
  (typeof FindWorkloadsAdminControllerFindWorkloadsAdminStatusEnum)[keyof typeof FindWorkloadsAdminControllerFindWorkloadsAdminStatusEnum]
/**
 * @export
 */
export const FindWorkloadsMeControllerFindUserWorkloadsSortEnum = {
  CreatedAt: 'createdAt',
} as const
export type FindWorkloadsMeControllerFindUserWorkloadsSortEnum =
  (typeof FindWorkloadsMeControllerFindUserWorkloadsSortEnum)[keyof typeof FindWorkloadsMeControllerFindUserWorkloadsSortEnum]
/**
 * @export
 */
export const FindWorkloadsMeControllerFindUserWorkloadsOrderEnum = {
  Asc: 'asc',
  Desc: 'desc',
} as const
export type FindWorkloadsMeControllerFindUserWorkloadsOrderEnum =
  (typeof FindWorkloadsMeControllerFindUserWorkloadsOrderEnum)[keyof typeof FindWorkloadsMeControllerFindUserWorkloadsOrderEnum]
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
} as const
export type FindWorkloadsMeControllerFindUserWorkloadsStatusEnum =
  (typeof FindWorkloadsMeControllerFindUserWorkloadsStatusEnum)[keyof typeof FindWorkloadsMeControllerFindUserWorkloadsStatusEnum]
