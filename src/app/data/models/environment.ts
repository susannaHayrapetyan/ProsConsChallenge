export interface Environment {
  production: boolean;
  api: {
    url: string,
    key?: string,
  };
}
