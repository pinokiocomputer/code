module.exports = {
  title: "Cursor",
  link: "https://cursor.com",
  icon: "cursor.jpeg",
  description: "The AI Code Editor",
  run: [{
    method: "exec",
    params: {
      message: "cursor .",
      path: "{{args.cwd}}"
    }
  }]
}
