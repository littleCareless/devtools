///<reference path='./globals.d.ts' />
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
export default {
  'tag.增加pet2': ['POST', '/pet'],
  'pet.updatePet': ['PUT', '/pet'],
  'pet.findPetsByStatus': ['GET', '/pet/findByStatus'],
  'pet.findPetsByTags': ['GET', '/pet/findByTags'],
  'pet.getPetById': ['GET', '/pet/{petId}'],
  'pet.updatePetWithForm': ['POST', '/pet/{petId}'],
  'pet.deletePet': ['DELETE', '/pet/{petId}'],
  'pet.uploadFile': ['POST', '/pet/{petId}/uploadImage'],
  'store.getInventory': ['GET', '/store/inventory'],
  'store.placeOrder': ['POST', '/store/order'],
  'store.getOrderById': ['GET', '/store/order/{orderId}'],
  'store.deleteOrder': ['DELETE', '/store/order/{orderId}'],
  'user.createUser': ['POST', '/user'],
  'user.createUsersWithArrayInput': ['POST', '/user/createWithArray'],
  'user.createUsersWithListInput': ['POST', '/user/createWithList'],
  'user.loginUser': ['GET', '/user/login'],
  'user.logoutUser': ['GET', '/user/logout'],
  'user.getUserByName': ['GET', '/user/{username}'],
  'user.updateUser': ['PUT', '/user/{username}'],
  'user.deleteUser': ['DELETE', '/user/{username}']
};
