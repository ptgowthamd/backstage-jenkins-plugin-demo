// // packages/backend/src/plugins/jenkins.ts

// import {
//     createRouter,
//     DefaultJenkinsInfoProvider,
//   } from '@backstage-community/plugin-jenkins-backend';
//   import { CatalogClient, CatalogApi } from '@backstage/catalog-client';
//   import { Router } from 'express';
//   import { HttpAuthService, PluginEnvironment } from '../types';
//   import { Config } from '@backstage/config';
//   import { Logger } from 'winston';
//   import { DiscoveryApi } from '@backstage/core-plugin-api';
//   import {
//     TokenManager,
//     getRootLogger,
//     loadBackendConfig,
//     SingleHostDiscovery,
//     ServerTokenManager,
//   } from '@backstage/backend-common';
//   import { createRouter as createAuthRouter } from '@backstage/plugin-auth-backend';
//   import { PermissionEvaluator } from '@backstage/plugin-permission-common';
//   import {
//     SimplePermissionEvaluator,
//   } from '@backstage/plugin-permission-backend';

//   export async function createEnv(pluginId: string): Promise<PluginEnvironment> {
//     // Initialize Logger
//     const logger: Logger = getRootLogger().child({ plugin: pluginId });
  
//     // Load Configuration
//     const config: Config = await loadBackendConfig({
//       logger,
//       argv: process.argv, // Pass the process arguments
//     });
  
//     // Initialize Discovery API
//     const discovery: DiscoveryApi = SingleHostDiscovery.fromConfig(config);
  
//     // Initialize Token Manager
//     const tokenManager: TokenManager = ServerTokenManager.fromConfig(config, { logger });
  
//     // Initialize Permission Evaluator
//     // const permissions: PermissionEvaluator = DefaultPermissionEvaluator.fromConfig(config);
//     const permissions: PermissionEvaluator = SimplePermissionEvaluator.fromConfig(config);

  
//     // Initialize AuthService (AuthRouter)
//     const authRouter: Router = await createAuthRouter({
//         config,
//         logger,
//         tokenManager,
//         discoveryApi: discovery,
//     });

//     // Initialize HttpAuthService
//     const httpAuthService: HttpAuthService = new HttpAuthService(tokenManager, discovery, logger);

//     return {
//         logger,
//         config,
//         discovery,
//         permissions,
//         auth: authRouter,
//         httpAuth: httpAuthService,
//         tokenManager,
//     };
//   }

//   export default async function createPlugin(
//     env: PluginEnvironment,
//   ): Promise<Router> {
//     const catalog: CatalogApi = new CatalogClient({
//       discoveryApi: env.discovery,
//     });
  
//     // Provide all required properties
//     const jenkinsInfoProvider = DefaultJenkinsInfoProvider.fromConfig({
//       config: env.config,
//       catalog,
//       discovery: env.discovery,      // Added
//       auth: env.auth,                // Added
//       httpAuth: env.httpAuth,        // Added
//       logger: env.logger,            // Added
//     });
  
//     return await createRouter({
//       logger: env.logger,
//       jenkinsInfoProvider,
//       permissions: env.permissions,
//       discovery: env.discovery,
//     });
//   }
  

// packages/backend/src/plugins/jenkins.ts

import { createRouter } from '@backstage-community/plugin-jenkins-backend';
import { Router } from 'express';
import { PluginEnvironment } from '../types';
import { Config } from '@backstage/config';
import { Logger } from 'winston';
import { DiscoveryApi } from '@backstage/core-plugin-api';
import {
    TokenManager,
    getRootLogger,
    loadBackendConfig,
    SingleHostDiscovery,
    ServerTokenManager,
  } from '@backstage/backend-common';

export async function createEnv(pluginId: string): Promise<PluginEnvironment> {
  // You can inject logger, config, discovery, and tokenManager services using core Backstage services
  const logger: Logger = getRootLogger().child({ plugin: pluginId }); // Create logger
  // Load configuration, providing the required 'argv' property
  const config: Config = await loadBackendConfig({
    logger,
    argv: process.argv, // Pass the process arguments
  });
  const discovery: DiscoveryApi = SingleHostDiscovery.fromConfig(config); // Set up discovery
  const tokenManager: TokenManager = ServerTokenManager.fromConfig(config, { logger }); // Provide token manager

  return { logger, config, discovery, tokenManager };
}


export default async function createPlugin(
  env: PluginEnvironment,
): Promise<Router> {
  return await createRouter({
    logger: env.logger,
    config: env.config,
    discovery: env.discovery,
    tokenManager: env.tokenManager,
  }as any);
}