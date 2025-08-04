module.exports = {
  title: "Windsurf",
  link: "https://windsurf.com/",
  icon: "windsurf.png",
  description: "The AI Code Editor",
  run: [{
    method: "exec",
    params: {
      message: "windsurf .",
      path: "{{args.cwd}}"
    }
  }]
}
