import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import { FixallStack } from '../lib/stacks/fixall-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new FixallStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
