let cmd = "";
process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
  console.log(data.toString());
  if (data.toString().trim() === "pwd") {
    cmd = process.cwd();
  }
  process.stdout.write(cmd);

  process.stdout.write("\nprompt > ");
});
