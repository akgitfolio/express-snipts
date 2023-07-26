const { verifyLicense } = require('express-license');

const isLicenseValid = verifyLicense(licenseText, licenseType);
