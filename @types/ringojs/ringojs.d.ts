/**
 * Tyngo - Typescript for RingoJS application development.
 * 
 * @author Michel Pérez Saavedra
 */

declare function addToClasspath(any);
declare function clearInterval(id:any):any;
declare function setInterval(callback:(...args:any[]) => void, delay:Number,  ...args:any[]):any;

declare function setTimeout(callback:(...args:any[]) => void, delay:Number,  ...args:any[]):any;
declare function clearTimeout(timeoutId: any):void;

declare function defineClass(clazz:any):any;
declare var arguments:String[];
declare var environment:any;

declare function gc();
declare function getRepository(path:String):any; //TODO: define org.ringojs.repository.FileRepository
declare function getResource(path: String):any;//TODO: define org.ringojs.repository.Resource


declare function print(...arg:any[]);
declare function privileged(func: Function): any;
declare function quit()

declare function seal(obj: any);
declare function spawn(func: Function);
declare function sync(func: Function, obj?: any): Function;


/**
 * require function constructor
 */
interface RingoRequireFunction {
    (id: string): any;
}

/**
 * aditional data returned by the require function
 */
interface RingoRequire extends RingoRequireFunction {
    extensions: any;
    main:any;
    paths:any[];
}

/**
 * basic information of the included module
 */
interface RingoModule {
    directory:string;
    exports:any;
    id:any;
    path:string;
    resolve(path:string):string;
    singleton(id:string, factory?:Function):any;
    uri: any;
}

// include function
interface RingoIncludeFunction {
    (moduleName: string): any;
}
// include returned data
interface RingoInclude extends RingoIncludeFunction {

}

interface Globals {

}

declare var require: RingoRequire;
declare var include: RingoInclude;
declare var load: RingoInclude;
declare var exports: any;
declare var module: RingoModule;
declare var global: Globals;
declare var Packages: any;


declare module "ringo/utils/strings" {
    import {ByteArray} from "binary";

    namespace internal {
        export function Sorter(field: String, order: Number): Function;
        export function b16decode(str: String, encoding: Number): String|ByteArray;
        export function b16encode(str: String, encoding: Number): ByteArray;
        export function b64decode(str: String, encoding: Number): ByteArray;
        export function b64encode(str: String, encoding: Number): ByteArray;
        export function capitalize(the: String, amount: Number): String;
        export function compose(one: String): String;
        export function contains(str: String, substring: String, fromIndex? : Number): boolean;
        export function count(str: String, pattern: String): Number;
        export function digest(str: String, algorithm: String): String;
        export function endsWith(str: String, substring: String): boolean;
        export function entitize(str: String): String;
        export function escapeHtml(str: String): String;
        export function escapeRegExp(str: String): String;
        export function format(format: String): String;
        export function getCommonPrefix(str1: String, str2: String): String;
        export function group(str1: String, interval: Number, str2: String, ignoreWhiteSpace: boolean): String;
        export function isAlpha(str: String): boolean;
        export function isAlphanumeric(str: String): boolean;
        export function isDateFormat(str: String): boolean;
        export function isEmail(str: String): boolean;
        export function isFileName(str: String): boolean;
        export function isFloat(str: String): boolean;
        export function isHexColor(str: String): boolean;
        export function isInt(str: String): boolean;
        export function isLowerCase(str: String): boolean;
        export function isNumeric(str: String): boolean;
        export function isUpperCase(str: String): boolean;
        export function isUrl(str: String): boolean;
        export function join(str: String, append: String, glue: String): String;
        export function pad(str: String, fill: String, length: Number, mode: Number): String;
        export function random(len: Number, mode: Number): String;
        export function repeat(str: String, num: Number): String;
        export function startsWith(str: String, substring: String): boolean;
        export function stripTags(str: String): String;
        export function titleize(str: String): String;
        export function toAlphanumeric(str: String): String;
        export function toCamelCase(str: String): String;
        export function toDashes(str: String): String;
        export function toDate(string: String, format: String, timezone?: any): any;
        export function toFileName(str: String): boolean;
        export function toHexColor(str: String): String;
        export function toUnderscores(str: String): String;
        export function unwrap(flag: boolean, replacement: String): String;
        export function y64decode(str: String, encoding: String): String;
        export function y64encode(str: String, encoding: String): String;
    }
    export = internal;
}

declare module "ringo/utils/objects" {
    namespace internal {
        export function clone(object: any, cloned: any, recursive?: boolean): any;
        export function merge(...obj: any[]): any;
    }
    export = internal;
}

declare module "ringo/utils/numbers" {
    namespace internal {
        export function format(number: Number, fmt: String, locale?: String): String;
        export function times(num: Number, fun: Function);
    }
    export = internal;
}

declare module "ringo/utils/http" {
    import {JsgiResponse} from "ringo/jsgi/response";
    import {Binary} from "binary";

    namespace internal {
        export function BufferFactory(data: any, encoding: String): any;
        export function TempFileFactory(data: any, encoding: String): any;
        export function getMimeParameter(headerValue: String, paramName: String);
        export function isFileUpload(contentType: String): boolean;
        export function isUrlEncoded(contentType: String): boolean;
        export function mergeParameter(params: String, name: String, value: String): any;
        export function parseFileUpload(request: JsgiResponse, params?: any, encoding?: String, streamFactory?: Function): any;
        export function parseParameters(input: String|Binary, params: any, encoding: String): any;
        export function setCookie(key: String, value: String, days?: String, options?: any): String;
        export function urlEncode(object: any): String;

        export class Headers {
            constructor(headers: any);
            add(name: String, value: String)
            contains(name: String): boolean;
            get(name: String): any;
            set(name: String, value: String);
            toString(): String;
            unset(name: String);
        }

        export class ResponseFilter {
            constructor(body: any, filter: Function);
            forEach(fn: Function);
        }
    }
    export = internal;
}

declare module "ringo/utils/files" {
    namespace internal {
        export function createTempFile(prefix: String, suffix: String, directory: String): File;
        export function isHidden(file: String): boolean;
        export function resolveId(parent: String, child: String): any;
        export function resolveUri(...arbitrary): any;

        export var roots: any[];
        export var separator: string;
    }
    export = internal;
}

declare module "ringo/utils/dates" {
    namespace internal {
        export function add(date: Date, delta: Number, unit?: String): Date;
        export function after(a: Date, b: Date): boolean;
        export function before(a: Date, b: Date): boolean;
        export function checkDate(fullYear: Number, month: Number, day: Number): boolean;
        export function compare(a: Date, b: Date): Number;
        export function dayOfYear(date: Date): Number;
        export function daysInFebruary(date: Date): Number;
        export function daysInMonth(date: Date): Number;
        export function daysInYear(date: Date): Number;
        export function diff(a: Date, b: Date, unit?: String): Number|any;
        export function firstDayOfWeek(locale?: String|any): Number;
        export function format(the: Date, format: String, locale?:String|any, timezone?:String|any): String;
        export function fromUTCDate(year: String, month: String, date: String, hour: String, minute: String, second: String): Date;
        export function inPeriod(date: Date, periodStart: Date, periodEnd: Date, periodStartOpen: boolean, periodEndOpen: boolean): boolean;
        export function isLeapYear(date: Date): boolean;
        export function overlapping(aStart: Date, aEnd: Date, bStart: Date, bEnd: Date): boolean;
        export function parse(str: String): Date;
        export function quarterInFiscalYear(date: Date, fiscalYearStart: Date): Number;
        export function quarterInYear(date: Date): Number;
        export function resetDate(date: Date): Date;
        export function resetTime(date: Date): Date;
        export function secondOfDay(date: Date): Number;
        export function toISOString(date: Date, withTime: boolean, withTimeZone: boolean, withSeconds: boolean, withMilliseconds: boolean): String;
        export function weekOfMonth(date: Date, locale: String|any): Number;
        export function weekOfYear(date: Date, locale: String| any): Number;
        export function yearInCentury(date: Date): Number;
    }
    export = internal;
}

declare module "ringo/utils/arrays" {
    namespace internal {
        export function contains(array: Array<any>, val: any);
        export function intersection(array1: Array<any>,...array2: Array<any>);
        export function max(array: Array<any>);
        export function min(array: Array<any>);
        export function partition(fn: Function);
        export function peek(array: Array<any>);
        export function remove(array: Array<any>, val: any);
        export function union(array1: Array<any>, ...array2: Array<any>);
    }
    export = internal;
}

declare module "ringo/jsgi/response" {
    namespace internal {
        export function addHeaders(headers: any): JsgiResponse;
        export function bad(): JsgiResponse;
        export function created(): JsgiResponse;
        export function error(): JsgiResponse;
        export function forbidden(): JsgiResponse;
        export function gone(): JsgiResponse;
        export function html(...html: String[]): JsgiResponse;
        export function json(object: any): JsgiResponse;
        export function jsonp(callback: String, object: any): JsgiResponse;
        export function notFound(): JsgiResponse;
        export function notModified(functionName: String): JsgiResponse;
        export function ok(): JsgiResponse;
        export function redirect(location: String): JsgiResponse;
        export function setCharset(charsetName: String): JsgiResponse;
        export function setStatus(code): JsgiResponse;
        export function static(resource: String, contentType: String|any): JsgiResponse;
        export function text(...text: String[]): JsgiResponse;
        export function unauthorized(): JsgiResponse;
        export function unavailable(): JsgiResponse;
        export function xml(xml: String|any): JsgiResponse;

        export class JsgiResponse {
            body: any;
            headers: any;
            status: any;
            addHeaders(headers);
            bad();
            created();
            error();
            forbidden();
            gone();
            html(...html);
            json(object);
            jsonp(callback, object);
            notFound();
            notModified();
            ok();
            redirect(location);
            setCharset(charsetName);
            setStatus(code);
            text(...text);
            unauthorized();
            unavailable();
            xml(xml);
        }

    }
    export = internal;
}

declare module "ringo/jsgi/connector" {
    import {Binary} from "binary";

    namespace internal {
        export function handleRequest(moduleId:String, functionObj: Function|String, request: any): any;

        export class AsyncReponse {
            constructor (request: any, timeout: Number, autoflush: boolean);
            close();
            flush(): AsyncReponse;
            start(status: Number, headers: any): AsyncReponse;
            write(data: String|Binary, encoding?: String): AsyncReponse;
        }
    }
    export = internal;
}

declare module "ringo/zip" {
    import {Stream} from "io";

    namespace internal {
        export function ZipIterator(resource: Stream|String): any;

        export class ZipFile {
            constructor(path: String);
            entries: String[];
            close();
            getSize(name: String): any;
            getTime(name: String): any;
            isDirectory(name: String): boolean;
            isFile(name: String): boolean;
            open(name: String): Stream;
        }
    }
    export = internal;
}

declare module "ringo/worker" {
    import {Promise} from "ringo/promise";

    namespace internal {
        export class Worker {
            constructor(workerId: String);
            postMessage(data, syncCallbacks?: boolean);
            terminate();
        }

        export class WorkerPromise {
            constructor(moduleId: String, message: any, syncCallbacks?: any);
            then(callback?: Function, errback?: Function): Promise;
            wait(timeout: Number): Promise;
        }
    }
    export = internal;
}

declare module "ringo/term" {
    import {Stream, TextStream} from "io";

    namespace internal {
        export function write(...args);
        export function writeln(...args)

        export var BLACK;
        export var BLUE;
        export var BOLD;
        export var CYAN;
        export var GREEN;
        export var INVERSE;
        export var MAGENTA;
        export var ONBLACK;
        export var ONBLUE;
        export var ONCYAN;
        export var ONGREEN;
        export var ONMAGENTA;
        export var ONRED;
        export var ONWHITE;
        export var ONYELLOW;
        export var RED;
        export var RESET;
        export var UNDERLINE;
        export var WHITE;
        export var YELLOW;

        export class TermWriter {
            constructor(out: Stream|TextStream);
            isEnabled(): boolean;
            setEnabled(flag: boolean): boolean;
            write(...args);
            writeln(...args);
        }
    }
    export = internal;
}

declare module "ringo/subprocess" {
    import {Stream} from "io";

    namespace internal {
        export interface IProcessArgs {
            command:String|String[];
            dir?:any;
            env?:any;
            binary?:boolean;
            encoding?:any;
        }

        export function command(command, arguments?: String|String[], options?:any): String;
        export function createProcess(args:IProcessArgs): Process;
        export function status(command, arguments?: String|String[], options?): Number;
        export function system(command, arguments?: String|String[], options?): NavigatorUserMedia;

        export class Process {
            stderr:Stream;
            stdin:Stream;
            stdout:Stream;
            connect(input: Stream, output: Stream, errput: Stream);
            kill();
            wait();
        }
    }
    export = internal;
}

declare module "ringo/shell" {
    namespace internal {
        export function printError(xcept: any, errors: Array<any>, verbose: Boolean);
        export function printResult(value, writer);
        export function quit(status: Number);
        export function read();
        export function readln(prompt: String, echoChar: String);
        export function start(engine);
        export function write();
        export function writeln();
    }

    export = internal;
}

declare module "ringo/promise" {
    namespace internal {
        export class Deferred {
            resolve(result: any, isError: boolean);
            promise: any;
        }

        export class Promise {
            then(callback?: Function, errback?: Function): Promise;
            wait(timeout: Number): Promise;
        }

        export class PromiseList {
            promise: any;
        }
    }
    export = internal;
}

declare module "ringo/profiler" {
    namespace internal {
        export interface IProfile {
            result: any;
            error: Error;
            profile: Profiler;
        }

        export function profile(func: Function, maxFrames: Number): IProfile;

        export class Profiler {
            formatResult(maxFrames);
            getFrames();
            getScriptFrame(cx, script);
            toString();
        }
    }
    export = internal;
}

declare module "ringo/parser" {
    namespace internal {
        export function getName(node);
        export function getTypeName(node);
        export function isName(node);

        export interface IParserOptions {
            languageVersion?: Number;
            parseComments?: boolean;
        }

        export class Parser {
            constructor(options?:IParserOptions);
            parse(script: String|any, encoding?: String):any;
            visit(script: String|any, visitorFunction: Function, encoding?: String): boolean;
        }

        export class Token {
            getName(node: any): String;
            getTypeName(node: any): String;
            isName(node: any): String;
        }
    }
    export = internal;
}

declare module "ringo/mustache" {
    namespace internal {
        export var name: String;
        export var version: String;

        export function to_html(template: String, data: any);
    }
    export = internal;
}

declare module "ringo/mime" {
    namespace internal {
        export var MIME_TYPES: any;
        export function mime(fileName: String, fallback: String): String;
    }
    export = internal;
}

declare module "ringo/markdown" {
    namespace internal {
        export interface IMarkdownOptions {
            getLink(id): any;
            openTag(tagName: String, buffer: any):any;
        }

        export function process(text: String, extension: IMarkdownOptions|any): String;
    }
    export = internal;
}

declare module "ringo/logging" {
    namespace internal {
        export function getJavaStack(error: Error, prefix: String): String;
        export function getLogger(name: String): Logger;
        export function getScriptStack(error: Error, prefix: String): String;
        export function setConfig(resource: any, watchForUpdates: boolean);

        export class Logger {
            private constructor(name, impl);
            debug(...args);
            error(...args);
            info(...args);
            isDebugEnabled();
            isErrorEnabled();
            isInfoEnabled();
            isTraceEnabled();
            isWarnEnabled();
            trace(...args);
            warn(...args);
        }
    }
    export = internal;
}

declare module "ringo/jsdoc" {
    namespace internal {
        export function parseResource(resource: any): any[];

        export class ScriptRepository {
            constructor(path: String);
            exists(): boolean;
            getPath(): String;
            getScriptResource(path: String): any;
            getScriptResources(nested: boolean): any[];
        }
    }
    export = internal;
}

declare module "ringo/httpserver" {
    import {EventEmitter} from "ringo/events";
    import {ByteArray} from "binary";

    namespace internal {
        export function destroy(): Server;
        export function init(appPath?: String): Server;
        export function main(appPath): Server;
        export function start(): Server;
        export function stop(): Server;

        export interface IServerApplicationOptions {
            appName: String;
            appModule: String;
        }

        export interface IServerOptions {
            jettyConfig?: String;
            port?: Number;
            host?: String;
            sessions?: boolean;
            security?: boolean;
            cookieName?: String;
            cookieDomain?: String;
            httpOnlyCookies?: boolean;
            secureCookies?: boolean;
            virtualHosts?: any;
            mountpoint?: String;
            staticDir?: String;
            staticMountpoint?: String;
            appModule?: String;
            appName?: String;
        }


        export class Context {
            private constructor();
            addServlet(servletPath: String, servlet: any, initParams?: any);// TODO: implement javax.servlet.Servlet
            addWebSocket(path: String, onconnect: Function);
            serveApplication(app: String|IServerApplicationOptions, engine?: any);
            serveStatic(dir: String);
        }

        export class Server {
            constructor(options: IServerOptions);
            destroy();
            getContext(path, virtualHosts, options): Context;
            getDefaultContext(): Context;
            getJetty(): any;
            isRunning(): boolean;
            start();
            stop();
        }

        export class WebSocket extends EventEmitter {
            close();
            isOpen(): boolean;
            send(msg: String);
            sendBinary(bytearray: ByteArray, offset: Number, length: Number);
        }


    }
    export = internal;
}

declare module "ringo/httpclient" {
    import {Binary, ByteArray, ByteString} from "binary";
    import {Stream, TextStream} from "io";

    namespace internal {

        export interface IProxyObject {
            host: String,
            port: Number;
        }


        export interface IRequestOptions {
            url: String;
            method?: String;
            data?: String|Binary|any;
            headers?:any;
            username?:String;
            password?:String;
            proxy?:String|IProxyObject;
            contentType?:String| ByteString;
            binary?:boolean;
            followRedirect?:boolean;
            readTimeout?: Number;
            connectTimeout?: Number;
            complete?: (content:String|ByteString, status: any, contentType: any, exchange: Exchange)=>{};
            success?: (content:String|ByteString, status: any, contentType: any, exchange: Exchange)=>{};
            error?: (message:String, status: any, exchange: Exchange)=>{};
            beforeSend?: (content:String|ByteString, status: any, contentType: any, exchange: Exchange)=>{};
        }

        export function del(url: String, data?: String|any, success?: Function, error?: Function);
        export function get(url: String, data?: String|any, success?: Function, error?: Function);
        export function post(url: String, data?: String|any, success?: Function, error?: Function);
        export function put(url: String, data?: String|any, success?: Function, error?: Function);
        export function request(options: IRequestOptions): Exchange;

        export class BinaryPart {
            constructor(data: String, charset: String, filename: String);
        }

        export class TextPart {
            constructor(data: String|TextStream, charset: String, filename: String);
        }

        export class Exchange {
            constructor(url: String, options: any, callbacks: any);
            connection;
            content: String;
            contentBytes: ByteArray;
            contentLength: Number;
            contentType: any;
            cookies: any;
            done: boolean;
            encoding: any;
            headers: any;
            message: any;
            status: any;
            url: any;
        }
    }
    export = internal;
}

declare module "ringo/events" {
    namespace internal {
        export class EventEmitter {
            constructor();
            emit(type: String, ...args: any[]): boolean;
            listeners(type: String): any[];
            on(type:String, listener: Function):EventEmitter;
            removeAllListeners(type: String):EventEmitter;
            removeListener(type: String, listener: Function): EventEmitter;
        }

        export class JavaEventEmitter extends EventEmitter{
            constructor();
            constructor(classOrInterface: any, eventMapping?: any);
            addListener(type: String, listener: Function): JavaEventEmitter;
            addSyncListener(type: String, listener: Function): JavaEventEmitter;
            impl: any;
        }
    }
    export = internal;
}

declare module "ringo/engine" {
    namespace internal {
        export function addHostObject(javaClass: any);
        export function addRepository(repo: any);
        export function addShutdownHook(funcOrObject: Function|any, sync: boolean);
        export function asJavaObject(object: any): any;
        export function asJavaString(object: any): String;
        export function createSandbox(modulePath, globals?:any, options?: any): any;
        export function getCurrentWorker(obj: any): any;
        export function getErrors(): any;
        export function getOptimizationLevel(): Number;
        export function getRepositories(): any;
        export function getRhinoContext(): any;
        export function getRhinoEngine(): any;
        export function getRingoHome(): any;
        export function getWorker(): any;
        export function setOptimizationLevel(level: Number)
        export var version: number[];
    }
    export = internal;
}

declare module "ringo/encoding" {
    import {Binary, ByteArray, ByteString} from "binary";

    namespace internal {
        export class Decoder {
            constructor();
            constructor(charset, strict, capacity);
            length: Number;
            clear();
            close();
            decode(bytes:Binary, start: Number, end: Number);
            hasPendingInput();
            read();
            readFrom(source:Binary);
            readLine(includeNewline: boolean);
            toString():String;
        }

        export class Encoder {
            constructor();
            constructor(charset, strict, capacity);
            length: Number;
            clear();
            close();
            encode(string: String, start: Number, end: Number);
            toByteArray(): ByteArray;
            toByteString(): ByteString;
            toString(): String;
            writeTo(sink);
        }
    }
    export = internal;
}

declare module "ringo/daemon" {
    namespace internal {
        export function destroy();
        export function init();
        export function start();
        export function stop();
    }
    export = internal;
}

declare module "ringo/concurrent" {
    namespace internal {
        export class Semaphore{
            constructor();
            constructor(permits?:Number);
            signal(permits?:Number);
            tryWait(timeout:Number, permits?:Number): boolean;
            wait(permits?:Number);
        }
    }
    export = internal;
}

declare module "ringo/buffer" {
    namespace internal {
        export class Buffer {
            constructor();
            constructor(...args);
            digest(algorithm: any): any;
            forEach(fn:Function);
            readonly length: Number;
            reset(): Buffer;
            toString():String;
            write(...args):Buffer;
            writeLn(...args):Buffer;
        }
    }
    export = internal;
}

declare module "ringo/base64" {
    import {ByteArray} from "binary";

    namespace internal {
        export function decode(str: String, encoding: String): String|ByteArray;
        export function encode(str: String, encoding: String): String|ByteArray;
    }
    export = internal;
}

declare module "ringo/args" {
    namespace internal {
        export class Parser {
            constructor();
            addOption(shortName: String, longName: String, argument: String, helpText: String);
            help(): String;
            parse(args: Array<any>, result: any): any;
        }
    }
    export = internal;
}

declare module "test" {
    namespace internal {
        export function getStackTrace(trace: any);
        export function getType(obj: any): String;
        export function jsDump(value: any, lvl?: String): String;
        export function run(scope:String|any, name?:String, writer?:any);
    }

    export = internal;
}

declare module "system" {
    import {TextStream} from "io";

    namespace  internal {
        export var args:String[];
        export var env:any;
        export var stderr: TextStream;
        export var stdin: TextStream;
        export var stdout: TextStream;


        export function exit(status:Number);
        export function print();
        export function print(...args:any[]);

    }
    export = internal;
}

declare module "net" {
    import {Stream} from "io";
    import {ByteArray, Binary} from "binary";

    namespace internal {
        export class Socket {
            bind(host: String, port: Number);
            close();
            connect(host: String, port:Number, timeout?:Number);
            getStream(): Stream;
            getTimeout(): Number;
            isBound(): boolean;
            isClosed(): boolean;
            isConnected(): boolean;
            localAddress(): any;
            remoteAddress(): any;
            setTimeout(timeout): Number;
        }

        export class ServerSocket extends Socket {
            accept(): Socket;
        }

        export class DatagramSocket extends Socket{
            disconnect();
            receive(length: Number, buffer: ByteArray);
            receiveFrom(length: Number, buffer: ByteArray): any;
            send(data: Binary);
            sendTo(host: String, port: Number, data: Binary);
        }


    }

    export = internal;
}

declare module "fs" {
    import {Stream, TextStream} from "io";
    import {Binary, ByteArray, ByteString} from "binary";

    namespace internal {
        export class Path {
            constructor();
            constructor(...args: any[]);
            from(target);
            join();
            listPaths();
            resolve();
            to(target);
            toString();
            valueOf();
        }

        export class Permission {
            constructor();
            constructor(permission:Number|any, constructor:any);
            toNumber():Number;
            update(permission:Number|any):any;
        }

        export function absolute(path:String): string;
        export function base(path: String, ext: String): String;
        export function canonical(path: String): String;
        export function changeGroup(path: String, group: String|Number);
        export function changeOwner(path: String, owner: String|Number);
        export function changePermissions(path: String, permissions: String|any);
        export function changeWorkingDirectory(path: String);
        export function copy(from: String, to: String);
        export function copyTree(from: String, to: String);
        export function directory(path: String): String;
        export function exists(path: String): boolean;
        export function extension(path: String): String;
        export function group(path: String);
        export function hardLink(source: String, target: String);
        export function isAbsolute(path: String): boolean;
        export function isDirectory(path: String): boolean;
        export function isFile(path: String): boolean;
        export function isLink(path: String): boolean;
        export function isReadable(path: String): boolean;
        export function isRelative(path: String): boolean;
        export function isWritable(path: String): boolean;
        export function iterate(path: String): any;
        export function join(...args:String[]);
        export function lastModified(path: String): Date;
        export function list(path: String): String[];
        export function listDirectoryTree(path: String): String[];
        export function listTree(path: String): String[];
        export function makeDirectory(path: String, permissions: any);
        export function makeTree(path: String);
        export function move(source: String, target: String);
        export function normal(path: String): String;
        export function open(path: String, options: String|any):Stream|TextStream;
        export function openRaw(path: String, options: String|any): Stream|TextStream;
        export function owner(path:String);
        export function path(): Path;
        export function permissions(path: String): Permission;
        export function read(path: String, options?: String|any): String|Binary;
        export function readLink(path: String): String|any;
        export function relative(source: String, target: String): String;
        export function remove(path: String);
        export function removeDirectory(path: String);
        export function removeTree(path: String);
        export function resolve(...paths: String[]): String;
        export function same(pathA: String, pathB: String): boolean;
        export function sameFilesystem(pathA: String, pathB: String): boolean;
        export function size(path: String): Number;
        export function split(path: String): Array<any>;
        export function symbolicLink(source: String, target: String): any;
        export function touch(path: String, mtime: Date);
        export function workingDirectory(): String;
        export function write(path: String, content: ByteArray|ByteString|String, options: any): ByteArray|ByteString;

    }
    export = internal;
}

declare module "io" {
    import {ByteArray, ByteString, Binary} from "binary";

    namespace internal {
        export class Stream{
            close(): void;
            closed(): boolean;
            copy(output: Stream):void;
            flush();
            forEach(fn: Function, thisObj?: any);
            inputStream: any; //TODO: wrap to java.io.InputStream
            outputStream: any; //TODO: wrap to java.io.InputStream
            read(maxBytes: Number): ByteString;
            readInto(buffer: ByteArray, begin: Number, end: Number): Number;
            readable(): boolean;
            seekable(): boolean;
            skip(num:Number):Number;
            unwrap();
            writable():boolean;
            write(source:Binary, begin:Number, end:Number):string;
        }

        export class TextStream{//} extends Stream{
            constructor();
            constructor(io:Stream, options: any, buflen?:Number);
            content: any;
            copy(output):TextStream;
            iterator():TextStream;
            next(): TextStream;
            print():TextStream;
            raw: any;
            read(): string;
            readLine(): string;
            readLines(): string[];
            write(...args:any[]):string;
            writeLines(line): TextStream;
            writeLines(line): TextStream;

            close(): void;
            closed(): boolean;
            flush();
            forEach(fn: Function, thisObj?: any);
            inputStream: any; //TODO: wrap to java.io.InputStream
            outputStream: any; //TODO: wrap to java.io.InputStream
            readInto(buffer: ByteArray, begin: Number, end: Number): Number;
            readable(): boolean;
            seekable(): boolean;
            skip(num:Number):Number;
            unwrap();
            writable():boolean;
        }
    }

    export = internal;
}

declare module "binary" {
    namespace internal {
        export class Binary {
        }

        export class ByteArray {
            constructor(contentOrLength:Binary|Array<any>|string|Number, charset?:string);
            length: any;
            byteAt(offset:Number):ByteArray;
            chartAt(offset:Number):ByteArray;
            charCodeAt(offset:Number):Number;
            concat(...args:any[]):ByteArray;
            copy(start:Number, end:Number, target:ByteArray, targetOffset:Number):void;
            decodeString(encoding:string):ByteArray;
            every(callback:Function, thisObj: any):boolean;
            filter(callback:Function, thisObj: any):ByteArray;
            forEach(fn:Function, thisObj: any);
            get(offset:Number):Number;
            indexOf(sequence:Number|Binary, start:Number, end: Number):Number;
            lastIndexOf(sequence:Number|Binary, start:Number, end:Number):Number;
            map(callback:Function, thisObj: any):ByteArray;
            pop():Number;
            push(...num:Number[]):Number;
            reduce(callback:Function, initialValue: any):any;
            reduceRight(callback:Function, initialValue: any):any;
            reverse():ByteArray;
            set(offset:Number, value:Number);
            shift():ByteArray;
            slice(begin:Number, end:Number):ByteArray;
            some(callback:Function, thisObj:any):boolean;
            sort(comparator:Function):ByteArray;
            splice(index:Number, howMay:Number, ...elements:Number[]):ByteArray;
            split(delimiter:Number|Binary, options:any);
            toArray():Number[];
            toByteArray():ByteArray;
            toByteString():ByteString;
            toString():string;
            unshift(...num:Number[]):Number;
            unwrap():any[];
            wrap(bytes:Binary[]):ByteArray;
        }

        export class ByteString {
            constructor();
            constructor(content:Binary|Array<any>|String);
            length: any;
            byteAt(offset: Number): ByteString;
            charAt(offset:Number): ByteString;
            charCodeAt(offset: Number): number;
            concat(...args:any[]):ByteString;
            copy(start:Number, end:Number, target:ByteArray, targetOffset:Number):void;
            decodeString(encoding:string):ByteString;
            get(offset:Number):number;
            indexOf(sequence:Number|Binary, start?:Number, end?: Number):number;
            lastIndexOf(sequence:Number|Binary, start?:Number, end?:Number):number;
            slice(begin?:Number, end?:Number):ByteString;
            split(delimiter:Number|Binary, options?:any);
            toArray():Number[];
            toByteString():ByteString;
            toString():string;
            unwrap():any[];
            wrap(bytes:Binary[]):ByteString;
            toByteArray();
        }

        export class String {
            private constructor();
            toByteString(charset:String): ByteArray;
            toByteArray(charset: string): ByteArray;
        }
    }
    export = internal;
}

declare module "assert" {
    function internal(value: any): any;
    namespace internal {
        export class ArgumentsError {
            message: string;
            stackTrace: any;
            constructor(message: string);
        }


        export class AssertionError {
            actual: any;
            expected: any;
            message: any;
            name: any;
            stackTrace: any;

        }

        export function deepEqual(actual:any, expected: any);
        export function equal(actual:any, expected: any);
        export function fail(options:any);
        export function isTrue(val:any, message?: string);
        export function isFalse(val:any, message?: string);
        export function isNaN(val:any, message?: string);
        export function isNotNaN(val:any, message?: string);
        export function isNotNull(val:any, message?: string);
        export function isNotUndefined(val:any, message?: string);
        export function isNull(val:any, message?: string);
        export function matches(value:string, expression:any);
        export function notDeepEqual(actual:any, expected:any);
        export function notEqual(actual:any, expected:any);
        export function notStrictEqual(actual:any, expected:any);
        export function ok(value:any);
        export function strictEqual(actual:any, expected:any);
        export function stringContains(value:string, pattern: string);
        export function throws(func: any, expectedError:any);
    }

    export = internal;

}
