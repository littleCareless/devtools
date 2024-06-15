import * as vscode from 'vscode';
import generateApi from '../functions/generateApi';
import { CONFIG_POOL } from '../modules/Configuration';
// 用于自动生成
export default {
  commandId: 'alova.generateApi',
  handler: (context: vscode.ExtensionContext) => async () => {
    // 获取当前工作区
    try {
      // 生成api文件
      for (const configuration of CONFIG_POOL) {
        const outputPathArr = configuration.getAllOutputPath();
        const templateTypeArr = configuration.getAllTemplateType();
        const openApiData = await configuration.getAllOpenApiData();
        await Promise.all(
          outputPathArr.map((outputPath, idx) => {
            // 生成api文件
            return generateApi(
              configuration.workspaceRootDir,
              outputPath,
              openApiData[idx],
              templateTypeArr[idx] ?? 'commonjs'
            );
          })
        );
        vscode.window.showInformationMessage('生成api文件成功!');
      }
    } catch (error: any) {
      vscode.window.showErrorMessage(error.message);
    }
  }
};
