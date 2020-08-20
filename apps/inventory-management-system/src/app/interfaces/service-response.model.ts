export interface ServiceResponse<T> {
  httpStatusMessage: string;
  apiError?: string;
  data: T;
}
