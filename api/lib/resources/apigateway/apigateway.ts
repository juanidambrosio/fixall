import * as apigateway from '@aws-cdk/aws-apigateway';
import * as cdk from '@aws-cdk/core';
import { WorkersApiGateway, JobsApiGateway } from './index';

export class ApiGateway extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, props?: string[]) {
    super(scope, id);
    const api = new apigateway.RestApi(this, 'fixall-api');
    const workers = new WorkersApiGateway(this, 'workers-api-gateway', api);
    const jobs = new JobsApiGateway(this, 'jobs-api-gateway', api);
  }
}
