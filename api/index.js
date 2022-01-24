const { TodoistApi } = require('@doist/todoist-api-typescript')

const TODOIST_TOKEN = process.env.TODOIST_TOKEN;
const TODOIST_PROJECT_ID = process.env.TODOIST_PROJECT_ID;
const TODOIST_SECTION_ID = process.env.TODOIST_SECTION_ID;

module.exports = async (request, response) => {
  if (!TODOIST_TOKEN) {
    response.send([
      { content: "Make sure to set the TODOIST_TOKEN environment variable." }
    ]);
    return;
  }

  const api = new TodoistApi(process.env.TODOIST_TOKEN);
  const tasks = (await api.getTasks()).
    filter((task) => !TODOIST_PROJECT_ID || task.projectId == TODOIST_PROJECT_ID).
    filter((task) => !TODOIST_SECTION_ID || task.sectionId == TODOIST_SECTION_ID).
    sort((a, b) => (a.order <= b.order) ? -1 : 1).
    sort((a, b) => (a.priority <= b.priority) ? 1 : -1);

  response.send(tasks);
};