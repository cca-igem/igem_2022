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
        design: './wiki/design.html',
        education: './wiki/education.html',
        engineering: './wiki/engineering.html',
        experiments: './wiki/experiments.html',
        hardware: './wiki/hardware.html',
        humanPractices: './wiki/human-practices.html',
        implementation: './wiki/implementation.html',
        model: './wiki/model.html',
        notebook: './wiki/notebook.html',
        partnership: './wiki/partnership.html',
        parts: './wiki/parts.html',
        proofOfConcept: './wiki/proof-of-concept.html',
        results: './wiki/results.html',
        safety: './wiki/safety.html',
        team: './wiki/team.html',
        // ...
        // List all files you want in your build
      },
    },
  },
});
