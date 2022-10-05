const { defineConfig } = require('vite');

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: './index.html',
        attributions: './wiki/attributions.html',
        collaborations: './wiki/collaborations.html',
        communication: './wiki/communication.html',
        contribution: './wiki/contribution.html',
        description: './wiki/description.html',
        education: './wiki/education.html',
        engineering: './wiki/engineering.html',
        entrepeneurship: './wiki/entrepeneurship.html',
        experiments: './wiki/experiments.html',
        hardware: './wiki/hardware.html',
        humanPractices: './wiki/human-practices.html',
        implementation: './wiki/implementation.html',
        improve: './wiki/improve.html',
        inclusivity: './wiki/inclusivity.html',
        measurement: './wiki/measurement.html',
        model: './wiki/model.html',
        notebook: './wiki/notebook.html',
        partCollection: './wiki/part-collection.html',
        partnership: './wiki/partnership.html',
        parts: './wiki/parts.html',
        plant: './wiki/plant.html',
        proofOfConcept: './wiki/proof-of-concept.html',
        results: './wiki/results.html',
        safety: './wiki/safety.html',
        software: './wiki/software.html',
        sustainable: './wiki/sustainable.html',
        team: './wiki/team.html',
        // ...
        // List all files you want in your build
      },
    },
  },
});
