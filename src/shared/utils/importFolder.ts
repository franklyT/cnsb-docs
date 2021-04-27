export function importFolder(folder: any): any {
    let files: any = {};
    folder.keys().map((item: any) => { files[item.replace('./', '')] = folder(item); });
    return files;
}

export default importFolder;