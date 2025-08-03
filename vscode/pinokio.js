module.exports = async (kernel, info) => {
  return {
    title: "VS Code",
    link: "https://code.visualstudio.com/",
    icon: "vscode.png",
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
