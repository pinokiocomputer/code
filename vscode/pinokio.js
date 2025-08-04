module.exports = {
  title: "VS Code",
  link: "https://code.visualstudio.com/",
  icon: "vscode.png",
  description: "The AI Code Editor",
  run: [{
    method: "exec",
    params: {
      message: "code .",
      path: "{{args.cwd}}",
    }
  }]
}
