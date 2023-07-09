// Example: Update application from version 1.0.0 to 2.0.0
const oldVersion = '1.0.0';
const newVersion = '2.0.0';

if (semver.lt(oldVersion, newVersion)) {
  // Perform migration steps for version 1.0.0 to 2.0.0
}
