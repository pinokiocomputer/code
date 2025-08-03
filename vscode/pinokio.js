module.exports = {
  title: "VS Code",
  link: "https://code.visualstudio.com/",
  icon: "vscode.png",
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
