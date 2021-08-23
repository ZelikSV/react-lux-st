declare module 'react-router-named-routes' {
  type IRoutes = {
    props: {
      path: string;
    };
    name: string;
    children: IRoutes[];
  };

  export class NamedURLResolverClass {
    routesMap: Record<string, unknown>;
    resolve(name: string, params: Record<string, unknown>): string;
    mergeRouteTree(routes: IRoutes | IRoutes[], prefix: string): void;
    reset(): void;
  }
  export const NamedURLResolver = new NamedURLResolverClass();

  export function MonkeyPatchNamedRoutesSupport(routes: IRoutes | IRoutes[], basename: string): void;
  export { MonkeyPatchNamedRoutesSupport as FixNamedRoutesSupport };

  export function setNamedURLResolver(resolver: NamedURLResolverClass): void;

  export const resolve = NamedURLResolver.resolve.bind(NamedURLResolver);
  export function formatRoute(routePath: string, params: Record<string, unknown>): string;
}
