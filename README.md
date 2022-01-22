# On-stream to-do/checklist viewer

<img src="screenshot.png?raw=1" />

## Recommended: Deploying to Vercel

Click here [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fendel%2Ftwitch-onstream-todo-list&env=TODOIST_TOKEN,TODOIST_PROJECT_ID)

In the _"Configure Project"_ step you'll be asked for these Environment Variables:

### `TODOIST_TOKEN`

Open _"Settings"_ → _"Integrations"_, and scroll to the bottom, then copy the token to clipboard.

![](screenshot-settings.png?raw=1)

### `TODOIST_PROJECT_ID`

You may filter your tasks per project. (If specified, only 1 `"projectId"` can be used)

After you have your full Todoist task list showing up on Vercel, you can access the `/api` URL, and search for a `"projectId"` field in the tasks under the project you're interested in filtering, and use that value for the environment variable.

![](screenshot-projectid.png?raw=1)

## Alternative: Run it locally on your machine

Requirements:

- Git
- NodeJS
- Todoist account and API Token

How to use:

- Clone this repo
- Update the `.env` file with your [Todoist](https://todoist.com/) API Token
- `npm install` + `npm start`
- Add a "Browser Source" on OBS, and use this URL: http://localhost:8888

## License

MIT

