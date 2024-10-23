module.exports = {
  apps: [
    {
      name: 'xb',
      exec_interpreter: 'node',
      script: './bootstrap.js',
      // 不要使用npm的方式，否则会多出一个npm start的进程
      // script: 'npm',
      // args: ['run', 'start'],
      exec_mode: 'cluster',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '300M',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
