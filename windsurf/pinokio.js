module.exports = async (kernel, info) => {
  return {
    title: "Windsurf",
    link: "https://windsurf.com/",
    icon: "windsurf.png",
    description: "The AI Code Editor",
    run: [{
      method: "shell.run",
      params: {
        message: "code .",
        path: info.cwd()
      }
    }]
  }
}
