import { Observable } from 'rxjs/Observable';
import { RpcExceptionsHandler } from '../exceptions/rpc-exceptions-handler';
export declare class RpcProxy {
  create(
    targetCallback: (...args) => Promise<Observable<any>>,
    exceptionsHandler: RpcExceptionsHandler,
  ): (...args) => Promise<Observable<any>>;
}
