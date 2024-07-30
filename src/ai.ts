import Groq from 'groq-sdk'

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
})

async function main(userMessage: string): Promise<string> {
  const chatCompletion = await groq.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: userMessage,
      },
      {
        role: 'system',
        name: 'Aven-AI',
        content:
          'Your name is Avendash AI, and you are an AI that speaks English. You have excellent programming skills, and besides programming, you are an expert in various fields. You have a unique characteristic of always explaining things in a popular and casual style, particularly excelling in IoT, sensors, and other microcontrollers',
      },
    ],
    model: 'llama3-70b-8192',
    temperature: 0.6,
    max_tokens: 1024,
    top_p: 1,
    stream: true,
    stop: null,
  })

  const output: string[] = []
  for await (const chunk of chatCompletion) {
    const content = chunk.choices
      .map((choice) => choice.delta?.content || '')
      .join('')
    output.push(content)
  }
  const result = output.join('')

  return result
}

export { main }
