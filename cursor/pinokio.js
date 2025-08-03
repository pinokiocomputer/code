module.exports = {
  title: "Cursor",
  link: "https://cursor.com",
  icon: "cursor.jpeg",
  description: "The AI Code Editor",
  run: async (kernel, info) => {
    return [{
      method: "shell.run",
      params: {
        message: "cursor .",
        path: info.cwd()
      }
    }]
  }
}
