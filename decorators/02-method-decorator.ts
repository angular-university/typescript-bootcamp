
export enum LoggingLevel {
    ERROR,
    INFO,
    WARN,
    DEBUG,
    TRACE
}

const appMaxLoggingLevel = LoggingLevel.INFO;

export function Log(level: LoggingLevel): MethodDecorator {

    console.log(`Applying @Log Decorator`);

    return (target: any, propertyKey: string,
            descriptor: PropertyDescriptor) => {

        const originalFunction = descriptor.value;

        descriptor.value = function(...args: any[])  {

            if (level <= appMaxLoggingLevel) {
                console.log(`>> Log: ${propertyKey}, ${JSON.stringify(args)}`);
            }

            originalFunction.apply(this, args);
        }

    }
}






