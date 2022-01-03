require('dotenv').config();

import Fastify from 'fastify'
import fastifyStatic from 'fastify-static';
import path from 'path'
import { TodoistApi } from '@doist/todoist-api-typescript'

const api = new TodoistApi(process.env.TODOIST_TOKEN!);
const fastify = Fastify({ logger: true })

fastify.register(fastifyStatic, {
  root: path.join(__dirname, "..", "public"),
  prefix: '/public/',
})

// Declare a route
fastify.get('/', async (request, reply) => {
  return reply.sendFile('index.html');
});

fastify.get('/Typo_Hoop_Regular.otf', async (request, reply) => {
  return reply.sendFile('Typo_Hoop_Regular.otf');
});

// Declare a route
fastify.get('/api', async (request, reply) => {
  const tasks = (await api.getTasks()).
    filter((task) => task.projectId === 2261610951).
    // filter((task) => !task.completed).
    sort((a, b) => (a.order <= b.order) ? -1 : 1).
    sort((a, b) => (a.priority <= b.priority) ? 1 : -1);

  reply.send(tasks);
});

fastify.listen(process.env.PORT || 8888);
