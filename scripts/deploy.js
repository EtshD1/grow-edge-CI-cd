const environment = process.env.ENVIRONMENT;

const configs = {
  staging: { url: 'https://staging.example.com', replicas: 1 },
  production: { url: 'https://example.com', replicas: 3 },
};

const config = configs[environment];

if (!config) {
  throw new Error(`Unknown environment: ${environment}`);
}

console.log(`Deploying to ${environment}`);
console.log(`URL: ${config.url}`);
console.log(`Replicas: ${config.replicas}`);