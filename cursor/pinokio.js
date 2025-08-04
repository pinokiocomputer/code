module.exports = {
  title: "Cursor",
  link: "https://cursor.com",
  icon: "cursor.jpeg",
  description: "The AI Code Editor",
  run: [{
    when: "{{which('cursor')}}",
    method: "exec",
    params: {
      message: "cursor .",
      path: "{{args.cwd}}"
    }
  }, {
    when: "{{!which('cursor')}}",
    method: "notify",
    params: {
      html: "Cursor is not installed. Click to visit the Cursor homepage to download",
      href: "https://cursor.com"
    }
  }]
}
