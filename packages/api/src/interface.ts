export interface RouteDefinition {
  path: string;
  requestMethod: 'get';
  methodName: string | symbol;
}
