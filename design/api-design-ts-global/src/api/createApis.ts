/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Petstore - version 1.0.0
 *
 * This is a sample server Petstore server. For this sample, you can use the api key &#x60;special-key&#x60; to test the authorization filters.
 *
 * OpenAPI version: 3.0.0
 *
 * Contact:
 *
 * NOTE: This file is auto generated by the alova's vscode plugin.
 *
 * https://alova.js.org/devtools/vscode
 *
 * **Do not edit the file manually.**
 */
import { Alova, Method, MethodType } from 'alova';
import type { alovaInstance } from '.';
import apiDefinitions from './apiDefinitions';

const createFunctionalProxy = (
  array: (string | symbol)[],
  alovaInstance: Alova<any, any, any, any, any>,
  configMap: any
) => {
  // create a new proxy instance
  return new Proxy(function () {}, {
    get(_, property) {
      // record the target property, so that it can get the completed accessing paths
      array.push(property);
      // always return a new proxy to continue recording accessing paths.
      return createFunctionalProxy(array, alovaInstance, configMap);
    },
    apply(_, __, [config]) {
      const apiItem = apiDefinitions[array.join('.')] as string[] | undefined;
      if (!apiItem) {
        throw new Error(`the api path of \`${apiItem}\` is not found`);
      }
      const [method, url] = apiItem;
      const { pathParams, data } = config;
      const urlReplaced = url.replace(/\{([^}]+)\}/g, (_, key) => {
        const pathParam = pathParams[key];
        return pathParam;
      });
      delete config.pathParams;
      return new Method(method.toUpperCase() as MethodType, alovaInstance, urlReplaced, config, data);
    }
  });
};

export const createApis = (alovaInstance: Alova<any, any, any, any, any>, configMap: any) =>
  new Proxy(
    {},
    {
      get(_, property) {
        return createFunctionalProxy([property], alovaInstance, configMap);
      }
    }
  );

type MethodsConfigMap = {
  [apiPath in keyof typeof apiDefinitions]?: Parameters<(typeof alovaInstance)['Get']>['1'];
};
export const withConfigType = <Config extends MethodsConfigMap>(config: Config) => config;
