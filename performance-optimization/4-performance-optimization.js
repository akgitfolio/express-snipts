const profiler = require('v8-profiler');

// Start profiling
profiler.startProfiling('my-profile');

// Run your application code

// Stop profiling
profiler.stopProfiling('my-profile');

// Save the profile to a file
profiler.exportProfile('my-profile.cpuprofile');
