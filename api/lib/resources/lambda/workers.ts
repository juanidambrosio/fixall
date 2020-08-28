import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigateway from '@aws-cdk/aws-apigateway';
import path = require('path');

export class WorkersLambda extends cdk.Construct {
  constructor(scope: cdk.Construct, id: string, props: apigateway.IResource) {
    super(scope, id);

    props.addMethod(
      'GET',
      new apigateway.LambdaIntegration(
        new lambda.Function(this, id + '-get', {
          functionName: id + '-get',
          runtime: lambda.Runtime.NODEJS_10_X,
          handler: 'getWorkers.handler',
          code: lambda.Code.fromAsset(path.join(__dirname, '../../functions')),
          memorySize: 1024,
          timeout: cdk.Duration.minutes(2),
        })
      ),
      { apiKeyRequired: false }
    );
  }
}
