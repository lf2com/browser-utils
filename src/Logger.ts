/* eslint-disable no-console */
class Logger {
  readonly debug: (typeof console)['debug'] = console.debug;

  readonly log: (typeof console)['log'] = console.log;

  readonly warn: (typeof console)['warn'] = console.warn;

  readonly info: (typeof console)['info'] = console.info;

  readonly error: (typeof console)['error'] = console.error;

  readonly trace: (typeof console)['trace'] = console.trace;

  readonly group: (typeof console)['group'] = console.group;

  readonly groupCollapsed: (typeof console)['groupCollapsed'] =
    console.groupCollapsed;

  readonly groupEnd: (typeof console)['groupEnd'] = console.groupEnd;

  constructor(tag: string | null = null) {
    const binder: string[] = [];

    if (tag !== null) {
      binder.push(tag.toString());
    }

    this.debug = console.debug.bind(console, ...binder);
    this.log = console.log.bind(console, ...binder);
    this.warn = console.warn.bind(console, ...binder);
    this.info = console.info.bind(console, ...binder);
    this.error = console.error.bind(console, ...binder);
    this.trace = console.trace.bind(console, ...binder);
    this.group = console.group.bind(console, ...binder);
    this.groupCollapsed = console.groupCollapsed.bind(console, ...binder);
  }
}

Object.defineProperty(globalThis, 'Logger', { value: Logger });

export default Logger;
