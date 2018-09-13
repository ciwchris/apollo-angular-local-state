import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloBoostModule, APOLLO_BOOST_CONFIG, PresetConfig } from 'apollo-angular-boost';

import { resolvers, defaults, typeDefs } from './schema';

const apolloConfig: PresetConfig = {
  clientState: {
    resolvers,
    defaults,
    typeDefs
  }
}

@NgModule({
  imports: [HttpClientModule, ApolloBoostModule],
  providers: [{
    provide: APOLLO_BOOST_CONFIG,
    useValue: apolloConfig
  }]
})
export class GraphQLModule { }
