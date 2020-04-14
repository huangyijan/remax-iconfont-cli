
export const replaceNames = (content: string, names: string[]) => {
  return content.replace(/#names#/g, names.join(`' | '`));
};

export const replaceSize = (content: string, size: number) => {
  return content.replace(/#size#/g, String(size));
};

export const replacePlatform = (content: string, platform: string) => {
  return content.replace(/#platform#/g, platform);
};

export const replaceIsRpx = (content: string, useRpx: boolean) => {
  return content
    .replace(/#rpx-1:(.+?):#/g, useRpx ? '$1' : '')
    .replace(/#rpx-0:(.+?):#/g, useRpx ? '' : '$1');
};
