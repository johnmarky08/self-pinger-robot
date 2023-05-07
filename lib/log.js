import chalk from "chalk";

export function up(index, data) {
  console.log(
    chalk.bold.hex("#00FF00")("[ MONITOR " + (index + 1) + " ] ") +
      chalk.bold.hex("#21B6A8")(data)
  );
}

export function err(index, data) {
  console.log(
    chalk.bold.hex("#FF0000")("[ MONITOR " + (index + 1) + " - DOWN ] ") +
      chalk.bold.hex("#E68C9B")(data)
  );
}

export function load(data) {
  console.log(
    chalk.bold.hex("#E89923")("[ PINGER ] 》 ") +
      chalk.bold.hex("#F0C28B")(data)
  );
}

export function log(data) {
  console.log(chalk.bold.hex("#E89923")(data));
}
