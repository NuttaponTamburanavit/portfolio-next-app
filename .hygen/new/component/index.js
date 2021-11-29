module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: "select",
        name: "category",
        message: "Which Atomic design level?",
        choices: ["atoms", "molecules", "organisms", "templates", "pages"],
      },
      {
        type: "input",
        name: "component_name",
        message: "What is the component name?",
      },
      {
        type: "input",
        name: "dir",
        message: "Where is the directory(Optional)",
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { category, component_name, dir } = answers;

      console.log({ dir, component_name, category });

      const path = `${category}/${dir ? `${dir}/` : ``}${component_name}`;
      const absPath = `components/${path}`;

      console.log(absPath);

      return { ...answers, path, absPath, category };
    });
  },
};
