// // packages/backend/src/types.ts

// import { Config } from '@backstage/config';
// import { Logger } from 'winston';
// import { PluginEndpointDiscovery, TokenManager } from '@backstage/backend-common';
// import { PermissionEvaluator } from '@backstage/plugin-permission-common';

// // Define AuthService and HttpAuthService as any since they're not exported
// export type AuthService = any;
// export type HttpAuthService = any;

// export interface PluginEnvironment {
//   logger: Logger;
//   config: Config;
//   discovery: any;//PluginEndpointDiscovery;
//   permissions: PermissionEvaluator;
//   auth: AuthService; // Now defined as any
//   httpAuth: HttpAuthService; // Now defined as any
//   tokenManager: TokenManager;
// }

import { Logger } from 'winston';
import { Config } from '@backstage/config';
import { TokenManager } from '@backstage/backend-common';

export type PluginEnvironment = {
  logger: Logger;
  config: Config;
  discovery: any;
  tokenManager: TokenManager;
};
