mod artifact_file_contents;
mod batch_compile;
mod config;
mod generate_artifacts;
mod isograph_literals;
mod schema;
mod write_artifacts;

use batch_compile::{handle_compile_command, handle_watch_command, CliOptions};
use colored::Colorize;
use structopt::StructOpt;

fn main() {
    let opt = CliOptions::from_args();

    if opt.watch {
        handle_watch_command(opt.compile_options);
    } else {
        let result = handle_compile_command(opt.compile_options);

        match result {
            Ok(_) => eprintln!("{}", "Successfully compiled.\n".bright_green()),
            Err(err) => {
                eprintln!("{}\n{}", "Error when compiling.\n".bright_red(), err);
                std::process::exit(1);
            }
        }
    }
}
