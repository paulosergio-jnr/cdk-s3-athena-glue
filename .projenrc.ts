import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Paulo Pereira',
  authorAddress: 'paulospj@amazon.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: 'construct-s3-athena-glue',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/paulospj/construct-s3-athena-glue.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();