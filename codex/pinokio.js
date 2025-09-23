module.exports = {
  title: "OpenAI Codex",
  icon: "openai.webp",
  link: "https://github.com/openai/codex",
  run: [{
    id: "run",
    method: "shell.run",
    params: {
      message: "npx -y @openai/codex -c shell_environment_policy.inherit=\"all\" {{args.prompt ? JSON.stringify(args.prompt) : ''}}",
      path: "{{args.cwd}}",
      input: true
    }
  }]
}
