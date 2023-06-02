import { Cache, Reference, StoreObject, MissingTree } from "../../cache";
import { OperationVariables } from "../../core";
export interface UseFragmentOptions<TData, TVars> extends Omit<Cache.DiffOptions<TData, TVars>, "id" | "query" | "optimistic" | "previousResult" | "returnPartialData">, Omit<Cache.ReadFragmentOptions<TData, TVars>, "id" | "returnPartialData"> {
    from: StoreObject | Reference | string;
    optimistic?: boolean;
    returnPartialData?: boolean;
}
export interface UseFragmentResult<TData> {
    data: TData | undefined;
    complete: boolean;
    missing?: MissingTree;
}
export declare function useFragment_experimental<TData = any, TVars = OperationVariables>(options: UseFragmentOptions<TData, TVars>): UseFragmentResult<TData>;
//# sourceMappingURL=useFragment.d.ts.map