export default interface IPromiseResponse<TData> {
  data?: TData;
  isLoading?: boolean;
  error?: Error;
}
