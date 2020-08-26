import * as apigateway from '@aws-cdk/aws-apigateway';
import * as cdk from '@aws-cdk/core';

export class ApiGateway extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, props?: string[] ) {
    super(scope, id);
    const api = new apigateway.RestApi(this, 'fixall-api');
    const workers = api.root.addResource('workers');
    workers.addMethod('GET');
    workers.addMethod('POST');
  }
}