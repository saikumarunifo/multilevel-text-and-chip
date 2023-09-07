#!/usr/bin/env node

const cdk = require('aws-cdk-lib');
const logs = require('aws-cdk-lib/aws-logs')
const { CGateWebAppCdkStack } = require('../lib/cgate-webapp-cdk-stack');
const { SentinelWebappResourcesStack } = require('../lib/sentinel-webapp-resource-stack')
const { EnvironmentType, TagName } = require('@unifo/cdk-commons');

/************************* ACCOUNT DETAILS *****************************/
const unifoLabs = { account: '829865996979', region: 'ap-south-1' };
const unifoDev = { account: '704816378710', region: 'ap-south-1' };
const unifoProd = { account: '505689057566', region: 'ap-south-1' };
const unifoQe = { account: '019405866781', region: 'ap-south-1' };
const unifoDemo = { account: '037230447212', region: 'ap-south-1' };
const unifoUat = { account: '460960747148', region: 'ap-south-1' };

const environmentId = 'DEV01'
const app = new cdk.App();

const imageVersion = app.node.tryGetContext('imgVer');

/************************* APP-STACK-PROPS ****************************/
const devProps = {
    env: unifoDev,
    environmentType: EnvironmentType.DEVELOPMENT,
    environmentId: environmentId,
    cGateVpcId: 'vpc-0d9178cc1a715fd4a',
    cGateWebWorkerEcsClusterName: 'CGateWebInfraDevStack-CGateWebWorkerCluster9FEF587B-IUm9HWCkUh8U',
    cGateWebAppEcrRepoArn: 'arn:aws:ecr:ap-south-1:704816378710:repository/unifo/cgate-app',
    ecsDesiredTaskCount: 2,
    containerMemHardLimitMib: 256,
    containerMemSoftLimitMib: 256,
    containerCpu: 256,
    containerLogStreamPrefix: 'CGateWebApp',
    containerPort: 80,
    discoveryNsServiceName: 'dev.cgate.app',
    imageVersion,
    logRetentionDuration: logs.RetentionDays.ONE_WEEK,
    loadBalancerArn: 'arn:aws:elasticloadbalancing:ap-south-1:704816378710:loadbalancer/app/CGateAppLb/56a1e857116affa8',
    lbSecurityGroupId: 'sg-0ebc06f7f77a9975b',
    albHttpsListenerArn: 'arn:aws:elasticloadbalancing:ap-south-1:704816378710:listener/app/CGateAppLb/56a1e857116affa8/4f1647eb9dc38e5b',
    albListenerHostHeader: ['app.allegro.sentinel.unifo.in'],
    clusterInstanceSgId: 'sg-0fa55ff9bc3157099',
    targetGroupPriority: 20,
};




const prodGeneralProps = {
    env: unifoProd,
    environmentType: 'Production',
    cGateVpcId: 'vpc-063a0dbd8efdd82c4',
    cGateWebWorkerEcsClusterName: 'CGateWebInfraStackProd-CGateWebWorkerCluster9FEF587B-ntUfskr9sWUT',
    ecsDesiredTaskCount: 4,
    containerMemHardLimitMib: 256,
    containerMemSoftLimitMib: 256,
    containerCpu: 512,
    containerPort: 80,
    imageVersion,
    logRetentionDuration: logs.RetentionDays.ONE_MONTH,
    loadBalancerArn: 'arn:aws:elasticloadbalancing:ap-south-1:505689057566:loadbalancer/app/CGateAppLb/c6a10d8c0371e123',
    lbSecurityGroupId: 'sg-041698ec75d043141',
    clusterInstanceSgId: 'sg-05528be14628fad94'
};

const prodDaasProps = {
    ...prodGeneralProps,
    environmentId: 'PROD-DAAS',
    cGateWebAppEcrRepoArn: 'arn:aws:ecr:ap-south-1:505689057566:repository/unifo/cgate-app',
    containerLogStreamPrefix: 'CGateWebAppDaas',
    // discoveryNsServiceName: 'prod.cgate.app',
    albHttpsListenerArn: 'arn:aws:elasticloadbalancing:ap-south-1:505689057566:listener/app/CGateAppLb/c6a10d8c0371e123/f3d922ec6ddaaf9a',
    loadBalancerDnsName: 'dualstack.cgateapplb-131454886.ap-south-1.elb.amazonaws.com',
    albListenerHostHeader: ['daas.sentinel.unifo.in'],
    targetGroupPriority: 20,
}

const prodNipponProps = {
    ...prodGeneralProps,
    environmentId: 'PROD-NIPPON',
    cGateWebAppEcrRepoArn: 'arn:aws:ecr:ap-south-1:505689057566:repository/unifo/cgate-app-nippon',
    containerLogStreamPrefix: 'CGateWebAppDaasNippon',
    albHttpsListenerArn: 'arn:aws:elasticloadbalancing:ap-south-1:505689057566:listener/app/CGateAppLb/c6a10d8c0371e123/f3d922ec6ddaaf9a',
    loadBalancerDnsName: 'dualstack.cgateapplb-131454886.ap-south-1.elb.amazonaws.com',
    albListenerHostHeader: ['nippon.sentinel.unifo.in'],
    targetGroupPriority: 10,
}
const prod7seasProps = {
    ...prodGeneralProps,
    environmentId: 'PROD-7seas',
    cGateWebAppEcrRepoArn: 'arn:aws:ecr:ap-south-1:505689057566:repository/unifo/sentinel-prod-7seas-app',
    containerLogStreamPrefix: 'SentinalWebAppProd7seas',
    albHttpsListenerArn: 'arn:aws:elasticloadbalancing:ap-south-1:505689057566:listener/app/CGateAppLb/c6a10d8c0371e123/f3d922ec6ddaaf9a',
    loadBalancerDnsName: 'dualstack.cgateapplb-131454886.ap-south-1.elb.amazonaws.com',
    albListenerHostHeader: ['7seas.sentinel.unifo.in'],
    targetGroupPriority: 22,
}
const qeProps = {
    env: unifoQe,
    environmentType: EnvironmentType.QE,
    environmentId: 'DaaS-UAT01',
    cGateVpcId: 'vpc-0778f2c3ab48e2a36',
    cGateWebWorkerEcsClusterName: 'CGateWebInfraQeStack-CGateWebWorkerCluster9FEF587B-nuDOac9SmCMb',
    cGateWebAppEcrRepoArn: 'arn:aws:ecr:ap-south-1:019405866781:repository/unifo/cgate-app',
    ecsDesiredTaskCount: 2,
    containerMemHardLimitMib: 256,
    containerMemSoftLimitMib: 256,
    containerCpu: 256,
    containerLogStreamPrefix: 'CGateWebAppDaasQe',
    containerPort: 80,
    discoveryNsServiceName: 'qe.cgate.app',
    imageVersion,
    logRetentionDuration: logs.RetentionDays.ONE_WEEK,
    loadBalancerArn: 'arn:aws:elasticloadbalancing:ap-south-1:019405866781:loadbalancer/app/CGateAppLb/9e57a59464280905',
    lbSecurityGroupId: 'sg-0e959803cfd941af7',
    albHttpsListenerArn: 'arn:aws:elasticloadbalancing:ap-south-1:019405866781:listener/app/CGateAppLb/9e57a59464280905/9ab3914c6d830650',
    albListenerHostHeader: ['app.test.sentinel.unifo.in'],
    clusterInstanceSgId: 'sg-0dc1f7bf294c14d0e',
    targetGroupPriority: 20,
}

const uatProps = {
    env: unifoUat,
    environmentType: 'UAT',
    environmentId: 'UAT',
    cGateVpcId: 'vpc-0ded74b33fc09936d',
    cGateWebWorkerEcsClusterName: 'SentinelWebInfraUatStack-SentinelWebWorkerClusterC5B6799B-sl1qVjueM6oU',
    cGateWebAppEcrRepoArn: 'arn:aws:ecr:ap-south-1:460960747148:repository/unifo/sentinel-uat-app',
    ecsDesiredTaskCount: 2,
    containerMemHardLimitMib: 256,
    containerMemSoftLimitMib: 256,
    containerCpu: 512,
    containerLogStreamPrefix: 'SentinelWebAppUat',
    containerPort: 80,
    discoveryNsServiceName: 'uat.sentinel.app',
    imageVersion,
    logRetentionDuration: logs.RetentionDays.ONE_WEEK,
    loadBalancerArn: 'arn:aws:elasticloadbalancing:ap-south-1:460960747148:loadbalancer/app/SentinelExternalAlb/54e9f6f29574db9b',
    lbSecurityGroupId: 'sg-0e131c01905604d64',
    albHttpsListenerArn: 'arn:aws:elasticloadbalancing:ap-south-1:460960747148:listener/app/SentinelExternalAlb/54e9f6f29574db9b/9d1156d7bcb1e51a',
    albListenerHostHeader: ['uat.sentinel.unifo.in'],
    clusterInstanceSgId: 'sg-09c6c51ba905a8259',
    targetGroupPriority: 1,
}

const demoProps = {
    env: unifoProd,
    environmentType: EnvironmentType.DEMO,
    environmentId: 'Demo',
    cGateVpcId: 'vpc-063a0dbd8efdd82c4',
    cGateWebWorkerEcsClusterName: 'CGateWebInfraStackProd-CGateWebWorkerCluster9FEF587B-ntUfskr9sWUT',
    cGateWebAppEcrRepoArn: 'arn:aws:ecr:ap-south-1:505689057566:repository/unifo/sentinel-app-demo',
    ecsDesiredTaskCount: 2,
    containerMemHardLimitMib: 256,
    containerMemSoftLimitMib: 256,
    containerCpu: 512,
    containerLogStreamPrefix: 'SentinelWebAppDemo',
    containerPort: 80,
    discoveryNsServiceName: 'demo.sentinel.app',
    imageVersion,
    logRetentionDuration: logs.RetentionDays.ONE_WEEK,
    loadBalancerArn: 'arn:aws:elasticloadbalancing:ap-south-1:505689057566:loadbalancer/app/CGateAppLb/c6a10d8c0371e123',
    lbSecurityGroupId: 'sg-041698ec75d043141',
    albHttpsListenerArn: 'arn:aws:elasticloadbalancing:ap-south-1:505689057566:listener/app/CGateAppLb/c6a10d8c0371e123/f3d922ec6ddaaf9a',
    albListenerHostHeader: ['demo.sentinel.unifo.in'],
    clusterInstanceSgId: 'sg-05528be14628fad94',
    targetGroupPriority: 26,
    loadBalancerDnsName: 'dualstack.cgateapplb-131454886.ap-south-1.elb.amazonaws.com',
}

const demoResourcesProps = {
    env: unifoDemo,
    environmentType: EnvironmentType.DEMO,
    environmentId: 'Demo',
    demoAccountNo: '037230447212',
};

const ResourcesProps7seas = {
    env: unifoProd,
    environmentType: 'Production',
    environmentId: 'PROD-7seas',

};
const uatResourcesProps = {
    env: unifoUat,
    environmentType: 'UAT',
    environmentId: 'UAT',
    uatAccountNo: '460960747148',
    fileDataBucketName: 'sentinel-uat-job-docs',
}





const StackProps = {stack: 'CGateWebAppDevStack', props: devProps, appName: 'CGateWebapp'}
// const StackProps = {stack: 'CGateWebAppDaasProdStack', props: demoProps, appName: 'CGateDaasWebapp'}
// const StackProps = {stack: 'SentinelWebAppDemoStack', props: prodDaasProps, appName: 'SentinelWebappDemo'}
// const StackProps = {stack: 'CGateWebAppNipponProdStack', props: prodNipponProps, appName: 'CGateNipponWebapp'}
// const StackProps = {stack: 'SentinelWebApp7seasProdStack', props: prod7seasProps, appName: 'Sentinel7seasWebapp'}
// const StackProps = {stack: 'cGateWebAppQeStack', props: qeProps, appName: 'CGateWebapp'}
// const StackProps = {stack: 'SentinelWebAppUatStack', props: uatProps, appName: 'SentinelWebApp'}


const Sentinel = {stack: 'SentinelWebappResourcesProd7seasStack', props: ResourcesProps7seas, appName: 'SentinelWebappResourcesProd7seasStack'}
// const Sentinel = {stack: 'SentinelWebappResourcesUatStack', props: uatResourcesProps, appName: 'SentinelWebappResourcesUatStack'}


 




// /******************************** APP-STACK *******************************************/

const cGateWebAppDevStack = new CGateWebAppCdkStack(app, StackProps.stack, StackProps.props);
cdk.Tags.of(cGateWebAppDevStack).add(TagName.APP_NAME, StackProps.appName);
cdk.Tags.of(cGateWebAppDevStack).add(TagName.APP_OWNER, 'vimal.roy@unifo.in');
cdk.Tags.of(cGateWebAppDevStack).add(TagName.ENVIRONMENT_TYPE, StackProps.props.environmentType);
cdk.Tags.of(cGateWebAppDevStack).add(TagName.ENVIRONMENT_ID, StackProps.props.environmentId);
cdk.Tags.of(cGateWebAppDevStack).add("unifo:cdk:version-no", imageVersion);


const sentinelWebappResourcesDemoStack = new SentinelWebappResourcesStack(app, Sentinel.stack, Sentinel.props);
cdk.Tags.of(sentinelWebappResourcesDemoStack).add(TagName.APP_NAME, Sentinel.appName);
cdk.Tags.of(sentinelWebappResourcesDemoStack).add(TagName.APP_OWNER, 'vimal.roy@unifo.in');
cdk.Tags.of(sentinelWebappResourcesDemoStack).add(TagName.ENVIRONMENT_TYPE, Sentinel.props.environmentType);
cdk.Tags.of(sentinelWebappResourcesDemoStack).add(TagName.ENVIRONMENT_ID, Sentinel.props.environmentId);

