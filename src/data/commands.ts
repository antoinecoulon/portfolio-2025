export type Command = {
  command: string
  output: string[]
  delay?: number
  completed?: boolean
}

export const commands: Command[] = [
    {
      command: "npm create next-app@latest mon-projet",
      output: [
        "✔ Would you like to use TypeScript? ... Yes",
        "✔ Would you like to use ESLint? ... Yes",
        "✔ Would you like to use Tailwind CSS? ... Yes",
        "Creating a new Next.js app in /mon-projet..."
      ],
      delay: 1000
    },
    {
      command: "cd mon-projet",
      output: [],
      delay: 500
    },
    {
      command: "npm install",
      output: [
        "added 342 packages, and audited 343 packages in 45s",
        "found 0 vulnerabilities"
      ],
      delay: 800
    },
    {
      command: "npm run dev",
      output: [
        "  ▲ Next.js 14.0.0",
        "  - Local:        http://localhost:3000",
        "  - Network:      http://192.168.1.100:3000",
        "",
        "✓ Ready in 2.3s"
      ],
      delay: 1200
    },
    {
      command: "git init",
      output: ["Initialized empty Git repository in /mon-projet/.git/"],
      delay: 300
    },
    {
      command: "git add .",
      output: [],
      delay: 200
    },
    {
      command: 'git commit -m "Initial commit"',
      output: [
        "[main (root-commit) f7f8a9b] Initial commit",
        "15 files changed, 1247 insertions(+)",
        "create mode 100644 package.json",
        "create mode 100644 README.md"
      ],
      delay: 600
    }
  ];