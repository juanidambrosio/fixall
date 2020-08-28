import * as cdk from '@aws-cdk/core';
import { ApiGateway } from '../resources/apigateway/apigateway';

export class FixallStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const api = new ApiGateway(this, 'fixall-api');
  }
}
