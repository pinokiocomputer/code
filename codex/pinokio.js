module.exports = {
  title: "OpenAI Codex",
  icon: "openai.webp",
  link: "https://github.com/openai/codex",
  run: [{
    when: "{{platform === 'win32'}}",
    id: "run",
    method: "shell.run",
    params: {
      shell: "{{kernel.path('bin/miniconda/Library/bin/bash.exe')}}",
      conda: {
        skip: true
      },
      message: "npx -y @openai/codex -c shell_environment_policy.inherit=\"all\" --sandbox workspace-write --full-auto --ask-for-approval never {{args.prompt ? JSON.stringify(args.prompt) : ''}}",
      path: "{{args.cwd}}",
      input: true
    }
  }, {
    when: "{{platform !== 'win32'}}",
    id: "run",
    method: "shell.run",
    params: {
      message: "npx -y @openai/codex -c shell_environment_policy.inherit=\"all\" --sandbox workspace-write --full-auto --ask-for-approval never {{args.prompt ? JSON.stringify(args.prompt) : ''}}",
      path: "{{args.cwd}}",
      input: true
    }
  }]
}
