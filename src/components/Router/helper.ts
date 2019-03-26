import * as pathToRegexp from 'path-to-regexp';

export interface Route<T = undefined> {
  regexPath: pathToRegexp.Path;
  generatePath(params: T): string;
  component(params: Record<string, string> | null): JSX.Element;
}

/**
 * 指定したpathから正規表現を用いてパラメータをobjectに変換する
 * @param currentPath 指定するpath
 * @param regexPath パース用の正規表現（例： /room/:roomId)
 * @returns パースされたパラメータのオブジェクト
 *
 * 例： toParams(/room/test, /room/:roomId) -> {roomId: test}
 */
export const toParams = (
  currentPath: string,
  regexPath: pathToRegexp.Path,
): Record<string, string> | null => {
  const keys: pathToRegexp.Key[] = [];
  const result = pathToRegexp(regexPath, keys).exec(currentPath);

  if (!result) {
    return null;
  }

  const params: Record<string, string> = keys.reduce(
    (previous, current, i) =>
      Object.assign(previous, { [current.name]: result[i + 1] }),
    {},
  );
  return params;
};
