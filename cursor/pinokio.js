module.exports = async (kernel, info) => {
  return {
    title: "Cursor",
    link: "https://cursor.com",
    icon: "cursor.jpeg",
    description: "The AI Code Editor",
    run: [{
      method: "shell.run",
      params: {
        message: "cursor .",
        path: info.cwd()
      }
    }]
  }
}
