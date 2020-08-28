#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { FixallStack } from '../lib/stacks/fixall-stack';

const app = new cdk.App();
new FixallStack(app, 'fixall-stack');
