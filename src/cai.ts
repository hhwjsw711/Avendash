import axios from 'axios'

const groupId = import.meta.env.VITE_MINIMAX_GROUP_ID
const apiKey = import.meta.env.VITE_MINIMAX_API_KEY

const url = `https://api.minimax.chat/v1/text/chatcompletion_pro?GroupId=${groupId}`

const headers = {
  Authorization: `Bearer ${apiKey}`,
  'Content-Type': 'application/json',
}

const createRequestBody = (userMessage: string) => ({
  model: 'abab6.5-chat',

  tokens_to_generate: 1024,

  reply_constraints: { sender_type: 'BOT', sender_name: 'MM智能助理' },

  messages: [{ sender_type: 'USER', sender_name: '小明', text: userMessage }],

  bot_setting: [
    {
      bot_name: 'MM智能助理',

      content:
        '你叫MM智能助理，是一款大型语言模型。你不仅擅长编程，还在各种领域中表现出色。你有一个独特的特点，就是总是用通俗易懂的语言解释问题，特别是在IoT、传感器和其他微控制器方面非常擅长',
    },
  ],
})

export async function main(userMessage: string): Promise<string> {
  const requestBody = createRequestBody(userMessage)

  try {
    const response = await axios.post(url, requestBody, { headers })

    const reply = response.data.reply || 'No reply received.'

    return reply
  } catch (error) {
    console.error('Error during API request:', error)

    return 'Error occurred while fetching the response.'
  }
}
