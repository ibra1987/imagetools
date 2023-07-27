module.exports = {
    apps: [
      {
        name: 'imagetools', // Change this to a unique name for your app
        script: 'npm start', // Path to the Next.js binary
        args: 'start', // Arguments to pass to the script (in this case, 'start')
        instances: 1, // Set to 1 to run only one instance
        autorestart: true, // Automatically restart the app if it crashes
        watch: false, // Set to true if you want to watch for file changes and automatically reload the app (useful during development)
  
        env: {
          NODE_ENV: 'production', // Set the Node.js environment to production
        },
      },
    ],
  };
  