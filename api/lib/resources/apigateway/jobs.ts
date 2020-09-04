import * as cdk from '@aws-cdk/core';
import * as apiGateway from '@aws-cdk/aws-apigateway';
import { JobsLambda } from '../lambda/jobs';

export class JobsApiGateway extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, props: apiGateway.IRestApi) {
    super(scope, id);

    const jobs = props.root.addResource('jobs');
    const lambdas = new JobsLambda(this, 'jobs-lambda', jobs);
  }
}
