appengine-skeleton
==================

This is a generated application from the appengine-skeleton archetype.

See the [Google App Engine standard environment documentation][ae-docs] for more
detailed instructions.

[ae-docs]: https://cloud.google.com/appengine/docs/java/


* [Java 8](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
* [Maven](https://maven.apache.org/download.cgi) (at least 3.5)
* [Google Cloud SDK](https://cloud.google.com/sdk/) (aka gcloud)

## Setup

    gcloud init
    gcloud auth application-default login

## Maven
### Running locally

    mvn appengine:run

### Deploying

    mvn appengine:deploy

## Testing

    mvn verify

As you add / modify the source code (`src/main/java/...`) it's very useful to add
[unit testing](https://cloud.google.com/appengine/docs/java/tools/localunittesting)
to (`src/main/test/...`).  The following resources are quite useful:

* [Junit4](http://junit.org/junit4/)
* [Mockito](http://mockito.org/)
* [Truth](http://google.github.io/truth/)

## Updating to latest Artifacts

An easy way to keep your projects up to date is to use the maven [Versions plugin][versions-plugin].

    mvn versions:display-plugin-updates
    mvn versions:display-dependency-updates
    mvn versions:use-latest-versions

Note - Be careful when changing `javax.servlet` as App Engine Standard uses 3.1 for Java 8, and 2.5
for Java 7.

Our usual process is to test, update the versions, then test again before committing back.

[plugin]: http://www.mojohaus.org/versions-maven-plugin/

## To run datastore emulator
set GOOGLE_APPLICATION_CREDENTIALS=C:\Users\jainm\Documents\git\my-practice-interview\appengine-credentials\my-gaeapp-a93965c1d1ec.json

gcloud beta emulators datastore start --data-dir=C:\Users\jainm\Documents\git\explore-ui\as-wire\src\main\webapp\


## To deploy add to appengine with version
mvn clean package appengine:deploy -Dapp.deploy.projectId=my-gaeapp -Dapp.deploy.version=1-0-0

## To get help for appengine
mvn appengine:help

## Add below environment variable to connect to datastore emulator
GOOGLE_CLOUD_PROJECT=my-gaeapp
DATASTORE_EMULATOR_HOST=localhost:8081
LOCAL_DATASTORE_PORT=8081
##### Add above properties to pom.xml like below as environment
<environment>
     <GOOGLE_CLOUD_PROJECT>my-gaeapp</GOOGLE_CLOUD_PROJECT>
     <DATASTORE_EMULATOR_HOST>localhost:8081</DATASTORE_EMULATOR_HOST>
     <LOCAL_DATASTORE_PORT>8081</LOCAL_DATASTORE_PORT>
</environment>