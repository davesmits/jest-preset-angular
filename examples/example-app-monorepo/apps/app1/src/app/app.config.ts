import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { UserService } from 'libs/user/src/public-api';

import { routes } from './app.routes';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroService } from './model';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom([HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })]),
    HeroService,
    UserService,
  ],
};
