import * as cdk from '@aws-cdk/core';
import * as apiGateway from '@aws-cdk/aws-apigateway';
import { WorkersLambda } from '../lambda/workers';

export class WorkersApiGateway extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, props: apiGateway.IRestApi) {
    super(scope, id);

    const workers = props.root.addResource('workers');
    const lambdas = new WorkersLambda(this, 'workers-lambda', workers);
  }
}
