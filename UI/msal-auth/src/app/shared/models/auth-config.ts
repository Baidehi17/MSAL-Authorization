import { LogLevel, Configuration, BrowserCacheLocation } from '@azure/msal-browser';
import { environment } from 'src/environments/environment';

export const msalConfig: Configuration = {
    auth: {
        clientId: environment.msalConfig.auth.clientId,
        authority: environment.msalConfig.auth.authority,
        redirectUri: 'http://localhost:4200',
        postLogoutRedirectUri: '/',
    },
    cache: {
        cacheLocation: BrowserCacheLocation.LocalStorage
    },
    system: {
        allowNativeBroker: false,
        loggerOptions: {
            loggerCallback(logLevel: LogLevel, message: string) {
                console.log(message);
            },
            logLevel: LogLevel.Info,
            piiLoggingEnabled: false
        },
    },
};

export const protectedResources = {
    candidateAPI: {
        endpoint: 'https://localhost:7220/api/Candidate',
        scopes: {
            read: ['api://01364194-ad65-4cba-a8df-15b0a17746a1/candidate.Read'],
            write: ['api://01364194-ad65-4cba-a8df-15b0a17746a1/candidate.ReadWrite'],
        },
    },
};

