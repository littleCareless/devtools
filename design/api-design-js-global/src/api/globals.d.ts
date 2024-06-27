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
import { Alova, AlovaMethodCreateConfig, Method } from 'alova';
import type { $$userConfigMap, alovaInstance } from '.';
import type apiDefinitions from './apiDefinitions';

type CollapsedAlova = typeof alovaInstance;
type UserMethodConfigMap = typeof $$userConfigMap;

type Alova2MethodConfig<Responded> =
  CollapsedAlova extends Alova<any, any, infer RequestConfig, any, infer ResponseHeader>
    ? Omit<AlovaMethodCreateConfig<any, Responded, RequestConfig, ResponseHeader>, 'params'>
    : never;

// Extract the return type of transformData function that define in $$userConfigMap, if it not exists, use the default type.
type ExtractUserDefinedTransformed<
  DefinitionKey extends keyof typeof apiDefinitions,
  Default
> = DefinitionKey extends keyof UserMethodConfigMap
  ? UserMethodConfigMap[DefinitionKey]['transformData'] extends (...args: any[]) => any
    ? Awaited<ReturnType<UserMethodConfigMap[DefinitionKey]['transformData']>>
    : Default
  : Default;
type Alova2Method<
  Responded,
  DefinitionKey extends keyof typeof apiDefinitions,
  CurrentConfig extends Alova2MethodConfig<any>
> =
  CollapsedAlova extends Alova<infer State, infer Export, infer RequestConfig, infer Response, infer ResponseHeader>
    ? Method<
        State,
        Export,
        CurrentConfig extends undefined
          ? ExtractUserDefinedTransformed<DefinitionKey, Responded>
          : CurrentConfig['transformData'] extends (...args: any[]) => any
            ? Awaited<ReturnType<CurrentConfig['transformData']>>
            : ExtractUserDefinedTransformed<DefinitionKey, Responded>,
        any,
        RequestConfig,
        Response,
        ResponseHeader
      >
    : never;

/**
 * a Pet
 * ---
 * A pet for sale in the pet store
 */
export interface Pet1 {
  id?: number;
  category?: Category;
  name: string;
  photoUrls: string[];
  tags?: Tag[];
  /**
   * @deprecated
   * pet status in the store
   */
  status?: 'available' | 'pending' | 'sold';
  test?: string;
}

/**
 * Pet category
 * ---
 * A category for a pet
 */
export interface Category {
  id?: number;
  name?: string;
}

/**
 * a Pet
 * ---
 * A pet for sale in the pet store
 */
export interface Pet {
  id?: number;
  category?: Category;
  name: string;
  photoUrls: string[];
  tags?: Tag[];
  /**
   * @deprecated
   * pet status in the store
   */
  status?: 'available' | 'pending' | 'sold';
}

/**
 * An uploaded response
 * ---
 * Describes the result of uploading an image resource
 */
export interface ApiResponse1 {
  code?: number;
  type?: string;
  message?: string;
  test?: string;
}

/**
 * Pet Order
 * ---
 * An order for a pets from the pet store
 */
export interface Order1 {
  id?: number;
  petId?: number;
  quantity?: number;
  shipDate?: string;
  /**
   * Order Status
   */
  status?: 'placed' | 'approved' | 'delivered';
  complete?: boolean;
  test?: string;
}

/**
 * Pet Order
 * ---
 * An order for a pets from the pet store
 */
export interface Order {
  id?: number;
  petId?: number;
  quantity?: number;
  shipDate?: string;
  /**
   * Order Status
   */
  status?: 'placed' | 'approved' | 'delivered';
  complete?: boolean;
}

/**
 * a User
 * ---
 * A User who is purchasing from the pet store
 */
export interface User {
  id?: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
  /**
   * User Status
   */
  userStatus?: number;
}

/**
 * a User
 * ---
 * A User who is purchasing from the pet store
 */
export interface User1 {
  id?: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
  /**
   * User Status
   */
  userStatus?: number;
  test?: string;
}

/**
 * Pet Tag
 * ---
 * A tag for a pet
 */
export interface Tag {
  id?: number;
  name?: string;
}

/**
 * An uploaded response
 * ---
 * Describes the result of uploading an image resource
 */
export interface ApiResponse {
  code?: number;
  type?: string;
  message?: string;
}

declare global {
  interface APIS {
    tag: {
      /**
       * ---
       *
       * [POST] Add a new pet to the store 2
       *
       * **path:** /pet
       *
       * ---
       *
       * **RequestBody**
       * ```ts
       * type RequestBody = {
       *   id?: number
       *   // A category for a pet
       *   category?: {
       *     id?: number
       *     name?: string
       *   }
       *   // [required]
       *   name: string
       *   // [required]
       *   photoUrls: string[]
       *   tags?: Array<{
       *     id?: number
       *     name?: string
       *   }>
       *   // pet status in the store
       *   // [deprecated]
       *   status?: 'available' | 'pending' | 'sold'
       * }
       * ```
       *
       * ---
       *
       * **Response**
       * ```ts
       * type Response = {
       *   id?: number
       *   // A category for a pet
       *   category?: {
       *     id?: number
       *     name?: string
       *   }
       *   // [required]
       *   name: string
       *   // [required]
       *   photoUrls: string[]
       *   tags?: Array<{
       *     id?: number
       *     name?: string
       *   }>
       *   // pet status in the store
       *   // [deprecated]
       *   status?: 'available' | 'pending' | 'sold'
       *   test?: string
       * }
       * ```
       */
      增加pet24<Config extends Alova2MethodConfig<Pet1>>(
        config: Config & {
          data: Pet;
        }
      ): Alova2Method<Pet1, 'tag.增加pet24', Config>;
    };
    pet: {
      /**
       * ---
       *
       * [PUT] Update an existing pet 2
       *
       * **path:** /pet
       *
       * ---
       *
       * **RequestBody**
       * ```ts
       * type RequestBody = {
       *   id?: number
       *   // A category for a pet
       *   category?: {
       *     id?: number
       *     name?: string
       *   }
       *   // [required]
       *   name: string
       *   // [required]
       *   photoUrls: string[]
       *   tags?: Array<{
       *     id?: number
       *     name?: string
       *   }>
       *   // pet status in the store
       *   // [deprecated]
       *   status?: 'available' | 'pending' | 'sold'
       * }
       * ```
       *
       * ---
       *
       * **Response**
       * ```ts
       * type Response = {
       *   id?: number
       *   // A category for a pet
       *   category?: {
       *     id?: number
       *     name?: string
       *   }
       *   // [required]
       *   name: string
       *   // [required]
       *   photoUrls: string[]
       *   tags?: Array<{
       *     id?: number
       *     name?: string
       *   }>
       *   // pet status in the store
       *   // [deprecated]
       *   status?: 'available' | 'pending' | 'sold'
       *   test?: string
       * }
       * ```
       */
      updatePet<Config extends Alova2MethodConfig<Pet1>>(
        config: Config & {
          data: Pet;
        }
      ): Alova2Method<Pet1, 'pet.updatePet', Config>;
      /**
       * ---
       *
       * [GET] Finds Pets by status
       *
       * **path:** /pet/findByStatus
       *
       * ---
       *
       * **Query Parameters**
       * ```ts
       * type QueryParameters = {
       *   // Status values that need to be considered for filter
       *   // [required]
       *   // [deprecated]
       *   status: ('available' | 'pending' | 'sold')[]
       * }
       * ```
       *
       * ---
       *
       * **Response**
       * ```ts
       * type Response = Array<{
       *   id?: number
       *   // A category for a pet
       *   category?: {
       *     id?: number
       *     name?: string
       *   }
       *   // [required]
       *   name: string
       *   // [required]
       *   photoUrls: string[]
       *   tags?: Array<{
       *     id?: number
       *     name?: string
       *   }>
       *   // pet status in the store
       *   // [deprecated]
       *   status?: 'available' | 'pending' | 'sold'
       * }>
       * ```
       */
      findPetsByStatus<Config extends Alova2MethodConfig<Pet[]>>(
        config: Config & {
          params: {
            /**
             * Status values that need to be considered for filter
             * [required]
             * [deprecated]
             */
            status: ('available' | 'pending' | 'sold')[];
          };
        }
      ): Alova2Method<Pet[], 'pet.findPetsByStatus', Config>;
      /**
       * ---
       *
       * [GET] Finds Pets by tags
       *
       * **path:** /pet/findByTags
       *
       * ---
       *
       * **Query Parameters**
       * ```ts
       * type QueryParameters = {
       *   // Tags to filter by
       *   // [required]
       *   tags: string[]
       * }
       * ```
       *
       * ---
       *
       * **Response**
       * ```ts
       * type Response = Array<{
       *   id?: number
       *   // A category for a pet
       *   category?: {
       *     id?: number
       *     name?: string
       *   }
       *   // [required]
       *   name: string
       *   // [required]
       *   photoUrls: string[]
       *   tags?: Array<{
       *     id?: number
       *     name?: string
       *   }>
       *   // pet status in the store
       *   // [deprecated]
       *   status?: 'available' | 'pending' | 'sold'
       * }>
       * ```
       */
      findPetsByTags<Config extends Alova2MethodConfig<Pet[]>>(
        config: Config & {
          params: {
            /**
             * Tags to filter by
             * [required]
             */
            tags: string[];
          };
        }
      ): Alova2Method<Pet[], 'pet.findPetsByTags', Config>;
      /**
       * ---
       *
       * [GET] Find pet by ID
       *
       * **path:** /pet/{petId}
       *
       * ---
       *
       * **Path Parameters**
       * ```ts
       * type PathParameters = {
       *   // ID of pet to return
       *   // [required]
       *   petId: number
       * }
       * ```
       *
       * ---
       *
       * **Response**
       * ```ts
       * type Response = {
       *   id?: number
       *   // A category for a pet
       *   category?: {
       *     id?: number
       *     name?: string
       *   }
       *   // [required]
       *   name: string
       *   // [required]
       *   photoUrls: string[]
       *   tags?: Array<{
       *     id?: number
       *     name?: string
       *   }>
       *   // pet status in the store
       *   // [deprecated]
       *   status?: 'available' | 'pending' | 'sold'
       *   test?: string
       * }
       * ```
       */
      getPetById<Config extends Alova2MethodConfig<Pet1>>(
        config: Config & {
          pathParams: {
            /**
             * ID of pet to return
             * [required]
             */
            petId: number;
          };
        }
      ): Alova2Method<Pet1, 'pet.getPetById', Config>;
      /**
       * ---
       *
       * [POST] Updates a pet in the store with form data
       *
       * **path:** /pet/{petId}
       *
       * ---
       *
       * **Path Parameters**
       * ```ts
       * type PathParameters = {
       *   // ID of pet that needs to be updated
       *   // [required]
       *   petId: number
       * }
       * ```
       *
       * ---
       *
       * **RequestBody**
       * ```ts
       * type RequestBody = {
       *   // Updated name of the pet
       *   name?: string
       *   // Updated status of the pet
       *   status?: string
       * }
       * ```
       *
       * ---
       *
       * **Response**
       * ```ts
       * type Response = unknown
       * ```
       */
      updatePetWithForm<Config extends Alova2MethodConfig<unknown>>(
        config: Config & {
          pathParams: {
            /**
             * ID of pet that needs to be updated
             * [required]
             */
            petId: number;
          };
          data: {
            /**
             * Updated name of the pet
             */
            name?: string;
            /**
             * Updated status of the pet
             */
            status?: string;
          };
        }
      ): Alova2Method<unknown, 'pet.updatePetWithForm', Config>;
      /**
       * ---
       *
       * [DELETE] Deletes a pet
       *
       * **path:** /pet/{petId}
       *
       * ---
       *
       * **Path Parameters**
       * ```ts
       * type PathParameters = {
       *   // Pet id to delete
       *   // [required]
       *   petId: number
       * }
       * ```
       *
       * ---
       *
       * **Response**
       * ```ts
       * type Response = unknown
       * ```
       */
      deletePet<Config extends Alova2MethodConfig<unknown>>(
        config: Config & {
          pathParams: {
            /**
             * Pet id to delete
             * [required]
             */
            petId: number;
          };
        }
      ): Alova2Method<unknown, 'pet.deletePet', Config>;
      /**
       * ---
       *
       * [POST] uploads an image
       *
       * **path:** /pet/{petId}/uploadImage
       *
       * ---
       *
       * **Path Parameters**
       * ```ts
       * type PathParameters = {
       *   // ID of pet to update
       *   // [required]
       *   petId: number
       * }
       * ```
       *
       * ---
       *
       * **RequestBody**
       * ```ts
       * type RequestBody = {
       *   // Additional data to pass to server
       *   additionalMetadata?: string
       *   // file to upload
       *   file?: string
       * }
       * ```
       *
       * ---
       *
       * **Response**
       * ```ts
       * type Response = {
       *   code?: number
       *   type?: string
       *   message?: string
       *   test?: string
       * }
       * ```
       */
      uploadFile<Config extends Alova2MethodConfig<ApiResponse1>>(
        config: Config & {
          pathParams: {
            /**
             * ID of pet to update
             * [required]
             */
            petId: number;
          };
          data: {
            /**
             * Additional data to pass to server
             */
            additionalMetadata?: string;
            /**
             * file to upload
             */
            file?: string;
          };
        }
      ): Alova2Method<ApiResponse1, 'pet.uploadFile', Config>;
    };
    store: {
      /**
       * ---
       *
       * [GET] Returns pet inventories by status
       *
       * **path:** /store/inventory
       *
       * ---
       *
       * **Response**
       * ```ts
       * type Response = object
       * ```
       */
      getInventory<Config extends Alova2MethodConfig<object>>(
        config?: Config
      ): Alova2Method<object, 'store.getInventory', Config>;
      /**
       * ---
       *
       * [POST] Place an order for a pet
       *
       * **path:** /store/order
       *
       * ---
       *
       * **RequestBody**
       * ```ts
       * type RequestBody = {
       *   id?: number
       *   petId?: number
       *   quantity?: number
       *   shipDate?: string
       *   // Order Status
       *   status?: 'placed' | 'approved' | 'delivered'
       *   complete?: boolean
       * }
       * ```
       *
       * ---
       *
       * **Response**
       * ```ts
       * type Response = {
       *   id?: number
       *   petId?: number
       *   quantity?: number
       *   shipDate?: string
       *   // Order Status
       *   status?: 'placed' | 'approved' | 'delivered'
       *   complete?: boolean
       *   test?: string
       * }
       * ```
       */
      placeOrder<Config extends Alova2MethodConfig<Order1>>(
        config: Config & {
          data: Order;
        }
      ): Alova2Method<Order1, 'store.placeOrder', Config>;
      /**
       * ---
       *
       * [GET] Find purchase order by ID
       *
       * **path:** /store/order/{orderId}
       *
       * ---
       *
       * **Path Parameters**
       * ```ts
       * type PathParameters = {
       *   // ID of pet that needs to be fetched
       *   // [required]
       *   orderId: number
       * }
       * ```
       *
       * ---
       *
       * **Response**
       * ```ts
       * type Response = {
       *   id?: number
       *   petId?: number
       *   quantity?: number
       *   shipDate?: string
       *   // Order Status
       *   status?: 'placed' | 'approved' | 'delivered'
       *   complete?: boolean
       *   test?: string
       * }
       * ```
       */
      getOrderById<Config extends Alova2MethodConfig<Order1>>(
        config: Config & {
          pathParams: {
            /**
             * ID of pet that needs to be fetched
             * [required]
             */
            orderId: number;
          };
        }
      ): Alova2Method<Order1, 'store.getOrderById', Config>;
      /**
       * ---
       *
       * [DELETE] Delete purchase order by ID
       *
       * **path:** /store/order/{orderId}
       *
       * ---
       *
       * **Path Parameters**
       * ```ts
       * type PathParameters = {
       *   // ID of the order that needs to be deleted
       *   // [required]
       *   orderId: string
       * }
       * ```
       *
       * ---
       *
       * **Response**
       * ```ts
       * type Response = unknown
       * ```
       */
      deleteOrder<Config extends Alova2MethodConfig<unknown>>(
        config: Config & {
          pathParams: {
            /**
             * ID of the order that needs to be deleted
             * [required]
             */
            orderId: string;
          };
        }
      ): Alova2Method<unknown, 'store.deleteOrder', Config>;
    };
    user: {
      /**
       * ---
       *
       * [POST] Create user
       *
       * **path:** /user
       *
       * ---
       *
       * **RequestBody**
       * ```ts
       * type RequestBody = {
       *   id?: number
       *   username?: string
       *   firstName?: string
       *   lastName?: string
       *   email?: string
       *   password?: string
       *   phone?: string
       *   // User Status
       *   userStatus?: number
       * }
       * ```
       *
       * ---
       *
       * **Response**
       * ```ts
       * type Response = unknown
       * ```
       */
      createUser<Config extends Alova2MethodConfig<unknown>>(
        config: Config & {
          data: User;
        }
      ): Alova2Method<unknown, 'user.createUser', Config>;
      /**
       * ---
       *
       * [POST] Creates list of users with given input array
       *
       * **path:** /user/createWithArray
       *
       * ---
       *
       * **RequestBody**
       * ```ts
       * type RequestBody = Array<{
       *   id?: number
       *   username?: string
       *   firstName?: string
       *   lastName?: string
       *   email?: string
       *   password?: string
       *   phone?: string
       *   // User Status
       *   userStatus?: number
       * }>
       * ```
       *
       * ---
       *
       * **Response**
       * ```ts
       * type Response = unknown
       * ```
       */
      createUsersWithArrayInput<Config extends Alova2MethodConfig<unknown>>(
        config: Config & {
          data: User[];
        }
      ): Alova2Method<unknown, 'user.createUsersWithArrayInput', Config>;
      /**
       * ---
       *
       * [POST] Creates list of users with given input array
       *
       * **path:** /user/createWithList
       *
       * ---
       *
       * **RequestBody**
       * ```ts
       * type RequestBody = Array<{
       *   id?: number
       *   username?: string
       *   firstName?: string
       *   lastName?: string
       *   email?: string
       *   password?: string
       *   phone?: string
       *   // User Status
       *   userStatus?: number
       * }>
       * ```
       *
       * ---
       *
       * **Response**
       * ```ts
       * type Response = unknown
       * ```
       */
      createUsersWithListInput<Config extends Alova2MethodConfig<unknown>>(
        config: Config & {
          data: User[];
        }
      ): Alova2Method<unknown, 'user.createUsersWithListInput', Config>;
      /**
       * ---
       *
       * [GET] Logs user into the system
       *
       * **path:** /user/login
       *
       * ---
       *
       * **Query Parameters**
       * ```ts
       * type QueryParameters = {
       *   // The password for login in clear text
       *   // [required]
       *   password: string
       * }
       * ```
       *
       * ---
       *
       * **Response**
       * ```ts
       * type Response = string
       * ```
       */
      loginUser<Config extends Alova2MethodConfig<string>>(
        config: Config & {
          params: {
            /**
             * The password for login in clear text
             * [required]
             */
            password: string;
          };
        }
      ): Alova2Method<string, 'user.loginUser', Config>;
      /**
       * ---
       *
       * [GET] Logs out current logged in user session
       *
       * **path:** /user/logout
       *
       * ---
       *
       * **Response**
       * ```ts
       * type Response = unknown
       * ```
       */
      logoutUser<Config extends Alova2MethodConfig<unknown>>(
        config?: Config
      ): Alova2Method<unknown, 'user.logoutUser', Config>;
      /**
       * ---
       *
       * [GET] Get user by user name
       *
       * **path:** /user/{username}
       *
       * ---
       *
       * **Path Parameters**
       * ```ts
       * type PathParameters = {
       *   // The name that needs to be fetched. Use user1 for testing.
       *   // [required]
       *   username: string
       * }
       * ```
       *
       * ---
       *
       * **Response**
       * ```ts
       * type Response = {
       *   id?: number
       *   username?: string
       *   firstName?: string
       *   lastName?: string
       *   email?: string
       *   password?: string
       *   phone?: string
       *   // User Status
       *   userStatus?: number
       *   test?: string
       * }
       * ```
       */
      getUserByName<Config extends Alova2MethodConfig<User1>>(
        config: Config & {
          pathParams: {
            /**
             * The name that needs to be fetched. Use user1 for testing.
             * [required]
             */
            username: string;
          };
        }
      ): Alova2Method<User1, 'user.getUserByName', Config>;
      /**
       * ---
       *
       * [PUT] Updated user
       *
       * **path:** /user/{username}
       *
       * ---
       *
       * **Path Parameters**
       * ```ts
       * type PathParameters = {
       *   // name that need to be deleted
       *   // [required]
       *   username: string
       * }
       * ```
       *
       * ---
       *
       * **RequestBody**
       * ```ts
       * type RequestBody = {
       *   id?: number
       *   username?: string
       *   firstName?: string
       *   lastName?: string
       *   email?: string
       *   password?: string
       *   phone?: string
       *   // User Status
       *   userStatus?: number
       * }
       * ```
       *
       * ---
       *
       * **Response**
       * ```ts
       * type Response = unknown
       * ```
       */
      updateUser<Config extends Alova2MethodConfig<unknown>>(
        config: Config & {
          pathParams: {
            /**
             * name that need to be deleted
             * [required]
             */
            username: string;
          };
          data: User;
        }
      ): Alova2Method<unknown, 'user.updateUser', Config>;
      /**
       * ---
       *
       * [DELETE] Delete user
       *
       * **path:** /user/{username}
       *
       * ---
       *
       * **Path Parameters**
       * ```ts
       * type PathParameters = {
       *   // The name that needs to be deleted
       *   // [required]
       *   username: string
       * }
       * ```
       *
       * ---
       *
       * **Response**
       * ```ts
       * type Response = unknown
       * ```
       */
      deleteUser<Config extends Alova2MethodConfig<unknown>>(
        config: Config & {
          pathParams: {
            /**
             * The name that needs to be deleted
             * [required]
             */
            username: string;
          };
        }
      ): Alova2Method<unknown, 'user.deleteUser', Config>;
    };
  }

  var Apis: APIS;
}
