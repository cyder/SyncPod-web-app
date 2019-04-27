import * as pathToRegexp from 'path-to-regexp';

import { Drop } from 'util/typescript';

import InternalLink, {
  InternalLinkProps,
} from 'components/atoms/Links/InternalLink';

export default class Route<T extends object = {}> {
  public constructor(
    path: pathToRegexp.Path,
    component: (params: T) => JSX.Element,
  ) {
    this.path = path;
    this.component = component;
    this.Link = this.Link.bind(this);
  }

  private path: pathToRegexp.Path;

  private component: (params: T) => JSX.Element;

  /**
   * このルートのページコンポーネントを生成する
   * @param params コンポーネント作成に必要なパラメータ
   * @returns - 生成されたコンポーネント
   */
  public generateComponent(params: T): JSX.Element {
    return this.component(params);
  }

  /**
   * 正規表現の実行
   * @currentPath currentPath 現在のpath
   * @returns - matchしたらparamsのobjectを、matchしなかったらnullを返す。
   */
  public execRegexp(currentPath: string): T | null {
    const keys: pathToRegexp.Key[] = [];
    const result = pathToRegexp(this.path, keys).exec(currentPath);

    if (!result) {
      return null;
    }

    const params = keys.reduce(
      (previous, current, i) =>
        Object.assign(previous, { [current.name]: result[i + 1] }),
      {},
    );
    return params as T;
  }

  /**
   * 遷移用のLinkComponentを生成する
   * @param props 遷移に必要なパラメータ
   * @returns - LinkComponent
   */
  public Link(props: LinkProps<T>): JSX.Element | null {
    const href = this.generatePath(props.params);

    return href ? InternalLink({ ...props, to: href }) : null;
  }

  /**
   * 遷移用のurlを生成する
   * @param params 遷移に必要なパラメータ
   * @returns - urlのstring、指定されたpathがstring型でなければnullを返す
   */
  private generatePath(params: T): string | null {
    if (typeof this.path !== 'string') {
      return null;
    }

    const toPath = pathToRegexp.compile<T>(this.path);
    return toPath(params);
  }
}

interface LinkProps<T> extends Drop<InternalLinkProps, 'to'> {
  params: T;
}
