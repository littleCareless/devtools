import * as vscode from 'vscode';
import * as statusBar from '../components/statusBar';
import generateApi from '../functions/generateApi';
import readConfig from '../functions/readConfig';
import { CONFIG_POOL } from '../modules/Configuration';
import { getFileNameByPath } from '../utils';
export default {
  commandId: 'alova.refresh',
  handler: (context: vscode.ExtensionContext) => async () => {
    // 加载
    statusBar.loading();
    // 获取当前工作区
    try {
      // 读取配置文件
      await readConfig();
      // 读取alova.son实现自动补全
      // 生成api文件
      for (const configuration of CONFIG_POOL) {
        //读取缓存文件
        await configuration.readAlovaJson();
        const outputPathArr = configuration.getAllOutputPath();
        const templateTypeArr = configuration.getAllTemplateType();
        const openApiData = await configuration.getAllOpenApiData();
        const generatorConfigArr = configuration.config.generator;
        await Promise.all(
          outputPathArr.map((outputPath, idx) => {
            // 生成api文件
            return generateApi(
              configuration.workspaceRootDir,
              outputPath,
              openApiData[idx],
              generatorConfigArr[idx],
              templateTypeArr[idx] ?? 'commonjs',
              true
            );
          })
        );
        vscode.window.showInformationMessage(`${getFileNameByPath(configuration.workspaceRootDir)}刷新api文件成功!`);
      }
    } catch (error: any) {
      console.log(error, 41);

      vscode.window.showErrorMessage(error.message);
    }
    // 完成加载
    statusBar.reset();
  }
};
