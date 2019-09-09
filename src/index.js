const { WebClient } = require('@slack/client')
const fetch = require('superagent')

// this is today's thing: xoxb-13649336358-548773248871-hWSfwMJJTCUaSZnMSHjinJil

const token = process.env.SLACK_ACCESS_TOKEN
const web = new WebClient(token)

async function get29() {
  const list = await web.conversations.list({ token: token, exclude_archived: true, types: "private_channel" })
  const class29 = list.channels.find(channel => channel.name == "code-29")
  // console.log(class29)
  return class29
}

async function post29(text) {
  const post = await web.chat.postMessage({ token: token, channel: "GCTBHGLQL", text: text, username: "Stan", icon_url: "https://cdn.vox-cdn.com/thumbor/9yAot9JLM_cX6thEgvOaZIxTr7Q=/0x0:4677x3280/1200x800/filters:focal(2346x1127:3094x1875)/cdn.vox-cdn.com/uploads/chorus_image/image/62282455/615970090.jpg.0.jpg" })
}

get29()
post29("Excelsior!")