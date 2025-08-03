module.exports = {
  title: "Windsurf",
  link: "https://windsurf.com/",
  icon: "windsurf.png",
  description: "The AI Code Editor",
  run: async (kernel, info) => {
    return [{
      method: "shell.run",
      params: {
        message: "code .",
        path: info.cwd()
      }
    }]
  }
}
