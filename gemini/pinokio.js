module.exports = {
  title: "Gemini CLI",
  icon: "gemini.jpeg",
  link: "https://github.com/google-gemini/gemini-cli",
  run: [{
    id: "run",
    method: "shell.run",
    params: {
      message: "npx -y https://github.com/google-gemini/gemini-cli",
      path: "{{args.cwd}}",
      buffer: 1024,
      input: true
    }
  }]
}
