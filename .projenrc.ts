import { awscdk } from 'projen';
import { DependabotScheduleInterval } from 'projen/lib/github/dependabot';
import { ProjectType } from 'projen/lib/project';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Paulo Pereira',
  authorAddress: 'paulospj@amazon.com',
  cdkVersion: '2.1.0',
  projectType: ProjectType.LIB,
  deps: ['@aws-cdk/core'],
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: 'cdk-s3-athena-glue',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/paulosergio-jnr/cdk-s3-athena-glue.git',
  gitignore: [
    '.idea',
  ],
  docgen: true,
  eslint: true,
  dependabot: true,
  dependabotOptions: {
    ignoreProjen: true,
    scheduleInterval: DependabotScheduleInterval.WEEKLY,
  },
});

project.synth();
