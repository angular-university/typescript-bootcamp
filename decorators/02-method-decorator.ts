
export enum LoggingLevel {
    ERROR = "ERROR",
    INFO = "INFO",
    WARN = "WARN",
    DEBUG ="DEBUG",
    TRACE = "TRACE"
}

const appMaxLoggingLevel = LoggingLevel.DEBUG;

export function Log(level: LoggingLevel): MethodDecorator {

    console.log(`Applying @Log Decorator`);

    return (target: any, propertyKey: string,
            descriptor: PropertyDescriptor) => {



    }
}






