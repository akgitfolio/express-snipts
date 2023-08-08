const scenario = vegeta.createScenario('My scenario');
scenario.get('https://example.com/endpoint1').body('{"foo": "bar"}');
scenario.post('https://example.com/endpoint2').body('{"foo": "bar"}');
